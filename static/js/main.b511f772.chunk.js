(this["webpackJsonpchuck-norris"]=this["webpackJsonpchuck-norris"]||[]).push([[0],{58:function(e,t,n){e.exports=n(66)},66:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),l=n(40),i=n(18),u=n(103),s=n(104),m=n(105),d=n(67),f=n(106),b=n(112),g=n(107),h=n(108),j=n(111),E=n(109),v=n(110),k=n(113),p=n(96),O=n(114),y=n(100),S=n(101),C=n(102),J=n(4),x=Object(p.a)({card:{marginBottom:20},cardContent:{paddingBottom:5},cardActions:{padding:16}}),N=Object(J.a)({root:{marginTop:10,marginBottom:10}})(O.a);function B(e){var t=e.joke,n=(e.likeJoke,e.unlikeJoke,e.index),a=x();return c.a.createElement(y.a,{className:a.card,id:"joke-".concat(n)},c.a.createElement(S.a,{className:a.cardContent},t.categories.length>0?t.categories.map((function(e){return c.a.createElement(N,{label:e,key:e,variant:"outlined"})})):c.a.createElement(N,{label:"regular",variant:"outlined"}),c.a.createElement(d.a,null,t.joke)),c.a.createElement(C.a,{className:a.cardActions}))}var A=Object(p.a)({form:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{margin:20,width:"25ch"}}});function I(){return c.a.createElement("div",{style:{textAlign:"center",padding:"2rem"}},c.a.createElement(u.a,null))}var w=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),u=Object(i.a)(o,2),p=u[0],O=u[1],y=Object(a.useState)([]),S=Object(i.a)(y,2),C=S[0],J=S[1],x=Object(a.useState)([]),N=Object(i.a)(x,2),w=N[0],D=N[1],T=Object(a.useState)([]),H=Object(i.a)(T,2),M=H[0],V=H[1],q=Object(a.useState)(0),z=Object(i.a)(q,2),F=z[0],G=z[1],K=Object(a.useState)("All"),L=Object(i.a)(K,2),P=L[0],Q=L[1],R=Object(a.useState)(!1),U=Object(i.a)(R,2),W=U[0],X=U[1],Y=A();Object(a.useEffect)((function(){X(!0),Z(),fetch("https://api.icndb.com/categories").then((function(e){return e.json()})).then((function(e){J(e.value),D(e.value),X(!1)})).catch((function(e){return console.log(e)}))}),[]);var Z=function(){fetch("https://api.icndb.com/jokes?firstName=".concat(P)).then((function(e){return e.json()})).then((function(e){console.log(e),r(e.value),O(e.value.slice(0,10)),X(!1)})).catch((function(e){return console.log(e)}))},$=function(e){if(!M.find((function(t){return t.id===e}))){var t=n.find((function(t){return t.id===e}));V([t].concat(Object(l.a)(M)))}},_=function(e){var t=M.filter((function(t){return t.id!==e}));V(t)},ee=function(e){if(e){var t=new IntersectionObserver((function(a){!0===a[0].isIntersecting&&(X(!0),setTimeout((function(){O(n.slice(0,p.length+10)),X(!1)}),400),t.unobserve(e))}),{threshold:1});t.observe(e)}};Object(a.useEffect)((function(){var e=document.getElementById("joke-".concat(p.length-1));ee(e)}),[p]);var te=function(e){var t=e.target.name;if(w.includes(t)){var n=Object(l.a)(w),a=n.indexOf(t);n.splice(a,1),D(n)}else D([].concat(Object(l.a)(w),[t]))};return c.a.createElement("div",{className:"App"},c.a.createElement(s.a,null),c.a.createElement(m.a,null,c.a.createElement(d.a,{variant:"h2",align:"center",style:{margin:20}},"Chuck Norris Jokes"),c.a.createElement(f.a,{style:{marginBottom:20},position:"sticky"},c.a.createElement(b.a,{value:F,onChange:function(e,t){G(t)},centered:!0},c.a.createElement(g.a,{label:"Home",id:"home-tab","aria-controls":"home-panel"}),c.a.createElement(g.a,{label:c.a.createElement(h.a,{color:"secondary",badgeContent:M.length>0?M.length:null}),id:"like-tab","aria-controls":"like-panel"}))),c.a.createElement("div",{role:"tabpanel",hidden:0!==F},c.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==P&&Z()},noValidate:!0,className:Y.form},c.a.createElement(j.a,{id:"firstName",label:"Enter Category",value:P,onChange:function(e){return Q(e.target.value)}}),c.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary"},"Submit"))),C.map((function(e){return c.a.createElement(v.a,{key:e,control:c.a.createElement(k.a,{name:e,color:"primary",checked:w.includes(e),onChange:te}),label:e})})),p.map((function(e,t){if(0===e.categories.length||function(e){for(var t=0;t<e.length;t++)if(w.includes(e[t]))return!0;return!1}(e.categories))return c.a.createElement(B,{key:e.id,joke:e,likeJoke:$,unlikeJoke:_,index:t})})),W&&c.a.createElement(I,null)),c.a.createElement("div",{role:"tabpanel",hidden:1!==F},M.map((function(e){return c.a.createElement(B,{key:e.id,joke:e,likeJoke:$,unlikeJoke:_})})))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.b511f772.chunk.js.map