// Detects a new deployment by comparing version.json served by the host with
// the version recorded when the app last loaded/applied an update.
// Notifies the Flutter app via a global flag AND postMessage('NEW_VERSION_AVAILABLE').
//
// Note: since Flutter 3.44 flutter_service_worker.js skips waiting,
// unregisters itself and force-reloads clients, so update detection must NOT
// rely on a waiting/installed service worker state.

var _versionStorageKey = 'iranexchange_deployed_version';
var _updateNotified = false;
var _lastCheckMs = 0;
var _minCheckIntervalMs = 30000;
window.__swUpdateAvailable = false;

function _fetchVersionJson() {
  return fetch('version.json?v=' + Date.now(), { cache: 'no-store' })
    .then(function (response) {
      return response.ok ? response.json() : null;
    })
    .catch(function (_) {
      return null;
    });
}

function _getStoredVersion() {
  try {
    return window.localStorage.getItem(_versionStorageKey);
  } catch (_) {
    return null;
  }
}

function _setStoredVersion(version) {
  try {
    window.localStorage.setItem(_versionStorageKey, version);
  } catch (_) {}
}

function _numericPrefix(value) {
  var match = String(value == null ? '' : value).match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

function _versionParts(version) {
  return String(version == null ? '' : version)
    .split('.')
    .map(_numericPrefix);
}

function _compareDeployedVersions(a, b) {
  var aParts = _versionParts(a && a.version);
  var bParts = _versionParts(b && b.version);
  var length = Math.max(aParts.length, bParts.length);
  for (var i = 0; i < length; i++) {
    var diff = (aParts[i] || 0) - (bParts[i] || 0);
    if (diff !== 0) return diff > 0 ? 1 : -1;
  }

  var aBuild = _numericPrefix(a && a.build_number);
  var bBuild = _numericPrefix(b && b.build_number);
  if (aBuild !== bBuild) return aBuild > bBuild ? 1 : -1;
  return 0;
}

function checkForServiceWorkerUpdate() {
  if (!window.fetch) return;

  var now = Date.now();
  if (_lastCheckMs !== 0 && now - _lastCheckMs < _minCheckIntervalMs) return;
  _lastCheckMs = now;

  _fetchVersionJson().then(function (versionInfo) {
    if (!versionInfo) return;
    var currentVersion = JSON.stringify(versionInfo);
    var storedVersion = _getStoredVersion();

    if (!storedVersion) {
      _setStoredVersion(currentVersion);
      return;
    }

    console.log('[sw-check] stored version:', storedVersion);
    console.log('[sw-check] server version: ', currentVersion);

    var comparison = 0;
    try {
      comparison = _compareDeployedVersions(versionInfo, JSON.parse(storedVersion));
    } catch (_) {
      comparison = currentVersion === storedVersion ? 0 : 1;
    }

    if (comparison > 0 && !_updateNotified) {
      _updateNotified = true;
      window.__swUpdateAvailable = true;
      _postMessage('NEW_VERSION_AVAILABLE');
    } else if (comparison < 0) {
      _setStoredVersion(currentVersion);
    }
  });
}

function activateWaitingServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.getRegistration().then(function (registration) {
    if (registration && registration.waiting) {
      registration.waiting.postMessage('skipWaiting');
    }
  });
}

function stampLatestDeployedVersion() {
  return _fetchVersionJson().then(function (versionInfo) {
    if (versionInfo) _setStoredVersion(JSON.stringify(versionInfo));
  });
}

function clearServiceWorkersAndCachesThenReload() {
  var unregisterPromise = Promise.resolve();
  if ('serviceWorker' in navigator && navigator.serviceWorker.getRegistrations) {
    unregisterPromise = navigator.serviceWorker
      .getRegistrations()
      .then(function (registrations) {
        return Promise.all(
          registrations.map(function (registration) {
            return registration.unregister();
          }),
        );
      })
      .catch(function (_) {});
  }

  var clearCachesPromise = Promise.resolve();
  if ('caches' in window && caches.keys) {
    clearCachesPromise = caches
      .keys()
      .then(function (keys) {
        return Promise.all(
          keys.map(function (key) {
            return caches.delete(key);
          }),
        );
      })
      .catch(function (_) {});
  }

  var stampPromise = stampLatestDeployedVersion();

  Promise.all([unregisterPromise, clearCachesPromise, stampPromise]).finally(
    function () {
      var baseHref = '/';
      var baseEl = document.querySelector('base');
      if (baseEl) baseHref = baseEl.getAttribute('href') || '/';
      window.location.replace(baseHref + '?v=' + Date.now());
    },
  );
}

function isUpdateAvailable() {
  return window.__swUpdateAvailable === true;
}

function _postMessage(type) {
  window.postMessage({ type: type }, '*');
}
