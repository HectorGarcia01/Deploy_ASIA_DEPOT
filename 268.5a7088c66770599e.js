"use strict";(self.webpackChunkFrontend_ASIA_DEPOT=self.webpackChunkFrontend_ASIA_DEPOT||[]).push([[268],{7268:(q,g,a)=>{a.r(g),a.d(g,{ShoppingCartModule:()=>O});var u=a(6895),n=a(433),d=a(5808),l=a(1548),t=a(8256),m=a(3650),_=a(6785),h=a(6428),b=a(2150),C=a(3310);function v(o,i){1&o&&(t.TgZ(0,"div",6)(1,"div",7)(2,"h5"),t._uU(3," Tu carrito de compras est\xe1 vac\xedo, intenta agregar un producto. "),t.qZA(),t._UZ(4,"img",8),t.qZA()())}function f(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td",12)(2,"div",14)(3,"div",15),t._UZ(4,"img",16),t.qZA(),t.TgZ(5,"div",17),t._uU(6),t.qZA()()(),t.TgZ(7,"td",18),t._uU(8),t.qZA(),t.TgZ(9,"td",12)(10,"div",19)(11,"div",20)(12,"button",21),t.NdJ("click",function(){const s=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.decreaseQuantity(s))}),t._UZ(13,"i",22),t.qZA()(),t._UZ(14,"input",23),t.TgZ(15,"div",20)(16,"button",24),t.NdJ("click",function(){const s=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.increaseQuantity(s))}),t._UZ(17,"i",25),t.qZA()()()(),t.TgZ(18,"td",18),t._uU(19),t.qZA(),t.TgZ(20,"td",18)(21,"button",26),t.NdJ("click",function(){const s=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.updateProductCart(s.producto.id,s.Cantidad_Producto))}),t._UZ(22,"i",27),t.qZA()(),t.TgZ(23,"td",18)(24,"button",28),t.NdJ("click",function(){const s=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.deleteProductCart(s.producto.id))}),t._UZ(25,"i",29),t.qZA()()()}if(2&o){const e=i.$implicit;t.xp6(6),t.hij(" ",e.producto.nombre_producto," "),t.xp6(2),t.hij("Q.",e.Precio_Unitario,""),t.xp6(6),t.s9C("value",e.Cantidad_Producto),t.xp6(5),t.hij("Q.",e.Subtotal_Venta,"")}}function x(o,i){if(1&o&&(t.TgZ(0,"table",9)(1,"thead",10)(2,"tr",11)(3,"th"),t._uU(4,"Productos"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Precio"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Cantidad"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Subtotal"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Actualizar"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Eliminar"),t.qZA()()(),t.TgZ(15,"tbody",12),t.YNc(16,f,26,4,"tr",13),t.qZA()()),2&o){const e=t.oxw();t.xp6(16),t.Q6J("ngForOf",e.shoppingDetailCart.detalles_venta)}}function Z(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",30)(1,"div",31)(2,"h5",32),t._uU(3,"Resumen de la compra"),t.qZA(),t.TgZ(4,"div",33)(5,"div",34)(6,"h5"),t._uU(7,"Total"),t.qZA(),t.TgZ(8,"h5"),t._uU(9),t.qZA()(),t.TgZ(10,"div",35)(11,"div",36)(12,"button",37),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.onSubmit())}),t._uU(13,"Procesar compra"),t.qZA(),t.TgZ(14,"button",38),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.deleteShoppingCart())}),t._uU(15,"Vaciar carrito"),t.qZA()()()()()()}if(2&o){const e=t.oxw();t.xp6(9),t.hij("Q.",e.shoppingDetailCart.Total_Factura,"")}}function S(o,i){if(1&o&&(t.TgZ(0,"div",30)(1,"div",39)(2,"h5",32),t._uU(3,"Informaci\xf3n personal"),t.qZA(),t.TgZ(4,"div",40)(5,"p")(6,"strong"),t._uU(7,"Nombre: "),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"p")(10,"strong"),t._uU(11,"Tel\xe9fono: "),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p")(14,"strong"),t._uU(15,"NIT: "),t.qZA(),t._uU(16),t.qZA(),t.TgZ(17,"p")(18,"strong"),t._uU(19,"Direcci\xf3n: "),t.qZA(),t._uU(20),t.qZA(),t.TgZ(21,"div",35)(22,"a",41),t._uU(23,"Actualizar Datos"),t.qZA()()()()()),2&o){const e=t.oxw();t.xp6(8),t.AsE("",e.customer.Nombre_Cliente," ",e.customer.Apellido_Cliente,""),t.xp6(4),t.Oqu(e.customer.Telefono_Cliente),t.xp6(4),t.Oqu(e.customer.NIT_Cliente),t.xp6(4),t.Oqu(e.customer.Direccion_General),t.xp6(2),t.Q6J("routerLink","/profile/update")}}function A(o,i){if(1&o&&(t.TgZ(0,"option",49),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij("",e.Nombre_Envio," ")}}function P(o,i){if(1&o&&(t.TgZ(0,"option",49),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij("",e.Tipo_Pago," ")}}function T(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",30)(1,"div",31)(2,"h5",32),t._uU(3,"Informaci\xf3n de env\xedo"),t.qZA(),t.TgZ(4,"form",42),t.NdJ("ngSubmit",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.onSubmit())}),t.TgZ(5,"div",43)(6,"select",44)(7,"option",45),t._uU(8,"Selecciona un tipo de env\xedo"),t.qZA(),t.YNc(9,A,2,2,"option",46),t.qZA(),t.TgZ(10,"label",47),t._uU(11,"Tipo de env\xedo"),t.qZA()(),t.TgZ(12,"div",43)(13,"select",48)(14,"option",45),t._uU(15,"Selecciona un m\xe9todo de pago"),t.qZA(),t.YNc(16,P,2,2,"option",46),t.qZA(),t.TgZ(17,"label",47),t._uU(18,"M\xe9todo de pago"),t.qZA()()()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("formGroup",e.registerForm),t.xp6(5),t.Q6J("ngForOf",e.shipping_type),t.xp6(7),t.Q6J("ngForOf",e.payment_method)}}const y=[{path:"",redirectTo:"checkout/cart",pathMatch:"full"},{path:"checkout/cart",component:(()=>{class o{constructor(e,r,c){this.shoppingCartService=e,this.userService=r,this.customAlertService=c,this.shoppingDetailCart={},this.shipping_type=[],this.payment_method=[],this.customer={},this.noneProducts=!1,this.validateForm()}ngOnInit(){this.getShoppingCart()}validateForm(){this.registerForm=new n.cw({tipo_envio:new n.NI(null,[n.kI.required,n.kI.pattern("^[0-9]+$")]),metodo_pago:new n.NI(null,[n.kI.required,n.kI.pattern("^[0-9]+$")])})}getShoppingCart(){try{this.shoppingCartService.getShoppingCart(`${l.Q}/usuario/carrito/ver`).subscribe({next:e=>{this.shoppingDetailCart=e.shoppingDetailCart,this.shoppingDetailCart.Total_Factura=this.shoppingDetailCart.Total_Factura.toFixed(2),this.getProfile(),this.getShipmentInformation(),this.noneProducts=0!==this.shoppingDetailCart.detalles_venta.length},error:e=>{this.noneProducts=!1}})}catch(e){console.log(e.error)}}getProfile(){try{this.userService.getCustomerProfile(`${l.Q}/usuario/ver/perfil`).subscribe({next:e=>{this.customer=e.customer},error:e=>{this.customAlertService.sweetAlertPersonalizada("error","Error",e.error.error)}})}catch(e){console.log(e.error)}}getShipmentInformation(){try{this.shoppingCartService.getShipmentInformation(`${l.Q}/usuario/ver/tipo/envio`).subscribe({next:e=>{this.shipping_type=e.shipping_type,this.payment_method=e.payment_method},error:e=>{this.customAlertService.sweetAlertPersonalizada("error","Error",e.error.error)}})}catch(e){console.log(e.error)}}updateProductCart(e,r){try{this.shoppingCartService.updateProductCart(`${l.Q}/usuario/carrito/actualizar/producto`,{ID_Producto_FK:e,Cantidad_Producto:r}).subscribe({next:s=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",s.msg),this.getShoppingCart()},error:s=>{this.customAlertService.sweetAlertPersonalizada("error","Error",s.error.error),this.getShoppingCart()}})}catch(c){console.log(c.error)}}deleteProductCart(e){try{this.shoppingCartService.deleteProductCart(`${l.Q}/usuario/carrito/eliminar/producto`,e).subscribe({next:r=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",r.msg),this.getShoppingCart()},error:r=>{this.customAlertService.sweetAlertPersonalizada("error","Error",r.error.error)}})}catch(r){console.log(r.error)}}deleteShoppingCart(){try{this.shoppingCartService.deleteShoppingCart(`${l.Q}/usuario/carrito/eliminar`).subscribe({next:e=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",e.msg),this.getShoppingCart()},error:e=>{this.customAlertService.sweetAlertPersonalizada("error","Error",e.error.error)}})}catch(e){console.log(e.error)}}onSubmit(){try{const e={ID_Tipo_Envio_FK:this.registerForm.get("tipo_envio")?.value,ID_Metodo_Pago_FK:this.registerForm.get("metodo_pago")?.value};this.registerForm.valid?this.shoppingCartService.processSale(`${l.Q}/usuario/carrito/procesar`,e).subscribe({next:r=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",r.msg),this.getShoppingCart()},error:r=>{this.customAlertService.sweetAlertPersonalizada("error","Error",r.error.error)}}):this.customAlertService.sweetAlertPersonalizada("error","Campos vac\xedos","Por favor completa la informaci\xf3n de env\xedo.")}catch(e){console.log(e.error)}}decreaseQuantity(e){e.Cantidad_Producto>1&&(e.Cantidad_Producto--,e.Subtotal_Venta=(e.Cantidad_Producto*e.Precio_Unitario).toFixed(2))}increaseQuantity(e){e.Cantidad_Producto++,e.Subtotal_Venta=(e.Cantidad_Producto*e.Precio_Unitario).toFixed(2)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.F),t.Y36(_.v),t.Y36(h.y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-shopping"]],decls:10,vars:5,consts:[[1,"container-fluid","mt-4"],[1,"row","px-xl-5"],[1,"col-lg-8","table-responsive","mb-3"],["class","justify-content-center align-items-center",4,"ngIf"],["class","table table-light table-borderless table-hover mb-0",4,"ngIf"],["class","col-lg-4",4,"ngIf"],[1,"justify-content-center","align-items-center"],[1,"col-12","text-center"],["width","300","height","300","src","assets/404.jpg","alt","Error 404",1,"img-fluid","rounded-circle"],[1,"table","table-light","table-borderless","table-hover","mb-0"],[1,"thead-dark"],[1,"text-center"],[1,"align-middle"],[4,"ngFor","ngForOf"],[1,"d-flex","flex-column","flex-md-row"],[1,"col-md-2"],["src","assets/Logo_ASIA_DEPOT.png","alt","",2,"width","50px"],[1,"col-md-5"],[1,"align-middle","text-center"],[1,"input-group","quantity","mx-auto",2,"width","100px"],[1,"input-group-btn"],[1,"btn","btn-sm","btn-primary","btn-minus",3,"click"],[1,"fa","fa-minus"],["type","text",1,"form-control","form-control-sm","border-2","text-center",3,"value"],[1,"btn","btn-sm","btn-primary","btn-plus",3,"click"],[1,"fa","fa-plus"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-check"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"fa","fa-times"],[1,"col-lg-4"],[1,"bg-light","p-5","mb-5"],[1,"mb-3","text-center"],[1,"pt-3"],[1,"d-flex","justify-content-between","mt-3"],[1,"d-flex","justify-content-center"],[1,"col-10","d-flex","justify-content-between"],[1,"btn","btn-block","btn-primary","font-weight-bold","my-3","py-3",3,"click"],[1,"btn","btn-block","btn-danger","font-weight-bold","my-3","py-3",3,"click"],[1,"bg-light","p-3","mb-5"],[1,"pt-2"],[1,"btn","btn-primary","btn-block","font-weight-bold","my-3","py-3",3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"form-floating","mb-3"],["aria-label","Default select example","formControlName","tipo_envio",1,"form-select"],["value","null"],[3,"value",4,"ngFor","ngForOf"],["for","registerDepartamento"],["aria-label","Default select example","formControlName","metodo_pago",1,"form-select"],[3,"value"]],template:function(e,r){1&e&&(t._UZ(0,"app-nav-bar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t.YNc(4,v,5,0,"div",3),t.YNc(5,x,17,1,"table",4),t.qZA(),t.YNc(6,Z,16,1,"div",5),t.YNc(7,S,24,6,"div",5),t.YNc(8,T,19,3,"div",5),t.qZA()(),t._UZ(9,"app-footer")),2&e&&(t.xp6(4),t.Q6J("ngIf",0==r.noneProducts),t.xp6(1),t.Q6J("ngIf",1==r.noneProducts),t.xp6(1),t.Q6J("ngIf",1==r.noneProducts),t.xp6(1),t.Q6J("ngIf",1==r.noneProducts),t.xp6(1),t.Q6J("ngIf",1==r.noneProducts))},dependencies:[u.sg,u.O5,n._Y,n.YN,n.Kr,n.EJ,n.JJ,n.JL,n.sg,n.u,d.rH,b.w,C.c],styles:[".table[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem;color:#6c757d}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] + tbody[_ngcontent-%COMP%]{border-top:2px solid #dee2e6}.table-borderless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-borderless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-borderless[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-borderless[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] + tbody[_ngcontent-%COMP%]{border:0}.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{color:#6c757d;background-color:#00000013}.table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#fff;background-color:#343a40;border-color:#454d55}.table-responsive[_ngcontent-%COMP%]{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive[_ngcontent-%COMP%] > .table-bordered[_ngcontent-%COMP%]{border:0}"]}),o})()}];let M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(y),d.Bz]}),o})();var U=a(335);let O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,n.UX,n.u5,M,U.d]}),o})()}}]);