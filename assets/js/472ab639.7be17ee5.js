"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[711],{3905:(A,e,n)=>{n.d(e,{Zo:()=>U,kt:()=>F});var o=n(7294);function g(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function C(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,o)}return n}function t(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){g(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function Q(A,e){if(null==A)return{};var n,o,g=function(A,e){if(null==A)return{};var n,o,g={},C=Object.keys(A);for(o=0;o<C.length;o++)n=C[o],e.indexOf(n)>=0||(g[n]=A[n]);return g}(A,e);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(A);for(o=0;o<C.length;o++)n=C[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(g[n]=A[n])}return g}var r=o.createContext({}),B=function(A){var e=o.useContext(r),n=e;return A&&(n="function"==typeof A?A(e):t(t({},e),A)),n},U=function(A){var e=B(A.components);return o.createElement(r.Provider,{value:e},A.children)},a={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(A,e){var n=A.components,g=A.mdxType,C=A.originalType,r=A.parentName,U=Q(A,["components","mdxType","originalType","parentName"]),c=B(n),F=g,u=c["".concat(r,".").concat(F)]||c[F]||a[F]||C;return n?o.createElement(u,t(t({ref:e},U),{},{components:n})):o.createElement(u,t({ref:e},U))}));function F(A,e){var n=arguments,g=e&&e.mdxType;if("string"==typeof A||g){var C=n.length,t=new Array(C);t[0]=c;var Q={};for(var r in e)hasOwnProperty.call(e,r)&&(Q[r]=e[r]);Q.originalType=A,Q.mdxType="string"==typeof A?A:g,t[1]=Q;for(var B=2;B<C;B++)t[B]=n[B];return o.createElement.apply(null,t)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7311:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>a,frontMatter:()=>C,metadata:()=>Q,toc:()=>B});var o=n(7462),g=(n(7294),n(3905));const C={},t=void 0,Q={permalink:"/EF-Informatik/knobelwuerfel",editUrl:"https://github.com/TheTahm/EF-Informatik/tree/main/blog/knobelwuerfel.md",source:"@site/blog/knobelwuerfel.md",title:"knobelwuerfel",description:"",date:"2023-02-24T15:52:38.000Z",formattedDate:"24. Februar 2023",tags:[],readingTime:.75,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Numtrip finaler Eintrag",permalink:"/EF-Informatik/Numtrip_finaler_Blogeintrag"},nextItem:{title:"top-down-entwurf",permalink:"/EF-Informatik/top-down-entwurf"}},r={authorsImageUrls:[]},B=[],U={toc:B};function a(A){let{components:e,...C}=A;return(0,g.kt)("wrapper",(0,o.Z)({},U,C,{components:e,mdxType:"MDXLayout"}),(0,g.kt)("p",null,(0,g.kt)("img",{src:n(8154).Z,width:"1239",height:"585"})),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-scad"},"module L() {\n        union() {\n            cube([8, 8, 8]);\n            translate([8, 0, 0])\n                cube([8, 8, 8]);\n            translate([16, 0, 0])\n                cube([8, 8, 8]);\n            translate([0, 8, 0])\n                cube([8, 8, 8]);\n           }\n       }\n       \nmodule  T()  {\n        union() {\n                cube([8, 8, 8]);\n            translate([8, 0, 0])\n                cube([8, 8, 8]);\n            translate([0, 8, 0])\n                cube([8, 8, 8]);\n            translate([0, 0, 8])\n                cube([8, 8, 8]);\n        }\n    }\n \n module  t()  {\n        union() {\n                cube([8, 8, 8]);\n            translate([8, 0, 0])\n                cube([8, 8, 8]);\n            translate([0, 8, 0])\n                cube([8, 8, 8]);\n            \n        }\n    }   \n       \n module  s()  {\n        union() {\n                cube([8, 8, 8]);\n            translate([8, 0, 0])\n                cube([8, 8, 8]);\n            translate([0, 8, 0])\n                cube([8, 8, 8]);\n            translate([8, 0, 8])\n                cube([8, 8, 8]);\n            \n        }\n    }     \n   \n  module  z()  {\n      translate([8, 0, 0])\n        union() {\n                cube([8, 8, 8]);\n            translate([8, 0, 0])\n                cube([8, 8, 8]);\n            translate([0, 8, 0])\n                cube([8, 8, 8]);\n            translate([-8, 8, 0])\n                cube([8, 8, 8]);\n            \n        }\n    }   \n   \ntranslate([30,0,0])       \n    T();\ntranslate([50,0,0])\n        t();\ntranslate([0,30,0])\n    s();\ntranslate([0,60,0])\n    rotate([90,0,0])\n        z();\nL();\n")))}a.isMDXComponent=!0},8154:(A,e,n)=>{n.d(e,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNcAAAJJCAIAAAAGNUZ6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR4nO3dvW4bWZqAYVZDMBRNLCwTbyR0oLShwNHA3myuwZt4LsKT9010sr6GztZGRwbacOrI0TrhtuOODCe1AQccLn+KRbLqO3/PA6Phlm3xlERR9eqcOtX1/WoBMFrXLft+1XXLxWIR/AKyfujIRwQAYHI/pB4AAAAADVGhQDFMhAIAVECFAmfbrIxdr8sFAIDxVCgAAABxVChwts3uRMFMvQIAVECFAhdylSYAABdQoQAAAMRRoUAxzL4CAFRAhQIXWu+U61pNAADOokKBielSAAAGqFDgcsHBqW8BACqgQoGrWJQLAMBZVCgAAABxVChwueCJUHvkAgBUQIUCZ9spT4tyAQAYT4UCAAAQR4UCxTDjCgBQARUKnG3/+syZFuV23XL9a/L3DABAKjepBwA0atOWm6bdf4vtiAAA6qNCgUtcP/l5cEL13H8CAEBxrMgFpmGnXAAAxlChQOW0MQBAVlQocJ6Ec556EgCgAioUmMw6UC3NBQBggAoFAAAgjgoFzpZqttMeuQAAFVChwJQsxwUAYJgKBSonjAEAsqJCgUukWhyrJwEASqdCgYm5ehMAgAEqFKifMAYAyIcKBS507vWWkyym1ZMAAKVTocD0bAgEAMAxKhQAAIDJnJyNUKHA5eLXx46fYu265favK98bAAAjnVwWdxM2FKAp61efuTN14AVu+6HVJgBAPlQoUDb7FQEAlMWKXOAqwRGoOQEASqdCgbnYKRcAgH0qFAAAgCkNz0aoUKAkJlcBAEqnQoEZWZQLAMAOFQoAAEAcd2oBSnLxHrmmZAEAIg3cPV6FAvMaeAGKHEPCRwcAYJsVuUDB5CUAQHFUKFASC2sBAEqnQoHZ5blTbtctMxwVAEA1jp0Eui4UqMr4sMyzjQEAqqdCgZLsXwi6U5KuFAUAyJwKBSLMOvGoPAEACuK6UAAAAOKoUCDChBOhLuYEACjFwQVxKhQIcvA1SFICALRGhQI52q7T9S1V9CoAwMWyOpWyOxEQ5Nhr3/rtmx2Gdv53sbf5kL2IAACKZi4UiHNwUW7fr3aaM6wz3TIUAGBu+2dc5kKBao0pTDOrAECYrls691ioUCDSJBOP+y/fx96tV3kAgAypUCDUeknGhH0oNQGA8ZqdjZz8HOwargsF5uXCSwAgH3aFSGLnw65CgdlN+1qfyc/wAADOpYHXVCgQzesvwEFeG4FGqFAgjv4EGOBFkqZ4tsfL50VGhQKzm3YNbSavngAAXEaFAgnk86M4AKA1zkOS2P6wq1AAAGiREktCAy9UKFAce+QCwCTkEKmoUGBex6LRdz4AaJkzgSSSf9i7btl1y5uEIwAAgMZ13dIyH0o3vmzXz3YVChTGd2ugYutpCq9yMDdfayONzMtzP5IqFEgm+ZoQAEhODjUo+Sf93KnLyalQAABa12wHJs8hJpS8LcdToUBeTn4vTP66CQBMQgOPNNOy2DD741ehQIRji2/3v/34hgQAtKCgqcvr7RyCCgUAIAsJfwrpZ6ANmu+TXvrUZQAVCpTHiQIANdHARWhq6nJuKhQIMn5RLkDLvCoSrPGnnLZMQoUCAPBPLdcISVgWO+DkIWwPPucv3v3PsgoF0jv3O1C2L7IApWt8Woz8VTB1OXwIO8MeOIqib7quQoE4xxblAsBCA7etgqnLk9bHWGtYnkWFAgCABp7FyKxq5CM/7Y/jd56xZT2BVSgQ6tiL41kvnQW9yMJlvn54fuyP7h7fRY4EiFFWQlSwLJa0VCgAxBnIS4BUNg3cwrLYgpT1s4lhO8eiQgFgAvKyPtWc/EEFy2LP2tEn5wMZVlN2DlOhQC7Gv/K28OoMtKydM1GuVPrU5cD4z7oHia+XtYJeOlQoAAD/kvZEtqDT6Pm0cNXl8G6xFW8VO+0zvNyvFxUKAGSq0LMryjX3Of3JuDp5J4+anHWfcK8GFdj+PKpQIBfj90XwrQiAfLQwdRlMdm7U+qFQoQBQkq8fnrtZCwTQluUqutzOvXfd3OOZiQoFMlLuiylUrNyTOTionWWxOX/xujzyLMeetPuLyEr5UKhQIC9jFuXm/9oKTKKU0ylyUMHU5cFDqOYeJGxc8Mo28JfLep3cjFaFAjna+Tn05htzKS+yNOjT528P97epR8GUbBWbidJvRjJs++gOHoKnwZqviJp03VKFAokd/Aa8/23GNx6AMAFn/MNtebLNajLfARZdbkUP/ko7x17Zh8IeuUAWDk54Dr/a1vRaDFCTCpbFUofKyu0sRRy7CgUA4IS6l8UmVEQwzKTlDYpaPvY1FQpkx065ZKi4b/AwRgXLYgf2Dg0eCQGcIVRDhQI5Gv6pnnMLgGGlT13uj39/q9iDbz/4z2v6KVKJs15TOXnUFTfqyTsI7Hxw8n+GqFAAgDJUfNXl/j0P9//C9huLO8CLNZ6ddR/7Wdlc2cdBhQI5qvjHmVys7nORs3z98Pzu8V3qUTCZgVe8k21WE1vFzsGxZ3vs2Q4shgoFcjF+X/Kcv6kwHzdvTKXlj/yVj176sthytfwFWxab9DRLhQIAnKHiZbEJtdwPLR87zVKhQHl8w04o/4/81w/PR/5Ni1rZcSwvS1kWe3D82Y6Wa5z8UYjPO5lToUC+BmrT99cGff3w/I/ffxwfmfE+ff72cH+behTsqmDq8tgdU8bs6LPzv9keI+Od/FFsTXsr7B9syzv61ESFAhk5uRE59cm5KslZBW150PB85n52thOWTR3sjuqPvbJ7kDCGCgUoTBHnItqSix08Hz1598iaDBxa9TUyn5Y/dJkfe7YDY1YqFMjasdnRnL+h1i3zNbFkq9apy7JkXiMts1UsrVGhAIxVWX+66+Yk3IyEqSgxaIcKBThbs2c2d4/vKgvRCb14+f7tm2epRzGZ/bY8VpvZfi0c29GnKdWXWLNbCVT/maV6KhTIyOZ8Yvv768FFub710riLJ3JLn7rcfpXYf+O2nb+Q7RHtUBfn8rEaw0eJ3KhQoAxOy2BAfVddDk+9+skUFRu4b+3283z4Oe8rgsypUCAj4+/UUlaUHlzF6opErlT9itMqD2pyTc2d1n2wm++AtR4gbFOhQAHyvI/olVdIvn3z7MXL91MNhgC5nQHnMxIoQm5fwvtyHhtMS4UC/D9j2tLdSiAr+dfFhK482KY+VkC2VCiQl/mmPXUjF9t+Tg48P//7v/790+dvD/e3IYM6j/CgCCIZGqFCgQsFnygcOzXRllxj2g1jk9+pZeBwKju5r+xwZtXIx2r4yX/w90BCKhQoxvY62ArWxD7c37o0NLmiT0kPpkXRR8RaI904xsmfE9nRBwqlQoHs5LkXEQAxDt4V9hj9CSX6IfUAgFL5xp+KSmfNM2G8uj9WlR1d3682v1KPBZiLCoWC1XTaAUlMu647eH116YvSh1VWVgBssyIXyJETUOBKFb+GuFkLUDoVClxo7pOY/Xd+9/iuvsmfTDYoGn++/sfvP846EuZTfXvsPI13jrTiKN03ZlOfmJEAHKRC4SppT+mcRnDStHciWdS+CpRyVd/Yi1Nfztt/WvfHAaiACgUo0uR5OVKVM9KQm4NXJQx8OctOoCwqFLiQk545pGrL8SQomah+8rPiQwNQoZQt+SlI2kdPfvhM4u2bZ//xn/+z/r1PaAU+ff72cH+behQAkC8VCpCe+GQSA9ODTe3Nc1D1c6cABVGhwIWcz+XMDpktO/jZX3/G22zRNo8aIGcqlGs1vkls44dPvGPn0ztPhuHnRhEn5da1jrE/v1fTy8Lw7OXBp/FAgQOQDxUKUIDNuXU7iy0lKGsjf/Jy8C0A5EmFAhea+4Tv4KnnH7//OOuD5swZNvuq37LY0x6gSj+kHgATSDsNknyT2ISPvmj+8C/Tdcsxv/p+tf8r9dgzdfDWgow0bci9ePl+wvc2OU8VAHJgLhSY0v7C0f23iEkAgJapUGDI9tYglxWm5iQfv/7258G3v3oMHggANE2FTiD5/SqSLwpteZPYcg9/HZAnC3N4783kH39YO5aXbRpec+vLFoDkVCjUZsyM5X48K8wkHu5vP33+Fv+4wzfAyEeJbfn2zbPUQ/DFC0DuVCiUZKo1sU5SoRq+nAEoTiV75La8Seyi7cNPvtnjlYe/Pf7N3rADb9nfKtbmsZChJFPcAFAKc6EwvZFrYheuuqRAd4/vqr9HJQAwKxUK57EmllLYogYAyNM0FZp8l4vki0IdfqpHn/ah3YmEbJ27n1Dy16VJPF0++bL6nnoUufv64fnd47vUowCAM5gLpWbudQkAALlRoZSnsqsuT26wlMk4Id7D/a25UACozzQVmvwsuaZFoReo6fAruOry3KocHmryTYC52Mh7XT5dPpl7JAAAWTEXWryCrv5qYU3syU+HqizdyLY819s3z168fD/hOzz3OlIAgDAqlAvtLHltoTBpyky1ue/L6rvpUACgKT9M8l6ST+8k3yQ24aNPfuxdt1z/Gn5L3692rro8+RYoSE1luPkS3vmVelx1mnZOe4ywn5gAwFTMhbalgqsugbUxGbm/TVfLXr3+mHoIZ9CWAFRMhdbDmlhacPf47uuH56lHkcx2eZ784m3nqzvPvPz0+dvD/e3+2+UlANSwR27yHTjmePQKrrocmKjZHljyTx8c83T5JOY2ISMvDW3zKyXPwhxJcALAQeZCo4281+XJm3lkez66fzjH/gIAANAgFTolV12ulT5+WCwWD/e3nz5/Sz0KAIAK1bBH7nzNc3Kf2J232CeW9U0aUz26eWbq8/bNs9RDAAAm1uhc6MirLnd6cuedaEuSGHnBLZOIvDQ04FGm0vgeUQDAlWqr0AquujzYGOqiYsMTmFk9OWFyJ/fvqenGrQDAWkl75BZ91eVOaexsEnvsjw7+BWpii2CqNOHesGXNEidR9DbCALQp5Vzo9vl3iXciOebkZOb+X8jzQIDF/ItyC00I9yA5ST8DwDHTV+jINbGLqq+6LHrwwPUKbUsm8eLle5sqAcCA8yq06DWxANeTlwAAV/pXhda0Jpa6nbudD1xJeQIATOhfFZphYe5nMLU6Kyw9HwAWi8Xf/vqX1EMAgEtkcaeWYwWyjg07xFZveJ/YFp4AZneBbfISgLrNUqEnsyHDeVcSqvizP+Zrwc1aKNGr1x9/+fmn1KMojLYEgLW55kIbn9qicWctJpegUCXNCQDH/JB6AFCbvl9tfqUeC9Nw1w0u8Onzt5gH+vrhecwDAcBUVGjZum65/yv1oACm5KcAAFCZLHYnYsdOSe5Pqdk9GAAAKJQKzcJAdh6c2xSfQDu+rL6nHgIAMCUVml47SXnZauF2Pj4AANCC9NeFuk1FfQ5erbr+RO/v2eOzzwBXPufs1euPqYeQrxcv36ceAgDky1woE1OVnGsgLA8+newICgBQtOkrNNXc5vaJbM4hZO4XdviKAABoSpFzoTbsAQAAKFQWFXruhV6CEwjwcH/76fO31KMAAKhNFhU6XJXVb0YyfICSG3bcPb5zaSgAQLmyqND6nFXOOhOgSp8+f3u4vw14oK8fnt89vgt4IACYhAqdnqoEGvHq9cdffv4p9SgAgMKkv18oAAAA7VChAAAAxFGhAOTOul8AqEkW14XaJBaAyrx4+f7tm2epRwEAOZq3QkduFaszARr36vXH1EMAAILMUqGb+ByTlxIUoGLyEgDYMX2FqkqAdohMAOBcdicCAAAgjgoFOM02M2Tu64fnqYcAAGOpUAAAAOKoUACYy6fP31IPAQCyo0IBAACIo0IBAACIo0IBAACIo0IBYBYvXr5PPQQAyJEKBQAAIM5N6gEAAKP8+tufA3/66jFsIABwFRUKACkNtyUA1EeFAhz1cH/rfo9cSWQCwA7XhQIAABBHhQIAABBHhQIAABBHhQIAABBHhQLluXt8l3oIAABcSIUCAAAQR4UCwFxevHwf80CvXn+MeSAAuJ4KBQAAII4KBQAAII4KBYCyWY4LQFluUg8AADhMXgJQJRUKMMrbN8/CdpqhevISgJapUACYkeAEgB0qFMhL1y3H/LU/fv9x7pEAADAHFQqkt12efb8a80++fng+4QB+/e3PY3/0dPlkwgcCAECFAumNLM9zDbTleF9W34UoAMCEVChQpEkKEwCAeO4XCgAAQBwVChQpct/RL6vvYY8FAFA9FQoAAEAcFQqUym0YAQBKpEIBTrMoFwBgKioUAACAOCoUKJhFuQAAxVGhAKNYlAsAMAkVCgAAQJyu71epxwBwlV9+/unK9/C3v/5l5y2//vbn+jd//8fK6yQAwIRuUg8AYEb7eTnS0+WTFy/fLxaLv/9jOemIAABap0KBIn398Hzz+4tTcwwToQAA01KhQDG2yzNA1y0lKADA5OxOBHDYf//Xv6ceAgBAhVQowJCuc10oAMCUVCjAKHIUAGASKhTgqLdvnqUeAgBAbVQowAEP97fr32w2KLJTEQDAJFQowBALcQEApuVOLQBD5tgpd+CWM3eP7yZ/OACArKhQgLFO3kE0+I6mAAAlUqEAp63z8o/ff9SZAABXcl0owAmR5WlXXgCgeioUAACAOCoUAACAOCoU4IRPn79FPpxFuQBA3VQoAAAAcVQoAAAAcVQoAAAAcVQoUIy7x3ephxDEpaEAQMVUKAAAAHFUKAAAAHFUKAAAAHFUKEBGHu5vUw8BAGBeKhQAAIA4KhQAAIA4KhTIXdctN79SjwUAgGvdpB4AwD8di8y+X21+//XD86jhAAAwCxUK5GK7NgEAqJUVuQAAAMRRoQCHuWkKAMAcVChAjt6+eZZ6CAAAs1ChAAAAxLE7EcC//Prbn9v/+3T5JNVIAABqpUKBJuzkJQAAqahQoGzyEgCgLCoUKElwc35ZfbcoFwBgWnYnAkry6vXHJI/76fO3JI8LAFAfFQow5Mvqe+ohAABURYUChUk1HQoAwCRUKAAAAHFUKFCe4OlQi3IBACZkj1yALGxv/2tjXgCgYioUYF7uaAoAsE2FAkV69frjLz//FPZwX1bfH+5vd94oLwEALqBCAXb97a9/2X+j5gQAmIQKBUp1wXTowbzM0JfVd5eGAgC1UqFA8WLa8unyic1yAQCup0KBgpUytwkAwIb7hQLkyLwrAFArFQowVvC1mm/fPIt8OACAGCoUAACAOCoU4Ay2rgUAuJIKBciUS0MBgCrZIxcggVevP6YeAgBAGioU4DzDNw79+z9Wfb+KHA8AQFlUKMDZdmYyu26ZaiQAAMVxXShQsLvHd6mHsMtEKADAMBUKcK398jQ7CgBwjAoFGOXh/nbMX9OfAADDVCjAxIQoAMAAFQowMZeGAgAMUKEAMzIvCgCwQ4UCTM90KADAMSoUAACAOCoUYBoH5z9NigIA7FChABNwy1AAgJFuUg8AYKyDXffH7z/Gj2SMvl913dJcKADADhUKZGR4/vBg0X398Hy24UxAiAIA7FChQEbqCLZNea7/K0QBALa5LhTgbG/fPDv5d1wXCgBwkAoFmMX6utDF1oxo6hEBAGRBhQJMxk65AAAnqVCAGW1mRAEAWFOhADPaJKgNigAA1lQowJT2a1N/AgBsU6EAE7MdEQDAABUKMK9NjupSAICFCgWYyfZCXP0JALBxk3oAANn59bc/j/3R0+WTy96nEAUAWFOhQEMG8jLA5npR+xUBAC1ToUAN0ublGMoTAGDNdaFA2e4e30Um6JfV97DHAgCokgoFCGVSFABonAoFivfq9cfIhztrOtROuQAAO1QoQJC+XwlRAAAVCtQgeDp0pGOLb7UoANAyFQpwtov3KHJRKACACgUqked0KAAAO1QoQJz1Wtz1jKh1uQBAmzrLw4Ca/PLzT1e+h8nnVPfLc/N7r8AAQINuUg8AIEiqJbs7W+Ou/1d/AgDNMhcKVCXPwNuMav2bPAcJABDDXChAtOEE/frh+fo3d4/vQoYDABDKXChQlZynGTd5OdKnz99evHw/02AAAFIxFwpwrXPzEgCgZSoU4Ch5CQAwOStygaqMXJFbRF5++vxtsVhYlAsAVMZcKFCVP37/sYjCHOPh/nYdogAANVGhQPGqyU4AgBb8kHoAAAAANESFAmTt7ZtnqYcAADAlFQoAAEAcFQoAAEAcFQoAAEAcFQqQO5eGAgA1UaEAAADEUaEAAADEUaEAAADEuUk9AICxum558O1//P5j8EgAALiYCgXyciw1F4tF36+O/dHXD8/nGQ4AABNToUBeBlITAIAKuC4UAACAOCoUAACAOCoUAACAOCoUAACAOCoUAACAOCoUIF8P97ephwAAMDEVCgAAQBwVCgAAQBwVCgAAQBwVCgAAQBwVCgAAQBwVClCAt2+epR4CAMA0VCgAAABxVCgAAABxVCgAAABxVCgAAABxblIPAIB/+vW3P/ff+HT5JH4kAADzUaEAszuYlyN9WX0XogBATVQowOWuyUsAgDapUICziU8AgIvZnQjgbMFLZL+svkc+HADArFQoAAAAcVQoAAAAcVQowCUsygUAuIwKBWpw9/gu9RBm13XL1EMAAJiACgW4UPB0aN+vIh8OAGAm7tQCkNir1x933rKe9uz7VdctN/9NMTQAgOmpUIC57OflBSzEBQAqo0IBLvd0+eTFy/eTv9v1/OfOG82IAgB1cF0oQElMjQIApVOhAAAAxFGhADnaX3xrOS4AUAcVClCGzca5qQcCAHAVFQqQr01zuhwUAKiGCgU428P9beohAACUSoUClGE9L7qeFDU1CgCUS4UCAAAQR4UCAAAQR4UCFGOzENdOuQBAuVQoUAPXSQIAlOIm9QAAhozMy75fff3wfO7BJNH3K40NANREhQI5svR0WNctfWQAgEJZkQvkqO9X61+pB5KFYx8Hc6QAQIlUKAAAAHFUKMBV3r55FvNAm5lPy5UBgKKpUIACWJ8MAFRDhQIAABBHhQIUYzMduv6N3YkAgBKpUICyaVEAoCwqFAAAgDgqFKjE3eO71ENIw65FAEBZVChAkSzEBQAKpUIBAACIo0IBSmWnXACgRDepBwBQgF9/+3P/jU+XT+JH0verg9nZdUsXiAIARVChQNMO5mX+1iGqPAGAEqlQoE4Befll9T3JdOi2zbyoHAUASqFCgXoUOrF5rs2i3GOrcwEAcmZ3IqAer15/TD2EIH2/kqAAQKFUKMDlvqy+px6CnXIBgMKoUKAq7UyHHqRFAYD8qVCAq+QwHQoAUBAVCtSm5elQO+UCAPmzRy7AaTmXrVW4AEBZOj84B6r0y88/jfybORfmsJ3+9HoOABRBhQJ16rplC69v2yG6vnfL5r8JRwUAMMB1oQAAAMRRoQC1MREKAORMhQIUb52dtikCAIqgQgEKpj8BgOKoUICy9f1qZwmuKAUAcqZCAerhilAAIH8qFAAAgDgqFKA2ZkQBgJypUIDauC4UAMjZTeoBADAZ/QkA5M9cKFCnvl9JMgCADKlQgBq4FhQAKIUKBQAAII4KBaiQ1cgAQLZUKEAlLMoFAIqgQgHqIUQBgPypUICqCFEAIHPuFwqUx0WPAADlUqFApgZSc+R0n1gFAMiQCgUyZWUpAECVXBcKAABAHBUKAABAHBUKAABAHBUKUBuX1AIAOVOhAAAAxFGhAHVyoxoAIE/u1AJQIYtyAYBsmQsFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFqtX3q65bph4FAAD/jwoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgjgoFAAAgzk3qAQBkreuW+2/s+1X8SAAA6qBCgUYdzMt9+8E58h8CAHCQCgXasmnIk/OZXbc05wkAMDkVCjRHWwIAJGR3IoDz9P3KolwAgIupUAAAAOKoUAAAAOKoUAAAAOLYnQgonqs0AQAKokKBrI0pzOE9b91wBQAgKyoUyJqABACojAoFOMGKXwCACalQoF0n83L9F8zHAgBMSIUCben71SY+5SUAQDwVCjRHfAIAJOR+oQAAAMRRoQAAAMSxIhdg1/U3KQUA4BgVCjTnZGSeLEz3bgEAuJgKBVpkJhMAIBXXhQIAABBHhQIAABBHhQIAABBHhQIAABBHhQIAABBHhQIAABBHhQKcre9XbhkKAHAZFQoAAECcm9QDAMjU8Gxn36/CRgIAUBMVCrRozHpanQkAMAcVCjRHXgIAJOS6UAAAAOKoUAAAAOKoUAAAAOKoUAAAAOKoUKByfb8asyMuAAAxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxVCgAAABxblIPAGAaXbdMPQQAAE5ToUABxhRm36+u+ecAAMRQoUDuum45UJgAAJRFhcbZn41xYg1j+EoBAKiJCo2zcyZtiSAAANAge+SmYYUhAADQJhWagAQFAACapUKjSVCI1/cra+ABADKhQkNJUAAAoHF2J4qznorZnpBRpAAAQGtUaJx1c3bdv/X9/6YeCwAAQBpW5AIAABBHhQIAABBHhVZuZ19Q24QCAABpqdDKbd+gwg69AABAcnYnqt8mRCUoAACQnAotSbcYtZ62XxyoTQkKAADkQIVm4Zq8PP3OLcQFAACyoUIT2G/Oy/Jy1GNJUAAAICcqNFq/6BazNeeBh5OgAABATuyRG65fLdwuBQAAaJUKBQAAII4KBQAAII4KBQAAII4KBQAAII4KBQAAII4KBQAAII4KBQAAII4KBQAAII4KBQAAII4KBQAAII4KBQAAII4KTaFfLbpl6kEAAAAkoEKBJvT9qvPTHwCADKhQAAAA4qhQAAAA4qhQACJvVDoAAAGpSURBVAAA4qhQAAAA4tykHgBA1k7uadT3q5iRAADUQYUC7Rqza67IBACYlgoF2qUwAQDiuS4UAACAOCoUAACAOCo0kX61GHFBGgAAQGVUKAAAAHFUKAAAAHHskQvUY8ydVwAASEuFAmW4/t6eGhUAIAcqFEjv+sIEAKAUKjQdp9Q042RkKkwAgHaoUGB2IhMAgA175AIAABBHhSawszrRjikAAEA7VGgCfb/alGfXLS1WBAAA2uG60DQ2ISpBAQCApqhQgLGOrZ/34yQAgPFUaBqbhbhW5EImLr5nqUu7AQDOokIT2C7P9dJcIQpJbAekL0MAgBgqNIGdk13nvpCQL0AAgGD2yAVasb09NQAAqahQAAAA4qhQAAAA4qhQgKtY6AsAcBYVCgAAQBwVCgAAQBwVCrTLYloAgHgqFAAAgDg3qQcAkK+RM6V9v5p7JAAA1VChQOsGUlNeAgBMToUCTdOZAADBXBcKAABAHBUKAABAHCtyAS63uabUyl4AgJFUKMABZ+2O66ajAADjqVCgaccC0twmAMBMVCjQOsEJABDJ7kQAAADE+T95qVaWVWyjMAAAAABJRU5ErkJggg=="}}]);