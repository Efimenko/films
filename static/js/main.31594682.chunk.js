(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(45)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=(a(27),a(7)),l=a(8),s=a(9),m=a.n(s),u=a(2),v=a(6),f=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)(function(){var t;return e&&fetch(e).then(function(e){if(200!==e.status)throw new Error({code:e.status,text:e.statusText});return e.json()}).then(function(e){t||c(e)}).catch(function(e){c(Object(v.a)({error:!0},e))}),function(){t=!0}},[e]),r},p=a(10),g=function(e){return e?e.slice(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var a=Object(u.a)(t,2),n=a[0],r=a[1];return Object(v.a)({},e,Object(p.a)({},n,r))},{}):{}},d=function(e){return e?Object.keys(e).reduce(function(t,a,n){return t+=0===n?"?".concat(a,"=").concat(e[a]):"&".concat(a,"=").concat(e[a])},""):""},h=function(e,t){Object(n.useEffect)(function(){var a=function(e,t){var a=null;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];a&&clearTimeout(a),a=setTimeout(function(){t.apply(void 0,r),a=null},e)}}(0,t),n=function(t){e.current.contains(t.target)&&a(!0)},r=function(t){e.current.contains(t.target)&&a(!1)};return document.addEventListener("focusin",n),document.addEventListener("focusout",r),function(){document.removeEventListener("focusin",n),document.removeEventListener("focusout",r)}},[e,t])},E="https://api.themoviedb.org/3",_="0941767c7620287c671c840b1c091fd2",b="https://image.tmdb.org/t/p/w500",N=(a(28),function(e){var t=e.posterPath,a=e.title,c=e.small,o=Object(n.useState)(!1),i=Object(u.a)(o,2),l=i[0],s=i[1];return r.a.createElement(r.a.Fragment,null,!l&&r.a.createElement("img",{"data-testid":"poster-image",src:"".concat(c?"https://image.tmdb.org/t/p/w200":b,"/").concat(t),className:"image",alt:"Poster for ".concat(a),onError:function(){return s(!0)}}),l&&r.a.createElement("div",{className:"image-placeholder","data-testid":"poster-placeholder"},r.a.createElement("svg",{className:"image-placeholder__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58 58"},r.a.createElement("path",{d:"M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 44H2V8h54v42z"}),r.a.createElement("path",{d:"M16 28.14a5.57 5.57 0 1 0-.01-11.15A5.57 5.57 0 0 0 16 28.14zM16 19a3.57 3.57 0 1 1 0 7.15A3.57 3.57 0 0 1 16 19zM7 46a1 1 0 0 0 .66-.25L23.97 31.4l10.3 10.3a1 1 0 1 0 1.42-1.41l-4.8-4.81 9.17-10.06 11.26 10.33a1 1 0 0 0 1.35-1.48l-12-11a1 1 0 0 0-1.41.06l-9.8 10.73-4.74-4.74a1 1 0 0 0-1.36-.04L6.34 44.25A1 1 0 0 0 7 46z"}))))}),O=(a(29),function(e){var t=e.history,a=Object(n.useState)(""),c=Object(u.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),v=m[0],p=m[1],g=Object(n.useRef)(null),d=o?"".concat(E,"/search/movie?api_key=").concat(_,"&page=1&query=").concat(o):"",b=f(d).results,O=o&&b&&Boolean(b.length);return h(g,p),r.a.createElement("div",{className:"search-wrapper",ref:g},r.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),t.push("/search/?query=".concat(o,"&page=1")),l("")},"data-testid":"search-form"},r.a.createElement("input",{"data-testid":"search-input",className:"search-form__input",placeholder:"Type something...",value:o,onChange:function(e){l(e.target.value)},required:!0}),r.a.createElement("button",{className:"search-form__button",type:"submit","data-testid":"submit-button"},"Search")),O&&v&&r.a.createElement("ul",{className:"live-results","data-testid":"live-results"},b.slice(0,5).map(function(e){var t=e.id,a=e.title,n=e.poster_path,c=e.release_date,o=e.vote_average;return r.a.createElement("li",{className:"live-results__item",key:t},r.a.createElement("div",{className:"live-results__image"},r.a.createElement(N,{title:a,posterPath:n,small:!0})),r.a.createElement("div",{className:"live-results__meta"},r.a.createElement(i.b,{to:"/film/".concat(t),className:"live-results__link",onClick:function(){return l("")}},a),"\xa0",c&&r.a.createElement("span",{className:"live-results__year"},"(",c.slice(0,4),")"),r.a.createElement("br",null),r.a.createElement("div",{className:"rating live-results__rating"},o)))})),v&&b&&!b.length&&r.a.createElement("div",{className:"live-results live-results--empty"},"Nothing was found"))}),y=(a(38),{popular:{path:"/",title:"Popular"},favorites:{path:"/favorites",title:"Favorites"}}),F=Object(l.d)(function(e){var t=e.history,a=t.location.pathname;return r.a.createElement("header",{className:"header"},r.a.createElement(O,{history:t}),r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav-list"},Object.keys(y).map(function(e){return r.a.createElement("li",{key:e,className:m()("nav-list__item",{"nav-list__item--current":a===y[e].path})},r.a.createElement(i.b,{to:y[e].path,className:"nav-list__link"},y[e].title))}))))}),w=(a(39),a(21)),j=(a(40),function(e){var t=e.addToFavorite,a=e.removeFromFavorite,n=e.isFavorite,c=e.id,o=e.film;return r.a.createElement("button",{type:"button",className:"favorite-button film-item__favorite",onClick:n?a(c):t(Object(p.a)({},c,o)),title:n?"Remove from favorite":"Add to favorite"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 53.9 53.9",className:m()("favorite-icon",{"favorite-icon--active":n})},r.a.createElement("path",{d:"M27 1.3l8.3 16.9 18.6 2.7L40.4 34l3.2 18.5-16.7-8.7-16.6 8.7L13.5 34 0 21l18.6-2.7z"})))}),k=(a(41),function(e){var t=e.title,a=e.id,n=e.posterPath,c=e.rating,o=e.addToFavorite,l=e.removeFromFavorite,s=e.isFavorite;return r.a.createElement("article",{className:"film-item"},r.a.createElement("div",{className:"film-item__image-wrapper"},r.a.createElement(N,{title:t,posterPath:n})),r.a.createElement("div",{className:"film-item__inner"},r.a.createElement("h3",{className:"film-item__title"},r.a.createElement(i.b,{to:"/film/".concat(a),className:"film-item__link"},t)),r.a.createElement("div",{className:"film-item__top"},r.a.createElement(j,{addToFavorite:o,removeFromFavorite:l,isFavorite:s,id:a,film:{title:t,vote_average:c,poster_path:n}}),Boolean(c)&&r.a.createElement("span",{className:"rating"},c))))}),P=function(){var e=JSON.parse(localStorage.getItem("favorites"))||{},t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)(function(){localStorage.setItem("favorites",JSON.stringify(r)),window.dispatchEvent(new Event("storage"))},[r]),{isFavorite:function(e){return Object.keys(r).includes(String(e))},addToFavorite:function(e){return function(){c(Object(v.a)({},r,e))}},removeFromFavorite:function(e){return function(){var t=Object.assign({},r);delete t[e],c(t)}}}},S=(a(42),function(e){var t=e.data,a=P(),n=a.isFavorite,c=a.addToFavorite,o=a.removeFromFavorite;return t&&t.length?r.a.createElement("ul",{className:"films-list"},t.map(function(e){var t=e.title,a=e.id,i=e.poster_path,l=e.vote_average;return r.a.createElement("li",{key:a,className:"films-list__item"},r.a.createElement(k,{title:t,id:a,posterPath:i,rating:l,addToFavorite:c,removeFromFavorite:o,isFavorite:n(a)}))})):null}),T=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("favorites"))||{};c(e)},[]),Object(n.useEffect)(function(){var e=function(e){c(JSON.parse(localStorage.getItem("favorites")))};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}});var o=a?Object.keys(a).reduce(function(e,t){var n=a[t],r=n.poster_path,c=n.title,o=n.vote_average;return[].concat(Object(w.a)(e),[{id:t,poster_path:r,title:c,vote_average:o}])},[]):[];return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"page-content"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"page-title"},"Favorite films")),0===Object.keys(a).length?"List of favorites films is empty":r.a.createElement(S,{data:o}))):null},x=(a(43),function(e){var t=e.currentPage,a=e.totalPages,n=e.maxPages,c=e.onChangePage,o=function(e){var t,a,n=e.currentPage,r=e.totalPages,c=e.maxPages,o=void 0===c?7:c,i=Math.floor(o/2),l=Math.ceil(o/2)-1;return r<o?(t=1,a=r):n-i>1&&n+l<r?(t=n-i,a=n+l):n-i<=1?(t=1,a=o):n+l>=r&&(t=r-o+1,a=r),{startPage:t,endPage:a}}({currentPage:t,totalPages:a,maxPages:n}),i=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a}(o.startPage,o.endPage);return i.length&&r.a.createElement("ul",{className:"pagination"},i.map(function(e){return r.a.createElement("li",{key:e,className:m()("pagination__item",{"pagination__item--current":e===t})},r.a.createElement("a",{href:"#page".concat(e),className:"pagination__link",onClick:function(t){t.preventDefault(),c(e)}},e))}))}),L=function(e){var t=e.match.params.genreId,a="".concat(E,"/discover/movie?api_key=").concat(_,"&with_genres=").concat(t),n=f(a).results;return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"page-title"},"Films by genre")),r.a.createElement(S,{data:n})):null},B=function(e){var t=e.location,a=e.history,n=g(t.search),c=Number(n.page)||1,o="".concat(E,"/movie/popular?api_key=").concat(_,"&page=").concat(c),i=f(o,c);return Boolean(Object.keys(i).length)&&r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"page-content"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"page-title"},"Popular films")),r.a.createElement(S,{data:i.results})),i.total_pages&&r.a.createElement(x,{currentPage:c,totalPages:i.total_pages,onChangePage:function(e){var t=d(Object(v.a)({},n,{page:e}));a.push({search:t})}}))},I=function(e){var t=e.location,a=e.history,n=g(t.search),c=Number(n.page),o=n.query,i="".concat(E,"/search/movie?api_key=").concat(_,"&page=").concat(c,"&query=").concat(o),l=f(i,c,t);return l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"page-content"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"page-title"},"Search results")),r.a.createElement(S,{data:l.results})),l.total_pages&&r.a.createElement(x,{currentPage:c,totalPages:l.total_pages,onChangePage:function(e){var t=d(Object(v.a)({},n,{page:e}));a.push({search:t})}}))},C=function(e){var t=e.match.params.filmId,a="".concat(E,"/movie/").concat(t,"?api_key=").concat(_),n="".concat(E,"/movie/").concat(t,"/similar?api_key=").concat(_),c=f(a),o=f(n,t),l=P(),s=l.isFavorite,m=l.addToFavorite,u=l.removeFromFavorite,v=c.title,p=c.poster_path,g=c.overview,d=c.genres,h=c.vote_average;return Boolean(Object.keys(c).length)&&r.a.createElement("article",null,r.a.createElement("h2",null,v),r.a.createElement("img",{src:"".concat(b,"/").concat(p),alt:"Poster for ".concat(v)}),Boolean(d.length)&&r.a.createElement("ul",null,d.map(function(e){var t=e.id,a=e.name;return r.a.createElement("li",{key:t},r.a.createElement(i.b,{to:"/genre/".concat(t)},a))})),"Rating: ",h,r.a.createElement(j,{addToFavorite:m,removeFromFavorite:u,isFavorite:s(t),id:t,film:{title:v,vote_average:h,poster_path:p}}),r.a.createElement("p",null,g),Boolean(Object.keys(o).length)&&r.a.createElement("section",null,r.a.createElement("h3",null,"Similar"),r.a.createElement(S,{data:o.results})))},M=(a(44),function(){return r.a.createElement(i.a,{basename:"films"},r.a.createElement("div",{className:"App"},r.a.createElement(F,null),r.a.createElement(l.a,{exact:!0,path:"/",component:B}),r.a.createElement(l.a,{path:"/search",component:I}),r.a.createElement(l.a,{path:"/favorites",component:T}),r.a.createElement(l.a,{path:"/film/:filmId",component:C}),r.a.createElement(l.a,{path:"/genre/:genreId",component:L})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.31594682.chunk.js.map