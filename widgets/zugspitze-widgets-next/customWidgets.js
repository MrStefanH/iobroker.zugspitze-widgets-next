var vis2Zugspitze;(()=>{"use strict";var e={7994:(e,_,s)=>{var r={"./DemoWidget":()=>Promise.all([s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_iobroker_vis-2-widgets-react-dev_iobroker_vis-2-widgets-react-dev"),s.e("src_DemoWidget_jsx")]).then((()=>()=>s(6771))),"./Zugspitze":()=>Promise.all([s.e("vendors-node_modules_bootstrap_dist_css_bootstrap_min_css"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_iobroker_vis-2-widgets-react-dev_iobroker_vis-2-widgets-react-dev"),s.e("src_Zugspitze_jsx")]).then((()=>()=>s(93379))),"./translations":()=>s.e("src_translations_js").then((()=>()=>s(5850)))},a=(e,_)=>(s.R=_,_=s.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),s.R=void 0,_),o=(e,_)=>{if(s.S){var r="default",a=s.S[r];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return s.S[r]=e,s.I(r,_)}};s.d(_,{get:()=>a,init:()=>o})}},_={};function s(r){var a=_[r];if(void 0!==a)return a.exports;var o=_[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=e,s.c=_,s.amdD=function(){throw new Error("define cannot be used indirect")},s.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return s.d(_,{a:_}),_},s.d=(e,_)=>{for(var r in _)s.o(_,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((_,r)=>(s.f[r](e,_),_)),[])),s.u=e=>"static/js/"+e+"."+{"vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64":"f8fee556","vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-3b8c5e":"3e1808a8","vendors-node_modules_iobroker_adapter-react-v5_Components_Loader_js-node_modules_iobroker_ada-6c96ca":"f753a2ea","vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_js-node_modules_iobr-c9c0ef":"112fb8f5",webpack_sharing_consume_default_react_react:"893ea4cb","webpack_sharing_consume_default_prop-types_prop-types":"12c538d8",webpack_sharing_consume_default_clsx_clsx:"fb58fc7b",webpack_sharing_consume_default_mui_system_mui_system:"9f1eb914","webpack_sharing_consume_default_react-dom_react-dom":"019703e5","webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-9b5bf1":"401b678f","webpack_sharing_consume_default_mui_icons-material_mui_icons-material-webpack_sharing_consume-d963ed":"ee92745c","webpack_sharing_consume_default_react-ace_react-ace":"8712186c","node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-c64f58":"dd09da09","vendors-node_modules_iobroker_vis-2-widgets-react-dev_index_jsx":"8484714d","vendors-node_modules_mui_icons-material_esm_index_js":"0ff9b54e","node_modules_mui_material_colors_blue_js-node_modules_mui_material_colors_common_js-node_modu-6fde97":"f98495a4","vendors-node_modules_mui_material_styles_index_js":"d8634f9c","node_modules_mui_material_colors_blue_js-node_modules_mui_material_colors_common_js-node_modu-2c2d26":"bbd76555","vendors-node_modules_mui_system_esm_Unstable_Grid_createGrid_js":"dd93308d","vendors-node_modules_mui_material_index_js":"96854eac","vendors-node_modules_mui_styles_index_js":"e97940c7","node_modules_react_jsx-runtime_js":"dcba0cae","vendors-node_modules_mui_system_esm_index_js-node_modules_mui_utils_isMuiElement_isMuiElement-52d73c":"de5c90dd","node_modules_mui_utils_deepmerge_deepmerge_js-node_modules_mui_utils_formatMuiErrorMessage_fo-9ac1b5":"4c3979d4",node_modules_clsx_dist_clsx_mjs:"78c8020e","node_modules_prop-types_index_js":"2c3c8e25","vendors-node_modules_react-ace_lib_index_js":"4e837a2d","node_modules_react-dom_client_js":"0d8c58df","vendors-node_modules_react-dom_index_js":"c6ad7ea6",node_modules_react_index_js:"c17a4385","webpack_sharing_consume_default_iobroker_vis-2-widgets-react-dev_iobroker_vis-2-widgets-react-dev":"346fe508",src_DemoWidget_jsx:"c8a3ff6d","vendors-node_modules_bootstrap_dist_css_bootstrap_min_css":"67b84efc",src_Zugspitze_jsx:"170c186b",src_translations_js:"e7464ae8","node_modules_mui_material_styles_getOverlayAlpha_js-node_modules_mui_material_styles_useTheme_js":"bf95c46c","node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-673682":"31a4201d"}[e]+".chunk.js",s.miniCssF=e=>"static/css/"+e+".8ae68d0b.chunk.css",s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),s.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),(()=>{var e={},_="iobroker.zugspitze-widgets-next:";s.l=(r,a,o,t)=>{if(e[r])e[r].push(a);else{var n,d;if(void 0!==o)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var m=i[u];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==_+o){n=m;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,s.nc&&n.setAttribute("nonce",s.nc),n.setAttribute("data-webpack",_+o),n.src=r),e[r]=[a];var l=(_,s)=>{n.onerror=n.onload=null,clearTimeout(c);var a=e[r];if(delete e[r],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(s))),_)return _(s)},c=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),d&&document.head.appendChild(n)}}})(),s.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{s.S={};var e={},_={};s.I=(r,a)=>{a||(a=[]);var o=_[r];if(o||(o=_[r]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[r])return e[r];s.o(s.S,r)||(s.S[r]={});var t=s.S[r],n="iobroker.zugspitze-widgets-next",d=(e,_,s,r)=>{var a=t[e]=t[e]||{},o=a[_];(!o||!o.loaded&&(!r!=!o.eager?r:n>o.from))&&(a[_]={get:s,from:n,eager:!!r})},i=[];if("default"===r)d("@iobroker/adapter-react-v5","4.13.11",(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-3b8c5e"),s.e("vendors-node_modules_iobroker_adapter-react-v5_Components_Loader_js-node_modules_iobroker_ada-6c96ca"),s.e("vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_js-node_modules_iobr-c9c0ef"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("webpack_sharing_consume_default_react-dom_react-dom"),s.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-9b5bf1"),s.e("webpack_sharing_consume_default_mui_icons-material_mui_icons-material-webpack_sharing_consume-d963ed"),s.e("webpack_sharing_consume_default_react-ace_react-ace"),s.e("node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-c64f58")]).then((()=>()=>s(65963))))),d("@iobroker/vis-2-widgets-react-dev","1.0.6",(()=>Promise.all([s.e("vendors-node_modules_iobroker_vis-2-widgets-react-dev_index_jsx"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-9b5bf1")]).then((()=>()=>s(27798))))),d("@mui/icons-material","5.15.15",(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_icons-material_esm_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("node_modules_mui_material_colors_blue_js-node_modules_mui_material_colors_common_js-node_modu-6fde97")]).then((()=>()=>s(15061))))),d("@mui/material/styles","5.14.14",(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_material_styles_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("node_modules_mui_material_colors_blue_js-node_modules_mui_material_colors_common_js-node_modu-2c2d26")]).then((()=>()=>s(90747))))),d("@mui/material","5.14.14",(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-3b8c5e"),s.e("vendors-node_modules_mui_system_esm_Unstable_Grid_createGrid_js"),s.e("vendors-node_modules_mui_material_styles_index_js"),s.e("vendors-node_modules_mui_material_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>s(82378))))),d("@mui/styles","5.14.14",(()=>Promise.all([s.e("vendors-node_modules_mui_styles_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("node_modules_react_jsx-runtime_js")]).then((()=>()=>s(51570))))),d("@mui/system","5.15.15",(()=>Promise.all([s.e("vendors-node_modules_mui_system_esm_Unstable_Grid_createGrid_js"),s.e("vendors-node_modules_mui_system_esm_index_js-node_modules_mui_utils_isMuiElement_isMuiElement-52d73c"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("node_modules_mui_utils_deepmerge_deepmerge_js-node_modules_mui_utils_formatMuiErrorMessage_fo-9ac1b5")]).then((()=>()=>s(55496))))),d("clsx","2.1.1",(()=>s.e("node_modules_clsx_dist_clsx_mjs").then((()=>()=>s(58387))))),d("prop-types","15.8.1",(()=>s.e("node_modules_prop-types_index_js").then((()=>()=>s(65173))))),d("react-ace","11.0.1",(()=>Promise.all([s.e("vendors-node_modules_react-ace_lib_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types")]).then((()=>()=>s(51869))))),d("react-dom/client","18.3.1",(()=>Promise.all([s.e("webpack_sharing_consume_default_react-dom_react-dom"),s.e("node_modules_react-dom_client_js")]).then((()=>()=>s(84391))))),d("react-dom","18.3.1",(()=>Promise.all([s.e("vendors-node_modules_react-dom_index_js"),s.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>s(97950))))),d("react","18.3.1",(()=>s.e("node_modules_react_index_js").then((()=>()=>s(65043)))));return i.length?e[r]=Promise.all(i).then((()=>e[r]=1)):e[r]=1}}})(),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var _=s.g.document;if(!e&&_&&(_.currentScript&&(e=_.currentScript.src),!e)){var r=_.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e=e=>{var _=e=>e.split(".").map((e=>+e==e?+e:e)),s=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=s[1]?_(s[1]):[];return s[2]&&(r.length++,r.push.apply(r,_(s[2]))),s[3]&&(r.push([]),r.push.apply(r,_(s[3]))),r},_=(_,s)=>{_=e(_),s=e(s);for(var r=0;;){if(r>=_.length)return r<s.length&&"u"!=(typeof s[r])[0];var a=_[r],o=(typeof a)[0];if(r>=s.length)return"u"==o;var t=s[r],n=(typeof t)[0];if(o!=n)return"o"==o&&"n"==n||"s"==n||"u"==o;if("o"!=o&&"u"!=o&&a!=t)return a<t;r++}},r=e=>{var _=e[0],s="";if(1===e.length)return"*";if(_+.5){s+=0==_?">=":-1==_?"<":1==_?"^":2==_?"~":_>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,s+="u"==(typeof(n=e[o]))[0]?"-":(a>0?".":"")+(a=2,n);return s}var t=[];for(o=1;o<e.length;o++){var n=e[o];t.push(0===n?"not("+d()+")":1===n?"("+d()+" || "+d()+")":2===n?t.pop()+" "+t.pop():r(n))}return d();function d(){return t.pop().replace(/^\((.+)\)$/,"$1")}},a=(_,s)=>{if(0 in _){s=e(s);var r=_[0],o=r<0;o&&(r=-r-1);for(var t=0,n=1,d=!0;;n++,t++){var i,u,m=n<_.length?(typeof _[n])[0]:"";if(t>=s.length||"o"==(u=(typeof(i=s[t]))[0]))return!d||("u"==m?n>r&&!o:""==m!=o);if("u"==u){if(!d||"u"!=m)return!1}else if(d)if(m==u)if(n<=r){if(i!=_[n])return!1}else{if(o?i>_[n]:i<_[n])return!1;i!=_[n]&&(d=!1)}else if("s"!=m&&"n"!=m){if(o||n<=r)return!1;d=!1,n--}else{if(n<=r||u<m!=o)return!1;d=!1}else"s"!=m&&"n"!=m&&(d=!1,n--)}}var l=[],c=l.pop.bind(l);for(t=1;t<_.length;t++){var p=_[t];l.push(1==p?c()|c():2==p?c()&c():p?a(p,s):!c())}return!!c()},o=(e,s)=>{var r=e[s];return Object.keys(r).reduce(((e,s)=>!e||!r[e].loaded&&_(e,s)?s:e),0)},t=(e,_,s,a)=>"Unsatisfied version "+s+" from "+(s&&e[_][s].from)+" of shared singleton module "+_+" (required "+r(a)+")",n=(e,_,s,r)=>{var n=o(e,s);return a(r,n)||d(t(e,s,n,r)),i(e[s][n])},d=e=>{"undefined"!==typeof console&&console.warn&&console.warn(e)},i=e=>(e.loaded=1,e.get()),u=e=>function(_,r,a,o){var t=s.I(_);return t&&t.then?t.then(e.bind(e,_,s.S[_],r,a,o)):e(_,s.S[_],r,a,o)},m=u(((e,_,r,a,o)=>_&&s.o(_,r)?n(_,0,r,a):o())),l={},c={28437:()=>m("default","react",[0],(()=>s.e("node_modules_react_index_js").then((()=>()=>s(65043))))),95973:()=>m("default","prop-types",[0],(()=>s.e("node_modules_prop-types_index_js").then((()=>()=>s(65173))))),53829:()=>m("default","clsx",[0],(()=>s.e("node_modules_clsx_dist_clsx_mjs").then((()=>()=>s(58387))))),68565:()=>m("default","@mui/system",[0],(()=>Promise.all([s.e("vendors-node_modules_mui_system_esm_Unstable_Grid_createGrid_js"),s.e("vendors-node_modules_mui_system_esm_index_js-node_modules_mui_utils_isMuiElement_isMuiElement-52d73c"),s.e("webpack_sharing_consume_default_clsx_clsx")]).then((()=>()=>s(55496))))),23479:()=>m("default","react-dom",[0],(()=>Promise.all([s.e("vendors-node_modules_react-dom_index_js"),s.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>s(97950))))),37449:()=>m("default","@iobroker/adapter-react-v5",[0],(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-3b8c5e"),s.e("vendors-node_modules_iobroker_adapter-react-v5_Components_Loader_js-node_modules_iobroker_ada-6c96ca"),s.e("vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_js-node_modules_iobr-c9c0ef"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("webpack_sharing_consume_default_react-dom_react-dom"),s.e("webpack_sharing_consume_default_mui_icons-material_mui_icons-material-webpack_sharing_consume-d963ed"),s.e("webpack_sharing_consume_default_react-ace_react-ace"),s.e("node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-673682")]).then((()=>()=>s(65963))))),67085:()=>m("default","@mui/material",[0],(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-3b8c5e"),s.e("vendors-node_modules_mui_system_esm_Unstable_Grid_createGrid_js"),s.e("vendors-node_modules_mui_material_styles_index_js"),s.e("vendors-node_modules_mui_material_index_js"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>s(82378))))),21839:()=>m("default","@mui/icons-material",[0],(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_icons-material_esm_index_js"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx"),s.e("webpack_sharing_consume_default_mui_system_mui_system")]).then((()=>()=>s(15061))))),17913:()=>m("default","@mui/material/styles",[0],(()=>Promise.all([s.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"),s.e("vendors-node_modules_mui_material_styles_index_js"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system"),s.e("node_modules_mui_material_styles_getOverlayAlpha_js-node_modules_mui_material_styles_useTheme_js")]).then((()=>()=>s(90747))))),32719:()=>m("default","@mui/styles",[4,5,14,14],(()=>Promise.all([s.e("vendors-node_modules_mui_styles_index_js"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_clsx_clsx")]).then((()=>()=>s(51570))))),58093:()=>m("default","react-ace",[0],(()=>s.e("vendors-node_modules_react-ace_lib_index_js").then((()=>()=>s(51869))))),59797:()=>m("default","@iobroker/vis-2-widgets-react-dev",[0],(()=>Promise.all([s.e("vendors-node_modules_iobroker_vis-2-widgets-react-dev_index_jsx"),s.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-9b5bf1")]).then((()=>()=>s(27798)))))},p={webpack_sharing_consume_default_react_react:[28437],"webpack_sharing_consume_default_prop-types_prop-types":[95973],webpack_sharing_consume_default_clsx_clsx:[53829],webpack_sharing_consume_default_mui_system_mui_system:[68565],"webpack_sharing_consume_default_react-dom_react-dom":[23479],"webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-9b5bf1":[37449,67085],"webpack_sharing_consume_default_mui_icons-material_mui_icons-material-webpack_sharing_consume-d963ed":[21839,17913,32719],"webpack_sharing_consume_default_react-ace_react-ace":[58093],"webpack_sharing_consume_default_iobroker_vis-2-widgets-react-dev_iobroker_vis-2-widgets-react-dev":[59797]},b={};s.f.consumes=(e,_)=>{s.o(p,e)&&p[e].forEach((e=>{if(s.o(l,e))return _.push(l[e]);if(!b[e]){var r=_=>{l[e]=0,s.m[e]=r=>{delete s.c[e],r.exports=_()}};b[e]=!0;var a=_=>{delete l[e],s.m[e]=r=>{throw delete s.c[e],_}};try{var o=c[e]();o.then?_.push(l[e]=o.then(r).catch(a)):r(o)}catch(t){a(t)}}}))}})(),(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((_,r)=>{var a=s.miniCssF(e),o=s.p+a;if(((e,_)=>{for(var s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var a=(t=s[r]).getAttribute("data-href")||t.getAttribute("href");if("stylesheet"===t.rel&&(a===e||a===_))return t}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var t;if((a=(t=o[r]).getAttribute("data-href"))===e||a===_)return t}})(a,o))return _();((e,_,r,a,o)=>{var t=document.createElement("link");t.rel="stylesheet",t.type="text/css",s.nc&&(t.nonce=s.nc),t.onerror=t.onload=s=>{if(t.onerror=t.onload=null,"load"===s.type)a();else{var r=s&&s.type,n=s&&s.target&&s.target.href||_,d=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+n+")");d.name="ChunkLoadError",d.code="CSS_CHUNK_LOAD_FAILED",d.type=r,d.request=n,t.parentNode&&t.parentNode.removeChild(t),o(d)}},t.href=_,r?r.parentNode.insertBefore(t,r.nextSibling):document.head.appendChild(t)})(e,o,null,_,r)})),_={vis2Zugspitze:0};s.f.miniCss=(s,r)=>{_[s]?r.push(_[s]):0!==_[s]&&{"vendors-node_modules_bootstrap_dist_css_bootstrap_min_css":1}[s]&&r.push(_[s]=e(s).then((()=>{_[s]=0}),(e=>{throw delete _[s],e})))}}})(),(()=>{var e={vis2Zugspitze:0};s.f.j=(_,r)=>{var a=s.o(e,_)?e[_]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(webpack_sharing_consume_default_(iobroker_(adapter\-react\-v5_iobroker_adapter\-react\-v5\-webpack_s\-9b5bf1|vis\-2\-widgets\-react\-dev_iobroker_vis\-2\-widgets\-react\-dev)|mui_(icons\-material_mui_icons\-material\-webpack_sharing_consume\-d963ed|system_mui_system)|react(\-ace_react\-ace|\-dom_react\-dom|_react)|clsx_clsx|prop\-types_prop\-types)|vendors\-node_modules_bootstrap_dist_css_bootstrap_min_css)$/.test(_))e[_]=0;else{var o=new Promise(((s,r)=>a=e[_]=[s,r]));r.push(a[2]=o);var t=s.p+s.u(_),n=new Error;s.l(t,(r=>{if(s.o(e,_)&&(0!==(a=e[_])&&(e[_]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),t=r&&r.target&&r.target.src;n.message="Loading chunk "+_+" failed.\n("+o+": "+t+")",n.name="ChunkLoadError",n.type=o,n.request=t,a[1](n)}}),"chunk-"+_,_)}};var _=(_,r)=>{var a,o,t=r[0],n=r[1],d=r[2],i=0;if(t.some((_=>0!==e[_]))){for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(d)d(s)}for(_&&_(r);i<t.length;i++)o=t[i],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkiobroker_zugspitze_widgets_next=self.webpackChunkiobroker_zugspitze_widgets_next||[];r.forEach(_.bind(null,0)),r.push=_.bind(null,r.push.bind(r))})(),s.nc=void 0;var r=s(7994);vis2Zugspitze=r})();
//# sourceMappingURL=customWidgets.js.map