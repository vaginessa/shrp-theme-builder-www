(window.webpackJsonp=window.webpackJsonp||[]).push([[25,27],{364:function(t,e,n){"use strict";n.r(e);var o={name:"FormSwitch",props:{parent:{type:String,default:null},child:{type:String,required:!0},category:{type:String,required:!0},classes:{type:String,default:""},customLabel:{type:String,default:null},shouldHideDetails:{type:Boolean,default:!1}},computed:{switchModel:{get:function(){return this.$store.getters.get(this.category+(this.parent?"."+this.parent:""),this.child)},set:function(t){this.$store.commit("updateState",{parent:this.category+(this.parent?"."+this.parent:""),child:this.child,value:t})}}}},c=n(88),r=n(117),h=n.n(r),l=n(410),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-switch",{class:t.classes,attrs:{inset:"","hide-details":t.shouldHideDetails,label:t.customLabel?t.customLabel:t.parent.charAt(0).toUpperCase()+t.parent.slice(1)},model:{value:t.switchModel,callback:function(e){t.switchModel=e},expression:"switchModel"}})}),[],!1,null,null,null);e.default=component.exports;h()(component,{VSwitch:l.a})},379:function(t,e,n){},395:function(t,e,n){"use strict";n.r(e);var o={name:"Step5p1",components:{FormSwitch:n(364).default}},c=n(88),r=n(117),h=n.n(r),l=n(340),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"pt-4",attrs:{cols:"12",md:"6"}},[e("FormSwitch",{attrs:{category:"splash",child:"custom","custom-label":"Custom Splash Logo",classes:"ma-0 pa-0","should-hide-details":!0}})],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{FormSwitch:n(364).default}),h()(component,{VCol:l.a})},410:function(t,e,n){"use strict";n(10),n(9),n(13),n(17),n(12),n(18);var o=n(101),c=n(1),r=(n(258),n(357),n(379),n(359)),h=n(353),l=n(2);function d(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),function(t){var e=t.touchstartX,n=t.touchendX,o=t.touchstartY,c=t.touchendY;t.offsetX=n-e,t.offsetY=c-o,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&c<o-16&&t.up(t),t.down&&c>o+16&&t.down(t))}(e)}function f(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return d(t,e)},touchmove:function(t){return function(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var v={inserted:function(t,e,n){var o=e.value,c=o.parent?t.parentElement:t,r=o.options||{passive:!0};if(c){var h=f(e.value);c._touchHandlers=Object(c._touchHandlers),c._touchHandlers[n.context._uid]=h,Object(l.r)(h).forEach((function(t){c.addEventListener(t,h[t],r)}))}},unbind:function(t,e,n){var o=e.value.parent?t.parentElement:t;if(o&&o._touchHandlers){var c=o._touchHandlers[n.context._uid];Object(l.r)(c).forEach((function(t){o.removeEventListener(t,c[t])})),delete o._touchHandlers[n.context._uid]}}},m=n(184),w=n(150);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=r.a.extend({name:"v-switch",directives:{Touch:v},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return y(y({},h.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,["title"]));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",y(y({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",y({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",y({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(m.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(w.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===l.q.left&&this.isActive||t.keyCode===l.q.right&&!this.isActive)&&this.onChange()}}})}}]);