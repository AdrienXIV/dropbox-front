(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{139:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),s=a.n(r),i=a(12),c=a.n(i),o=a(8),l=(a(139),a(275)),d=a(19),u=a.n(d),h=a(26),j=a(22),p=a(14),b=a(15),m=a(17),f=a(16),g=a(266),x=a(284),O=a(271),v=a(272),y=a(59),C=a(273),k=a(281),S=a(274),w=a(6),N=a(33),D=a.n(N),I=a(72),A=a.n(I),z=a(39),M=a.n(z),R=a(286),E=function(e){return Object(R.a)({container:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",direction:"ltr",line:{height:1.34}},root:{display:"flex",width:"75%"},margin:{margin:e.spacing(1),padding:0},form:{"& > *":{margin:e.spacing(1),width:"100%"}},buttonSignin:{marginTop:"10%",textAlign:"center"},buttonSignup:{color:"#2c3e50",marginTop:"10%",textAlign:"center",width:"50%",alignSelf:"center"},blockRight:{display:"flex",flex:"1",flexDirection:"column",justifyContent:"center",width:"50%",backgroundColor:"#2c3e50",color:"white"},blockLeft:{flex:"1"}})},L=a(20),P=a.n(L),B=function(e,t,a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"},T=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var r=a[n];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""};P.a.defaults.baseURL="https://api-dropbox.ddns.net",P.a.defaults.headers={authorization:T("token")?"Baerer ".concat(T("token")):void 0};var F=function(e){return P.a.get("/share/files",{params:{path:e}})},V=function(e){return P.a.put("/user",e)},W=function(e){return P.a.post("/auth/register",e)},q=function(e){return P.a.post("/auth/login",e)},H=function(e){return P.a.post("/auth/forgot-password",{email:e})},G=function(e){return P.a.post("/share/new-files",e)},U=function(e){return P.a.post("/share/new-folder",e)},J=function(e){return P.a.put("/auth/reset-password/".concat(e.str),e)},$=function(e){return P.a.put("/share/save-code-file",e)},Z=function(){return P.a.delete("/user")},_=a(35),K=Object(_.a)(),Q=a(282),X=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",username:"",password:"",confirm:"",message:"",open:!1,severity:"success"},e.handleChange=function(t){e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},t.target.name,t.target.value))}))},e.isValidEmail=function(e){return/\S+@\S+\.\S+/.test(e)},e.isValidPassword=function(e){return/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(e)},e.handleSubmit=function(){var t=Object(h.a)(u.a.mark((function t(a){var n,r,s,i,c,o,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.password,s=n.confirm,i=n.email,c=[],t.prev=3,e.isValidEmail(i)||c.push("Format courriel invalide"),e.isValidPassword(r)||c.push("Le mot de passe doit contenir au moins des caract\xe8res sp\xe9ciaux et des lettres majuscules"),r!==s&&c.push("Les mots de passe ne sont pas identiques"),!(c.length>0)){t.next=12;break}return e.setState({message:c.join(" | "),severity:"error",open:!0}),t.abrupt("return");case 12:return t.next=14,W(e.state);case 14:o=t.sent,l=o.data,B("token",l.token,1),B("email",e.state.email,1),P.a.defaults.headers={authorization:"Baerer ".concat(l.token)},K.push("/tableau-de-bord");case 20:t.next=26;break;case 22:t.prev=22,t.t0=t.catch(3),console.error(t.t0),e.setState({open:!0,severity:"error",message:t.t0.response.data.error});case 26:case"end":return t.stop()}}),t,null,[[3,22]])})));return function(e){return t.apply(this,arguments)}}(),e.handleClose=function(){e.setState({open:!1})},e}return Object(b.a)(a,[{key:"send",value:function(){var e=Object(h.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,W(this.state);case 4:a=e.sent,n=a.data,B("token",n.token,1),P.a.defaults.headers={authorization:"Baerer ".concat(n.token)},K.push("/tableau-de-bord"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.severity,r=t.message,s=t.open;return Object(n.jsxs)(g.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:"error"===a?null:6e3,open:s,onClose:this.handleClose,children:Object(n.jsx)(Q.a,{onClose:this.handleClose,severity:a,children:r})}),Object(n.jsx)(O.a,{className:e.root,children:Object(n.jsxs)(v.a,{className:e.blockLeft,children:[Object(n.jsx)(y.a,{component:"h5",variant:"h5",align:"center",children:"Inscription"}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(n.jsx)("span",{children:"* champ requis"}),Object(n.jsx)("div",{className:e.margin,children:Object(n.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(M.a,{})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(k.a,{required:!0,name:"email",label:"Courriel",type:"email",value:this.state.email,onChange:this.handleChange})})]})}),Object(n.jsx)("div",{className:e.margin,children:Object(n.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(k.a,{required:!0,name:"username",label:"Nom d'utilisateur",type:"text",value:this.state.username,onChange:this.handleChange})})]})}),Object(n.jsx)("div",{className:e.margin,children:Object(n.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(D.a,{})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(k.a,{required:!0,name:"password",label:"password",type:"password",value:this.state.password,onChange:this.handleChange})})]})}),Object(n.jsx)("div",{className:e.margin,children:Object(n.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(D.a,{})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(k.a,{required:!0,name:"confirm",label:"Confirmer password",type:"password",value:this.state.confirm,onChange:this.handleChange})})]})}),Object(n.jsx)("div",{className:e.buttonSignup,children:Object(n.jsx)(S.a,{type:"submit",variant:"contained",children:"S'inscrire"})})]})]})})]})}}]),a}(s.a.Component);X.Display=Object(w.a)(E)(X);var Y=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",username:"",isLoaded:!1,message:"",open:!1,severity:"success"},e.handleSubmit=function(){var t=Object(h.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,V(e.state);case 4:n=t.sent,n.data,K.push("/profil"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},t.target.name,t.target.value))}))},e.removeMyProfile=Object(h.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!confirm("Voulez-vous supprimer votre profil d\xe9finitivement ?")){t.next=17;break}return t.prev=2,t.next=5,Z();case 5:a=t.sent,n=a.data,e.setState({message:"".concat(n.message,". Redirection automatique vers la page d'accueil"),severity:"success",open:!0}),B("token","",0),B("email","",0),sessionStorage.clear(),setTimeout((function(){K.replace("/")}),3e3),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({message:t.t0.response.data.error,severity:"error",open:!0});case 17:return t.abrupt("return");case 18:case"end":return t.stop()}}),t,null,[[2,14]])}))),e.handleClose=function(){e.setState({open:!1})},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/user");case 3:t=e.sent,a=t.data,this.setState(Object(o.a)({isLoaded:!0},a)),console.log("data: ",a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.setState({isLoaded:!0});case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.email,r=t.username,s=t.isLoaded,i=t.message,c=t.severity,o=t.open;return s?Object(n.jsx)("div",{children:Object(n.jsxs)(g.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:3e3,open:o,onClose:this.handleClose,children:Object(n.jsx)(Q.a,{onClose:this.handleClose,severity:c,children:i})}),Object(n.jsx)(O.a,{className:e.root,children:Object(n.jsx)(v.a,{className:e.blockLeft,children:Object(n.jsxs)("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(n.jsx)("div",{className:e.margin,children:Object(n.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(M.a,{})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(k.a,{name:"email",label:"Courriel",type:"email",value:a})})]})}),Object(n.jsx)("div",{className:e.margin,children:Object(n.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(D.a,{})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(k.a,{name:"username",label:"username",type:"text",value:r,onChange:this.handleChange})})]})}),Object(n.jsxs)("div",{className:e.buttonSignin,children:[Object(n.jsx)(S.a,{type:"submit",variant:"contained",children:"Modifier"}),Object(n.jsx)(S.a,{type:"button",variant:"contained",onClick:this.removeMyProfile,style:{backgroundColor:"red",color:"white",marginLeft:"2.5%"},children:"Supprimer mon profil"})]})]})})})]})}):Object(n.jsx)("div",{children:"Chargement\u2026"})}}]),a}(s.a.Component);Y.Display=Object(w.a)(E)(Y);var ee=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={password:"",confirm:"",str:e.props.match.params.str,message:"",open:!1,severity:"success"},e.handleSubmit=function(){var t=Object(h.a)(u.a.mark((function t(a){var n,r,s,i,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,r=n.password,s=n.confirm,i=n.str,t.prev=2,c={password:r,confirm:s,str:i},t.next=6,J(c);case 6:e.setState({open:!0,severity:"success",message:"Mot de passe r\xe9initialis\xe9 avec succ\xe8s ! Redirection automatique vers la page de connexion"}),setTimeout((function(){K.push("/")}),3e3),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.error(t.t0),e.setState({open:!0,severity:"error",message:t.t0.response.data.error});case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},t.target.name,t.target.value))}))},e.handleClose=function(){e.setState({open:!1})},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.severity,r=t.message,s=t.open;return Object(n.jsxs)(g.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:"error"===a?null:3e3,open:s,onClose:this.handleClose,children:Object(n.jsx)(Q.a,{onClose:this.handleClose,severity:a,children:r})}),Object(n.jsx)(O.a,{className:e.root,children:Object(n.jsxs)(v.a,{className:e.blockLeft,children:[Object(n.jsx)(y.a,{component:"h5",variant:"h5",align:"center",children:"R\xe9initialiser votre mot de passe"}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(n.jsx)("div",{className:e.margin,children:Object(n.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(D.a,{})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(k.a,{name:"password",label:"password",type:"password",value:this.state.password,onChange:this.handleChange})})]})}),Object(n.jsx)("div",{className:e.margin,children:Object(n.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(D.a,{})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(k.a,{name:"confirm",label:"Confirmer password",type:"password",value:this.state.confirm,onChange:this.handleChange})})]})}),Object(n.jsx)("div",{className:e.buttonSignup,children:Object(n.jsx)(S.a,{type:"submit",variant:"contained",children:"Reinitialiser"})})]})]})})]})}}]),a}(s.a.Component);ee.Display=Object(w.a)(E)(ee);var te=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",message:"",open:!1,severity:"success"},e.handleSubmit=function(){var t=Object(h.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,H(e.state.email);case 4:n=t.sent,r=n.data,e.setState({open:!0,message:r.message}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0),e.setState({open:!0,severity:"error",message:t.t0.response.data.error});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},t.target.name,t.target.value))}))},e.handleClose=function(){e.setState({open:!1})},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=(this.state.email,this.state),a=t.severity,r=t.message,s=t.open;return Object(n.jsx)("div",{children:Object(n.jsx)(g.a,{children:Object(n.jsxs)(O.a,{className:e.root,children:[Object(n.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:6e3,open:s,onClose:this.handleClose,children:Object(n.jsx)(Q.a,{onClose:this.handleClose,severity:a,children:r})}),Object(n.jsxs)(v.a,{className:e.blockLeft,children:[Object(n.jsx)(y.a,{component:"h5",variant:"h5",align:"center",children:"confirmer votre email"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:e.form,noValidate:!0,autoComplete:"off",children:[Object(n.jsx)("div",{className:e.margin,children:Object(n.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(M.a,{})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(k.a,{name:"email",label:"Courriel",type:"email",value:this.state.email,onChange:this.handleChange})})]})}),Object(n.jsx)("div",{className:e.buttonSignin,children:Object(n.jsx)(S.a,{type:"submit",variant:"contained",children:"Envoyer"})})]})]})]})})})}}]),a}(s.a.Component);te.Display=Object(w.a)(E)(te);var ae=a(122),ne=Object(w.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(n.jsx)(ae.a,Object(o.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),re=function(e){return Object(R.a)({container:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},root:{display:"flex",width:"75%"},margin:{margin:e.spacing(1)},form:{"& > *":{margin:e.spacing(1),width:"100%"}},buttonSignin:{marginTop:"10%",textAlign:"center"},buttonSignup:{color:"#2c3e50",marginTop:"10%",textAlign:"center",width:"50%",alignSelf:"center"},blockRight:{display:"flex",flex:"1",flexDirection:"column",justifyContent:"center",width:"50%",backgroundColor:"#2c3e50",color:"white"},blockLeft:{flex:"1"}})},se=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",message:"",open:!1,severity:"success"},e.handleSubmit=function(){var t=Object(h.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,q(e.state);case 4:n=t.sent,r=n.data,B("token",r.token,1),B("email",e.state.email,1),P.a.defaults.headers={authorization:"Baerer ".concat(r.token)},K.push("/tableau-de-bord"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.error(t.t0),e.setState({open:!0,severity:"error",message:t.t0.response.data.error});case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},t.target.name,t.target.value))}))},e.handleClose=function(){e.setState({open:!1})},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.classes;if(T("token"))return Object(n.jsx)(l.a,{to:"/tableau-de-bord"});var t=this.state,a=t.severity,r=t.message,s=t.open;return Object(n.jsxs)(g.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:6e3,open:s,onClose:this.handleClose,children:Object(n.jsx)(Q.a,{onClose:this.handleClose,severity:a,children:r})}),Object(n.jsxs)(O.a,{className:e.root,children:[Object(n.jsxs)(v.a,{className:e.blockLeft,children:[Object(n.jsx)(y.a,{component:"h5",variant:"h5",align:"center",children:"Connexion"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:e.form,noValidate:!0,autoComplete:"off",children:[Object(n.jsx)("div",{className:e.margin,children:Object(n.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(M.a,{})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(k.a,{name:"email",label:"Courriel",type:"email",value:this.state.email,onChange:this.handleChange})})]})}),Object(n.jsx)("div",{className:e.margin,children:Object(n.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(D.a,{})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(k.a,{name:"password",label:"Mot de passe",type:"password",value:this.state.password,onChange:this.handleChange})}),Object(n.jsx)(S.a,{className:e.buttonSignup,onClick:function(){return K.push("/recuperation-mot-de-passe")},children:"Mot de passe oubli\xe9"})]})}),Object(n.jsx)("div",{className:e.buttonSignin,children:Object(n.jsx)(S.a,{type:"submit",variant:"contained",children:"Se connecter"})})]})]}),Object(n.jsxs)(v.a,{className:e.blockRight,children:[Object(n.jsx)(y.a,{component:"h5",variant:"h5",align:"center",children:"Dropbox | IMIE-Paris"}),Object(n.jsx)(y.a,{variant:"subtitle1",align:"center",children:"Groupe 6"}),Object(n.jsx)(S.a,{variant:"contained",className:e.buttonSignup,onClick:function(){return K.push("/inscription")},children:"S'inscrire"})]})]})]})}}]),a}(s.a.Component);se.Display=Object(w.a)(re)(se);var ie=a(125),ce=function(e){return Object(R.a)({root:{flexGrow:1,padding:15},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:"80vh"},menu:{border:"1px solid #d3d4d5"},file:{textAlign:"initial",margin:"1% 0"},base:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out",cursor:"pointer"},active:{borderColor:"#2196f3"},accept:{borderColor:"#00e676"},reject:{borderColor:"#ff1744"},files:{display:"flex",flexDirection:"column",width:" 100%",margin:"15% 0","& > div":{margin:"2.5% 0",display:"flex",justifyContent:"flex-end","&>span":{margin:"0 auto"},"&>svg:hover":{color:"red"}},button:{margin:e.spacing(1)}}})},oe=function(e){return Object(R.a)({root:{flexGrow:1,textAlign:"initial"},codeMirror:{"&>div":{height:"75vh"}}})},le=(a(167),a(168),a(169),a(100),a(101),a(102),a(170),a(171),a(174),a(175),a(116)),de=a(58),ue=a.n(de),he=a(117),je=a.n(he),pe=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={code:"",langage:"xml",open:!1,severity:"success",message:""},e.onChange=function(t,a,n){e.setState({code:n}),"paste"===a.origin&&e.beautify()},e.beautify=function(){switch(console.log("beautify",e.state.langage),e.state.langage){case"xml":e.setState({code:ue()(e.state.code,{format:"html"})});break;case"json":e.setState({code:ue()(e.state.code,{format:"json"})});break;case"sql":e.setState({code:je.a.format(e.state.code)});break;case"css":e.setState({code:ue()(e.state.code,{format:"css"})});break;case"js":e.setState({code:ue()(e.state.code,{format:"js"})})}},e.saveCode=function(){console.log(e.props.filename);var t=sessionStorage.getItem("pathname")?sessionStorage.getItem("pathname"):"";$({code:e.state.code,language:e.state.langage,path:"".concat(t,"/").concat(e.props.filename)}).then((function(t){var a=t.data;console.log(a),e.setState({message:a.message,open:!0,severity:"success"})})).catch((function(t){console.error(t.response),e.setState({message:t.response.data.error,open:!0,severity:"error"})}))},e.handleClose=function(){e.setState({open:!1})},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),this.setState({langage:this.props.language,code:this.props.value}),setTimeout((function(){e.beautify()}),250)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.language,r=e.refValue,s=this.state,i=s.code,c=s.open,o=s.message,l=s.severity;return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:6e3,open:c,onClose:this.handleClose,children:Object(n.jsx)(Q.a,{onClose:this.handleClose,severity:l,children:o})}),Object(n.jsx)("button",{onClick:this.beautify,children:"Beautify"}),Object(n.jsx)("button",{onClick:this.saveCode,children:"Enregistrer"}),Object(n.jsx)(le.Controlled,{ref:r,onBeforeChange:this.onChange,value:i,className:t.codeMirror,options:{lineWrapping:!0,lint:!0,mode:a,theme:"material",lineNumbers:!0}})]})}}]),a}(s.a.Component);pe.Display=Object(w.a)(oe)(pe);var be=function(e){return Object(n.jsx)(Q.a,Object(o.a)({elevation:6,variant:"filled"},e))},me=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={message:"",open:!1,severity:"success",anchorEl:null,file:"",isCode:!1,language:"xml"},e.handleClickMenu=function(t){e.setState({anchorEl:t.currentTarget})},e.handleCloseMenu=function(){e.setState({anchorEl:null})},e.handleClose=function(){e.setState({open:!1})},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(e,t){return P.a.get("/share/files/".concat(t),{params:{pathname:e}})})(sessionStorage.getItem("pathname")?sessionStorage.getItem("pathname"):"",this.props.match.params.file).then((function(t){var a=t.data;if(a.isCode){var n="html"===a.ext?"xml":a.ext;e.setState({file:a.file,isCode:!0,language:n})}else e.setState({file:"data:application/pdf;base64, "+a.file,isCode:!1})}))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.match,r=this.state,s=r.severity,i=r.open,c=r.message,o=r.file,l=r.isCode,d=r.language;return console.log(K),Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:6e3,open:i,onClose:this.handleClose,children:Object(n.jsx)(be,{onClose:this.handleClose,severity:s,children:c})}),Object(n.jsx)(C.a,{container:!0,justify:"center",children:Object(n.jsx)(C.a,{item:!0,xs:12,children:Object(n.jsx)(ie.a,{className:t.paper,children:l?Object(n.jsx)(pe.Display,{refValue:void 0,value:o,language:d,filename:a.params.file}):Object(n.jsx)("iframe",{src:o,height:"100%",width:"100%"})})})})]})}}]),a}(s.a.Component);me.Display=Object(w.a)(ce)(me);var fe=a(123),ge=a(287),xe=a(277),Oe=a(278),ve=a(288),ye=a(120),Ce=a.n(ye),ke=a(88),Se=a.n(ke),we=a(89),Ne=function(e){return Object(R.a)({root:{padding:15},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},menu:{border:"1px solid #d3d4d5"},file:{textAlign:"initial",margin:"1% 0"},base:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out",cursor:"pointer"},active:{borderColor:"#2196f3"},accept:{borderColor:"#00e676"},reject:{borderColor:"#ff1744"},files:{display:"flex",flexDirection:"column",width:" 100%",margin:"15% 0","& > div":{margin:"2.5% 0",display:"flex",justifyContent:"flex-end","&>span":{margin:"0 auto"},"&>svg:hover":{color:"red"}},button:{margin:e.spacing(1)}}})},De=a(285),Ie=a(276),Ae=a(119),ze=a.n(Ae),Me=function(){return Object(R.a)({breadcrumb:{cursor:"pointer"}})},Re=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.path,r=e.handleClickBreadcrumbs;return Object(n.jsxs)(De.a,{separator:Object(n.jsx)(ze.a,{fontSize:"small"}),"aria-label":"breadcrumb",children:[Object(n.jsx)(Ie.a,{className:t.breadcrumb,color:"inherit",onClick:function(){return r(-1)},children:"".concat(T("email")||"/")}),a.map((function(e,a){return""!==e?Object(n.jsx)(Ie.a,{className:t.breadcrumb,color:"inherit",onClick:function(){return r(a)},children:e},a.toString()):null}))]})}}]),a}(s.a.Component);Re.Display=Object(w.a)(Me)(Re);var Ee=function(e){return Object(n.jsx)(Q.a,Object(o.a)({elevation:6,variant:"filled"},e))},Le=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={message:"",open:!1,severity:"success",anchorEl:null,files:[],dirs:[],path:[]},e.onDrop=function(t){var a=new FormData;t.forEach((function(e){a.append("pathname",sessionStorage.getItem("pathname")),a.append("myFiles",e)})),G(a).then((function(t){var a=t.data;e.setState({message:a.message,severity:"success",open:!0}),e.getAllFilesWithCurrentPathname()})).catch((function(t){console.log(t.response),e.setState({message:t.response.data.error,severity:"error",open:!0})}))},e.onDropFolder=function(t){var a=new FormData;t.forEach((function(e){a.append("pathname",sessionStorage.getItem("pathname")),a.append("names",String(e.webkitRelativePath)),a.append("myFiles",e)})),U(a).then((function(t){var a=t.data;e.setState({message:a.message,severity:"success",open:!0}),e.getAllFilesWithCurrentPathname()})).catch((function(t){console.log(t.response),e.setState({message:t.response.data.error,severity:"error",open:!0})}))},e.handleClickMenu=function(t){e.setState({anchorEl:t.currentTarget})},e.handleCloseMenu=function(){e.setState({anchorEl:null})},e.handleClose=function(){e.setState({open:!1})},e.handleClickBreadcrumbs=function(t){var a=e.state.path,n=(a=t+1===0?[]:a.slice(0,t+1)).join("/")+"/";sessionStorage.setItem("pathname",n),e.getAllFilesWithCurrentPathname()},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getAllFilesWithCurrentPathname(),console.log(sessionStorage.getItem("pathname"))}},{key:"componentDidUpdate",value:function(){var e=this,t=this.state.path.join("/")+"/";t!==sessionStorage.getItem("pathname")&&F(t).then((function(a){var n=a.data;e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{dirs:n.dirs,files:n.files})})),sessionStorage.setItem("pathname",t)})).catch((function(e){console.log(e.response)}))}},{key:"getAllFilesWithCurrentPathname",value:function(){var e=this,t="";if(sessionStorage.getItem("pathname")){var a,n=null===(a=sessionStorage.getItem("pathname"))||void 0===a?void 0:a.split("/");n.pop(),t=n.join("/")+"/",this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{path:n})}))}else t=this.state.path.join("/");F(t).then((function(t){var a=t.data;e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{dirs:a.dirs,files:a.files})}))})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,r=a.severity,s=a.open,i=a.message,c=a.anchorEl,l=a.files,d=a.dirs,u=a.path;return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:6e3,open:s,onClose:this.handleClose,children:Object(n.jsx)(Ee,{onClose:this.handleClose,severity:r,children:i})}),Object(n.jsxs)(C.a,{container:!0,justify:"center",children:[Object(n.jsxs)(C.a,{item:!0,xs:2,children:[Object(n.jsx)(S.a,{"aria-controls":"simple-menu","aria-haspopup":"true",startIcon:Object(n.jsx)(Ce.a,{}),style:{backgroundColor:"#2c3e50",color:"white"},variant:"contained",className:t.button,onClick:this.handleClickMenu,children:"Nouveau"}),Object(n.jsxs)(ne,{anchorEl:c,open:Boolean(c),onClose:this.handleCloseMenu,children:[Object(n.jsxs)(ge.a,{children:[Object(n.jsx)(xe.a,{children:Object(n.jsx)(Se.a,{})}),Object(n.jsx)(Oe.a,{primary:"Dossier"})]}),Object(n.jsx)("div",{style:{height:1,backgroundColor:"silver"}}),Object(n.jsx)(ge.a,{children:Object(n.jsx)(we.a,{onDrop:this.onDrop,children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(n.jsxs)("div",Object(o.a)(Object(o.a)({},t({className:"dropzone"})),{},{children:[Object(n.jsx)("input",Object(o.a)({},a())),"Importer des fichiers"]}))}})}),Object(n.jsx)(ge.a,{children:Object(n.jsx)(we.a,{onDrop:this.onDropFolder,children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(n.jsxs)("div",Object(o.a)(Object(o.a)({},t({className:"dropzone"})),{},{children:[Object(n.jsx)("input",Object(o.a)(Object(o.a)({},a()),{},{webkitdirectory:"",directory:""})),"Importer un dossier"]}))}})})]})]}),Object(n.jsxs)(C.a,{item:!0,xs:10,children:[Object(n.jsx)(Re.Display,{path:u,handleClickBreadcrumbs:this.handleClickBreadcrumbs}),Object(n.jsxs)(ie.a,{className:t.paper,children:[d&&d.map((function(a,r){return Object(n.jsx)("div",{className:t.file,children:Object(n.jsx)(S.a,{startIcon:Object(n.jsx)(Se.a,{}),onClick:function(){e.setState({path:[].concat(Object(fe.a)(u),[a])})},children:a})},r.toString())})),l.map((function(e,a){return Object(n.jsx)("div",{className:t.file,children:Object(n.jsx)(ve.a,{label:e,onClick:function(){return window.open("/tableau-de-bord/".concat(e),"_blank")}})},a.toString())}))]})]})]})]})}}]),a}(s.a.Component);Le.Display=Object(w.a)(Ne)(Le);var Pe=a(279),Be=a(280),Te=a(270),Fe=a(121),Ve=a.n(Fe),We=a(9),qe=function(e){return Object(R.a)({grow:{flexGrow:1,"&>header>div":{backgroundColor:"#2c3e50"}},menuButton:{marginRight:e.spacing(2)},title:Object(j.a)({width:"100%",display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(We.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(We.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(j.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(j.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),signout:{width:"100%",textAlign:"end","&>button":{color:"white"}},btnProfil:{width:"100%","&>button":{color:"white"}}})},He=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).disconnect=function(){B("token","",0),B("email","",0),sessionStorage.clear(),K.push("/")},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(n.jsx)("div",{className:e.grow,children:Object(n.jsx)(Pe.a,{position:"static",children:Object(n.jsxs)(Be.a,{children:[Object(n.jsx)(Te.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(n.jsx)(Ve.a,{})}),Object(n.jsx)(y.a,{className:e.title,variant:"h6",noWrap:!0,children:Object(n.jsx)("div",{className:e.btnProfil,children:Object(n.jsx)(S.a,{startIcon:Object(n.jsx)(A.a,{}),onClick:function(){return K.push("/profil")},children:"Voir mon profil"})})}),Object(n.jsx)("div",{className:e.signout,children:Object(n.jsx)(S.a,{onClick:this.disconnect,children:"Se d\xe9connecter"})})]})})})}}]),a}(s.a.Component);He.Display=Object(w.a)(qe)(He);var Ge=function(e){return Object(R.a)({footerBar:{flex:1,backgroundColor:"rgb(212, 214, 238 )",width:"100%"},root:{flexGrow:1},contenufooter:{flex:1,marginTop:"2.5%",backgroundColor:"#2c3e50",width:"100%",display:"flex",alignItems:"flex-start",fontSize:"medium",justifyContent:"center"},footerContact:{padding:"5px 0",fontSize:"medium"},listeimg:{width:"100px",height:"100px",margin:"1",padding:"1"},develop:{listStyleType:"none"},footerp:{fontSize:"medium",paddingBottom:"5px",color:"white"}})},Ue=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(n.jsxs)("div",{className:e.contenufooter,children:[Object(n.jsx)(C.a,{item:!0,xs:3,children:Object(n.jsx)("div",{className:e.listeimg,children:Object(n.jsx)("img",{className:e.listeimg,src:"logo-dropbox.png",alt:"Dropbox"})})}),Object(n.jsx)(C.a,{item:!0,xs:3,children:Object(n.jsxs)("div",{className:e.footerp,children:[Object(n.jsx)("h3",{children:"Restons en contact"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"01-41-05-73-80"}),Object(n.jsx)("li",{children:"Dropbox@imie-paris.fr"})]})]})}),Object(n.jsx)(C.a,{item:!0,xs:3,children:Object(n.jsxs)("div",{className:e.footerp,children:[Object(n.jsx)("h3",{children:"developp\xe9 par :"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:" Adrien Maillard "}),Object(n.jsx)("li",{children:"Gaye Mboup "})]})]})})]})}}]),a}(s.a.Component);Ue.Display=Object(w.a)(Ge)(Ue);var Je=function(e){var t=Object.assign({},e);return T("token")?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(He.Display,{}),Object(n.jsx)(l.b,Object(o.a)({},t)),Object(n.jsx)(Ue.Display,{})]}):Object(n.jsx)(l.a,{to:"/"})};var $e=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(l.c,{history:K,children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",component:se.Display}),Object(n.jsx)(l.b,{exact:!0,path:"/inscription",component:X.Display}),Object(n.jsx)(l.b,{exact:!0,path:"/recuperation-mot-de-passe",component:te.Display}),Object(n.jsx)(l.b,{exact:!0,path:"/reinitialiser-mot-de-passe/:str",component:ee.Display}),Object(n.jsx)(Je,{exact:!0,path:"/tableau-de-bord",component:Le.Display}),Object(n.jsx)(Je,{exact:!0,path:"/tableau-de-bord/:file",component:me.Display}),Object(n.jsx)(Je,{exact:!0,path:"/profil",component:Y.Display})]})})})};c.a.render(Object(n.jsx)($e,{}),document.getElementById("root"))}},[[234,1,2]]]);
//# sourceMappingURL=main.31f2e888.chunk.js.map