(this["webpackJsonpsodiq-assignment"]=this["webpackJsonpsodiq-assignment"]||[]).push([[34],{1153:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1167:function(e,t,a){"use strict";var n=a(1),r=a(5),o=a(0),c=(a(2),a(3)),i=a(249),l=a(7),s=o.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.raised,m=void 0!==s&&s,u=Object(r.a)(e,["classes","className","raised"]);return o.createElement(i.a,Object(n.a)({className:Object(c.a)(a.root,l),elevation:m?8:1,ref:t},u))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1172:function(e,t,a){"use strict";var n=a(1),r=a(5),o=a(0),c=(a(2),a(3)),i=a(7),l=o.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,m=Object(r.a)(e,["classes","className","component"]);return o.createElement(s,Object(n.a)({className:Object(c.a)(a.root,i),ref:t},m))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},1181:function(e,t,a){"use strict";var n=a(0),r=a(126);t.a=Object(r.a)(n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},1204:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(33),r=a(29),o=(a(0),a(1205));function c(e){var t=e.uri,a=e.method,c=e.onSuccess,i=e.onError,l=Object(o.a)({loading:!1,error:null,success:null}),s=Object(r.a)(l,2),m=s[0],u=s[1];return Object(n.a)({runFetch:function(e){u({loading:!0,error:null,success:null});var r="";"GET"===a&&e&&Object.keys(e).map((function(t,a){return r="".concat(t,"=").concat(e[t]),Object.key(e).length-1!==a&&(r="".concat(r,"&")),t})),"POST"===a&&(e=Object(n.a)(Object(n.a)({},e||{}),{},{orgId:"728934"}));var o={method:a,headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa("sodiq.akanmu001@gmail.com:FrewQ12Sdcv33aqEz!")}};"POST"===a&&Object.assign(o,{body:JSON.stringify(e)}),fetch("https://secure.vezeti.net/test-api/v3".concat(t).concat("GET"===a&&r?"?".concat(r):""),o).then((function(e){return e.json()})).then((function(e){"00"===e.responseCode?(u({loading:!1,success:e.responseMessage,error:null}),c&&c(e)):(u({error:e.responseMessage,loading:!1,success:null}),i&&i(e))})).catch((function(e){u({error:"Network Connectivity Error",loading:!1,success:null}),i&&i(e)}))}},m)}},1205:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(33),r=a(29),o=a(0),c=a.n(o);function i(e){var t=c.a.useState({}),a=Object(r.a)(t,2),o=a[0],i=a[1];return[o,function(e){return i((function(t){return Object(n.a)(Object(n.a)({},t),e)}))}]}},1265:function(e,t,a){"use strict";var n=a(5),r=a(1),o=a(0),c=(a(2),a(3)),i=a(14),l=a(7),s=a(249),m=a(126),u=Object(m.a)(o.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),d=Object(m.a)(o.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),p=Object(m.a)(o.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),f=Object(m.a)(o.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),g=a(1181),h=a(1065),b=a(10),v={success:o.createElement(u,{fontSize:"inherit"}),warning:o.createElement(d,{fontSize:"inherit"}),error:o.createElement(p,{fontSize:"inherit"}),info:o.createElement(f,{fontSize:"inherit"})},E=o.createElement(g.a,{fontSize:"small"}),y=o.forwardRef((function(e,t){var a=e.action,i=e.children,l=e.classes,m=e.className,u=e.closeText,d=void 0===u?"Close":u,p=e.color,f=e.icon,g=e.iconMapping,y=void 0===g?v:g,O=e.onClose,j=e.role,C=void 0===j?"alert":j,x=e.severity,w=void 0===x?"success":x,S=e.variant,N=void 0===S?"standard":S,M=Object(n.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return o.createElement(s.a,Object(r.a)({role:C,square:!0,elevation:0,className:Object(c.a)(l.root,l["".concat(N).concat(Object(b.a)(p||w))],m),ref:t},M),!1!==f?o.createElement("div",{className:l.icon},f||y[w]||v[w]):null,o.createElement("div",{className:l.message},i),null!=a?o.createElement("div",{className:l.action},a):null,null==a&&O?o.createElement("div",{className:l.action},o.createElement(h.a,{size:"small","aria-label":d,title:d,color:"inherit",onClick:O},E)):null)}));t.a=Object(l.a)((function(e){var t="light"===e.palette.type?i.a:i.e,a="light"===e.palette.type?i.e:i.a;return{root:Object(r.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:a(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:a(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:a(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:a(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(y)},2168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a(600),i=a(1135),l=a(1072),s=a(1145),m=a(125),u=a(1091),d=a(1117),p=a(1167),f=a(1172),g=a(1112),h=a(332),b=a(91),v=a(101),E=a(33),y=a(8),O=a.n(y),j=a(12),C=a(28),x=a(3),w=a(1177),S=a(1188),N=a(1056),M=a(1125),k=a(1071),z=a(1092),A=a(1265),W=a(1153),L=a(1204),I=Object(c.a)((function(){return{root:{}}})),T=function(e){var t=e.className,a=Object(C.a)(e,["className"]),n=Object(L.a)({uri:"/forgotpassword/",method:"POST",onSuccess:function(){var e=Object(j.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onError:function(e){console.log(e)}}),o=n.runFetch,c=n.error,i=n.success,s=n.loading,m=I(),u=(Object(v.a)().login,Object(W.a)());return r.a.createElement(S.a,{initialValues:{email:"",submit:null},validationSchema:w.f().shape({email:w.g().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=Object(j.a)(O.a.mark((function e(t,a){var n,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.setErrors,r=a.setStatus,c=a.setSubmitting;try{o(Object(E.a)({},t)),u.current&&(r({success:!0}),c(!1))}catch(i){console.error(i),u.current&&(r({success:!1}),n({submit:i.message}),c(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var n=e.errors,o=e.handleBlur,u=e.handleChange,d=e.handleSubmit,p=e.isSubmitting,f=e.touched,g=e.values;return r.a.createElement("form",Object.assign({noValidate:!0,onSubmit:d,className:Object(x.a)(m.root,t)},a),s&&r.a.createElement(N.a,null),c&&r.a.createElement(A.a,{severity:"error"},c),i&&r.a.createElement(A.a,{severity:"success"},i),r.a.createElement(M.a,{error:Boolean(f.email&&n.email),fullWidth:!0,autoFocus:!0,helperText:f.email&&n.email,label:"Email Address",margin:"normal",name:"email",onBlur:o,onChange:u,type:"email",value:g.email,variant:"outlined"}),n.submit&&r.a.createElement(l.a,{mt:3},r.a.createElement(k.a,{error:!0},n.submit)),r.a.createElement(l.a,{mt:2},r.a.createElement(z.a,{color:"secondary",disabled:p,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Send")))}))},R={Auth0:"/static/images/auth0.svg",FirebaseAuth:"/static/images/firebase.svg",JWT:"/static/images/jwt.svg"},B=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,display:"flex",flexDirection:"column",minHeight:"100vh"},banner:{backgroundColor:e.palette.background.paper,paddingBottom:e.spacing(2),paddingTop:e.spacing(2),borderBottom:"1px solid ".concat(e.palette.divider)},bannerChip:{marginRight:e.spacing(2)},methodIcon:{height:30,marginLeft:e.spacing(2),marginRight:e.spacing(2)},cardContainer:{paddingBottom:80,paddingTop:80},cardContent:{padding:e.spacing(4),display:"flex",flexDirection:"column",minHeight:400},currentMethodIcon:{height:40,"& > img":{width:"auto",maxHeight:"100%"}}}}));t.default=function(){var e=B(),t=Object(v.a)().method;return r.a.createElement(h.a,{className:e.root,title:"Login"},r.a.createElement("div",{className:e.banner},r.a.createElement(i.a,{maxWidth:"md"},r.a.createElement(l.a,{alignItems:"center",display:"flex",justifyContent:"center"},r.a.createElement(s.a,{color:"secondary",label:"NEW",size:"small",className:e.bannerChip}),r.a.createElement(l.a,{alignItems:"center",display:"flex"},r.a.createElement(m.a,{color:"textPrimary",variant:"h6"},"Visit our"," ",r.a.createElement(u.a,{component:o.a,to:"/docs"},"docs")," ","and find out how to switch between"),r.a.createElement(d.a,{title:"Auth0"},r.a.createElement("img",{alt:"Auth0",className:e.methodIcon,src:R.Auth0})),r.a.createElement(d.a,{title:"Firebase"},r.a.createElement("img",{alt:"Firebase",className:e.methodIcon,src:R.FirebaseAuth})),r.a.createElement(d.a,{title:"JSON Web Token"},r.a.createElement("img",{alt:"JWT",className:e.methodIcon,src:R.JWT})))))),r.a.createElement(i.a,{className:e.cardContainer,maxWidth:"sm"},r.a.createElement(l.a,{mb:8,display:"flex",justifyContent:"center"},r.a.createElement(o.a,{to:"/"},r.a.createElement(b.a,null))),r.a.createElement(p.a,null,r.a.createElement(f.a,{className:e.cardContent},r.a.createElement(l.a,{alignItems:"center",display:"flex",justifyContent:"space-between",mb:3},r.a.createElement("div",null,r.a.createElement(m.a,{color:"textPrimary",gutterBottom:!0,variant:"h2"},"Password Recovery"),r.a.createElement(m.a,{variant:"body2",color:"textSecondary"},"Enter your email to recover your password")),r.a.createElement("div",{className:e.currentMethodIcon},r.a.createElement("img",{alt:"Auth method",src:R[t]}))),r.a.createElement(l.a,{flexGrow:1,mt:3},r.a.createElement(T,null)),r.a.createElement(l.a,{my:3},r.a.createElement(g.a,null)),r.a.createElement(u.a,{component:o.a,to:"/login",variant:"body2",color:"textSecondary"},"Login")))))}}}]);
//# sourceMappingURL=34.4a257b3d.chunk.js.map