(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{18:function(e,t,a){"use strict";var n=a(2),c=a(8),i=a.n(c),r=a(0),s=function(e){var t,a=e.correct,n=e.number,c=void 0===n?0:n,s=e.children,o=e.theme,l=e.onClick,m=e.state;switch(void 0===m?0:m){case 1:t="active";break;case 2:t="correct";break;case 3:t="incorrect";break;default:t="normal"}var u=i()("answers-item","answer","answer--".concat(o,"--").concat(t)),d=React.createElement(r.Fragment,null,React.createElement("div",{className:"answer__number"},c),React.createElement("div",{className:"answer__text"},s));if(!l)return React.createElement("div",{className:u},d);return React.createElement("div",{className:u,onKeyPress:function(e){"Enter"===e.key&&l(c,a)},tabIndex:c,role:"button",onClick:function(){l(c,a)}},d)},o=function(e){var t=e.rows,a=e.templateBlock,n=void 0!==a&&a,c=e.children,r=t&&!n?t:"row";return React.createElement("ul",{className:i()("answers-list","answers-list--".concat(r))},c)},l=a(1),m=function(e){var t=e.className,a=void 0===t?"dialog":t,n=e.message,c=void 0===n?Object(l.__)("Are you sure","quizess"):n,i=e.onConfirm,r=e.onCancel,s=React.createElement(g,{className:"".concat(a,"__button ").concat(a,"__confirm"),warning:!0,onClick:i,size:"big"},Object(l.__)("Confirm","quizess")),o=React.createElement(g,{className:"".concat(a,"__button ").concat(a,"__cancel"),onClick:r,size:"big"},Object(l.__)("Cancel","quizess")),m=React.createElement("div",{className:"".concat(a,"__title")},c);return React.createElement("div",{className:a},m,o,s)},u=function(e){var t=e.className,a=void 0===t?"":t,n=e.children;return React.createElement("div",{className:"quiz__input-row ".concat(a)},n)},d=function(e){var t=e.className,a=void 0===t?"":t,n=e.align,c=void 0===n?"right":n,i=e.children;return React.createElement("div",{className:"qzui__row-container qzui__row-container--".concat(c," ").concat(a)},i)},_=a(37),v=function(e){var t=e.className,a=void 0===t?"table":t,n=e.pagination,c=void 0!==n&&n,i=e.titles,r=void 0===i?[]:i,s=e.description,o=void 0===s?null:s,l=e.items,m=e.page,u=e.onPageChange,d=e.children,v=!d||!c||d.length<l||!1,f=v?d:Object(_.chunk)(d,l),b=r.map(function(e,t){return React.createElement("div",{className:"".concat(a,"__inner ").concat(a,"__title"),key:t},e)}),p=React.createElement("li",{className:"".concat(a,"__item ").concat(a,"__item--title")},b),E=o?o.map(function(e,t){return React.createElement("div",{key:t,className:"".concat(a,"__inner--explanation")},e)}):null,R=React.createElement("li",{className:"".concat(a,"__item")},React.createElement("div",{className:"".concat(a,"__inner ").concat(a,"__explanation")},E)),N=React.createElement("ul",{className:"".concat(a,"__parent")},p,v?f:f[m],o&&R);return v?N:React.createElement("div",{className:"".concat(a,"__list")},N,React.createElement(h,{items:l,page:m,onPageChange:u,elementItems:d}))},h=function(e){var t=e.className,a=void 0===t?"pagination":t,n=e.items,c=void 0===n?1:n,r=e.page,s=void 0===r?0:r,o=e.onPageChange,m=e.elementItems,u=m?Object(_.chunk)(m,c):[],d=function(e){var t;switch(e){case"less":t=0===s?s:s-1;break;case"more":t=s===u.length-1?s:s+1;break;default:t=e}o(t)},v=u?u.map(function(e,t){var n=i()("".concat(a,"__item"),{active:t===s});return React.createElement("li",{className:n,role:"treeitem",key:t,onKeyPress:function(){d(t)},onClick:function(){d(t)}},t+1)}):[],h=function(e){if(u.length<1)return"";if(0===s&&"less"===e)return"";if(s===u.length-1&&"more"===e)return"";var t="more"===e?Object(l.__)("Next","quizess"):Object(l.__)("Prev","quizess");return React.createElement("li",{className:"".concat(a,"__item"),role:"treeitem",onKeyPress:function(){d(e)},onClick:function(){d(e)}},t)};return React.createElement("ul",{className:"".concat(a,"__menu")},h("less"),v,h("more"))},f=function(e){var t=e.className,a=void 0===t?"table":t,n=e.items,c=void 0===n?[]:n,i=e.children,s=i?r.Children.map(i,function(e){return React.createElement("div",{className:"".concat(a,"__inner")},e)}):"",o=c.map(function(e,t){return React.createElement("div",{key:t,className:"".concat(a,"__inner")},e)});return React.createElement("li",{className:"".concat(a,"__item")},o,s)},b=function(e){var t=e.title,a=void 0===t?Object(l.__)("Quizess","quizess"):t,n=e.theme,c=e.closeCallback,r=i()("modal__top-bar","modal__top-bar--".concat(n));return React.createElement("div",{className:r},React.createElement("h1",{className:"modal__title"},a),React.createElement("button",{className:"btn-close",onClick:c}))},p=function(e){var t=e.children,a=e.theme,n=e.onClick,c=i()("btn","btn--".concat(a));return React.createElement("button",{onClick:n,className:c},t)},E={};E.arrow=React.createElement("svg",{width:"26",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{d:"M25.707 8.707a1 1 0 0 0 0-1.414L19.343.929a1 1 0 1 0-1.414 1.414L23.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM0 9h25V7H0v2z",fill:"#fff"})),E.eye=React.createElement("svg",{width:"30",height:"20",viewBox:"0 0 30 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{d:"M15 .198C8.383.198 2.68 4.1.06 9.728c-.08.17-.08.37 0 .544 2.62 5.629 8.323 9.53 14.94 9.53 6.617 0 12.32-3.901 14.94-9.53.08-.17.08-.37 0-.544C27.32 4.1 21.617.198 15 .198zm0 16.566a6.761 6.761 0 0 1-6.762-6.762A6.761 6.761 0 0 1 15 3.24a6.761 6.761 0 1 1 0 13.523z",fill:"#fff"}),React.createElement("path",{d:"M15 14.327a4.329 4.329 0 1 0 0-8.657 4.329 4.329 0 0 0 0 8.657z",fill:"#fff"}));var R=E,N=function(e){var t=e.children,a=e.theme,n=e.onClick,c=e.disabled,s=void 0!==c&&c,o=e.featured,l=void 0!==o&&o,m=l?R.eye:R.arrow,u=React.createElement(r.Fragment,null,React.createElement("div",{className:"wide-btn__content"},t),React.createElement("div",{className:"wide-btn__graphic"},m));if(s)return React.createElement("div",{className:i()("wide-btn","wide-btn--disabled",{"wide-btn--next":!l})},u);var d=i()("wide-btn","wide-btn--".concat(a),{"wide-btn--next":!l},{"wide-btn--explanation":l});return React.createElement("div",{onKeyPress:function(e){"Enter"===e.key&&n()},tabIndex:0,role:"button",onClick:n,className:d},u)},w=function(e){var t=e.idName,a=void 0===t?"toggle-switch":t,n=e.label,c=void 0===n?Object(l.__)("Use toggle","quizess"):n,i=e.labelClass,s=void 0===i?"":i,o=e.helperMessage,m=void 0===o?"":o,u=e.checked,d=e.onChange;return React.createElement(r.Fragment,null,React.createElement("label",{htmlFor:"".concat(a,"-id"),className:"toggle-switch__label ".concat(s)},c,m&&React.createElement("span",{className:"toggle-switch__label-helper"},m)),React.createElement("label",{className:"toggle-switch"},React.createElement("input",{className:"toggle-switch__input",id:"".concat(a,"-id"),type:"checkbox",checked:u,onChange:function(){return d(!u)}}),React.createElement("span",{className:"toggle-switch__slider"})))},g=function(e){var t=e.className,a=void 0===t?"":t,n=e.warning,c=void 0!==n&&n,i=e.size,r=void 0===i?"small":i,s=e.onClick,o=e.children,l=c?"warning":"primary",m="dashboard__button dashboard__button--".concat("small"===r?"small":"big"," dashboard__button--").concat(l," ").concat(a);return React.createElement("button",{className:m,onClick:s},o)},z=a(12),q=a.n(z),k=a(194),O=a(190),y=a(191),C=a(192),j=a(193),S={};S.infinity=React.createElement("svg",{className:"timer__svg",width:"30",height:"30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{className:"timer__path",d:"M22.595 7.595c-1.976 0-3.834.77-5.204 2.136l-2.393 2.297-2.357-2.263a7.348 7.348 0 0 0-5.236-2.17 7.352 7.352 0 0 0-5.233 2.17A7.35 7.35 0 0 0 0 15.002c0 1.974.77 3.836 2.17 5.233a7.345 7.345 0 0 0 5.235 2.17c1.976 0 3.838-.77 5.204-2.14L15 17.973l2.359 2.263a7.355 7.355 0 0 0 5.236 2.17 7.34 7.34 0 0 0 5.233-2.17A7.344 7.344 0 0 0 30 14.998c0-1.98-.77-3.836-2.17-5.236a7.364 7.364 0 0 0-5.235-2.167zM9.61 17.203c-1.177 1.179-3.23 1.179-4.408 0A3.097 3.097 0 0 1 4.287 15c0-.833.324-1.613.917-2.206a3.084 3.084 0 0 1 2.2-.914c.832 0 1.616.324 2.238.945l2.264 2.177-2.297 2.2zm15.189 0c-1.178 1.18-3.199 1.208-4.44-.031l-2.264-2.177 2.295-2.203c1.18-1.18 3.233-1.18 4.41-.003.59.593.914 1.373.914 2.206s-.326 1.618-.915 2.208z",fill:"#fff"}));var x=S,M=function(e){var t=e.endTime,a=void 0===t?30:t,n=e.onEnd,c=void 0===n?null:n,i=e.disabled,r=e.play,s=e.stop,o=i||0===a||!1,l=Object(k.a)(a),m=q()(l,2),u=m[0],d=m[1],_=d.dec,v=d.reset,h=Object(O.a)(!1),f=q()(h,2),b=f[0],p=f[1];return Object(y.a)(function(){return _()},b?1e3:null),Object(C.a)(function(){return o||p(!0),function(){o||(v(),p(!1))}},[]),Object(j.a)(function(){(0===u||s)&&(v(),p(!1),c()),r&&(v(),p(!0))}),React.createElement("div",{className:"timer timer--".concat(e.theme)},e.disabled?React.createElement("div",{className:"timer__infinity"},x.infinity):React.createElement("div",{className:"timer__clock"},u))},I=function(e){return React.createElement("div",{className:"question__text"},React.createElement(n.RawHTML,null,e.children))},A=function(e){var t=e.type,a=void 0===t?"info":t,n=e.children;return React.createElement("h4",{className:"quiz__placeholder quiz__placeholder--".concat(a)},n)},P=a(44),L=a.n(P),T=a(32),D=function(e){var t=e.type,a=e.media,n=a.url,c=a.alt,i=a.id,r=React.createElement("figure",{className:"preview-media__image"},React.createElement("img",{className:"media-image-class",src:n,alt:c})),s=React.createElement("figure",{className:"preview-media__video"},React.createElement("video",{className:"media-video-class",controls:!0},React.createElement("source",{src:n}),Object(l.__)("Your browser does not support the video tag.","quizess"))),o=React.createElement(T.a,{mediaUrl:n,autoplay:!0,loop:!1,controls:!1,className:"preview-media__lottie"}),m=React.createElement(L.a,{src:"https://www.youtube.com/embed/".concat(i),allowFullScreen:!0});return React.createElement("div",{className:"preview-media"},function(){switch(t){case"video":return s;case"youtube":return m;case"lottie":return o;default:return r}}())},F=a(45),J=function(e){var t=e.playOnce,a=void 0!==t&&t,n=e.theme,c=e.onClick,i=e.questionsTotal,r=e.correctAnswers,s=e.questionStats,o=Object(F.a)(r,i),m=s.map(function(e,t){var a=e.id,n=e.correct;return React.createElement("li",{key:t,className:"stats__item"},React.createElement("div",{className:"stats__inner--overview"},t+1,"."),React.createElement("div",{className:"stats__inner--overview"},a,"."),React.createElement("div",{className:"stats__inner--overview"},n?Object(l.__)("Correct","quizess"):Object(l.__)("Incorrect","quizess")))}),u=React.createElement("div",{className:"overview__thank-you"},Object(l.__)("Your scores have been submitted, thank you for playing.","quizess"));return React.createElement("div",{className:"overview"},React.createElement("div",{className:"overview__header"},Object(l.__)("Kudos !","quizess")),a?u:React.createElement(N,{theme:n,onClick:c},Object(l.__)("Try again","quizess")),React.createElement("div",{className:"overview__footer"},React.createElement("div",{className:"quiz-accomplishment"},React.createElement("div",{className:"modal__table-title quiz-accomplishment__title"},Object(l.__)("Stats","quizess")),React.createElement("ul",{className:"quiz-accomplishment__parent"},React.createElement("li",{className:"quiz-accomplishment__item quiz-accomplishment__item-title"},React.createElement("div",{className:"quiz-accomplishment__inner quiz-accomplishment__title"},Object(l.__)("Correct","quizess")),React.createElement("div",{className:"quiz-accomplishment__inner quiz-accomplishment__title"},Object(l.__)("Total","quizess")),React.createElement("div",{className:"quiz-accomplishment__inner quiz-accomplishment__title"},Object(l.__)("Success","quizess"))),React.createElement("li",{className:"quiz-accomplishment__item"},React.createElement("div",{className:"quiz-accomplishment__inner"},r),React.createElement("div",{className:"quiz-accomplishment__inner"},i),React.createElement("div",{className:"quiz-accomplishment__inner"},"".concat(o,"%"))))),React.createElement("div",{className:"modal__stats-overview"},React.createElement("div",{className:"modal__table-title stats__table-title"},Object(l.__)("Overview","quizess")),React.createElement("ul",{className:"stats__parent"},React.createElement("li",{className:"stats__item stats__item-title"},React.createElement("div",{className:"stats__inner--overview stats__title"},Object(l.__)("Question","quizess")),React.createElement("div",{className:"stats__inner--overview stats__title"},Object(l.__)("Answer","quizess")),React.createElement("div",{className:"stats__inner--overview stats__title"},Object(l.__)("Status","quizess"))),m))))},K=a(9),H=a.n(K),W=a(10),U=a.n(W),B=a(13),G=a.n(B),Q=a(14),X=a.n(Q),Y=a(15),V=a.n(Y),Z=a(26),$=function(e){function t(e){var a;return H()(this,t),(a=G()(this,X()(t).call(this,e))).handleClickOnSubMenuLink=function(e){if(e.preventDefault(),a.props.items){var t=a.state.hasSubmenuOpen;a.setState(function(){return{hasSubmenuOpen:!t}})}else window.location=e.currentTarget.href},a.state={hasSubmenuOpen:!1},a}return V()(t,e),U()(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.url,n=e.items,c=this.state.hasSubmenuOpen,i=n||!1;return React.createElement("li",{className:"menu__item".concat(i?" has-subitems":"").concat(c?" has-menu-open":"")},React.createElement("a",{href:a,className:"menu__item__link",onClick:this.handleClickOnSubMenuLink},React.createElement(ee,{title:t})),i&&React.createElement(Z.CSSTransition,{in:c,timeout:{enter:200,exit:200},classNames:"menu__submenu",unmountOnExit:!0},React.createElement("ul",{className:"menu__submenu"},n)))}}]),t}(r.Component),ee=function(e){var t=e.title;return React.createElement("span",{className:"menu__item__title"},t)},te=function(e){var t,a=e.showMessage,n=e.successMessage,c=e.message,i=void 0===c?"":c,r=e.handleResetMessage;a&&(t=setInterval(r,3e3)),a||clearInterval(t);var s="submit__message".concat(a?" is-shown":""," ").concat(n?"is-success":"is-error");return React.createElement("div",{className:s},React.createElement("div",{className:"trait-text"},i))},ae=function(e){var t=e.theme,a=e.shouldSubmit,n=e.scoresSubmited,c=e.handleCancelClose,i=e.handleClose,r=[Object(l.__)("Get outta here and go back to your boring programs.","quizess"),Object(l.__)("Just leave. When you come back, I'll be waiting with a bat.","quizess"),Object(l.__)("Are you sure you want to quit this great quiz ?","quizess"),Object(l.__)("I wouldn't leave if I were you. Internet is much worse.","quizess"),Object(l.__)("Go ahead and leave. See if I care.","quizess"),Object(l.__)("Choose Cancel if you are brave, choose Exit to cover in shame. ","quizess"),Object(l.__)("Chickening out... already ?","quizess"),Object(l.__)("Heroes choose Cancel, Wimps choose Exit.","quizess"),Object(l.__)("So you think you can quit this easily, huh ?","quizess"),Object(l.__)("Dost thou wish to leave with such hasty abandon ?","quizess")][Math.floor(Math.random()*Math.floor(10))],s=a&&!n?Object(l.__)("If you cancel your scores will be submitted.","quizess"):"";return React.createElement("div",{className:"modal__exit-outer"},React.createElement("div",{className:"modal__exit-title"},r,s&&React.createElement("span",{className:"modal__title-helper"},s)),React.createElement("div",{className:"modal__exit-btns"},React.createElement(p,{theme:t,onClick:c},Object(l.__)("Cancel","quizess")),React.createElement(p,{theme:t,onClick:i},Object(l.__)("Exit","quizess"))))};a.d(t,"a",function(){return s}),a.d(t,"b",function(){return o}),a.d(t,"e",function(){return m}),a.d(t,"g",function(){return u}),a.d(t,"o",function(){return d}),a.d(t,"r",function(){return v}),a.d(t,"l",function(){return h}),a.d(t,"q",function(){return f}),a.d(t,"u",function(){return b}),a.d(t,"c",function(){return p}),a.d(t,"v",function(){return N}),a.d(t,"t",function(){return w}),a.d(t,"d",function(){return g}),a.d(t,"s",function(){return M}),a.d(t,"h",function(){return I}),a.d(t,"m",function(){return A}),a.d(t,"f",function(){return D}),a.d(t,"k",function(){return J}),a.d(t,"i",function(){return $}),a.d(t,"j",function(){return ee}),a.d(t,"p",function(){return te}),a.d(t,"n",function(){return ae})},32:function(e,t,a){"use strict";var n=a(9),c=a.n(n),i=a(10),r=a.n(i),s=a(13),o=a.n(s),l=a(14),m=a.n(l),u=a(15),d=a.n(u),_=a(5),v=a.n(_),h=(a(2),a(61)),f=a.n(h),b=a(0),p=a(6),E=function(e){function t(e){var a;c()(this,t),a=o()(this,m()(t).call(this,e));var n=e.className,i=void 0===n?"":n,r=e.autoplay,s=void 0===r||r,l=e.loop,u=void 0!==l&&l,d=e.controls,_=void 0===d||d;return a.className=i,a.autoplay=s,a.loop=u,a.controls=_,a.state={data:"",isStopped:!1,loaded:!1},a.renderLottie=a.renderLottie.bind(v()(v()(a))),a}return d()(t,e),r()(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.mediaUrl).then(function(e){return e.json()}).then(function(t){e.setState({data:t,loaded:!0})}).catch(function(e){})}},{key:"renderLottie",value:function(){var e=this,t={loop:this.loop,autoplay:this.autoplay,animationData:this.state.data,rendererSettings:{preserveAspectRatio:"none"}};return this.controls?React.createElement("div",{role:"presentation",className:this.className,onClick:function(){return e.setState({isStopped:!e.state.isStopped})}},React.createElement(f.a,{options:t,isStopped:this.state.isStopped})):React.createElement("div",{role:"presentation",className:this.className},React.createElement(f.a,{options:t}))}},{key:"render",value:function(){return this.state.loaded?this.renderLottie():React.createElement(p.Spinner,null)}}]),t}(b.Component);t.a=E},45:function(e,t,a){"use strict";function n(e,t){return Math.floor(100*e/t)}a.d(t,"a",function(){return n})},85:function(e,t,a){"use strict";function n(e){var t=quizessOptions.root;return fetch("".concat(t).concat(e))}function c(e,t){var a=quizessOptions.root;return fetch("".concat(a).concat(e),t)}function i(e,t){var a=quizessOptions.root,n=userLogged.nonce;return fetch("".concat(a).concat(e),{method:"POST",mode:"same-origin",credentials:"same-origin",headers:{Accept:"application/json","X-WP-Nonce":n},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)})}function r(e){var t=quizessDashboard.root;return fetch("".concat(t).concat(e))}function s(e,t){var a=quizessDashboard,n=a.root,c=a.dashboardNonce,i=a.nonce;return fetch("".concat(n).concat(e),{method:"PATCH",mode:"same-origin",credentials:"same-origin",headers:{Accept:"application/json","X-WP-Nonce":i,"dashboard-nonce":c},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)})}a.d(t,"b",function(){return n}),a.d(t,"c",function(){return c}),a.d(t,"e",function(){return i}),a.d(t,"a",function(){return r}),a.d(t,"d",function(){return s})}}]);