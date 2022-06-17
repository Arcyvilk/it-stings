(this["webpackJsonpcra-with-setup-template"]=this["webpackJsonpcra-with-setup-template"]||[]).push([[0],{37:function(n,t,e){},38:function(n,t,e){"use strict";e.r(t);var a,i,c,o,r,s,d,l,m,u=e(0),b=e.n(u),p=e(19),j=e.n(p),f=e(9),h={light:{primaryBg:"#DBC2CF",secondaryBg:"#9FA2B2",primaryText:"#16262E",secondaryText:"#2E4756"},dark:{primaryBg:"#16262E",secondaryBg:"#2E4756",primaryText:"#DBC2CF",secondaryText:"#9FA2B2"}},O=e(1),v=function(n){var t=n.children,e="dark",a=Object(u.useState)(e),i=Object(f.a)(a,2),c=i[0],o=i[1],r=Object(u.useState)(h.dark),s=Object(f.a)(r,2),d=s[0],l=s[1];Object(u.useEffect)((function(){l(h[c])}),[c]);var m={themeType:c,setThemeType:o,theme:d,setTheme:l};return Object(O.jsx)(y.Provider,{value:m,children:t})},y=b.a.createContext({}),g=e(4),x=e(5),w=Object(x.a)(a||(a=Object(g.a)(["\n  html {\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: auto;\n  }\n  body {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: 'Dosis', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  #root {\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n  }\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n"]))),C=e(23),k=e(2),B=e(14),S=e(25),M=["children"],T=function(n){var t=n.children,e=Object(S.a)(n,M),a=Object(u.useState)("animation-".concat(Date.now())),i=Object(f.a)(a,2),c=i[0],o=i[1];return Object(O.jsx)(D,Object(B.a)(Object(B.a)({onClick:function(){o("animation-".concat(Date.now()))}},e),{},{children:t}),c)},D=x.b.div(i||(i=Object(g.a)(["\n  animation-duration: ",";\n  animation-timing-function: ",";\n  animation-delay: ",";\n  animation-iteration-count: ",";\n  animation-direction: ",";\n  animation-fill-mode: ",";\n  animation-play-state: ",";\n  display: ",";\n"])),(function(n){var t=n.duration;return"".concat(null!==t&&void 0!==t?t:1,"s")}),(function(n){var t=n.timingFunction;return null!==t&&void 0!==t?t:"ease"}),(function(n){var t=n.delay;return"".concat(null!==t&&void 0!==t?t:0,"s")}),(function(n){var t=n.iterationCount;return null!==t&&void 0!==t?t:1}),(function(n){var t=n.direction;return null!==t&&void 0!==t?t:"normal"}),(function(n){var t=n.fillMode;return null!==t&&void 0!==t?t:"both"}),(function(n){var t=n.playState;return null!==t&&void 0!==t?t:"running"}),(function(n){var t=n.display;return null!==t&&void 0!==t?t:"block"})),F=Object(x.c)(c||(c=Object(g.a)(["\n  from, 20%, 40%, 60%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n  0% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n  40% {\n    transform: scale3d(.9, .9, .9);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n  80% {\n    transform: scale3d(.97, .97, .97);\n  }\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n"]))),E=Object(x.b)(T)(o||(o=Object(g.a)(["\n  animation-name: ",";\n"])),F),A=Object(x.c)(r||(r=Object(g.a)(["  \n  from { opacity: 0; }\n  to { opacity: 1; }\n"]))),I=(Object(x.b)(T)(s||(s=Object(g.a)(["\n  animation-name: ",";\n"])),A),x.b.div.attrs((function(n){var t=n.row,e=n.column,a=n.justify,i=n.align,c=n.style,o=Object(B.a)({},c);return t&&(o.flexDirection="row"),e&&(o.flexDirection="column"),a&&(o.justifyContent="center"),i&&(o.alignItems="center"),{style:o}}))(d||(d=Object(g.a)(["\n  display: flex;\n\n  > * {\n    flex-grow: ",";\n  }\n"])),(function(n){return n.grow?1:"unset"}))),z=[e.p+"static/media/01.0700e93b.mp3",e.p+"static/media/02.28bad0d7.mp3",e.p+"static/media/03.3837dbfb.mp3",e.p+"static/media/04.cc17ded1.mp3",e.p+"static/media/05.7eb593d7.mp3",e.p+"static/media/06.4bf3c12d.mp3",e.p+"static/media/07.aaab2371.mp3",e.p+"static/media/08.652f5fbd.mp3",e.p+"static/media/09.5e294ef3.mp3",e.p+"static/media/10.1140d2c0.mp3",e.p+"static/media/11.0f01fb40.mp3",e.p+"static/media/12.796e6252.mp3"],J=e.p+"static/media/cactus_golden.abc6376b.png",N=function(){var n=Object(u.useState)(0),t=Object(f.a)(n,2),e=t[0],a=t[1];return Object(O.jsx)(E,{duration:1,children:Object(O.jsx)(U,{onClick:function(){a(e+1);var n=function(){var n=Math.ceil(1),t=Math.floor(z.length),e=Math.floor(Math.random()*t)+n;return z[e]}();new Audio(n).play()}})})},U=x.b.img.attrs({src:J})(l||(l=Object(g.a)(["\n  cursor: pointer;\n  width: 300px;\n  height: 300px;\n"]))),H=x.b.div.attrs((function(n){var t=n.theme;return{style:{color:t.primaryText,backgroundColor:t.primaryBg}}}))(m||(m=Object(g.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n"])));function P(){var n=Object(u.useContext)(y).theme;return Object(O.jsx)(H,{theme:n,children:Object(O.jsx)(I,{column:!0,align:!0,justify:!0,children:Object(O.jsx)(N,{})})})}function R(){return Object(O.jsx)(C.a,{children:Object(O.jsxs)(k.d,{children:[Object(O.jsx)(k.b,{exact:!0,path:"/",children:Object(O.jsx)(P,{})}),Object(O.jsx)(k.b,{children:Object(O.jsx)(k.a,{to:"/"})})]})})}e(37);j.a.render(Object(O.jsx)(b.a.StrictMode,{children:Object(O.jsxs)(v,{children:[Object(O.jsx)(w,{}),Object(O.jsx)(R,{})]})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.c8cdfc34.chunk.js.map