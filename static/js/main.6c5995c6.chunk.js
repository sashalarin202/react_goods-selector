(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(2),r=n.n(l),s=n(3),o=n(4),u=n(6),i=n(5),m=(n(12),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={select:""},e.handleClick=function(t){e.setState({select:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected good:"," ",this.state.select),this.state.select.lengt&&c.a.createElement("button",{type:"button",onClick:function(){return e.setState({select:"none"})}},"clear"),c.a.createElement("ul",{className:"list-group"},m.map((function(t){return c.a.createElement("ul",null,c.a.createElement("li",{className:e.state.select===t&&"list-group-item",key:t},t),c.a.createElement("button",{type:"button",onClick:function(){return e.handleClick(t)}},"select"))}))))}}]),n}(c.a.Component);r.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.6c5995c6.chunk.js.map