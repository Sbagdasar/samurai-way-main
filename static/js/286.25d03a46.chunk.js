"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[286],{6304:function(t,s,e){e.d(s,{g:function(){return c}});var n=e(1413),r=e(5987),i=(e(2791),e(4001)),o=e(184),a=["input","meta"],c=function(t){var s=t.input,e=t.meta,c=(0,r.Z)(t,a),l=e.error&&e.touched;return(0,o.jsxs)("div",{className:"".concat(i.Z.formControl," ").concat(l?i.Z.error:""),children:[(0,o.jsx)("div",{children:(0,o.jsx)("textarea",(0,n.Z)((0,n.Z)({},s),c))}),l&&(0,o.jsx)("span",{children:e.error})]})}},7286:function(t,s,e){e.r(s),e.d(s,{default:function(){return $}});var n=e(1413),r=e(5671),i=e(3144),o=e(136),a=e(8557),c=e(2791),l=e(885),u="Profilenfo_profileInfoContainer__VhUgu",d="Profilenfo_descriptionBlock__Uw9A+",f="Profilenfo_imageContainer__kPXRz",p="Profilenfo_imageBlock__4DAr1",h="Profilenfo_profilePhoto__yQAgw",m=e(4583),j=e(6706),x=e(5987),v="Contacts_contactsBlock__WlRWy",_="Contacts_contactsList__nDtIu",C="Contacts_editContactsList__Tzmqj",g="Contacts_error__SaT1i",P=e(7357),k=e(184),Z=["contacts"],y=function(t){var s=t.contacts,e=(0,x.Z)(t,Z);return(0,k.jsxs)("div",{className:v,children:[(0,k.jsx)("ul",{className:_,children:Object.entries(s).map((function(t){if(t[1])return(0,k.jsx)("li",{children:(0,k.jsx)("a",{href:t[1],children:t[0]})},t[0])}))}),(0,k.jsx)(P.Z,{onClick:function(){return e.setEditMode(!0)},children:"Edit contacts"})]})},N=e(9461),S=e(3610),w=e(6132),T=e(704),b=e(364),I=function(t){var s=(0,b.I0)();return(0,k.jsxs)("div",{className:v,children:[(0,k.jsx)(P.Z,{onClick:function(){return t.setEditMode&&t.setEditMode(!0)},children:"Edit contacts"}),(0,k.jsx)(M,{initialValues:t.contacts,onSubmit:function(t){s((0,N.fY)(t))},contacts:t.contacts})]})},M=(0,T.Z)({form:"edit-contacts"})((function(t){return(0,k.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,k.jsx)("ul",{className:C,children:Object.entries(t.contacts).map((function(s){var e=s.toString().split(",")[0];return(0,k.jsx)("li",{className:t.error==e?g:"",children:(0,S.G)(s+"",s+"",[],w.I,null)},s[0])}))}),(0,k.jsxs)("div",{children:[t.error&&(0,k.jsx)("div",{children:t.error}),(0,k.jsx)("button",{children:"Save"})]})]})})),O=function(t){var s=(0,c.useState)(!1),e=(0,l.Z)(s,2),n=e[0],r=e[1];if(!t.profile)return(0,k.jsx)(m.p,{});return(0,k.jsx)("div",{className:u,children:(0,k.jsxs)("div",{className:d,children:[(0,k.jsx)("div",{className:f,children:(0,k.jsxs)("div",{className:p,children:[(0,k.jsx)("img",{src:t.profile.photos.small?t.profile.photos.small:j,alt:"props.profile.photos.small",className:h}),t.isOwner&&(0,k.jsx)("input",{type:"file",onChange:function(s){var e;null!==(e=s.currentTarget.files)&&void 0!==e&&e.length&&t.saveFile(s.currentTarget.files[0])}})]})}),n?(0,k.jsx)(I,{setEditMode:r,contacts:t.profile.contacts}):(0,k.jsx)(y,{contacts:t.profile.contacts,isOwner:t.isOwner,setEditMode:r})]})})},E="MyPosts_posts__GSiZ2",A="MyPosts_postsBlock__lB-pf",B="Post_item__Yu4oG",G=function(t){return(0,k.jsxs)("div",{className:B,children:[(0,k.jsx)("img",{src:"https://i1.sndcdn.com/avatars-000002061067-xtanty-t500x500.jpg",alt:""}),t.message,(0,k.jsx)("div",{children:(0,k.jsxs)("span",{children:["like - ",t.likeCounts]})})]})},D=e(3079),F=e(6304),U=(0,D.D)(10),z=(0,T.Z)({form:"addMessage"})((function(t){return(0,k.jsx)("div",{children:(0,k.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,S.G)("Enter your post text","newPostBody",[D.C,U],F.g,null),(0,k.jsx)("div",{children:(0,k.jsx)("button",{children:"add post"})})]})})})),W=c.memo((function(t){var s=t.posts.map((function(t){return(0,k.jsx)(G,{message:t.message,likeCounts:t.likeCounts},t.id)}));return(0,k.jsxs)("div",{className:A,children:[(0,k.jsx)("h3",{children:"My posts"}),(0,k.jsx)(z,{onSubmit:function(s){t.addPost(s.newPostBody)}}),(0,k.jsx)("div",{className:E,children:s})]})})),q=function(t){var s=(0,b.I0)(),e=(0,b.v9)((function(t){return t.profilePage.posts}));return(0,k.jsx)("div",{children:(0,k.jsx)(W,{posts:e,addPost:function(t){s((0,N.Wl)(t))}})})},L="Profile_profileContainer__CUA1O",R=function(t){return(0,k.jsxs)("div",{className:L,children:[(0,k.jsx)(O,{saveFile:t.saveFile,isOwner:t.isOwner,profile:t.profile}),(0,k.jsx)(q,{profile:t.profile,status:t.status,updateStatusTC:t.updateStatusTC})]})},V=e(9271),Y=e(2932),Q=e(7781),X=function(t){(0,o.Z)(e,t);var s=(0,a.Z)(e);function e(t){return(0,r.Z)(this,e),s.call(this,t)}return(0,i.Z)(e,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId+""),this.props.getProfileTC(t),this.props.getStatusTC(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,s,e){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,k.jsx)(R,(0,n.Z)((0,n.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,saveFile:this.props.saveFileTC}))}}]),e}(c.Component),$=(0,Q.qC)((0,b.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getProfileTC:N.GA,getStatusTC:N.GP,updateStatusTC:N.OG,saveFileTC:N.s1}),Y.D,V.EN)(X)}}]);
//# sourceMappingURL=286.25d03a46.chunk.js.map