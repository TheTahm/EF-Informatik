"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[11],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>p});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),p=i,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return r?t.createElement(h,s(s({ref:n},c),{},{components:r})):t.createElement(h,s({ref:n},c))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7686:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var t=r(7462),i=(r(7294),r(3905));const a={},s=void 0,o={permalink:"/EF-Informatik/APIs",editUrl:"https://github.com/TheTahm/EF-Informatik/tree/main/blog/APIs.md",source:"@site/blog/APIs.md",title:"APIs",description:"Eine API (Application Programming Interface) ist eine Reihe von Protokollen und Tools zum Erstellen von Softwareanwendungen. Es erm\xf6glicht die Kommunikation und den Datenaustausch zwischen verschiedenen Servern, sodass diese problemlose zusammenarbeiten k\xf6nnen. Es ein Protokoll (HTTP), welches daf\xfcr verantworltlich ist, dass zwei Server, genau wissen wie sie miteinander zu reden haben, da es sonst immer Fehler g\xe4be.",date:"2023-03-13T21:38:59.000Z",formattedDate:"13. M\xe4rz 2023",tags:[],readingTime:1.9,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Datenstruktur",permalink:"/EF-Informatik/Datenstruktur"}},l={authorsImageUrls:[]},u=[],c={toc:u};function d(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Eine API (Application Programming Interface) ist eine Reihe von Protokollen und Tools zum Erstellen von Softwareanwendungen. Es erm\xf6glicht die Kommunikation und den Datenaustausch zwischen verschiedenen Servern, sodass diese problemlose zusammenarbeiten k\xf6nnen. Es ein Protokoll (HTTP), welches daf\xfcr verantworltlich ist, dass zwei Server, genau wissen wie sie miteinander zu reden haben, da es sonst immer Fehler g\xe4be."),(0,i.kt)("p",null,"APIs definieren normalerweise eine Reihe von Regeln daf\xfcr, wie zwei Softwarekomponenten miteinander interagieren sollen. Mit den Anfragen Get,Post,Put und Delete ist dies m\xf6glich.\nGet- Fragt Information von einem Server ab.\nPost- Fragt an etwas auf einem Server hoch.\nPut- Fragt etwas vorhandenes auf dem server zu ver\xe4ndern/ zu updaten.\nDelete- Fragt den Server etwas zu l\xf6schen."),(0,i.kt)("p",null,"APIs k\xf6nnen f\xfcr eine Vielzahl von Zwecken verwendet werden, z. B. f\xfcr den Zugriff auf Daten von einem Remote-Server, f\xfcr welche wir sie auch in unserem Node-RED benutzt haben. Wir haben hierf\xfcr eine eigene API erstellt, die auf unseren Server zugreift, welcher es erm\xf6glicht automatisch Worte in Emojis um zu wandeln."),(0,i.kt)("p",null,"Um unsere API zu erstellen mussten wir zuerst unseren Server erstellen, welcher dann anschliessen dank unserer API von der Get Methode von einem anderen Server angefragt werden konnte.\nDies sah dann so aus:\n",(0,i.kt)("img",{src:r(137).Z,width:"1087",height:"213"})),(0,i.kt)("p",null,"Von einem anderen Server (in unserem Falle Postman) konnte anschliessend eine text Anfrage geschickt werden."),(0,i.kt)("p",null,"In unserer Funktion stand dann drin, was genau auf diesem Server passieren soll. Dies haben wir dann mit JavaScript programmiert."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JavaScript"},"let emoji = msg.payload.text;\n\nemoji = emoji.replace(/hello/g, '\ud83d\udc4b');\nemoji = emoji.replace(/world/g, '\ud83c\udf0d');\nemoji = emoji.replace(/!/g, '\u2757\ufe0f');\nemoji = emoji.replace(/darling/g, '\ud83d\udc69');\n\nmsg.payload = {\n    msg: emoji\n};\n\nreturn msg;\n")),(0,i.kt)("p",null,"Der HTTP response Node ist dann schlussendlich daf\xfcr verantwortlich unsere Ver\xe4nderungen die wir durchgef\xfchrt haben wieder an den anfragenden Server zur\xfcck zu schiken."),(0,i.kt)("p",null,"Der erste Debugger ist verntworlich daf\xfcr, dass wenn eine Anfrage mit einer Method geschikt wird die nicht Get ist nicht der ganze Server abst\xfcrtzt sondern einfach eine Fehlermeldung rauskommt. Der zweite ist dann noch dort falls bei unserer Funktion etwas schief gehen sollte. "),(0,i.kt)("p",null,"Auf Node-RED eine eigene API erstellen war sehr spannend, auch ein Mal hinter die Kulissen eines Servers zu sehen,haben mir viele neue interessannte Kenntnisse gebracht. Ausserdem finde ich all diese Witzebots sehr witzig. Diese steigern mein interesse bei diesem Thema auch, obwohl es manchmal ein bisschen kompliziert ist alles direkt zu verstehen."))}d.isMDXComponent=!0},137:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/node-red-5f7c1a4472383f130a5582dd14b63739.png"}}]);