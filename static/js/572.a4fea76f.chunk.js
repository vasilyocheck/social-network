"use strict";(self.webpackChunkmy_app_samurai_way=self.webpackChunkmy_app_samurai_way||[]).push([[572],{4572:function(e,t,n){n.r(t),n.d(t,{AuthRedirectComponent:function(){return W},ProfileAPIComponent:function(){return R},ProfileContainer:function(){return z}});var s=n(5671),i=n(3144),o=n(136),a=n(516),r=n(1413),l=n(2791),u=n(9439),c="ProfileInfo_descriptionBlock__KjZ0Q",d="ProfileInfo_downloadIcon__ycHML",p="ProfileInfo_avaWithIcon__WoaX1",h="ProfileInfo_loadingIcon__SPehk",f="ProfileInfo_largeAvatar__KTgDS",x="ProfileInfo_camIcon__TNCC4",m="ProfileInfo_downloadInput__4+N8U",v="ProfileInfo_paramTitle__ga0iX",j=n(7733),b=n(184),g=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;(0,s.Z)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.props.isToUpdate&&e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props.status;return(0,b.jsx)("div",{children:this.state.editMode?(0,b.jsxs)("div",{children:[(0,b.jsx)("b",{children:"Status: "}),(0,b.jsx)("input",{onChange:this.onStatusChange,value:this.state.status,onBlur:this.deactivateEditMode,autoFocus:!0})]}):(0,b.jsx)("div",{children:(0,b.jsxs)("span",{onDoubleClick:this.activateEditMode,children:[(0,b.jsx)("b",{children:"Status: "}),e]})})})}}]),n}(l.Component),_=n(894);var k=n.p+"static/media/camera.8741727dde7226e61f85a228dbc2b5a3.svg",C=n(4740),T=n(4959),N=function(e){var t=e.disabled,n=(0,C.T)(),s=(0,l.useRef)(null),i=function(e){var t=new FormData;t.append("myFile",e),n((0,T.VI)(t))};return(0,b.jsx)("div",{className:h,children:(0,b.jsxs)("label",{children:[(0,b.jsx)("button",{className:d,onClick:function(){var e;s&&(null===(e=s.current)||void 0===e||e.click())},disabled:t,children:(0,b.jsx)("img",{src:k,alt:"download icon",className:x})}),(0,b.jsx)("input",{type:"file",ref:s,className:m,onChange:function(e){if(e.target.files&&e.target.files.length){var t=e.target.files[0];t.size<4e6?i(t):alert("\u0424\u0430\u0439\u043b \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430")}},accept:"image/*"})]})})},S=n(8418),F="ImageLoader_imageLoader__Sk1QU",y=function(){return(0,b.jsx)("div",{className:F})},P="ContactDetails_contact__ZctWz",w=function(e){var t=e.contacts,n=Object.entries(t).map((function(e){return(0,b.jsxs)("div",{className:P,children:[(0,b.jsxs)("b",{children:[e[0],":"]}),e[1]]},e[0])}));return(0,b.jsx)("div",{children:n})},A=function(e){var t=e.profile,n=e.isToUpdate,s=e.toggleEditMode;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)("button",{onClick:function(){s(!0)},children:"edit profile"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:v,children:"Full name: "}),t.fullName||"---"]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:v,children:"About me: "}),t.aboutMe||"---"]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:v,children:"Looking for a job: "})," ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:v,children:"My professional skills: "})," ",t.lookingForAJobDescription]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:v,children:"Contact details:"}),(0,b.jsx)(w,{contacts:t.contacts})]})]})},M=n(5705),I=function(e){var t=e.profile,n=e.toggleEditMode,s=(0,C.T)(),i=(0,M.TA)({initialValues:{userId:t.userId,aboutMe:t.aboutMe,fullName:t.fullName,lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,contacts:{github:t.contacts.github||"",vk:t.contacts.vk||"",facebook:t.contacts.facebook||"",instagram:t.contacts.instagram||"",twitter:t.contacts.twitter||"",website:t.contacts.website||"",youtube:t.contacts.youtube||"",mainLink:t.contacts.mainLink||""}},onSubmit:function(e){s((0,T.UA)(e)).then((function(){s((0,T.bq)(e.userId))})),n(!1)}});return(0,b.jsxs)("form",{onSubmit:i.handleSubmit,children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"fullName",children:"Full name: "}),(0,b.jsx)("input",{id:"fullName",name:"fullName",onChange:i.handleChange,value:i.values.fullName})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"aboutMe",children:"About me: "}),(0,b.jsx)("input",{id:"aboutMe",name:"aboutMe",onChange:i.handleChange,value:i.values.aboutMe})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"fullName",children:"Looking for a job: "}),(0,b.jsx)("input",{id:"lookingForAJob",name:"lookingForAJob",type:"checkbox",onChange:i.handleChange,checked:i.values.lookingForAJob})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"fullName",children:"My professional skills: "}),(0,b.jsx)("input",{id:"lookingForAJobDescription",name:"lookingForAJobDescription",onChange:i.handleChange,value:i.values.lookingForAJobDescription})]}),(0,b.jsx)("div",{children:"Contact details:"}),Object.entries(i.values.contacts).map((function(e){var t="contacts."+e[0];return(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:t,children:"".concat(e[0],": ")}),(0,b.jsx)("input",(0,r.Z)({type:"text",id:t},i.getFieldProps(t)))]},e[0])})),(0,b.jsx)("div",{children:(0,b.jsx)("button",{type:"submit",children:"Submit"})})]})},U=function(e){var t=e.profile,n=e.profileStatus,s=e.updateStatus,i=e.isToUpdate,o=(0,l.useState)(!1),a=(0,u.Z)(o,2),r=a[0],d=a[1],h=(0,C.C)(S.Ip),x=(0,l.useState)(_),m=(0,u.Z)(x,2),v=m[0];m[1];return t?(0,b.jsx)("div",{children:(0,b.jsxs)("div",{className:c,children:[(0,b.jsxs)("div",{className:p,children:[h?(0,b.jsx)(y,{}):(0,b.jsx)("img",{src:(null===t||void 0===t?void 0:t.photos.large)||v,alt:"avatar",className:f}),i&&(0,b.jsx)(N,{disabled:h})]}),(0,b.jsx)(g,{status:n,updateStatus:s,isToUpdate:i}),r?(0,b.jsx)(I,{profile:t,toggleEditMode:d}):(0,b.jsx)(A,{profile:t,isToUpdate:i,toggleEditMode:d})]})}):(0,b.jsx)(j.p,{})},Z="MyPosts_postsBlock__8N2xj",J="MyPosts_posts__VDbQe",D="Post_item__3H2YQ",L=function(e){return(0,b.jsxs)("div",{className:D,children:[(0,b.jsx)("img",{src:"https://img1.goodfon.ru/wallpaper/nbig/f/20/avatar-avatar-neytiri.jpg",alt:"avatar"}),e.message,(0,b.jsx)("div",{children:(0,b.jsxs)("span",{children:["likes: ",e.likeCount]})}),(0,b.jsx)("div",{children:(0,b.jsx)("span",{children:"like"})})]})},E=n(4153),O=(0,l.memo)((function(e){var t=e.posts,n=e.newPostText,s=e.addPost,i=t.map((function(e){return(0,b.jsx)(L,{message:e.postText,likeCount:e.likesCount,id:e.id},e.id)}));return(0,b.jsxs)("div",{className:Z,children:[(0,b.jsx)("h3",{children:"My posts"}),(0,b.jsx)(E.F,{onAddPost:function(e){s(e)},initialPostText:n}),(0,b.jsx)("div",{children:"New post"}),(0,b.jsx)("div",{className:J,children:i})]})})),Q=n(9434),V=function(){var e=(0,Q.I0)(),t=(0,C.C)(S.Jq),n=(0,C.C)(S.G1);return(0,b.jsx)(O,{addPost:function(t){e((0,T.Pi)(t))},posts:t,newPostText:n})},q=function(e){return(0,b.jsxs)("div",{className:"",children:[(0,b.jsx)(U,{profile:e.profile,profileStatus:e.profileStatus,updateStatus:e.updateStatus,isToUpdate:e.isToUpdate}),(0,b.jsx)(V,{})]})},B=n(7689);var H,R=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var e=Number(this.props.router.params.userId)||30104;this.props.setUserProfile(e)}},{key:"render",value:function(){return(0,b.jsx)(q,{profile:this.props.profile,profileStatus:this.props.profileStatus,updateStatus:this.props.updateStatus,isToUpdate:this.props.isToUpdate})}}]),n}(l.Component),W=function(e){return(0,b.jsx)(R,(0,r.Z)({},e))},X=(H=W,function(e){var t=(0,B.TH)(),n=(0,B.s0)(),s=(0,B.UO)();return(0,b.jsx)(H,(0,r.Z)((0,r.Z)({},e),{},{router:{location:t,navigate:n,params:s}}))}),z=function(){var e=(0,C.T)(),t=(0,C.C)(S.Ai),n=(0,C.C)(S.v0),s=(0,C.C)(S.TL),i=(0,C.C)((function(e){return e.auth.id}))===(null===t||void 0===t?void 0:t.userId);return(0,b.jsx)(X,{profile:t,setUserProfile:function(t){e((0,T.bq)(t))},isAuth:n,profileStatus:s,updateStatus:function(t){e((0,T.OG)(t))},isToUpdate:i})}},4153:function(e,t,n){n.d(t,{F:function(){return a}});n(2791);var s=n(5705),i="TextInputForm_inputForm__XiL7r",o=n(184),a=function(e){var t=e.onAddPost,n=e.initialPostText,a=(0,s.TA)({initialValues:{newText:n},validate:function(e){return function(e){var t={};return e.newText.length<1&&(t.newText="min message length is 5 bytes"),t}(e)},onSubmit:function(e){t(e.newText),a.handleReset(e.newText)}}),r=!!a.errors.newText;return(0,o.jsxs)("form",{onSubmit:a.handleSubmit,className:i,children:[(0,o.jsx)("textarea",{id:"newText",name:"newText",onChange:a.handleChange,value:a.values.newText}),(0,o.jsx)("button",{type:"submit",disabled:r,children:"add post"})]})}}}]);
//# sourceMappingURL=572.a4fea76f.chunk.js.map