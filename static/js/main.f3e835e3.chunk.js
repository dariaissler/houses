(this["webpackJsonpreestrdoma-app"]=this["webpackJsonpreestrdoma-app"]||[]).push([[0],{75:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(11),r=n.n(c),s=(n(75),n(30)),o=n.n(s),i=n(48),l=n(19),u=n(41),j=n(128),d=n(132),b=n(149),h=n(150),p=n(136),O=n(60),m=n.n(O),f=n(147),x=n(145),g=n(6),v=function(e){var t=e.login,n=Object(a.useState)({username:"",password:""}),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(g.jsx)(j.a,{children:Object(g.jsxs)(d.a,{elevation:10,style:{padding:20,height:"40%",width:280,margin:"50px auto"},children:[Object(g.jsxs)(j.a,{align:"center",children:[Object(g.jsxs)(b.a,{style:{backgroundColor:"#3f51b5"},children:[" ",Object(g.jsx)(m.a,{})]}),Object(g.jsx)("h2",{children:"Log In"})]}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(g.jsx)(h.a,{value:r.username,onChange:function(e){return s(Object(u.a)(Object(u.a)({},r),{},{username:e.target.value}))},label:"Username",name:"username",fullWidth:!0,required:!0}),Object(g.jsx)(h.a,{value:r.password,onChange:function(e){return s(Object(u.a)(Object(u.a)({},r),{},{password:e.target.value}))},label:"Password",name:"password",type:"password",fullWidth:!0,required:!0}),Object(g.jsx)(f.a,{control:Object(g.jsx)(x.a,{name:"checkedB",color:"primary"}),label:"Remember me"}),Object(g.jsx)(p.a,{type:"submit",color:"primary",variant:"contained",fullWidth:!0,children:"LOG IN"})]})]})})},w=n(137),C=n(146),y=n(148),k=n(135),S=n(144),I=(n(85),n(139)),F=n(143),N=n(142),B=n(138),L=n(140),T=n(141),W=Object(w.a)({table:{minWidth:650}});function A(e){var t=e.houses,n=W();return Object(g.jsx)(B.a,{component:d.a,children:Object(g.jsxs)(I.a,{className:n.table,"aria-label":"simple table",children:[Object(g.jsx)(L.a,{children:Object(g.jsxs)(T.a,{children:[Object(g.jsx)(N.a,{align:"center",children:"Id"}),Object(g.jsx)(N.a,{align:"center",children:"\u0410\u0434\u0440\u0435\u0441"}),Object(g.jsx)(N.a,{align:"center",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0432\u0430\u0440\u0442\u0438\u0440"}),Object(g.jsx)(N.a,{align:"center",children:"\u0414\u0430\u0442\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f"})]})}),Object(g.jsx)(F.a,{children:t.map((function(e){return Object(g.jsxs)(T.a,{children:[Object(g.jsx)(N.a,{component:"th",scope:"row",children:e.id}),Object(g.jsx)(N.a,{align:"right",children:e.address}),Object(g.jsx)(N.a,{align:"right",children:e.reestrFlatCount}),Object(g.jsx)(N.a,{align:"right",children:e.createdAt})]},e.id)}))})]})})}var P=Object(w.a)((function(e){return{button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120,width:800},list:{margin:"0 auto",width:800}}})),J=function(e){var t=e.getCompanies,n=e.data,c=e.houses,r=e.getHouses,s=P(),o=Object(a.useState)([]),i=Object(l.a)(o,2),u=i[0],j=i[1],d=Object(a.useState)(!1),b=Object(l.a)(d,2),h=b[0],O=b[1];Object(a.useEffect)((function(){t()}),[]);var m=function(){O(!0)};return Object(g.jsxs)("div",{className:s.list,children:[Object(g.jsx)(p.a,{className:s.button,onClick:m,children:"Choose a company"}),Object(g.jsxs)(k.a,{className:s.formControl,children:[Object(g.jsx)(C.a,{id:"demo-controlled-open-select-label",children:"List of the companies"}),Object(g.jsx)(S.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:h,onClose:function(){O(!1)},onOpen:m,value:u,onChange:function(e){j(e.target.value)},children:n.map((function(e){return Object(g.jsx)(y.a,{onClick:function(){return r(e.id)},children:e.name},e.index)}))})]}),c&&c.length>0&&Object(g.jsx)(A,{houses:c})]})};var q=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(l.a)(r,2),u=s[0],j=s[1],d=Object(a.useState)([]),b=Object(l.a)(d,2),h=b[0],p=b[1],O=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://test-alpha.reestrdoma.ru/api/login/",{headers:{"Content-Type":"application/json",Accept:"application/json"},credentials:"include",method:"POST",body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),localStorage.setItem("token",a.data.token.access),c(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.token,e.next=3,fetch("http://test-alpha.reestrdoma.ru/api/reestrdoma/companies/",{headers:{accept:"application/json",Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,j(a.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.token,e.next=3,fetch("http://test-alpha.reestrdoma.ru/api/reestrdoma/company/houses/".concat(t),{headers:{accept:"application/json",Authorization:"Bearer ".concat(n)}});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,p(c.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[!n&&Object(g.jsx)(v,{login:O}),n&&Object(g.jsx)(J,{getCompanies:m,data:u,houses:h,getHouses:f})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(87);r.a.render(Object(g.jsx)(q,{}),document.getElementById("root")),z()}},[[88,1,2]]]);
//# sourceMappingURL=main.f3e835e3.chunk.js.map