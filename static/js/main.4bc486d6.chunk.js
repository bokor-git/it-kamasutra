(this["webpackJsonpit-kamasutra"]=this["webpackJsonpit-kamasutra"]||[]).push([[0],{116:function(e,t,n){"use strict";var a=n(10),r=n(11),o=n(12),s=n(13),u=n(0),c=n.n(u),i=n(26),l=n(9),p=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){var t=function(t){Object(s.a)(u,t);var n=Object(o.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return!1===this.props.isAuth?c.a.createElement(i.a,{to:"/Login"}):c.a.createElement(e,this.props)}}]),u}(c.a.Component);return Object(l.b)(p,{})(t)}},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(30),r=n(8),o=function(e){return{type:"SEND_MASSAGE",massage:e}},s={massageData:[{id:1,text:"Yo, get up"},{id:2,text:"How are you"},{id:3,text:"Yo, get up"}],dialogsData:[{id:1,name:"Bohdan"},{id:2,name:"Florian"},{id:3,name:"Robert"}]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MASSAGE":return Object(r.a)({},e,{massageData:[].concat(Object(a.a)(e.massageData),[{id:6,text:t.massage}])});default:return e}}},130:function(e,t,n){e.exports={category:"Category_category__-1Ws6"}},131:function(e,t,n){e.exports={people:"People_people__3443V"}},132:function(e,t,n){e.exports={suggestion:"Suggestion_suggestion__3J-IT"}},133:function(e,t,n){e.exports={explore:"Explore_explore__2Dx2j"}},137:function(e,t,n){e.exports={ldshourglass:"hourglass_ldshourglass__2IAgf"}},139:function(e,t,n){e.exports={profile:"News_profile__3AGfV"}},140:function(e,t,n){e.exports={event:"Event_event__2U-hl"}},141:function(e,t,n){e.exports={event:"MyEvent_event__1jCkl"}},168:function(e,t,n){e.exports=n(294)},170:function(e,t,n){},174:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(170),n(66)),s=n.n(o),u=n(10),c=n(11),i=n(12),l=n(13),p=(n(174),n(56)),f=n.n(p),m=n(15),d=function(){return r.a.createElement("div",{className:f.a.profile},r.a.createElement("h3",null,"Profile menu"),r.a.createElement("img",{src:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"}),r.a.createElement("h4",null,r.a.createElement(m.b,{to:"/Dialogs",activeClassName:f.a.active},"My Dialogs")),r.a.createElement("h4",null,r.a.createElement(m.b,{to:"/Posts",activeClassName:f.a.active},"My Posts")),r.a.createElement("h4",null,r.a.createElement(m.b,{to:"/Profile",activeClassName:f.a.active},"Profile")))},h=n(33),E=n.n(h),v=function(){return r.a.createElement("div",{className:E.a.search},r.a.createElement("div",{className:E.a.menu},r.a.createElement(m.b,{to:"/Events",activeClassName:E.a.active},"Events "),r.a.createElement(m.b,{to:"/Users",activeClassName:E.a.active},"People"),r.a.createElement(m.b,{to:"/News",activeClassName:E.a.active},"News"),r.a.createElement(m.b,{to:"/Search",activeClassName:E.a.active},"Search"),r.a.createElement(m.b,{to:"/Store",activeClassName:E.a.active},"Store")))},g=n(130),b=n.n(g),O=function(){return r.a.createElement("div",{className:b.a.category},r.a.createElement("h1",null,"Category"))},_=n(131),w=n.n(_),j=function(){return r.a.createElement("div",{className:w.a.people},r.a.createElement("h1",null,"People"))},P=n(132),y=n.n(P),S=function(){return r.a.createElement("div",{className:y.a.suggestion},r.a.createElement("h1",null,"Event suggestion"))},D=n(133),x=n.n(D),k=function(){return r.a.createElement("div",{className:x.a.explore},r.a.createElement("h1",null,"Explore Events"))},C=n(26),N=n(30),T=n(8),I="dialog-reducer/ADD-POST",A="dialog-reducer/LIKE_POST",L="dialog-reducer/DELETE_POST",U={postData:[{id:1,postText:"So, you want to have a really long race that eventually will attract the best runners from around the world. Unlike other races wute totaling somewhere around 24 to 26 miles",postLike:2,postAvatar:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"},{id:2,postText:"In a nod to Greek history, the first marathon commemorated the run of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C.",postLike:3,postAvatar:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"},{id:3,postText:"Despite the success of that first race, it took 13 more years of arguing before the International Amateur Athletic Federatio Olympics, there were six different distances.",postLike:6,postAvatar:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"}]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var n={postText:t.post,postLike:0,postAvatar:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"};return Object(T.a)({},e,{postData:[].concat(Object(N.a)(e.postData),[n]),newPostText:" "});case A:return Object(T.a)({},e,{postData:e.postData.map((function(e){return e.id===t.postID?Object(T.a)({},e,{postLike:e.postLike+1}):e}))});case L:return Object(T.a)({},e,{postData:e.postData.filter((function(e){return e.id!=t.postID}))});default:return e}},R=n(9),z=n(90),M=n.n(z),G=n(126),B=n(127),H=n(37),J=n(41),W=Object(H.a)(15),K=Object(B.a)({form:"post"})((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(G.a,{placeholder:"Post",name:"Post",component:J.b,validate:[H.b,W]})),r.a.createElement("button",null," Add post"))})),V=function(e){var t=e.isAuth,n=e.postData,a=e.postLikeThunk,o=e.addPostThunk;if(!1===t)return r.a.createElement(C.a,{to:"/Login"});var s=n.map((function(e){return r.a.createElement("div",{className:M.a.post},r.a.createElement("div",null,r.a.createElement("img",{alt:"no",src:e.postAvatar})),r.a.createElement("div",null,e.postText),r.a.createElement("div",null,"Like: ",e.postLike),r.a.createElement("button",{onClick:function(){a(e.id)}},"like"))}));return r.a.createElement("div",null,r.a.createElement("div",{className:M.a.post},r.a.createElement("img",{alt:"o",src:"https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"}),r.a.createElement(K,{onSubmit:function(e){o(e.Post)}})),r.a.createElement("div",null,s))},X=n(116),Z=n(5),Y=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(V,this.props)}}]),n}(r.a.Component),q=Object(Z.d)(Object(R.b)((function(e){return{postData:e.postPage.postData,newPostText:e.postPage.newPostText}}),{addPostThunk:function(e){return function(t){t(function(e){return{type:I,post:e}}(e))}},postLikeThunk:function(e){return function(t){t({type:A,postID:e})}}}),X.a)(Y),Q=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"My posts"),r.a.createElement(q,{store:this.props.store,newPostText:this.props.newPostText,dispatch:this.props.dispatch,postData:this.props.postData}))}}]),n}(r.a.Component),$=n(14),ee=n.n($),te=n(21),ne=n(136).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0ec4be5c-05ae-403f-b660-0e7e553f2d34"}}),ae=function(e,t){return ne.get("users?Page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},re=function(e){return ne.delete("follow/".concat(e)).then((function(e){return e.data}))},oe=function(e){return ne.post("follow/".concat(e)).then((function(e){return e.data}))},se=function(){return ne.get("auth/me")},ue=function(e,t){return ne.post("/auth/login",{email:e,password:t}).then((function(e){return e}))},ce=function(){return ne.delete("/auth/login").then((function(e){return e}))},ie=function(e){return ne.get("profile/"+e)},le=function(e){return ne.get("/profile/status/"+e)},pe=function(e){return ne.put("/profile/status",{status:e})},fe="users/FOLLOW",me=function(e){return{type:fe,userID:e}},de=function(e){return{type:"users/UNFOLLOW",userID:e}},he=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},Ee=function(e,t){return{type:"users/FOLLOFING_IN_PROGRESS",isFetching:e,userID:t}},ve={users:[],pageSize:7,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},ge=function(e,t,n,a){a(Ee(!0,e)),0===n.resultCode&&a(t(e)),a(Ee(!1,e))},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(T.a)({},e,{users:e.users.map((function(e){return e.id===t.userID?Object(T.a)({},e,{followed:!0}):e}))});case"users/UNFOLLOW":return Object(T.a)({},e,{users:e.users.map((function(e){return e.id===t.userID?Object(T.a)({},e,{followed:!1}):e}))});case"users/SET_CURRENT_PAGE":return Object(T.a)({},e,{currentPage:t.currentPage});case"users/SET_USERS":return Object(T.a)({},e,{users:t.users});case"users/SET_TOTAL_USERS":return Object(T.a)({},e,{totalUsersCount:t.totalCount});case"users/TOGGLE_IS_FETCHING":return Object(T.a)({},e,{isFetching:t.isFetching});case"users/FOLLOFING_IN_PROGRESS":return Object(T.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(N.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!==t.userID}))});default:return e}},Oe=n(32),_e=n.n(Oe),we=function(e){var t=e.follow,n=e.unfollow,a=e.followingInProgress,o=e.user;return r.a.createElement("div",{className:_e.a.users},r.a.createElement("span",null,r.a.createElement(m.b,{to:"/Profile/"+o.id},r.a.createElement("div",null,r.a.createElement("img",{src:null!=o.photos.small?o.photos.small:"https://www.shareicon.net/data/512x512/2016/07/21/799325_user_512x512.png",alt:"No Avatar"}))),r.a.createElement("div",null,o.followed?r.a.createElement("button",{disabled:a.some((function(e){return e===o.id})),onClick:function(){n(o.id)}},"Unfollow"):r.a.createElement("button",{disabled:a.some((function(e){return e===o.id})),onClick:function(){t(o.id)}},"Follow"),r.a.createElement("button",null,"Like"))),r.a.createElement("div",null,o.name),r.a.createElement("div",null,o.status),r.a.createElement("div",null," ",o.id))},je=function(e){var t=e.users,n=e.follow,a=e.unfollow,o=e.followingInProgress;return r.a.createElement("div",null,r.a.createElement("h1",null,"USER LIST"),t.map((function(e){return r.a.createElement(we,{key:e.id,className:_e.a.users,user:e,followingInProgress:o,unfollow:a,follow:n})})))},Pe=n(137),ye=n.n(Pe),Se=function(){return r.a.createElement("div",{className:ye.a.ldshourglass})},De=n(138),xe=Object(De.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ke=function(e){return e.usersPage.pageSize},Ce=function(e){return e.usersPage.totalUsersCount},Ne=function(e){return e.usersPage.currentPage},Te=function(e){return e.usersPage.isFetching},Ie=function(e){return e.usersPage.followingInProgress},Ae=n(55),Le=function(e){for(var t=e.totalUsersCount,n=e.pageSize,o=e.onPageChanged,s=e.currentPage,u=e.portionSize,c=Math.ceil(t/n),i=[],l=1;l<=c;l++)i.push(l);var p=Math.ceil(c/u),f=Object(a.useState)(1),m=Object(Ae.a)(f,2),d=m[0],h=m[1];console.log(d);var E=(d-1)*u+1,v=d*u;return r.a.createElement("div",{className:_e.a.border},d>1&&r.a.createElement("button",{onClick:function(){h(d-1)}},"prev"),i.filter((function(e){return e>=E&&e<=v})).map((function(e){return r.a.createElement("span",{className:s===e?_e.a.selected:_e.a.pageNumber,key:e,onClick:function(t){o(e)}},e)})),p>d&&r.a.createElement("button",{onClick:function(){h(d+1)}},"next"))},Ue=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsersThunkCreator(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return this.props.isFetching?r.a.createElement(Se,null):r.a.createElement("div",null,r.a.createElement(Le,{currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,portionSize:10}),r.a.createElement(je,{users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),Fe=Object(Z.d)(Object(R.b)((function(e){return{users:xe(e),pageSize:ke(e),totalUsersCount:Ce(e),currentPage:Ne(e),isFetching:Te(e),followingInProgress:Ie(e)}}),{follow:function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(n){var a;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe(e);case 2:a=t.sent,ge(e,me,a,n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(n){var a;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,re(e);case 2:a=t.sent,ge(e,de,a,n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},toggleFollowingProgress:Ee,getUsersThunkCreator:function(e,t){return function(){var n=Object(te.a)(ee.a.mark((function n(a){var r;return ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(he(!0)),n.next=3,ae(e,t);case 3:r=n.sent,a({type:"users/SET_TOTAL_USERS",totalCount:r.totalCount}),a({type:"users/SET_USERS",users:r.items}),a(he(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ue),Re=n(45),ze=n.n(Re),Me=function(e){return e.profileData?r.a.createElement("div",{className:ze.a.profile},r.a.createElement("h1",null,e.profileData.fullName," "),r.a.createElement("img",{className:ze.a.avatar,src:e.profileData.photos.large}),r.a.createElement("h4",null,"About me: ",e.profileData.aboutMe),r.a.createElement("div",{className:ze.a.work}," Need work: ",r.a.createElement("img",{src:e.profileData.lookingForAJob?"https://cdn.onlinewebfonts.com/svg/img_172017.png":"https://cdn.onlinewebfonts.com/svg/img_391838.png"})),r.a.createElement("div",null,"About job: ",e.profileData.lookingForAJobDescription," "),r.a.createElement("div",null,r.a.createElement("div",null,e.profileData.contacts.facebook),r.a.createElement("div",null,e.profileData.contacts.website),r.a.createElement("div",null,e.profileData.contacts.vk),r.a.createElement("div",null,e.profileData.contacts.instagram),r.a.createElement("div",null,e.profileData.contacts.youtube))):r.a.createElement(Se,null)},Ge=function(e){var t=Object(a.useState)(!1),n=Object(Ae.a)(t,2),o=n[0],s=n[1],u=Object(a.useState)(e.status),c=Object(Ae.a)(u,2),i=c[0],l=c[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"no status")),o&&r.a.createElement("div",null,r.a.createElement("input",{autoFocus:!0,onChange:function(e){l(e.currentTarget.value)},onBlur:function(){s(!1),e.updateProfileStatus(i)},value:i})))},Be=function(e){return r.a.createElement("div",{className:ze.a.profile},r.a.createElement(Me,{profileData:e.profileData}),r.a.createElement(Ge,{status:e.status,updateProfileStatus:e.updateProfileStatus,getProfileStatus:e.getProfileStatus}),r.a.createElement(Q,null))},He=function(e){return{type:"SET_STATUS_PROFILE",status:e}},Je={profileData:null,status:""},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_PROFILE":return Object(T.a)({},e,{profileData:t.profileData});case"SET_STATUS_PROFILE":return Object(T.a)({},e,{status:t.status});default:return e}},Ke=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authUserId)||this.props.history.push("/login"),this.props.getProfileInfo(e),this.props.getProfileStatus(e)}},{key:"render",value:function(){return r.a.createElement(Be,{profileData:this.props.profileData,status:this.props.status,updateProfileStatus:this.props.updateProfileStatus,getProfileStatus:this.props.getProfileStatus})}}]),n}(r.a.Component),Ve=Object(Z.d)(Object(R.b)((function(e){return{profileData:e.myProfilePage.profileData,status:e.myProfilePage.status,authUserId:e.auth.userID}}),{getProfileStatus:function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(n){var a;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le(e);case 2:a=t.sent,n(He(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfileStatus:function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(n){return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe(e);case 2:0===t.sent.data.resultCode&&n(He(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getProfileInfo:function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(n){var a;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profileData:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),C.f)(Ke),Xe=n(139),Ze=n.n(Xe),Ye=function(e){return r.a.createElement("div",{className:Ze.a.news},r.a.createElement("h1",null,"News!"))},qe=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.call(this)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(Ye,{newsData:this.props.newsData})}}]),n}(r.a.Component),Qe=Object(R.b)((function(e){return{newsData:e.newsPage.newsData}}),(function(e){}))(qe),$e=n(140),et=n.n($e),tt=function(e){var t=e.eventData,n=e.addEvent;return r.a.createElement("div",{className:et.a.event},r.a.createElement("h1",null,"Events"),t.map((function(e){return r.a.createElement("div",null,r.a.createElement("img",{alt:"0",src:e.poster}),r.a.createElement("div",null,e.text),r.a.createElement("div",null,r.a.createElement("button",{id:"addEvent",onClick:function(){return n(e.id,e.text)}},"Accept Event")))})))},nt={eventData:[{id:1,text:"Sumy Duathlon 27.5",poster:"https://sportevent.com.ua/image/t/250/250/img/1568/656.jpg"},{id:2,text:"Blue Lake Cup Spring 2020",poster:"https://sportevent.com.ua/image/t/250/250/img/1574/662.png"},{id:3,text:"Kharkiv Half Marathon 2020",poster:"https://sportevent.com.ua/image/t/250/250/img/1464/630.jpg"},{id:4,text:"4th RAIN Mohrytsia Eco Trail 2020",poster:"https://sportevent.com.ua/image/t/250/250/img/1568/656.jpg"}],myEvents:[]},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EVENT":return e.eventData.map((function(n){t.eventID===n.id&&e.myEvents.push(t.evText)})),Object(T.a)({},e,{myEvents:Object(N.a)(e.myEvents)});default:return e}},rt=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(tt,{eventData:this.props.eventData,myEvents:this.props.myEvents,addEvent:this.props.addEvent})}}]),n}(r.a.Component),ot=Object(R.b)((function(e){return{eventData:e.eventPage.eventData,myEvents:e.eventPage.myEvents}}),{addEvent:function(e,t){return{type:"ADD_EVENT",eventID:e,evText:t}}})(rt),st=n(141),ut=n.n(st),ct=function(e){return r.a.createElement("div",{className:ut.a.event},r.a.createElement("h2",null,"My Events:"),e.myEvents.map((function(e){return r.a.createElement("li",null,[e]," ")})))},it=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.call(this)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(ct,{myEvents:this.props.myEvents})}}]),n}(r.a.Component),lt=Object(R.b)((function(e){return{myEvents:e.eventPage.myEvents}}),{})(it),pt=n(57),ft=n.n(pt),mt=function(e){var t=e.isAuth,n=e.login,a=e.singOutThunk;return r.a.createElement("div",{className:ft.a.header},r.a.createElement("div",{className:ft.a.headerText},"iRunner"),t?r.a.createElement("div",{className:ft.a.login},r.a.createElement("div",null," ",r.a.createElement("div",null),n)," ",r.a.createElement("button",{onClick:function(){a()}},"logout")):r.a.createElement(m.b,{to:"/login"},r.a.createElement("div",{className:ft.a.login},"Login")))},dt=n(48),ht=function(e,t,n,a){return{type:"auth/SET_USER_DATA",data:{userID:e,email:t,login:n,isAuth:a}}},Et={userID:null,email:null,login:null,isAuth:!1},vt=function(){return function(){var e=Object(te.a)(ee.a.mark((function e(t){var n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se();case 2:0===(n=e.sent).data.resultCode&&t(ht(n.data.data.id,n.data.data.email,n.data.data.login,!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},gt=function(){return function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:0===e.sent.data.resultCode&&t(ht(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(T.a)({},e,{},t.data);default:return e}},Ot=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(mt,this.props)}}]),n}(r.a.Component),_t=Object(R.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{singOutThunk:gt})(Ot),wt=n(38),jt=n.n(wt),Pt=Object(H.a)(40),yt=Object(B.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(G.a,{placeholder:"Email",name:"Email",component:J.a,validate:[H.b,Pt]})),r.a.createElement("div",null,r.a.createElement(G.a,{placeholder:"Password",name:"Password",component:J.a,type:"password",validate:[H.b,Pt]})),r.a.createElement("div",null,r.a.createElement(G.a,{type:"checkbox",name:"rememberMe",component:J.a})," remember me"),e.error&&r.a.createElement("div",{className:jt.a.summaryError},e.error),r.a.createElement("div",null,r.a.createElement("button",null,"login")))})),St=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.singInThunk(t.Email,t.Password)},e}return Object(c.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(C.a,{to:"/Profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(yt,{onSubmit:this.onSubmit}))}}]),n}(r.a.Component),Dt=Object(Z.d)(Object(R.b)((function(e){return{isAuth:e.auth.isAuth}}),{singInThunk:function(e,t){return function(){var n=Object(te.a)(ee.a.mark((function n(a){var r,o;return ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ue(e,t);case 2:0===(r=n.sent).data.resultCode?a(vt()):(o=Object(dt.a)("login",{_error:r.data.messages}),a(o));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},singOutThunk:gt}))(St),xt={initialized:!1},kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(T.a)({},e,{initialized:!0});default:return e}},Ct=n(125),Nt={newsData:{}},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt;arguments.length>1&&arguments[1];return e},It=n(142),At=n(128),Lt=Object(Z.c)({postPage:F,dialogPage:Ct.a,eventPage:at,usersPage:be,myProfilePage:We,newsPage:Tt,auth:bt,form:At.a,app:kt}),Ut=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,Ft=Object(Z.e)(Lt,Ut(Object(Z.a)(It.a))),Rt=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(Se,null)},r.a.createElement(e,t))}},zt=r.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),Mt=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"wrapper"},r.a.createElement(_t,{store:this.props.store}),r.a.createElement(d,null),r.a.createElement(O,null),r.a.createElement(v,null),r.a.createElement(j,null),r.a.createElement("div",{className:"wrapper-content"},r.a.createElement(C.b,{path:"/Events",render:function(){return r.a.createElement(ot,null)}}),r.a.createElement(C.b,{path:"/Dialogs",render:Rt(zt)}),r.a.createElement(C.b,{path:"/Posts",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(C.b,{path:"/Users",render:function(){return r.a.createElement(Fe,null)}}),r.a.createElement(C.b,{path:"/News",render:function(){return r.a.createElement(Qe,null)}}),r.a.createElement(C.b,{path:"/Profile/:userID",render:function(){return r.a.createElement(Ve,null)}}),r.a.createElement(C.b,{exact:!0,path:"/Profile",render:function(){return r.a.createElement(Ve,null)}}),r.a.createElement(C.b,{path:"/Login",render:function(){return r.a.createElement(Dt,null)}})),r.a.createElement(S,null),r.a.createElement(k,null),r.a.createElement(lt,{store:this.props.store})):r.a.createElement(Se,null)}}]),n}(r.a.Component),Gt=Object(Z.d)(C.f,Object(R.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(vt()).then((function(){return e({type:"INITIALIZED_SUCCESS"})}))}}}))(Mt),Bt=function(e){return r.a.createElement(m.a,null,r.a.createElement(R.a,{store:Ft},r.a.createElement(Gt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Bt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){e.exports={users:"Users_users__2_Unz",border:"Users_border__2vgiX",pageNumber:"Users_pageNumber__30yr_",selected:"Users_selected__bWT5C"}},33:function(e,t,n){e.exports={search:"Search_search__2DJqO",active:"Search_active__2b0QW",menu:"Search_menu__3wZOJ"}},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},38:function(e,t,n){e.exports={formControl:"FormsControls_formControl__ZBs8L",error:"FormsControls_error__3StKJ",summaryError:"FormsControls_summaryError__2T0Ce"}},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(93),r=n(0),o=n.n(r),s=n(38),u=n.n(s),c=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),s=n.touched&&n.error;return o.a.createElement("div",{className:u.a.formControl+" "+(s?u.a.error:" ")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,r))),s&&o.a.createElement("span",null,n.error))},i=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),s=n.touched&&n.error;return o.a.createElement("div",{className:u.a.formControl+" "+(s?u.a.error:" ")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,r))),s&&o.a.createElement("span",null,n.error))}},45:function(e,t,n){e.exports={avatar:"UserProfile_avatar__21tnF",work:"UserProfile_work__1UaXH"}},56:function(e,t,n){e.exports={profile:"Profile_profile__1exf0",active:"Profile_active__3_iKg"}},57:function(e,t,n){e.exports={header:"Header_header__ljGEL",headerText:"Header_headerText__RDDNP",login:"Header_login__NNeto"}},90:function(e,t,n){e.exports={post:"PostItem_post__3E6FB"}}},[[168,1,2]]]);
//# sourceMappingURL=main.4bc486d6.chunk.js.map