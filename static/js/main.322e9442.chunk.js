(this["webpackJsonpdecagon-challenge"]=this["webpackJsonpdecagon-challenge"]||[]).push([[0],{40:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(0),r=a.n(s),n=a(9),i=a.n(n),l=(a(40),a(16)),o=a(8),d=a.n(o),u=a(13),j=a(10),b=a(7),p=a(14),h=a.n(p),O=a(18),f=(a(64),"GET_ALL_USERS"),x="FETCH_FAILED",m="CLEAR_ERRORS",v="IS_LOADING",y="NOT_LOADING",g="SET_API_URL",N="SET_DEFAULT_HEADER_TITLE",_="SET_HEADER_TITLE_FEMALE",w="SET_HEADER_TITLE_MALE",E="SHOW_DISPLAY",L="HIDE_DISPLAY",A={env:{API_URL:"https://randomuser.me/api/"}}.env.API_URL,C=function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a){var c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:N}),c="".concat(A,"?page=1&results=3&exc=login"),e&&(c="".concat(A,"?page=").concat(e,"&results=3&exc=login")),a({type:g,payload:c}),a({type:v}),t.next=8,h.a.get(c);case 8:s=t.sent,a({type:f,payload:s.data.results}),a({type:y}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),a({type:y}),a({type:x});case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a){var c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:_}),c="".concat(A,"?gender=female&page=1&results=3&exc=login"),e&&(c="".concat(A,"?gender=female&page=").concat(e,"&results=3&exc=login")),a({type:g,payload:c}),a({type:v}),t.next=8,h.a.get(c);case 8:s=t.sent,a({type:f,payload:s.data.results}),a({type:y}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),a({type:y}),a({type:x});case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a){var c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:w}),c="".concat(A,"?gender=male&page=1&results=3&exc=login"),e&&(c="".concat(A,"?gender=male&page=").concat(e,"&results=3&exc=login")),a({type:g,payload:c}),a({type:v}),t.next=8,h.a.get(c);case 8:s=t.sent,a({type:f,payload:s.data.results}),a({type:y}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),a({type:y}),a({type:x});case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},k=Object(b.b)((function(e){return{api_url:e.users.api_url,display:e.users.display,header_title:e.users.header_title}}))((function(e){var t=Object(s.useState)(1),a=Object(l.a)(t,2),r=a[0],n=a[1],i=e.api_url,o=e.display,b=e.dispatch,p=e.header_title,f=function(e){if("next"===e){n(r+1),r>10&&n(1);var t=p.toLowerCase();t.includes("male")?b(T(r)):t.includes("female")?b(S(r)):b(C(r))}else{n(r-1),r<1&&n(10);var a=p.toLowerCase();a.includes("male")?b(T(r)):a.includes("female")?b(S(r)):b(C(r))}},x=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h()({url:"".concat(i,"&format=csv&dl"),method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download","file.csv"),document.body.appendChild(a),a.click(),O.b.success("Downloaded Successfully")})).catch((function(e){return O.b.error("Something Went Wrong, Try Again")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O.a,{}),Object(c.jsxs)("div",{style:o?{display:"none"}:null,className:"footer",children:[Object(c.jsxs)("button",{className:"download",onClick:function(){return x()},children:[Object(c.jsx)("i",{className:"fa fa-cloud-download","aria-hidden":"true"}),"\xa0\xa0Download results"]}),Object(c.jsxs)("div",{className:"pagination",children:[Object(c.jsx)(j.b,{onClick:function(){return f("prev")},to:"#",children:Object(c.jsx)("i",{className:"fa fa-arrow-left","aria-hidden":"true"})}),Object(c.jsx)(j.b,{to:"#",onClick:function(){return f("next")},children:Object(c.jsx)("i",{className:"fa fa-arrow-right","aria-hidden":"true"})})]})]})]})})),U=function(e){var t=Object(b.c)();return Object(c.jsx)("div",{className:"user-card",children:Object(c.jsxs)("div",{className:"user-wrap",children:[Object(c.jsx)("div",{className:"user-img",children:Object(c.jsx)("img",{src:e.details.picture.medium,alt:""})}),Object(c.jsxs)("div",{className:"user-details",children:[Object(c.jsx)("h3",{children:"".concat(e.details.name.first," ").concat(e.details.name.last)}),Object(c.jsx)("p",{children:"".concat(e.details.location.street.number," ").concat(e.details.location.street.name," ").concat(e.details.location.city," ").concat(e.details.location.state)}),Object(c.jsxs)("div",{className:"email",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),"\xa0 ",e.details.email," \xa0",Object(c.jsx)("i",{className:"fa fa-phone","aria-hidden":"true"}),"\xa0 ",e.details.phone]}),Object(c.jsx)(j.b,{onClick:function(){return t({type:E,payload:e.details})},to:"#",children:Object(c.jsx)("i",{className:"fa fa-arrow-right","aria-hidden":"true"})})]})]})]})})},D={transition:"opacity 1s ease-in",opacity:0,height:0,overflow:"hidden"},F=Object(b.b)((function(e){return{display:e.users.display,user_profile:e.users.user_profile}}))((function(e){var t=Object(b.c)(),a=e.display,s=e.user_profile;return Object(c.jsxs)("div",{style:a?{opacity:1,height:"400px"}:D,className:"view-user",children:[Object(c.jsxs)(j.b,{onClick:function(){return t({type:L})},to:"#",children:[Object(c.jsx)("i",{className:"fa fa-arrow-left","aria-hidden":"true"}),"\xa0\xa0RESULTS"]}),Object(c.jsxs)("div",{className:"view-user-container",children:[Object(c.jsx)("div",{className:"view-user-img",children:Object(c.jsx)("img",{src:s.picture?s.picture.large:"",alt:""})}),Object(c.jsxs)("div",{className:"view-user-info",children:[Object(c.jsx)("h1",{children:s.name?"".concat(s.name.first," ").concat(s.name.title," ").concat(s.name.last):""}),"\xa0\xa0",Object(c.jsx)("span",{children:"25"}),Object(c.jsx)("p",{children:s.location?"".concat(s.location.street.number," ").concat(s.location.street.name," ").concat(s.location.city," ").concat(s.location.state):""}),Object(c.jsxs)("p",{className:"address",children:[Object(c.jsx)("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),"\xa0",s.email?s.email:""]}),Object(c.jsxs)("p",{className:"address test",children:["Joined: ",s.registered?new Date(s.registered.date).toDateString():""]}),Object(c.jsxs)("p",{className:"tel",children:[Object(c.jsx)("i",{className:"fa fa-volume-control-phone","aria-hidden":"true"}),"\xa0 ",s.phone?s.phone:""]}),Object(c.jsxs)("p",{className:"tel",children:[Object(c.jsx)("i",{className:"fa fa-mobile","aria-hidden":"true"}),"\xa0 ",s.cell?s.cell:""]})]})]})]})})),I=(a(66),function(){return Object(c.jsx)("div",{className:"loader-container",children:Object(c.jsx)("div",{className:"lds-dual-ring"})})}),R=(a(67),function(e){var t=e.eventHandler;return Object(c.jsx)("div",{className:"error-404",children:Object(c.jsx)("button",{onClick:t,className:"button-404",children:"Oops, Something went wrong Click to try again."})})}),H=Object(b.b)(null,(function(e){return{getAllUsersFemale:function(){return e(S())},getAllUsersMale:function(){return e(T())},getAllUsers:function(){return e(C())}}}))((function(e){var t=e.getAllUsersFemale,a=e.getAllUsersMale,s=e.getAllUsers,r=e.search,n=e.searchField;return Object(c.jsx)("div",{className:"box1",children:Object(c.jsxs)("div",{className:"center-box",children:[Object(c.jsxs)("div",{className:"text-header",children:[Object(c.jsx)("h1",{children:"Hello,"}),Object(c.jsx)("h3",{children:"\xa0Emerald"}),Object(c.jsx)("p",{children:"Welcome to your dashboard, kindly sort through the user base"})]}),Object(c.jsx)("div",{className:"search-bar-box",children:Object(c.jsx)("input",{name:"search",onChange:function(e){return r(e)},value:n,className:"search-bar",type:"text",placeholder:"\xa0\xa0\xa0\ud83d\udd0d Find a user"})}),Object(c.jsxs)("div",{className:"action-box",children:[Object(c.jsx)("p",{children:"Show Users"}),Object(c.jsxs)("div",{className:"action-wrapper",children:[Object(c.jsxs)("div",{className:"ac-wrap",children:[Object(c.jsx)("div",{className:"actions a",onClick:function(){return s()},children:Object(c.jsx)("i",{className:"fa fa-users fa-lg","aria-hidden":"true"})}),Object(c.jsx)("p",{children:"All users"})]}),Object(c.jsxs)("div",{className:"ac-wrap",children:[Object(c.jsx)("div",{className:"actions b",onClick:function(){return a()},children:Object(c.jsx)("i",{className:"fa fa-male fa-lg","aria-hidden":"true"})}),Object(c.jsx)("p",{children:"Male users"})]}),Object(c.jsxs)("div",{className:"ac-wrap",children:[Object(c.jsx)("div",{className:"actions c",onClick:function(){return t()},children:Object(c.jsx)("i",{className:"fa fa-female fa-lg","aria-hidden":"true"})}),Object(c.jsx)("p",{children:"Female users"})]})]})]})]})})})),M=Object(b.b)((function(e){return{users:e.users.users,error:e.users.error,loading:e.users.loading,api_url:e.users.api_url,header_title:e.users.header_title,display:e.users.display}}))((function(e){var t=e.dispatch,a=e.users,r=e.error,n=e.loading,i=e.api_url,o=e.header_title,j=e.display,b=Object(s.useState)(""),p=Object(l.a)(b,2),O=p[0],N=p[1],_=Object(s.useState)(""),w=Object(l.a)(_,2),E=w[0],L=w[1];Object(s.useEffect)((function(){t(C())}),[]);return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(H,{search:function(e){L(e.target.value)},searchField:E}),Object(c.jsx)("div",{className:"box2",children:Object(c.jsxs)("div",{className:"box2-container",children:[Object(c.jsx)("h1",{children:o}),Object(c.jsx)("p",{children:"Filter by"}),Object(c.jsxs)("div",{className:"filter-container",children:[Object(c.jsx)("div",{className:"filter-find find-country",children:Object(c.jsx)("input",{type:"text",onChange:function(e){return function(e){N(e.target.value)}(e)},name:"search",value:O,placeholder:"\xa0\xa0\xa0\ud83d\udd0dFind in list",className:"filter"})}),Object(c.jsx)("div",{className:"filter-find",children:Object(c.jsxs)("select",{disabled:!0,name:"",className:"country filter",id:"",children:[Object(c.jsx)("option",{disabled:!0,defaultValue:!0,children:"\xa0\xa0\xa0Country"}),Object(c.jsx)("option",{value:"United Kingdom",children:"UK"}),Object(c.jsx)("option",{value:"Australia",children:"Australia"})]})}),Object(c.jsx)("div",{className:"filter-find"})]}),Object(c.jsx)("div",{className:"users-container",children:r?Object(c.jsx)(R,{eventHandler:function(){var e;t((e=i,function(){var t=Object(u.a)(d.a.mark((function t(a){var c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:g,payload:c=e}),a({type:v}),t.next=6,h.a.get(c);case 6:s=t.sent,a({type:f,payload:s.data.results}),a({type:y}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:y}),a({type:x});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}())),t({type:m})}}):n?Object(c.jsx)(I,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{style:j?D:{transition:"opacity 1s ease-out",opacity:1},className:"inner",children:a.filter((function(e){return e?e.name.first.toLowerCase().includes(O.toLowerCase()||E.toLowerCase())||e.name.last.toLowerCase().includes(O.toLowerCase()||E.toLowerCase()):alert("No results")})).map((function(e,t){return Object(c.jsx)(U,{details:e},t)}))}),Object(c.jsx)(F,{})]})}),Object(c.jsx)(k,{})]})})]})})),P=function(){return Object(c.jsx)(M,{})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))},W=a(12),X=a(34),B=a(3),J={users:[],api_url:"",error:!1,header_title:"All Users",loading:!1,display:!1,user_profile:{}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(B.a)(Object(B.a)({},e),{},{users:t.payload});case g:return Object(B.a)(Object(B.a)({},e),{},{api_url:t.payload});case v:return Object(B.a)(Object(B.a)({},e),{},{loading:!0});case y:return Object(B.a)(Object(B.a)({},e),{},{loading:!1});case x:return Object(B.a)(Object(B.a)({},e),{},{error:!0});case m:return Object(B.a)(Object(B.a)({},e),{},{error:!1});case _:return Object(B.a)(Object(B.a)({},e),{},{header_title:"Female Users"});case w:return Object(B.a)(Object(B.a)({},e),{},{header_title:"Male Users"});case N:return Object(B.a)(Object(B.a)({},e),{},{header_title:"All Users"});case E:return Object(B.a)(Object(B.a)({},e),{},{display:!0,user_profile:t.payload});case L:return Object(B.a)(Object(B.a)({},e),{},{display:!1,user_profile:{}});default:return e}},K=Object(W.c)({users:V}),Y=[X.a],q=Object(W.e)(K,Object(W.d)(W.a.apply(void 0,Y),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b.a,{store:q,children:Object(c.jsx)(j.a,{children:Object(c.jsx)(P,{})})})}),document.getElementById("root")),G()}},[[68,1,2]]]);
//# sourceMappingURL=main.322e9442.chunk.js.map