(this["webpackJsonpsodiq-assignment"]=this["webpackJsonpsodiq-assignment"]||[]).push([[81],{2139:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),c=a(12),i=a(0),l=a.n(i),o=a(1570),s=a(131),u=a(600),m=a(1072),d=a(332),b=a(100),p=a(335),f=a(28),v=a(21),g=a(3),h=a(1179),E=a(1091),j=a(125),O=a(1155),k=a.n(O),x=Object(u.a)((function(){return{root:{}}})),w=function(e){var t=e.className,a=Object(f.a)(e,["className"]),n=x();return l.a.createElement("div",Object.assign({className:Object(g.a)(n.root,t)},a),l.a.createElement(h.a,{separator:l.a.createElement(k.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(E.a,{variant:"body1",color:"inherit",to:"/app",component:v.a},"Dashboard"),l.a.createElement(j.a,{variant:"body1",color:"textPrimary"},"Kanban")),l.a.createElement(j.a,{variant:"h3",color:"textPrimary"},"Board"))},y=a(33),C=a(29),S=a(55),N=a(249),I=a(1054),z=a(1125),P=a(1065),A=a(113),W=a(1112),L=a(591),q=a(1116),B=a(1416),R=a(1167),G=a(1467),D=a(1172),M=a(1146),T=a(1415),Y=a(2113),U=a(1727),H=a(2110),K=a(1102),F=a(1328),J=a(1136),V=a(1124),X=a(1095),$=a(1466),Q=a(2111),Z=a(1110),_=a(2112),ee=a(1588),te=a(9),ae=a.n(te),ne=Object(u.a)((function(){return{root:{}}})),re=function(e){var t=e.card,a=e.className,n=(e.list,Object(f.a)(e,["card","className","list"])),i=ne(),o=Object(b.b)(),u=Object(s.b)().enqueueSnackbar,d=ae.a.debounce(function(){var e=Object(c.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o(Object(p.n)(t.id,a));case 3:u("Card updated",{variant:"success"}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),u("Something went wrong",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),1e3);return l.a.createElement("div",Object.assign({className:Object(g.a)(i.root,a)},n),l.a.createElement(m.a,{mt:3},l.a.createElement(z.a,{variant:"outlined",fullWidth:!0,defaultValue:t.name,onChange:function(e){return d({name:e.target.value})},label:"Card Title"})),l.a.createElement(m.a,{mt:3},l.a.createElement(j.a,{variant:"h4",color:"textPrimary"},"Description"),l.a.createElement(m.a,{mt:2},l.a.createElement(z.a,{multiline:!0,rows:6,fullWidth:!0,variant:"outlined",onChange:function(e){return d({description:e.target.value})},placeholder:"Leave a message",defaultValue:t.description}))))},ce=a(1092),ie=a(1056),le=a(2109),oe=a(1214),se=a(1332),ue=Object(u.a)((function(e){return{root:{padding:e.spacing(1),display:"flex",alignItems:"flex-start",borderRadius:e.shape.borderRadius,"&:hover":{backgroundColor:e.palette.background.dark,"& $deleteButton":{visibility:"visible"}}},checkbox:{marginLeft:e.spacing(-1),marginRight:e.spacing(1)},name:{flexGrow:1,cursor:"pointer",minHeight:32},deleteButton:{visibility:"hidden"}}})),me=function(e){var t=e.card,a=e.checklist,n=e.checkItem,o=e.className,u=e.editing,d=e.onEditCancel,v=e.onEditInit,h=e.onEditComplete,E=Object(f.a)(e,["card","checklist","checkItem","className","editing","onEditCancel","onEditInit","onEditComplete"]),O=ue(),k=Object(b.b)(),x=Object(s.b)().enqueueSnackbar,w=Object(i.useState)(n.name),y=Object(C.a)(w,2),S=y[0],N=y[1],I=function(){var e=Object(c.a)(r.a.mark((function e(c){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c.persist(),i=c.target.checked?"complete":"incomplete",e.next=5,k(Object(p.o)(t.id,a.id,n.id,{state:i}));case 5:x("Check item updated",{variant:"success"}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),x("Something went wrong",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(Object(p.o)(t.id,a.id,n.id,{name:S}));case 3:h(),x("Check item updated",{variant:"success"}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),x("Something went wrong",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(Object(p.h)(t.id,a.id,n.id));case 3:x("Check item deleted",{variant:"success"}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),x("Something went wrong",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(g.a)(O.root,o)},E),l.a.createElement(oe.a,{checked:"complete"===n.state,onChange:I,className:O.checkbox}),u?l.a.createElement(m.a,{flexGrow:1},l.a.createElement(z.a,{value:S,variant:"outlined",fullWidth:!0,onChange:function(e){e.persist(),N(e.target.value)}}),l.a.createElement(m.a,{mt:1},l.a.createElement(ce.a,{size:"small",variant:"contained",color:"secondary",onClick:W},"Save"),l.a.createElement(ce.a,{size:"small",onClick:function(){N(n.name),d()}},"Cancel"))):l.a.createElement(m.a,{display:"flex",alignItems:"center",flexGrow:1},l.a.createElement(j.a,{onClick:v,color:"textPrimary",variant:"body1",className:O.name},n.name),l.a.createElement(P.a,{onClick:L,className:O.deleteButton},l.a.createElement(A.a,{fontSize:"small"},l.a.createElement(se.a,null)))))};me.defaultProps={editing:!1,onEditCancel:function(){},onEditComplete:function(){},onEditInit:function(){}};var de=me,be=Object(u.a)((function(){return{root:{}}})),pe=function(e){var t=e.card,a=e.checklist,n=e.className,o=Object(f.a)(e,["card","checklist","className"]),u=be(),d=Object(b.b)(),v=Object(s.b)().enqueueSnackbar,h=Object(i.useState)(""),E=Object(C.a)(h,2),j=E[0],O=E[1],k=Object(i.useState)(!1),x=Object(C.a)(k,2),w=x[0],y=x[1],S=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,j){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,d(Object(p.a)(t.id,a.id,j));case 5:y(!1),O(""),v("Check item added",{variant:"success"}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),v("Something went wrong",{variant:"error"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(g.a)(u.root,n)},o),w?l.a.createElement("div",null,l.a.createElement(z.a,{fullWidth:!0,onChange:function(e){e.persist(),O(e.target.value)},placeholder:"Add an item",value:j,variant:"outlined"}),l.a.createElement(m.a,{mt:1},l.a.createElement(ce.a,{variant:"contained",color:"primary",size:"small",onClick:S},"Save"),l.a.createElement(ce.a,{size:"small",onClick:function(){y(!1),O("")}},"Cancel"))):l.a.createElement(ce.a,{variant:"outlined",size:"small",onClick:function(){y(!0)}},"Add an item"))},fe=Object(u.a)((function(e){return{root:{},listIcon:{marginRight:e.spacing(3)}}})),ve=function(e){var t=e.card,a=e.checklist,n=e.className,o=Object(f.a)(e,["card","checklist","className"]),u=fe(),d=Object(b.b)(),v=Object(s.b)().enqueueSnackbar,h=Object(i.useState)(a.name),E=Object(C.a)(h,2),O=E[0],k=E[1],x=Object(i.useState)(!1),w=Object(C.a)(x,2),y=w[0],S=w[1],N=Object(i.useState)(null),I=Object(C.a)(N,2),P=I[0],W=I[1],L=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,O&&O!==a.name){e.next=5;break}return S(!1),k(a.name),e.abrupt("return");case 5:return S(!1),e.next=8,d(Object(p.p)(t.id,a.id,{name:O}));case 8:v("Checklist updated",{variant:"success"}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),v("Something went wrong",{variant:"error"});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(Object(p.i)(t.id,a.id));case 3:v("Checklist deleted",{variant:"success"}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),v("Something went wrong",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),B=function(){W(null)},R=function(){W(null)},G=a.checkItems.length,D=a.checkItems.filter((function(e){return"complete"===e.state})).length,M=0===G?100:D/G*100;return l.a.createElement("div",Object.assign({className:Object(g.a)(u.root,n)},o),l.a.createElement(m.a,{display:"flex"},l.a.createElement(A.a,{fontSize:"small",color:"action",className:u.listIcon},l.a.createElement(le.a,null)),y?l.a.createElement(m.a,{flexGrow:1},l.a.createElement(z.a,{value:O,fullWidth:!0,variant:"outlined",onChange:function(e){e.persist(),k(e.target.value)}}),l.a.createElement(m.a,{mt:1},l.a.createElement(ce.a,{color:"primary",size:"small",variant:"contained",onClick:L},"Save"),l.a.createElement(ce.a,{size:"small",onClick:function(){S(!1),k(a.name)}},"Cancel"))):l.a.createElement(m.a,{display:"flex",alignItems:"center",flexGrow:1},l.a.createElement(j.a,{variant:"h4",color:"textPrimary",onClick:function(){S(!0)}},a.name),l.a.createElement(m.a,{flexGrow:1}),l.a.createElement(ce.a,{size:"small",onClick:q},"Delete"))),l.a.createElement(m.a,{mt:1,display:"flex",alignItems:"center"},l.a.createElement(j.a,{variant:"caption",color:"textSecondary"},Math.round(M),"%"),l.a.createElement(m.a,{ml:2,flexGrow:1},l.a.createElement(ie.a,{variant:"determinate",value:M,color:"secondary"}))),l.a.createElement(m.a,{mt:3},a.checkItems.map((function(e){return l.a.createElement(de,{editing:P===e.id,checkItem:e,card:t,checklist:a,key:e.id,onEditCancel:B,onEditComplete:R,onEditInit:function(){return t=e.id,void W(t);var t}})}))),l.a.createElement(m.a,{mt:1,ml:6},l.a.createElement(pe,{card:t,checklist:a})))},ge=a(4),he=a.n(ge),Ee=Object(u.a)((function(e){return{root:{display:"flex",marginBottom:e.spacing(2)},messageContainer:{backgroundColor:e.palette.background.dark,marginBottom:e.spacing(1),padding:e.spacing(2)}}})),je=function(e){var t=e.comment,a=e.className,n=Object(f.a)(e,["comment","className"]),r=Ee(),c=Object(b.c)((function(e){return function(e,t){return e.kanban.members.byId[t]}(e,t.memberId)}));return l.a.createElement("div",Object.assign({className:Object(g.a)(r.root,a)},n),l.a.createElement(M.a,{alt:"Person",src:c.avatar}),l.a.createElement(m.a,{ml:2,flexGrow:1},l.a.createElement(j.a,{variant:"h5",color:"textPrimary",gutterBottom:!0},c.name),l.a.createElement(N.a,{className:r.messageContainer,variant:"outlined"},l.a.createElement(j.a,{variant:"body2",color:"textPrimary"},t.message)),l.a.createElement(j.a,{variant:"caption",color:"textSecondary"},he()(t.createdAt).format("MMM DD, YYYY [at] hh:mm a"))))},Oe=a(101),ke=Object(u.a)((function(e){return{root:{display:"flex",alignItems:"center"},field:{marginLeft:e.spacing(2)}}})),xe=function(e){var t=e.cardId,a=e.className,n=Object(f.a)(e,["cardId","className"]),o=ke(),u=Object(b.b)(),m=Object(Oe.a)().user,d=Object(s.b)().enqueueSnackbar,v=Object(i.useState)(""),h=Object(C.a)(v,2),E=h[0],j=h[1],O=function(){var e=Object(c.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a.persist(),13!==a.keyCode||!E){e.next=7;break}return e.next=5,u(Object(p.c)(t,E));case 5:j(""),d("Comment added",{variant:"success"});case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),d("Something went wrong",{variant:"error"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(g.a)(o.root,a)},n),l.a.createElement(M.a,{alt:"Person",src:m.avatar}),l.a.createElement(z.a,{fullWidth:!0,className:o.field,value:E,onChange:function(e){e.persist(),j(e.target.value)},onKeyUp:O,placeholder:"Write a comment...",variant:"outlined"}))},we=Object(u.a)((function(e){return{root:{justifyContent:"flex-start",marginTop:e.spacing(1),marginBottom:e.spacing(1)}}})),ye=function(e){var t=e.icon,a=e.children,n=Object(f.a)(e,["icon","children"]),r=we(),c=t?l.a.createElement(A.a,{fontSize:"small"},t):null;return l.a.createElement(ce.a,Object.assign({className:r.root,fullWidth:!0,variant:"contained",size:"small",startIcon:c},n),a)},Ce=Object(u.a)((function(e){return{root:{padding:e.spacing(3)},listName:{fontWeight:e.typography.fontWeightMedium},checklist:{"& + &":{marginTop:e.spacing(3)}}}})),Se=function(e){var t=e.card,a=(e.className,e.list),n=e.onClose,i=e.open,o=Object(f.a)(e,["card","className","list","onClose","open"]),u=Ce(),d=Object(b.b)(),v=Object(s.b)().enqueueSnackbar,g=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(Object(p.n)(t.id,{isSubscribed:!0}));case 3:v("Unsubscribed",{variant:"success"}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),v("Something went wrong",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(Object(p.n)(t.id,{isSubscribed:!1}));case 3:v("Subscribed",{variant:"success"}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),v("Something went wrong",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(Object(p.g)(t.id));case 3:v("Card archived",{variant:"success"}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),v("Something went wrong",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(Object(p.b)(t.id,"Untitled Checklist"));case 3:v("Checklist added",{variant:"success"}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),v("Something went wrong",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(F.a,Object.assign({onClose:n,open:i,maxWidth:"md",fullWidth:!0},o),l.a.createElement("div",{className:u.root},l.a.createElement(m.a,{display:"flex",justifyContent:"space-between"},l.a.createElement(j.a,{variant:"body2",color:"textSecondary"},"in list"," ",l.a.createElement("span",{className:u.listName},a.name)),l.a.createElement(P.a,{onClick:n},l.a.createElement(A.a,null,l.a.createElement(V.a,null)))),l.a.createElement(J.a,{container:!0,spacing:5},l.a.createElement(J.a,{item:!0,xs:12,sm:8},l.a.createElement(re,{card:t,list:a}),t.checklists.length>0&&l.a.createElement(m.a,{mt:5},t.checklists.map((function(e){return l.a.createElement(ve,{key:e.id,card:t,checklist:e,className:u.checklist})}))),l.a.createElement(m.a,{mt:3},l.a.createElement(j.a,{variant:"h4",color:"textPrimary"},"Activity"),l.a.createElement(m.a,{mt:2},l.a.createElement(xe,{cardId:t.id}),t.comments.length>0&&l.a.createElement(m.a,{mt:3},t.comments.map((function(e){return l.a.createElement(je,{key:e.id,comment:e})})))))),l.a.createElement(J.a,{item:!0,xs:12,sm:4},l.a.createElement(j.a,{variant:"overline",color:"textSecondary"},"Add to card"),l.a.createElement(ye,{icon:l.a.createElement(H.a,null),onClick:O},"Checklist"),l.a.createElement(ye,{icon:l.a.createElement(X.a,null),disabled:!0},"Members"),l.a.createElement(ye,{icon:l.a.createElement(X.a,null),disabled:!0},"Labels"),l.a.createElement(ye,{icon:l.a.createElement(U.a,null),disabled:!0},"Attachments"),l.a.createElement(m.a,{mt:3},l.a.createElement(j.a,{variant:"overline",color:"textSecondary"},"Actions"),l.a.createElement(ye,{icon:l.a.createElement($.a,null),disabled:!0},"Move"),l.a.createElement(ye,{icon:l.a.createElement(Q.a,null),disabled:!0},"Copy"),l.a.createElement(ye,{icon:l.a.createElement(Z.a,null),disabled:!0},"Make Template"),t.isSubscribed?l.a.createElement(ye,{icon:l.a.createElement(_.a,null),onClick:h},"Unwatch"):l.a.createElement(ye,{icon:l.a.createElement(Y.a,null),onClick:g},"Watch"),l.a.createElement(W.a,null),l.a.createElement(ye,{icon:l.a.createElement(ee.a,null),onClick:E},"Archive"))))))};Se.defaultProps={open:!1,onClose:function(){}};var Ne=Se,Ie=Object(u.a)((function(e){return{root:{outline:"none",paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},card:{"&:hover":{backgroundColor:e.palette.background.dark}},dragging:{backgroundColor:e.palette.background.dark},cover:{height:200},badge:{"& + &":{marginLeft:e.spacing(2)}}}})),ze=Object(i.forwardRef)((function(e,t){var a=e.cardId,n=e.className,r=e.dragging,c=e.index,o=e.list,s=e.style,u=Object(f.a)(e,["cardId","className","dragging","index","list","style"]),d=Ie(),p=Object(b.c)((function(e){return function(e,t){var a=e.kanban,n=a.cards,r=a.members,c=n.byId[t];return Object(y.a)(Object(y.a)({},c),{},{members:c.memberIds.map((function(e){return r.byId[e]}))})}(e,a)})),v=Object(i.useState)(!1),h=Object(C.a)(v,2),E=h[0],O=h[1];return l.a.createElement("div",Object.assign({className:Object(g.a)(d.root,n),index:c,ref:t,style:s},u),l.a.createElement(R.a,{className:Object(g.a)(d.card,Object(S.a)({},d.dragging,r)),raised:r,variant:r?"elevation":"outlined",onClick:function(){O(!0)}},p.cover&&l.a.createElement(G.a,{className:d.cover,image:p.cover}),l.a.createElement(D.a,null,l.a.createElement(j.a,{variant:"h5",color:"textPrimary"},p.name),l.a.createElement(m.a,{mt:2,display:"flex",alignItems:"center"},p.isSubscribed&&l.a.createElement(A.a,{className:d.badge,color:"action",fontSize:"small"},l.a.createElement(Y.a,null)),p.attachments.length>0&&l.a.createElement(A.a,{className:d.badge,color:"action",fontSize:"small"},l.a.createElement(U.a,null)),p.checklists.length>0&&l.a.createElement(A.a,{className:d.badge,color:"action",fontSize:"small"},l.a.createElement(H.a,null)),p.comments.length>0&&l.a.createElement(A.a,{className:d.badge,color:"action",fontSize:"small"},l.a.createElement(K.a,null)),l.a.createElement(m.a,{flexGrow:1}),p.members.length>0&&l.a.createElement(T.a,{max:5},p.members.map((function(e){return l.a.createElement(M.a,{key:e.id,src:e.avatar})})))))),l.a.createElement(Ne,{open:E,onClose:function(){O(!1)},card:p,list:o}))}));ze.defaultProps={dragging:!1,style:{}};var Pe=ze,Ae=Object(u.a)((function(){return{root:{}}})),We=function(e){var t=e.className,a=e.listId,n=Object(f.a)(e,["className","listId"]),o=Ae(),u=Object(b.b)(),d=Object(s.b)().enqueueSnackbar,v=Object(i.useState)(!1),h=Object(C.a)(v,2),E=h[0],j=h[1],O=Object(i.useState)(""),k=Object(C.a)(O,2),x=k[0],w=k[1],y=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(Object(p.e)(a,x||"Untitled Card"));case 3:j(!1),w(""),d("Card created",{variant:"success"}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),d("Something went wrong",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(g.a)(o.root,t)},n),E?l.a.createElement(l.a.Fragment,null,l.a.createElement(z.a,{fullWidth:!0,label:"Card Title",name:"cardName",onChange:function(e){e.persist(),w(e.target.value)},value:x,variant:"outlined"}),l.a.createElement(m.a,{mt:2,display:"flex",justifyContent:"space-between"},l.a.createElement(ce.a,{onClick:function(){j(!1),w("")},variant:"text"},"Cancel"),l.a.createElement(ce.a,{onClick:y,variant:"contained",color:"secondary"},"Add"))):l.a.createElement(m.a,{display:"flex",justifyContent:"center"},l.a.createElement(ce.a,{onClick:function(){j(!0)}},"Add another card")))},Le=Object(u.a)((function(e){return{root:{},inner:Object(S.a)({marginLeft:e.spacing(1),marginRight:e.spacing(1),display:"flex",flexDirection:"column",maxHeight:"100%",overflowY:"hidden",overflowX:"hidden",width:380},e.breakpoints.down("xs"),{width:300}),title:{cursor:"pointer"},droppableArea:{minHeight:80,flexGrow:1,overflowY:"auto",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},menu:{width:240}}})),qe=function(e){var t=e.className,a=e.listId,n=Object(f.a)(e,["className","listId"]),u=Le(),d=Object(i.useState)(!1),v=Object(C.a)(d,2),h=v[0],E=v[1],O=Object(b.c)((function(e){return function(e,t){return e.kanban.lists.byId[t]}(e,a)})),k=Object(b.b)(),x=Object(i.useRef)(null),w=Object(s.b)().enqueueSnackbar,S=Object(i.useState)(O.name),R=Object(C.a)(S,2),G=R[0],D=R[1],M=Object(i.useState)(!1),T=Object(C.a)(M,2),Y=T[0],U=T[1],H=function(){U(!0),E(!1)},K=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,G){e.next=5;break}return D(O.name),U(!1),e.abrupt("return");case 5:return t={name:G},U(!1),e.next=9,k(Object(p.q)(O.id,t));case 9:w("List updated",{variant:"success"}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),w("Something went wrong",{variant:"error"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!1),e.next=4,k(Object(p.j)(O.id));case 4:w("List deleted",{variant:"success"}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),w("Something went wrong",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!1),e.next=4,k(Object(p.d)(O.id));case 4:w("List cleared",{variant:"success"}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),w("Something went wrong",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(g.a)(u.root,t)},n),l.a.createElement(N.a,{className:u.inner},l.a.createElement(m.a,{py:1,px:2,display:"flex",alignItems:"center"},Y?l.a.createElement(I.a,{onClickAway:K},l.a.createElement(z.a,{value:G,onBlur:K,onChange:function(e){e.persist(),D(e.target.value)},variant:"outlined",margin:"dense"})):l.a.createElement(j.a,{color:"inherit",variant:"h5",onClick:H},O.name),l.a.createElement(m.a,{flexGrow:1}),l.a.createElement(P.a,{color:"inherit",edge:"end",onClick:function(){E(!0)},ref:x},l.a.createElement(A.a,{fontSize:"small"},l.a.createElement(B.a,null)))),l.a.createElement(W.a,null),l.a.createElement(o.c,{droppableId:O.id,type:"card"},(function(e){return l.a.createElement("div",{ref:e.innerRef,className:u.droppableArea},O.cardIds.map((function(e,t){return l.a.createElement(o.b,{draggableId:e,index:t,key:e},(function(a,n){return l.a.createElement(Pe,Object.assign({cardId:e,dragging:n.isDragging,index:t,key:e,list:O,ref:a.innerRef,style:Object(y.a)({},a.draggableProps.style)},a.draggableProps,a.dragHandleProps))}))})),e.placeholder)})),l.a.createElement(W.a,null),l.a.createElement(m.a,{p:2},l.a.createElement(We,{listId:O.id})),l.a.createElement(L.a,{keepMounted:!0,anchorEl:x.current,open:h,onClose:function(){E(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},PaperProps:{className:u.menu},getContentAnchorEl:null},l.a.createElement(q.a,{onClick:H},"Rename"),l.a.createElement(q.a,{onClick:J},"Clear"),l.a.createElement(q.a,{onClick:F},"Delete"))))},Be=Object(u.a)((function(e){return{root:{},inner:Object(S.a)({marginLeft:e.spacing(1),marginRight:e.spacing(1),width:380},e.breakpoints.down("xs"),{width:300})}})),Re=function(e){var t=e.className,a=Object(f.a)(e,["className"]),n=Be(),o=Object(b.b)(),u=Object(s.b)().enqueueSnackbar,d=Object(i.useState)(!1),v=Object(C.a)(d,2),h=v[0],E=v[1],j=Object(i.useState)(""),O=Object(C.a)(j,2),k=O[0],x=O[1],w=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o(Object(p.f)(k||"Untitled list"));case 3:E(!1),x(""),u("List created",{variant:"success"}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),u("Something went wrong",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(g.a)(n.root,t)},a),l.a.createElement(R.a,{className:n.inner},l.a.createElement(m.a,{p:2},h?l.a.createElement(l.a.Fragment,null,l.a.createElement(z.a,{fullWidth:!0,label:"List Title",name:"listName",onChange:function(e){e.persist(),x(e.target.value)},value:k,variant:"outlined"}),l.a.createElement(m.a,{mt:2,display:"flex",justifyContent:"space-between"},l.a.createElement(ce.a,{onClick:function(){E(!1),x("")},variant:"text"},"Cancel"),l.a.createElement(ce.a,{onClick:w,variant:"contained",color:"secondary"},"Add"))):l.a.createElement(m.a,{display:"flex",justifyContent:"center"},l.a.createElement(ce.a,{onClick:function(){E(!0)}},"Add another list")))))},Ge=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,height:"100%",display:"flex",overflow:"hidden",flexDirection:"column"},content:{flexGrow:1,flexShrink:1,display:"flex",overflowY:"hidden",overflowX:"auto"},inner:{display:"flex",paddingBottom:e.spacing(3),paddingTop:e.spacing(3),paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}}}));t.default=function(){var e=Ge(),t=Object(b.b)(),a=Object(b.c)((function(e){return e.kanban})).lists,n=Object(s.b)().enqueueSnackbar,u=function(){var e=Object(c.a)(r.a.mark((function e(a){var c,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a.source,i=a.destination,l=a.draggableId,e.prev=1,i){e.next=4;break}return e.abrupt("return");case 4:if(c.droppableId!==i.droppableId||c.index!==i.index){e.next=6;break}return e.abrupt("return");case 6:if(c.droppableId!==i.droppableId){e.next=11;break}return e.next=9,t(Object(p.l)(l,i.index));case 9:e.next=13;break;case 11:return e.next=13,t(Object(p.l)(l,i.index,i.droppableId));case 13:n("Card moved",{variant:"success"}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.error(e.t0),n("Something went wrong",{variant:"error"});case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){t(Object(p.k)())}),[t]),l.a.createElement(d.a,{className:e.root,title:"Kanban Board"},l.a.createElement(m.a,{p:3},l.a.createElement(w,null)),l.a.createElement(o.a,{onDragEnd:u},l.a.createElement("div",{className:e.content},l.a.createElement("div",{className:e.inner},a.allIds.map((function(e){return l.a.createElement(qe,{key:e,listId:e})})),l.a.createElement(Re,null)))))}}}]);
//# sourceMappingURL=81.e13576a6.chunk.js.map