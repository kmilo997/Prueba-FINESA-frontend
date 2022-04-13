(self.webpackChunkvue_prueba_tecnica=self.webpackChunkvue_prueba_tecnica||[]).push([[539],{35991:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(8081),n=s.n(i),a=s(23645),r=s.n(a)()(n());r.push([t.id,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content{border-radius:0}.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]);const l=r},63914:(t,e,s)=>{var i=s(35991);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,s(45346).Z)("10204825",i,!1,{})},43539:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>k});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",[s("v-dialog",{attrs:{width:"500"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[s("v-card",[s("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v("\n                Producto\n            ")]),t._v(" "),s("v-card-text",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-layout",{attrs:{row:"",wrap:"","mb-3":"","pt-3":""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{rules:t.required,label:"SKU"},model:{value:t.product.sku,callback:function(e){t.$set(t.product,"sku",e)},expression:"product.sku"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{rules:t.required,label:"Nombre.."},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{type:"number",rules:t.required,label:"Valor.."},model:{value:t.product.value,callback:function(e){t.$set(t.product,"value",e)},expression:"product.value"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{type:"number",rules:t.required,label:"Cantidad disponible.."},model:{value:t.product.quantity_available,callback:function(e){t.$set(t.product,"quantity_available",e)},expression:"product.quantity_available"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"URL Imagen.."},model:{value:t.product.url_image,callback:function(e){t.$set(t.product,"url_image",e)},expression:"product.url_image"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-autocomplete",{attrs:{rules:t.required,"item-text":"name","item-value":"id",items:t.states,label:"Estado.."},model:{value:t.product.id_state,callback:function(e){t.$set(t.product,"id_state",e)},expression:"product.id_state"}})],1)],1)],1)],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"white--text",attrs:{color:"red"},on:{click:function(e){return t.closeModal()}}},[t._v("\n                    Cerrar\n                ")]),t._v(" "),s("v-btn",{attrs:{color:"success"},on:{click:function(e){null==t.product.id?t.saveProduct():t.modifyProduct()}}},[t._v("\n                    "+t._s(null==t.product.id?"Guardar":"Actualizar")+"\n                ")])],1)],1)],1),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h2",[t._v("Productos")])])],1),t._v(" "),s("v-layout",{attrs:{row:"",wrap:"","justify-space-between":!0}},[s("v-flex",{attrs:{xs12:"",md9:""}},[s("v-text-field",{attrs:{label:"Buscar..."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getProducts()}},model:{value:t.searcher,callback:function(e){t.searcher=e},expression:"searcher"}})],1),t._v(" "),s("v-flex",{staticClass:"mt-3",attrs:{xs12:"",md1:""}},[s("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){return t.getProducts()}}},[s("v-icon",[t._v("\n                        search\n                    ")])],1)],1),t._v(" "),s("v-flex",{staticClass:"mt-3 ",attrs:{xs12:"",md1:""}},[s("v-btn",{attrs:{color:"success",block:""},on:{click:function(e){return t.addProduct()}}},[s("v-icon",[t._v("\n                        mdi-plus\n                    ")])],1)],1),t._v(" "),1==t.loading?s("v-flex",{staticClass:"card-flex mt-3",attrs:{xs12:""}},[s("v-progress-linear",{attrs:{color:"success",indeterminate:"",rounded:"",height:"6"}})],1):s("v-flex",{attrs:{xs12:""}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.products},scopedSlots:t._u([{key:"item.action",fn:function(e){var i=e.item;return[s("v-layout",{attrs:{row:"",warp:""}},[s("v-flex",[s("v-btn",{staticClass:"white--text",attrs:{fab:"","x-small":"",color:"orange"},on:{click:function(e){return t.updateProduct(i)}}},[s("v-icon",[t._v("\n                                    mdi-pencil\n                                ")])],1),t._v(" "),s("v-btn",{staticClass:"white--text",attrs:{fab:"","x-small":"",color:"red"},on:{click:function(e){return t.removeProduct(i)}}},[s("v-icon",[t._v("\n                                    remove\n                                ")])],1)],1)],1)]}}])})],1)],1)],1)],1)};function n(t,e,s,i,n,a,r){try{var l=t[a](r),o=l.value}catch(t){return void s(t)}l.done?e(o):Promise.resolve(o).then(i,n)}function a(t){return function(){var e=this,s=arguments;return new Promise((function(i,a){var r=t.apply(e,s);function l(t){n(r,i,a,l,o,"next",t)}function o(t){n(r,i,a,l,o,"throw",t)}l(void 0)}))}}i._withStripped=!0;const r={data:function(){return{modal:!1,products:[],states:[],product:{id:null,name:null,value:null,url_image:null,id_state:null,quantity_available:0},headers:[{text:"",value:"action"},{text:"SKU",value:"sku"},{text:"Nombre",value:"name"},{text:"Valor",value:"value"},{text:"Cantidad Disp.",value:"quantity_available"},{text:"Imagen",value:"url_image"},{text:"Estado",value:"name_state"}],required:[function(t){return!!t||"Este campo es requerido"}],loading:!1,searcher:"",url_api:"https://app-prueba-finesa-backend.herokuapp.com/api/products"}},mounted:function(){this.getProducts()},methods:{addProduct:function(){this.modal=!0,this.resetProduct()},closeModal:function(){this.modal=!1,this.resetProduct()},resetProduct:function(){this.product.id=null,this.product.name=null,this.product.id_state=null,this.product.value=null,this.product.quantity_available=0},getProducts:function(){var t=this;return a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.axios.get(t.url_api,{params:{search:t.searcher}}).then((function(e){t.products=e.data.products,t.states=e.data.states,t.loading=!1})).catch((function(e){t.loading=!1,t.$swal("Error",e,"error")}));case 3:case"end":return e.stop()}}),e,this)})))()},saveProduct:function(){var t=this;return a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,t.$refs.form.validate()){e.next=4;break}return t.loading=!1,e.abrupt("return",!1);case 4:return e.next=6,t.axios.post(t.url_api,t.product).then((function(e){t.getProducts(),t.closeModal(),t.$swal("Correcto",e.data,"success"),t.loading=!1})).catch((function(e){t.$swal("Error",e,"error")}));case 6:case"end":return e.stop()}}),e,this)})))()},updateProduct:function(t){this.product.id=t.id,this.product.sku=t.sku,this.product.name=t.name,this.product.value=t.value,this.product.url_image=t.url_image,this.product.id_state=t.id_state,this.product.quantity_available=t.quantity_available,this.modal=!0},modifyProduct:function(){var t=this;return a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,t.$refs.form.validate()){e.next=4;break}return t.loading=!1,e.abrupt("return",!1);case 4:return e.next=6,t.axios.put(t.url_api+"/"+t.product.id,t.product).then((function(e){t.closeModal(),t.getProducts(),t.$swal("Correcto",e.data,"success"),t.loading=!1})).catch((function(e){t.$swal("Error",e,"error")}));case 6:case"end":return e.stop()}}),e,this)})))()},removeProduct:function(t){var e=this;return a(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e.loading=!0,s.next=3,e.axios.delete(e.url_api+"/"+t.id).then((function(t){e.getProducts(),e.$swal("Correcto",t.data,"success"),e.loading=!1})).catch((function(t){e.$swal("Error",t,"error")}));case 3:case"end":return s.stop()}}),s,this)})))()}}};var l=s(51900),o=s(43453),c=s.n(o),u=s(67416),d=s(55934),h=s(85893),p=s(5255),m=s(66530),v=s(78577),f=s(71463),x=s(60683),g=s(83240),I=s(4786),_=s(59456),b=s(56267),y=s(22515),S=s(65191),w=(0,l.Z)(r,i,[],!1,null,null,null);c()(w,{VAutocomplete:u.Z,VBtn:d.Z,VCard:h.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VContainer:m.Z,VDataTable:v.Z,VDialog:f.Z,VFlex:x.Z,VForm:g.Z,VIcon:I.Z,VLayout:_.Z,VProgressLinear:b.Z,VSpacer:y.Z,VTextField:S.Z}),w.options.__file="src/views/products.vue";const k=w.exports},67416:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o}),s(63914);var i=s(51799),n=s(65191),a=s(17559),r=s(48131);const l={...i.l,offsetY:!0,offsetOverflow:!0,transition:!1},o=i.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i.Z.options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((t=>this.getValue(t)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((t=>!this.hasItem(t))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((t=>{const e=(0,r.qF)(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)}))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:()=>!1,isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=i.Z.options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...l,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue))))},listData(){const t=i.Z.options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const s=e[this.$refs.menu.listIndex];s?this.setMenuIndex(t.findIndex((t=>t===s))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===r.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r.Do.backspace&&t!==r.Do.delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[i]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,i.Z.options.methods.clearableCallback.call(this)},genInput(){const t=n.Z.options.methods.genInput.call(this);return t.data=(0,a.ZP)(t.data,{attrs:{"aria-activedescendant":(0,r.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,r.vO)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=i.Z.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?i.Z.options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[r.Do.home,r.Do.end].includes(e)||i.Z.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){i.Z.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){i.Z.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){i.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],n=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}})}}]);