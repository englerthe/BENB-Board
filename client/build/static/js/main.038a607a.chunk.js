(this["webpackJsonpm3-react-typescript"]=this["webpackJsonpm3-react-typescript"]||[]).push([[0],{124:function(e,t,n){e.exports=n(225)},129:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),o=n(76),l=n.n(o),s=(n(129),n(15)),d=n(16),u=n(20),c=n(19),v=n(21),h=n(34),p=function(e){return r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(h.a,{exact:!0,to:"/"},"Login")),r.createElement("li",null,r.createElement(h.a,{to:"/register"},"Register")),r.createElement("li",null,r.createElement(h.a,{to:"/showadvertises"},"Advertises"))))},m=function(e){return r.createElement("div",null,r.createElement("ul",null,r.createElement("li",null,"Hier stehen die Kategorien")))},g=function(e){return r.createElement("div",null,r.createElement("ul",null,r.createElement("li",null,"Userdetails")))};!function(e){e.INIT="@@INIT",e.login_error="login_error",e.user_logged_in="user_logged_in",e.user_logged_out="user_logged_out",e.update_user="update_user",e.user_created="user_created",e.user_exists="user_exists",e.create_advertise="create_advertise",e.update_advertise="update_advertise",e.delete_advertise="delete_advertise",e.render_test="render_test",e.server_called="server_called",e.advertise_updated="advertise_updated",e.add_advertises_from_server="add_advertises_from_server"}(a||(a={}));var w=n(17),_=n.n(w),S={UI:{counter:0,loggedIn:!1,waitingForResponse:!1,Login:{errorMessage:""}},BM:{user:{firstname:"",lastname:"",username:"",password:"",email:""},advertises:[]}},C={},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;window.CS.log("2. ACTION:"+t.type);var n=JSON.parse(JSON.stringify(e));n.UI.counter=e.UI.counter+1;var r=C[t.type];if(void 0!==r)return r(n,t),n;switch(t.type){case a.INIT:return n;default:return window.CS.log("1. Error!!!!! no reducer defined"),n}},f=n(10),y=Object(f.a)();C[a.login_error]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage=t.errorMessage,e},C[a.user_logged_in]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage="",e.UI.loggedIn=!0,e.BM.user=t.user,e},C[a.user_logged_out]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage="",e.UI.loggedIn=!1,e.BM.user={lastname:"",firstname:"",username:"",password:"",email:""},e};var b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return window.CS.getUIState().loggedIn?i.a.createElement("div",null,i.a.createElement("p",null,"You are logged in as ",window.CS.getBMState().user.username),i.a.createElement("button",{onClick:this.handleLogout},"Logout")):i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",{htmlFor:"username"},"Username:"),i.a.createElement("input",{type:"username",placeholder:"Your username",onChange:this.handleUsernameChange,value:window.CS.getBMState().user.username}),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"password"},"Password:"),i.a.createElement("input",{type:"password",placeholder:"********",onChange:this.handlePasswordChange,value:window.CS.getBMState().user.password}),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",value:"Login"})),i.a.createElement("p",null,window.CS.getUIState().Login.errorMessage))}},{key:"handleUsernameChange",value:function(e){var t=window.CS.getBMState().user;t.username=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handlePasswordChange",value:function(e){var t=window.CS.getBMState().user;t.password=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={type:a.server_called};window.CS.clientAction(t),_.a.post("/auth/login",window.CS.getBMState().user).then((function(e){var t=e.data;if(console.log(t),t.errorMessage){var n={type:a.login_error,errorMessage:t.errorMessage};window.CS.clientAction(n)}else{var r={type:a.user_logged_in,user:t};window.CS.clientAction(r),y.push("/showadvertises")}}))}},{key:"handleLogout",value:function(){var e={type:a.server_called};window.CS.clientAction(e),_.a.get("/auth/logout").then((function(e){var t={type:a.user_logged_out};window.CS.clientAction(t)}))}}]),t}(r.Component);C[a.update_user]=function(e,t){return console.log(t.user),e.BM.user=t.user,e},C[a.user_created]=function(e,t){return console.log(t.user),e.UI.waitingForResponse=!1,e.UI.loggedIn=!0,e};var O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",{htmlFor:"firstname"},"First name:"),i.a.createElement("input",{type:"text",placeholder:"firstname",onChange:this.handleFirstnameChange,value:window.CS.getBMState().user.firstname}),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"lastname"},"Last name:"),i.a.createElement("input",{type:"text",placeholder:"lastname",onChange:this.handleLastnameChange,value:window.CS.getBMState().user.lastname}),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"username"},"Username:"),i.a.createElement("input",{type:"username",placeholder:"Your username",onChange:this.handleUsernameChange,value:window.CS.getBMState().user.username}),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"password"},"Password:"),i.a.createElement("input",{type:"password",placeholder:"********",onChange:this.handlePasswordChange,value:window.CS.getBMState().user.password}),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",value:"Register as new User"})))}},{key:"handleFirstnameChange",value:function(e){var t=window.CS.getBMState().user;t.firstname=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handleLastnameChange",value:function(e){var t=window.CS.getBMState().user;t.lastname=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handleUsernameChange",value:function(e){var t=window.CS.getBMState().user;t.username=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handlePasswordChange",value:function(e){var t=window.CS.getBMState().user;t.password=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={type:a.server_called};window.CS.clientAction(t),_.a.post("/auth/signup",window.CS.getBMState().user).then((function(e){var t={type:a.user_created};y.push("/"),window.CS.clientAction(t),console.log(e.data)}))}}]),t}(r.Component),M=n(18);C[a.advertise_updated]=function(e,t){e.UI.waitingForResponse=!1},C[a.update_advertise]=function(e,t){var n=e.BM.advertises.filter((function(e){return e._id===t.advertise._id}));return console.log(n),n[0].advertise_type=t.advertise.advertise_type,n[0].advertise_description=t.advertise.advertise_description,e},C[a.delete_advertise]=function(e,t){var n=e.BM.advertises.filter((function(e){return e._id!==t.advertise._id}));return e.BM.advertises=n,e};var k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleSwitchToEditMode=n.handleSwitchToEditMode.bind(Object(M.a)(n)),n.handleNameChange=n.handleNameChange.bind(Object(M.a)(n)),n.handleValueChange=n.handleValueChange.bind(Object(M.a)(n)),n.handleSave=n.handleSave.bind(Object(M.a)(n)),n.handleRerenderTest=n.handleRerenderTest.bind(Object(M.a)(n)),n.handleDelete=n.handleDelete.bind(Object(M.a)(n)),n.state={edit_mode:e.edit},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.state.edit_mode?i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("input",{type:"text",name:"name",value:this.props.advertise.advertise_type,onChange:this.handleNameChange})),i.a.createElement("td",null,i.a.createElement("input",{type:"number",name:"value",value:this.props.advertise.advertise_description,onChange:this.handleValueChange})," \u20ac"),i.a.createElement("td",null,i.a.createElement("button",{onClick:this.handleSave,id:this.props.advertise._id},"save"),i.a.createElement("button",{onClick:this.handleRerenderTest},"increase State Counter"))):i.a.createElement("tr",null,i.a.createElement("td",null,this.props.advertise.advertise_type),i.a.createElement("td",null,this.props.advertise.advertise_description," \u20ac"),i.a.createElement("td",null,i.a.createElement("button",{onClick:this.handleSwitchToEditMode},"edit"),i.a.createElement("button",{onClick:this.handleDelete,id:this.props.advertise._id},"sell or dispose"),i.a.createElement("button",{onClick:this.handleRerenderTest},"increase State Counter ",window.CS.getUIState().counter)))}},{key:"handleSwitchToEditMode",value:function(){this.setState({edit_mode:!0})}},{key:"handleNameChange",value:function(e){var t=this.props.advertise;t.advertise_type=e.target.value;var n={type:a.update_advertise,advertise:t};window.CS.clientAction(n)}},{key:"handleValueChange",value:function(e){var t=this.props.advertise;t.advertise_description=e.target.value;var n={type:a.update_advertise,advertise:t};window.CS.clientAction(n)}},{key:"handleSave",value:function(e){this.setState({edit_mode:!1});var t={type:a.server_called};window.CS.clientAction(t),_.a.put("/advertises/update/"+this.props.advertise._id,this.props.advertise).then((function(e){var t={type:a.advertise_updated};window.CS.clientAction(t)}))}},{key:"handleDelete",value:function(){var e=this,t={type:a.server_called};window.CS.clientAction(t),_.a.post("/advertises/delete/"+this.props.advertise._id).then((function(t){var n={type:a.delete_advertise,advertise:e.props.advertise};window.CS.clientAction(n)}))}},{key:"handleRerenderTest",value:function(e){var t={type:a.render_test};window.CS.clientAction(t)}}]),t}(i.a.PureComponent),I=n(122),j=n.n(I);C[a.create_advertise]=function(e,t){return console.log("test",e.BM.advertises),e.BM.advertises.push(t.advertise),e.UI.waitingForResponse=!1,e};var U=function(e){function t(e){var n;return Object(s.a)(this,t),console.log("new App component will be initialized"),console.log(window.CS.getBMState()),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleCreateAdvertise=n.handleCreateAdvertise.bind(Object(M.a)(n)),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null," ",window.CS.getUIState().waitingForResponse.toString(),window.CS.getUIState().counter),i.a.createElement("h1",null,"simple advertise management application"),i.a.createElement("p",null,"to create a new advertise click this button:\xa0",i.a.createElement("button",{onClick:this.handleCreateAdvertise},"create advertise")),i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"description"),i.a.createElement("th",null,"value"),i.a.createElement("th",null,"action")),console.log(window.CS.getBMState().advertises),window.CS.getBMState().advertises.map((function(e){return i.a.createElement(k,{key:e._id,advertise:e,edit:!1})})))))}},{key:"handleCreateAdvertise",value:function(){console.log("handleCreateAdvertise invoked");var e={type:a.server_called};window.CS.clientAction(e);var t={_id:j.a.Types.ObjectId().toString(),advertise_type:"",advertise_description:"",advertise_category:[],advertise_price:"",advertise_pictureUrl:"",advertise_owner:"",advertise_comment:"",advertise_counter:0,advertise_status:"",advertise_message:"",advertise_city:""},n={type:a.create_advertise,advertise:t};_.a.post("/advertises/add",t).then((function(e){window.CS.clientAction(n),console.log(e.data)}))}}]),t}(r.Component),A=n(24);C[a.server_called]=function(e,t){return e.UI.waitingForResponse=!0,e},C[a.add_advertises_from_server]=function(e,t){return e.UI.waitingForResponse=!1,e.BM.advertises=t.advertises,e};var B=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e={type:a.server_called};window.CS.clientAction(e),_.a.get("/advertises/read").then((function(e){console.log("this data was loaded as a result of componentDidMount:"),console.log(e.data);var t={type:a.add_advertises_from_server,advertises:e.data};window.CS.clientAction(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return window.CS.log("App --\x3e render()"),i.a.createElement("div",{className:"container-body"},i.a.createElement(p,null)," ",i.a.createElement("div",{className:"container-main-content"}," ",i.a.createElement("div",null,i.a.createElement(m,null))," ",i.a.createElement(A.c,null,i.a.createElement(A.a,{path:"/showadvertises",component:U}),i.a.createElement(A.a,{path:"/register",component:O})," "),i.a.createElement("div",null,i.a.createElement(A.a,{path:"/",component:b}),i.a.createElement(g,null))," "),i.a.createElement("div",{className:"footer"},"Footer")," ")}}]),t}(i.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R,F=n(41),T=n(79);R=window.__REDUX_DEVTOOLS_EXTENSION__?Object(F.b)(Object(F.a)(T.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()):Object(F.a)(T.a);var N=function(){function e(){Object(s.a)(this,e),this.store=void 0}return Object(d.a)(e,[{key:"log",value:function(e){console.log(e)}},{key:"getStore",value:function(){return this.store}},{key:"getState",value:function(){return this.store.getState()}},{key:"getUIState",value:function(){return this.getState().UI}},{key:"getBMState",value:function(){return this.getState().BM}},{key:"initializeStore",value:function(){this.store=Object(F.c)(E,R)}},{key:"clientAction",value:function(e){this.store.dispatch(e)}},{key:"getDBServerURL_test",value:function(){return"http://localhost:8080"}}]),e}();window.CS=new N,window.CS.initializeStore(),l.a.render(i.a.createElement(A.b,{history:y},i.a.createElement(B,{stateCounter:window.CS.getUIState().counter})),document.getElementById("root")),window.CS.getStore().subscribe((function(){window.CS.log("3. before render ---------------------------------------------"),l.a.render(i.a.createElement(A.b,{history:y},i.a.createElement(B,{stateCounter:window.CS.getUIState().counter})),document.getElementById("root")),window.CS.log("3. after render ---------------------------------------------")})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.038a607a.chunk.js.map