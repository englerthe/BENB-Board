(this["webpackJsonpm3-react-typescript"]=this["webpackJsonpm3-react-typescript"]||[]).push([[0],{125:function(e,t,a){e.exports=a(226)},224:function(e,t,a){e.exports=a.p+"static/media/C.887f96e7.jpg"},226:function(e,t,a){"use strict";a.r(t);var r,n=a(0),s=a.n(n),i=a(77),l=a.n(i),c=a(10),o=a(11),d=a(15),m=a(13),u=a(14),p=a(3),v=(a(41),{UI:{counter:0,loggedIn:!1,waitingForResponse:!1,Login:{errorMessage:""},Register:{errorMessage:""},searchbar:"",searchcategory:""},BM:{user:{firstname:"",lastname:"",username:"",password:"",email:""},advertises:[],comments:[]}});!function(e){e.INIT="@@INIT",e.login_error="login_error",e.register_error="register_error",e.user_logged_in="user_logged_in",e.user_logged_out="user_logged_out",e.update_user="update_user",e.user_created="user_created",e.user_exists="user_exists",e.create_advertise="create_advertise",e.update_advertise="update_advertise",e.delete_advertise="delete_advertise",e.render_test="render_test",e.server_called="server_called",e.advertise_updated="advertise_updated",e.add_comment="add_comment",e.add_advertises_from_server="add_advertises_from_server",e.update_searchcategory="update_searchcategory",e.clear_searchcategory="clear_searchcategory",e.update_searchbar="update_searchbar"}(r||(r={}));var h={},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;window.CS.log("2. ACTION:"+t.type);var a=JSON.parse(JSON.stringify(e));a.UI.counter=e.UI.counter+1;var n=h[t.type];if(void 0!==n)return n(a,t),a;switch(t.type){case r.INIT:return a;default:return window.CS.log("1. Error!!!!! no reducer defined"),a}};h[r.clear_searchcategory]=function(e,t){return e.UI.searchcategory=t.searchcategory,e},h[r.update_searchbar]=function(e,t){return e.UI.searchbar=t.searchbar,e};var E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).clearCategorySearch=function(e){var t={type:r.clear_searchcategory,searchcategory:""};a.clearSearch(e),window.CS.clientAction(t)},a.handleSearchbarChange=function(e){var t={type:r.update_searchbar,searchbar:e.target.value};window.CS.clientAction(t)},a.clearSearch=function(e){var t={type:r.update_searchbar,searchbar:""};window.CS.clientAction(t)},a.clearUser=function(e){var t={type:r.user_logged_out};window.CS.clientAction(t)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return window.CS.getUIState().loggedIn?s.a.createElement("nav",null,s.a.createElement("div",{className:"TitleBar"},s.a.createElement("h2",null,"Buy or Sell something today!"),s.a.createElement("p",null,"Free listings of your private advertisements, join for free now!")),s.a.createElement("div",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(p.b,{to:"/",onClick:this.clearCategorySearch},"Home")),s.a.createElement("div",{className:"nav-search"},s.a.createElement(p.b,{to:"/"},s.a.createElement("input",{className:"NavBarSearchButton",type:"text",name:"query",placeholder:"Search by title",value:window.CS.getUIState().searchbar,onChange:this.handleSearchbarChange}),s.a.createElement("button",{className:"NavBarSearchButton",onClick:this.clearSearch},"Clear Searchfield"))),s.a.createElement("li",null,s.a.createElement(p.b,{to:"/showadvertises",onClick:this.clearCategorySearch},"My advertises"))))):s.a.createElement("nav",null,s.a.createElement("div",{className:"TitleBar"},s.a.createElement("h2",null,"Buy or Sell something today!"),s.a.createElement("p",null,"Free listings of your private advertisements, join for free now!")),s.a.createElement("div",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(p.b,{to:"/",onClick:this.clearCategorySearch},"Home")),s.a.createElement("div",{className:"nav-search"},s.a.createElement(p.b,{to:"/"},s.a.createElement("input",{className:"NavBarSearchButton",type:"text",placeholder:"Search by title",value:window.CS.getUIState().searchbar,onChange:this.handleSearchbarChange}),s.a.createElement("button",{className:"NavBarSearchButton",onClick:this.clearSearch},"Clear Searchfield"))),s.a.createElement("li",null,s.a.createElement(p.b,{to:"/register",onClick:this.clearUser},"Join us")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"/login",onClick:this.clearUser},"Login")))))}}]),t}(n.Component);h[r.update_searchcategory]=function(e,t){return e.UI.searchbar="",e.UI.searchcategory=t.searchcategory,e};var w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).handleCategorySearch=function(e){var t={type:r.update_searchcategory,searchcategory:e.target.id};window.CS.clientAction(t)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"categories"},s.a.createElement("h3",null,"Categories"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"antiques & collectors",onClick:this.handleCategorySearch},"antiques & collectors")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"car, motorcycle & accessories",onClick:this.handleCategorySearch},"car, motorcycle & accessories")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"baby & kids",onClick:this.handleCategorySearch},"baby & kids")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"beauty & wellness",onClick:this.handleCategorySearch},"beauty & wellness")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"books, movies & music",onClick:this.handleCategorySearch},"books, movies & music")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"electronics & computer",onClick:this.handleCategorySearch},"electronics & computer")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"mobile phone & equipment",onClick:this.handleCategorySearch},"mobile phone & equipment")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"pet needs",onClick:this.handleCategorySearch},"pet needs")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"hobby & leisure",onClick:this.handleCategorySearch},"hobby & leisure")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"property",onClick:this.handleCategorySearch},"property")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"jobs & services",onClick:this.handleCategorySearch},"jobs & services")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"clothes & fashion",onClick:this.handleCategorySearch},"clothes & fashion")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"furniture, housing & household",onClick:this.handleCategorySearch},"furniture, housing & household")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"jewelry & accessories",onClick:this.handleCategorySearch},"jewelry & accessories")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"games & consoles",onClick:this.handleCategorySearch},"games & consoles")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"sports, travel & outdoor",onClick:this.handleCategorySearch},"sports, travel & outdoor")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"tickets & events",onClick:this.handleCategorySearch},"tickets & events")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"moving & help",onClick:this.handleCategorySearch},"moving & help")),s.a.createElement("li",null,s.a.createElement(p.a,{to:"/",id:"tools",onClick:this.handleCategorySearch},"tools"))))}}]),t}(n.Component),y=a(16),C=a.n(y),_=a(17),S=Object(_.a)();h[r.login_error]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage=t.errorMessage,e},h[r.user_logged_in]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage="",e.UI.loggedIn=!0,e.BM.user=t.user,e},h[r.user_logged_out]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Login.errorMessage="",e.UI.loggedIn=!1,e.BM.user={lastname:"",firstname:"",username:"",password:"",email:""},e},h[r.update_searchcategory]=function(e,t){return e.UI.searchcategory=t.searchcategory,e.UI.searchbar="",e};var b=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return window.CS.getUIState().loggedIn?s.a.createElement("div",{className:"wholeLogout"},s.a.createElement("p",null,"Welcome, ",window.CS.getBMState().user.username," !"),s.a.createElement("h4",null,"contact informations:"),s.a.createElement("p",null,"Firstname: ",window.CS.getBMState().user.firstname),s.a.createElement("p",null,"Lastname: ",window.CS.getBMState().user.lastname),s.a.createElement("button",{onClick:this.handleLogout},"Logout")):s.a.createElement("div",{className:"loginFormDiv"},s.a.createElement("form",{className:"loginFormMain",onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"username"},"Username:"),s.a.createElement("input",{type:"username",placeholder:"Your username",onChange:this.handleUsernameChange,value:window.CS.getBMState().user.username}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("input",{type:"password",placeholder:"********",onChange:this.handlePasswordChange,value:window.CS.getBMState().user.password}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Login"})),s.a.createElement("p",null,window.CS.getUIState().Login.errorMessage))}},{key:"handleUsernameChange",value:function(e){var t=window.CS.getBMState().user;t.username=e.target.value;var a={type:r.update_user,user:t};window.CS.clientAction(a)}},{key:"handlePasswordChange",value:function(e){var t=window.CS.getBMState().user;t.password=e.target.value;var a={type:r.update_user,user:t};window.CS.clientAction(a)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={type:r.server_called};window.CS.clientAction(t),C.a.post("/auth/login",window.CS.getBMState().user).then((function(e){var t=e.data;if(t.errorMessage){var a={type:r.login_error,errorMessage:t.errorMessage};window.CS.clientAction(a)}else{var n={type:r.user_logged_in,user:t},s={type:r.update_searchcategory,searchcategory:""};window.CS.clientAction(s),window.CS.clientAction(n),S.push("/showadvertises")}}))}},{key:"handleLogout",value:function(){var e={type:r.server_called},t={type:r.update_searchcategory,searchcategory:""};window.CS.clientAction(t),window.CS.clientAction(e),C.a.get("/auth/logout").then((function(e){var t={type:r.user_logged_out};window.CS.clientAction(t)}))}}]),t}(n.Component);h[r.register_error]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.Register.errorMessage=t.errorMessage,e},h[r.update_user]=function(e,t){return e.BM.user=t.user,e},h[r.user_created]=function(e,t){return e.UI.waitingForResponse=!1,e.UI.loggedIn=!0,e};var N=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"registerFormDiv"},s.a.createElement("form",{className:"registerFormMain",onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"firstname"},"First name:"),s.a.createElement("input",{type:"firstname",placeholder:"firstname",onChange:this.handleFirstnameChange,value:window.CS.getBMState().user.firstname}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"lastname"},"Last name:"),s.a.createElement("input",{type:"lastname",placeholder:"lastname",onChange:this.handleLastnameChange,value:window.CS.getBMState().user.lastname}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"username"},"Username:"),s.a.createElement("input",{type:"username",placeholder:"Your username",onChange:this.handleUsernameChange,value:window.CS.getBMState().user.username}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("input",{type:"password",placeholder:"********",onChange:this.handlePasswordChange,value:window.CS.getBMState().user.password}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"email"},"Email:"),s.a.createElement("input",{type:"email",placeholder:"yourname@mail.com",onChange:this.handleEmailChange,value:window.CS.getBMState().user.email}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Register as new User"})),s.a.createElement("p",null,window.CS.getUIState().Register.errorMessage))}},{key:"handleFirstnameChange",value:function(e){var t=window.CS.getBMState().user;t.firstname=e.target.value;var a={type:r.update_user,user:t};window.CS.clientAction(a)}},{key:"handleLastnameChange",value:function(e){var t=window.CS.getBMState().user;t.lastname=e.target.value;var a={type:r.update_user,user:t};window.CS.clientAction(a)}},{key:"handleUsernameChange",value:function(e){var t=window.CS.getBMState().user;t.username=e.target.value;var a={type:r.update_user,user:t};window.CS.clientAction(a)}},{key:"handlePasswordChange",value:function(e){var t=window.CS.getBMState().user;t.password=e.target.value;var a={type:r.update_user,user:t};window.CS.clientAction(a)}},{key:"handleEmailChange",value:function(e){var t=window.CS.getBMState().user;t.email=e.target.value;var a={type:r.update_user,user:t};window.CS.clientAction(a)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={type:r.server_called};window.CS.clientAction(t),C.a.post("/auth/signup",window.CS.getBMState().user).then((function(e){var t=e.data;if(t.errorMessage){var a={type:r.register_error,errorMessage:t.errorMessage};window.CS.clientAction(a)}else{var n={type:r.user_created};S.push("/"),window.CS.clientAction(n)}}))}}]),t}(n.Component),f=a(51);h[r.advertise_updated]=function(e,t){e.UI.waitingForResponse=!1},h[r.update_advertise]=function(e,t){var a=e.BM.advertises.filter((function(e){return e._id===t.advertise._id}));return a[0].advertise_title=t.advertise.advertise_title,a[0].advertise_type=t.advertise.advertise_type,a[0].advertise_description=t.advertise.advertise_description,a[0].advertise_category=t.advertise.advertise_category,a[0].advertise_price=t.advertise.advertise_price,a[0].advertise_pictureUrl=t.advertise.advertise_pictureUrl,a[0].advertise_owner=t.advertise.advertise_owner,a[0].advertise_counter=t.advertise.advertise_counter,a[0].advertise_status=t.advertise.advertise_status,a[0].advertise_message=t.advertise.advertise_message,a[0].advertise_city=t.advertise.advertise_city,e},h[r.delete_advertise]=function(e,t){var a=e.BM.advertises.filter((function(e){return e._id!==t.advertise._id}));return e.BM.advertises=a,e};var k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleSwitchToEditMode=function(){a.setState({edit_mode:!0})},a.handleTitleChange=function(e){var t=a.props.advertise;t.advertise_title=e.target.value;var n={type:r.update_advertise,advertise:t};window.CS.clientAction(n)},a.handleTypeChange=function(e){var t=a.props.advertise;t.advertise_type=e.target.value;var n={type:r.update_advertise,advertise:t};window.CS.clientAction(n)},a.handleDescriptionChange=function(e){var t=a.props.advertise;t.advertise_description=e.target.value;var n={type:r.update_advertise,advertise:t};window.CS.clientAction(n)},a.handleCategoryChange=function(e){var t=a.props.advertise;t.advertise_category=e.target.value;var n={type:r.update_advertise,advertise:t};window.CS.clientAction(n)},a.handlePriceChange=function(e){var t=a.props.advertise;t.advertise_price=e.target.value;var n={type:r.update_advertise,advertise:t};window.CS.clientAction(n)},a.handlePictureUrlChange=function(e){var t=a.props.advertise;t.advertise_pictureUrl=e.target.value;var n={type:r.update_advertise,advertise:t};window.CS.clientAction(n)},a.handleStatusChange=function(e){var t=a.props.advertise;t.advertise_status=e.target.value;var n={type:r.update_advertise,advertise:t};window.CS.clientAction(n)},a.handleCityChange=function(e){var t=a.props.advertise;t.advertise_city=e.target.value;var n={type:r.update_advertise,advertise:t};window.CS.clientAction(n)},a.handleSave=function(e){a.setState({edit_mode:!1});var t={type:r.server_called};window.CS.clientAction(t),C.a.put("/advertises/update/"+a.props.advertise._id,a.props.advertise).then((function(e){var t={type:r.advertise_updated};window.CS.clientAction(t)}))},a.handleDelete=function(){var e={type:r.server_called};window.CS.clientAction(e),C.a.post("/advertises/delete/"+a.props.advertise._id).then((function(e){var t={type:r.delete_advertise,advertise:a.props.advertise};window.CS.clientAction(t)}))},a.handleCommentUser=function(e){var t={comment_advertise:a.props.advertise._id,comment_text:e.target.value,comment_user:window.CS.getBMState().user.username};a.setState({comment:t})},a.handleCommentDescription=function(e){var t={comment_advertise:a.props.advertise._id,comment_text:e.target.value,comment_user:window.CS.getBMState().user.username};a.setState({comment:t})},a.handleCreateComment=function(e){e.preventDefault();var t={type:r.server_called};window.CS.clientAction(t),C.a.post("/advertises/comment/add",a.state.comment).then((function(e){S.push("/"),a.setState({comment:{comment_user:"",comment_text:""}})})),C.a.get("/advertises/read").then((function(e){var t={type:r.add_advertises_from_server,advertises:e.data[0],comments:e.data[1]};window.CS.clientAction(t)})).catch((function(e){console.log(e)}))},a.state={edit_mode:e.edit,comment:{comment_user:"",comment_text:""}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props;return this.state.edit_mode&&"/showadvertises"===t.location.pathname?s.a.createElement("div",{className:"wholeProduct"},s.a.createElement("ul",{className:"ulProduct"},s.a.createElement("li",{className:"titleName"},"Title: ",s.a.createElement("br",null)," ",s.a.createElement("input",{size:50,type:"text",name:"title",value:this.props.advertise.advertise_title,onChange:this.handleTitleChange})),s.a.createElement("li",null,"PictureUrl: ",s.a.createElement("br",null)," ",s.a.createElement("input",{size:50,type:"text",name:"pictureUrl",value:this.props.advertise.advertise_pictureUrl,onChange:this.handlePictureUrlChange})),s.a.createElement("li",{className:"price"},"Price: ",s.a.createElement("br",null)," ",s.a.createElement("input",{size:50,type:"text",name:"price",value:this.props.advertise.advertise_price,onChange:this.handlePriceChange})),s.a.createElement("li",{className:"description"},s.a.createElement("label",{htmlFor:"description"},"Description: ",s.a.createElement("br",null)," "),s.a.createElement("textarea",{rows:5,cols:52,maxLength:300,name:"description",value:this.props.advertise.advertise_description,onChange:this.handleDescriptionChange})),s.a.createElement("li",{className:"city"},"City: ",s.a.createElement("br",null)," ",s.a.createElement("input",{size:50,type:"text",name:"city",value:this.props.advertise.advertise_city,onChange:this.handleCityChange})),s.a.createElement("li",{className:"type"},s.a.createElement("label",{htmlFor:"type"},"Choose a Type: ",s.a.createElement("br",null)," "),s.a.createElement("input",{type:"radio",name:"type",value:"offer",checked:"offer"===this.props.advertise.advertise_type,onClick:this.handleTypeChange})," ",s.a.createElement("span",{className:"offerOrange"},"offer"),s.a.createElement("input",{type:"radio",name:"type",value:"search",checked:"search"===this.props.advertise.advertise_type,onClick:this.handleTypeChange})," ",s.a.createElement("span",{className:"searchBlue"},"search")),s.a.createElement("li",{className:"status"},s.a.createElement("label",{htmlFor:"status"},"Choose a Status: ",s.a.createElement("br",null)," "),s.a.createElement("input",{type:"radio",name:"status",value:"available",checked:"available"===this.props.advertise.advertise_status,onClick:this.handleStatusChange})," ",s.a.createElement("span",{className:"availableGreen"},"available"),s.a.createElement("input",{type:"radio",name:"status",value:"sold",checked:"sold"===this.props.advertise.advertise_status,onClick:this.handleStatusChange})," ",s.a.createElement("span",{className:"soldRed"},"sold")),s.a.createElement("li",{className:"category"},"Category: ",s.a.createElement("br",null)," ",s.a.createElement("select",{className:"selectBox",name:"category",value:this.props.advertise.advertise_category,onChange:this.handleCategoryChange},s.a.createElement("option",{value:"---"},"---"),s.a.createElement("option",{value:"antiques & collectors"},"antiques & collectors"),s.a.createElement("option",{value:"car, motorcycle & accessories"},"car, motorcycle & accessories"),s.a.createElement("option",{value:"baby & kids"},"baby & kids"),s.a.createElement("option",{value:"beauty & wellness"},"beauty & wellness"),s.a.createElement("option",{value:"books, movies & music"},"books, movies & music"),s.a.createElement("option",{value:"electronics & computer"},"electronics & computer"),s.a.createElement("option",{value:"mobile phone & equipment"},"mobile phone & equipment"),s.a.createElement("option",{value:"pet needs"},"pet needs"),s.a.createElement("option",{value:"hobby & leisure"},"hobby & leisure"),s.a.createElement("option",{value:"property"},"property"),s.a.createElement("option",{value:"jobs & services"},"jobs & services"),s.a.createElement("option",{value:"clothes & fashion"},"clothes & fashion"),s.a.createElement("option",{value:"furniture, housing & household"},"furniture, housing & household"),s.a.createElement("option",{value:"jewelry & accessories"},"jewelry & accessories"),s.a.createElement("option",{value:"games & consoles"},"games & consoles"),s.a.createElement("option",{value:"sports, travel & outdoor"},"sports, travel & outdoor"),s.a.createElement("option",{value:"tickets & events"},"tickets & events"),s.a.createElement("option",{value:"moving & help"},"moving & help"),s.a.createElement("option",{value:"tools"},"tools"))),s.a.createElement("li",{className:"buttonsArea"},s.a.createElement("button",{className:"saveButtonInEditMode",onClick:this.handleSave,id:this.props.advertise._id},"save")))):window.CS.getUIState().loggedIn&&"/showadvertises"===t.location.pathname?s.a.createElement("div",{className:"wholeProduct"},s.a.createElement("ul",{className:"ulProduct"},s.a.createElement("li",{className:"title"},this.props.advertise.advertise_title),s.a.createElement("li",null,s.a.createElement("img",{className:"picture",src:this.props.advertise.advertise_pictureUrl,alt:"no pic available"})),s.a.createElement("li",{className:"price"},s.a.createElement("span",{className:"priceName"},"Price:")," ",this.props.advertise.advertise_price),s.a.createElement("li",{className:"description"},s.a.createElement("span",{className:"descriptionName"},"Description:")," ",s.a.createElement("br",null)," ",this.props.advertise.advertise_description),s.a.createElement("li",{className:"owner"},s.a.createElement("span",{className:"ownerName"},"Owner:")," ",this.props.advertise.advertise_owner),s.a.createElement("li",{className:"city"},s.a.createElement("span",{className:"cityName"},"City:")," ",this.props.advertise.advertise_city),s.a.createElement("li",{className:"type"},s.a.createElement("span",{className:"typeName"},"Type:")," ",this.props.advertise.advertise_type),s.a.createElement("li",{className:"status"},s.a.createElement("span",{className:"statusName"},"Status:")," ",s.a.createElement("span",{id:this.props.advertise.advertise_status},this.props.advertise.advertise_status)),s.a.createElement("li",{className:"category"},s.a.createElement("span",{className:"categoryName"},"Category:")," ",s.a.createElement("br",null)," ",this.props.advertise.advertise_category),s.a.createElement("li",{className:"buttonsArea"},s.a.createElement("button",{className:"editButton",onClick:this.handleSwitchToEditMode},"edit"),s.a.createElement("button",{className:"deleteButton",onClick:this.handleDelete,id:this.props.advertise._id},"delete it")))):window.CS.getUIState().loggedIn&&window.CS.getBMState().user.username===this.props.advertise.advertise_owner?s.a.createElement("div",{className:"wholeProduct"},s.a.createElement("ul",{className:"ulProduct"},s.a.createElement("li",{className:"title"},this.props.advertise.advertise_title),s.a.createElement("li",null,s.a.createElement("img",{className:"picture",src:this.props.advertise.advertise_pictureUrl,alt:"no pic available"})),s.a.createElement("li",{className:"price"},s.a.createElement("span",{className:"priceName"},"Price:")," ",this.props.advertise.advertise_price),s.a.createElement("li",{className:"description"},s.a.createElement("span",{className:"descriptionName"},"Description:")," ",s.a.createElement("br",null)," ",this.props.advertise.advertise_description),s.a.createElement("li",{className:"owner"},s.a.createElement("span",{className:"ownerName"},"Owner:")," ",this.props.advertise.advertise_owner),s.a.createElement("li",{className:"city"},s.a.createElement("span",{className:"cityName"},"City:")," ",this.props.advertise.advertise_city),s.a.createElement("li",{className:"type"},s.a.createElement("span",{className:"typeName"},"Type:")," ",this.props.advertise.advertise_type),s.a.createElement("li",{className:"status"},s.a.createElement("span",{className:"statusName"},"Status:")," ",s.a.createElement("span",{id:this.props.advertise.advertise_status},this.props.advertise.advertise_status)),s.a.createElement("li",{className:"comment"},s.a.createElement("span",{className:"commentName"},"Comment:")," ",s.a.createElement("br",null),window.CS.getBMState().comments.filter((function(t){return t.comment_advertise===e.props.advertise._id})).map((function(e){return s.a.createElement("span",null,"from ",e.comment_user,":"," ",e.comment_text,s.a.createElement("br",null))}))),s.a.createElement("li",{className:"category"},s.a.createElement("span",{className:"categoryName"},"Category:")," ",s.a.createElement("br",null)," ",this.props.advertise.advertise_category))):window.CS.getUIState().loggedIn?s.a.createElement("div",{className:"wholeProduct"},s.a.createElement("ul",{className:"ulProduct"},s.a.createElement("li",{className:"title"},this.props.advertise.advertise_title),s.a.createElement("li",null,s.a.createElement("img",{className:"picture",src:this.props.advertise.advertise_pictureUrl,alt:"no pic available"})),s.a.createElement("li",{className:"price"},s.a.createElement("span",{className:"priceName"},"Price:")," ",this.props.advertise.advertise_price),s.a.createElement("li",{className:"description"},s.a.createElement("span",{className:"descriptionName"},"Description:")," ",s.a.createElement("br",null)," ",this.props.advertise.advertise_description),s.a.createElement("li",{className:"owner"},s.a.createElement("span",{className:"ownerName"},"Owner:")," ",this.props.advertise.advertise_owner),s.a.createElement("li",{className:"city"},s.a.createElement("span",{className:"cityName"},"City:")," ",this.props.advertise.advertise_city),s.a.createElement("li",{className:"type"},s.a.createElement("span",{className:"typeName"},"Type:")," ",this.props.advertise.advertise_type),s.a.createElement("li",{className:"status"},s.a.createElement("span",{className:"statusName"},"Status:")," ",s.a.createElement("span",{id:this.props.advertise.advertise_status},this.props.advertise.advertise_status)),s.a.createElement("li",{className:"comment"},s.a.createElement("span",{className:"commentName"},"Comment:")," ",s.a.createElement("br",null),window.CS.getBMState().comments.filter((function(t){return t.comment_advertise===e.props.advertise._id})).map((function(e){return s.a.createElement("span",null,"from ",e.comment_user,":"," ",e.comment_text,s.a.createElement("br",null))}))),s.a.createElement("li",{className:"category"},s.a.createElement("span",{className:"categoryName"},"Category:")," ",s.a.createElement("br",null)," ",this.props.advertise.advertise_category)),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement("form",{className:"commentField",onSubmit:this.handleCreateComment},s.a.createElement("label",{htmlFor:"commentUser"},"Username:"),s.a.createElement("input",{type:"text",value:window.CS.getBMState().user.username,disabled:!0}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"commentText"},"Comment:"),s.a.createElement("textarea",{rows:6,cols:52,maxLength:400,name:"description",onChange:this.handleCommentDescription,value:this.state.comment.comment_text}),s.a.createElement("br",null),s.a.createElement("button",{className:"commentButton",type:"submit"},"Add Comment")),s.a.createElement("p",null,window.CS.getUIState().Register.errorMessage))))):s.a.createElement("div",{className:"wholeProduct"},s.a.createElement("ul",{className:"ulProduct"},s.a.createElement("li",{className:"title"},this.props.advertise.advertise_title),s.a.createElement("li",null,s.a.createElement("img",{className:"picture",src:this.props.advertise.advertise_pictureUrl,alt:"no pic available"})),s.a.createElement("li",{className:"price"},s.a.createElement("span",{className:"priceName"},"Price:")," ",this.props.advertise.advertise_price),s.a.createElement("li",{className:"description"},s.a.createElement("span",{className:"descriptionName"},"Description:")," ",s.a.createElement("br",null)," ",this.props.advertise.advertise_description),s.a.createElement("li",{className:"owner"},s.a.createElement("span",{className:"ownerName"},"Owner:")," ",this.props.advertise.advertise_owner),s.a.createElement("li",{className:"city"},s.a.createElement("span",{className:"cityName"},"City:")," ",this.props.advertise.advertise_city),s.a.createElement("li",{className:"type"},s.a.createElement("span",{className:"typeName"},"Type:")," ",this.props.advertise.advertise_type),s.a.createElement("li",{className:"status"},s.a.createElement("span",{className:"statusName"},"Status:")," ",s.a.createElement("span",{id:this.props.advertise.advertise_status},this.props.advertise.advertise_status)),s.a.createElement("li",{className:"comment"},s.a.createElement("span",{className:"commentName"},"Comment:")," ",s.a.createElement("br",null),window.CS.getBMState().comments.filter((function(t){return t.comment_advertise===e.props.advertise._id})).map((function(e){return s.a.createElement("span",null,"from ",e.comment_user,":"," ",e.comment_text,s.a.createElement("br",null))}))),s.a.createElement("li",{className:"category"},s.a.createElement("span",{className:"categoryName"},"Category:")," ",s.a.createElement("br",null)," ",this.props.advertise.advertise_category)))}}]),t}(s.a.PureComponent),U=a(123),I=a.n(U);h[r.create_advertise]=function(e,t){return e.BM.advertises.unshift(t.advertise),e.UI.waitingForResponse=!1,e};var B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleCreateAdvertise=a.handleCreateAdvertise.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props;window.CS.getBMState().advertises&&window.CS.getBMState().advertises.sort((function(e,t){return Date.parse(t.created_at)-Date.parse(e.created_at)}));for(var a=window.CS.getBMState().advertises.filter((function(e){return e.advertise_category===window.CS.getUIState().searchcategory})),r=window.CS.getUIState().searchbar.toLowerCase(),n=[],i=0;i<window.CS.getBMState().advertises.length;i++)-1!==window.CS.getBMState().advertises[i].advertise_title.toLowerCase().indexOf(r)&&n.push(window.CS.getBMState().advertises[i]);var l="/showadvertises"===t.location.pathname?window.CS.getBMState().advertises.filter((function(e){return e.advertise_owner===window.CS.getBMState().user.username})):window.CS.getBMState().advertises;return window.CS.getUIState().loggedIn?""===window.CS.getUIState().searchcategory&&""===window.CS.getUIState().searchbar?s.a.createElement("div",null,"/showadvertises"===t.location.pathname&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"textFromWholeProduct"},"show all own advertises"),s.a.createElement("p",{className:"textFromWholeProduct"},"to create a new advertise click this button:\xa0",s.a.createElement("button",{className:"createAdvertiseButton",onClick:this.handleCreateAdvertise},"create advertise")))," ",s.a.createElement("div",{className:"render_showadvertises"},l.map((function(t){return s.a.createElement(k,Object.assign({key:t._id},e.props,{advertise:t,edit:!1}))})))):""===window.CS.getUIState().searchbar?s.a.createElement("div",null,"/showadvertises"===t.location.pathname&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"textFromWholeProduct"},"show all own advertises"),s.a.createElement("p",{className:"textFromWholeProduct"},"to create a new advertise click this button:\xa0",s.a.createElement("button",{onClick:this.handleCreateAdvertise},"create advertise"))),s.a.createElement("h3",{className:"categoryTitle"},window.CS.getUIState().searchcategory),s.a.createElement("div",{className:"render_showadvertises"}," ",a.map((function(t){return s.a.createElement(k,Object.assign({key:t._id},e.props,{advertise:t,edit:!1}))})))):s.a.createElement("div",null,"/showadvertises"===t.location.pathname&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"textFromWholeProduct"},"show all own advertises"),s.a.createElement("p",{className:"textFromWholeProduct"},"to create a new advertise click this button:\xa0",s.a.createElement("button",{onClick:this.handleCreateAdvertise},"create advertise"))),s.a.createElement("h3",{className:"categoryTitle"},"your search: ",window.CS.getUIState().searchbar),s.a.createElement("div",{className:"render_showadvertises"}," ",n.map((function(t){return s.a.createElement(k,Object.assign({key:t._id},e.props,{advertise:t,edit:!1}))})))):""===window.CS.getUIState().searchcategory&&""===window.CS.getUIState().searchbar?s.a.createElement("div",null,s.a.createElement("h3",{className:"categoryTitle"},"All advertises ordered by date"),s.a.createElement("div",{className:"render_showadvertises"}," ",window.CS.getBMState().advertises.map((function(t){return s.a.createElement(k,Object.assign({key:t._id},e.props,{advertise:t,edit:!1}))})))):""===window.CS.getUIState().searchbar?s.a.createElement("div",null,s.a.createElement("h3",{className:"categoryTitle"},window.CS.getUIState().searchcategory),s.a.createElement("div",{className:"render_showadvertises"}," ",a.map((function(t){return s.a.createElement(k,Object.assign({key:t._id},e.props,{advertise:t,edit:!1}))})))):s.a.createElement("div",null,s.a.createElement("h3",{className:"categoryTitle"},"your search: ",window.CS.getUIState().searchbar),s.a.createElement("div",{className:"render_showadvertises"}," ",n.map((function(t){return s.a.createElement(k,Object.assign({key:t._id},e.props,{advertise:t,edit:!1}))}))))}},{key:"handleCreateAdvertise",value:function(){var e={type:r.server_called};window.CS.clientAction(e);var t={_id:I.a.Types.ObjectId().toString(),advertise_title:"",advertise_type:"offer",advertise_description:"",advertise_category:"---",advertise_price:"",advertise_owner:window.CS.getBMState().user.username.toString(),advertise_pictureUrl:"https://res.cloudinary.com/benb-board/image/upload/v1572432933/benb-board/sale_buijkf.jpg",advertise_counter:0,advertise_status:"available",advertise_city:""},a={type:r.create_advertise,advertise:t};C.a.post("/advertises/add",t).then((function(e){window.CS.clientAction(a)}))}}]),t}(n.Component),M=a(24),O=a(224);h[r.server_called]=function(e,t){return e.UI.waitingForResponse=!0,e},h[r.add_advertises_from_server]=function(e,t){return e.UI.waitingForResponse=!1,e.BM.advertises=t.advertises,e.BM.comments=t.comments,e};var j=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e={type:r.server_called};window.CS.clientAction(e),C.a.get("/advertises/read").then((function(e){console.log("resp:",e.data);var t={type:r.add_advertises_from_server,advertises:e.data[0],comments:e.data[1]};window.CS.clientAction(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return window.CS.log("App --\x3e render()"),window.CS.getUIState().loggedIn?s.a.createElement("div",{className:"container-body"},s.a.createElement(E,null)," ",s.a.createElement("div",{className:"container-main-content"}," ",s.a.createElement("div",{className:"container-categories"},s.a.createElement(w,null))," ",s.a.createElement(M.c,null,s.a.createElement(M.a,{path:"/showadvertises",user:window.CS.getUIState().loggedIn,component:B}),s.a.createElement(M.a,{path:"/register",component:N})," ",s.a.createElement(M.a,{exact:!0,path:"/",advertise:window.CS.getUIState().searchcategory,component:B})),s.a.createElement("div",{className:"container-userdetails"},s.a.createElement(b,null))," "),s.a.createElement("div",{className:"footer"}," ",s.a.createElement("img",{src:O,alt:"Copyright by BENB"}),"Copyright by BENB")):s.a.createElement("div",{className:"container-body"},s.a.createElement(E,null)," ",s.a.createElement("div",{className:"container-main-content"}," ",s.a.createElement("div",{className:"container-categories"},s.a.createElement(w,null))," ",s.a.createElement(M.c,null,s.a.createElement(M.a,{path:"/showadvertises",component:B}),s.a.createElement(M.a,{path:"/register",component:N})," ",s.a.createElement(M.a,{exact:!0,path:"/",advertise:window.CS.getUIState().searchcategory,component:B})),s.a.createElement("div",{className:"container-userdetails"},s.a.createElement(M.a,{path:"/login",component:b}))," "),s.a.createElement("div",{className:"footer"}," ",s.a.createElement("img",{src:O,alt:"Copyright by BENB"}),"Copyright by BENB"))}}]),t}(s.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A,F=a(40),x=a(80);A=window.__REDUX_DEVTOOLS_EXTENSION__?Object(F.b)(Object(F.a)(x.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()):Object(F.a)(x.a);var P=function(){function e(){Object(c.a)(this,e),this.store=void 0}return Object(o.a)(e,[{key:"log",value:function(e){console.log(e)}},{key:"getStore",value:function(){return this.store}},{key:"getState",value:function(){return this.store.getState()}},{key:"getUIState",value:function(){return this.getState().UI}},{key:"getBMState",value:function(){return this.getState().BM}},{key:"initializeStore",value:function(){this.store=Object(F.c)(g,A)}},{key:"clientAction",value:function(e){this.store.dispatch(e)}},{key:"getDBServerURL_test",value:function(){return console.log("test server reached"),"https://localhost:8080"}}]),e}();window.CS=new P,window.CS.initializeStore(),l.a.render(s.a.createElement(M.b,{history:S},s.a.createElement(j,{stateCounter:window.CS.getUIState().counter})),document.getElementById("root")),window.CS.getStore().subscribe((function(){window.CS.log("3. before render ---------------------------------------------"),l.a.render(s.a.createElement(M.b,{history:S},s.a.createElement(j,{stateCounter:window.CS.getUIState().counter})),document.getElementById("root")),window.CS.log("3. after render ---------------------------------------------")})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.f86f2578.chunk.js.map