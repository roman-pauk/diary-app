(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"f",function(){return c}),n.d(t,"c",function(){return r}),n.d(t,"g",function(){return m}),n.d(t,"d",function(){return o}),n.d(t,"h",function(){return i}),n.d(t,"a",function(){return l}),n.d(t,"e",function(){return s});var a="ADD_ITEM",c=function(e){return{type:a,payload:e}},r="DELETE_ITEM",m=function(e){return{type:r,payload:e}},o="SELECT_ITEM",i=function(e){return{type:o,payload:e}},l="ADD_COMMENT",s=function(e,t){return{type:l,payload:{item_ind:e,comment:{comment:t}}}}},22:function(e,t,n){e.exports=n(49)},23:function(e,t,n){e.exports=n(48)},28:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),m=n.n(r),o=n(3),i=n(4),l=n(6),s=n(5),u=n(7),d=(n(28),function(){return c.a.createElement("div",{className:"appBar"},c.a.createElement("h1",null,"Diary app"),c.a.createElement("p",null,"Comment with no sense"))}),f=n(11),p=n(1),v=n(20),h=n.n(v),y=n(2),b=(n(36),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={name:""},n.onTypeName=function(e){var t=e.target;n.setState(Object(f.a)({},t.name,t.value))},n.handleKeyDown=function(e){13===e.keyCode&&e.ctrlKey&&n.onAddItem()},n.onAddItem=function(){var e=n.state.name;e&&(n.setState({name:""}),n.props.addItem({id:h()(),name:e,comments:[]}))},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"d-flex addItemsForm"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Type name here...",value:this.state.name,onChange:this.onTypeName,onKeyDown:this.handleKeyDown})),c.a.createElement("div",null,c.a.createElement("button",{onClick:this.onAddItem,type:"button",className:"btn btn-info"},"Add new")))}}]),t}(a.Component)),E=Object(p.b)(null,{addItem:y.f})(b),I=n(21),g=n.n(I);var O=function(e){var t=e.name,n=e.comments_count,a=e.isActive,r=e.onDelete,m=e.onSelectItem;return c.a.createElement("li",{className:g()("itemsList__item",{active:a})},c.a.createElement("div",{onClick:m,className:"itemsList__name"},c.a.createElement("span",{className:"name"},t),c.a.createElement("span",{className:"badge badge-info"},n)),c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:r,className:"btn btn-outline-danger"},"Delete")))},N=(n(38),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).onSelectItem=function(e){e!==n.props.activeItemIndex&&n.props.selectItem(e)},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.items,a=t.activeItemIndex,r=t.delItem;return c.a.createElement("ul",{className:"itemsList"},n.map(function(t,n){return c.a.createElement(O,{key:t.id,name:t.name,isActive:n===a,onSelectItem:function(){return e.onSelectItem(n)},onDelete:function(){return r(t.id)},comments_count:t.comments.length})}))}}]),t}(a.Component)),_=Object(p.b)(function(e){return{activeItemIndex:e.items.activeItemIndex,items:e.items.items}},{delItem:y.g,selectItem:y.h})(N);var j=function(){return c.a.createElement("div",{className:"ItemsWrap"},c.a.createElement("div",{className:"Card Card--items"},c.a.createElement("div",{className:"Card__title"},"Items"),c.a.createElement(E,null),c.a.createElement(_,null)))},C=(n(40),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={comment:""},n.onTypeComment=function(e){var t=e.target;n.setState({comment:t.value})},n.handleKeyDown=function(e){13===e.keyCode&&e.ctrlKey&&n.onAddComment()},n.onAddComment=function(){var e=n.state.comment;e&&null!==n.props.active_index&&(n.setState({comment:""}),n.props.addComment(n.props.active_index,e))},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return null===this.props.active_index?null:c.a.createElement("div",{className:"commentsForm"},c.a.createElement("div",{className:"commentsForm__avatar"}),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{value:this.state.comment,onChange:this.onTypeComment,onKeyDown:this.handleKeyDown,className:"form-control",rows:"3"})))}}]),t}(a.Component)),w=Object(p.b)(function(e){return{active_index:e.items.activeItemIndex}},{addComment:y.e})(C);n(42);var x=Object(p.b)(function(e){var t=e.items.activeItemIndex,n=null===t?null:e.items.items[t];return{comments:n?n.comments:[]}})(function(e){var t=e.comments;return c.a.createElement("ul",{className:"commentsList"},t.map(function(e,t){return c.a.createElement("li",{key:"comment-".concat(t),className:"commentsList__item"},c.a.createElement("div",{className:"commentsList__avatar"}),c.a.createElement("p",null,e.comment))}))});var k=Object(p.b)(function(e){return{active_index:e.items.activeItemIndex,items_length:e.items.items.length}})(function(e){var t=e.active_index,n=e.items_length,a=null===t?"":" #".concat(t+1);return c.a.createElement("div",{className:"CommentsWrap"},c.a.createElement("div",{className:"Card Card--comments"},c.a.createElement("div",{className:"Card__title"},"Comments",a),!n&&c.a.createElement("div",{className:"alert alert-info",role:"alert"},"Please, create items to see and add comments!"),c.a.createElement(x,null),c.a.createElement(w,null)))}),D=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"d-flex"},c.a.createElement(d,null),c.a.createElement("div",{className:"d-flex app-wp"},c.a.createElement(j,null),c.a.createElement(k,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(22),A=n.n(S),T=(n(44),n(46),function(){try{var e=localStorage.getItem("diary_app");if(!e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}()),K=A()(T);K.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("diary_app",t)}catch(n){console.log(n)}}({items:K.getState().items})}),m.a.render(c.a.createElement(p.a,{store:K},c.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n(14),r=n(2),m={items:[],activeItemIndex:null},o=Object(a.b)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.b:return{activeItemIndex:e.items.length,items:e.items.concat(t.payload)};case r.c:return{activeItemIndex:e.items.length<2?null:0,items:e.items.filter(function(e){return e.id!==t.payload})};case r.d:return Object(c.a)({},e,{activeItemIndex:t.payload});case r.a:return Object(c.a)({},e,{items:e.items.map(function(e,n){return n===t.payload.item_ind&&(e.comments=e.comments.concat(t.payload.comment)),e})});default:return e}}});function i(e){return Object(a.c)(o,e)}n.d(t,"default",function(){return i})}},[[23,2,1]]]);
//# sourceMappingURL=main.80f5c726.chunk.js.map