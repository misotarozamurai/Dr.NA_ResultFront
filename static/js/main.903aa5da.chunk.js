(this["webpackJsonpDr.NA_ResultFront"]=this["webpackJsonpDr.NA_ResultFront"]||[]).push([[0],{42:function(e,t,a){e.exports=a(71)},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),i=a(12),l=a(37),u=a(38),o=a(16),m=a(41),p={name:""},d=a(20),h={isFetching:!1,data:""},E=Object(o.c)({name:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_NAME":return Object(m.a)({},e,{name:t.name});default:return e}},result:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[h],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RESULT_REQUEST":return[].concat(Object(d.a)(e),[{isFetching:!0,data:[]}]);case"GET_RESULT_SUCCESS":return[].concat(Object(d.a)(e),[{isFetching:!1,data:t.result,receivedAt:t.receivedAt}]);case"GET_RESULT_FAILURE":return[].concat(Object(d.a)(e),[{isFetching:!1,error:t.error}]);default:return e}}}),b=a(39),f=a.n(b),j=Object(u.createLogger)({diff:!0,collapsed:!0}),O=Object(o.d)(E,Object(o.a)(l.a,j));O.dispatch((function(e){e({type:"GET_RESULT_REQUEST"}),f.a.get("https://dr-na.mydns.jp:8889/api").then((function(t){e({type:"GET_RESULT_SUCCESS",result:t.data,receivedAt:Date.now()})})).catch((function(t){e({type:"GET_RESULT_FAILURE",error:t})}))}));var v=O,_=a(9),S=a(10),N=a(13),g=a(11),y=a(14),T=a(23),C=a(15),R="\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u3092\u5165\u529b\u3057\u3066\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002",U="\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u3092\u5165\u529b",k=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(N.a)(this,Object(g.a)(t).call(this,e))).updataInput=function(e){a.setState({input:e,disabled:!e.trim()})},a.handleSendName=function(){a.props.inputSendName(a.state.input.trim()),a.setState({input:""}),a.props.transition()},a.state={input:"",disabled:!0},a}return Object(y.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"nmae_form"},r.a.createElement("label",{htmlFor:"name"},R,r.a.createElement("input",{type:"text",id:"name",placeholder:U,onChange:function(t){return e.updataInput(t.target.value)},value:this.state.name})),r.a.createElement("button",{className:"send_name",onClick:this.handleSendName,disabled:this.state.disabled},"Send name"))}}]),t}(n.Component),A=Object(i.b)(null,{inputSendName:function(e){return{type:"SEND_NAME",name:e}}})(k),F=function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.history.push("/result")},a}return Object(y.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"top_page"},r.a.createElement(A,{transition:this.handleClick}))}}]),t}(n.Component),L=Object(C.f)(F),w=function(e){function t(){return Object(_.a)(this,t),Object(N.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"user_name"},"\u30e6\u30fc\u30b6\u30fc\uff1a",this.props.name),r.a.createElement("p",{className:"user_name"},"\u65e5\u4ed8\uff1a",this.props.data.datatime),r.a.createElement("p",{className:"user_name"},"\u8108\u5e73\u5747\uff1a",this.props.data.pulse.avg),r.a.createElement("p",{className:"user_name"},"\u75c5\u540d\uff1a",this.props.data.sick.name),r.a.createElement("p",{className:"user_name"},"\u8aac\u660e\uff1a",this.props.data.sick.message))}}]),t}(n.Component),D=Object(i.b)((function(e){return e.name}))(w),G=Object(i.b)((function(e){var t=e.result.length;return{data:e.result[t-1].data.jsonObj}}))(D),x=function(e){function t(){return Object(_.a)(this,t),Object(N.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(T.a,null,r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/",exact:!0,component:L}),r.a.createElement(C.a,{path:"/result",exact:!0,component:G}),r.a.createElement(C.a,{exact:!0,component:L}))))}}]),t}(n.Component),I=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"\xa92020 Dr.NA"))},J=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(x,null),r.a.createElement(I,null))},M=(a(70),document.getElementById("root"));s.a.render(r.a.createElement(i.a,{store:v},r.a.createElement(J,null)),M)}},[[42,1,2]]]);
//# sourceMappingURL=main.903aa5da.chunk.js.map