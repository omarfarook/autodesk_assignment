(this["webpackJsonpautodesk-online"]=this["webpackJsonpautodesk-online"]||[]).push([[0],{133:function(e,t,a){e.exports=a(240)},138:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),l=(a(138),a(18)),s=a(29),i=a(7),m=a(2),u=a.n(m),d=a(107),p=a(11),f=(a(33),"Please enter a valid email address"),E=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,b={password:"",userName:"",isUserNameVerified:!1,isFormValid:!1,buttonState:"Next"};function h(e,t){switch(t.type){case"UPDATE_NAME":return Object(p.a)(Object(p.a)({},e),{},{userName:t.value});case"VERIFY_USER":return Object(p.a)(Object(p.a)({},e),{},{buttonState:"Verifying"});case"TOGGLE_PASSWORD":return Object(p.a)(Object(p.a)({},e),{},{isUserNameVerified:!0,buttonState:"Sign in"});case"FORM_VALID":return Object(p.a)(Object(p.a)({},e),{},{isFormValid:!0});case"RESET":return Object(p.a)({},b);default:return e}}var v,O=function(){var e=Object(n.useReducer)(h,b),t=Object(d.a)(e,2),a=t[0],o=t[1];return r.a.createElement("section",{className:"login-register-container login-container"},a.userName&&a.isUserNameVerified?r.a.createElement("div",{className:"user-header"},r.a.createElement("i",{onClick:function(){return o({type:"RESET"})},className:"arrow left"}),r.a.createElement("h3",null,"Welcome"),r.a.createElement("span",null,a.userName)):r.a.createElement("h4",{className:"page-title"},"Sign in"),r.a.createElement("form",{className:"form-container",onSubmit:function(e){e.preventDefault(),a.userName&&!a.isUserNameVerified&&(o({type:"VERIFY_USER"}),setTimeout((function(){o({type:"TOGGLE_PASSWORD"})}),1e3))}},!a.isUserNameVerified&&r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"User name"},"User Name"),r.a.createElement("input",{type:"text",placeholder:"User name",value:a.userName,onChange:function(e){return o({type:"UPDATE_NAME",value:e.target.value})}})),a.isUserNameVerified&&r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"Password"},"Password"),r.a.createElement("input",{type:"passsword",placeholder:"Passsword"})),r.a.createElement("button",{type:"submit"},a.buttonState)),r.a.createElement("span",{className:"create-account"},"new to autodesk? ",r.a.createElement(s.b,{to:"/register"},"Create account")))},g=a(52),N=a(53),y=a(56),T=a(55),j=document.getElementById("toaster"),S=function(e){Object(y.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).el=document.createElement("div"),e}return Object(N.a)(a,[{key:"componentDidMount",value:function(){j.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){j.removeChild(this.el)}},{key:"render",value:function(){return Object(o.createPortal)(this.props.children,this.el)}}]),a}(n.Component),k=a(51),w=a(101),A=a(102),F=function(e){var t=e.input,a=e.label,n=e.type,o=e.placeholder,c=e.meta,l=c.touched,s=c.error,i=c.warning;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-label"},r.a.createElement("input",Object.assign({},t,{placeholder:o,type:n})),r.a.createElement("label",{htmlFor:a},a)),l&&(s&&r.a.createElement("span",{className:"input-error"},s)||i&&r.a.createElement("span",null,i)))},U=function(e){return e?void 0:"Please enter your first name"},_=function(e){return e?void 0:"Please enter your last name"},P=function(e){return v=e,e&&!E.test(e)?f:e?void 0:f},R=function(e){return e===v?void 0:"Your email and confirmation email must match"},C=function(e){return e?void 0:"Agreement to the Autodesk Terms of Use and Privacy Statement is required. Please check the box above to agree"},G=function(e){Object(y.a)(a,e);var t=Object(T.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){var e=this.props.handleSubmit;return r.a.createElement("form",{className:"form-container",onSubmit:e},r.a.createElement("div",{className:"name-field"},r.a.createElement("div",{className:"form-control"},r.a.createElement(w.a,{name:"firstName",component:F,type:"text",placeholder:" ",label:"First Name",validate:[U]})),r.a.createElement("div",{className:"form-control"},r.a.createElement(w.a,{name:"lastName",component:F,type:"text",placeholder:" ",label:"Last Name",validate:[_]}))),r.a.createElement("div",{className:"form-control"},r.a.createElement(w.a,{name:"email",component:F,type:"email",placeholder:" ",label:"Email",validate:[P]})),r.a.createElement("div",{className:"form-control"},r.a.createElement(w.a,{name:"confirmEmail",component:F,type:"email",placeholder:" ",label:"Confirm email",validate:[R]})),r.a.createElement("div",{className:"form-control"},r.a.createElement(w.a,{name:"password",component:F,type:"password",placeholder:" ",label:"Password",validate:[]})),r.a.createElement("div",{className:"confirm-checkbox"},r.a.createElement("span",{className:"custom-checkbox"},"I agree to the ",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Autodesk Terms of Use")," and acknowledge the ",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Privacy Statement"),"."),r.a.createElement(w.a,{name:"termsAndCondition",component:F,type:"checkbox",placeholder:" ",label:"",validate:[C]})),r.a.createElement("button",{type:"submit"},"Create account"))}}]),a}(r.a.Component);F.prototype={handleSubmit:u.a.func};var V=Object(A.a)({form:"RegisterForm"})(G),M=function(e){return r.a.createElement("section",{className:"login-register-container register-container"},r.a.createElement("h4",{className:"page-title"},"Create account"),r.a.createElement(V,{onSubmit:function(t,a){a(Object(k.a)("RegisterForm")),e.enableToaster("Your account has been created successfully"),e.history.push("/")}}),r.a.createElement("span",{className:"create-account"},"Already have an account? ",r.a.createElement(s.b,{to:"/login"},"Sign in")))};M.prototype={enableToaster:u.a.func};var x=Object(l.b)(null,(function(e){return{enableToaster:function(t){return e((a=t,function(e){a&&(e(function(e){return{type:"TOGGLE_ON_TOAST",value:e}}(a)),setTimeout((function(){e({type:"TOGGLE_OFF_TOAST"})}),5e3))}));var a}}}))(M),D=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{basename:"/"},r.a.createElement(i.d,null,r.a.createElement(i.a,{from:"/",exact:!0,to:"/login"}),r.a.createElement(i.b,{path:"/login",component:O}),r.a.createElement(i.b,{path:"/register",component:x}),r.a.createElement(i.b,{component:O}))),e.isToastOn&&r.a.createElement(S,null,r.a.createElement("span",{className:"toast-msg"},e.toastMsg)))};D.prototype={isToastOn:u.a.bool,toastMsg:u.a.string};var L=Object(l.b)((function(e){return{isToastOn:e.ToastReducer.isToastOn,toastMsg:e.ToastReducer.toastMsg}}))(D),I=a(8),W=a(103),Y=a(106),B={isToastOn:!1,toastMsg:""},Z=Object(I.c)({form:W.a,ToastReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_ON_TOAST":return Object(p.a)(Object(p.a)({},e),{},{isToastOn:!0,toastMsg:t.value});case"TOGGLE_OFF_TOAST":return Object(p.a)({},B);default:return e}}}),J=Object(I.d)(Z,Object(I.a)(Y.a)),$=function(){return r.a.createElement("footer",null,r.a.createElement("span",null,"Your account for everything Autodesk",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Learn more")))},q=function(){return r.a.createElement(l.a,{store:J},r.a.createElement("div",{className:"root"},r.a.createElement(L,null),r.a.createElement($,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.f8501340.chunk.js.map