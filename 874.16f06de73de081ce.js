"use strict";(self.webpackChunkFrontend_ASIA_DEPOT=self.webpackChunkFrontend_ASIA_DEPOT||[]).push([[874],{3874:(At,y,a)=>{a.r(y),a.d(y,{UserHomeModule:()=>Zt});var l=a(6895),i=a(433),p=a(5808),t=a(8256),T=a(2150),w=a(3310),d=a(1548),q=a(274);const I=["categoriasSection"],O=function(e,r){return["/products/category",e,r]};function N(e,r){if(1&e&&(t.TgZ(0,"div",10)(1,"div",11)(2,"div",12)(3,"h5",13),t._uU(4),t.qZA(),t.TgZ(5,"p",14),t._uU(6),t.qZA()(),t.TgZ(7,"button",15),t._uU(8,"Ver productos"),t.qZA()()()),2&e){const o=r.$implicit;t.xp6(4),t.Oqu(o.Nombre_Categoria),t.xp6(2),t.Oqu(o.Descripcion_Categoria),t.xp6(1),t.Q6J("routerLink",t.WLB(3,O,o.id,o.Nombre_Categoria))}}function M(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"li",18)(1,"a",23),t.NdJ("click",function(){const s=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.changePage(s))}),t._uU(2),t.qZA()()}if(2&e){const o=r.$implicit,n=t.oxw(2);t.ekj("active",n.currentPage===o),t.xp6(2),t.Oqu(o)}}function J(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"nav",16)(1,"ul",17)(2,"li",18)(3,"a",19),t.NdJ("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.changePage(c.currentPage-1))}),t.TgZ(4,"span",20),t._uU(5,"\xab"),t.qZA()()(),t.YNc(6,M,3,3,"li",21),t.TgZ(7,"li",18)(8,"a",22),t.NdJ("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.changePage(c.currentPage+1))}),t.TgZ(9,"span",20),t._uU(10,"\xbb"),t.qZA()()()()()}if(2&e){const o=t.oxw();t.xp6(2),t.ekj("disabled",1===o.currentPage),t.xp6(4),t.Q6J("ngForOf",o.getPagesArray()),t.xp6(1),t.ekj("disabled",o.currentPage===o.totalPages)}}let Q=(()=>{class e{constructor(o){this.categoryService=o,this.category=[],this.totalPages=0,this.currentPage=1,this.pageSize=6}ngOnInit(){this.getCategories()}getCategories(){this.categoryService.getCategories(`${d.Q}/usuario/ver/categorias/paginacion`,this.currentPage,this.pageSize).subscribe(o=>{this.category=o.categories,this.totalPages=o.totalPages,this.currentPage=o.currentPage})}changePage(o){o>=1&&o<=this.totalPages&&(this.currentPage=o,this.getCategories(),this.scrollIntoView())}getPagesArray(){const o=[];for(let n=1;n<=this.totalPages;n++)o.push(n);return o}scrollIntoView(){this.categoriasSection&&this.categoriasSection.nativeElement.scrollIntoView({behavior:"smooth"})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(q.H))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-categories-section"]],viewQuery:function(o,n){if(1&o&&t.Gf(I,5),2&o){let c;t.iGM(c=t.CRH())&&(n.categoriasSection=c.first)}},decls:13,vars:2,consts:[[1,"container","pt-4","pb-3"],["categoriasSection",""],[1,"text-center"],["id","categorias-section"],[1,"container","pt-4","pb-3","shadow-lg","rounded-5"],[1,"mb-4"],[1,"row","row-cols-1","row-cols-md-3","g-2"],["class","col",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-4"],["aria-label","Page navigation example",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-body","p-3"],[1,"card-title","fs-5"],[1,"card-text","fs-6",2,"text-align","justify"],[1,"btn","btn-primary",3,"routerLink"],["aria-label","Page navigation example"],[1,"pagination"],[1,"page-item"],["aria-label","Previous",1,"btn","page-link",3,"click"],["aria-hidden","true"],["class","page-item",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"btn","page-link",3,"click"],[1,"btn","page-link",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0,1)(2,"div",2)(3,"h1"),t._uU(4,"Bienvenido a ASIA DEPOT"),t.qZA()()(),t.TgZ(5,"section",3)(6,"div",4)(7,"h2",5),t._uU(8,"Categor\xedas"),t.qZA(),t.TgZ(9,"div",6),t.YNc(10,N,9,6,"div",7),t.qZA(),t.TgZ(11,"div",8),t.YNc(12,J,11,5,"nav",9),t.qZA()()()),2&o&&(t.xp6(10),t.Q6J("ngForOf",n.category),t.xp6(2),t.Q6J("ngIf",n.totalPages>1))},dependencies:[l.sg,l.O5,p.rH],styles:[".card[_ngcontent-%COMP%]{height:100%}@media (max-width: 576px){.row-cols-md-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}}@media (min-width: 577px) and (max-width: 768px){.row-cols-md-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%}}@media (min-width: 769px){.row-cols-md-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 33.333333%;max-width:33.333333%}}"]}),e})();var S=a(9616),k=a(3809),j=a(3650),E=a(6428);function Y(e,r){1&e&&(t.TgZ(0,"div",5)(1,"div",6)(2,"h5"),t._uU(3," Lo sentimos, actualmente no poseemos productos destacados, vuelve m\xe1s tarde! "),t.qZA(),t._UZ(4,"img",7),t.qZA()())}function R(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(o);const c=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.addProductCart(c.id))}),t._UZ(1,"i",30),t.qZA()}}function L(e,r){1&e&&(t.TgZ(0,"button",31),t._UZ(1,"i",30),t.qZA())}const U=function(e){return["/product/detail",e]};function D(e,r){if(1&e&&(t.TgZ(0,"a",32),t._uU(1,"Ver detalles"),t.qZA()),2&e){const o=t.oxw().$implicit;t.Q6J("routerLink",t.VKq(1,U,o.id))}}function H(e,r){1&e&&(t.TgZ(0,"button",33),t._uU(1,"Agotado"),t.qZA())}function $(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13)(3,"div",14),t._UZ(4,"img",15),t.qZA(),t.TgZ(5,"div",16),t.YNc(6,R,2,0,"button",17),t.YNc(7,L,2,0,"button",18),t.TgZ(8,"button",19),t.NdJ("click",function(){const s=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.addFavoriteProduct(s.id))}),t._UZ(9,"i",20),t.qZA(),t.TgZ(10,"button",21),t._UZ(11,"i",22),t.qZA()()(),t.TgZ(12,"div",23)(13,"a",24)(14,"h4"),t._uU(15),t.qZA()(),t.TgZ(16,"h5"),t._uU(17),t.qZA(),t.TgZ(18,"div",25)(19,"h5",26),t._uU(20),t.qZA()(),t.TgZ(21,"div",27),t.YNc(22,D,2,3,"a",28),t.YNc(23,H,2,0,"button",29),t.qZA()()()()}if(2&e){const o=r.$implicit,n=t.oxw(2);t.xp6(4),t.Q6J("src",n.productImages[o.id]||"assets/Logo_ASIA_DEPOT.png",t.LSH),t.xp6(2),t.Q6J("ngIf",o.Cantidad_Stock>0),t.xp6(1),t.Q6J("ngIf",0==o.Cantidad_Stock),t.xp6(3),t.Q6J("routerLink",t.VKq(10,U,o.id)),t.xp6(3),t.Q6J("routerLink",t.VKq(12,U,o.id)),t.xp6(2),t.Oqu(o.Nombre_Producto),t.xp6(2),t.hij("Cantidad disponible: ",o.Cantidad_Stock,""),t.xp6(3),t.hij("Q",o.Precio_Venta,""),t.xp6(2),t.Q6J("ngIf",o.Cantidad_Stock>0),t.xp6(1),t.Q6J("ngIf",0==o.Cantidad_Stock)}}function z(e,r){if(1&e&&(t.TgZ(0,"div",8)(1,"div",9),t.YNc(2,$,24,14,"div",10),t.qZA()()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.product)}}let B=(()=>{class e{constructor(o,n,c,s){this.authService=o,this.productService=n,this.shoppingCartService=c,this.customAlertService=s,this.product=[],this.prducts=[],this.productImages={},this.noneProducts=!1}ngOnInit(){this.getProducts()}getProducts(){this.productService.getProducts(`${d.Q}/usuario/ver/productos?estado=Activo`).subscribe({next:o=>{this.product=o.products,this.product=this.product.filter(n=>!0===n.Producto_Destacado),this.noneProducts=0!==this.product.length,this.product.forEach(n=>{this.getPhotos(n.id)})},error:o=>{this.product=[],this.noneProducts=!1}})}getPhotos(o){try{this.productService.getProductPhoto(`${d.Q}/usuario/ver/foto/producto`,o).subscribe({next:n=>{this.productImages[o]=URL.createObjectURL(n)},error:n=>{this.productImages[o]="assets/Logo_ASIA_DEPOT.png",console.log(n.error.error)}})}catch(n){console.log(n.error)}}addFavoriteProduct(o){try{if(!this.authService.isAuthenticated())return this.customAlertService.sweetAlertPersonalizada("error","Sin autenticaci\xf3n","Para agregar un producto a favoritos primero debes de iniciar sesi\xf3n.");this.productService.addFavoriteProduct(`${d.Q}/usuario/agregar/producto/favorito`,o).subscribe({next:n=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",n.msg)},error:n=>{this.customAlertService.sweetAlertPersonalizada("error","Lo siento",n.error.error)}})}catch(n){console.log(n.error)}}addProductCart(o){try{if(!this.authService.isAuthenticated())return this.customAlertService.sweetAlertPersonalizada("error","Sin autenticaci\xf3n","Para agregar un producto al carrito primero debes de iniciar sesi\xf3n.");this.shoppingCartService.addProductCart(`${d.Q}/usuario/carrito/agregar`,{ID_Producto_FK:o,Cantidad_Producto:1}).subscribe({next:c=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",c.msg),this.getProducts()},error:c=>{this.customAlertService.sweetAlertPersonalizada("error","Error",c.error.error)}})}catch(n){console.log(n.error)}}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(S.e),t.Y36(k.M),t.Y36(j.F),t.Y36(E.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-products-section"]],decls:6,vars:2,consts:[[1,"mt-5"],[1,"container","pt-5","pb-3","shadow-lg","rounded-5"],[1,"mb-4"],["class","row justify-content-center align-items-center",4,"ngIf"],["class","shadow-lg rounded-5","data-spy","scroll","data-target","#reviewsNav","data-offset","50","style","height: 500px; overflow-y: auto; overflow-x: hidden;",4,"ngIf"],[1,"row","justify-content-center","align-items-center"],[1,"col-12","text-center"],["width","300","height","300","src","assets/404.jpg","alt","Error 404",1,"img-fluid","rounded-circle"],["data-spy","scroll","data-target","#reviewsNav","data-offset","50",1,"shadow-lg","rounded-5",2,"height","500px","overflow-y","auto","overflow-x","hidden"],[1,"row","row-cols-1","row-cols-md-3","g-2"],["class","col-lg-3 col-md-4 col-sm-6 pb-1",4,"ngFor","ngForOf"],[1,"col-lg-3","col-md-4","col-sm-6","pb-1"],[1,"product-item","bg-light","shadow-lg","rounded-5","mb-4"],[1,"product-img","position-relative","overflow-hidden"],[1,"col-md4"],["alt","Imagen-Producto",1,"img-fluid","w-100",3,"src"],[1,"product-action"],["class","btn btn-outline-dark btn-square",3,"click",4,"ngIf"],["class","btn btn-outline-dark btn-square","disabled","",4,"ngIf"],[1,"btn","btn-outline-dark","btn-square",3,"click"],[1,"fa","fa-heart"],[1,"btn","btn-outline-dark","btn-square",3,"routerLink"],[1,"fa","fa-search"],[1,"text-center","py-4"],[1,"text-decoration-none","text-truncate","productName",3,"routerLink"],[1,"d-flex","align-items-center","justify-content-center","mt-2"],[2,"margin-right","6px"],[1,"container-btn"],["class","btn btn-primary",3,"routerLink",4,"ngIf"],["class","btn btn-danger","disabled","",4,"ngIf"],[1,"fa","fa-shopping-cart"],["disabled","",1,"btn","btn-outline-dark","btn-square"],[1,"btn","btn-primary",3,"routerLink"],["disabled","",1,"btn","btn-danger"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"Productos destacados"),t.qZA(),t.YNc(4,Y,5,0,"div",3),t.YNc(5,z,3,1,"div",4),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngIf",0==n.noneProducts),t.xp6(1),t.Q6J("ngIf",1==n.noneProducts))},dependencies:[l.sg,l.O5,p.rH],styles:[".product-item[_ngcontent-%COMP%]{transition:.5s}.product-action[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:center;transition:.5s}.product-action[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]{position:relative;margin:100px 3px 0;opacity:0}.product-item[_ngcontent-%COMP%]:hover{box-shadow:0 0 30px #ddd}.product-item[_ngcontent-%COMP%]:hover   .product-action[_ngcontent-%COMP%]{background:rgba(255,255,255,.7)}.product-item[_ngcontent-%COMP%]:hover   .product-action[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]:first-child{opacity:1;margin-top:0;transition:.3s 0s}.product-item[_ngcontent-%COMP%]:hover   .product-action[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]:nth-child(2){opacity:1;margin-top:0;transition:.3s .05s}.product-item[_ngcontent-%COMP%]:hover   .product-action[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]:nth-child(3){opacity:1;margin-top:0;transition:.3s .1s}.product-item[_ngcontent-%COMP%]:hover   .product-action[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]:nth-child(4){opacity:1;margin-top:0;transition:.3s .15s}.product-item[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:.5s;width:250px;height:280px}.product-item[_ngcontent-%COMP%]:hover   .product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.2)}.productName[_ngcontent-%COMP%]{color:#000}.container-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{font-weight:700}.text-primary[_ngcontent-%COMP%]{color:#ffd333!important}@media (max-width: 768px){.product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px}}"]}),e})();var G=a(8104),F=a(6785);function V(e,r){1&e&&(t.TgZ(0,"div",5)(1,"div",6)(2,"h5"),t._uU(3," No hay rese\xf1as disponibles en este momento. \xa1Regresa pronto para descubrir las opiniones de nuestros clientes! "),t.qZA(),t._UZ(4,"img",7),t.qZA()())}function K(e,r){if(1&e&&(t.TgZ(0,"div",10)(1,"div",11)(2,"div",12),t._UZ(3,"img",13),t.qZA(),t.TgZ(4,"div",14)(5,"div",15)(6,"div",16)(7,"p",17)(8,"strong"),t._uU(9,"Fecha de publicaci\xf3n: "),t.qZA(),t._uU(10),t.qZA()(),t.TgZ(11,"div",16)(12,"p")(13,"strong"),t._uU(14),t.qZA(),t._uU(15),t.qZA()(),t.TgZ(16,"div",16)(17,"p"),t._uU(18),t.qZA()(),t.TgZ(19,"div",16)(20,"p"),t._uU(21),t.qZA()()()()()()),2&e){const o=r.$implicit,n=r.index,c=t.oxw(2);t.xp6(3),t.s9C("src",c.images[n],t.LSH),t.xp6(7),t.Oqu(o.createdAt),t.xp6(4),t.AsE("",o.cliente.Nombre_Cliente," ",o.cliente.Apellido_Cliente,""),t.xp6(1),t.hij(" - ",o.Puntuacion_Producto,""),t.xp6(3),t.Oqu(o.producto.Nombre_Producto),t.xp6(3),t.Oqu(o.Comentario_Producto)}}function X(e,r){if(1&e&&(t.TgZ(0,"div",8),t.YNc(1,K,22,7,"div",9),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.productReviews)}}let W=(()=>{class e{constructor(o,n){this.reviewsService=o,this.userService=n,this.productReviews=[],this.noneReviews=!1,this.image="assets/transparent.png",this.images=[]}ngOnInit(){this.getReviews()}getReviews(){try{this.reviewsService.getAllReviews(`${d.Q}/usuario/ver/valoraciones/productos`).subscribe({next:o=>{this.productReviews=o.productReviews,this.productReviews.forEach(n=>{if(n.createdAt){const u=n.createdAt.split("T")[0];n.createdAt=u}1===n.Puntuacion_Producto&&(n.Puntuacion_Producto=`${n.Puntuacion_Producto} estrella`),n.Puntuacion_Producto=`${n.Puntuacion_Producto} estrellas`,this.getPhotos(n.cliente.id)}),this.noneReviews=!0},error:o=>{this.noneReviews=!1}})}catch(o){console.log(o.error)}}getPhotos(o){try{this.userService.getPhotos(`${d.Q}/usuario/ver/avatar`,o).subscribe({next:n=>{this.images.push(URL.createObjectURL(n))},error:n=>{this.images.push("assets/perfil_picture.png")}})}catch(n){console.log(n.error)}}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(G.Y),t.Y36(F.v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-reviews-section"]],decls:6,vars:2,consts:[[1,"mt-5","mb-5"],[1,"container","pt-5","pb-3","shadow-lg","rounded-5"],[1,"mb-4"],["class","row justify-content-center align-items-center",4,"ngIf"],["class","shadow-lg rounded-5","data-spy","scroll","data-target","#reviewsNav","data-offset","50","style","height: 400px; overflow-y: auto; overflow-x: hidden;",4,"ngIf"],[1,"row","justify-content-center","align-items-center"],[1,"col-12","text-center"],["width","300","height","300","src","assets/404.jpg","alt","Error 404",1,"img-fluid","rounded-circle"],["data-spy","scroll","data-target","#reviewsNav","data-offset","50",1,"shadow-lg","rounded-5",2,"height","400px","overflow-y","auto","overflow-x","hidden"],["id","review1","class","review shadow-lg mb-4",4,"ngFor","ngForOf"],["id","review1",1,"review","shadow-lg","mb-4"],[1,"row","align-items-center"],[1,"col-md-2","mt-2","d-flex","justify-content-center"],["alt","Foto del Cliente",1,"img-fluid","rounded-circle",3,"src"],[1,"col-md-9"],[1,"row"],[1,"col-12"],[1,"text-end"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"Rese\xf1as"),t.qZA(),t.YNc(4,V,5,0,"div",3),t.YNc(5,X,2,1,"div",4),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngIf",0==n.noneReviews),t.xp6(1),t.Q6J("ngIf",1==n.noneReviews))},dependencies:[l.sg,l.O5]}),e})();function ot(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El nombre es demasiado corto (m\xednimo 3 car\xe1cteres). "),t.qZA())}function nt(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El nombre es demasiado largo (m\xe1ximo 30 car\xe1cteres). "),t.qZA())}function rt(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El nombre es obligatorio. "),t.qZA())}function it(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El nombre no es v\xe1lido, no use car\xe1cteres especiales. "),t.qZA())}function ct(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El correo es obligatorio. "),t.qZA())}function at(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El correo no es v\xe1lido. "),t.qZA())}function st(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El correo es demasiado largo (m\xe1ximo 40 car\xe1cteres). "),t.qZA())}function ut(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El asunto es demasiado corto (m\xednimo 10 car\xe1cteres). "),t.qZA())}function lt(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El asunto es demasiado largo (m\xe1ximo 50 car\xe1cteres). "),t.qZA())}function dt(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El asunto es obligatorio. "),t.qZA())}function pt(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El asunto no es v\xe1lido, no use car\xe1cteres especiales. "),t.qZA())}function mt(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El mensaje es demasiado corto (m\xednimo 10 car\xe1cteres). "),t.qZA())}function gt(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El mensaje es demasiado largo (m\xe1ximo 200 car\xe1cteres). "),t.qZA())}function _t(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El mensaje es obligatorio. "),t.qZA())}function ht(e,r){1&e&&(t.TgZ(0,"div",16),t._uU(1," El mensaje no es v\xe1lido, no use car\xe1cteres especiales. "),t.qZA())}function vt(e,r){1&e&&(t.TgZ(0,"button",17),t._uU(1,"Enviar correo"),t.qZA())}function ft(e,r){1&e&&(t.TgZ(0,"button",18),t._UZ(1,"span",19),t._uU(2," Cargando... "),t.qZA())}const Ct=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:5,vars:0,template:function(o,n){1&o&&t._UZ(0,"app-nav-bar")(1,"app-categories-section")(2,"app-products-section")(3,"app-reviews-section")(4,"app-footer")},dependencies:[T.w,w.c,Q,B,W]}),e})()},{path:"about",component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-about"]],decls:24,vars:0,consts:[[1,"container","py-4"],[1,"row","justify-content-center"],[1,"col-lg-7"],[1,"bg-light","shadow-lg","rounded-5","p-4"],[1,"mx-xl-5","mb-2","text-center"],[2,"text-align","justify"],[1,"mt-5"],[1,"mt-5",2,"text-align","justify"]],template:function(o,n){1&o&&(t._UZ(0,"app-nav-bar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1",4),t._uU(6,"Sobre Nosotros"),t.qZA(),t.TgZ(7,"p",5),t._uU(8," \xa1Bienvenido a ASIA DEPOT, tu destino principal para compras en l\xednea en Chiquimulilla, Santa Rosa! En ASIA DEPOT, la calidad es nuestra m\xe1xima prioridad. Trabajamos incansablemente para ofrecer productos que superen tus expectativas. "),t.qZA(),t.TgZ(9,"section",6)(10,"h2"),t._uU(11,"Nuestra Misi\xf3n"),t.qZA(),t.TgZ(12,"p",5),t._uU(13," Facilitar tu experiencia de compra a trav\xe9s de soluciones digitales innovadoras y una selecci\xf3n cuidadosa de productos. "),t.qZA(),t.TgZ(14,"p",5),t._uU(15," Nos dedicamos a proporcionar las herramientas y servicios necesarios para que tu experiencia de compra en l\xednea sea f\xe1cil, segura y satisfactoria. Explora nuestro ecommerce y descubre la comodidad de comprar desde tu hogar. "),t.qZA()(),t.TgZ(16,"section",6)(17,"h2"),t._uU(18,"\xdanete a la Experiencia ASIA DEPOT"),t.qZA(),t.TgZ(19,"p",5),t._uU(20," Todos son bienvenidos, ya seas un entusiasta de las compras en l\xednea o est\xe9s buscando productos de calidad. Explora nuestro ecommerce, descubre productos excepcionales y \xfanete a una comunidad que valora la excelencia, la innovaci\xf3n y la satisfacci\xf3n del cliente. "),t.qZA(),t.TgZ(21,"h5",7),t._uU(22,"\xa1Gracias por elegir ASIA DEPOT, donde tu experiencia de compra es nuestra misi\xf3n!"),t.qZA()()()()()(),t._UZ(23,"app-footer"))},dependencies:[T.w,w.c]}),e})()},{path:"contact-us",component:(()=>{class e{constructor(o,n,c){this.userService=o,this.authService=n,this.customAlertService=c,this.loading=!1,this.validateForm()}ngOnInit(){}validateForm(){this.contactForm=new i.cw({Nombre:new i.NI("",[i.kI.required,i.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\xfc\xdc\s]+$/),i.kI.minLength(3),i.kI.maxLength(30)]),Correo:new i.NI("",[i.kI.required,i.kI.email,i.kI.maxLength(40)]),Asunto:new i.NI("",[i.kI.required,i.kI.pattern(/^[^[\]<>(){}_=\\|';]+$/),i.kI.minLength(10),i.kI.maxLength(50)]),Mensaje:new i.NI("",[i.kI.required,i.kI.pattern(/^[^[\]<>(){}_=\\|';]+$/),i.kI.minLength(10),i.kI.maxLength(200)])})}onSubmit(){if(!this.authService.isAuthenticated())return this.customAlertService.sweetAlertPersonalizada("error","Sin autenticaci\xf3n","Primero debes de iniciar sesi\xf3n.");if(this.contactForm.valid){this.loading=!0;const o={Nombre:this.contactForm.get("Nombre")?.value,Correo:this.contactForm.get("Correo")?.value,Asunto:this.contactForm.get("Asunto")?.value,Mensaje:this.contactForm.get("Mensaje")?.value};this.userService.contactUs(`${d.Q}/usuario/contactanos`,o).subscribe({next:n=>{this.contactForm.reset(),this.loading=!1,this.customAlertService.sweetAlertPersonalizada("success","Exitoso",n.msg)},error:n=>{this.customAlertService.sweetAlertPersonalizada("error","Error",n.error.error)}})}else this.customAlertService.sweetAlertPersonalizada("error","Error","Por favor, verifica los campos del formulario.")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(F.v),t.Y36(S.e),t.Y36(E.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contact-us"]],decls:35,vars:18,consts:[[1,"container","py-5"],[1,"row","justify-content-center"],[1,"col-lg-7"],[1,"bg-light","shadow-lg","rounded-5","p-5","p-4"],[1,"mx-xl-5","mb-4","text-center"],["name","sentMessage",3,"formGroup","ngSubmit"],[1,"form-group","mb-3"],["type","text","formControlName","Nombre","id","name","placeholder","Ingresa tu nombre",1,"form-control"],["class","text-danger",4,"ngIf"],["type","email","formControlName","Correo","id","email","placeholder","Tu correo electr\xf3nico",1,"form-control"],["type","text","formControlName","Asunto","id","subject","placeholder","Asunto",1,"form-control"],[1,"form-group","mb-5"],["id","floatingTextarea2","minlength","10","maxlength","201","formControlName","Mensaje","placeholder","Mensaje",1,"form-control",2,"max-height","140px"],[1,"text-center"],["class","btn btn-primary py-2 px-4","type","submit","id","sendMessageButton",4,"ngIf"],["type","button","class","btn btn-primary py-2 px-4","disabled","",4,"ngIf"],[1,"text-danger"],["type","submit","id","sendMessageButton",1,"btn","btn-primary","py-2","px-4"],["type","button","disabled","",1,"btn","btn-primary","py-2","px-4"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){if(1&o&&(t._UZ(0,"app-nav-bar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1",4),t._uU(6,"Cont\xe1ctanos"),t.qZA(),t.TgZ(7,"form",5),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(8,"div",6),t._UZ(9,"input",7),t.YNc(10,ot,2,0,"div",8),t.YNc(11,nt,2,0,"div",8),t.YNc(12,rt,2,0,"div",8),t.YNc(13,it,2,0,"div",8),t.qZA(),t.TgZ(14,"div",6),t._UZ(15,"input",9),t.YNc(16,ct,2,0,"div",8),t.YNc(17,at,2,0,"div",8),t.YNc(18,st,2,0,"div",8),t.qZA(),t.TgZ(19,"div",6),t._UZ(20,"input",10),t.YNc(21,ut,2,0,"div",8),t.YNc(22,lt,2,0,"div",8),t.YNc(23,dt,2,0,"div",8),t.YNc(24,pt,2,0,"div",8),t.qZA(),t.TgZ(25,"div",11),t._UZ(26,"textarea",12),t.YNc(27,mt,2,0,"div",8),t.YNc(28,gt,2,0,"div",8),t.YNc(29,_t,2,0,"div",8),t.YNc(30,ht,2,0,"div",8),t.qZA(),t.TgZ(31,"div",13),t.YNc(32,vt,2,0,"button",14),t.YNc(33,ft,3,0,"button",15),t.qZA()()()()()(),t._UZ(34,"app-footer")),2&o){let c,s,u,m,g,_,h,v,f,C,b,x,Z,A,P;t.xp6(7),t.Q6J("formGroup",n.contactForm),t.xp6(3),t.Q6J("ngIf",(null==(c=n.contactForm.get("Nombre"))?null:c.hasError("minlength"))&&(null==(c=n.contactForm.get("Nombre"))?null:c.touched)),t.xp6(1),t.Q6J("ngIf",(null==(s=n.contactForm.get("Nombre"))?null:s.hasError("maxlength"))&&(null==(s=n.contactForm.get("Nombre"))?null:s.touched)),t.xp6(1),t.Q6J("ngIf",(null==(u=n.contactForm.get("Nombre"))?null:u.hasError("required"))&&(null==(u=n.contactForm.get("Nombre"))?null:u.touched)),t.xp6(1),t.Q6J("ngIf",(null==(m=n.contactForm.get("Nombre"))?null:m.hasError("pattern"))&&(null==(m=n.contactForm.get("Nombre"))?null:m.touched)),t.xp6(3),t.Q6J("ngIf",(null==(g=n.contactForm.get("Correo"))?null:g.hasError("required"))&&(null==(g=n.contactForm.get("Correo"))?null:g.touched)),t.xp6(1),t.Q6J("ngIf",(null==(_=n.contactForm.get("Correo"))?null:_.hasError("email"))&&(null==(_=n.contactForm.get("Correo"))?null:_.touched)),t.xp6(1),t.Q6J("ngIf",(null==(h=n.contactForm.get("Correo"))?null:h.hasError("maxlength"))&&(null==(h=n.contactForm.get("Correo"))?null:h.touched)),t.xp6(3),t.Q6J("ngIf",(null==(v=n.contactForm.get("Asunto"))?null:v.hasError("minlength"))&&(null==(v=n.contactForm.get("Asunto"))?null:v.touched)),t.xp6(1),t.Q6J("ngIf",(null==(f=n.contactForm.get("Asunto"))?null:f.hasError("maxlength"))&&(null==(f=n.contactForm.get("Asunto"))?null:f.touched)),t.xp6(1),t.Q6J("ngIf",(null==(C=n.contactForm.get("Asunto"))?null:C.hasError("required"))&&(null==(C=n.contactForm.get("Asunto"))?null:C.touched)),t.xp6(1),t.Q6J("ngIf",(null==(b=n.contactForm.get("Asunto"))?null:b.hasError("pattern"))&&(null==(b=n.contactForm.get("Asunto"))?null:b.touched)),t.xp6(3),t.Q6J("ngIf",(null==(x=n.contactForm.get("Mensaje"))?null:x.hasError("minlength"))&&(null==(x=n.contactForm.get("Mensaje"))?null:x.touched)),t.xp6(1),t.Q6J("ngIf",(null==(Z=n.contactForm.get("Mensaje"))?null:Z.hasError("maxlength"))&&(null==(Z=n.contactForm.get("Mensaje"))?null:Z.touched)),t.xp6(1),t.Q6J("ngIf",(null==(A=n.contactForm.get("Mensaje"))?null:A.hasError("required"))&&(null==(A=n.contactForm.get("Mensaje"))?null:A.touched)),t.xp6(1),t.Q6J("ngIf",(null==(P=n.contactForm.get("Asunto"))?null:P.hasError("pattern"))&&(null==(P=n.contactForm.get("Asunto"))?null:P.touched)),t.xp6(2),t.Q6J("ngIf",!1===n.loading),t.xp6(1),t.Q6J("ngIf",!0===n.loading)}},dependencies:[l.O5,i._Y,i.Fj,i.JJ,i.JL,i.wO,i.nD,i.sg,i.u,T.w,w.c]}),e})()}];let bt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(Ct),p.Bz]}),e})();var xt=a(335);let Zt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,i.UX,i.u5,bt,xt.d]}),e})()}}]);