(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),s=n.n(c),l=(n(18),n(10)),o=n(3),i=(n(19),n(20),n(1)),u=function(){return Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"header container",children:[Object(i.jsx)(l.b,{to:"https://enjsadman.github.io/abz/",className:"header__logo-link",children:Object(i.jsx)("img",{className:"header__logo",src:"/images/logo.svg",alt:"testtask logo"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{type:"button",className:"button header__button",onClick:function(){var e;null===(e=document.getElementById("users"))||void 0===e||e.scrollIntoView()},children:"Users"}),Object(i.jsx)("button",{type:"button",className:"button header__button",onClick:function(){var e;null===(e=document.getElementById("post"))||void 0===e||e.scrollIntoView()},children:"Sign up"})]})]})})},b=n(4),d=n.n(b),m=n(9),p=n(5),j="https://frontend-test-assignment-api.abz.agency/api/v1/",h=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j).concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function f(e){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("token");case 2:return n=e.sent,e.next=5,fetch("".concat(j,"users"),{method:"POST",headers:{Token:n.token},body:t});case 5:return a=e.sent,e.abrupt("return",a.status);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=n(13);n(26);function O(e,t){if(t.includes("card__phone")){var n="".concat(e.slice(0,3)," (").concat(e.slice(3,6),") ").concat(e.slice(6,9)," ").concat(e.slice(9,11)," ").concat(e.slice(11,13));return Object(i.jsx)("p",{className:"".concat(t),children:n})}if(e.length<=34)return Object(i.jsx)("p",{className:"".concat(t),children:e});var a="".concat(e.slice(0,34),"...");return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(_.a,{id:a,place:"bottom",arrowColor:"transparent",backgroundColor:"rgba(0, 0, 0, 0.87)",children:e}),Object(i.jsx)("p",{"data-tip":!0,"data-for":a,className:"".concat(t),children:a})]})}var g=function(e){var t=e.imageUrl,n=e.name,r=e.position,c=e.email,s=e.phone,l=Object(a.useState)(t),u=Object(o.a)(l,2),b=u[0],m=u[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(t).catch((function(e){m("images/photo-cover.png")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:"".concat(b),alt:"".concat(n),className:"card__photo"}),O(n,"card__name"),O(r,"card__position"),O(c,"card__email"),O(s,"card__phone")]})},v=(n(27),function(e){var t=e.serverResponse,n=Object(a.useState)([]),r=Object(o.a)(n,2),c=r[0],s=r[1],l=Object(a.useState)("users?page=1&count=6"),u=Object(o.a)(l,2),b=u[0],j=u[1],f=Object(a.useState)(),x=Object(o.a)(f,2),_=x[0],O=x[1];return Object(a.useEffect)((function(){s([]),j("users?page=1&count=6")}),[t]),Object(a.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===b){e.next=8;break}return e.next=3,h(b);case 3:(t=e.sent).users.sort((function(e,t){return t.registration_timestamp-e.registration_timestamp})),O(t),s([].concat(Object(m.a)(c),Object(m.a)(t.users)).sort((function(e,t){return t.registration_timestamp-e.registration_timestamp}))),j(null);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),Object(i.jsxs)("div",{className:"container get",id:"users",children:[Object(i.jsx)("h1",{className:"get__heading",children:"Working with GET request"}),c.length>0&&c.map((function(e){return Object(i.jsx)(g,{imageUrl:e.photo,name:e.name,email:e.email,phone:e.phone,position:e.position},e.email)})),(null===_||void 0===_?void 0:_.page)!==(null===_||void 0===_?void 0:_.total_pages)&&Object(i.jsx)("button",{type:"button",className:"button get__button",onClick:function(){if(void 0!==_)if(null===_.links.next_url)j(null);else{var e=_.links.next_url.indexOf("v1/");j(_.links.next_url.slice(e+3,_.links.next_url.length))}},children:"Show more"})]})}),N=(n(28),function(){return Object(i.jsx)("div",{className:"container--full wide_section",children:Object(i.jsxs)("div",{className:"wide_section_container",children:[Object(i.jsx)("h1",{className:"wide_section__heading",children:"Test assignment for front-end developer"}),Object(i.jsx)("p",{className:"wide_section__paragraph",children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){var e;null===(e=document.getElementById("post"))||void 0===e||e.scrollIntoView()},children:"Sign up"})]})})}),w=n(6),y=n.n(w),k=(n(29),function(e){var t=e.serverResponse,n=e.setServerResponse,r=/^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,c=/^[+]{0,1}380([0-9]{9})$/,s=Object(a.useState)([]),l=Object(o.a)(s,2),u=l[0],b=l[1],j=Object(a.useState)(""),x=Object(o.a)(j,2),_=x[0],O=x[1],g=Object(a.useState)(!0),v=Object(o.a)(g,2),N=v[0],w=v[1],k=Object(a.useState)(""),S=Object(o.a)(k,2),F=S[0],z=S[1],C=Object(a.useState)(!0),E=Object(o.a)(C,2),I=E[0],U=E[1],X=Object(a.useState)(""),R=Object(o.a)(X,2),T=R[0],B=R[1],D=Object(a.useState)(!0),$=Object(o.a)(D,2),J=$[0],M=$[1],P=Object(a.useState)([]),V=Object(o.a)(P,2),W=V[0],q=V[1],L=Object(a.useState)("Upload your photo"),A=Object(o.a)(L,2),G=A[0],H=A[1],Y=Object(a.useState)(null),K=Object(o.a)(Y,2),Q=K[0],Z=K[1],ee=Object(a.useState)(!1),te=Object(o.a)(ee,2),ne=te[0],ae=te[1],re=Object(a.useState)(null),ce=Object(o.a)(re,2),se=ce[0],le=ce[1],oe=function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:a=e.sent,n(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("positions");case 2:t=e.sent,b(t.positions);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.jsx)("div",{className:"post container",id:"post",children:null===t||422===t||409===t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"post__heading",children:"Working with POST request"}),409===t&&Object(i.jsx)("h2",{className:"error_heading",children:"User with this email or phone already exist"}),Object(i.jsxs)("form",{className:"post__form form",id:"post_form",onSubmit:function(e){if(e.preventDefault(),_.length<2&&w(!1),r.test(F)||U(!1),c.test(T)||M(!1),W.length>0&&ae(!0),N&&I&&J&&ne&&null!==se){n(null);var t=new FormData;t.append("name",_),t.append("email",F),t.append("phone",T),t.append("position_id","".concat(se)),t.append("photo",W[0]),oe(t)}},children:[Object(i.jsxs)("label",{htmlFor:"name",className:"form__label--container",children:[Object(i.jsx)("input",{className:y()("form__input--text",{error_input:!N}),type:"text",placeholder:"Your name",id:"name",value:_,onBlur:function(){_.length<2&&w(!1)},onChange:function(e){O(e.target.value),e.target.value.length>=2&&w(!0)}}),Object(i.jsx)("label",{htmlFor:"name",className:y()("form__label--legend",{legend_visible:_.length>0},{error_label:!N}),children:"name"}),!N&&Object(i.jsx)("label",{className:"form__label--under error_label",htmlFor:"name",children:"Invalid name"})]}),Object(i.jsxs)("label",{htmlFor:"email",className:"form__label--container",children:[Object(i.jsx)("input",{className:y()("form__input--text",{error_input:!I}),type:"text",placeholder:"Email",id:"email",value:F,onChange:function(e){z(e.target.value)}}),Object(i.jsx)("label",{htmlFor:"email",className:y()("form__label--legend",{legend_visible:F.length>0},{error_label:!I}),children:"email"}),!I&&Object(i.jsx)("label",{className:"form__label--under error_label",htmlFor:"email",children:"Invalid email"})]}),Object(i.jsxs)("label",{htmlFor:"phone",className:"form__label--container",id:"phone_container",children:[Object(i.jsx)("input",{id:"phone",className:y()("form__input--text",{error_input:!J}),type:"text",placeholder:"Phone",value:T,onChange:function(e){B(e.target.value),J&&13===T.length&&M(!0)},onFocus:function(e){""===e.target.value&&B("+38")}}),Object(i.jsx)("label",{htmlFor:"phone",className:y()("form__label--legend",{legend_visible:T.length>0},{error_label:!J}),children:"phone"}),Object(i.jsx)("label",{className:y()("form__label--under",{error_label:!J}),htmlFor:"phone",children:J?"+38 (XXX) XXX - XX - XX":"Invalid phone"})]}),Object(i.jsx)("p",{className:"form__heading--radio",children:"Select your position"}),u.map((function(e,t){return t===u.length-1?Object(i.jsxs)("label",{id:"last_radio",className:"form__label--radio",children:[Object(i.jsx)("input",{type:"radio",className:"form__input--radio",name:"position",id:e.name,value:e.id,onChange:function(e){le(Number(e.target.value))}}),Object(i.jsx)("label",{htmlFor:e.name,className:"custom_radio"}),Object(i.jsx)("p",{className:"form__label--text",children:e.name})]},e.id):Object(i.jsxs)("label",{className:"form__label--radio",children:[Object(i.jsx)("input",{type:"radio",className:"form__input--radio",name:"position",id:e.name,value:e.id,onChange:function(e){le(Number(e.target.value))}}),Object(i.jsx)("label",{htmlFor:e.name,className:"custom_radio"}),Object(i.jsx)("p",{className:"form__label--text",children:e.name})]},e.id)})),Object(i.jsxs)("label",{htmlFor:"photo_upload",className:"fake_upload",children:[Object(i.jsx)("label",{htmlFor:"photo_upload",className:y()("fake_upload_button",{error_input:null!==Q}),children:"Upload"}),Object(i.jsx)("label",{htmlFor:"photo_upload",className:y()("fake_upload_field",{error_input:null!==Q}),children:G}),Object(i.jsx)("input",{className:"form__input--file",type:"file",id:"photo_upload",accept:"image/jpeg, image/jpg",onChange:function(e){var t=new FileReader,n=!1;Z(null),null!==e.target.files&&e.target.files.length>0?(t.readAsDataURL(e.target.files[0]),t.onload=function(){var a=new Image,r="".concat(t.result);a.src=r,a.onload=function(){var t=a.height,r=a.width;t>=50&&r>=50&&(n=!0),null!==e.target.files&&e.target.files.length>0&&e.target.files[0].size<=5242880&&n?(H(e.target.files[0].name),q(Object(m.a)(e.target.files)),ae(!0)):null!==e.target.files&&e.target.files[0].size>5242880?(H("Upload your photo"),Z("image size higher than 5MB")):n||(H("Upload your photo"),Z("resolution must be more than 50x50"))}}):(H("Upload your photo"),ae(!1))}}),null!==Q&&Object(i.jsx)("label",{className:"form__label--under error_label",children:Q})]}),Object(i.jsx)("button",{type:"submit",className:"button form__submit",disabled:_.length<2||F.length<2||T.length<2||null===se||!ne,children:"Sign up"})]})]}):Object(i.jsx)("img",{src:"../../images/sent.png",alt:"registration completed",className:"sent_image"})})}),S=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),Object(i.jsxs)("main",{className:"main_content",children:[Object(i.jsx)(N,{}),Object(i.jsx)(v,{serverResponse:n}),Object(i.jsx)(k,{serverResponse:n,setServerResponse:r})]})]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(l.a,{children:Object(i.jsx)(S,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.277a7ac4.chunk.js.map