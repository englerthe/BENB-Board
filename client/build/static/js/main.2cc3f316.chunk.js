(this["webpackJsonpm3-react-typescript"]=this["webpackJsonpm3-react-typescript"]||[]).push([[0],{124:function(e,t,n){e.exports=n(225)},129:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var a,r=n(0),s=n.n(r),l=n(76),o=n.n(l),i=(n(129),n(15)),u=n(16),c=n(20),d=n(19),h=n(21),m=n(34),p=function(e){return r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(m.a,{exact:!0,to:"/"},"Login")),r.createElement("li",null,r.createElement(m.a,{to:"/register"},"Register")),r.createElement("li",null,r.createElement(m.a,{to:"/showassets"},"Assets"))))},g=function(e){return r.createElement("div",null,r.createElement("ul",null,r.createElement("li",null,"Hier stehen die Kategorien")))},w=function(e){return r.createElement("div",null,r.createElement("ul",null,r.createElement("li",null,"Userdetails")))};!function(e){e.INIT="@@INIT",e.login_error="login_error",e.user_logged_in="user_logged_in",e.user_logged_out="user_logged_out",e.update_user="update_user",e.user_created="user_created",e.user_exists="user_exists",e.create_asset="create_asset",e.update_asset="update_asset",e.delete_asset="delete_asset",e.render_test="render_test",e.server_called="server_called",e.asset_updated="asset_updated",e.add_assets_from_server="add_assets_from_server"}(a||(a={}));var v=n(17),_=n.n(v),S={UI:{counter:0,loggedIn:!1,waitingForResponse:!1,Login:{errorMessage:""}},BM:{user:{firstname:"",lastname:"",username:"",password:""},assets:[]}},C={},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;window.CS.log("2. ACTION:"+t.type);var n=JSON.parse(JSON.stringify(e));n.UI.counter=e.UI.counter+1;var r=C[t.type];if(void 0!==r)return r(n,t),n;switch(t.type){case a.INIT:return n;default:return window.CS.log("1. Error!!!!! no reducer defined"),n}},f=n(10),b=Object(f.a)();C[a.login_error]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage=t.errorMessage,e},C[a.user_logged_in]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage="",e.UI.loggedIn=!0,e.BM.user=t.user,e},C[a.user_logged_out]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage="",e.UI.loggedIn=!1,e.BM.user={lastname:"",firstname:"",username:"",password:""},e};var y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return window.CS.getUIState().loggedIn?s.a.createElement("div",null,s.a.createElement("p",null,"You are logged in as ",window.CS.getBMState().user.username),s.a.createElement("button",{onClick:this.handleLogout},"Logout")):s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"username"},"Username:"),s.a.createElement("input",{type:"username",placeholder:"Your username",onChange:this.handleUsernameChange,value:window.CS.getBMState().user.username}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("input",{type:"password",placeholder:"********",onChange:this.handlePasswordChange,value:window.CS.getBMState().user.password}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Login"})),s.a.createElement("p",null,window.CS.getUIState().Login.errorMessage))}},{key:"handleUsernameChange",value:function(e){var t=window.CS.getBMState().user;t.username=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handlePasswordChange",value:function(e){var t=window.CS.getBMState().user;t.password=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={type:a.server_called};window.CS.clientAction(t),_.a.post("/auth/login",window.CS.getBMState().user).then((function(e){var t=e.data;if(console.log(t),t.errorMessage){var n={type:a.login_error,errorMessage:t.errorMessage};window.CS.clientAction(n)}else{var r={type:a.user_logged_in,user:t};window.CS.clientAction(r),b.push("/showassets")}}))}},{key:"handleLogout",value:function(){var e={type:a.server_called};window.CS.clientAction(e),_.a.get("/auth/logout").then((function(e){var t={type:a.user_logged_out};window.CS.clientAction(t)}))}}]),t}(r.Component);C[a.update_user]=function(e,t){return console.log(t.user),e.BM.user=t.user,e},C[a.user_created]=function(e,t){return console.log(t.user),e.UI.waitingForResponse=!1,e.UI.loggedIn=!0,e};var O=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"firstname"},"First name:"),s.a.createElement("input",{type:"text",placeholder:"firstname",onChange:this.handleFirstnameChange,value:window.CS.getBMState().user.firstname}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"lastname"},"Last name:"),s.a.createElement("input",{type:"text",placeholder:"lastname",onChange:this.handleLastnameChange,value:window.CS.getBMState().user.lastname}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"username"},"Username:"),s.a.createElement("input",{type:"username",placeholder:"Your username",onChange:this.handleUsernameChange,value:window.CS.getBMState().user.username}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("input",{type:"password",placeholder:"********",onChange:this.handlePasswordChange,value:window.CS.getBMState().user.password}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Register as new User"})))}},{key:"handleFirstnameChange",value:function(e){var t=window.CS.getBMState().user;t.firstname=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handleLastnameChange",value:function(e){var t=window.CS.getBMState().user;t.lastname=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handleUsernameChange",value:function(e){var t=window.CS.getBMState().user;t.username=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handlePasswordChange",value:function(e){var t=window.CS.getBMState().user;t.password=e.target.value;var n={type:a.update_user,user:t};window.CS.clientAction(n)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={type:a.server_called};window.CS.clientAction(t),_.a.post("/auth/signup",window.CS.getBMState().user).then((function(e){var t={type:a.user_created};b.push("/"),window.CS.clientAction(t),console.log(e.data)}))}}]),t}(r.Component),k=n(18);C[a.asset_updated]=function(e,t){e.UI.waitingForResponse=!1},C[a.update_asset]=function(e,t){var n=e.BM.assets.filter((function(e){return e._id===t.asset._id}));return console.log(n),n[0].asset_name=t.asset.asset_name,n[0].asset_value=t.asset.asset_value,e},C[a.delete_asset]=function(e,t){var n=e.BM.assets.filter((function(e){return e._id!==t.asset._id}));return e.BM.assets=n,e};var I=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleSwitchToEditMode=n.handleSwitchToEditMode.bind(Object(k.a)(n)),n.handleNameChange=n.handleNameChange.bind(Object(k.a)(n)),n.handleValueChange=n.handleValueChange.bind(Object(k.a)(n)),n.handleSave=n.handleSave.bind(Object(k.a)(n)),n.handleRerenderTest=n.handleRerenderTest.bind(Object(k.a)(n)),n.handleDelete=n.handleDelete.bind(Object(k.a)(n)),n.state={edit_mode:e.edit},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.edit_mode?s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("input",{type:"text",name:"name",value:this.props.asset.asset_name,onChange:this.handleNameChange})),s.a.createElement("td",null,s.a.createElement("input",{type:"number",name:"value",value:this.props.asset.asset_value,onChange:this.handleValueChange})," \u20ac"),s.a.createElement("td",null,s.a.createElement("button",{onClick:this.handleSave,id:this.props.asset._id},"save"),s.a.createElement("button",{onClick:this.handleRerenderTest},"increase State Counter"))):s.a.createElement("tr",null,s.a.createElement("td",null,this.props.asset.asset_name),s.a.createElement("td",null,this.props.asset.asset_value," \u20ac"),s.a.createElement("td",null,s.a.createElement("button",{onClick:this.handleSwitchToEditMode},"edit"),s.a.createElement("button",{onClick:this.handleDelete,id:this.props.asset._id},"sell or dispose"),s.a.createElement("button",{onClick:this.handleRerenderTest},"increase State Counter ",window.CS.getUIState().counter)))}},{key:"handleSwitchToEditMode",value:function(){this.setState({edit_mode:!0})}},{key:"handleNameChange",value:function(e){var t=this.props.asset;t.asset_name=e.target.value;var n={type:a.update_asset,asset:t};window.CS.clientAction(n)}},{key:"handleValueChange",value:function(e){var t=this.props.asset;t.asset_value=e.target.value;var n={type:a.update_asset,asset:t};window.CS.clientAction(n)}},{key:"handleSave",value:function(e){this.setState({edit_mode:!1});var t={type:a.server_called};window.CS.clientAction(t),_.a.put("/assets/update/"+this.props.asset._id,this.props.asset).then((function(e){var t={type:a.asset_updated};window.CS.clientAction(t)}))}},{key:"handleDelete",value:function(){var e=this,t={type:a.server_called};window.CS.clientAction(t),_.a.post("/assets/delete/"+this.props.asset._id).then((function(t){var n={type:a.delete_asset,asset:e.props.asset};window.CS.clientAction(n)}))}},{key:"handleRerenderTest",value:function(e){var t={type:a.render_test};window.CS.clientAction(t)}}]),t}(s.a.PureComponent),M=n(122),j=n.n(M);C[a.create_asset]=function(e,t){return e.BM.assets.push(t.asset),e.UI.waitingForResponse=!1,e};var U=function(e){function t(e){var n;return Object(i.a)(this,t),console.log("new App component will be initialized"),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleCreateAsset=n.handleCreateAsset.bind(Object(k.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null," ",window.CS.getUIState().waitingForResponse.toString(),window.CS.getUIState().counter),s.a.createElement("h1",null,"simple asset management application"),s.a.createElement("p",null,"to create a new asset click this button:\xa0",s.a.createElement("button",{onClick:this.handleCreateAsset},"create asset")),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"description"),s.a.createElement("th",null,"value"),s.a.createElement("th",null,"action")),window.CS.getBMState().assets.map((function(e){return s.a.createElement(I,{key:e._id,asset:e,edit:!1})})))))}},{key:"handleCreateAsset",value:function(){console.log("handleCreateAsset invoked");var e={type:a.server_called};window.CS.clientAction(e);var t={_id:j.a.Types.ObjectId().toString(),asset_name:"",asset_value:0},n={type:a.create_asset,asset:t};_.a.post("/assets/add",t).then((function(e){window.CS.clientAction(n),console.log(e.data)}))}}]),t}(r.Component),A=n(24);C[a.server_called]=function(e,t){return e.UI.waitingForResponse=!0,e},C[a.add_assets_from_server]=function(e,t){return e.UI.waitingForResponse=!1,e.BM.assets=t.assets,e};var B=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e={type:a.server_called};window.CS.clientAction(e),_.a.get("/assets/read").then((function(e){console.log("this data was loaded as a result of componentDidMount:"),console.log(e.data);var t={type:a.add_assets_from_server,assets:e.data};window.CS.clientAction(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return window.CS.log("App --\x3e render()"),s.a.createElement("div",{className:"container-body"},s.a.createElement(p,null)," ",s.a.createElement("div",{className:"container-main-content"}," ",s.a.createElement("div",null,s.a.createElement(g,null))," ",s.a.createElement(A.c,null,s.a.createElement(A.a,{path:"/showassets",component:U}),s.a.createElement(A.a,{path:"/register",component:O})," ",s.a.createElement(A.a,{path:"/",component:y})),s.a.createElement("div",null,s.a.createElement(w,null))," "),s.a.createElement("div",{className:"footer"},"Footer")," ")}}]),t}(s.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R,F=n(41),T=n(79);R=window.__REDUX_DEVTOOLS_EXTENSION__?Object(F.b)(Object(F.a)(T.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()):Object(F.a)(T.a);var N=function(){function e(){Object(i.a)(this,e),this.store=void 0}return Object(u.a)(e,[{key:"log",value:function(e){console.log(e)}},{key:"getStore",value:function(){return this.store}},{key:"getState",value:function(){return this.store.getState()}},{key:"getUIState",value:function(){return this.getState().UI}},{key:"getBMState",value:function(){return this.getState().BM}},{key:"initializeStore",value:function(){this.store=Object(F.c)(E,R)}},{key:"clientAction",value:function(e){this.store.dispatch(e)}},{key:"getDBServerURL_test",value:function(){return"http://localhost:8080"}}]),e}();window.CS=new N,window.CS.initializeStore(),o.a.render(s.a.createElement(A.b,{history:b},s.a.createElement(B,{stateCounter:window.CS.getUIState().counter})),document.getElementById("root")),window.CS.getStore().subscribe((function(){window.CS.log("3. before render ---------------------------------------------"),o.a.render(s.a.createElement(A.b,{history:b},s.a.createElement(B,{stateCounter:window.CS.getUIState().counter})),document.getElementById("root")),window.CS.log("3. after render ---------------------------------------------")})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.2cc3f316.chunk.js.map