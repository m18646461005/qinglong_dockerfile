"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[380],{23831:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(14797),o=t(63313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},u=t(46420),l=function(e,n){return o.createElement(u.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};l.displayName="EllipsisOutlined";var a=o.forwardRef(l)},84924:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(14797),o=t(63313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},u=t(46420),l=function(e,n){return o.createElement(u.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};l.displayName="LeftOutlined";var a=o.forwardRef(l)},43167:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(14797),o=t(63313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},u=t(46420),l=function(e,n){return o.createElement(u.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};l.displayName="RightOutlined";var a=o.forwardRef(l)},92235:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(41171),o=t(63313);function i(){var e=o.useReducer((function(e){return e+1}),0);return(0,r.Z)(e,2)[1]}},99043:function(e,n,t){var r=t(63313),o=t(92235),i=t(11847);n.Z=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=(0,r.useRef)({}),t=(0,o.Z)();return(0,r.useEffect)((function(){var r=i.ZP.subscribe((function(r){n.current=r,e&&t()}));return function(){return i.ZP.unsubscribe(r)}}),[]),n.current}},27935:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(22481),o=t(2595),i=t(41171),u=t(4155),l=t(63313),a=t(90916),c=t(84875),s=t.n(c),f={adjustX:1,adjustY:1},d=[0,0],v={topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:d},topCenter:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:d},bottomCenter:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:d}},p=t(32602),m=t(51537),h=t(78588),b=p.Z.ESC,Z=p.Z.TAB;var y=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function g(e,n){var t=e.arrow,c=void 0!==t&&t,f=e.prefixCls,d=void 0===f?"rc-dropdown":f,p=e.transitionName,g=e.animation,C=e.align,E=e.placement,w=void 0===E?"bottomLeft":E,M=e.placements,N=void 0===M?v:M,P=e.getPopupContainer,k=e.showAction,R=e.hideAction,x=e.overlayClassName,S=e.overlayStyle,I=e.visible,K=e.trigger,O=void 0===K?["hover"]:K,A=e.autoFocus,T=(0,u.Z)(e,y),L=l.useState(),D=(0,i.Z)(L,2),V=D[0],z=D[1],_="visible"in e?I:V,F=l.useRef(null);l.useImperativeHandle(n,(function(){return F.current})),function(e){var n=e.visible,t=e.setTriggerVisible,r=e.triggerRef,o=e.onVisibleChange,i=e.autoFocus,u=l.useRef(!1),a=function(){var e,i,u,l;n&&r.current&&(null===(e=r.current)||void 0===e||null===(i=e.triggerRef)||void 0===i||null===(u=i.current)||void 0===u||null===(l=u.focus)||void 0===l||l.call(u),t(!1),"function"==typeof o&&o(!1))},c=function(){var e,n,t,o,i=(0,h.tS)(null===(e=r.current)||void 0===e||null===(n=e.popupRef)||void 0===n||null===(t=n.current)||void 0===t||null===(o=t.getElement)||void 0===o?void 0:o.call(t))[0];return!!(null==i?void 0:i.focus)&&(i.focus(),u.current=!0,!0)},s=function(e){switch(e.keyCode){case b:a();break;case Z:var n=!1;u.current||(n=c()),n?e.preventDefault():a()}};l.useEffect((function(){return n?(window.addEventListener("keydown",s),i&&(0,m.Z)(c,3),function(){window.removeEventListener("keydown",s),u.current=!1}):function(){u.current=!1}}),[n])}({visible:_,setTriggerVisible:z,triggerRef:F,onVisibleChange:e.onVisibleChange,autoFocus:A});var j,W,B,H,q,G,X=function(){var n,t="function"==typeof(n=e.overlay)?n():n;return l.createElement(l.Fragment,null,c&&l.createElement("div",{className:"".concat(d,"-arrow")}),t)},U=R;return U||-1===O.indexOf("contextMenu")||(U=["click"]),l.createElement(a.Z,(0,o.Z)((0,o.Z)({builtinPlacements:N},T),{},{prefixCls:d,ref:F,popupClassName:s()(x,(0,r.Z)({},"".concat(d,"-show-arrow"),c)),popupStyle:S,action:O,showAction:k,hideAction:U||[],popupPlacement:w,popupAlign:C,popupTransitionName:p,popupAnimation:g,popupVisible:_,stretch:(q=e.minOverlayWidthMatchTrigger,G=e.alignPoint,("minOverlayWidthMatchTrigger"in e?q:!G)?"minWidth":""),popup:"function"==typeof e.overlay?X:X(),onPopupVisibleChange:function(n){var t=e.onVisibleChange;z(n),"function"==typeof t&&t(n)},onPopupClick:function(n){var t=e.onOverlayClick;z(!1),t&&t(n)},getPopupContainer:P}),(W=e.children,B=W.props?W.props:{},H=s()(B.className,void 0!==(j=e.openClassName)?j:"".concat(d,"-open")),_&&W?l.cloneElement(W,{className:H}):W))}var C=l.forwardRef(g)},48678:function(e,n,t){t.d(n,{iz:function(){return Ge},ck:function(){return he},BW:function(){return qe},sN:function(){return he},GP:function(){return qe},Wd:function(){return ze},ZP:function(){return Ue},Xl:function(){return R}});var r=t(88028),o=t(22481),i=t(2595),u=t(94718),l=t(41171),a=t(4155),c=t(84875),s=t.n(c),f=t(73589),d=t(16376),v=t(11253),p=t(63313),m=t(74012),h=t(41725),b=p.createContext(null);function Z(e,n){return void 0===e?null:"".concat(e,"-").concat(n)}function y(e){return Z(p.useContext(b),e)}var g=t(85444),C=["children","locked"],E=p.createContext(null);function w(e){var n=e.children,t=e.locked,r=(0,a.Z)(e,C),o=p.useContext(E),u=(0,g.Z)((function(){return e=o,n=r,t=(0,i.Z)({},e),Object.keys(n).forEach((function(e){var r=n[e];void 0!==r&&(t[e]=r)})),t;var e,n,t}),[o,r],(function(e,n){return!(t||e[0]===n[0]&&(0,h.Z)(e[1],n[1],!0))}));return p.createElement(E.Provider,{value:u},n)}var M=[],N=p.createContext(null);function P(){return p.useContext(N)}var k=p.createContext(M);function R(e){var n=p.useContext(k);return p.useMemo((function(){return void 0!==e?[].concat((0,u.Z)(n),[e]):n}),[n,e])}var x=p.createContext(null),S=p.createContext({}),I=t(32602),K=t(51537),O=t(78588),A=I.Z.LEFT,T=I.Z.RIGHT,L=I.Z.UP,D=I.Z.DOWN,V=I.Z.ENTER,z=I.Z.ESC,_=I.Z.HOME,F=I.Z.END,j=[L,D,A,T];function W(e,n){return(0,O.tS)(e,!0).filter((function(e){return n.has(e)}))}function B(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var o=W(e,n),i=o.length,u=o.findIndex((function(e){return t===e}));return r<0?-1===u?u=i-1:u-=1:r>0&&(u+=1),o[u=(u+i)%i]}function H(e,n,t,r,i,u,l,a,c,s){var f=p.useRef(),d=p.useRef();d.current=n;var v=function(){K.Z.cancel(f.current)};return p.useEffect((function(){return function(){v()}}),[]),function(p){var m=p.which;if([].concat(j,[V,z,_,F]).includes(m)){var h,b,y,g=function(){return h=new Set,b=new Map,y=new Map,u().forEach((function(e){var n=document.querySelector("[data-menu-id='".concat(Z(r,e),"']"));n&&(h.add(n),y.set(n,e),b.set(e,n))})),h};g();var C=function(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}(b.get(n),h),E=y.get(C),w=function(e,n,t,r){var i,u,l,a,c="prev",s="next",f="children",d="parent";if("inline"===e&&r===V)return{inlineTrigger:!0};var v=(i={},(0,o.Z)(i,L,c),(0,o.Z)(i,D,s),i),p=(u={},(0,o.Z)(u,A,t?s:c),(0,o.Z)(u,T,t?c:s),(0,o.Z)(u,D,f),(0,o.Z)(u,V,f),u),m=(l={},(0,o.Z)(l,L,c),(0,o.Z)(l,D,s),(0,o.Z)(l,V,f),(0,o.Z)(l,z,d),(0,o.Z)(l,A,t?f:d),(0,o.Z)(l,T,t?d:f),l);switch(null===(a={inline:v,horizontal:p,vertical:m,inlineSub:v,horizontalSub:m,verticalSub:m}["".concat(e).concat(n?"":"Sub")])||void 0===a?void 0:a[r]){case c:return{offset:-1,sibling:!0};case s:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case f:return{offset:1,sibling:!1};default:return null}}(e,1===l(E,!0).length,t,m);if(!w&&m!==_&&m!==F)return;(j.includes(m)||[_,F].includes(m))&&p.preventDefault();var M=function(e){if(e){var n=e,t=e.querySelector("a");null!=t&&t.getAttribute("href")&&(n=t);var r=y.get(e);a(r),v(),f.current=(0,K.Z)((function(){d.current===r&&n.focus()}))}};if([_,F].includes(m)||w.sibling||!C){var N,P,k=W(N=C&&"inline"!==e?function(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}(C):i.current,h);P=m===_?k[0]:m===F?k[k.length-1]:B(N,h,C,w.offset),M(P)}else if(w.inlineTrigger)c(E);else if(w.offset>0)c(E,!0),v(),f.current=(0,K.Z)((function(){g();var e=C.getAttribute("aria-controls"),n=B(document.getElementById(e),h);M(n)}),5);else if(w.offset<0){var R=l(E,!0),x=R[R.length-2],S=b.get(x);c(x,!1),M(S)}}null==s||s(p)}}var q="__RC_UTIL_PATH_SPLIT__",G=function(e){return e.join(q)},X="rc-menu-more";function U(){var e=p.useState({}),n=(0,l.Z)(e,2)[1],t=(0,p.useRef)(new Map),r=(0,p.useRef)(new Map),o=p.useState([]),i=(0,l.Z)(o,2),a=i[0],c=i[1],s=(0,p.useRef)(0),f=(0,p.useRef)(!1),d=(0,p.useCallback)((function(e,o){var i=G(o);r.current.set(i,e),t.current.set(e,i),s.current+=1;var u,l=s.current;u=function(){l===s.current&&(f.current||n({}))},Promise.resolve().then(u)}),[]),v=(0,p.useCallback)((function(e,n){var o=G(n);r.current.delete(o),t.current.delete(e)}),[]),m=(0,p.useCallback)((function(e){c(e)}),[]),h=(0,p.useCallback)((function(e,n){var r=t.current.get(e)||"",o=r.split(q);return n&&a.includes(o[0])&&o.unshift(X),o}),[a]),b=(0,p.useCallback)((function(e,n){return e.some((function(e){return h(e,!0).includes(n)}))}),[h]),Z=(0,p.useCallback)((function(e){var n="".concat(t.current.get(e)).concat(q),o=new Set;return(0,u.Z)(r.current.keys()).forEach((function(e){e.startsWith(n)&&o.add(r.current.get(e))})),o}),[]);return p.useEffect((function(){return function(){f.current=!0}}),[]),{registerPath:d,unregisterPath:v,refreshOverflowKeys:m,isSubPathKey:b,getKeyPath:h,getKeys:function(){var e=(0,u.Z)(t.current.keys());return a.length&&e.push(X),e},getSubPathKeys:Z}}function Y(e){var n=p.useRef(e);n.current=e;var t=p.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return e?t:void 0}var J=Math.random().toFixed(5).toString().slice(2),Q=0;var $=t(21953),ee=t(99044),ne=t(85700),te=t(82686),re=t(54331),oe=t(93355);function ie(e,n,t,r){var o=p.useContext(E),i=o.activeKey,u=o.onActive,l=o.onInactive,a={active:i===e};return n||(a.onMouseEnter=function(n){null==t||t({key:e,domEvent:n}),u(e)},a.onMouseLeave=function(n){null==r||r({key:e,domEvent:n}),l(e)}),a}function ue(e){var n=p.useContext(E),t=n.mode,r=n.rtl,o=n.inlineIndent;if("inline"!==t)return null;return r?{paddingRight:e*o}:{paddingLeft:e*o}}function le(e){var n=e.icon,t=e.props,r=e.children;return("function"==typeof n?p.createElement(n,(0,i.Z)({},t)):n)||r||null}var ae=["item"];function ce(e){var n=e.item,t=(0,a.Z)(e,ae);return Object.defineProperty(t,"item",{get:function(){return(0,v.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var se=["title","attribute","elementRef"],fe=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],de=["active"],ve=function(e){(0,ne.Z)(t,e);var n=(0,te.Z)(t);function t(){return(0,$.Z)(this,t),n.apply(this,arguments)}return(0,ee.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.attribute,o=e.elementRef,i=(0,a.Z)(e,se),u=(0,re.Z)(i,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,v.ZP)(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),p.createElement(f.Z.Item,(0,r.Z)({},t,{title:"string"==typeof n?n:void 0},u,{ref:o}))}}]),t}(p.Component),pe=p.forwardRef((function(e,n){var t,l=e.style,c=e.className,f=e.eventKey,d=(e.warnKey,e.disabled),v=e.itemIcon,m=e.children,h=e.role,b=e.onMouseEnter,Z=e.onMouseLeave,g=e.onClick,C=e.onKeyDown,w=e.onFocus,M=(0,a.Z)(e,fe),N=y(f),P=p.useContext(E),k=P.prefixCls,x=P.onItemClick,K=P.disabled,O=P.overflowDisabled,A=P.itemIcon,T=P.selectedKeys,L=P.onActive,D=p.useContext(S)._internalRenderMenuItem,V="".concat(k,"-item"),z=p.useRef(),_=p.useRef(),F=K||d,j=(0,oe.x1)(n,_),W=R(f);var B=function(e){return{key:f,keyPath:(0,u.Z)(W).reverse(),item:z.current,domEvent:e}},H=v||A,q=ie(f,F,b,Z),G=q.active,X=(0,a.Z)(q,de),U=T.includes(f),Y=ue(W.length),J={};"option"===e.role&&(J["aria-selected"]=U);var Q=p.createElement(ve,(0,r.Z)({ref:z,elementRef:j,role:null===h?"none":h||"menuitem",tabIndex:d?null:-1,"data-menu-id":O&&N?null:N},M,X,J,{component:"li","aria-disabled":d,style:(0,i.Z)((0,i.Z)({},Y),l),className:s()(V,(t={},(0,o.Z)(t,"".concat(V,"-active"),G),(0,o.Z)(t,"".concat(V,"-selected"),U),(0,o.Z)(t,"".concat(V,"-disabled"),F),t),c),onClick:function(e){if(!F){var n=B(e);null==g||g(ce(n)),x(n)}},onKeyDown:function(e){if(null==C||C(e),e.which===I.Z.ENTER){var n=B(e);null==g||g(ce(n)),x(n)}},onFocus:function(e){L(f),null==w||w(e)}}),m,p.createElement(le,{props:(0,i.Z)((0,i.Z)({},e),{},{isSelected:U}),icon:H}));return D&&(Q=D(Q,e,{selected:U})),Q}));function me(e,n){var t=e.eventKey,o=P(),i=R(t);return p.useEffect((function(){if(o)return o.registerPath(t,i),function(){o.unregisterPath(t,i)}}),[i]),o?null:p.createElement(pe,(0,r.Z)({},e,{ref:n}))}var he=p.forwardRef(me),be=["className","children"],Ze=function(e,n){var t=e.className,o=e.children,i=(0,a.Z)(e,be),u=p.useContext(E),l=u.prefixCls,c=u.mode,f=u.rtl;return p.createElement("ul",(0,r.Z)({className:s()(l,f&&"".concat(l,"-rtl"),"".concat(l,"-sub"),"".concat(l,"-").concat("inline"===c?"inline":"vertical"),t),role:"menu"},i,{"data-menu-list":!0,ref:n}),o)},ye=p.forwardRef(Ze);ye.displayName="SubMenuList";var ge=ye,Ce=t(69947),Ee=t(51026),we=["label","children","key","type"];function Me(e,n){return(0,Ee.Z)(e).map((function(e,t){if(p.isValidElement(e)){var r,o,i=e.key,l=null!==(r=null===(o=e.props)||void 0===o?void 0:o.eventKey)&&void 0!==r?r:i;null==l&&(l="tmp_key-".concat([].concat((0,u.Z)(n),[t]).join("-")));var a={key:l,eventKey:l};return p.cloneElement(e,a)}return e}))}function Ne(e){return(e||[]).map((function(e,n){if(e&&"object"===(0,Ce.Z)(e)){var t=e,o=t.label,i=t.children,u=t.key,l=t.type,c=(0,a.Z)(t,we),s=null!=u?u:"tmp-".concat(n);return i||"group"===l?"group"===l?p.createElement(qe,(0,r.Z)({key:s},c,{title:o}),Ne(i)):p.createElement(ze,(0,r.Z)({key:s},c,{title:o}),Ne(i)):"divider"===l?p.createElement(Ge,(0,r.Z)({key:s},c)):p.createElement(he,(0,r.Z)({key:s},c),o)}return null})).filter((function(e){return e}))}function Pe(e,n,t){var r=e;return n&&(r=Ne(n)),Me(r,t)}var ke=t(90916),Re={adjustX:1,adjustY:1},xe={topLeft:{points:["bl","tl"],overflow:Re,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Re,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Re,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Re,offset:[4,0]}},Se={topLeft:{points:["bl","tl"],overflow:Re,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Re,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Re,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Re,offset:[4,0]}};function Ie(e,n,t){return n||(t?t[e]||t.other:void 0)}var Ke={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Oe(e){var n=e.prefixCls,t=e.visible,r=e.children,u=e.popup,a=e.popupClassName,c=e.popupOffset,f=e.disabled,d=e.mode,v=e.onVisibleChange,m=p.useContext(E),h=m.getPopupContainer,b=m.rtl,Z=m.subMenuOpenDelay,y=m.subMenuCloseDelay,g=m.builtinPlacements,C=m.triggerSubMenuAction,w=m.forceSubMenuRender,M=m.rootClassName,N=m.motion,P=m.defaultMotions,k=p.useState(!1),R=(0,l.Z)(k,2),x=R[0],S=R[1],I=b?(0,i.Z)((0,i.Z)({},Se),g):(0,i.Z)((0,i.Z)({},xe),g),O=Ke[d],A=Ie(d,N,P),T=p.useRef(A);"inline"!==d&&(T.current=A);var L=(0,i.Z)((0,i.Z)({},T.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),D=p.useRef();return p.useEffect((function(){return D.current=(0,K.Z)((function(){S(t)})),function(){K.Z.cancel(D.current)}}),[t]),p.createElement(ke.Z,{prefixCls:n,popupClassName:s()("".concat(n,"-popup"),(0,o.Z)({},"".concat(n,"-rtl"),b),a,M),stretch:"horizontal"===d?"minWidth":null,getPopupContainer:h,builtinPlacements:I,popupPlacement:O,popupVisible:x,popup:u,popupAlign:c&&{offset:c},action:f?[]:[C],mouseEnterDelay:Z,mouseLeaveDelay:y,onPopupVisibleChange:v,forceRender:w,popupMotion:L},r)}var Ae=t(10091);function Te(e){var n=e.id,t=e.open,o=e.keyPath,u=e.children,a="inline",c=p.useContext(E),s=c.prefixCls,f=c.forceSubMenuRender,d=c.motion,v=c.defaultMotions,m=c.mode,h=p.useRef(!1);h.current=m===a;var b=p.useState(!h.current),Z=(0,l.Z)(b,2),y=Z[0],g=Z[1],C=!!h.current&&t;p.useEffect((function(){h.current&&g(!1)}),[m]);var M=(0,i.Z)({},Ie(a,d,v));o.length>1&&(M.motionAppear=!1);var N=M.onVisibleChanged;return M.onVisibleChanged=function(e){return h.current||e||g(!0),null==N?void 0:N(e)},y?null:p.createElement(w,{mode:a,locked:!h.current},p.createElement(Ae.ZP,(0,r.Z)({visible:C},M,{forceRender:f,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden")}),(function(e){var t=e.className,r=e.style;return p.createElement(ge,{id:n,className:t,style:r},u)})))}var Le=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],De=["active"],Ve=function(e){var n,t=e.style,u=e.className,c=e.title,d=e.eventKey,v=(e.warnKey,e.disabled),m=e.internalPopupClose,h=e.children,b=e.itemIcon,Z=e.expandIcon,g=e.popupClassName,C=e.popupOffset,M=e.onClick,N=e.onMouseEnter,P=e.onMouseLeave,k=e.onTitleClick,I=e.onTitleMouseEnter,K=e.onTitleMouseLeave,O=(0,a.Z)(e,Le),A=y(d),T=p.useContext(E),L=T.prefixCls,D=T.mode,V=T.openKeys,z=T.disabled,_=T.overflowDisabled,F=T.activeKey,j=T.selectedKeys,W=T.itemIcon,B=T.expandIcon,H=T.onItemClick,q=T.onOpenChange,G=T.onActive,X=p.useContext(S)._internalRenderSubMenuItem,U=p.useContext(x).isSubPathKey,J=R(),Q="".concat(L,"-submenu"),$=z||v,ee=p.useRef(),ne=p.useRef();var te=b||W,re=Z||B,oe=V.includes(d),ae=!_&&oe,se=U(j,d),fe=ie(d,$,I,K),de=fe.active,ve=(0,a.Z)(fe,De),pe=p.useState(!1),me=(0,l.Z)(pe,2),he=me[0],be=me[1],Ze=function(e){$||be(e)},ye=p.useMemo((function(){return de||"inline"!==D&&(he||U([F],d))}),[D,de,F,he,d,U]),Ce=ue(J.length),Ee=Y((function(e){null==M||M(ce(e)),H(e)})),we=A&&"".concat(A,"-popup"),Me=p.createElement("div",(0,r.Z)({role:"menuitem",style:Ce,className:"".concat(Q,"-title"),tabIndex:$?null:-1,ref:ee,title:"string"==typeof c?c:null,"data-menu-id":_&&A?null:A,"aria-expanded":ae,"aria-haspopup":!0,"aria-controls":we,"aria-disabled":$,onClick:function(e){$||(null==k||k({key:d,domEvent:e}),"inline"===D&&q(d,!oe))},onFocus:function(){G(d)}},ve),c,p.createElement(le,{icon:"horizontal"!==D?re:null,props:(0,i.Z)((0,i.Z)({},e),{},{isOpen:ae,isSubMenu:!0})},p.createElement("i",{className:"".concat(Q,"-arrow")}))),Ne=p.useRef(D);if("inline"!==D&&J.length>1?Ne.current="vertical":Ne.current=D,!_){var Pe=Ne.current;Me=p.createElement(Oe,{mode:Pe,prefixCls:Q,visible:!m&&ae&&"inline"!==D,popupClassName:g,popupOffset:C,popup:p.createElement(w,{mode:"horizontal"===Pe?"vertical":Pe},p.createElement(ge,{id:we,ref:ne},h)),disabled:$,onVisibleChange:function(e){"inline"!==D&&q(d,e)}},Me)}var ke=p.createElement(f.Z.Item,(0,r.Z)({role:"none"},O,{component:"li",style:t,className:s()(Q,"".concat(Q,"-").concat(D),u,(n={},(0,o.Z)(n,"".concat(Q,"-open"),ae),(0,o.Z)(n,"".concat(Q,"-active"),ye),(0,o.Z)(n,"".concat(Q,"-selected"),se),(0,o.Z)(n,"".concat(Q,"-disabled"),$),n)),onMouseEnter:function(e){Ze(!0),null==N||N({key:d,domEvent:e})},onMouseLeave:function(e){Ze(!1),null==P||P({key:d,domEvent:e})}}),Me,!_&&p.createElement(Te,{id:we,open:ae,keyPath:J},h));return X&&(ke=X(ke,e,{selected:se,active:ye,open:ae,disabled:$})),p.createElement(w,{onItemClick:Ee,mode:"horizontal"===D?"vertical":D,itemIcon:te,expandIcon:re},ke)};function ze(e){var n,t=e.eventKey,r=e.children,o=R(t),i=Me(r,o),u=P();return p.useEffect((function(){if(u)return u.registerPath(t,o),function(){u.unregisterPath(t,o)}}),[o]),n=u?i:p.createElement(Ve,e,i),p.createElement(k.Provider,{value:o},n)}var _e=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Fe=[],je=p.forwardRef((function(e,n){var t,c,v=e,y=v.prefixCls,g=void 0===y?"rc-menu":y,C=v.rootClassName,E=v.style,M=v.className,P=v.tabIndex,k=void 0===P?0:P,R=v.items,I=v.children,K=v.direction,O=v.id,A=v.mode,T=void 0===A?"vertical":A,L=v.inlineCollapsed,D=v.disabled,V=v.disabledOverflow,z=v.subMenuOpenDelay,_=void 0===z?.1:z,F=v.subMenuCloseDelay,j=void 0===F?.1:F,W=v.forceSubMenuRender,B=v.defaultOpenKeys,q=v.openKeys,G=v.activeKey,$=v.defaultActiveFirst,ee=v.selectable,ne=void 0===ee||ee,te=v.multiple,re=void 0!==te&&te,oe=v.defaultSelectedKeys,ie=v.selectedKeys,ue=v.onSelect,le=v.onDeselect,ae=v.inlineIndent,se=void 0===ae?24:ae,fe=v.motion,de=v.defaultMotions,ve=v.triggerSubMenuAction,pe=void 0===ve?"hover":ve,me=v.builtinPlacements,be=v.itemIcon,Ze=v.expandIcon,ye=v.overflowedIndicator,ge=void 0===ye?"...":ye,Ce=v.overflowedIndicatorPopupClassName,Ee=v.getPopupContainer,we=v.onClick,Me=v.onOpenChange,Ne=v.onKeyDown,ke=(v.openAnimation,v.openTransitionName,v._internalRenderMenuItem),Re=v._internalRenderSubMenuItem,xe=(0,a.Z)(v,_e),Se=p.useMemo((function(){return Pe(I,R,Fe)}),[I,R]),Ie=p.useState(!1),Ke=(0,l.Z)(Ie,2),Oe=Ke[0],Ae=Ke[1],Te=p.useRef(),Le=function(e){var n=(0,d.Z)(e,{value:e}),t=(0,l.Z)(n,2),r=t[0],o=t[1];return p.useEffect((function(){Q+=1;var e="".concat(J,"-").concat(Q);o("rc-menu-uuid-".concat(e))}),[]),r}(O),De="rtl"===K;var Ve=(0,d.Z)(B,{value:q,postState:function(e){return e||Fe}}),je=(0,l.Z)(Ve,2),We=je[0],Be=je[1],He=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function t(){Be(e),null==Me||Me(e)}n?(0,m.flushSync)(t):t()},qe=p.useState(We),Ge=(0,l.Z)(qe,2),Xe=Ge[0],Ue=Ge[1],Ye=p.useRef(!1),Je=p.useMemo((function(){return"inline"!==T&&"vertical"!==T||!L?[T,!1]:["vertical",L]}),[T,L]),Qe=(0,l.Z)(Je,2),$e=Qe[0],en=Qe[1],nn="inline"===$e,tn=p.useState($e),rn=(0,l.Z)(tn,2),on=rn[0],un=rn[1],ln=p.useState(en),an=(0,l.Z)(ln,2),cn=an[0],sn=an[1];p.useEffect((function(){un($e),sn(en),Ye.current&&(nn?Be(Xe):He(Fe))}),[$e,en]);var fn=p.useState(0),dn=(0,l.Z)(fn,2),vn=dn[0],pn=dn[1],mn=vn>=Se.length-1||"horizontal"!==on||V;p.useEffect((function(){nn&&Ue(We)}),[We]),p.useEffect((function(){return Ye.current=!0,function(){Ye.current=!1}}),[]);var hn=U(),bn=hn.registerPath,Zn=hn.unregisterPath,yn=hn.refreshOverflowKeys,gn=hn.isSubPathKey,Cn=hn.getKeyPath,En=hn.getKeys,wn=hn.getSubPathKeys,Mn=p.useMemo((function(){return{registerPath:bn,unregisterPath:Zn}}),[bn,Zn]),Nn=p.useMemo((function(){return{isSubPathKey:gn}}),[gn]);p.useEffect((function(){yn(mn?Fe:Se.slice(vn+1).map((function(e){return e.key})))}),[vn,mn]);var Pn=(0,d.Z)(G||$&&(null===(t=Se[0])||void 0===t?void 0:t.key),{value:G}),kn=(0,l.Z)(Pn,2),Rn=kn[0],xn=kn[1],Sn=Y((function(e){xn(e)})),In=Y((function(){xn(void 0)}));(0,p.useImperativeHandle)(n,(function(){return{list:Te.current,focus:function(e){var n,t,r,o,i=null!=Rn?Rn:null===(n=Se.find((function(e){return!e.props.disabled})))||void 0===n?void 0:n.key;i&&(null===(t=Te.current)||void 0===t||null===(r=t.querySelector("li[data-menu-id='".concat(Z(Le,i),"']")))||void 0===r||null===(o=r.focus)||void 0===o||o.call(r,e))}}}));var Kn=(0,d.Z)(oe||[],{value:ie,postState:function(e){return Array.isArray(e)?e:null==e?Fe:[e]}}),On=(0,l.Z)(Kn,2),An=On[0],Tn=On[1],Ln=Y((function(e){null==we||we(ce(e)),function(e){if(ne){var n,t=e.key,r=An.includes(t);n=re?r?An.filter((function(e){return e!==t})):[].concat((0,u.Z)(An),[t]):[t],Tn(n);var o=(0,i.Z)((0,i.Z)({},e),{},{selectedKeys:n});r?null==le||le(o):null==ue||ue(o)}!re&&We.length&&"inline"!==on&&He(Fe)}(e)})),Dn=Y((function(e,n){var t=We.filter((function(n){return n!==e}));if(n)t.push(e);else if("inline"!==on){var r=wn(e);t=t.filter((function(e){return!r.has(e)}))}(0,h.Z)(We,t,!0)||He(t,!0)})),Vn=Y(Ee),zn=H(on,Rn,De,Le,Te,En,Cn,xn,(function(e,n){var t=null!=n?n:!We.includes(e);Dn(e,t)}),Ne);p.useEffect((function(){Ae(!0)}),[]);var _n=p.useMemo((function(){return{_internalRenderMenuItem:ke,_internalRenderSubMenuItem:Re}}),[ke,Re]),Fn="horizontal"!==on||V?Se:Se.map((function(e,n){return p.createElement(w,{key:e.key,overflowDisabled:n>vn},e)})),jn=p.createElement(f.Z,(0,r.Z)({id:O,ref:Te,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:he,className:s()(g,"".concat(g,"-root"),"".concat(g,"-").concat(on),M,(c={},(0,o.Z)(c,"".concat(g,"-inline-collapsed"),cn),(0,o.Z)(c,"".concat(g,"-rtl"),De),c),C),dir:K,style:E,role:"menu",tabIndex:k,data:Fn,renderRawItem:function(e){return e},renderRawRest:function(e){var n=e.length,t=n?Se.slice(-n):null;return p.createElement(ze,{eventKey:X,title:ge,disabled:mn,internalPopupClose:0===n,popupClassName:Ce},t)},maxCount:"horizontal"!==on||V?f.Z.INVALIDATE:f.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){pn(e)},onKeyDown:zn},xe));return p.createElement(S.Provider,{value:_n},p.createElement(b.Provider,{value:Le},p.createElement(w,{prefixCls:g,rootClassName:C,mode:on,openKeys:We,rtl:De,disabled:D,motion:Oe?fe:null,defaultMotions:Oe?de:null,activeKey:Rn,onActive:Sn,onInactive:In,selectedKeys:An,inlineIndent:se,subMenuOpenDelay:_,subMenuCloseDelay:j,forceSubMenuRender:W,builtinPlacements:me,triggerSubMenuAction:pe,getPopupContainer:Vn,itemIcon:be,expandIcon:Ze,onItemClick:Ln,onOpenChange:Dn},p.createElement(x.Provider,{value:Nn},jn),p.createElement("div",{style:{display:"none"},"aria-hidden":!0},p.createElement(N.Provider,{value:Mn},Se)))))})),We=["className","title","eventKey","children"],Be=["children"],He=function(e){var n=e.className,t=e.title,o=(e.eventKey,e.children),i=(0,a.Z)(e,We),u=p.useContext(E).prefixCls,l="".concat(u,"-item-group");return p.createElement("li",(0,r.Z)({role:"presentation"},i,{onClick:function(e){return e.stopPropagation()},className:s()(l,n)}),p.createElement("div",{role:"presentation",className:"".concat(l,"-title"),title:"string"==typeof t?t:void 0},t),p.createElement("ul",{role:"group",className:"".concat(l,"-list")},o))};function qe(e){var n=e.children,t=(0,a.Z)(e,Be),r=Me(n,R(t.eventKey));return P()?r:p.createElement(He,(0,re.Z)(t,["warnKey"]),r)}function Ge(e){var n=e.className,t=e.style,r=p.useContext(E).prefixCls;return P()?null:p.createElement("li",{className:s()("".concat(r,"-item-divider"),n),style:t})}var Xe=je;Xe.Item=he,Xe.SubMenu=ze,Xe.ItemGroup=qe,Xe.Divider=Ge;var Ue=Xe},78588:function(e,n,t){t.d(n,{tS:function(){return u}});var r=t(94718),o=t(89782);function i(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,o.Z)(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||"a"===t&&!!e.getAttribute("href"),i=e.getAttribute("tabindex"),u=Number(i),l=null;return i&&!Number.isNaN(u)?l=u:r&&null===l&&(l=0),r&&e.disabled&&(l=null),null!==l&&(l>=0||n&&l<0)}return!1}function u(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(0,r.Z)(e.querySelectorAll("*")).filter((function(e){return i(e,n)}));return i(e,n)&&t.unshift(e),t}}}]);