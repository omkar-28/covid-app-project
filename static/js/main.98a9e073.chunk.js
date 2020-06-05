(this["webpackJsonpcovid-19-app"]=this["webpackJsonpcovid-19-app"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__1NRPZ",card:"Cards_card__3CmBT",infected:"Cards_infected__YJEpg",recovered:"Cards_recovered__1huqG",deaths:"Cards_deaths__1Zj_F"}},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),l=a(10),i=a(73),d=a(74),m=a(82),p=a(81),f=a(222),v=a(227),h=a(223),b=a(224),y=a(32),E=a.n(y),g=a(33),x=a.n(g),C=a(13),_=a.n(C),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:a.value,duration:3,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"NUmber of active cases of Covid-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:c.value,duration:3,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"NUmber of Recoveries from Covid-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:n.value,duration:3,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"NUmber of death caused by Covid-19"))))):"Loading..."},j=a(31),O=a(34),k=a.n(O),D="https://covid19.mathdro.id/api",S=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&"global"!==t&&(a="".concat(a,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,reportDate:n}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(45),I=a(80),P=a.n(I),R=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)([]),d=Object(j.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m[0]?r.a.createElement(B.b,{data:{labels:m.map((function(e){return e.reportDate})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(B.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:P.a.container},u?v:f)},J=a(46),G=a.n(J),X=a(226),Z=a(225),q=function(e){var t=e.handleChangeCountry,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,U();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement("div",{className:G.a.container},r.a.createElement("h2",null,"Country Picker"),r.a.createElement(X.a,{className:G.a.formControl},r.a.createElement(Z.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"global"},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))},A=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleChangeCountry=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,console.log(n),e.setState({country:a,data:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:"container",style:{overflow:"hidden"}},r.a.createElement(q,{handleChangeCountry:this.handleChangeCountry}),r.a.createElement(w,{data:t}),r.a.createElement(R,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(A,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"CountryPicker_container__3yXyf"}},80:function(e,t,a){e.exports={container:"Charts_container__s3Xj8"}},85:function(e,t,a){e.exports=a(205)}},[[85,1,2]]]);
//# sourceMappingURL=main.98a9e073.chunk.js.map