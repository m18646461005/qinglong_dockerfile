"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5586],{98912:function(e,t,n){n.r(t);var i=n(57213),a=n.n(i),o=n(54306),r=n.n(o),s=n(88265),c=n(63313),l=n(28756),u=n(60858),d=n(75310),h=n(24378),p=n(57229),f=n(15207),m=n(36035),v=n(82755),g=n(68793),b=n(12417),x=n(3094),y=n(40141),k=n(21758),Z=n(99120),S=n.n(Z),w=n(11527),C=l.Z.Option;t.default=function(e){var t=e.treeData,n=e.currentNode,i=e.content,o=e.handleCancel,Z=e.visible,P=(0,c.useState)(""),I=r()(P,2),j=I[0],O=I[1],E=(0,c.useState)("javascript"),N=r()(E,2),F=N[0],R=N[1],M=(0,c.useState)(),_=r()(M,2),H=_[0],A=_[1],T=(0,c.useState)(""),L=r()(T,2),W=L[0],z=L[1],D=(0,c.useState)(!1),q=r()(D,2),V=q[0],B=q[1],J=(0,c.useState)(!1),X=r()(J,2),$=X[0],U=X[1],G=(0,c.useState)(""),Y=r()(G,2),K=Y[0],Q=Y[1],ee=(0,x.F)().theme,te=(0,c.useRef)(null),ne=(0,c.useState)(!1),ie=r()(ne,2),ae=ie[0],oe=ie[1],re=(0,c.useState)(null),se=r()(re,2),ce=se[0],le=se[1],ue=function(e){p.W.get("".concat(f.Z.apiPrefix,"scripts/").concat(e.title,"?path=").concat(e.parent||"")).then((function(e){var t=e.code,n=e.data;200===t&&O(n)}))},de=function(){H&&H.title&&ce&&p.W.put("".concat(f.Z.apiPrefix,"scripts/stop"),{filename:H.title,path:H.parent||"",pid:ce}).then((function(e){var t=e.code;e.data;200===t&&oe(!1)}))},he=(0,c.useCallback)((function(e){var t=e.message;(0,y.x$)(t)&&setTimeout((function(){oe(!1)}),300),Q((function(e){return"".concat(e).concat(t)}))}),[]);return(0,c.useEffect)((function(){var e=k.Z.getInstance();return e.subscribe("manuallyRunScript",he),function(){e.unsubscribe("manuallyRunScript",he)}}),[]),(0,c.useEffect)((function(){if(Q(""),n){A(n),O(i),z(n.key);var e=(0,y.H$)(n.title);R(e)}}),[i,n]),(0,w.jsxs)(u.Z,{className:"edit-modal",closable:!1,title:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d.Z,{treeExpandAction:"click",style:{marginRight:8,width:150},value:W,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:t,placeholder:s.ZP.get("请选择脚本文件"),fieldNames:{value:"key",label:"title"},showSearch:!0,onSelect:function(e,t){if(t.key!==W&&e&&"directory"!==t.type){var n=(0,y.H$)(e);A(t),R(n),ue(t),z(t.key)}}}),(0,w.jsxs)(l.Z,{value:F,style:{width:110,marginRight:8},onChange:function(e){R(e)},children:[(0,w.jsx)(C,{value:"javascript",children:"javascript"}),(0,w.jsx)(C,{value:"typescript",children:"typescript"}),(0,w.jsx)(C,{value:"shell",children:"shell"}),(0,w.jsx)(C,{value:"python",children:"python"})]}),(0,w.jsx)(h.Z,{type:"primary",style:{marginRight:8},onClick:ae?de:function(){Q("");var e=te.current.getValue().replace(/\r\n/g,"\n");p.W.put("".concat(f.Z.apiPrefix,"scripts/run"),{filename:H.title,path:H.parent||"",content:e}).then((function(e){var t=e.code,n=e.data;200===t&&(oe(!0),le(n))}))},children:ae?s.ZP.get("停止"):s.ZP.get("运行")}),(0,w.jsx)(h.Z,{type:"primary",style:{marginRight:8},onClick:function(){Q("")},children:s.ZP.get("清空日志")}),(0,w.jsx)(h.Z,{type:"primary",style:{marginRight:8},onClick:function(){B(!0)},children:s.ZP.get("保存")}),(0,w.jsx)(h.Z,{type:"primary",style:{marginRight:8},onClick:function(){de(),o()},children:s.ZP.get("退出")})]}),width:"100%",headerStyle:{padding:"11px 24px"},onClose:function(){o()},open:Z,children:[(0,w.jsxs)(m.Z,{split:"vertical",minSize:200,defaultSize:"50%",style:{height:"calc(100vh - 55px)"},pane2Style:{overflowY:"auto"},children:[(0,w.jsx)(v.ZP,{language:F,value:j,theme:ee,options:{fontSize:12,minimap:{enabled:!1},lineNumbersMinChars:3,glyphMargin:!1},onMount:function(e){te.current=e}}),(0,w.jsx)("pre",{style:{padding:"0 15px"},children:(0,w.jsx)(S(),{children:K})})]}),(0,w.jsx)(g.default,{visible:V,handleCancel:function(){B(!1)},file:a()({content:te.current&&te.current.getValue().replace(/\r\n/g,"\n")},H)}),(0,w.jsx)(b.default,{visible:$,handleCancel:function(){U(!1)}})]})}},68793:function(e,t,n){n.r(t);var i=n(25359),a=n.n(i),o=n(57213),r=n.n(o),s=n(49811),c=n.n(s),l=n(54306),u=n.n(l),d=n(88265),h=n(63313),p=n(67393),f=n(9835),m=n(84163),v=n(22159),g=n(57229),b=n(15207),x=n(11527);t.default=function(e){var t=e.file,n=e.handleCancel,i=e.visible,o=p.Z.useForm(),s=u()(o,1)[0],l=(0,h.useState)(!1),y=u()(l,2),k=y[0],Z=y[1],S=function(){var e=c()(a()().mark((function e(i){var o;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z(!0),o=r()(r()(r()({},t),i),{},{originFilename:t.title}),g.W.post("".concat(b.Z.apiPrefix,"scripts"),o).then((function(e){var t=e.code,i=e.data;200===t&&(f.ZP.success(d.ZP.get("保存文件成功")),n(i)),Z(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.useEffect)((function(){s.resetFields(),Z(!1)}),[t,i]),(0,x.jsx)(m.Z,{title:d.ZP.get("保存文件"),open:i,forceRender:!0,centered:!0,maskClosable:!1,onOk:function(){s.validateFields().then((function(e){S(e)})).catch((function(e){console.log("Validate Failed:",e)}))},onCancel:function(){return n()},confirmLoading:k,children:(0,x.jsxs)(p.Z,{form:s,layout:"vertical",name:"script_modal",initialValues:{filename:null==t?void 0:t.title,path:(null==t?void 0:t.parent)||""},children:[(0,x.jsx)(p.Z.Item,{name:"filename",label:d.ZP.get("文件名"),rules:[{required:!0,message:d.ZP.get("请输入文件名")}],children:(0,x.jsx)(v.Z,{placeholder:d.ZP.get("请输入文件名")})}),(0,x.jsx)(p.Z.Item,{name:"path",label:d.ZP.get("保存目录"),children:(0,x.jsx)(v.Z,{placeholder:d.ZP.get("请输入保存目录，默认scripts目录")})})]})})}},12417:function(e,t,n){n.r(t);n(25359),n(57213),n(49811);var i=n(54306),a=n.n(i),o=n(88265),r=n(63313),s=n(67393),c=(n(9835),n(84163)),l=n(22159),u=(n(57229),n(15207),n(11527));t.default=function(e){var t=e.file,n=e.handleCancel,i=e.visible,d=s.Z.useForm(),h=a()(d,1)[0],p=(0,r.useState)(!1),f=a()(p,2),m=(f[0],f[1]);return(0,r.useEffect)((function(){h.resetFields(),m(!1)}),[t,i]),(0,u.jsx)(c.Z,{title:o.ZP.get("运行设置"),open:i,forceRender:!0,centered:!0,onCancel:function(){return n()},children:(0,u.jsx)(s.Z,{form:h,layout:"vertical",name:"setting_modal",initialValues:t,children:(0,u.jsx)(s.Z.Item,{name:"filename",label:o.ZP.get("待开发"),rules:[{required:!0,message:o.ZP.get("待开发")}],children:(0,u.jsx)(l.Z,{placeholder:o.ZP.get("待开发")})})})})}},3094:function(e,t,n){n.d(t,{F:function(){return c},e:function(){return s}});var i=n(54306),a=n.n(i),o=n(63313),r=n(40141),s=function(){var e=(0,o.useState)("100%"),t=a()(e,2),n=t[0],i=t[1],s=(0,o.useState)(0),c=a()(s,2),l=c[0],u=c[1],d=(0,o.useState)(-48),h=a()(d,2),p=h[0],f=h[1],m=(0,o.useState)(!1),v=a()(m,2),g=v[0],b=v[1],x=(0,o.useMemo)((function(){return(0,r.ZP)()}),[]).platform;return(0,o.useEffect)((function(){"mobile"===x&&document.body.offsetWidth<768?(i("auto"),u(0),f(0),b(!0),document.body.setAttribute("data-mode","phone")):(i("100%"),u(0),f(-48),b(!1),document.body.setAttribute("data-mode","desktop"))}),[]),{headerStyle:{padding:"4px 16px 4px 15px",position:"sticky",top:0,left:0,zIndex:20,marginTop:p,width:n,marginLeft:l},isPhone:g}},c=function(){var e=(0,o.useState)(),t=a()(e,2),n=t[0],i=t[1];return(0,o.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem("qinglong_dark_theme"),n=e.matches&&"light"!==t||"dark"===t;i(n?"vs-dark":"vs");var a=function(e){"auto"!==t&&t||(e.matches?i("vs-dark"):i("vs"))};"function"==typeof e.addEventListener?e.addEventListener("change",a):"function"==typeof e.addListener&&e.addListener(a)}),[]),{theme:n,reloadTheme:function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem("qinglong_dark_theme"),n=e.matches&&"light"!==t||"dark"===t;i(n?"vs-dark":"vs")}}}},21758:function(e,t,n){var i=n(93525),a=n.n(i),o=n(12342),r=n.n(o),s=n(25359),c=n.n(s),l=n(49811),u=n.n(l),d=n(21140),h=n.n(d),p=n(63466),f=n.n(p),m=n(52510),v=n.n(m),g=n(78078),b=n.n(g),x=["type"],y=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h()(this,e),v()(this,"url",void 0),v()(this,"socket",null),v()(this,"subscriptions",new Map),v()(this,"options",void 0),v()(this,"reconnectAttempts",0),v()(this,"heartbeatTimeout",null),v()(this,"state","closed"),this.url=t,this.options={maxReconnectAttempts:n.maxReconnectAttempts||5,reconnectInterval:n.reconnectInterval||3e3,heartbeatInterval:n.heartbeatInterval||3e4},this.init()}var t,n;return f()(e,[{key:"init",value:(n=u()(c()().mark((function e(){var t=this;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.state="connecting",this.emit("connecting");case 3:if(!(this.reconnectAttempts<this.options.maxReconnectAttempts)){e.next=16;break}return this.socket=new(b())(this.url),this.setupEventListeners(),this.startHeartbeat(),e.next=9,this.waitForClose();case 9:return this.stopHeartbeat(),this.socket=null,this.reconnectAttempts++,e.next=14,new Promise((function(e){return setTimeout(e,t.options.reconnectInterval)}));case 14:e.next=3;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),this.handleError(e.t0);case 21:case"end":return e.stop()}}),e,this,[[0,18]])}))),function(){return n.apply(this,arguments)})},{key:"setupEventListeners",value:function(){var e=this;this.socket&&(this.socket.onopen=function(){e.state="open",e.emit("open")},this.socket.onmessage=function(t){var n=JSON.parse(t.data);e.dispatchMessage(n)},this.socket.onclose=function(){e.state="closed",e.emit("close")})}},{key:"waitForClose",value:(t=u()(c()().mark((function e(){var t;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===(t=this.socket)||void 0===t?void 0:t.readyState)===b().CLOSED){e.next=5;break}return e.next=3,new Promise((function(e){return setTimeout(e,100)}));case 3:e.next=0;break;case 5:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"subscribe",value:function(e,t){var n=this.subscriptions.get(e)||new Set;if(!n.has(t)){n.add(t),this.subscriptions.set(e,n);var i={action:"subscribe",topic:e};this.send(i)}}},{key:"unsubscribe",value:function(e,t){var n=this.subscriptions.get(e)||new Set;if(n.has(t)){n.delete(t);var i={action:"unsubscribe",topic:e};this.send(i)}}},{key:"send",value:function(e){var t;(null===(t=this.socket)||void 0===t?void 0:t.readyState)===b().OPEN&&this.socket.send(JSON.stringify(e))}},{key:"dispatchMessage",value:function(e){var t=e.type,n=r()(e,x),i=this.subscriptions.get(t)||new Set;a()(i).forEach((function(e){return e(n)}))}},{key:"startHeartbeat",value:function(){var e=this;this.heartbeatTimeout=setInterval((function(){var t;(null===(t=e.socket)||void 0===t?void 0:t.readyState)===b().OPEN&&e.socket.send(JSON.stringify({type:"heartbeat"}))}),this.options.heartbeatInterval)}},{key:"stopHeartbeat",value:function(){this.heartbeatTimeout&&clearInterval(this.heartbeatTimeout)}},{key:"close",value:function(){this.socket&&(this.state="closed",this.stopHeartbeat(),this.socket.close(),this.emit("close"))}},{key:"handleError",value:function(e){console.error("WebSocket错误:",e),this.emit("error",e)}},{key:"on",value:function(e,t){}},{key:"emit",value:function(e,t){}}],[{key:"getInstance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;return e.instance||(e.instance=new e(t,n)),e.instance}}]),e}();v()(y,"instance",null),t.Z=y},28756:function(e,t,n){var i=n(22481),a=n(88028),o=n(84875),r=n.n(o),s=n(40804),c=n(54331),l=n(63313),u=n(82259),d=n(23474),h=n(7893),p=n(65189),f=n(76737),m=n(16082),v=n(1020),g=n(91967),b=n(60934),x=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n},y="SECRET_COMBOBOX_MODE_DO_NOT_USE",k=function(e,t){var n,o,k=e.prefixCls,Z=e.bordered,S=void 0===Z||Z,w=e.className,C=e.getPopupContainer,P=e.dropdownClassName,I=e.popupClassName,j=e.listHeight,O=void 0===j?256:j,E=e.placement,N=e.listItemHeight,F=void 0===N?24:N,R=e.size,M=e.disabled,_=e.notFoundContent,H=e.status,A=e.showArrow,T=x(e,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),L=l.useContext(u.E_),W=L.getPopupContainer,z=L.getPrefixCls,D=L.renderEmpty,q=L.direction,V=L.virtual,B=L.dropdownMatchSelectWidth,J=l.useContext(p.Z),X=z("select",k),$=z(),U=(0,b.ri)(X,q),G=U.compactSize,Y=U.compactItemClassnames,K=l.useMemo((function(){var e=T.mode;if("combobox"!==e)return e===y?"combobox":e}),[T.mode]),Q="multiple"===K||"tags"===K,ee=void 0!==A?A:T.loading||!(Q||"combobox"===K),te=(0,l.useContext)(f.aM),ne=te.status,ie=te.hasFeedback,ae=te.isFormItemInput,oe=te.feedbackIcon,re=(0,v.F)(ne,H);o=void 0!==_?_:"combobox"===K?null:(D||d.Z)("Select");var se=(0,g.Z)((0,a.Z)((0,a.Z)({},T),{multiple:Q,hasFeedback:ie,feedbackIcon:oe,showArrow:ee,prefixCls:X})),ce=se.suffixIcon,le=se.itemIcon,ue=se.removeIcon,de=se.clearIcon,he=(0,c.Z)(T,["suffixIcon","itemIcon"]),pe=r()(I||P,(0,i.Z)({},"".concat(X,"-dropdown-").concat(q),"rtl"===q)),fe=G||R||J,me=l.useContext(h.Z),ve=null!=M?M:me,ge=r()((n={},(0,i.Z)(n,"".concat(X,"-lg"),"large"===fe),(0,i.Z)(n,"".concat(X,"-sm"),"small"===fe),(0,i.Z)(n,"".concat(X,"-rtl"),"rtl"===q),(0,i.Z)(n,"".concat(X,"-borderless"),!S),(0,i.Z)(n,"".concat(X,"-in-form-item"),ae),n),(0,v.Z)(X,re,ie),Y,w);return l.createElement(s.ZP,(0,a.Z)({ref:t,virtual:V,dropdownMatchSelectWidth:B},he,{transitionName:(0,m.mL)($,(0,m.q0)(E),T.transitionName),listHeight:O,listItemHeight:F,mode:K,prefixCls:X,placement:void 0!==E?E:"rtl"===q?"bottomRight":"bottomLeft",direction:q,inputIcon:ce,menuItemSelectedIcon:le,removeIcon:ue,clearIcon:de,notFoundContent:o,className:ge,getPopupContainer:C||W,dropdownClassName:pe,showArrow:ie||A,disabled:ve}))},Z=l.forwardRef(k);Z.SECRET_COMBOBOX_MODE_DO_NOT_USE=y,Z.Option=s.Wx,Z.OptGroup=s.Xo,t.Z=Z}}]);