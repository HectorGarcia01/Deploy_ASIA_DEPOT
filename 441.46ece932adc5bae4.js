"use strict";(self.webpackChunkFrontend_ASIA_DEPOT=self.webpackChunkFrontend_ASIA_DEPOT||[]).push([[441],{7441:(ee,y,g)=>{g.r(y),g.d(y,{CategoryManagementModule:()=>W});var m=g(6895),r=g(433),p=g(5808),u=g(1548),e=g(8256),C=g(2327),f=g(9616),b=g(4713),v=g(6428),P=g(4554),x=g(7482);function M(o,a){1&o&&(e.TgZ(0,"div",18),e._uU(1," El nombre de categor\xeda es obligatorio. "),e.qZA())}function O(o,a){1&o&&(e.TgZ(0,"div",18),e._uU(1," El nombre de categor\xeda es demasiado corto (m\xednimo 3 car\xe1cteres). "),e.qZA())}function Z(o,a){1&o&&(e.TgZ(0,"div",18),e._uU(1," El nombre de categor\xeda es demasiado largo (m\xe1ximo 50 car\xe1cteres). "),e.qZA())}function A(o,a){1&o&&(e.TgZ(0,"div",18),e._uU(1," El nombre de categor\xeda no es v\xe1lido, no use car\xe1cteres especiales. "),e.qZA())}function T(o,a){1&o&&(e.TgZ(0,"div",18),e._uU(1," La descripci\xf3n es demasiado corta (m\xednimo 10 car\xe1cteres). "),e.qZA())}function E(o,a){1&o&&(e.TgZ(0,"div",18),e._uU(1," La descripci\xf3n es demasiado larga (m\xe1ximo 200 car\xe1cteres). "),e.qZA())}function w(o,a){1&o&&(e.TgZ(0,"div",18),e._uU(1," La descripci\xf3n no es v\xe1lida, no use car\xe1cteres especiales. "),e.qZA())}function S(o,a){if(1&o&&(e.TgZ(0,"span",28),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.estado.Tipo_Estado)}}function N(o,a){if(1&o&&(e.TgZ(0,"span",29),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.estado.Tipo_Estado)}}function U(o,a){if(1&o&&(e.TgZ(0,"span",30),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.estado.Tipo_Estado)}}function I(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",31),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,c=e.oxw();return e.KtG(c.activateCategory(i.id))}),e._UZ(1,"i",32),e.qZA()}}function q(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",33),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,c=e.oxw();return e.KtG(c.deleteCategory(i.id))}),e._UZ(1,"i",34),e.qZA()}}const J=function(o,a){return["/admin/update/category",o,a]};function D(o,a){if(1&o&&(e.TgZ(0,"tr")(1,"td",17)(2,"p"),e._uU(3),e.qZA()(),e.TgZ(4,"td",17)(5,"p"),e._uU(6),e.qZA()(),e.TgZ(7,"td",17)(8,"p"),e._uU(9),e.qZA()(),e.TgZ(10,"td",17),e.YNc(11,S,2,1,"span",21),e.YNc(12,N,2,1,"span",22),e.YNc(13,U,2,1,"span",23),e.qZA(),e.TgZ(14,"td",17)(15,"button",24),e._UZ(16,"i",25),e.qZA(),e.YNc(17,I,2,0,"button",26),e.YNc(18,q,2,0,"button",27),e.qZA()()),2&o){const t=a.$implicit,n=e.oxw();e.xp6(3),e.Oqu(t.Nombre_Categoria),e.xp6(3),e.Oqu(t.Descripcion_Categoria),e.xp6(3),e.Oqu(t.createdAt),e.xp6(2),e.Q6J("ngIf","Activo"===t.estado.Tipo_Estado),e.xp6(1),e.Q6J("ngIf","Pendiente"===t.estado.Tipo_Estado),e.xp6(1),e.Q6J("ngIf","Inactivo"===t.estado.Tipo_Estado),e.xp6(2),e.Q6J("routerLink",e.WLB(9,J,t.id,n.getCategoryName(t))),e.xp6(2),e.Q6J("ngIf","Inactivo"===t.estado.Tipo_Estado&&!0===n.permissions),e.xp6(1),e.Q6J("ngIf","Inactivo"!==t.estado.Tipo_Estado&&!0===n.permissions)}}function k(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"li",37)(1,"a",42),e.NdJ("click",function(){const c=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.changePage(c))}),e._uU(2),e.qZA()()}if(2&o){const t=a.$implicit,n=e.oxw(2);e.ekj("active",n.currentPage===t),e.xp6(2),e.Oqu(t)}}function Q(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"nav",35)(1,"ul",36)(2,"li",37)(3,"a",38),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.changePage(i.currentPage-1))}),e.TgZ(4,"span",39),e._uU(5,"\xab"),e.qZA()()(),e.YNc(6,k,3,3,"li",40),e.TgZ(7,"li",37)(8,"a",41),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.changePage(i.currentPage+1))}),e.TgZ(9,"span",39),e._uU(10,"\xbb"),e.qZA()()()()()}if(2&o){const t=e.oxw();e.xp6(2),e.ekj("disabled",1===t.currentPage),e.xp6(4),e.Q6J("ngForOf",t.getPagesArray()),e.xp6(1),e.ekj("disabled",t.currentPage===t.totalPages)}}function Y(o,a){1&o&&(e.TgZ(0,"div",7)(1,"div",8)(2,"h5"),e._uU(3," Lo siento, la categor\xeda que est\xe1s buscando no ha sido encontrado. Verifica el nombre o selecciona otra categor\xeda. "),e.qZA(),e._UZ(4,"img",9),e.qZA()())}function z(o,a){1&o&&(e.TgZ(0,"div",22),e._uU(1," El nombre de categor\xeda es demasiado corto (m\xednimo 3 car\xe1cteres). "),e.qZA())}function R(o,a){1&o&&(e.TgZ(0,"div",22),e._uU(1," El nombre de categor\xeda es demasiado largo (m\xe1ximo 50 car\xe1cteres). "),e.qZA())}function $(o,a){1&o&&(e.TgZ(0,"div",22),e._uU(1," El nombre de categor\xeda no es v\xe1lido, no use car\xe1cteres especiales. "),e.qZA())}function j(o,a){1&o&&(e.TgZ(0,"div",22),e._uU(1," La descripci\xf3n no es v\xe1lida, no use car\xe1cteres especiales. "),e.qZA())}function B(o,a){1&o&&(e.TgZ(0,"div",22),e._uU(1," La descripci\xf3n es demasiado corta (m\xednimo 10 car\xe1cteres). "),e.qZA())}function V(o,a){1&o&&(e.TgZ(0,"div",22),e._uU(1," La descripci\xf3n es demasiado larga (m\xe1ximo 200 car\xe1cteres). "),e.qZA())}function G(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",10)(1,"div",11)(2,"h2"),e._uU(3,"Actualizar datos"),e.qZA()(),e.TgZ(4,"form",12),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onSubmit())}),e.TgZ(5,"div",13),e._UZ(6,"input",14),e.TgZ(7,"label",15),e._uU(8),e.qZA(),e.YNc(9,z,2,0,"div",16),e.YNc(10,R,2,0,"div",16),e.YNc(11,$,2,0,"div",16),e.qZA(),e.TgZ(12,"div",13),e._UZ(13,"textarea",17),e.TgZ(14,"label",18),e._uU(15,"Descripci\xf3n de Categor\xeda"),e.qZA(),e.YNc(16,j,2,0,"div",16),e.YNc(17,B,2,0,"div",16),e.YNc(18,V,2,0,"div",16),e.qZA(),e.TgZ(19,"div",19)(20,"div",20)(21,"button",21),e._uU(22,"Actualizar datos"),e.qZA()()()()()}if(2&o){const t=e.oxw();let n,i,c,s,l,d;e.xp6(4),e.Q6J("formGroup",t.updateForm),e.xp6(4),e.Oqu(t.category.Nombre_Categoria),e.xp6(1),e.Q6J("ngIf",(null==(n=t.updateForm.get("nombre"))?null:n.hasError("minlength"))&&(null==(n=t.updateForm.get("nombre"))?null:n.touched)),e.xp6(1),e.Q6J("ngIf",(null==(i=t.updateForm.get("nombre"))?null:i.hasError("maxlength"))&&(null==(i=t.updateForm.get("nombre"))?null:i.touched)),e.xp6(1),e.Q6J("ngIf",(null==(c=t.updateForm.get("nombre"))?null:c.hasError("pattern"))&&(null==(c=t.updateForm.get("nombre"))?null:c.touched)),e.xp6(5),e.Q6J("ngIf",(null==(s=t.updateForm.get("descripcion"))?null:s.hasError("pattern"))&&(null==(s=t.updateForm.get("descripcion"))?null:s.touched)),e.xp6(1),e.Q6J("ngIf",(null==(l=t.updateForm.get("descripcion"))?null:l.hasError("minlength"))&&(null==(l=t.updateForm.get("descripcion"))?null:l.touched)),e.xp6(1),e.Q6J("ngIf",(null==(d=t.updateForm.get("descripcion"))?null:d.hasError("maxlength"))&&(null==(d=t.updateForm.get("descripcion"))?null:d.touched))}}const H=[{path:"",redirectTo:"create/category",pathMatch:"full"},{path:"create/category",component:(()=>{class o{constructor(t,n,i,c,s){this.toggleNavBarService=t,this.authService=n,this.categoryService=i,this.customAlertService=c,this.router=s,this.sidebarVisible=!1,this.pathRole="",this.toggleNavbarStatus(),this.validateForm()}ngOnInit(){this.isSuperAdmin()}ngOnDestroy(){this.subscription.unsubscribe()}toggleNavbarStatus(){this.subscription=this.toggleNavBarService.sidebarVisibility$.subscribe(t=>{this.sidebarVisible=t;const n=document.getElementById("contentMove");n&&(this.sidebarVisible?(n.style.width="calc(100% - 280px)",n.style.left="280px"):(n.style.width="100%",n.style.left="0"))})}isSuperAdmin(){return"SuperAdmin"===this.authService.getCookieRole()?(this.pathRole="superAdmin",!0):(this.pathRole="admin",!1)}validateForm(){this.registerCategoryForm=new r.cw({nombre_categoria:new r.NI("",[r.kI.required,r.kI.pattern(/^[^\[\]<>(){\\}|'';]+$/),r.kI.minLength(3),r.kI.maxLength(50)]),descripcion_categoria:new r.NI("",[r.kI.pattern(/^[^\[\]<>(){\\}|'';]+$/),r.kI.minLength(10),r.kI.maxLength(200)])})}getCategoryData(){const t={Nombre_Categoria:this.registerCategoryForm.get("nombre_categoria")?.value,Descripcion_Categoria:this.registerCategoryForm.get("descripcion_categoria")?.value};for(const n in t)t.hasOwnProperty(n)&&(null==t[n]||""===t[n])&&delete t[n];return 0===Object.keys(t).length?null:t}onSubmit(){try{if(this.registerCategoryForm.valid){const t=this.getCategoryData();this.categoryService.createCategory(`${u.Q}/${this.pathRole}/crear/categoria`,t).subscribe({next:n=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",n.msg),this.registerCategoryForm.reset(),this.router.navigate(["/admin/list/categories"])},error:n=>{this.customAlertService.sweetAlertPersonalizada("error","Error",n.error.error)}})}else this.customAlertService.sweetAlertPersonalizada("error","Error","Por favor, verifica los campos del formulario.")}catch(t){console.log(t.error)}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(C.p),e.Y36(f.e),e.Y36(b.u),e.Y36(v.y),e.Y36(p.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-new-category"]],decls:32,vars:8,consts:[["id","main-content"],[1,"d-flex","justify-content-center"],[1,"col-md-9","mt-5"],[1,"container","mt-3"],[1,"row","d-flex","justify-content-center"],[1,"col-md-5","bg-light","shadow-lg","rounded-5","p-5","mb-3"],[1,"text-center","mb-3"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"form-floating","mb-3"],["type","text","formControlName","nombre_categoria","placeholder","Ingresa el nombre del producto",1,"form-control"],["for","registerName"],["class","text-danger",4,"ngIf"],["id","floatingTextarea2","minlength","10","maxlength","201","formControlName","descripcion_categoria","placeholder","Ingresa la descripci\xf3n de categor\xeda",1,"form-control",2,"max-height","150px","height","125px"],["for","registerAddress"],[1,"row","mb-4"],[1,"col-md-12","d-flex","justify-content-center","mt-3"],["type","submit",1,"btn","btn-primary","btn-block","w-75"],[1,"text-danger"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-nav-bar"),e.TgZ(2,"section",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"h2"),e._uU(9,"Registro de Categor\xedas"),e.qZA()(),e.TgZ(10,"form",7),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(11,"div",8)(12,"div",9),e._UZ(13,"input",10),e.TgZ(14,"label",11),e._uU(15,"Nombre de Categor\xeda"),e.qZA(),e.YNc(16,M,2,0,"div",12),e.YNc(17,O,2,0,"div",12),e.YNc(18,Z,2,0,"div",12),e.YNc(19,A,2,0,"div",12),e.qZA(),e.TgZ(20,"div",9),e._UZ(21,"textarea",13),e.TgZ(22,"label",14),e._uU(23,"Descripci\xf3n de Categor\xeda"),e.qZA(),e.YNc(24,T,2,0,"div",12),e.YNc(25,E,2,0,"div",12),e.YNc(26,w,2,0,"div",12),e.qZA()(),e.TgZ(27,"div",15)(28,"div",16)(29,"button",17),e._uU(30,"Registrar"),e.qZA()()()()()()(),e._UZ(31,"app-footer"),e.qZA()()()),2&t){let i,c,s,l,d,_,h;e.xp6(10),e.Q6J("formGroup",n.registerCategoryForm),e.xp6(6),e.Q6J("ngIf",(null==(i=n.registerCategoryForm.get("nombre_categoria"))?null:i.hasError("required"))&&(null==(i=n.registerCategoryForm.get("nombre_categoria"))?null:i.touched)),e.xp6(1),e.Q6J("ngIf",(null==(c=n.registerCategoryForm.get("nombre_categoria"))?null:c.hasError("minlength"))&&(null==(c=n.registerCategoryForm.get("nombre_categoria"))?null:c.touched)),e.xp6(1),e.Q6J("ngIf",(null==(s=n.registerCategoryForm.get("nombre_categoria"))?null:s.hasError("maxlength"))&&(null==(s=n.registerCategoryForm.get("nombre_categoria"))?null:s.touched)),e.xp6(1),e.Q6J("ngIf",(null==(l=n.registerCategoryForm.get("nombre_categoria"))?null:l.hasError("pattern"))&&(null==(l=n.registerCategoryForm.get("nombre_categoria"))?null:l.touched)),e.xp6(5),e.Q6J("ngIf",(null==(d=n.registerCategoryForm.get("descripcion_categoria"))?null:d.hasError("minlength"))&&(null==(d=n.registerCategoryForm.get("descripcion_categoria"))?null:d.touched)),e.xp6(1),e.Q6J("ngIf",(null==(_=n.registerCategoryForm.get("descripcion_categoria"))?null:_.hasError("maxlength"))&&(null==(_=n.registerCategoryForm.get("descripcion_categoria"))?null:_.touched)),e.xp6(1),e.Q6J("ngIf",(null==(h=n.registerCategoryForm.get("descripcion_categoria"))?null:h.hasError("pattern"))&&(null==(h=n.registerCategoryForm.get("descripcion_categoria"))?null:h.touched))}},dependencies:[m.O5,r._Y,r.Fj,r.JJ,r.JL,r.wO,r.nD,r.sg,r.u,P.w,x.c]}),o})()},{path:"list/categories",component:(()=>{class o{constructor(t,n,i,c){this.toggleNavBarService=t,this.authService=n,this.categoryService=i,this.customAlertService=c,this.sidebarVisible=!1,this.categories=[],this.permissions=!1,this.pathRole="",this.totalPages=0,this.currentPage=1,this.pageSize=5,this.searchQuery="",this.toggleNavbarStatus()}isSuperAdmin(){return"SuperAdmin"===this.authService.getCookieRole()?(this.pathRole="superAdmin",this.permissions=!0,!0):(this.pathRole="admin",this.permissions=!1,!1)}ngOnInit(){this.scrollToTop(),this.isSuperAdmin(),this.getCategories()}ngOnDestroy(){this.subscription.unsubscribe()}toggleNavbarStatus(){this.subscription=this.toggleNavBarService.sidebarVisibility$.subscribe(t=>{this.sidebarVisible=t;const n=document.getElementById("contentMove");n&&(this.sidebarVisible?(n.style.width="calc(100% - 280px)",n.style.left="280px"):(n.style.width="100%",n.style.left="0"))})}getCategories(){try{this.categoryService.getCategories(`${u.Q}/${this.pathRole}/ver/categorias/paginacion`,this.currentPage,this.pageSize).subscribe({next:t=>{this.categories=t.categories,this.totalPages=t.totalPages,this.currentPage=t.currentPage,this.categories.forEach(n=>{if(n.createdAt){const s=n.createdAt.split("T")[0];n.createdAt=s}})},error:t=>{console.log(t.error.error)}})}catch(t){console.log(t.error)}}onSearch(t){t.preventDefault(),this.searchCategories(this.searchQuery)}searchCategories(t){try{this.categoryService.getCategories(`${u.Q}/${this.pathRole}/ver/categorias/paginacion?nombre=${t}`,this.currentPage,this.pageSize).subscribe({next:n=>{this.categories=n.categories,this.totalPages=n.totalPages,this.currentPage=n.currentPage,this.categories.forEach(i=>{if(i.createdAt){const l=i.createdAt.split("T")[0];i.createdAt=l}})},error:n=>{console.log(n.error.error)}})}catch(n){console.log(n.error)}}deleteCategory(t){try{this.categoryService.deleteCategory(`${u.Q}/superAdmin/eliminar/categoria`,t).subscribe({next:n=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",n.msg),this.getCategories()},error:n=>{this.customAlertService.sweetAlertPersonalizada("error","Error",n.error.error)}})}catch(n){console.log(n.error)}}activateCategory(t){try{this.categoryService.activateCategory(`${u.Q}/superAdmin/activar/categoria`,t).subscribe({next:n=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",n.msg),this.getCategories()},error:n=>{this.customAlertService.sweetAlertPersonalizada("error","Error",n.error.error)}})}catch(n){console.log(n.error)}}getCategoryName(t){return t.Nombre_Categoria.toLowerCase().replace(/ /g,"-")}changePage(t){t>=1&&t<=this.totalPages&&(this.currentPage=t,this.getCategories(),this.scrollToTop())}changePageSize(t){this.pageSize=+t.target.value,this.currentPage=1,this.getCategories()}getPagesArray(){const t=[];for(let n=1;n<=this.totalPages;n++)t.push(n);return t}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(C.p),e.Y36(f.e),e.Y36(b.u),e.Y36(v.y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-categories"]],decls:53,vars:13,consts:[["id","main-content"],[1,"d-flex","justify-content-center"],[1,"col-md-9","mt-4"],[1,"container"],[1,"row","d-flex","justify-content-center"],["id","contentMove",1,"table-data"],[1,"order"],[1,"head"],[3,"submit"],[1,"form-input"],["type","search","placeholder","Buscar por nombre","name","search",3,"ngModel","ngModelChange"],["type","submit",1,"search-btn"],[1,"bx","bx-search"],[1,"col-md-1","form-floating"],["aria-label","Default select example",1,"form-select",3,"change"],[3,"value","selected"],["for","registerShow"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["aria-label","Page navigation example",4,"ngIf"],["class","status active",4,"ngIf"],["class","status pending",4,"ngIf"],["class","status inactive",4,"ngIf"],["title","Editar",1,"btn","btn-sm","btn-warning",3,"routerLink"],[1,"fa","fa-edit"],["class","btn btn-sm btn-success","title","Activar",3,"click",4,"ngIf"],["class","btn btn-sm btn-danger","title","Desactivar",3,"click",4,"ngIf"],[1,"status","active"],[1,"status","pending"],[1,"status","inactive"],["title","Activar",1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-check"],["title","Desactivar",1,"btn","btn-sm","btn-danger",3,"click"],[1,"fa","fa-times"],["aria-label","Page navigation example"],[1,"pagination"],[1,"page-item"],["aria-label","Previous",1,"btn","page-link",3,"click"],["aria-hidden","true"],["class","page-item",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"btn","page-link",3,"click"],[1,"btn","page-link",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-nav-bar"),e.TgZ(2,"section",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"h2"),e._uU(10,"Categor\xedas"),e.qZA(),e.TgZ(11,"form",8),e.NdJ("submit",function(c){return n.onSearch(c)}),e.TgZ(12,"div",9)(13,"input",10),e.NdJ("ngModelChange",function(c){return n.searchQuery=c}),e.qZA(),e.TgZ(14,"button",11),e._UZ(15,"i",12),e.qZA()()(),e.TgZ(16,"div",13)(17,"select",14),e.NdJ("change",function(c){return n.changePageSize(c)}),e.TgZ(18,"option",15),e._uU(19,"5"),e.qZA(),e.TgZ(20,"option",15),e._uU(21,"20"),e.qZA(),e.TgZ(22,"option",15),e._uU(23,"40"),e.qZA(),e.TgZ(24,"option",15),e._uU(25,"60"),e.qZA(),e.TgZ(26,"option",15),e._uU(27,"80"),e.qZA()(),e.TgZ(28,"label",16),e._uU(29,"Mostrar"),e.qZA()()(),e.TgZ(30,"table")(31,"thead")(32,"tr")(33,"th",17)(34,"h5"),e._uU(35,"Nombre"),e.qZA()(),e.TgZ(36,"th",17)(37,"h5"),e._uU(38,"Descripci\xf3n"),e.qZA()(),e.TgZ(39,"th",17)(40,"h5"),e._uU(41,"Fecha de Creaci\xf3n"),e.qZA()(),e.TgZ(42,"th",17)(43,"h5"),e._uU(44,"Estado"),e.qZA()(),e.TgZ(45,"th",17)(46,"h5"),e._uU(47,"Acciones"),e.qZA()()()(),e.TgZ(48,"tbody"),e.YNc(49,D,19,12,"tr",18),e.qZA()(),e.TgZ(50,"div",19),e.YNc(51,Q,11,5,"nav",20),e.qZA()()()()(),e._UZ(52,"app-footer"),e.qZA()()()),2&t&&(e.xp6(13),e.Q6J("ngModel",n.searchQuery),e.xp6(5),e.Q6J("value",5)("selected",5===n.pageSize),e.xp6(2),e.Q6J("value",20)("selected",20===n.pageSize),e.xp6(2),e.Q6J("value",40)("selected",40===n.pageSize),e.xp6(2),e.Q6J("value",60)("selected",60===n.pageSize),e.xp6(2),e.Q6J("value",80)("selected",80===n.pageSize),e.xp6(23),e.Q6J("ngForOf",n.categories),e.xp6(2),e.Q6J("ngIf",n.totalPages>1))},dependencies:[m.sg,m.O5,r._Y,r.YN,r.Kr,r.Fj,r.JJ,r.JL,r.On,r.F,p.rH,P.w,x.c],styles:[".head[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:400px;width:100%;margin-right:auto}.head[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]{display:flex;align-items:center;height:36px}.head[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex-grow:1;padding:0 16px;height:100%;border:none;background:#eee;border-radius:36px 0 0 36px;outline:none;width:100%;color:#342e37}.head[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:36px;height:100%;display:flex;justify-content:center;align-items:center;background:#3C91E6;color:#f9f9f9;font-size:18px;border:none;outline:none;border-radius:0 36px 36px 0;cursor:pointer}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;grid-gap:24px;margin-top:24px;margin-bottom:30px;width:100%;color:#342e37}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:20px;background:#F9F9F9;border:1px solid rgb(181,179,179);padding:24px;overflow-x:auto}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;align-items:center;grid-gap:16px;margin-bottom:24px}.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-right:auto;font-size:24px;font-weight:600}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .bx[_ngcontent-%COMP%]{cursor:pointer}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]{flex-grow:1;flex-basis:500px}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-bottom:12px;font-size:13px;text-align:left;border-bottom:1px solid #eee}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:16px 0}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#eee}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-size:10px;padding:6px 16px;color:#f9f9f9;border-radius:20px;font-weight:700}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .status.active[_ngcontent-%COMP%]{background:#28a745;font-weight:700;font-size:14px}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .status.pending[_ngcontent-%COMP%]{background:#007bff;font-weight:700;font-size:14px}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .status.inactive[_ngcontent-%COMP%]{background:#dc3545;font-weight:700;font-size:14px}@media (max-width: 768px){.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]{margin-top:10px}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:16px;padding:10px 0}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{display:none}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:block;width:100%;overflow-x:auto}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;border-bottom:1px solid #eee;padding:20px 0}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:6px 0;text-align:center}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-size:15px;padding:6px 12px}}"]}),o})()},{path:"update/category/:id/:name",component:(()=>{class o{constructor(t,n,i,c,s,l){this.toggleNavBarService=t,this.route=n,this.authService=i,this.categoryService=c,this.customAlertService=s,this.router=l,this.sidebarVisible=!1,this.categoryId="",this.category={},this.permissions=!1,this.pathRole="",this.error404=!1,this.toggleNavbarStatus(),this.validateForm()}ngOnInit(){this.isSuperAdmin(),this.getParamsId()}ngOnDestroy(){this.subscription.unsubscribe()}toggleNavbarStatus(){this.subscription=this.toggleNavBarService.sidebarVisibility$.subscribe(t=>{this.sidebarVisible=t;const n=document.getElementById("contentMove");n&&(this.sidebarVisible?(n.style.width="calc(100% - 280px)",n.style.left="280px"):(n.style.width="100%",n.style.left="0"))})}getParamsId(){this.route.paramMap.subscribe(t=>{this.categoryId=t.get("id"),this.getCategoryId(this.categoryId)})}isSuperAdmin(){return"SuperAdmin"===this.authService.getCookieRole()?(this.pathRole="superAdmin",this.permissions=!0,!0):(this.pathRole="admin",this.permissions=!1,!1)}getCategoryId(t){try{this.categoryService.getCategoryId(`${u.Q}/${this.pathRole}/ver/categoria`,t).subscribe({next:n=>{this.category=n.category,this.error404=!1},error:n=>{this.error404=!0,console.log(n.error.error)}})}catch(n){console.log(n.error)}}validateForm(){this.updateForm=new r.cw({nombre:new r.NI("",[r.kI.pattern(/^[^\[\]<>(){\\}|'';]+$/),r.kI.minLength(3),r.kI.maxLength(50)]),descripcion:new r.NI("",[r.kI.pattern(/^[^[\]<>(){}_=\\|';]+$/),r.kI.minLength(10),r.kI.maxLength(200)])})}getCategoryData(){const t={Nombre_Categoria:this.updateForm.get("nombre")?.value,Descripcion_Categoria:this.updateForm.get("descripcion")?.value};for(const n in t)t.hasOwnProperty(n)&&(null==t[n]||""===t[n])&&delete t[n];return 0===Object.keys(t).length?null:t}onSubmit(){try{if(this.updateForm.valid){const t=this.getCategoryData();t?this.categoryService.updateCategory(`${u.Q}/${this.pathRole}/actualizar/categoria`,this.categoryId,t).subscribe({next:n=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",n.msg),this.updateForm.reset(),this.router.navigate(["/admin/list/categories"])},error:n=>{this.customAlertService.sweetAlertPersonalizada("error","Error",n.error.error)}}):(this.customAlertService.sweetAlertPersonalizada("success","Sin cambios","No has realizado ning\xfan cambio."),this.router.navigate(["/admin/list/categories"]))}else this.customAlertService.sweetAlertPersonalizada("error","Error","Por favor, verifica los campos del formulario.")}catch(t){console.log(t.error)}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(C.p),e.Y36(p.gz),e.Y36(f.e),e.Y36(b.u),e.Y36(v.y),e.Y36(p.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-update-category"]],decls:9,vars:2,consts:[["id","main-content"],[1,"d-flex","justify-content-center","mt-4"],[1,"col-md-9","mt-5"],[1,"container","mb-5"],[1,"row","d-flex","justify-content-center"],["class","row justify-content-center align-items-center",4,"ngIf"],["class","col-md-5 bg-light shadow-lg rounded-5 p-5 p-5 mb-3",4,"ngIf"],[1,"row","justify-content-center","align-items-center"],[1,"col-12","text-center","mt-5"],["width","500","height","500","src","assets/404_2.jpg","alt","Error 404",1,"img-fluid","rounded-circle"],[1,"col-md-5","bg-light","shadow-lg","rounded-5","p-5","p-5","mb-3"],[1,"text-center","mb-3"],[3,"formGroup","ngSubmit"],[1,"form-floating","mb-3"],["type","text","formControlName","nombre","placeholder","Ingresa el nombre del proveedor",1,"form-control"],["for","registerName"],["class","text-danger",4,"ngIf"],["id","floatingTextarea2","minlength","10","maxlength","201","formControlName","descripcion","placeholder","Ingresa tu direcci\xf3n general",1,"form-control",2,"max-height","150px","height","125px"],["for","registerAddress"],[1,"row","mb-4"],[1,"col-md-12","d-flex","justify-content-center","mt-3"],["type","submit",1,"btn","btn-primary","btn-block","w-75"],[1,"text-danger"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-nav-bar"),e.TgZ(2,"section",1)(3,"div",2)(4,"div",3)(5,"div",4),e.YNc(6,Y,5,0,"div",5),e.YNc(7,G,23,8,"div",6),e.qZA()(),e._UZ(8,"app-footer"),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",1==n.error404),e.xp6(1),e.Q6J("ngIf",0==n.error404))},dependencies:[m.O5,r._Y,r.Fj,r.JJ,r.JL,r.wO,r.nD,r.sg,r.u,P.w,x.c]}),o})()}];let K=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(H),p.Bz]}),o})();var X=g(592);let W=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,r.UX,r.u5,K,X.g]}),o})()}}]);