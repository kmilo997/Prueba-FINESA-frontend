"use strict";(self.webpackChunkvue_prueba_tecnica=self.webpackChunkvue_prueba_tecnica||[]).push([[395],{3395:(t,r,e)=>{e.r(r),e.d(r,{default:()=>E});var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("v-container",[e("v-dialog",{attrs:{width:"500"},model:{value:t.modal,callback:function(r){t.modal=r},expression:"modal"}},[e("v-card",[e("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v("\n                        Comentario\n                    ")]),t._v(" "),e("v-card-text",[e("v-form",{ref:"form",attrs:{"lazy-validation":""}},[e("v-layout",{attrs:{row:"",wrap:"","mb-3":"","pt-3":""}},[e("v-flex",{attrs:{xs12:""}},[e("v-autocomplete",{attrs:{items:t.posts,"item-value":"id","item-text":"titulo",rules:t.requerido,label:"Post.."},model:{value:t.comentario.posts_id,callback:function(r){t.$set(t.comentario,"posts_id",r)},expression:"comentario.posts_id"}})],1),t._v(" "),e("v-flex",{attrs:{xs12:""}},[e("v-textarea",{attrs:{rows:6,rules:t.requerido,label:"contenido.."},model:{value:t.comentario.contenido,callback:function(r){t.$set(t.comentario,"contenido",r)},expression:"comentario.contenido"}})],1)],1)],1)],1),t._v(" "),e("v-divider"),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{staticClass:"white--text",attrs:{color:"red"},on:{click:function(r){return t.cerrarModal()}}},[t._v("\n                            Cerrar\n                        ")]),t._v(" "),e("v-btn",{attrs:{color:"success"},on:{click:function(r){null==t.comentario.id?t.guardarItem():t.actualizarItem()}}},[t._v("\n                            "+t._s(null==t.comentario.id?"Guardar":"Actualizar")+"\n                        ")])],1)],1)],1),t._v(" "),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("h2",[t._v("Comentarios")])])],1),t._v(" "),e("v-layout",{attrs:{row:"",wrap:"","justify-space-between":!0}},[e("v-flex",{attrs:{xs12:"",md9:""}},[e("v-text-field",{attrs:{label:"Buscar..."},on:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.getData()}},model:{value:t.buscador,callback:function(r){t.buscador=r},expression:"buscador"}})],1),t._v(" "),e("v-flex",{staticClass:"mt-3",attrs:{xs12:"",md1:""}},[e("v-btn",{attrs:{color:"primary",block:""},on:{click:function(r){return t.getData()}}},[e("v-icon",[t._v("\n                        search\n                    ")])],1)],1),t._v(" "),e("v-flex",{staticClass:"mt-3 ",attrs:{xs12:"",md1:""}},[e("v-btn",{attrs:{color:"success",block:""},on:{click:function(r){return t.agregar()}}},[e("v-icon",[t._v("\n                        mdi-plus\n                    ")])],1)],1),t._v(" "),1==t.cargando?e("v-flex",{staticClass:"card-flex mt-3",attrs:{xs12:""}},[e("v-progress-linear",{attrs:{color:"success",indeterminate:"",rounded:"",height:"6"}})],1):e("v-flex",{attrs:{xs12:""}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.comentarios},scopedSlots:t._u([{key:"item.action",fn:function(r){var a=r.item;return[e("v-layout",{attrs:{row:"",warp:""}},[e("v-flex",[e("v-btn",{staticClass:"white--text",attrs:{fab:"","x-small":"",color:"orange"},on:{click:function(r){return t.editarItem(a)}}},[e("v-icon",[t._v("\n                                    mdi-pencil\n                                ")])],1),t._v(" "),e("v-btn",{staticClass:"white--text",attrs:{fab:"","x-small":"",color:"red"},on:{click:function(r){return t.eliminarItem(a)}}},[e("v-icon",[t._v("\n                                    remove\n                                ")])],1)],1)],1)]}}])})],1)],1)],1)],1)};function n(t,r,e,a,n,o,c){try{var s=t[o](c),i=s.value}catch(t){return void e(t)}s.done?r(i):Promise.resolve(i).then(a,n)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(a,o){var c=t.apply(r,e);function s(t){n(c,a,o,s,i,"next",t)}function i(t){n(c,a,o,s,i,"throw",t)}s(void 0)}))}}a._withStripped=!0;const c={data:function(){return{modal:!1,posts:[],comentarios:[],comentario:{id:null,posts_id:null,contenido:""},headers:[{text:"Acciones",value:"action"},{text:"Post",value:"post"},{text:"Comentario",value:"contenido"}],requerido:[function(t){return!!t||"Este campo es requerido"}],url_api:"https://app-opper-backend.herokuapp.com/api/comentarios",url_api_posts:"https://app-opper-backend.herokuapp.com/api/posts",cargando:!1,buscador:""}},mounted:function(){this.getData(),this.getPosts()},methods:{agregar:function(){this.modal=!0,this.resetItem()},cerrarModal:function(){this.modal=!1,this.resetItem()},resetItem:function(){this.comentario.id=null,this.comentario.posts_id=null,this.comentario.contenido=""},getData:function(){var t=this;return o(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.cargando=!0,r.next=3,t.axios.get(t.url_api,{params:{search:t.buscador}}).then((function(r){t.comentarios=r.data.comentarios,t.cargando=!1})).catch((function(r){t.cargando=!1,t.$swal("Error",r,"error")}));case 3:case"end":return r.stop()}}),r,this)})))()},getPosts:function(){var t=this;return o(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.cargando=!0,r.next=3,t.axios.get(t.url_api_posts,{params:{search:t.buscador}}).then((function(r){t.posts=r.data.posts,t.cargando=!1})).catch((function(r){t.cargando=!1,t.$swal("Error",r,"error")}));case 3:case"end":return r.stop()}}),r,this)})))()},guardarItem:function(){var t=this;return o(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.cargando=!0,t.$refs.form.validate()){r.next=4;break}return t.cargando=!1,r.abrupt("return",!1);case 4:return r.next=6,t.axios.post(t.url_api,t.comentario).then((function(r){t.getData(),t.cerrarModal(),t.$swal("Correcto",r.data,"success"),t.cargando=!1})).catch((function(r){var e=r;try{var a=r.response.data;Object.keys(a).forEach((function(t){a[t].forEach((function(t){e=e+": "+t}))}))}catch(t){e=r.response.data.error}console.log(e),t.$swal("Error",e,"error"),t.cargando=!1}));case 6:case"end":return r.stop()}}),r,this)})))()},editarItem:function(t){this.comentario.id=t.id,this.comentario.posts_id=t.id_post,this.comentario.contenido=t.contenido,this.modal=!0},actualizarItem:function(){var t=this;return o(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.cargando=!0,t.$refs.form.validate()){r.next=4;break}return t.cargando=!1,r.abrupt("return",!1);case 4:return r.next=6,t.axios.put(t.url_api+"/"+t.comentario.id,t.comentario).then((function(r){t.cerrarModal(),t.getData(),t.$swal("Correcto",r.data,"success"),t.cargando=!1})).catch((function(r){var e="";try{e=r.response.data.error}catch(t){}console.log("err.response.data",r);try{Object.keys("").forEach((function(t){""[t].forEach((function(t){e=e+": "+t}))}))}catch(t){}console.log("mensaje",e),t.cargando=!1,t.$swal("Error","".concat(e),"error")}));case 6:case"end":return r.stop()}}),r,this)})))()},eliminarItem:function(t){var r=this;return o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.cargando=!0,e.next=3,r.axios.delete(r.url_api+"/"+t.id).then((function(t){r.getData(),r.$swal("Correcto",t.data,"success"),r.cargando=!1})).catch((function(t){var e="",a=t.response.data;Object.keys(a).forEach((function(t){a[t].forEach((function(t){e=e+": "+t}))})),r.$swal("Error",t,"error"),r.cargando=!1}));case 3:case"end":return e.stop()}}),e,this)})))()}}};var s=e(51900),i=e(43453),u=e.n(i),l=e(67416),d=e(55934),m=e(85893),v=e(5255),f=e(66530),p=e(61294),h=e(71463),x=e(18176),g=e(60683),_=e(83240),b=e(4786),w=e(59456),k=e(56267),y=e(22515),C=e(65191),V=e(39225),Z=(0,s.Z)(c,a,[],!1,null,null,null);u()(Z,{VAutocomplete:l.Z,VBtn:d.Z,VCard:m.Z,VCardActions:v.h7,VCardText:v.ZB,VCardTitle:v.EB,VContainer:f.Z,VDataTable:p.Z,VDialog:h.Z,VDivider:x.Z,VFlex:g.Z,VForm:_.Z,VIcon:b.Z,VLayout:w.Z,VProgressLinear:k.Z,VSpacer:y.Z,VTextField:C.Z,VTextarea:V.Z}),Z.options.__file="src/views/comentarios.vue";const E=Z.exports}}]);