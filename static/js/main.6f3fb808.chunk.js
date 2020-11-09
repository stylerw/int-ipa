(this["webpackJsonpint-ipa"]=this["webpackJsonpint-ipa"]||[]).push([[0],{96:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(1),c=a.n(r),o=a(13),s=a.n(o),i=a(20),l=a(143),j=a(12),d=a(35),b=a.n(d),u=a(43),h=a(44),p=a(45),x=a.n(p),O="".concat("","/manifest.yaml"),m=c.a.createContext(null),f=function(){var e=Object(u.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O);case 2:return t=e.sent,e.next=5,t.text();case 5:return a=e.sent,e.abrupt("return",x.a.parse(a,{prettyErrors:!0}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.useContext)(m);if(!e)throw new Error("Error: you must create an initial manifest object");return e},v=!1,k=function(e){var t=e.children,a=Object(h.a)(f,[]);return a.error&&!v&&(v=!0,console.log(a.error.message),console.log(a.error),a.error.name.match(/^YAML/)?alert("Error: Your manifest.yaml contains invalid syntax. Please check the console for more info."):alert("There was an error loading your manifest.yaml")),Object(n.jsx)(m.Provider,{value:a,children:t})},y=a(54),C=a(122),w=a(145),B=a(101),E=a(123),I=a(32),M=function(e,t){return"".concat(e,"/").concat(t.replace(".yaml",""))},S=function(e){var t=e.tasks,a=e.path;return 0===t.length?Object(n.jsx)(y.a,{children:"No tasks to do"}):Object(n.jsx)(C.a,{container:!0,spacing:4,children:t.map((function(e,t){return!e.hidden&&Object(n.jsx)(C.a,{item:!0,lg:6,xs:12,children:Object(n.jsxs)(w.a,{component:B.a,p:2,height:"100%",display:"flex",alignContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",children:[Object(n.jsxs)(w.a,{children:[Object(n.jsx)(y.a,{color:"secondary",gutterBottom:!0,children:e.name}),Object(n.jsx)(y.a,{variant:"body2",gutterBottom:!0,children:e.description})]}),Object(n.jsx)(w.a,{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",width:"100%",children:Object(n.jsx)(E.a,{component:I.b,color:"primary",variant:"contained",to:M(a,e.file),children:"Work on task"})})]})},"tasklist-".concat(t))}))})},L=function(){var e=Object(u.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.log("empty class"),e.abrupt("return");case 3:return c=t,o="tasks.yaml",a="".concat("","/").concat(c,"/").concat(o),e.next=6,fetch(a);case 6:return n=e.sent,e.next=9,n.text();case 9:return r=e.sent,e.abrupt("return",x.a.parse(r,{prettyErrors:!0}));case 11:case"end":return e.stop()}var c,o}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.msg,a=e.error;return Object(n.jsxs)(y.a,{variant:"h3",component:"h1",gutterBottom:!0,align:"center",children:[a&&"Error: ",t]})},D=function(e){var t,a,r=e.match.params.klass,c=g(),o=null===c||void 0===c||null===(t=c.result)||void 0===t||null===(a=t.classes)||void 0===a?void 0:a.find((function(e){var t=e.folder;return r===t})),s=Object(h.a)(L,[r]);if(s.result){var i=s.result,l=i.title,j=i.description,d=i.tasks;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(y.a,{variant:"h3",component:"h1",gutterBottom:!0,align:"center",children:l}),Object(n.jsx)(y.a,{variant:"subtitle1",gutterBottom:!0,align:"center",children:j})]}),Object(n.jsx)(y.a,{variant:"h5",gutterBottom:!0,children:"Assignments:"}),Object(n.jsx)(S,{tasks:d,path:e.location.pathname})]})}return s.loading&&o?Object(n.jsx)("div",{children:Object(n.jsxs)(y.a,{variant:"h4",component:"h1",gutterBottom:!0,align:"center",children:["Loading ",o.name,"..."]})}):c.loading||s.loading?Object(n.jsx)(y.a,{variant:"h4",component:"h1",gutterBottom:!0,align:"center",children:"Loading..."}):s.error?o?Object(n.jsx)(N,{error:!0,msg:"Cannot load class task file"}):Object(n.jsx)(N,{error:!0,msg:"No such class exists"}):Object(n.jsx)(N,{error:!0,msg:"Unreachable state???"})},P=a(6),T=a(10),z=function(e){return"light"===e.palette.type?Object(T.d)(Object(T.b)(e.palette.divider,1),.88):Object(T.a)(Object(T.b)(e.palette.divider,1),.68)},A=a(125),R=a(126),W=a(127),$=a(128),J=a(129),Y=a(130),q=a(124),F=["bilabial","labiodental","dental","alveolar","postalveolar","retroflex","palatal","velar","uvular","pharyngeal","glottal"],H=["plosive","nasal","trill","tap","fricative","lateral fricative","approximant","lateral approximant"],U="_",_="",G=[["p","b",_,_,_,_,"t","d",_,_,"\u0288","\u0256","c","\u025f","k","g","q","\u0262",_,U,"\u0294",U],[_,"m",_,"\u0271",_,_,_,"n",_,_,_,"\u0273",_,"\u0272",_,"\u014b",_,"\u0274",U,U,U,U],[_,"\u0299",_,_,_,_,_,"r",_,_,_,_,_,_,U,U,_,"\u0280",_,_,U,U],[_,_,_,"\u2c71",_,_,_,"\u027e",_,_,_,"\u027d",_,_,U,U,_,_,_,_,U,U],["\u0278","\u03b2","f","v","\u03b8","\xf0","s","z","\u0283","\u0292","\u0282","\u0290","\xe7","\u029d","x","\u0263","\u03c7","\u0281","\u0127","\u0295","h","\u0266"],[U,U,U,U,_,_,"\u026c","\u026e",_,_,_,_,_,_,_,_,_,_,U,U,U,U],[_,_,_,"\u028b",_,_,_,"\u0279",_,_,_,"\u027b",_,"j",_,"\u0270",_,_,_,_,U,U],[U,U,U,U,_,_,_,"l",_,_,_,"\u026d",_,"\u028e",_,"\u029f",_,_,U,U,U,U]],K=Object(q.a)((function(e){return{voiceless:{cursor:"pointer",width:"50%",float:"left","&:hover":{backgroundColor:e.palette.action.hover}},voiced:{height:"100%",cursor:"pointer",width:"50%",float:"right","&:hover":{backgroundColor:e.palette.action.hover}},impossible:{backgroundColor:e.palette.action.disabledBackground,color:"transparent","&:hover":{backgroundColor:e.palette.action.disabledBackground}},symbol:{fontSize:"1.6rem"},sideBorder:{borderLeft:"1px solid ".concat(z(e)),borderRight:"1px solid ".concat(z(e))},caps:{textTransform:"capitalize",padding:"6px"},header:{borderLeft:"1px solid ".concat(z(e)),borderRight:"1px solid ".concat(z(e))}}})),Q=function(e){var t=K(),a=e.onClick,r=c.a.useCallback((function(e){return(e!==U?a:void 0)&&function(){return a(e)}}),[a]),o=c.a.useCallback((function(e){var a,c,o=e.x,s=e.y,i=null===(a=G[s])||void 0===a?void 0:a[2*o],l=null===(c=G[s])||void 0===c?void 0:c[2*o+1],j=o<2||o>4||4===s;return Object(n.jsxs)(A.a,{align:"center",className:Object(P.a)(t.symbol,j&&t.sideBorder),padding:"none",children:[Object(n.jsx)("span",{className:Object(P.a)(t.voiceless,i===U&&t.impossible),onClick:r(i),children:i}),Object(n.jsx)("span",{className:Object(P.a)(t.voiced,l===U&&t.impossible),onClick:r(l),children:l})]})}),[t,r]);return Object(n.jsx)(R.a,{children:Object(n.jsxs)(W.a,{size:"small","aria-label":"Consonants (Pulmonics)",children:[Object(n.jsx)($.a,{children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(A.a,{}),F.map((function(e){return Object(n.jsx)(A.a,{align:"center",className:Object(P.a)(t.header,t.caps),children:e},"keyboard-place-".concat(e))}))]})}),Object(n.jsx)(Y.a,{children:H.map((function(e,a){return Object(n.jsxs)(J.a,{children:[Object(n.jsx)(A.a,{className:t.caps,children:e}),F.map((function(t,r){return Object(n.jsx)(o,{x:r,y:a},"keyboard-l-".concat(e,"-").concat(t))}))]},"keyboard-manner-".concat(e))}))})]})})},V=function(e){var t=e.onClick;return Object(n.jsxs)(w.a,{component:B.a,p:1,width:"auto",children:[Object(n.jsx)(y.a,{variant:"h6",component:"p",gutterBottom:!0,children:"Consonants (Pulmonics)"}),Object(n.jsx)(Q,{onClick:t})]})},X=function(){var e=c.a.useState(""),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)(y.a,{variant:"h4",component:"h1",gutterBottom:!0,children:["Create React App v4-beta example with TypeScript\u2197 d\u0361\u0292it\u0250\u02de \u25cc\u02den\u032ad\u0325",a]}),Object(n.jsx)(V,{onClick:function(e){r(a+e)}})]})},Z=function(){return Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/class/:klass",component:D}),Object(n.jsx)(j.a,{path:"/",exact:!0,component:X})]})},ee=a(142),te=a(147),ae=a(148),ne=a(131),re=a(133),ce=a(7),oe=a(146),se=a(135),ie=a(136),le=a(137),je=a(144),de=a(138),be=a(139),ue=a(134),he=a(71),pe=a.n(he),xe=a(70),Oe=a.n(xe),me=a(132),fe=a(51),ge=Object(q.a)((function(e){return Object(te.a)({listTitle:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}})})),ve=function(e){var t=e.error;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ae.a,{children:Object(n.jsx)(ne.a,{primary:t?"Error loading classes.":"Loading classes..."})}),Object(n.jsx)(me.a,{})]})},ke=function(e){var t=Object(j.f)().pathname,a=e.to,r=e.text,c=e.icon,o=e.exact,s=!!Object(j.e)(t,{path:a,exact:o});return Object(n.jsxs)(ae.a,{button:!0,component:I.b,to:a,selected:s,children:[c&&Object(n.jsx)(re.a,{children:c}),Object(n.jsx)(ne.a,{primary:r})]})},ye=Object(ce.a)({switchBase:{color:fe.a[100],"&$checked":{color:"black"},"&$checked + $track":{backgroundColor:fe.a[500]}},checked:{},track:{}})(oe.a),Ce=function(e){var t=Object(r.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1],s=(ge(),g()),l=s.result,d=s.loading,b=s.error,u=Object(r.useCallback)((function(){o(!0)}),[]),h=Object(r.useCallback)((function(){o(!1)}),[]),p=Object(r.useCallback)((function(t){e.changeDarkMode(t.target.checked)}),[e.changeDarkMode]),x=Object(j.f)();Object(r.useEffect)((function(){h()}),[x]);var O=Object(n.jsxs)(w.a,{role:"presentation",width:"100%",children:[Object(n.jsx)(se.a,{children:Object(n.jsx)(ke,{to:"/",text:"Home",icon:Object(n.jsx)(Oe.a,{}),exact:!0})}),Object(n.jsx)(ie.a,{}),Object(n.jsxs)(se.a,{children:[Object(n.jsx)(le.a,{children:"Classes"}),b&&Object(n.jsx)(ve,{error:!0}),d&&Object(n.jsx)(ve,{}),l&&l.classes.map((function(e,t){var a=e.name,r=e.folder;return!e.hidden&&Object(n.jsx)(ke,{to:"/class/".concat(r),text:a},"class-list-".concat(t))}))]})]});return Object(n.jsxs)("div",{children:[Object(n.jsx)(je.a,{anchor:"left",open:c,onClose:h,children:Object(n.jsxs)(w.a,{display:"flex",flexWrap:"wrap",width:275,alignContent:"space-between",alignItems:"flex-start",height:"100%",overflow:"hidden",children:[O,Object(n.jsx)(w.a,{width:"100%",mb:2,children:Object(n.jsx)(y.a,{component:"div",children:Object(n.jsxs)(C.a,{component:"label",container:!0,justify:"center",alignItems:"center",spacing:1,children:[Object(n.jsx)(C.a,{item:!0,children:"Light"}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(ye,{color:"default",checked:e.darkMode,onChange:p})}),Object(n.jsx)(C.a,{item:!0,children:"Dark"})]})})})]})}),Object(n.jsx)(de.a,{position:"static",children:Object(n.jsxs)(be.a,{children:[Object(n.jsx)(ue.a,{onClick:u,edge:"start",color:"inherit","aria-label":"menu",children:Object(n.jsx)(pe.a,{})}),Object(n.jsx)(y.a,{variant:"h6",children:"Int IPA"})]})})]})},we=a(141),Be=a(72),Ee=a(53),Ie=a(52),Me=a(140),Se=Object(Be.a)({palette:{secondary:{main:Ee.a[900]},primary:{main:Ie.a[700]}}}),Le=Object(Be.a)({palette:{type:"dark",secondary:{main:Ee.a[500]},primary:{main:Ie.a[700]}}}),Ne="useDarkMode";function De(){var e=Object(Me.a)("(prefers-color-scheme: dark)"),t=c.a.useState((function(){var e=window.localStorage.getItem(Ne);return e?"true"===e:null})),a=Object(i.a)(t,2),r=a[0],o=a[1],s=c.a.useCallback((function(e){window.localStorage.setItem(Ne,e.toString()),o(e)}),[o]),j=null===r?e:r,d=c.a.useMemo((function(){return Object(Be.a)(j?Le:Se)}),[j]);return Object(n.jsxs)(we.a,{theme:d,children:[Object(n.jsx)(ee.a,{}),Object(n.jsx)(Ce,{darkMode:j,changeDarkMode:s}),Object(n.jsx)(l.a,{maxWidth:"lg",children:Object(n.jsx)(Z,{})})]})}s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(k,{children:Object(n.jsx)(I.a,{children:Object(n.jsx)(De,{})})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.6f3fb808.chunk.js.map