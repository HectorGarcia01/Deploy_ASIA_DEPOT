"use strict";(self.webpackChunkFrontend_ASIA_DEPOT=self.webpackChunkFrontend_ASIA_DEPOT||[]).push([[762],{274:(M,g,r)=>{r.d(g,{H:()=>o});var t=r(8256),d=r(529);let o=(()=>{class i{constructor(p){this.http=p}getCategories(p){return this.http.get(p)}}return i.\u0275fac=function(p){return new(p||i)(t.LFG(d.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},3310:(M,g,r)=>{r.d(g,{c:()=>m});var t=r(8256),d=r(274),o=r(6895),i=r(5808);const s=function(a){return["/products/category",a]};function p(a,l){if(1&a&&(t.TgZ(0,"li")(1,"a",19),t._uU(2),t.qZA()()),2&a){const u=l.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,s,u.id)),t.xp6(1),t.Oqu(u.Nombre_Categoria)}}function f(a,l){if(1&a&&(t.TgZ(0,"div",29)(1,"ul",30),t.YNc(2,p,3,4,"li",31),t.qZA()()),2&a){const u=l.$implicit,P=t.oxw();t.xp6(2),t.Q6J("ngForOf",P.category.slice(u*P.categoriesPerColumn,(u+1)*P.categoriesPerColumn))}}const Z=function(){return[0,1,2]},C=function(){return["/home"]},h=function(){return["/products"]},b=function(){return["/about"]},v=function(){return["/contact-us"]};let m=(()=>{class a{constructor(u){this.categoryService=u,this.category=[],this.categories=[]}ngOnInit(){this.getCategories()}getCategories(){this.categoryService.getCategories("http://3.144.81.64:3000/usuario/ver/categorias").subscribe(u=>{this.category=u.categories,this.categoriesPerColumn=Math.ceil(this.category.length/3)})}}return a.\u0275fac=function(u){return new(u||a)(t.Y36(d.H))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-footer"]],decls:62,vars:10,consts:[["rel","stylesheet","href","https://use.fontawesome.com/releases/v5.2.0/css/all.css","integrity","sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ","crossorigin","anonymous"],[1,"footer"],[1,"container","bottom_border"],[1,"row"],[1,"col-md-4","col-sm-12"],[1,"headin5_amrc","col_white_amrc","pt2"],[1,"mb10"],[1,"fa","fa-location-arrow"],[1,"fa","fa-phone"],[1,"fa","fa-envelope"],[1,"col-md-4","col-sm-6"],["class","col-md-4",4,"ngFor","ngForOf"],["action","#"],[1,"input-group","mb-3"],["type","email","placeholder","Escribe tu correo","aria-label","Escribe tu correo","aria-describedby","button-addon2",1,"form-control"],["id","button-addon2","type","button",1,"btn","btn-primary"],[1,"fas","fa-paper-plane"],[1,"container"],[1,"foote_bottom_ul_amrc"],[3,"routerLink"],[1,"text-center"],[1,"social_footer_ul"],["href","https://www.facebook.com/asiadepot?mibextid=ZbWKwL"],[1,"fab","fa-facebook-f"],["href","https://instagram.com/asiadept?igshid=MzRlODBiNWFlZA=="],[1,"fab","fa-instagram"],["href","#"],[1,"fab","fa-whatsapp"],[1,"fab","fa-google"],[1,"col-md-4"],[1,"footer_ul_amrc"],[4,"ngFor","ngForOf"]],template:function(u,P){1&u&&(t._UZ(0,"link",0),t.TgZ(1,"footer",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),t._uU(6,"ENCU\xc9NTRANOS"),t.qZA(),t.TgZ(7,"p",6),t._uU(8,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"),t.qZA(),t.TgZ(9,"p"),t._UZ(10,"i",7),t._uU(11," 9878/25 sec 9 rohini 35 "),t.qZA(),t.TgZ(12,"p"),t._UZ(13,"i",8),t._uU(14," +502 4665 1581 "),t.qZA(),t.TgZ(15,"p"),t._UZ(16,"i",9),t._uU(17," asiadepotchiquimulilla@gmail.com "),t.qZA()(),t.TgZ(18,"div",10)(19,"h5",5),t._uU(20,"CATEGOR\xcdAS"),t.qZA(),t.TgZ(21,"div",3),t.YNc(22,f,3,1,"div",11),t.qZA()(),t.TgZ(23,"div",10)(24,"h5",5),t._uU(25,"SUSCR\xcdBETE AL NEWSLETTER"),t.qZA(),t.TgZ(26,"p",6),t._uU(27,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"),t.qZA(),t.TgZ(28,"form",12)(29,"div",13),t._UZ(30,"input",14),t.TgZ(31,"button",15),t._UZ(32,"i",16),t.qZA()()()()()(),t.TgZ(33,"div",17)(34,"ul",18)(35,"li")(36,"a",19),t._uU(37,"Inicio"),t.qZA()(),t.TgZ(38,"li")(39,"a",19),t._uU(40,"Productos"),t.qZA()(),t.TgZ(41,"li")(42,"a",19),t._uU(43,"Nosotros"),t.qZA()(),t.TgZ(44,"li")(45,"a",19),t._uU(46,"Cont\xe1ctanos"),t.qZA()()(),t.TgZ(47,"p",20),t._uU(48,"\xa9 2023 Copyright | Ing. Hector Garc\xeda"),t.qZA(),t.TgZ(49,"ul",21)(50,"li")(51,"a",22),t._UZ(52,"i",23),t.qZA()(),t.TgZ(53,"li")(54,"a",24),t._UZ(55,"i",25),t.qZA()(),t.TgZ(56,"li")(57,"a",26),t._UZ(58,"i",27),t.qZA()(),t.TgZ(59,"li")(60,"a",26),t._UZ(61,"i",28),t.qZA()()()()()),2&u&&(t.xp6(22),t.Q6J("ngForOf",t.DdM(5,Z)),t.xp6(14),t.Q6J("routerLink",t.DdM(6,C)),t.xp6(3),t.Q6J("routerLink",t.DdM(7,h)),t.xp6(3),t.Q6J("routerLink",t.DdM(8,b)),t.xp6(3),t.Q6J("routerLink",t.DdM(9,v)))},dependencies:[o.sg,i.rH],styles:[".col_white_amrc[_ngcontent-%COMP%]{color:#fff}footer[_ngcontent-%COMP%]{background-color:#263238;padding:25px 0}.headin5_amrc[_ngcontent-%COMP%]{color:#fff;margin-top:20px}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#ccc;margin-bottom:10px}.footer_ul_amrc[_ngcontent-%COMP%]{list-style-type:none;font-size:14px;padding:0}.footer_ul_amrc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:5px}.footer_ul_amrc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ccc}.footer_ul_amrc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;text-decoration:none}.footer_ul2_amrc[_ngcontent-%COMP%]{list-style-type:none;padding:0}.footer_ul2_amrc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:table}.footer_ul2_amrc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.footer_ul2_amrc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-top:5px}.bottom_border[_ngcontent-%COMP%]{border-bottom:1px solid #323f45;padding-bottom:20px}.foote_bottom_ul_amrc[_ngcontent-%COMP%]{list-style-type:none;padding:0;text-align:center;margin-top:10px}.foote_bottom_ul_amrc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline;margin:0 12px}.foote_bottom_ul_amrc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;white-space:normal;display:inline-block;margin:0 12px}.form-control[_ngcontent-%COMP%]{border-color:#545454}.form-control[_ngcontent-%COMP%]:focus{border:2px solid #180cc9}.form-control[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none;transition:all .3s}.form-control[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .form-control[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{text-decoration:none}.social_footer_ul[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:20px 0;padding:0;list-style-type:none}.social_footer_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-left:20px;padding-top:10px;float:left}.social_footer_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ccc;border:1px solid #CCC;padding:8px;border-radius:50%}.social_footer_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:20px;height:20px;text-align:center}"]}),a})()},2150:(M,g,r)=>{r.d(g,{w:()=>v});var t=r(8256),d=r(9616),o=r(5808);const i=function(){return["/home"]},s=function(){return["/products"]},p=function(){return["/about"]},f=function(){return["/contact-us"]},Z=function(){return["/login"]},C=function(){return["/signup"]},h=function(){return["/checkout/cart"]},b=function(){return["/profile"]};let v=(()=>{class m{constructor(l){this.authService=l,this.isAuthenticated=!1}ngOnInit(){}}return m.\u0275fac=function(l){return new(l||m)(t.Y36(d.e))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-nav-bar"]],decls:47,vars:22,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-white"],[1,"container-fluid"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-brand","mt-2","mt-lg-0",3,"routerLink"],["src","assets/Logo_ASIA_DEPOT.png","height","55","alt","Logo ASIA DEPOT","loading","lazy"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],[1,"nav-link",3,"routerLink"],[1,"d-flex","align-items-center"],[1,"link-secondary","me-3","nav-link",3,"routerLink"],[1,"fas","fa-shopping-cart"],[1,"badge","rounded-pill","badge-notification","bg-danger"],[1,"dropdown","ms-2"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],["src","https://mdbcdn.b-cdn.net/img/new/avatars/2.webp","height","35","alt","Black and White Portrait of a Man","loading","lazy",1,"rounded-circle"],["aria-labelledby","navbarDropdownMenuAvatar",1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"]],template:function(l,u){1&l&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"button",2),t._UZ(3,"span",3),t.qZA(),t.TgZ(4,"div",4)(5,"a",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"ul",7)(8,"li",8)(9,"a",9),t._uU(10,"Inicio"),t.qZA()(),t.TgZ(11,"li",8)(12,"a",9),t._uU(13,"Productos"),t.qZA()(),t.TgZ(14,"li",8)(15,"a",9),t._uU(16,"Nosotros"),t.qZA()(),t.TgZ(17,"li",8)(18,"a",9),t._uU(19,"Cont\xe1ctanos"),t.qZA()()(),t.TgZ(20,"div",10)(21,"ul",7)(22,"li",8)(23,"a",9),t._uU(24,"Iniciar sesi\xf3n"),t.qZA()(),t.TgZ(25,"li",8)(26,"a",9),t._uU(27,"Registrarse"),t.qZA()()()()(),t.TgZ(28,"div",10)(29,"a",11),t._uU(30," Ver carrito "),t._UZ(31,"i",12),t.TgZ(32,"span",13),t._uU(33,"N"),t.qZA()(),t.TgZ(34,"div",14)(35,"a",15),t._UZ(36,"img",16),t.qZA(),t.TgZ(37,"ul",17)(38,"li")(39,"a",18),t._uU(40,"Iniciar sesi\xf3n"),t.qZA()(),t.TgZ(41,"li")(42,"a",18),t._uU(43,"Mi perfil"),t.qZA()(),t.TgZ(44,"li")(45,"a",18),t._uU(46,"Salir"),t.qZA()()()()()()()),2&l&&(t.xp6(5),t.Q6J("routerLink",t.DdM(11,i)),t.xp6(4),t.Q6J("routerLink",t.DdM(12,i)),t.xp6(3),t.Q6J("routerLink",t.DdM(13,s)),t.xp6(3),t.Q6J("routerLink",t.DdM(14,p)),t.xp6(3),t.Q6J("routerLink",t.DdM(15,f)),t.xp6(5),t.Q6J("routerLink",t.DdM(16,Z)),t.xp6(3),t.Q6J("routerLink",t.DdM(17,C)),t.xp6(3),t.Q6J("routerLink",t.DdM(18,h)),t.xp6(10),t.Q6J("routerLink",t.DdM(19,Z)),t.xp6(3),t.Q6J("routerLink",t.DdM(20,b)),t.xp6(3),t.Q6J("routerLink",t.DdM(21,i)))},dependencies:[o.rH]}),m})()},335:(M,g,r)=>{r.d(g,{d:()=>i});var t=r(6895),d=r(5808),o=r(8256);let i=(()=>{class s{}return s.\u0275fac=function(f){return new(f||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[t.ez,d.Bz]}),s})()},9762:(M,g,r)=>{r.r(g),r.d(g,{UserHomeModule:()=>A});var t=r(6895),d=r(5808),o=r(8256),i=r(2150),s=r(3310),p=r(274);const f=function(n){return["/products/category",n]};function Z(n,c){if(1&n&&(o.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"h5",7),o._uU(4),o.qZA(),o.TgZ(5,"p",8),o._uU(6),o.qZA()(),o.TgZ(7,"button",9),o._uU(8,"Ver productos"),o.qZA()()()),2&n){const e=c.$implicit;o.xp6(4),o.Oqu(e.Nombre_Categoria),o.xp6(2),o.Oqu(e.Descripcion_Categoria),o.xp6(1),o.Q6J("routerLink",o.VKq(3,f,e.id))}}let C=(()=>{class n{constructor(e){this.categoryService=e,this.category=[],this.categories=[]}ngOnInit(){this.getCategories()}getCategories(){this.categoryService.getCategories("http://3.144.81.64:3000/usuario/ver/categorias").subscribe(e=>{this.category=e.categories})}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(p.H))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-categories-section"]],decls:6,vars:1,consts:[[1,"container","pt-4","pb-3"],[1,"mb-4"],[1,"row","row-cols-1","row-cols-md-3","g-2"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"card"],[1,"card-body","p-3"],[1,"card-title","fs-5"],[1,"card-text","fs-6"],[1,"btn","btn-primary",3,"routerLink"]],template:function(e,_){1&e&&(o.TgZ(0,"section")(1,"div",0)(2,"h2",1),o._uU(3,"Categor\xedas"),o.qZA(),o.TgZ(4,"div",2),o.YNc(5,Z,9,5,"div",3),o.qZA()()()),2&e&&(o.xp6(5),o.Q6J("ngForOf",_.category))},dependencies:[t.sg,d.rH]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-product-offers-section"]],decls:35,vars:0,consts:[[1,"container","pt-5","pb-3"],[1,"mb-4"],["id","carouselExampleFade",1,"carousel","slide","carousel-fade"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp","alt","Motorbike Smoke",1,"d-block","w-100"],[1,"carousel-caption","d-none","d-md-block"],[1,"carousel-item"],["src","https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp","alt","Mountaintop",1,"d-block","w-100"],["src","https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp","alt","Woman Reading a Book",1,"d-block","w-100"],["type","button","data-bs-target","#carouselExampleFade","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleFade","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"]],template:function(e,_){1&e&&(o.TgZ(0,"section")(1,"div",0)(2,"h2",1),o._uU(3,"Ofertas especiales"),o.qZA(),o.TgZ(4,"div",2)(5,"div",3)(6,"div",4),o._UZ(7,"img",5),o.TgZ(8,"div",6)(9,"h5"),o._uU(10,"First slide label"),o.qZA(),o.TgZ(11,"p"),o._uU(12,"Nulla vitae elit libero, a pharetra augue mollis interdum."),o.qZA()()(),o.TgZ(13,"div",7),o._UZ(14,"img",8),o.TgZ(15,"div",6)(16,"h5"),o._uU(17,"Second slide label"),o.qZA(),o.TgZ(18,"p"),o._uU(19,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),o.qZA()()(),o.TgZ(20,"div",7),o._UZ(21,"img",9),o.TgZ(22,"div",6)(23,"h5"),o._uU(24,"Third slide label"),o.qZA(),o.TgZ(25,"p"),o._uU(26,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."),o.qZA()()()(),o.TgZ(27,"button",10),o._UZ(28,"span",11),o.TgZ(29,"span",12),o._uU(30,"Previous"),o.qZA()(),o.TgZ(31,"button",13),o._UZ(32,"span",14),o.TgZ(33,"span",12),o._uU(34,"Next"),o.qZA()()()()())}}),n})();var b=r(3809);const v=function(n){return["/product/detail",n]};function m(n,c){if(1&n&&(o.TgZ(0,"div",4)(1,"div",5)(2,"div",6),o._UZ(3,"img",7),o.TgZ(4,"div",8)(5,"a",9),o._UZ(6,"i",10),o.qZA(),o.TgZ(7,"a",9),o._UZ(8,"i",11),o.qZA(),o.TgZ(9,"a",9),o._UZ(10,"i",12),o.qZA(),o.TgZ(11,"a",9),o._UZ(12,"i",13),o.qZA()()(),o.TgZ(13,"div",14)(14,"a",15)(15,"h4"),o._uU(16),o.qZA()(),o.TgZ(17,"div",16)(18,"h5"),o._uU(19),o.qZA(),o.TgZ(20,"h6",17)(21,"del"),o._uU(22),o.qZA()()(),o.TgZ(23,"div",18),o._UZ(24,"small",19)(25,"small",19)(26,"small",19)(27,"small",19)(28,"small",19),o.TgZ(29,"small"),o._uU(30,"(99)"),o.qZA()(),o.TgZ(31,"div",20)(32,"a",21),o._uU(33,"Ver detalles"),o.qZA()()()()()),2&n){const e=c.$implicit;o.xp6(14),o.Q6J("routerLink",o.VKq(5,v,e.id)),o.xp6(2),o.Oqu(e.Nombre_Producto),o.xp6(3),o.hij("Q",e.Precio_Venta,""),o.xp6(3),o.hij("Q",e.Precio_Venta,""),o.xp6(10),o.Q6J("routerLink",o.VKq(7,v,e.id))}}let a=(()=>{class n{constructor(e){this.productService=e,this.product=[],this.prducts=[]}ngOnInit(){this.getProducts()}getProducts(){this.productService.getProducts("http://3.144.81.64:3000/usuario/ver/productos").subscribe(e=>{this.product=e.products})}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(b.M))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-products-section"]],decls:6,vars:1,consts:[[1,"container","pt-5","pb-3"],[1,"mb-4"],[1,"row","row-cols-1","row-cols-md-3","g-2"],["class","col-lg-3 col-md-4 col-sm-6 pb-1",4,"ngFor","ngForOf"],[1,"col-lg-3","col-md-4","col-sm-6","pb-1"],[1,"product-item","bg-light","mb-4"],[1,"product-img","position-relative","overflow-hidden"],["src","assets/Logo_ASIA_DEPOT.png","alt","Logo productos ASIA DEPOT",1,"img-fluid","w-100"],[1,"product-action"],[1,"btn","btn-outline-dark","btn-square"],[1,"fa","fa-shopping-cart"],[1,"fa","fa-heart"],[1,"fa","fa-sync-alt"],[1,"fa","fa-search"],[1,"text-center","py-4"],[1,"text-decoration-none","text-truncate","productName",3,"routerLink"],[1,"d-flex","align-items-center","justify-content-center","mt-2"],[1,"text-muted","ml-2"],[1,"d-flex","align-items-center","justify-content-center","mb-1"],[1,"fa","fa-star","text-primary","mr-1"],[1,"container-btn"],[1,"btn","btn-primary",3,"routerLink"]],template:function(e,_){1&e&&(o.TgZ(0,"section")(1,"div",0)(2,"h2",1),o._uU(3,"Productos destacados"),o.qZA(),o.TgZ(4,"div",2),o.YNc(5,m,34,9,"div",3),o.qZA()()()),2&e&&(o.xp6(5),o.Q6J("ngForOf",_.product))},dependencies:[t.sg,d.rH],styles:[".product-item[_ngcontent-%COMP%]{transition:.5s}.product-action[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:center;transition:.5s}.product-action[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%]{position:relative;margin:100px 3px 0;opacity:0}.product-item[_ngcontent-%COMP%]:hover{box-shadow:0 0 30px #ddd}.product-item[_ngcontent-%COMP%]:hover   .product-action[_ngcontent-%COMP%]{background:rgba(255,255,255,.7)}.product-item[_ngcontent-%COMP%]:hover   .product-action[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%]:first-child{opacity:1;margin-top:0;transition:.3s 0s}.product-item[_ngcontent-%COMP%]:hover   .product-action[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%]:nth-child(2){opacity:1;margin-top:0;transition:.3s .05s}.product-item[_ngcontent-%COMP%]:hover   .product-action[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%]:nth-child(3){opacity:1;margin-top:0;transition:.3s .1s}.product-item[_ngcontent-%COMP%]:hover   .product-action[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%]:nth-child(4){opacity:1;margin-top:0;transition:.3s .15s}.product-item[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:.5s}.product-item[_ngcontent-%COMP%]:hover   .product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.2)}.productName[_ngcontent-%COMP%]{color:#000}.container-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{font-weight:700}.text-primary[_ngcontent-%COMP%]{color:#ffd333!important}"]}),n})(),l=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-reviews-section"]],decls:27,vars:0,consts:[[1,"container","pt-5","pb-3"],[1,"mb-4"],["data-spy","scroll","data-target","#reviewsNav","data-offset","50",2,"height","400px","overflow-y","auto"],["id","review1",1,"review"],[1,"row","align-items-center"],[1,"col-md-2"],["src","https://mdbcdn.b-cdn.net/img/new/avatars/2.webp","alt","Foto del Cliente 1",1,"img-fluid","rounded-circle"],[1,"col-md-10"],["id","review2",1,"review"],["src","https://mdbcdn.b-cdn.net/img/new/avatars/3.webp","alt","Foto del Cliente 2",1,"img-fluid","rounded-circle"]],template:function(e,_){1&e&&(o.TgZ(0,"section")(1,"div",0)(2,"h2",1),o._uU(3,"Rese\xf1as"),o.qZA(),o.TgZ(4,"div",2)(5,"div",3)(6,"div",4)(7,"div",5),o._UZ(8,"img",6),o.qZA(),o.TgZ(9,"div",7)(10,"p")(11,"strong"),o._uU(12,"Nombre del Cliente"),o.qZA(),o._uU(13," - \u2605\u2605\u2605\u2605\u2605"),o.qZA(),o.TgZ(14,"p"),o._uU(15,"\xa1Producto genial! Estoy muy satisfecho con mi compra. Definitivamente lo recomiendo."),o.qZA()()()(),o.TgZ(16,"div",8)(17,"div",4)(18,"div",5),o._UZ(19,"img",9),o.qZA(),o.TgZ(20,"div",7)(21,"p")(22,"strong"),o._uU(23,"Otro Cliente"),o.qZA(),o._uU(24," - \u2605\u2605\u2605\u2605\u2606"),o.qZA(),o.TgZ(25,"p"),o._uU(26,"Gran experiencia de compra. El producto cumpli\xf3 mis expectativas."),o.qZA()()()()()()())}}),n})();const O=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-home"]],decls:10,vars:0,consts:[[1,"container","pt-4","pb-3"],[1,"text-center"]],template:function(e,_){1&e&&(o._UZ(0,"app-nav-bar"),o.TgZ(1,"div",0)(2,"div",1)(3,"h1"),o._uU(4,"Bienvenido a ASIA DEPOT"),o.qZA()()(),o._UZ(5,"app-categories-section")(6,"app-product-offers-section")(7,"app-products-section")(8,"app-reviews-section")(9,"app-footer"))},dependencies:[i.w,s.c,C,h,a,l]}),n})()},{path:"about",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-about"]],decls:4,vars:0,template:function(e,_){1&e&&(o._UZ(0,"app-nav-bar"),o.TgZ(1,"p"),o._uU(2,"about works!"),o.qZA(),o._UZ(3,"app-footer"))},dependencies:[i.w,s.c]}),n})()},{path:"contact-us",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-contact-us"]],decls:4,vars:0,template:function(e,_){1&e&&(o._UZ(0,"app-nav-bar"),o.TgZ(1,"p"),o._uU(2,"contact-us works!"),o.qZA(),o._UZ(3,"app-footer"))},dependencies:[i.w,s.c]}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[d.Bz.forChild(O),d.Bz]}),n})();var U=r(335);let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[t.ez,T,U.d]}),n})()}}]);