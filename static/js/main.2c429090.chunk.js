(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{57:function(e,t,a){e.exports=a(82)},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=(a(62),a(12)),s=(a(63),a(64),a(118)),i=a(112),m=a(21),u=a.n(m),p=u.a.initializeApp({apiKey:"AIzaSyC87gs_k0UQnwpu8IGCudrgMfN4PmIJq5o",authDomain:"instagram-clone-nishanth.firebaseapp.com",databaseURL:"https://instagram-clone-nishanth.firebaseio.com",projectId:"instagram-clone-nishanth",storageBucket:"instagram-clone-nishanth.appspot.com",messagingSenderId:"739762093701",appId:"1:739762093701:web:577183306f7739afa733ec",measurementId:"G-HMK9DWJSE4"}).firestore(),d=u.a.auth(),g=u.a.storage(),f=a(116),E=a(111),h=a(51),b=a.n(h);var v=function(e){e.name;var t=e.postId,a=e.user,c=e.Postusername,o=e.imageUrl,m=e.caption,d=Object(n.useState)([]),g=Object(l.a)(d,2),h=g[0],v=g[1],y=Object(n.useState)(""),O=Object(l.a)(y,2),j=O[0],N=O[1];Object(n.useEffect)((function(){var e;return t&&(e=p.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){v(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]);var w=r.a.useState(!1),S=Object(l.a)(w,2),_=S[0],C=S[1],x=function(e,t){"clickaway"!==t&&C(!1)};return r.a.createElement("div",{className:"post"},r.a.createElement(f.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:_,autoHideDuration:2e3,onClose:x,message:"Note archived",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{size:"small","aria-label":"close",color:"inherit",onClick:x},r.a.createElement(b.a,{fontSize:"small"})))}),r.a.createElement("div",{className:"post_header"},r.a.createElement("div",{className:"post_header_1"},r.a.createElement(s.a,{className:"post_avatar",alt:c,style:{textTransform:"capitalize"},src:"/imgages"}),r.a.createElement("h3",{style:{textTransform:"capitalize"}},c)),a&&c==a.displayName?r.a.createElement(i.a,{onClick:function(e){p.collection("posts").doc(t).delete()},variant:"contained",color:"secondary",disableElevation:!0},"Delete"):r.a.createElement("p",null)),r.a.createElement("img",{className:"post_img",src:o,alt:"posted"}),r.a.createElement("h4",{className:"post_text"},r.a.createElement("strong",null,c)," ",m),r.a.createElement("div",{className:"post_comments"},h.map((function(e){return r.a.createElement("p",null,r.a.createElement("strong",null,e.username)," ",e.text)}))),a&&r.a.createElement("form",{className:"post_commentBox"},r.a.createElement("input",{className:"post_input",type:"text",placeholder:"Add a Comment...",value:j,onChange:function(e){return N(e.target.value)}}),r.a.createElement("button",{type:"submit",disabled:!j,onClick:function(e){e.preventDefault(),p.collection("posts").doc(t).collection("comments").add({text:j,username:a.displayName,timestamp:u.a.firestore.FieldValue.serverTimestamp()}),N("")},className:"post_button"},"Post")),r.a.createElement("div",null))},y=a(115),O=a(113),j=a(117),N=a(114);a(81);var w=function(e){var t=e.uploadname,a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],s=c[1],m=Object(n.useState)(null),d=Object(l.a)(m,2),f=d[0],E=d[1],h=Object(n.useState)(0),b=Object(l.a)(h,2),v=b[0],y=b[1];return r.a.createElement("div",{id:"cont"},r.a.createElement("div",{className:"imageupload"},r.a.createElement("h1",null,"Post Your Story"),r.a.createElement("progress",{className:"imageupload_progress",value:v,max:"100"}),r.a.createElement(j.a,{type:"text",placeholder:"Enter a Caption...",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"file",onChange:function(e){e.target.files[0]&&E(e.target.files[0])}}),r.a.createElement(i.a,{onClick:function(){g.ref("images/".concat(f.name)).put(f).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);y(t)}),(function(e){console.log(e),alert(e.message)}),(function(){g.ref("images").child(f.name).getDownloadURL().then((function(e){p.collection("posts").add({timestamp:u.a.firestore.FieldValue.serverTimestamp(),caption:o,imageUrl:e,username:t}),E(null),y(0),s("")}))}))}},"Upload"),r.a.createElement("div",{className:"img_brand"},r.a.createElement("p",null,"Built by- Nishanth.M.Dipali"))))};function S(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var _=Object(O.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var C=function(){var e=_(),t=Object(n.useState)(S),a=Object(l.a)(t,1)[0],c=Object(n.useState)([]),o=Object(l.a)(c,2),m=o[0],u=o[1],g=Object(n.useState)(!1),f=Object(l.a)(g,2),E=f[0],h=f[1],b=Object(n.useState)(!1),O=Object(l.a)(b,2),C=O[0],x=O[1],k=Object(n.useState)(""),I=Object(l.a)(k,2),U=I[0],P=I[1],A=Object(n.useState)(""),D=Object(l.a)(A,2),z=D[0],B=D[1],T=Object(n.useState)(""),W=Object(l.a)(T,2),M=W[0],J=W[1],F=Object(n.useState)(null),L=Object(l.a)(F,2),G=L[0],H=L[1],K=Object(n.useState)(null),R=Object(l.a)(K,2),V=R[0],q=R[1],Q=Object(n.useState)("0"),Y=Object(l.a)(Q,2),$=(Y[0],Y[1],Object(n.useState)("")),X=Object(l.a)($,2),Z=X[0],ee=X[1];return Object(n.useEffect)((function(){var e=d.onAuthStateChanged((function(e){H(e||null)}));return function(){e()}}),[U,G,V]),Object(n.useEffect)((function(){p.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){u(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(y.a,{open:E,onClose:function(){return h(!1)}},r.a.createElement("div",{style:a,className:e.paper},r.a.createElement("center",null,r.a.createElement("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"Instagram"})),r.a.createElement("form",{className:"app_signUp"},r.a.createElement(j.a,{type:"text",value:U,onChange:function(e){return P(e.target.value)},placeholder:"Username"}),r.a.createElement(j.a,{type:"text",value:z,onChange:function(e){return B(e.target.value)},placeholder:"Email"}),r.a.createElement(j.a,{type:"password",value:M,onChange:function(e){return J(e.target.value)},placeholder:"Password"}),r.a.createElement(i.a,{type:"submit",onClick:function(e){e.preventDefault(),d.createUserWithEmailAndPassword(z,M).then((function(e){return e.user.updateProfile({displayName:U,user:e})})).catch((function(e){alert(e.message),h(!0),ee("")})),q(U),P(U),h(!1),ee("hidder")}},"Sign Up")))),r.a.createElement(y.a,{open:C,onClose:function(){return x(!1)}},r.a.createElement("div",{style:a,className:e.paper},r.a.createElement("center",null,r.a.createElement("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"Instagram"})),r.a.createElement("form",{className:"app_signUp"},r.a.createElement(j.a,{type:"text",value:z,onChange:function(e){return B(e.target.value)},placeholder:"Email"}),r.a.createElement(j.a,{type:"password",value:M,onChange:function(e){return J(e.target.value)},placeholder:"Password"}),r.a.createElement(i.a,{type:"submit",onClick:function(e){e.preventDefault(),d.signInWithEmailAndPassword(z,M).catch((function(e){alert(e.message),x(!0),ee("")})),x(!1),ee("hidder")}},"Sign In")))),r.a.createElement("div",{id:"app_header"},r.a.createElement("img",{className:"header_image",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"Instagram"}),G?r.a.createElement("div",{className:"app_right"},r.a.createElement(i.a,{variant:"outlined",onClick:function(){return d.signOut()}},(null===G||void 0===G?void 0:G.displayName)?G.displayName:V," \u02c5 "),r.a.createElement(s.a,{className:"post_avatar",alt:(null===G||void 0===G?void 0:G.displayName)?G.displayName:V,style:{textTransform:"capitalize"},src:"/imgages"})):r.a.createElement("div",{className:"app_loginContainer"},r.a.createElement(i.a,{onClick:function(){h(!0),ee("")}},"Sign Up"),r.a.createElement(i.a,{onClick:function(){x(!0),ee("")}},"Sign In"))),r.a.createElement(N.a,{className:Z}),r.a.createElement("div",{className:"app_posts"},G?r.a.createElement(w,{uploadname:V||G.displayName}):r.a.createElement("p",null),m.map((function(e){var t=e.post,a=e.id;return r.a.createElement(v,{key:a,postId:a,name:V,user:G,Postusername:t.username,imageUrl:t.imageUrl,caption:t.caption})}))),G?r.a.createElement("h3",{style:{textAlign:"center",marginTop:"10px",border:"1px solid lightgray",padding:"10px"}},"Wanna post your story tooo... ",r.a.createElement("a",{href:"#cont"},r.a.createElement(i.a,{variant:"outlined"},"Post"))):r.a.createElement("h3",{style:{textAlign:"center",marginTop:"10px",border:"1px solid lightgray",padding:"10px"}},"Sorry you Need to Login to Upload"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.2c429090.chunk.js.map