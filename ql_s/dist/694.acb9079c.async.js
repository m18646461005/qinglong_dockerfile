"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[694],{54824:function(e,n,t){t.d(n,{Z:function(){return C}});var o=t(41171),r=t(63313),a=t(74012),c=t(46594),i=(t(11253),t(93355)),l=r.createContext(null),u=t(94718),s=t(12334),d=[];var f=t(4052),m=t(74423);var E="rc-util-locker-".concat(Date.now()),v=0;function p(e){var n=!!e,t=r.useState((function(){return v+=1,"".concat(E,"_").concat(v)})),a=(0,o.Z)(t,1)[0];(0,s.Z)((function(){if(n){var e=(0,m.Z)(),t=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;(0,f.hq)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(t?"width: calc(100% - ".concat(e,"px);"):"","\n}"),a)}else(0,f.jL)(a);return function(){(0,f.jL)(a)}}),[n,a])}var h=!1;var N=function(e){return!1!==e&&((0,c.Z)()&&e?"string"==typeof e?document.querySelector(e):"function"==typeof e?e():e:null)};var C=r.forwardRef((function(e,n){var t=e.open,f=e.autoLock,m=e.getContainer,E=(e.debug,e.autoDestroy),v=void 0===E||E,C=e.children,y=r.useState(t),S=(0,o.Z)(y,2),g=S[0],M=S[1],T=g||t;r.useEffect((function(){(v||t)&&M(t)}),[t,v]);var I=r.useState((function(){return N(m)})),R=(0,o.Z)(I,2),b=R[0],O=R[1];r.useEffect((function(){var e=N(m);O(null!=e?e:null)}));var U=function(e,n){var t=r.useState((function(){return(0,c.Z)()?document.createElement("div"):null})),a=(0,o.Z)(t,1)[0],i=r.useRef(!1),f=r.useContext(l),m=r.useState(d),E=(0,o.Z)(m,2),v=E[0],p=E[1],h=f||(i.current?void 0:function(e){p((function(n){return[e].concat((0,u.Z)(n))}))});function N(){a.parentElement||document.body.appendChild(a),i.current=!0}function C(){var e;null===(e=a.parentElement)||void 0===e||e.removeChild(a),i.current=!1}return(0,s.Z)((function(){return e?f?f(N):N():C(),C}),[e]),(0,s.Z)((function(){v.length&&(v.forEach((function(e){return e()})),p(d))}),[v]),[a,h]}(T&&!b),_=(0,o.Z)(U,2),Z=_[0],A=_[1],P=null!=b?b:Z;p(f&&t&&(0,c.Z)()&&(P===Z||P===document.body));var w=null;C&&(0,i.Yr)(C)&&n&&(w=C.ref);var L=(0,i.x1)(w,n);if(!T||!(0,c.Z)()||void 0===b)return null;var D,k=!1===P||("boolean"==typeof D&&(h=D),h),x=C;return n&&(x=r.cloneElement(C,{ref:L})),r.createElement(l.Provider,{value:A},k?x:(0,a.createPortal)(x,P))}))},68098:function(e,n,t){t.d(n,{fk:function(){return c},jD:function(){return a}});var o,r=t(46594),a=function(){return(0,r.Z)()&&window.document.documentElement},c=function(){if(!a())return!1;if(void 0!==o)return o;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),o=1===e.scrollHeight,document.body.removeChild(e),o}},14165:function(e,n,t){t.d(n,{Z:function(){return b}});var o=t(88028),r=t(41171),a=t(63313),c=t.n(a),i=t(54824),l=t(2595),u=t(84875),s=t.n(u),d=t(32602);var f=0;function m(e){var n=a.useState("ssr-id"),t=(0,r.Z)(n,2),o=t[0],c=t[1],i=(0,l.Z)({},a).useId,u=null==i?void 0:i();return a.useEffect((function(){if(!i){var e=f;f+=1,c("rc_unique_".concat(e))}}),[]),e||(u||o)}var E=t(42975),v=t(35019),p=t(10091);function h(e){var n=e.prefixCls,t=e.style,r=e.visible,c=e.maskProps,i=e.motionName;return a.createElement(p.ZP,{key:"mask",visible:r,motionName:i,leavedClassName:"".concat(n,"-mask-hidden")},(function(e,r){var i=e.className,u=e.style;return a.createElement("div",(0,o.Z)({ref:r,style:(0,l.Z)((0,l.Z)({},u),t),className:s()("".concat(n,"-mask"),i)},c))}))}function N(e,n,t){var o=n;return!o&&t&&(o="".concat(e,"-").concat(t)),o}function C(e,n){var t=e["page".concat(n?"Y":"X","Offset")],o="scroll".concat(n?"Top":"Left");if("number"!=typeof t){var r=e.document;"number"!=typeof(t=r.documentElement[o])&&(t=r.body[o])}return t}var y=a.memo((function(e){return e.children}),(function(e,n){return!n.shouldUpdate})),S={width:0,height:0,overflow:"hidden",outline:"none"};var g=c().forwardRef((function(e,n){var t=e.prefixCls,r=e.className,i=e.style,u=e.title,d=e.ariaId,f=e.footer,m=e.closable,E=e.closeIcon,v=e.onClose,p=e.children,h=e.bodyStyle,N=e.bodyProps,C=e.modalRender,g=e.onMouseDown,M=e.onMouseUp,T=e.holderRef,I=e.visible,R=e.forceRender,b=e.width,O=e.height,U=(0,a.useRef)(),_=(0,a.useRef)();c().useImperativeHandle(n,(function(){return{focus:function(){var e;null===(e=U.current)||void 0===e||e.focus()},changeActive:function(e){var n=document.activeElement;e&&n===_.current?U.current.focus():e||n!==U.current||_.current.focus()}}}));var Z,A,P,w={};void 0!==b&&(w.width=b),void 0!==O&&(w.height=O),f&&(Z=c().createElement("div",{className:"".concat(t,"-footer")},f)),u&&(A=c().createElement("div",{className:"".concat(t,"-header")},c().createElement("div",{className:"".concat(t,"-title"),id:d},u))),m&&(P=c().createElement("button",{type:"button",onClick:v,"aria-label":"Close",className:"".concat(t,"-close")},E||c().createElement("span",{className:"".concat(t,"-close-x")})));var L=c().createElement("div",{className:"".concat(t,"-content")},P,A,c().createElement("div",(0,o.Z)({className:"".concat(t,"-body"),style:h},N),p),Z);return c().createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":u?d:null,"aria-modal":"true",ref:T,style:(0,l.Z)((0,l.Z)({},i),w),className:s()(t,r),onMouseDown:g,onMouseUp:M},c().createElement("div",{tabIndex:0,ref:U,style:S,"aria-hidden":"true"}),c().createElement(y,{shouldUpdate:I||R},C?C(L):L),c().createElement("div",{tabIndex:0,ref:_,style:S,"aria-hidden":"true"}))})),M=a.forwardRef((function(e,n){var t=e.prefixCls,c=e.title,i=e.style,u=e.className,d=e.visible,f=e.forceRender,m=e.destroyOnClose,E=e.motionName,v=e.ariaId,h=e.onVisibleChanged,N=e.mousePosition,y=(0,a.useRef)(),S=a.useState(),M=(0,r.Z)(S,2),T=M[0],I=M[1],R={};function b(){var e,n,t,o,r,a=(e=y.current,n=e.getBoundingClientRect(),t={left:n.left,top:n.top},o=e.ownerDocument,r=o.defaultView||o.parentWindow,t.left+=C(r),t.top+=C(r,!0),t);I(N?"".concat(N.x-a.left,"px ").concat(N.y-a.top,"px"):"")}return T&&(R.transformOrigin=T),a.createElement(p.ZP,{visible:d,onVisibleChanged:h,onAppearPrepare:b,onEnterPrepare:b,forceRender:f,motionName:E,removeOnLeave:m,ref:y},(function(r,d){var f=r.className,m=r.style;return a.createElement(g,(0,o.Z)({},e,{ref:n,title:c,ariaId:v,prefixCls:t,holderRef:d,style:(0,l.Z)((0,l.Z)((0,l.Z)({},m),i),R),className:s()(u,f)}))}))}));M.displayName="Content";var T=M;function I(e){var n=e.prefixCls,t=void 0===n?"rc-dialog":n,c=e.zIndex,i=e.visible,u=void 0!==i&&i,f=e.keyboard,p=void 0===f||f,C=e.focusTriggerAfterClose,y=void 0===C||C,S=e.wrapStyle,g=e.wrapClassName,M=e.wrapProps,I=e.onClose,R=e.afterClose,b=e.transitionName,O=e.animation,U=e.closable,_=void 0===U||U,Z=e.mask,A=void 0===Z||Z,P=e.maskTransitionName,w=e.maskAnimation,L=e.maskClosable,D=void 0===L||L,k=e.maskStyle,x=e.maskProps,F=e.rootClassName,K=(0,a.useRef)(),H=(0,a.useRef)(),W=(0,a.useRef)(),G=a.useState(u),V=(0,r.Z)(G,2),B=V[0],Q=V[1],Y=m();function X(e){null==I||I(e)}var q=(0,a.useRef)(!1),z=(0,a.useRef)(),j=null;return D&&(j=function(e){q.current?q.current=!1:H.current===e.target&&X(e)}),(0,a.useEffect)((function(){u&&(Q(!0),(0,E.Z)(H.current,document.activeElement)||(K.current=document.activeElement))}),[u]),(0,a.useEffect)((function(){return function(){clearTimeout(z.current)}}),[]),a.createElement("div",(0,o.Z)({className:s()("".concat(t,"-root"),F)},(0,v.Z)(e,{data:!0})),a.createElement(h,{prefixCls:t,visible:A&&u,motionName:N(t,P,w),style:(0,l.Z)({zIndex:c},k),maskProps:x}),a.createElement("div",(0,o.Z)({tabIndex:-1,onKeyDown:function(e){if(p&&e.keyCode===d.Z.ESC)return e.stopPropagation(),void X(e);u&&e.keyCode===d.Z.TAB&&W.current.changeActive(!e.shiftKey)},className:s()("".concat(t,"-wrap"),g),ref:H,onClick:j,style:(0,l.Z)((0,l.Z)({zIndex:c},S),{},{display:B?null:"none"})},M),a.createElement(T,(0,o.Z)({},e,{onMouseDown:function(){clearTimeout(z.current),q.current=!0},onMouseUp:function(){z.current=setTimeout((function(){q.current=!1}))},ref:W,closable:_,ariaId:Y,prefixCls:t,visible:u&&B,onClose:X,onVisibleChanged:function(e){if(e)(0,E.Z)(H.current,document.activeElement)||null===(n=W.current)||void 0===n||n.focus();else{if(Q(!1),A&&K.current&&y){try{K.current.focus({preventScroll:!0})}catch(e){}K.current=null}B&&(null==R||R())}var n},motionName:N(t,b,O)}))))}var R=function(e){var n=e.visible,t=e.getContainer,c=e.forceRender,l=e.destroyOnClose,u=void 0!==l&&l,s=e.afterClose,d=a.useState(n),f=(0,r.Z)(d,2),m=f[0],E=f[1];return a.useEffect((function(){n&&E(!0)}),[n]),c||!u||m?a.createElement(i.Z,{open:n||c||m,autoDestroy:!1,getContainer:t,autoLock:n||m},a.createElement(I,(0,o.Z)({},e,{destroyOnClose:u,afterClose:function(){null==s||s(),E(!1)}}))):null};R.displayName="Dialog";var b=R},32602:function(e,n){var t={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var n=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||n>=t.F1&&n<=t.F12)return!1;switch(n){case t.ALT:case t.CAPS_LOCK:case t.CONTEXT_MENU:case t.CTRL:case t.DOWN:case t.END:case t.ESC:case t.HOME:case t.INSERT:case t.LEFT:case t.MAC_FF_META:case t.META:case t.NUMLOCK:case t.NUM_CENTER:case t.PAGE_DOWN:case t.PAGE_UP:case t.PAUSE:case t.PRINT_SCREEN:case t.RIGHT:case t.SHIFT:case t.UP:case t.WIN_KEY:case t.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=t.ZERO&&e<=t.NINE)return!0;if(e>=t.NUM_ZERO&&e<=t.NUM_MULTIPLY)return!0;if(e>=t.A&&e<=t.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case t.SPACE:case t.QUESTION_MARK:case t.NUM_PLUS:case t.NUM_MINUS:case t.NUM_PERIOD:case t.NUM_DIVISION:case t.SEMICOLON:case t.DASH:case t.EQUALS:case t.COMMA:case t.PERIOD:case t.SLASH:case t.APOSTROPHE:case t.SINGLE_QUOTE:case t.OPEN_SQUARE_BRACKET:case t.BACKSLASH:case t.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};n.Z=t},74423:function(e,n,t){var o;function r(e){if("undefined"==typeof document)return 0;if(e||void 0===o){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var t=document.createElement("div"),r=t.style;r.position="absolute",r.top="0",r.left="0",r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",t.appendChild(n),document.body.appendChild(t);var a=n.offsetWidth;t.style.overflow="scroll";var c=n.offsetWidth;a===c&&(c=t.clientWidth),document.body.removeChild(t),o=a-c}return o}function a(e){var n=e.match(/^(.*)px$/),t=Number(null==n?void 0:n[1]);return Number.isNaN(t)?r():t}function c(e){if(!("undefined"!=typeof document&&e&&e instanceof Element))return{width:0,height:0};var n=getComputedStyle(e,"::-webkit-scrollbar"),t=n.width,o=n.height;return{width:a(t),height:a(o)}}t.d(n,{Z:function(){return r},o:function(){return c}})},35019:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(2595),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),a="aria-",c="data-";function i(e,n){return 0===e.indexOf(n)}function l(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,o.Z)({},t);var l={};return Object.keys(e).forEach((function(t){(n.aria&&("role"===t||i(t,a))||n.data&&i(t,c)||n.attr&&r.includes(t))&&(l[t]=e[t])})),l}}}]);