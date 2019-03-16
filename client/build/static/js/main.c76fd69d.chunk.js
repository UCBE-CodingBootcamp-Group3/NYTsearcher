(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(58)},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),s=a(60),o=a(61),i=a(62),m=a(18),u=a(13),d=a(6),h=a(7),p=a(9),b=a(8),f=a(10),E=a(11),v=a.n(E),g={getBooks:function(){return v.a.get("/api/books")},getBook:function(e){return v.a.get("/api/books/"+e)},deleteBook:function(e){return v.a.delete("/api/books/"+e)},saveBook:function(e){return v.a.post("/api/books",e)},queryNYT:function(e){return v.a.get(e)},createUser:function(e){return v.a.post("/api/recommendations/"+e)},getUser:function(e){return v.a.get("/api/recommendations/"+e)},createRecommendation:function(e){return v.a.post("/api/recommendations/",e)},getRecommendation:function(e){return v.a.get("/api/recommendations/",e)}},k=a(14),y=a.n(k),N=function(e){return r.a.createElement("li",{className:"list-group-item"},e.children)},j=function(e){return r.a.createElement("div",{className:"list-group",style:{margin:"30px 0"}},r.a.createElement("a",{href:e.url,className:"bg-dark list-group-item list-group-item-action flex-column align-items-start active",target:"_blank"},r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{className:"mb-1"},e.title),r.a.createElement("small",null,y()(e.date).format("dddd, MMMM Do YYYY, h:mm")))),r.a.createElement(N,{className:"list-group-item"},r.a.createElement("div",{className:" w-75",style:{display:"inline-block"}},r.a.createElement("h5",{className:"mb-1"},e.summary)),r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example",style:{float:"right"}},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("button",{type:"button",className:"btn btn-info"},"Read")),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:e.onClick},e.type))))},O=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={navbarHeight:0},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({navbarHeight:document.querySelector(".navbar").clientHeight})}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:200,clear:"both",marginTop:this.state.navbarHeight},className:"jumbotron"},this.props.children)}}]),t}(r.a.Component),B=function(e){return r.a.createElement("h1",e,e.children)},Y=function(e){return r.a.createElement("h3",e,e.children)},S=function(e){return r.a.createElement("h4",e,e.children)},C=function(e){var t=e.size,a=e.offset,n=e.children,l=t.split(" ").map(function(e){return"col-"+e}).join(" ")+" "+(a?a.split(" ").map(function(e){return"col-".concat(e.split("-")[0],"-offset-").concat(e.split("-")[1])}).join(" "):"");return r.a.createElement("div",{className:l},n)},w=function(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)},x=function(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)},M=function(e){return r.a.createElement("div",Object.assign({className:"panel panel-primary"},e),e.children)},R=function(e){return r.a.createElement("div",Object.assign({className:"panel-heading clearfix"},e),e.children)},F=function(e){return r.a.createElement("div",Object.assign({className:"panel-body"},e),e.children)},_=function(e){return r.a.createElement("input",Object.assign({className:"form-control"},e))},T=function(e){var t="btn ";switch(e.type){case"primary":t+="btn-primary";break;case"success":t+="btn-success";break;case"info":t+="btn-info";break;case"warning":t+="btn-warning";break;case"danger":t+="btn-danger";break;case"link":t+="btn-link";break;case"default":t+="btn-default"}return t+=" "+e.additional,r.a.createElement("button",Object.assign({},e,{className:t}),e.children)},I=function(e){return r.a.createElement("label",Object.assign({htmlFor:e.htmlFor},e),e.children)},z=function(e){return r.a.createElement("div",Object.assign({className:"form-group"},e),e.children)},A=function(e){return r.a.createElement("form",e,e.children)},D=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={topic:"",sYear:"",eYear:"",page:"0",results:[],previousSearch:{},noResults:!1},a.saveBook=function(e){var t={date:e.pub_date,title:e.headline.main,url:e.web_url,summary:e.description};g.saveBook(t).then(function(e){var n=a.state.results.filter(function(e){return e.headline.main!==t.title});a.setState({results:n})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n={topic:t.topic,sYear:t.sYear,eYear:t.eYear};a.getBooks(n)},a.getBooks=function(e){e.topic===a.state.previousSearch.topic&&e.eYear===a.state.previousSearch.eYear&&e.sYear===a.state.previousSearch.sYear||a.setState({results:[]});var t=e.topic,n=e.sYear,r=e.eYear,l="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=you".concat(a.state.page);t.indexOf(" ")>=0&&(t=t.replace(/\s/g,"+")),t&&(l+="&fq=".concat(t)),n&&(l+="&begin_date=".concat(n)),r&&(l+="&end_date=".concat(r)),l+="&api-key=TZBzEuyISaV432LqBahDZC1YwILc41s7",g.queryNYT(l).then(function(t){a.setState({results:[].concat(Object(m.a)(a.state.results),Object(m.a)(t.data.response.docs)),previousSearch:e,topic:"",sYear:"",eYear:""},function(){0===this.state.results.length?this.setState({noResults:!0}):this.setState({noResults:!1})})}).catch(function(e){return console.log(e)})},a.getMoreResults=function(){var e=a.state.previousSearch,t={topic:e.topic,eYear:e.eYear,sYear:e.sYear},n=a.state.page;n++,a.setState({page:n},function(){this.getBooks(t)})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(w,{fluid:!0},r.a.createElement(x,null,r.a.createElement(C,{size:"sm-10",offset:"sm-1"},r.a.createElement(O,null,r.a.createElement(B,{className:"page-header text-center"},"New York Times Best Seller Searcher"),r.a.createElement(S,{className:"text-center"},"Search for and save books of interest")),r.a.createElement(M,null,r.a.createElement(R,null,r.a.createElement(Y,null,"Search")),r.a.createElement(F,null,r.a.createElement(A,{style:{marginBottom:"30px"}},r.a.createElement(z,null,r.a.createElement(I,{htmlFor:"topic"},"Enter a topic to search for:"),r.a.createElement(_,{onChange:this.handleInputChange,name:"topic",value:this.state.topic,placeholder:"Topic"})),r.a.createElement(z,null,r.a.createElement(I,{htmlFor:"sYear"},"Enter a beginning date to search for (optional):"),r.a.createElement(_,{onChange:this.handleInputChange,type:"date",name:"sYear",value:this.state.sYear,placeholder:"Start Year"})),r.a.createElement(z,null,r.a.createElement(I,{htmlFor:"eYear"},"Enter an end date to search for (optional):"),r.a.createElement(_,{onChange:this.handleInputChange,type:"date",name:"eYear",value:this.state.eYear,placeholder:"End Year"})),r.a.createElement(T,{disabled:!this.state.topic,onClick:this.handleFormSubmit,type:"info"},"Submit")))),this.state.noResults?r.a.createElement(B,null,"No results Found.  Please try again"):this.state.results.length>0?r.a.createElement(M,null,r.a.createElement(R,null,r.a.createElement(Y,null,"Results")),r.a.createElement(F,null,this.state.results.map(function(t,a){return r.a.createElement(j,{key:a,title:t.headline.main,url:t.web_url,summary:t.snippet,date:t.pub_date,type:"Save",onClick:function(){return e.saveBook(t)}})}),r.a.createElement(T,{type:"warning",additional:"btn-block",onClick:this.getMoreResults},"Get more results"))):"")))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={savedBooks:[]},a.loadBooks=function(){g.getBooks().then(function(e){a.setState({savedBooks:e.data})})},a.deleteBook=function(e){g.deleteBook(e).then(function(t){var n=a.state.savedBooks.filter(function(t){return t._id!==e});a.setState({savedBooks:n}),a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return r.a.createElement(w,{fluid:!0},r.a.createElement(x,null,r.a.createElement(C,{size:"sm-10",offset:"sm-1"},r.a.createElement(O,null,r.a.createElement(B,{className:"text-center"},"Saved NYT Top Seller Books"),r.a.createElement("hr",{style:{width:"60%"}})),r.a.createElement(M,null,r.a.createElement(R,null,r.a.createElement(Y,null,"Saved Books")),r.a.createElement(F,null,this.state.savedBooks.length>0?this.state.savedBooks.map(function(t,a){return r.a.createElement(j,{key:a,title:t.title,url:t.url,summary:t.summary,date:t.date,type:"Delete",onClick:function(){return e.deleteBook(t._id)}})}):r.a.createElement(B,null,"You have no saved books."))))))}}]),t}(n.Component),q=function(){return r.a.createElement(w,{fluid:!0},r.a.createElement(x,null,r.a.createElement(C,{size:"sm-10",offset:"sm-1"},r.a.createElement(O,null,r.a.createElement(B,{className:"text-center"},"404 OOPS!  You did something wrong"),r.a.createElement(B,{className:"text-center"},r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44",r.a.createElement("br",null)))))))},H=a(59),W=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary",style:{position:"fixed",zIndex:100,width:"100%"}},r.a.createElement(H.a,{className:"navbar-brand",to:"/"},"NYT Best Seller Finder"),r.a.createElement("ul",{className:"navbar-nav",style:{float:"right"}},r.a.createElement("li",{className:"nav-item"},r.a.createElement(H.a,{to:"/recommendation"},r.a.createElement("button",{type:"button",className:"btn btn-info"},"Recommendation"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(H.a,{to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-info"},"Home"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(H.a,{to:"/savedArticles"},r.a.createElement("button",{type:"button",className:"btn btn-info"},"Saved Books")))))},J=a(12),L=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={receiver:"",messageBody:""},a.handleChange=a.handleChange.bind(Object(J.a)(Object(J.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(J.a)(Object(J.a)(a))),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(u.a)({},t,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:"recommendContainer"},this.props.commentsVisible?r.a.createElement("form",{onSubmit:this.handleSubmit,id:"usrform"},"Send To: ",r.a.createElement("textarea",{type:"text",name:"receiver",value:this.state.receiver,onChange:this.handleChange}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null," Make a Comment!")),r.a.createElement("div",null,r.a.createElement("textarea",{name:"messageBody",value:this.state.messageBody,onChange:this.handleChange,lass:"comments",rows:"12",cols:"50",form:"usrform"}))),r.a.createElement("input",{type:"submit"})):null)}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={commentsVisible:!1},a.openCommentField=function(){a.setState({commentsVisible:!a.state.commentsVisible})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"list-group",style:{margin:"30px 0"}},r.a.createElement("a",{href:this.props.url,className:"bg-dark list-group-item list-group-item-action flex-column align-items-start active",target:"_blank"},r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{className:"mb-1"},this.props.title),r.a.createElement("small",null,y()(this.props.date).format("dddd, MMMM Do YYYY, h:mm")))),r.a.createElement(N,{className:"list-group-item"},r.a.createElement("div",{className:" w-75",style:{display:"inline-block"}},r.a.createElement("h5",{className:"mb-1"},this.props.summary)),r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example",style:{float:"right"}},r.a.createElement("a",{href:this.props.url,target:"_blank"},r.a.createElement("button",{type:"button",className:"btn btn-info"},"Read")),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.openCommentField},this.props.type))),r.a.createElement(L,{commentsVisible:this.state.commentsVisible}))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={savedBooks:[]},a.loadBooks=function(){g.getBooks().then(function(e){a.setState({savedBooks:e.data})})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return r.a.createElement(w,{fluid:!0},r.a.createElement(x,null,r.a.createElement(C,{size:"sm-10",offset:"sm-1"},r.a.createElement(O,null,r.a.createElement(B,{className:"text-center"},"Make A Recommendation"),r.a.createElement("hr",{style:{width:"60%"}})),r.a.createElement(M,null,r.a.createElement(R,null,r.a.createElement(Y,null,"Make A Recommendation")),r.a.createElement(F,null,this.state.savedBooks.length>0?this.state.savedBooks.map(function(e,t){return r.a.createElement("div",null,r.a.createElement(P,{key:t,title:e.title,url:e.url,summary:e.summary,date:e.date,type:"Recommend"}))}):r.a.createElement(B,null,"You have no saved books."))))))}}]),t}(n.Component),Z=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(o.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:D}),r.a.createElement(i.a,{exact:!0,path:"/books",component:D}),r.a.createElement(i.a,{exact:!0,path:"/savedBooks",component:V}),r.a.createElement(i.a,{exact:!0,path:"/recommendation",component:U}),r.a.createElement(i.a,{component:q}))))};a(57);c.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c76fd69d.chunk.js.map