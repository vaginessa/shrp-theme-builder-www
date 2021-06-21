(window.webpackJsonp=window.webpackJsonp||[]).push([[19,7],{332:function(t,e,n){"use strict";n.r(e);var r={name:"FormColorPicker",props:{parent:{type:String,default:null},child:{type:String,required:!0},textChild:{type:String,required:!0},category:{type:String,required:!0},classes:{type:String,default:""},shouldHideDetails:{type:Boolean,default:!1},pseudo:{type:Boolean,default:!1}},data:function(){return{tempMenu:!1,fullPath:this.category+(this.parent?"."+this.parent:""),colorRules:[function(t){return!!t||"Color is required"},function(t){return 8!==t.length||"Color must be 7 or 9 characters"},function(t){return/^#[0-9a-fA-F]{6,8}$/.test(t)||"Color must be in a hex format"}]}},computed:{textModel:{get:function(){return this.$store.getters.get(this.category+(this.parent?"."+this.parent:""),this.textChild)},set:function(t){this.$store.commit("updateState",{parent:this.category+(this.parent?"."+this.parent:""),child:this.textChild,value:t})}},inputModel:{get:function(){return this.$store.getters.get(this.category+(this.parent?"."+this.parent:""),this.child)},set:function(t){this.$store.commit("updateState",{parent:this.category+(this.parent?"."+this.parent:""),child:this.child,value:t})}}}},o=n(81),c=n(106),l=n.n(c),d=n(309),h=n(398),f=n(338),m=n(436),v=n(165),x=n(437),y=n(377),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-text-field",{attrs:{value:t.$store.getters.get(t.fullPath,"input"),label:t.$store.getters.get(t.fullPath,"name"),rules:t.colorRules,outlined:"",required:"",readonly:"","hide-details":t.shouldHideDetails,classes:t.classes},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-menu",{attrs:{"v-model":t.pseudo?t.tempMenu:t.textModel,top:"","nudge-bottom":"100","nudge-left":"16","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"mt-0",attrs:{small:"",icon:""}},r),[n("v-icon",{attrs:{dark:""}},[t._v("\n            mdi-format-color-fill\n          ")])],1)]}}])},[t._v(" "),n("v-card",[n("v-card-text",{staticClass:"pa-0"},[n("v-color-picker",{attrs:{"dot-size":"20","hide-mode-switch":"",mode:"hexa",value:"#FFFFFF"},model:{value:t.inputModel,callback:function(e){t.inputModel=e},expression:"inputModel"}})],1)],1)],1)]},proxy:!0}]),model:{value:t.inputModel,callback:function(e){t.inputModel=e},expression:"inputModel"}})}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardText:f.a,VColorPicker:m.a,VIcon:v.a,VMenu:x.a,VTextField:y.a})},336:function(t,e,n){"use strict";n.r(e);var r={name:"FormCheckbox",props:{parent:{type:String,default:null},child:{type:String,required:!0},category:{type:String,required:!0},classes:{type:String,default:""},customLabel:{type:String,required:!0}},computed:{inputModel:{get:function(){return this.$store.getters.get(this.category+(this.parent?"."+this.parent:""),this.child)},set:function(t){this.$store.commit("updateState",{parent:this.category+(this.parent?"."+this.parent:""),child:this.child,value:t})}}}},o=n(81),c=n(106),l=n.n(c),d=(n(8),n(7),n(11),n(14),n(10),n(15),n(91)),h=n(1),f=(n(19),n(75),n(346),n(337),n(131)),m=n(333);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=n(339).a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return x(x({},m.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(d.a)(t,["title"]));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(f.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",x(x({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-checkbox",{class:t.classes,attrs:{label:t.customLabel},model:{value:t.inputModel,callback:function(e){t.inputModel=e},expression:"inputModel"}})}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCheckbox:y})},346:function(t,e,n){},371:function(t,e,n){"use strict";n.r(e);var r=n(132),o=n(332),c=n(336),l={name:"Step3p1",components:{FormColorPicker:o.default,FormCheckbox:c.default},data:function(){return{defaultState:r}}},d=n(81),h=n(106),f=n.n(h),m=n(320),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"5"}},[n("FormCheckbox",{attrs:{category:"settings",child:"dashboardTextColorEnabled","custom-label":"Custom Dashboard Text Color"}}),t._v(" "),t.defaultState.settings.dashboardTextColorEnabled?n("div",[n("FormColorPicker",{attrs:{category:"dashboardText",child:"input","text-child":"menu"}})],1):t._e(),t._v(" "),n("FormCheckbox",{attrs:{category:"settings",child:"dashboardSubTintEnabled","custom-label":"Dashboard Icon Background"}}),t._v(" "),t.defaultState.settings.dashboardSubTintEnabled?n("div",[n("FormColorPicker",{attrs:{category:"dashboardIcoBg",child:"input","text-child":"menu"}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{FormCheckbox:n(336).default,FormColorPicker:n(332).default}),f()(component,{VCol:m.a})}}]);