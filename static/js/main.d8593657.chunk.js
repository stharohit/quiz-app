(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/quiz.b4ca43e7.png"},23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(20),l=a.n(c),i=(a(28),a(1)),s=a(2),u=a(3);!function(e){e.PRIMARY="#2490CD",e.SECONDARY="#004b75",e.WHITE="#FFF",e.BLACK="#111",e.GREY="#808080",e.SUCCESS="#79a215",e.DANGER="#a21515"}(n||(n={}));var m=a(10),d=Object(u.b)({"0%":{transform:"rotate(0deg)"},"50%":{transform:"rotate(180deg)",opacity:"0.35"},"100%":{transform:"rotate(360deg)"}}),p=Object(u.d)({button:{border:"none",outline:"none",cursor:"pointer",transition:".1s",padding:"10px 35px",backgroundColor:n.BLACK,color:n.WHITE,position:"relative"},primary:{backgroundColor:n.PRIMARY,color:n.WHITE,boxShadow:"0 0 2px ".concat(n.GREY),$nest:{"&:active":{boxShadow:"0 0 0px ".concat(n.GREY)},"&:hover":{opacity:".8"}}},disabled:{backgroundColor:n.GREY,color:n.BLACK,cursor:"not-allowed"},fullWidth:{width:"100%"},loading:{$nest:{"&::after":{position:"absolute",right:"2px",top:"5px",content:"''",width:"10px",height:"10px",border:"5px solid ".concat(n.WHITE),borderTopColor:"transparent",borderRadius:"50%",animation:"".concat(d," infinite linear 1s")}}}}),g=function(e){var t=e.type,a=void 0===t?"button":t,n=e.buttonType,r=void 0===n?"primary":n,c=e.children,l=e.disabled,i=void 0!==l&&l,s=e.width,d=void 0===s?"auto":s,g=e.loading,b=void 0!==g&&g,f=Object(m.a)(e,["type","buttonType","children","disabled","width","loading"]);return o.a.createElement("button",Object.assign({className:Object(u.a)(p.button,i?p.disabled:p[r],"auto"!==d?p.fullWidth:"",b?p.loading:""),type:a,disabled:i},f),c)},b=Object(u.d)({input:{width:"100%",padding:"10px",border:"1px solid ".concat(n.GREY),transition:".2s",$nest:{"&:focus":{border:"1px solid ".concat(n.PRIMARY),borderRadius:0,outline:0}}}}),f=function(e){var t=e.placeholder,a=e.type,n=Object(m.a)(e,["placeholder","type"]);return o.a.createElement("input",Object.assign({placeholder:t,className:b.input,type:a},n))},E=function(){var e={fill:n.GREY,fillOpacity:1,fillRule:"nonzero",stroke:"none",width:"50px",height:"50px"};return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 479 479",style:e},o.a.createElement("path",{d:"M239.5 0C107.2 0 0 107.2 0 239.5S107.2 479 239.5 479 479 371.8 479 239.5 371.8 0 239.5 0zM390.9 360.7c-1.8-15.6-8.4-33.2-28.2-38.2 -37.9-9.6-68.7-31.3-68.7-31.3l-24 76 -4.5 14.3 -0.1-0.2 -3.9 12.1 -12.7-36c32.1-44.7-8.5-43-8.5-43s-40.5-1.7-8.5 43L219 393.6l-3.9-12.2 -28.6-90.3c0 0-30.8 21.7-68.7 31.3 -19.8 5-26.4 22.6-28.2 38.2 -26.7-33.1-42.7-75.2-42.7-121.1 0-106.8 86.6-193.4 193.4-193.4s193.4 86.6 193.4 193.4C433.7 285.4 417.6 327.5 390.9 360.7z"}),o.a.createElement("path",{d:"M309.9 189.6c1.2-3.4 2.1-6.7 2.7-10.1C323.1 116.2 292 114 292 114s-5.2-9.9-18.8-17.4c-9.1-5.4-21.8-9.6-38.6-8.1 -5.4 0.3-10.5 1.3-15.4 2.9l0 0c-6.2 2.1-11.8 5.1-16.9 8.7 -6.3 4-12.2 8.8-17.4 14.4 -8.3 8.4-15.6 19.3-18.8 32.9 -2.7 10.2-2.1 20.8 0.1 32.2l0 0c0.6 3.3 1.5 6.7 2.7 10.1 -6.2-0.6-13.6 3-6.6 27.5 5.1 17.9 9.8 22.9 13.3 23.2 3.3 21.3 19.6 48.3 46.6 57.8 11 3.9 23.2 3.9 34.2-0.1 26.5-9.6 43.4-36.5 46.7-57.7 3.6-0.3 8.3-5.3 13.3-23.2C323.5 192.6 316.2 189 309.9 189.6z"}))},h=Object(u.d)({formWrap:{display:"flex",justifyContent:"center",paddingTop:"50px"},form:{width:"350px",boxShadow:"0 0 5px ".concat(n.GREY),padding:"20px"},title:{textAlign:"center",marginBottom:"25px",$nest:{}},avatar:{textAlign:"center",marginBottom:"15px"},inputWrap:{marginBottom:"25px"},breaker:{margin:"10px 0",textAlign:"center"},error:{color:n.DANGER}}),w=function(e){var t=Object(r.useState)(),a=Object(s.a)(t,2),n=a[0],c=a[1],l=Object(r.useState)(),u=Object(s.a)(l,2),m=u[0],d=u[1],p=Object(r.useState)(),b=Object(s.a)(p,2),w=b[0],v=b[1],x=Object(r.useState)(!1),O=Object(s.a)(x,2),S=O[0],j=O[1],y=Object(i.g)();return o.a.createElement("div",{className:h.formWrap},o.a.createElement("form",{className:h.form,autoComplete:"off"},o.a.createElement("div",{className:h.avatar},o.a.createElement(E,null)),o.a.createElement("div",{className:h.title},o.a.createElement("h5",null,"Login to play Quiz"),o.a.createElement("p",null,"Enter your credentials below"),o.a.createElement("span",{className:h.error},w)),o.a.createElement("div",{className:h.inputWrap},o.a.createElement(f,{type:"text",placeholder:"Email",value:n||"",onChange:function(e){return c(e.target.value)}})),o.a.createElement("div",{className:h.inputWrap},o.a.createElement(f,{type:"password",placeholder:"Passwords",value:m||"",onChange:function(e){return d(e.target.value)}})),o.a.createElement(g,{loading:S,disabled:S,buttonType:"primary",onClick:function(){var e=function(e,t){var a=window.localStorage.getItem("users"),n=(a&&JSON.parse(a)).filter((function(a){return a.email===e&&a.password===t}));return n.length>0&&n[0].username}(n,m);j(!0),setTimeout((function(){e?(window.localStorage.setItem("loggedIn","true"),y.push("/user/quiz")):v("Email or Password does not match"),j(!1),window.localStorage.setItem("loggedInUser",e.toString())}),500)},width:"full"},"Login"),o.a.createElement("div",{className:h.breaker},"- - OR - -"),o.a.createElement(g,{buttonType:"primary",onClick:function(){return y.push("/auth/signup")},width:"full"},"Signup")))},v=a(5),x=function(e){return e?!(e&&e.length<5)||"Password Must be atleast 5 characters":"Password required"},O=Object(u.d)({formWrap:{display:"flex",justifyContent:"center",paddingTop:"50px"},form:{width:"350px",boxShadow:"0 0 5px ".concat(n.GREY),padding:"20px"},title:{textAlign:"center",marginBottom:"25px",$nest:{}},inputWrap:{marginBottom:"25px"},avatar:{textAlign:"center",marginBottom:"15px"},breaker:{margin:"10px 0",textAlign:"center"},error:{color:n.DANGER},success:{color:n.SUCCESS}}),S=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(),l=Object(s.a)(c,2),u=l[0],m=l[1],d=Object(r.useState)(),p=Object(s.a)(d,2),b=p[0],h=p[1],w=Object(r.useState)(),S=Object(s.a)(w,2),j=S[0],y=S[1],N=Object(r.useState)(),C=Object(s.a)(N,2),I=C[0],W=C[1],R=Object(r.useState)(),k=Object(s.a)(R,2),A=k[0],z=k[1],T=Object(r.useState)(!1),q=Object(s.a)(T,2),B=q[0],H=q[1],P=Object(i.g)(),Y=function(e){e.preventDefault();var t=function(e){if(!e)return"Email is required!";if(e&&e.length>0){if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()))return"Not a valid email!"}return!e||0!==e.length||"Email is required!"}(u),r=function(e){return!(!e||0===e.length)||"Username is required"}(a),o=x(b),c=x(b),l=function(e,t){return e===t||"Passwords do not Match!"}(b,j);if("string"!==typeof r)if(W((function(e){return Object(v.a)(Object(v.a)({},e),{},{userErr:""})})),"string"!==typeof t)if(W((function(e){return Object(v.a)(Object(v.a)({},e),{},{emailErr:""})})),"string"!==typeof o)if(W((function(e){return Object(v.a)(Object(v.a)({},e),{},{emailErr:""})})),"string"!==typeof c)if(W({confirmPasswordErr:""}),"string"!==typeof l){W({passwordErr:"",confirmPasswordErr:""});var i=function(e,t,a){var n=window.localStorage.getItem("users");if(n){var r=JSON.parse(n);return r.filter((function(t){return t.email===e})).length>0?"User already exists!":(r.push({username:a,email:e,password:t}),window.localStorage.setItem("users",JSON.stringify(r)),!0)}window.localStorage.setItem("users",JSON.stringify([{username:a,email:e,password:t}]))}(u,b,a);"string"!==typeof i?(H(!0),setTimeout((function(){var e=a&&"".concat(a," has been registered!");z(e),n(""),m(""),h(""),y(""),H(!1)}),500)):W((function(e){return Object(v.a)(Object(v.a)({},e),{},{exists:i})}))}else W({passwordErr:l,confirmPasswordErr:l});else W({confirmPasswordErr:c});else W((function(e){return Object(v.a)(Object(v.a)({},e),{},{passwordErr:o})}));else W((function(e){return Object(v.a)(Object(v.a)({},e),{},{emailErr:t})}));else W((function(e){return Object(v.a)(Object(v.a)({},e),{},{userErr:r})}))};return o.a.createElement("div",{className:O.formWrap},o.a.createElement("form",{className:O.form,onSubmit:function(e){return Y(e)}},o.a.createElement("div",{className:O.avatar},o.a.createElement(E,null)),o.a.createElement("div",{className:O.title},o.a.createElement("h5",null,"Singup to create your account"),o.a.createElement("p",null,"Enter your credentials below"),o.a.createElement("span",{className:O.error},I&&I.exists),o.a.createElement("span",{className:O.success},A)),o.a.createElement("div",{className:O.inputWrap},o.a.createElement(f,{type:"text",placeholder:"Username",value:a||"",onChange:function(e){return n(e.target.value)}}),o.a.createElement("span",{className:O.error},I&&I.userErr)),o.a.createElement("div",{className:O.inputWrap},o.a.createElement(f,{type:"email",placeholder:"Email",value:u||"",onChange:function(e){return m(e.target.value)}}),o.a.createElement("span",{className:O.error},I&&I.emailErr)),o.a.createElement("div",{className:O.inputWrap},o.a.createElement(f,{type:"password",placeholder:"Password",value:b||"",onChange:function(e){return h(e.target.value)}}),o.a.createElement("span",{className:O.error},I&&I.passwordErr)),o.a.createElement("div",{className:O.inputWrap},o.a.createElement(f,{type:"password",placeholder:"Confirm Password",value:j||"",onChange:function(e){return y(e.target.value)}}),o.a.createElement("span",{className:O.error},I&&I.confirmPasswordErr)),o.a.createElement(g,{type:"submit",buttonType:"primary",width:"full",onClick:Y,loading:B,disabled:B},"Signup"),o.a.createElement("div",{className:O.breaker},"-- or login to your account --"),o.a.createElement(g,{onClick:function(){return P.push("/auth/login")},width:"full"},"Login")))},j=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.d,null,"true"===window.localStorage.getItem("loggedIn")?o.a.createElement(i.a,{to:"/user/quiz"}):o.a.createElement(o.a.Fragment,null,o.a.createElement(i.b,{path:"/auth/login",component:w}),o.a.createElement(i.b,{path:"/auth/signup",component:S}))))},y=Object(u.c)({display:"flex",flexDirection:"row",justifyContent:"start",background:n.SECONDARY,minHeight:"100vh",height:"100%"}),N=function(e){var t=e.children;return o.a.createElement("div",{className:y},t)},C=Object(u.c)({width:"100%"}),I=function(e){var t=e.children;return o.a.createElement("div",{className:C},t)},W=Object(u.d)({answerBtn:{fontSize:"20px",background:n.WHITE,borderRadius:"4px",padding:"20px",display:"block",width:"100%",border:"none",marginBottom:"20px",cursor:"pointer",boxShadow:"0 0 10px ".concat(n.GREY),transition:".3s",$nest:{"&:focus":{outline:0}}},right:{background:n.SUCCESS,color:n.WHITE},wrong:{background:n.DANGER,color:n.WHITE}}),R=function(e){var t=e.answers,a=e.correct,n=e.handleNextQuestion,c=Object(r.useState)(),l=Object(s.a)(c,2),i=l[0],m=l[1],d=Object(r.useState)(),p=Object(s.a)(d,2),b=p[0],f=p[1],E=Object(r.useState)(!1),h=Object(s.a)(E,2),w=h[0],v=h[1],x=Object(r.useState)(0),O=Object(s.a)(x,2),S=O[0],j=O[1],y=Object(r.useState)(),N=Object(s.a)(y,2),C=N[0],I=N[1];return o.a.createElement(o.a.Fragment,null,t.map((function(e,n){return o.a.createElement(g,{key:n,className:Object(u.a)(W.answerBtn,i===n&&W.right,b===n&&W.wrong),onClick:function(){return function(e,n){if(!w){var r;if(0===e)m(n),j(S+2);else t.forEach((function(e,t){0===e.localeCompare(a)&&(r=t)})),m(r),f(n);I(!0),v(!0)}}(e.localeCompare(a),n)}},e)})),o.a.createElement(g,{disabled:!C,onClick:function(){return m(void 0),f(void 0),v(!1),I(!1),void n(S)}},"Submit"))};function k(e){for(var t=e.length;t--;){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}var A=Object(u.d)({scoreboardWrap:{fontSize:"40px",color:n.WHITE},score:{fontSize:"60px",color:n.PRIMARY},td:{border:"1px solid #dddddd",textAlign:"left",padding:"8px"},tr:{$nest:{"&:nth-child(even)":{backgroundColor:n.SECONDARY}}},table:{fontFamily:"arial, sans-serif",borderCollapse:"collapse",width:"100%",marginBottom:"25px"},scoreTitle:{margin:"30px 0 20px 0"}}),z=function(e){var t=e.score,a=e.totalScore,n=Object(r.useState)(),c=Object(s.a)(n,2),l=c[0],i=c[1];return Object(r.useEffect)((function(){var e=window.localStorage.getItem("scoreBoard"),t=e&&JSON.parse(e),a=t.sort((function(e,t){return t.score-e.score})).slice(0,10);console.log(a),i(a)}),[]),o.a.createElement("div",{className:A.scoreboardWrap},o.a.createElement("div",{className:A.score},t),o.a.createElement("div",null,"Out of"),o.a.createElement("div",null,a),o.a.createElement(g,{onClick:function(){return window.location.reload()}},"Retry"),o.a.createElement("div",{className:A.scoreTitle},"ScoreBoard"),o.a.createElement("table",{className:A.table},o.a.createElement("thead",null,o.a.createElement("tr",{className:A.tr},o.a.createElement("th",{className:A.td},"User"),o.a.createElement("th",{className:A.td},"Score"))),o.a.createElement("tbody",null,l&&l.map((function(e,t){return o.a.createElement("tr",{key:t,className:A.tr},o.a.createElement("td",{className:A.td},e.user),o.a.createElement("td",{className:A.td},e.score))})))))},T=Object(u.d)({question:{background:n.WHITE,padding:"20px",position:"relative",borderRadius:"10px",fontSize:"30px",color:n.GREY,marginBottom:"80px",$nest:{"&::after":{position:"absolute",content:"''",top:"100%",left:"40%",border:"20px solid transparent",borderTopColor:n.WHITE,borderLeftColor:n.WHITE}}}}),q=function(e){var t=e.quiz,a=Object(r.useState)(0),n=Object(s.a)(a,2),c=n[0],l=n[1],i=Object(r.useState)(),u=Object(s.a)(i,2),m=u[0],d=u[1];return o.a.createElement(o.a.Fragment,null,m?o.a.createElement(z,{score:null===m||void 0===m?void 0:m.toString(),totalScore:(2*t.length).toString()}):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:T.question},t[c].question),o.a.createElement(R,{handleNextQuestion:function(e){c<t.length-1?l(c+1):(d(e),function(e){var t=e.toString(),a=window.localStorage.getItem("loggedInUser"),n=window.localStorage.getItem("scoreBoard");if(n){var r=JSON.parse(n),o={user:a,score:t};r.push(o),window.localStorage.setItem("scoreBoard",JSON.stringify(r))}else{var c=[{user:a,score:t}];window.localStorage.setItem("scoreBoard",JSON.stringify(c))}}(e))},answers:k(t[c].options),correct:t[c].correct_answer})))},B=a(22),H=a.n(B),P=[{question:"Which one of the following titles by Valve is not based on a Community Mod?",correct_answer:"Ricochet",options:["Day of Defeat","Counter-Strike","Alien Swarm","Ricochet"]},{question:"Which of these is NOT an island that is part of the Philippines?",correct_answer:"Java",options:["Luzon","Mindanao","Palawan","Java"]},{question:"In what Homestuck Update was Game Over released?",correct_answer:"October 25th, 2014",options:["April 13th, 2009","April 8th, 2012","August 28th, 2003","October 25th, 2014"]},{question:"What was the first Android version specifically optimized for tablets?",correct_answer:"Honeycomb",options:["Eclair","Froyo","Marshmellow","Honeycomb"]},{question:"Which of these songs did Jimi Hendrix cover?",correct_answer:"All of these songs",options:["Sgt. Pepper Lonely Hearts Club Band","All Along the Watchtower","House of the Rising Sun","All of these songs"]}],Y=Object(u.d)({quizWrap:{width:"600px",margin:"auto",marginTop:"50px",textAlign:"center",$nest:{"@media screen and (max-width: 900px)":{width:"90%",margin:"auto"}}},img:{maxWidth:"100%"}}),G=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),l=Object(s.a)(c,2),i=l[0],u=l[1],m=k(P);return o.a.createElement("div",{className:Y.quizWrap},a?o.a.createElement(q,{quiz:m}):o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:H.a,alt:"Quiz starter",className:Y.img}),o.a.createElement(g,{loading:i,onClick:function(){u(!0),setTimeout((function(){n(!0),u(!1)}),500)}},"Start Quiz")))},M=Object(u.d)({sidebar:{width:"150px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh","@media screen and (max-width: 900px)":{position:"fixed",left:0,bottom:0,height:"auto",width:"100%"}}}),D=function(e){var t=e.children;return o.a.createElement("aside",{className:M.sidebar},t)},J=a(12),L=Object(u.d)({menuItem:{listStyle:"none",width:"80px",height:"80px",borderRadius:"50%",boxShadow:"0 0 20px ".concat(n.GREY),background:n.WHITE,$nest:{"&:not(:last-child)":{marginBottom:"20px"},"&:active":{boxShadow:"0 0 10px ".concat(n.GREY)}}},menuItemLink:{textDecoration:"none",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}),$=function(e){return o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",{className:L.menuItem},o.a.createElement(J.b,{className:L.menuItemLink,to:"",onClick:function(){window.localStorage.setItem("loggedIn","false"),window.location.reload()}},"logout"))))},F=Object(u.d)({title:{fontSize:"40px",color:n.WHITE,textAlign:"center",margin:"20px 0"}}),U=function(){return o.a.createElement(N,null,o.a.createElement(D,null,o.a.createElement($,null)),o.a.createElement(I,null,o.a.createElement("h1",{className:F.title},"Quiz App"),o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/user/quiz",component:G}))))},Q=function(e){var t=e.component,a=Object(m.a)(e,["component"]);return o.a.createElement(i.b,Object.assign({},a,{render:function(){return"true"===window.localStorage.getItem("loggedIn")?o.a.createElement(t,null):o.a.createElement(i.a,{to:"/auth/login"})}}))},_=function(){return o.a.createElement(J.a,{basename:"/"},o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/"},"false"===window.localStorage.getItem("loggedIn")?o.a.createElement(i.a,{to:"/auth/login"}):o.a.createElement(i.a,{to:"/user/quiz"})),o.a.createElement(i.b,{path:"/auth"},o.a.createElement(j,null)),o.a.createElement(Q,{path:"/user/quiz",component:U})))},K=function(){return r.createElement("main",null,r.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.d8593657.chunk.js.map