(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(2),i=a(13),s=a.n(i),r=(a(20),a(4)),d=a(14),j=a.n(d);function o(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.date.getDay()],a=e.date.getHours(),n=e.date.getMinutes();return n<10&&(n="0".concat(n)),a<10&&(a="0".concat(a)),Object(c.jsxs)("div",{children:["Last Update: ",t," ",a,":",n]})}function h(e){return Object(c.jsxs)("div",{className:"WeatherData",children:[Object(c.jsxs)("h1",{children:[" ",e.info.city," "]}),Object(c.jsxs)("h2",{children:[" ",Object(c.jsx)(o,{date:e.info.update})," "]}),Object(c.jsx)("h3",{children:e.info.description}),Object(c.jsxs)("div",{className:"degree",children:[Object(c.jsx)("img",{src:e.info.iconUrl,alt:e.info.description,className:"iconImg"}),Object(c.jsx)("span",{className:"temp",children:Math.round(e.info.temperature)}),Object(c.jsxs)("span",{className:"unit",children:[Object(c.jsx)("a",{href:"/",className:"active",children:"\xb0C"})," | ",Object(c.jsx)("a",{href:"/",children:"\xb0F"})]})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Humidity: ",e.info.humidity," %"]}),Object(c.jsxs)("li",{children:["Wind: ",e.info.wind," km/h"]})]})]})}a(39);function l(e){var t=Object(n.useState)({finish:!1}),a=Object(r.a)(t,2),i=a[0],s=a[1],d=Object(n.useState)(e.defaultCity),o=Object(r.a)(d,2),l=o[0],u=o[1];function b(e){s({finish:!0,temperature:e.data.main.temp,humidity:e.data.main.humidity,city:e.data.name,iconUrl:"http://openweathermap.org/img/wn/03n@2x.png",wind:e.data.wind.speed,update:new Date(1e3*e.data.dt),description:e.data.weather[0].description})}function m(){var e="http://api.openweathermap.org/data/2.5/weather?q=".concat(l,"&appid=").concat("19f46cb6a372e938ec33a12b4f819dec","&units=metric");j.a.get(e).then(b)}return i.finish?Object(c.jsx)("div",{className:"Container",children:Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m()},children:[Object(c.jsx)("input",{type:"search",placeholder:"Enter a city... ",className:"city",onChange:function(e){u(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Search",className:"submitButton",autocomplete:"off"}),Object(c.jsx)("input",{type:"submit",value:"Current",className:"current"})]}),Object(c.jsx)(h,{info:i})]})})})}):(m(),"The app is loading....")}function u(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(l,{defaultCity:"Montreal"}),Object(c.jsx)("footer",{children:Object(c.jsxs)("small",{className:"projectLink",children:[Object(c.jsx)("a",{href:"https://github.com/Hanie20/weather-react",target:"_blank",children:"Open-source code "}),"by ",Object(c.jsx)("a",{href:"https://www.instagram.com/johaniedamas/",target:"_blank",children:"  Johanie Damas  "})]})})]})})}var b=document.getElementById("root");s.a.render(Object(c.jsx)(u,{}),b)}},[[40,1,2]]]);
//# sourceMappingURL=main.9a72767f.chunk.js.map