(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),s=n.n(r),o=(n(9),n(10),n(11),n(1));var l=function(e){var t=e.item;return c.a.createElement("div",{className:"p-2 col-lg-3 col-6"},c.a.createElement("div",{className:"card",onClick:function(){e.setOpenDark(!0),e.setImdbID(t.imdbID)}},c.a.createElement("div",{className:"pic",style:{backgroundImage:"url(".concat(t.Poster,")")}}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},t.Title),c.a.createElement("div",{className:"card-text"},t.Year))))};var i=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),r=n[0],s=n[1],i="http://www.omdbapi.com/?s="+e.userInput+"&apikey=5a292f28";return Object(a.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){console.log(e),s(e)})).catch((function(e){alert("testing: "+e),console.log(e)}))}),[e.userInput]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mt-3"},"True"===r.Response?r.Search.map((function(t){return c.a.createElement(l,{key:t.imdbID,item:t,setImdbID:e.setImdbID,setOpenDark:e.setOpenDark})})):""!==e.userInput?r.Error:""))};var u=function(e){var t=Object(a.useRef)();return c.a.createElement("div",{className:"container d-flex justify-content-center align-items-center searchBox",id:"id_search"},c.a.createElement("input",{ref:t,onInput:function(){""===t.current.value?document.getElementById("id_search").className="container d-flex justify-content-center align-items-center searchBox":(document.getElementById("id_search").className="container pt-5",document.getElementById("id_input").className="form-control w-75 searchBox_input"),e.setUserInput(t.current.value)},type:"text",placeholder:"search ...",className:"form-control w-75 searchBox_input",id:"id_input"}))};var m=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),r=n[0],s=n[1],l=Object(a.useState)(!0),i=Object(o.a)(l,2),u=i[0],m=i[1],d=Object(a.useState)("more"),p=Object(o.a)(d,2),f=p[0],b=p[1];return Object(a.useEffect)((function(){var t="http://www.omdbapi.com/?i="+e.imdbID+"&apikey=5a292f28";fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e),s(e),m(e.Plot.substring(0,50))}))}),[e.imdbID]),Object(a.useEffect)((function(){b(u?"more":"less")}),[u]),c.a.createElement("div",{id:"id_dark",className:"dark container-fluid center"},c.a.createElement("div",{className:"dark_inside text-center"},c.a.createElement("div",{onClick:function(){e.setOpenDark(!1)}},r?c.a.createElement("div",null,c.a.createElement("img",{src:r.Poster}),c.a.createElement("h2",null,r.Title),c.a.createElement("h2",null,r.Year),c.a.createElement("p",null,u?c.a.createElement("p",null,r.Plot.substring(0,50)):c.a.createElement("p",null,r.Plot))):""),c.a.createElement("button",{className:" btn btn-primary",onClick:function(){m(!u)}},f)))};var d=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],s=n[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),p=d[0],f=d[1],b=Object(a.useState)(!1),E=Object(o.a)(b,2),v=E[0],h=E[1];return c.a.createElement("div",null,v&&c.a.createElement(m,{imdbID:p,setOpenDark:h}),c.a.createElement(u,{setUserInput:s}),c.a.createElement(i,{userInput:r,setImdbID:f,setOpenDark:h}))};var p=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.b78e63fc.chunk.js.map