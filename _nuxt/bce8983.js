(window.webpackJsonp=window.webpackJsonp||[]).push([[23,7],{334:function(t,e,n){"use strict";n.r(e);var r={name:"FormCheckbox",props:{parent:{type:String,default:null},child:{type:String,required:!0},category:{type:String,required:!0},classes:{type:String,default:""},customLabel:{type:String,required:!0}},computed:{inputModel:{get:function(){return this.$store.getters.get(this.category+(this.parent?"."+this.parent:""),this.child)},set:function(t){this.$store.commit("updateState",{parent:this.category+(this.parent?"."+this.parent:""),child:this.child,value:t})}}}},o=n(81),c=n(106),l=n.n(c),h=(n(7),n(6),n(10),n(14),n(9),n(15),n(91)),d=n(1),m=(n(19),n(74),n(344),n(335),n(131)),f=n(331);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=n(337).a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return x(x({},f.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(h.a)(t,["title"]));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(m.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",x(x({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-checkbox",{class:t.classes,attrs:{label:t.customLabel},model:{value:t.inputModel,callback:function(e){t.inputModel=e},expression:"inputModel"}})}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCheckbox:y})},344:function(t,e,n){},372:function(t,e,n){"use strict";n.r(e);var r={name:"Step4p2",components:{FormCheckbox:n(334).default}},o=n(81),c=n(106),l=n.n(c),h=n(318),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{md:"5"}},[n("FormCheckbox",{attrs:{category:"settings",child:"batteryBarEnabled","custom-label":"Show Battery Bar"}}),t._v(" "),n("FormCheckbox",{attrs:{category:"settings",child:"roundedCornerEnabled","custom-label":"Rounded Corners"}}),t._v(" "),n("FormCheckbox",{attrs:{category:"settings",child:"navbarBackgroundEnabled","custom-label":"Nav-Bar Background"}}),t._v(" "),n("FormCheckbox",{attrs:{category:"settings",child:"dashboardTextColorEnabled","custom-label":"Dashboard Text Color"}}),t._v(" "),n("FormCheckbox",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.get("settings","dashboardTextColorEnabled"),expression:"$store.getters.get('settings', 'dashboardTextColorEnabled')"}],attrs:{category:"settings",child:"dashboardSubTintEnabled","custom-label":"Dashboard Icon BG"}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{FormCheckbox:n(334).default}),l()(component,{VCol:h.a})}}]);