"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[48],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={},i=void 0,o={permalink:"/EF-Informatik/IP-Adressen",editUrl:"https://github.com/TheTahm/EF-Informatik/tree/main/blog/IP-Adressen.md",source:"@site/blog/IP-Adressen.md",title:"IP-Adressen",description:"IP Adressen",date:"2023-04-17T22:05:37.000Z",formattedDate:"17. April 2023",tags:[],readingTime:.685,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Datenstruktur",permalink:"/EF-Informatik/Datenstruktur"},nextItem:{title:"Netzwerkzugangsschicht",permalink:"/EF-Informatik/Netzwerkzugangsschicht"}},l={authorsImageUrls:[]},c=[],u={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IP Adressen"),"\n4 Zahlen aus aus jeweils 1 Byte also 32 Bit, Zahlen werden durch Punkte getrennt.\nWert zwischen 0-255"),(0,a.kt)("p",null,"Zwei Teile der IP-Adresse:\nNetzwerkteil: Vorderer Teil der IP-Adresse ist bei allen Ger\xe4ten im gleichen Netzwerk gleich.\nHostteil: Hinterer teil der IP-Adresse m\xfcssen bei jedem Host im selben Netz anders sein."),(0,a.kt)("p",null,"Um zu erkennen, wo der Netzwerkteil aufh\xf6rt und der Hostteil anf\xe4ngt, braucht man eine Netzmaske. Diese und die IP-Adresse muss man dann in Bin\xe4r umrechnen und vergleichen. Wo es bei "),(0,a.kt)("p",null,"Netzwerkteil bis zu welchem Netzwerk es gehen muss und Hossteil erst dann zu welchem host in diesem Netzwerk es hin muss.\nErg\xe4nzt man den Netzwerkteil mit lauter 0 zu einer vollen 32 Bit langen IP-Adresse, so erh\xe4lt man die Netzwerkadresse."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"IP-Adresse:           13.162.25.4\nNetzmaske:            255.255.254.0\nNetzmaske bin\xe4r:      1111'1111.1111'1111.1111'1110.0000'0000\nAnzahl 1:             23\nIP-Adress mit Suffix: 13.162.25.4/23\n")))}m.isMDXComponent=!0}}]);