(this.webpackJsonpcard_flipping_game=this.webpackJsonpcard_flipping_game||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),a=t(5),i=t.n(a),u=t(6),o=t(3),l=(t(12),function(e){return c.a.createElement("div",{onClick:e.visible&&e.opened?function(){return e.onCardClick(e.id)}:null,className:"card ".concat(e.visible?e.opened?"opened":"unopened":"invisible")})}),f=(t(13),function(){var e=Object(r.useState)((function(){for(var e=[],n=0,t=0;t<12;t++){var r=Math.random()<.5;e.push(r),r&&n++}return n%2===0&&(e[11]=!e[11]),e})),n=Object(o.a)(e,2),t=n[0],a=n[1],i=Object(r.useRef)(t),f=Object(r.useState)([]),s=Object(o.a)(f,2),d=s[0],m=s[1],p=function(e){e>0&&e<11?a((function(n){return n.map((function(n,t){return t===e-1||t===e+1?!n:n}))})):0===e?a((function(n){return n.map((function(n,t){return t===e+1?!n:n}))})):11===e&&a((function(n){return n.map((function(n,t){return t===e-1?!n:n}))})),m((function(n){return[].concat(Object(u.a)(n),[e])}))};return 12===d.length?c.a.createElement("div",null,"Done, refresh"):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},t.map((function(e,n){return c.a.createElement(l,{onCardClick:p,key:n,id:n,opened:e,visible:!d.includes(n)})}))),c.a.createElement("button",{onClick:function(){a(i.current),m([])}},"Restart"))});i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.6294541c.chunk.js.map