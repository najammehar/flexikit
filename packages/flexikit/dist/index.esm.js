import n,{useState as e,useEffect as t}from"react";function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=Array(e);t<e;t++)a[t]=n[t];return a}function o(n,e,t){return(e=function(n){var e=function(n,e){if("object"!=typeof n||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var a=t.call(n,e||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"==typeof e?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var a,o,r,i,s=[],l=!0,c=!1;try{if(r=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;l=!1}else for(;!(l=(a=r.call(t)).done)&&(s.push(a.value),s.length!==e);l=!0);}catch(n){c=!0,o=n}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}}(n,e)||function(n,e){if(n){if("string"==typeof n)return a(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}("*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.14 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden=\"until-found\"])) {\n  display: none;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.bottom-0 {\n  bottom: 0px;\n}\r\n.left-0 {\n  left: 0px;\n}\r\n.left-1\\/2 {\n  left: 50%;\n}\r\n.right-0 {\n  right: 0px;\n}\r\n.top-0 {\n  top: 0px;\n}\r\n.top-1\\/2 {\n  top: 50%;\n}\r\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\r\n.block {\n  display: block;\n}\r\n.inline-block {\n  display: inline-block;\n}\r\n.flex {\n  display: flex;\n}\r\n.hidden {\n  display: none;\n}\r\n.size-\\[15\\%\\] {\n  width: 15%;\n  height: 15%;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.h-screen {\n  height: 100vh;\n}\r\n.w-16 {\n  width: 4rem;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.origin-bottom {\n  transform-origin: bottom;\n}\r\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.gap-1 {\n  gap: 0.25rem;\n}\r\n.rounded-full {\n  border-radius: 9999px;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.border-4 {\n  border-width: 4px;\n}\r\n.border-solid {\n  border-style: solid;\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.text-left {\n  text-align: left;\n}\r\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\r\n.opacity-40 {\n  opacity: 0.4;\n}\r\n.opacity-55 {\n  opacity: 0.55;\n}\r\n.opacity-70 {\n  opacity: 0.7;\n}\r\n.opacity-85 {\n  opacity: 0.85;\n}\r\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\r\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\r\n");var l=30,c="#3498db",d="#e74c3c";function m(e){var t=e.color,a=void 0===t?c:t,o=e.size,r=void 0===o?90:o,s=e.strokeWidth,l=void 0===s?3:s,d=e.duration,m=void 0===d?"2s":d,u=e.loading,f=void 0===u||u,h={animation:"spin ".concat(m," linear infinite")};return n.createElement("div",{className:"".concat(f?"flex":"hidden"),style:{height:"".concat(r,"px"),width:"".concat(r,"px")}},n.createElement("style",null,"\n    @keyframes spin {\n      0% { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n  "),n.createElement("div",{className:"flex justify-center items-center w-full h-full rounded-full",style:i(i({},h),{},{borderTop:"".concat(l,"px solid ").concat(a),borderRight:"".concat(l,"px solid transparent"),borderBottom:"".concat(l,"px solid transparent"),borderLeft:"".concat(l,"px solid transparent")})},n.createElement("div",{className:"flex justify-center items-center rounded-full",style:i(i({},h),{},{borderTop:"".concat(l,"px solid transparent"),borderRight:"".concat(l,"px solid ").concat(a),borderBottom:"".concat(l,"px solid transparent"),borderLeft:"".concat(l,"px solid transparent"),height:"90%",width:"90%"})},n.createElement("div",{className:"rounded-full",style:i(i({},h),{},{borderTop:"".concat(l,"px solid transparent"),borderRight:"".concat(l,"px solid transparent"),borderBottom:"".concat(l,"px solid ").concat(a),borderLeft:"".concat(l,"px solid transparent"),height:"90%",width:"90%"})}))))}function u(e){var t=e.duration,a=void 0===t?"2s":t,o=e.size,r=void 0===o?45:o,s=e.color,l=void 0===s?c:s,m=e.secondaryColor,u=void 0===m?d:m,f=e.loading,h=void 0===f||f,p=r/2,b={animation:"degree ".concat(a," ease-in-out infinite")},g={animation:"degree135 ".concat(a," ease-in-out infinite")},y={animation:"degree225 ".concat(a," ease-in-out infinite")},w={animation:"degree315 ".concat(a," ease-in-out infinite")},v={animation:"spin ".concat(a," ease-in-out infinite")},x={width:p,height:p};return n.createElement("div",{className:"".concat(h?"block":"hidden"),style:i(i({},v),{},{height:"".concat(r),width:"".concat(r)})},n.createElement("div",{className:"flex gap-1 mb-1"},n.createElement("style",null,"\n        @keyframes degree {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translate(-25%, -25%); }\n        }\n        @keyframes degree135 {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translate(25%, -25%); }\n        }\n        @keyframes degree225 {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translate(25%, 25%); }\n        }\n        @keyframes degree315 {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translate(-25%, 25%); }\n        }\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n    "),n.createElement("div",{style:i(i(i({},x),b),{},{backgroundColor:l}),className:"rounded-full"}),n.createElement("div",{style:i(i(i({},x),g),{},{backgroundColor:u}),className:"rounded-full"})),n.createElement("div",{className:"flex gap-1"},n.createElement("div",{style:i(i(i({},x),w),{},{backgroundColor:u}),className:"rounded-full"}),n.createElement("div",{style:i(i(i({},x),y),{},{backgroundColor:u}),className:"rounded-full"})))}function f(e){var t=e.size,a=void 0===t?60:t,o=e.color,r=void 0===o?c:o,s=e.secondaryColor,l=void 0===s?d:s,m=e.duration,u=void 0===m?"1s":m,f=e.loading,h=void 0===f||f,p={width:"".concat(15,"px"),height:"".concat(15,"px"),borderRadius:"50%",display:"inline-block",margin:"0 ".concat(15/8,"px"),animation:"pulse ".concat(u," ease-in-out infinite")},b={animationDelay:"0s",backgroundColor:r},g={animationDelay:"0.2s",backgroundColor:l},y={animationDelay:"0.4s",backgroundColor:r};return n.createElement("div",{className:"".concat(h?"flex":"hidden"," items-center justify-center"),style:{width:a,height:a}},n.createElement("style",null,"\n    @keyframes pulse {\n      0%, 100% {\n        transform: scale(1);\n        opacity: 1;\n      }\n      50% {\n        transform: scale(1.5);\n        opacity: 0.5;\n      }\n    }\n  "),n.createElement("div",{className:"flex justify-center items-center"},n.createElement("div",{style:i(i({},p),b)}),n.createElement("div",{style:i(i({},p),g)}),n.createElement("div",{style:i(i({},p),y)})))}var h=function(e){var t=e.size,a=void 0===t?60:t,o=e.color,r=void 0===o?c:o,i=e.duration,s=void 0===i?"1s":i,l=e.loading,d=void 0===l||l,m=(a-15)/2;return n.createElement("div",{className:"relative ".concat(d?"block":"hidden"),style:{width:"".concat(a,"px"),height:"".concat(a,"px")}},n.createElement("style",null,"\n    @keyframes pulse {\n      0%, 100% { transform: scale(0); opacity: 0.5; }\n      50% { transform: scale(1); opacity: 1; }\n    }\n  "),Array.from({length:8}).map((function(e,t){var a=t/8*2*Math.PI,o=m*Math.cos(a),i=m*Math.sin(a);return n.createElement("div",{key:t,className:"absolute rounded-full",style:{width:"".concat(15,"px"),height:"".concat(15,"px"),backgroundColor:r.startsWith("#")?r:"var(--tw-".concat(r,", ").concat(r,")"),top:"calc(50% - ".concat(7.5,"px + ").concat(i,"px)"),left:"calc(50% - ".concat(7.5,"px + ").concat(o,"px)"),animation:"pulse ".concat(s," ease-in-out infinite"),animationDelay:"".concat(.125*t,"s")}})})))};function p(e){var t=e.size,a=void 0===t?90:t,o=e.duration,r=void 0===o?"1s":o,s=e.color,l=void 0===s?c:s,d=e.loading,m=void 0===d||d,u={animation:"scaleY ".concat(r," ease-in infinite"),width:"".concat(a/25,"px"),height:"20%",backgroundColor:l};return n.createElement(n.Fragment,null,n.createElement("div",{className:"".concat(m?"flex":"hidden"," justify-between items-center"),style:{width:"".concat(a,"px"),height:"".concat(a,"px")}},n.createElement("style",null,"\n      @keyframes scaleY {\n          0%, 100%{ transform: scaleY(1); }\n          50% { transform: scaleY(4); }\n      }\n      "),n.createElement("div",{className:"bg-white",style:i(i({},u),{},{animationDelay:"0.1s"})}),n.createElement("div",{className:"bg-white",style:i(i({},u),{},{animationDelay:"0.2s"})}),n.createElement("div",{className:"bg-white",style:i(i({},u),{},{animationDelay:"0.3s"})}),n.createElement("div",{className:"bg-white",style:i(i({},u),{},{animationDelay:"0.1s"})}),n.createElement("div",{className:"bg-white",style:i(i({},u),{},{animationDelay:"0.3s"})}),n.createElement("div",{className:"bg-white",style:i(i({},u),{},{animationDelay:"0.2s"})}),n.createElement("div",{className:"bg-white",style:i(i({},u),{},{animationDelay:"0.1s"})}),n.createElement("div",{className:"bg-white",style:i(i({},u),{},{animationDelay:"0.2s"})}),n.createElement("div",{className:"bg-white",style:i(i({},u),{},{animationDelay:"0.3s"})})))}function b(e){var t=e.size,a=void 0===t?60:t,o=e.color,r=void 0===o?c:o,s=e.duration,l=void 0===s?"1s":s,d=e.loading,m=void 0===d||d,u=a/6*1.5,f={width:"".concat(u,"px"),height:"".concat(u,"px"),borderRadius:"50%",backgroundColor:r,display:"inline-block",animation:"wave ".concat(l," ease-in-out infinite"),margin:"0 ".concat(u/10,"px")};return n.createElement("div",{className:m?"flex justify-center items-center":"hidden"},n.createElement("style",null,"\n    @keyframes wave {\n      0%, 100% { transform: translateY(0); }\n      50% { transform: translateY(-20px); }\n    }\n  "),n.createElement("div",{style:i(i({},f),{animationDelay:"0s"})}),n.createElement("div",{style:i(i({},f),{animationDelay:"0.2s"})}),n.createElement("div",{style:i(i({},f),{animationDelay:"0.4s"})}))}var g=function(e){var t=e.color,a=void 0===t?c:t,o=e.size,r=void 0===o?60:o,i=e.squareCount,s=void 0===i?4:i,l=e.duration,d=void 0===l?"4s":l,m=e.loading,u=void 0===m||m;return n.createElement("div",{className:"relative ".concat(u?"flex":"hidden"," items-center justify-center"),style:{height:"".concat(r,"px"),width:"".concat(r,"px")}},n.createElement("style",null,"\n    @keyframes spin-and-scale {\n      0% {\n        transform: rotate(0deg) scale(1);\n      }\n      50% {\n        transform: rotate(180deg) scale(0.5);\n      }\n      100% {\n        transform: rotate(360deg) scale(1);\n      }\n    }\n  "),Array.from({length:s},(function(e,t){return function(e){var t=r*(1-.2*e),o="".concat(e/s*parseFloat(d),"s"),i={height:"".concat(t,"px"),width:"".concat(t,"px"),borderColor:a,animation:"spin-and-scale ".concat(d," ease-in-out infinite"),animationDelay:o};return n.createElement("div",{key:e,className:"absolute border-4 border-solid",style:i})}(t)})))};function y(e){var t=e.size,a=void 0===t?60:t,o=e.color,r=void 0===o?c:o,s=e.secondaryColor,l=void 0===s?d:s,m=e.duration,u=void 0===m?"1.5s":m,f=e.loading,h=void 0===f||f,p={position:"absolute",borderRadius:"50%",animation:"pulsate ".concat(u," ease-out infinite")},b={animationDelay:"0s",backgroundColor:r,height:"".concat(a,"px"),width:"".concat(a,"px")},g={animationDelay:"".concat(parseFloat(u)/2,"s"),backgroundColor:l,height:"".concat(a,"px"),width:"".concat(a,"px")};return n.createElement("div",{className:"".concat(h?"flex":"hidden"," relative items-center justify-center"),style:{height:"".concat(a,"px"),width:"".concat(a,"px")}},n.createElement("style",null,"\n    @keyframes pulsate {\n      0% { transform: scale(0.2); opacity: 1; }\n      50% { transform: scale(1.2); opacity: 0.6; }\n      100% { transform: scale(1); opacity: 0; }\n    }\n  "),n.createElement("div",{style:i(i({},p),b)}),n.createElement("div",{style:i(i({},p),g)}))}function w(e){var t=e.size,a=void 0===t?60:t,o=e.color,r=void 0===o?c:o,s=e.secondaryColor,l=void 0===s?d:s,m=e.duration,u=void 0===m?"2s":m,f=e.loading,h=void 0===f||f,p={animation:"block ".concat(u," ease-in-out infinite")},b={animation:"block2 ".concat(u," ease-in-out infinite")},g=a/2;return n.createElement("div",{className:"relative ".concat(h?"block":"hidden"),style:{height:"".concat(a,"px"),width:"".concat(a,"px")}},n.createElement("style",null,"\n        @keyframes block {\n            0% {\n                top: 0; left: 0;\n            }\n            25% {\n                top : 0; left: 50%;\n            }\n            50% {\n                top: 50%; left: 50%;\n            }\n            75% {\n                top: 50%; left: 0;\n            }\n            100% {\n                top: 0; left: 0;\n            }\n        }\n        @keyframes block2 {\n            0% {\n                bottom: 0; right: 0;\n            }\n            25% {\n                bottom : 0; right: 50%;\n            }\n            50% {\n                bottom: 50%; right: 50%;\n            }\n            75% {\n                bottom: 50%; right: 0;\n            }\n            100% {\n                bottom: 0; right: 0;\n            }\n        }\n    "),n.createElement("div",{className:"absolute top-0 left-0",style:i({height:"".concat(g,"px"),width:"".concat(g,"px"),backgroundColor:r},p)}),n.createElement("div",{className:"absolute bottom-0 right-0",style:i({height:"".concat(g,"px"),width:"".concat(g,"px"),backgroundColor:l},b)}))}var v=function(a){var o=a.loading,r=void 0===o||o,i=a.size,d=void 0===i?l:i,m=a.color,u=void 0===m?c:m,f=s(e(""),2),h=f[0],p=f[1];if(t((function(){if(r){var n=setInterval((function(){p((function(n){return n.length>=3?"":n+"."}))}),500);return function(){return clearInterval(n)}}}),[r]),!r)return null;var b={fontSize:"".concat(d,"px"),fontFamily:"'Playfair Display', serif",color:u,textShadow:"1px 1px 2px rgba(0,0,0,0.1)"};return n.createElement("div",{className:"flex justify-center items-center h-screen"},n.createElement("span",{className:"tracking-wide",style:b},"Loading",n.createElement("span",{className:"inline-block w-16 text-left"},h)))},x=function(e){var t=e.color,a=void 0===t?c:t,o=e.size,r=void 0===o?90:o,i=e.hourHandDuration,s=void 0===i?30:i,l=e.minuteHandDuration,d=void 0===l?1:l,m=e.loading,u=void 0===m||m,f=r/2,h=Math.max(1,Math.floor(r/40)),p=Math.max(1,Math.floor(r/40)),b=.4*f;return n.createElement("div",{className:"relative rounded-full ".concat(u?"block":"hidden"),style:{width:"".concat(f,"px"),height:"".concat(f,"px"),border:"".concat(h,"px solid ").concat(a),transform:"scale(2)"}},n.createElement("style",null,"\n          @keyframes dialRotate {\n          0% { transform: translate(-50%, -100%) rotate(0deg); }\n          100% { transform: translate(-50%, -100%) rotate(360deg); }\n        }"),n.createElement("div",{className:"absolute size-[15%] rounded-full top-1/2 left-1/2",style:{background:a,transform:"translate(-50%, -50%)"}}),n.createElement("div",{className:"absolute top-1/2 left-1/2 origin-bottom rounded-full",style:{width:"".concat(p,"px"),height:"".concat(b,"px"),background:a,transform:"translate(-50%, -100%)",animation:"dialRotate ".concat(s,"s linear infinite")}}),n.createElement("div",{className:"absolute top-1/2 left-1/2 origin-bottom rounded-full",style:{width:"".concat(p,"px"),height:"".concat(b,"px"),background:a,transform:"translate(-50%, -100%)",animation:"dialRotate ".concat(d,"s linear infinite")}}))},k=function(e){var t=e.size,a=void 0===t?10:t,o=e.duration,r=void 0===o?"1.5s":o,s=e.color,l=void 0===s?c:s,d=e.loading,m=void 0===d||d,u={animation:"rotating ".concat(r," infinite ")};return n.createElement("div",{className:"relative ".concat(m?"block":"hidden"),style:{width:"".concat(a,"px"),height:"".concat(a,"px")}},n.createElement("style",null,"\n    @keyframes rotating {\n        0% {\n          transform: rotate(0deg) translateY(-200%);\n        }\n        60%, 100% {\n          transform: rotate(360deg) translateY(-200%);\n        }\n    }\n    "),n.createElement("div",{className:"w-full h-full rounded-full",style:i(i({},u),{},{animationDelay:"0.15s",backgroundColor:"".concat(l)})}),n.createElement("div",{className:"w-full h-full rounded-full opacity-85",style:i(i({},u),{},{animationDelay:"0.3s",backgroundColor:"".concat(l)})}),n.createElement("div",{className:"w-full h-full rounded-full opacity-70",style:i(i({},u),{},{animationDelay:"0.45s",backgroundColor:"".concat(l)})}),n.createElement("div",{className:"w-full h-full rounded-full opacity-55",style:i(i({},u),{},{animationDelay:"0.60s",backgroundColor:"".concat(l)})}),n.createElement("div",{className:"w-full h-full rounded-full opacity-40",style:i(i({},u),{},{animationDelay:"0.75s",backgroundColor:"".concat(l)})}))};export{p as AudioWave,w as Blocks,x as Clock,h as Dots,y as EmergingCircles,v as LoadingText,f as PulsingDots,u as SpinningCircles,g as SpinningSquares,k as SyncRotatingDots,m as TripleSpin,b as WavePulseLoader};
//# sourceMappingURL=index.esm.js.map
