(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=(n(12),n(0)),m=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={today:new Date},t.timerTime=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerTime=window.setInterval((function(){t.setState({today:new Date}),window.console.info(t.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerTime)}},{key:"render",value:function(){var t=this.props.name,e=this.state.today;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(l.Component);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var d=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={clockName:"Clock-0",hasClock:!0},t.timerId=0,t.hidingClock=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.showingClock=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.hidingClock),document.addEventListener("click",this.showingClock)}},{key:"componentDidUpdate",value:function(t,e){this.state.hasClock&&e.clockName!==this.state.clockName&&window.console.debug("Renamed from ".concat(e.clockName," to ").concat(this.state.clockName))}},{key:"commponentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.hidingClock),document.removeEventListener("click",this.showingClock)}},{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),n&&Object(u.jsx)(m,{name:e})]})}}]),n}(l.Component);o.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f0c8517b.chunk.js.map