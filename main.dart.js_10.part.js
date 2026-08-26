((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cH4(){var x,w
$.J()
x=$.r
if(x==null)x=$.r=D.k
w=y.B
w=new B.anp(x.L("server_iran_exchange",y.e),A.a([],y.u),A.mp(-1),A.a([],y.F),A.a([],y.A),A.a([],y.z),A.d_(null,null,null,y.X,y.x),new A.bG(w),new A.bG(w),!1,!1)
w.eh()
return w},
anp:function anp(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.ax=d
_.ay=e
_.ch="null"
_.CW=f
_.cx=g
_.cy=h
_.dE$=i
_.dB$=j
_.e8$=k
_.dM$=l
_.dX$=m
_.e9$=n},
b6X:function b6X(){},
b6Y:function b6Y(d,e){this.a=d
this.b=e},
b6Z:function b6Z(d,e){this.a=d
this.b=e},
b7_:function b7_(d,e){this.a=d
this.b=e},
b6W:function b6W(){},
d1_(d){var x,w,v,u,t,s,r,q,p,o,n="documentId",m="question",l="faqCategory",k=y.N,j=A.M(d.h(0,n),!1,k)
if(j==null)j=""
x=A.M(d.h(0,"coinName"),!1,k)
if(x==null)x=""
if(d.h(0,m)!=null){w=J.eq(y.j.a(d.h(0,m)),new B.b73(),y.v)
w=A.a7(w,w.$ti.i("az.E"))}else w=A.a([],y.I)
if(d.h(0,l)!=null){v=d.h(0,l)
u=A.M(v.h(0,n),!1,k)
if(u==null)u=""
t=A.M(v.h(0,"slug"),!1,k)
if(t==null)t=""
s=A.M(v.h(0,"title"),!1,k)
if(s==null)s=""
v=v.h(0,"icon")
v=A.M(v==null?null:J.w(v,"name"),!0,k)
v=$.cSJ().h(0,v)
v=new B.Os(u,t,s,v==null?D.aj2:v)}else v=null
if(d.h(0,"faqType")!=null){u=d.h(0,"faqType")
t=J.b5(u)
s=A.M(t.h(u,"id"),!1,y.H)
if(s==null)s=0
r=A.M(t.h(u,n),!1,k)
if(r==null)r=""
q=A.M(t.h(u,"slug"),!1,k)
if(q==null)q=""
p=A.M(t.h(u,"createdAt"),!1,k)
if(p==null)p=""
o=A.M(t.h(u,"updatedAt"),!1,k)
if(o==null)o=""
k=A.M(t.h(u,"publishedAt"),!1,k)
k=new B.anq(s,r,q,p,o,k==null?"":k)}else k=null
return new B.yn(j,w,x,v,k)},
yn:function yn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b73:function b73(){},
Os:function Os(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
tM:function tM(d,e,f){this.a=d
this.b=e
this.c=f},
anq:function anq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
k7:function k7(d,e){this.a=d
this.b=e}},C,E,F
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[63],B)
C=c[128]
E=c[85]
F=c[123]
B.anp.prototype={
Zx(d){var x,w,v
D.b.a2(this.ay)
x=d.length
w=J.e8(x,y.y)
for(v=0;v<x;++v)w[v]=!1
this.ay=w},
IS(d){return this.aMM(d)},
aMM(d){var x=0,w=A.k(y.y),v,u=this,t,s,r,q
var $async$IS=A.f(function(e,f){if(e===1)return A.h(f,w)
for(;;)switch(x){case 0:q={}
q.a=!1
t=d.b
if(t.a!==0){s=A.E(t).i("f_<1,2>")
r=A.rx(new A.f_(t,s),new B.b6X(),s.i("K.E"),y.N).bR(0,"&")}else r=""
r+=r.length===0?"":"&"
r+=r.length===0?"":"&"
t=d.a
if(t!=null)r+="populate="+t
t=A.bV()
s=u.ax.gbp()
x=3
return A.e(t.d1(A.br().j8(!1),D.al,new B.b6Y(q,u),new B.b6Z(q,u),new B.b7_(q,u),s.z+"faqs?"+r),$async$IS)
case 3:v=q.a
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$IS,w)}}
B.yn.prototype={
byH(d){var x,w,v,u,t,s=this,r=s.d,q=null
if(r==null)r=q
else{q=r.a
x=r.b
w=r.c
r=r.d
r=new B.Os(q,x,w,r)}q=s.e
x=null
if(q==null)q=x
else{x=q.a
w=q.b
v=q.c
u=q.d
t=q.e
q=q.f
q=new B.anq(x,w,v,u,t,q)}return new B.yn(s.a,d,s.c,r,q)}}
B.Os.prototype={}
B.tM.prototype={}
B.anq.prototype={}
B.k7.prototype={
I(){return"StrapiFaqFilterType."+this.b},
bPY(d){return"["+this.b+"][slug][$eq]="+d}}
var z=a.updateTypes(["yn(@)","tM(@)"])
B.b6X.prototype={
$1(d){return"filters"+("["+d.a.b+"][slug][$eq]="+d.b)},
$S:1337}
B.b6Y.prototype={
$1(d){this.b.ch=A.ax(d,"message")
this.a.a=!1},
$S:5}
B.b6Z.prototype={
$1(d){this.b.ch=A.ax(d,"message")
this.a.a=!1},
$S:3}
B.b7_.prototype={
$1(d){var x,w,v,u,t,s,r=this.b
D.b.a2(r.cx)
x=J.eq(y.j.a(J.w(d.a,"data")),new B.b6W(),y.J)
x=A.a7(x,x.$ti.i("az.E"))
r.cx=x
x=r.cy
D.b.a2(x)
for(r=r.cx,w=r.length,v=0;v<r.length;r.length===w||(0,A.T)(r),++v){u=r[v].d
if(u!=null)x.push(u)}r=A.D(y.N,y.K)
for(w=x.length,v=0;v<x.length;x.length===w||(0,A.T)(x),++v){t=x[v]
r.n(0,t.a,t)}w=r.$ti.i("bX<2>")
s=A.a7(new A.bX(r,w),w.i("K.E"))
D.b.a2(x)
D.b.A(x,s)
this.a.a=!0},
$S:6}
B.b6W.prototype={
$1(d){return B.d1_(d)},
$S:z+0}
B.b73.prototype={
$1(d){var x,w,v=A.M(d.h(0,"id"),!1,y.H)
if(v==null)v=0
x=y.N
w=A.M(d.h(0,"question"),!1,x)
if(w==null)w=""
x=A.M(d.h(0,"answer"),!1,x)
return new B.tM(v,w,x==null?"":x)},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.anp,A.m5)
w(A.dh,[B.b6X,B.b6Y,B.b6Z,B.b7_,B.b6W,B.b73])
w(A.H,[B.yn,B.Os,B.tM,B.anq])
x(B.k7,A.tg)})()
A.dg(b.typeUniverse,JSON.parse('{"anp":{"at":[]}}'))
var y=(function rtii(){var x=A.V
return{J:x("yn"),K:x("Os"),v:x("tM"),B:x("bG<~>"),F:x("x<yn>"),A:x("x<Os>"),I:x("x<tM>"),u:x("x<C>"),z:x("x<~()?>"),j:x("O<@>"),x:x("O<~()>"),e:x("nh"),N:x("n"),y:x("C"),X:x("H?"),H:x("aU")}})();(function constants(){C.aiM=new A.aJ(59683,"Iconsax",null,!1)
C.aiN=new A.aJ(59687,"Iconsax",null,!1)
C.aiO=new A.aJ(59689,"Iconsax",null,!1)
C.aiP=new A.aJ(59691,"Iconsax",null,!1)
C.aiQ=new A.aJ(59693,"Iconsax",null,!1)
C.aiU=new A.aJ(59859,"Iconsax",null,!1)
C.wU=new A.aJ(59863,"Iconsax",null,!1)
C.aiX=new A.aJ(59953,"Iconsax",null,!1)
C.aj_=new A.aJ(6e4,"Iconsax",null,!1)
C.aj0=new A.aJ(60001,"Iconsax",null,!1)
C.aj1=new A.aJ(60010,"Iconsax",null,!1)
C.aj3=new A.aJ(60046,"Iconsax",null,!1)
C.aj4=new A.aJ(60053,"Iconsax",null,!1)
C.ajb=new A.aJ(60240,"Iconsax",null,!1)
C.ajh=new A.aJ(60387,"Iconsax",null,!1)
C.ajs=new A.aJ(60724,"Iconsax",null,!1)
C.ajF=new A.aJ(61165,"Iconsax",null,!1)
C.ajR=new A.aJ(61610,"Iconsax",null,!1)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dqQ","cSJ",()=>A.N(["MoneyRecive",D.wX,"MoneySend",D.wY,"DiscountShape",C.ajb,"FingerCricle",C.ajh,"AddCircle",E.pI,"AddSquare",D.H_,"Alarm",C.aiM,"AlignHorizontally",C.aiN,"AlignLeft",C.aiO,"AlignRight",C.aiP,"AlignVertically",C.aiQ,"ArrangeVertical",D.H0,"ArrowRotateLeft",C.ajF,"Bank",F.H3,"Bitcoin",C.wU,"BitcoinCard",C.aiU,"BuyCrypto",C.aiX,"Candle",C.aj0,"Candle2",C.aj_,"CardCoin",C.aj1,"Cardano",C.wU,"Chainlink",C.wU,"Chart",C.aj4,"Chart1",C.aj3,"Lock",C.ajs,"Wallet",C.ajR,"Wallet3",D.Hj],y.N,A.V("aJ")))})()};
(a=>{a["CSUXeM5UrCUICl+rs1RW0iNbCLQ="]=a.current})($__dart_deferred_initializers__);