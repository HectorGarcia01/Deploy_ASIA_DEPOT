"use strict";(self.webpackChunkFrontend_ASIA_DEPOT=self.webpackChunkFrontend_ASIA_DEPOT||[]).push([[247],{2247:(j,v,a)=>{a.r(v),a.d(v,{AdminProfileModule:()=>J});var A=a(6895),i=a(433),c=a(5808),m=a(1548),e=a(8256),Z=a(9616),b=a(7638),U=a(69),_=a(6428),T=a(4554),P=a(7482);function S(r,n){1&r&&(e.TgZ(0,"div",30),e._uU(1," El nombre es demasiado corto (m\xednimo 3 car\xe1cteres). "),e.qZA())}function y(r,n){1&r&&(e.TgZ(0,"div",30),e._uU(1," El nombre es demasiado largo (m\xe1ximo 30 car\xe1cteres). "),e.qZA())}function F(r,n){1&r&&(e.TgZ(0,"div",30),e._uU(1," El nombre no es v\xe1lido, no use car\xe1cteres especiales. "),e.qZA())}function x(r,n){1&r&&(e.TgZ(0,"div",30),e._uU(1," El apellido es demasiado corto (m\xednimo 3 car\xe1cteres). "),e.qZA())}function C(r,n){1&r&&(e.TgZ(0,"div",30),e._uU(1," El apellido es demasiado largo (m\xe1ximo 30 car\xe1cteres). "),e.qZA())}function w(r,n){1&r&&(e.TgZ(0,"div",30),e._uU(1," El apellido no es v\xe1lido, no use car\xe1cteres especiales. "),e.qZA())}function I(r,n){1&r&&(e.TgZ(0,"div",30),e._uU(1," El tel\xe9fono no es v\xe1lido, debe de poseer 8 d\xedgitos. "),e.qZA())}function q(r,n){1&r&&(e.TgZ(0,"div",30),e._uU(1," El NIT no es v\xe1lido. "),e.qZA())}const N=[{path:"",redirectTo:"profile",pathMatch:"full"},{path:"profile",component:(()=>{class r{constructor(t,o,l,s){this.authService=t,this.adminService=o,this.sharedService=l,this.customAlertService=s,this.employee={},this.image="assets/transparent.png",this.pathRole=""}ngOnInit(){this.viewProfile(),this.getProfilePicture()}isSuperAdmin(){return"SuperAdmin"===this.authService.getCookieRole()?(this.pathRole="superAdmin",!0):(this.pathRole="admin",!1)}viewProfile(){try{this.isSuperAdmin(),this.adminService.getEmployeeProfile(`${m.Q}/${this.pathRole}/ver/perfil`).subscribe({next:t=>{this.employee=t.employee},error:t=>{this.customAlertService.sweetAlertPersonalizada("error","Error",t.error.error)}})}catch(t){console.log(t.error)}}getProfilePicture(){try{this.isSuperAdmin(),this.adminService.getProfilePhoto(`${m.Q}/${this.pathRole}/ver/avatar`).subscribe({next:t=>{this.image=URL.createObjectURL(t)},error:t=>{this.image="assets/perfil_picture.png"}})}catch(t){console.log(t.error)}}deleteProfilePicture(){try{this.adminService.deleteProfilePhoto(`${m.Q}/${this.pathRole}/eliminar/avatar`).subscribe({next:t=>{this.image="assets/perfil_picture.png",this.customAlertService.sweetAlertPersonalizada("success","Exitoso",t.msg),this.sharedService.profileImageUpdated.emit("assets/perfil_picture.png")},error:t=>{this.customAlertService.sweetAlertPersonalizada("error","Error",t.error.error)}})}catch(t){console.log(t.error)}}logout(){try{this.authService.logout().subscribe({next:t=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",t.msg),this.authService.deleteCookie()},error:t=>{this.customAlertService.sweetAlertPersonalizada("error","Error",t.error.error)}})}catch(t){console.log(t.error)}}logoutAll(){try{this.authService.logoutAll().subscribe({next:t=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",t.msg),this.authService.deleteCookie()},error:t=>{this.customAlertService.sweetAlertPersonalizada("error","Error",t.error.error)}})}catch(t){console.log(t.error)}}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(Z.e),e.Y36(b.a),e.Y36(U.F),e.Y36(_.y))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-profile"]],decls:70,vars:10,consts:[["id","main-content"],[1,"d-flex","justify-content-center"],[1,"col-md-9","mt-4"],[1,"container"],[1,"row","d-flex","justify-content-center"],[1,"col-md-9","bg-light","mb-3"],[1,"d-flex","flex-column","flex-md-row","align-items-center","justify-content-center"],[1,"col-md-4"],["width","70%","alt","Foto-Perfil",1,"img-fluid","rounded-circle",3,"src"],[1,"col-md-6"],[1,"col-md-9","mb-5"],[1,"d-flex","flex-column","flex-md-row","align-items-center","justify-content-between"],[1,"col-md-6","bg-light","p-5","mb-5","container-info"],[1,"mb-4"],[1,"mb-3"],["for","nombre"],["id","nombre"],["for","apellido"],["id","apellido"],["for","correo"],["id","correo"],["for","telefono"],["id","telefono"],["for","nit"],["id","nit"],[1,"col-md-5","bg-light","p-5"],[1,"d-flex","flex-column","btnAction"],[1,"btn","btn-primary","btn-block",3,"routerLink"],[1,"btn","btn-danger","btn-block",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-nav-bar"),e.TgZ(2,"section",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7),e._UZ(9,"img",8),e.qZA(),e.TgZ(10,"div",9)(11,"h1"),e._uU(12),e.qZA(),e.TgZ(13,"h1"),e._uU(14),e.qZA()()()(),e.TgZ(15,"div",10)(16,"div",11)(17,"div",12)(18,"h3",13),e._uU(19,"Informaci\xf3n personal"),e.qZA(),e.TgZ(20,"div",14)(21,"label",15)(22,"strong"),e._uU(23,"Nombre"),e.qZA()(),e.TgZ(24,"p",16),e._uU(25),e.qZA()(),e.TgZ(26,"div",14)(27,"label",17)(28,"strong"),e._uU(29,"Apellido"),e.qZA()(),e.TgZ(30,"p",18),e._uU(31),e.qZA()(),e.TgZ(32,"div",14)(33,"label",19)(34,"strong"),e._uU(35,"Correo"),e.qZA()(),e.TgZ(36,"p",20),e._uU(37),e.qZA()(),e.TgZ(38,"div",14)(39,"label",21)(40,"strong"),e._uU(41,"Tel\xe9fono"),e.qZA()(),e.TgZ(42,"p",22),e._uU(43),e.qZA()(),e.TgZ(44,"div",14)(45,"label",23)(46,"strong"),e._uU(47,"NIT"),e.qZA()(),e.TgZ(48,"p",24),e._uU(49),e.qZA()()(),e.TgZ(50,"div",25)(51,"h3",13),e._uU(52,"Acciones"),e.qZA(),e.TgZ(53,"div",26)(54,"div",14)(55,"a",27),e._uU(56,"Actualizar Datos"),e.qZA()(),e.TgZ(57,"div",14)(58,"a",27),e._uU(59,"Cambiar Contrase\xf1a"),e.qZA()(),e.TgZ(60,"div",14)(61,"a",28),e.NdJ("click",function(){return o.deleteProfilePicture()}),e._uU(62,"Borrar Foto de Perfil"),e.qZA()(),e.TgZ(63,"div",14)(64,"a",28),e.NdJ("click",function(){return o.logout()}),e._uU(65,"Cerrar Sesi\xf3n"),e.qZA()(),e.TgZ(66,"div",14)(67,"a",28),e.NdJ("click",function(){return o.logoutAll()}),e._uU(68,"Cerrar Todas las Sesiones"),e.qZA()()()()()()()(),e._UZ(69,"app-footer"),e.qZA()()()),2&t&&(e.xp6(9),e.s9C("src",o.image,e.LSH),e.xp6(3),e.Oqu(o.employee.Nombre_Empleado),e.xp6(2),e.Oqu(o.employee.Apellido_Empleado),e.xp6(11),e.Oqu(o.employee.Nombre_Empleado),e.xp6(6),e.Oqu(o.employee.Apellido_Empleado),e.xp6(6),e.Oqu(o.employee.Correo_Empleado),e.xp6(6),e.Oqu(o.employee.Telefono_Empleado),e.xp6(6),e.Oqu(o.employee.NIT_Empleado),e.xp6(6),e.Q6J("routerLink","/admin/profile/update"),e.xp6(3),e.Q6J("routerLink","/admin/profile/change-password"))},dependencies:[c.rH,T.w,P.c],styles:[".btnAction[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{max-width:300px;width:100%}"]}),r})()},{path:"profile/update",component:(()=>{class r{constructor(t,o,l,s,d){this.fb=t,this.authService=o,this.adminService=l,this.customAlertService=s,this.router=d,this.image="assets/transparent.png",this.uploading=!1,this.previewImage=null,this.pathRole="",this.validateForm()}isSuperAdmin(){return"SuperAdmin"===this.authService.getCookieRole()?(this.pathRole="superAdmin",!0):(this.pathRole="admin",!1)}ngOnInit(){this.scrollToTop(),this.isSuperAdmin(),this.getProfilePicture()}validateForm(){this.updateForm=new i.cw({nombre:new i.NI("",[i.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\xfc\xdc\s]+$/),i.kI.minLength(3),i.kI.maxLength(30)]),apellido:new i.NI("",[i.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\xfc\xdc\s]+$/),i.kI.minLength(3),i.kI.maxLength(30)]),telefono:new i.NI("",[i.kI.pattern(/^[345][0-9]{7}$/)]),nit:new i.NI("",[i.kI.pattern("^[0-9]+$")])})}getUserData(){const t={Nombre_Empleado:this.updateForm.get("nombre")?.value,Apellido_Empleado:this.updateForm.get("apellido")?.value,Telefono_Empleado:this.updateForm.get("telefono")?.value,NIT_Empleado:this.updateForm.get("nit")?.value};for(const o in t)t.hasOwnProperty(o)&&(null==t[o]||""===t[o])&&delete t[o];return 0===Object.keys(t).length?null:t}onSubmit(){try{if(this.updateForm.valid){const t=this.getUserData();t?this.adminService.updateEmployee(`${m.Q}/${this.pathRole}/actualizar/perfil`,t).subscribe({next:o=>{this.customAlertService.sweetAlertPersonalizada("success","Exitoso",o.msg),this.updateForm.reset(),this.router.navigate(["/admin/profile"])},error:o=>{this.customAlertService.sweetAlertPersonalizada("error","Error",o.error.error)}}):(this.customAlertService.sweetAlertPersonalizada("success","Sin cambios","No has realizado ning\xfan cambio."),this.router.navigate(["/admin/profile"]))}else this.customAlertService.sweetAlertPersonalizada("error","Error","Por favor, verifica los campos del formulario.")}catch(t){console.log(t.error)}}getProfilePicture(){try{this.isSuperAdmin(),this.adminService.getProfilePhoto(`${m.Q}/${this.pathRole}/ver/avatar`).subscribe({next:t=>{this.image=URL.createObjectURL(t)},error:t=>{this.image="assets/perfil_picture.png"}})}catch(t){console.log(t.error)}}onUploadAvatar(){try{this.selectedFile?(this.uploading=!0,this.isSuperAdmin(),this.adminService.uploadProfilePhoto(`${m.Q}/${this.pathRole}/subir/avatar`,this.selectedFile).subscribe({next:t=>{this.uploading=!1,this.customAlertService.sweetAlertPersonalizada("success","Exitoso",t.msg),this.router.navigate(["admin/profile"])},error:t=>{this.uploading=!1,this.customAlertService.sweetAlertPersonalizada("error","Error",t.error.error)}})):this.customAlertService.sweetAlertPersonalizada("error","Im\xe1gen no seleccionada","Por favor selecciona una im\xe1gen.")}catch(t){console.log(t.error)}}onFileSelected(t){const o=t.target;if(o.files&&o.files.length>0){const l=o.files[0],s=l.name.split(".").pop()?.toLowerCase();if(s)if(["jpg","jpeg","png"].includes(s)){this.selectedFile=l;const u=new FileReader;u.onload=p=>{this.previewImage=p.target?.result},u.readAsDataURL(l)}else this.customAlertService.sweetAlertPersonalizada("error","Archivo no v\xe1lido","Selecciona un archivo con una extensi\xf3n v\xe1lida (.jpg, .jpeg o .png).");else this.customAlertService.sweetAlertPersonalizada("error","Archivo no v\xe1lido","No se pudo determinar la extensi\xf3n del archivo.")}}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(i.qu),e.Y36(Z.e),e.Y36(b.a),e.Y36(_.y),e.Y36(c.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-update-profile"]],decls:52,vars:11,consts:[["id","main-content"],[1,"d-flex","justify-content-center"],[1,"container","mt-5"],[1,"row"],[1,"col-md-12","mb-5"],[1,"d-flex","flex-column","flex-md-row","align-items-center","justify-content-center"],[1,"col-md-4","bg-light","p-5","mb-5",2,"margin-right","20px"],["alt","Foto de Perfil",1,"img-fluid","rounded-circle",2,"max-width","250px","max-height","250px",3,"src"],[3,"ngSubmit"],[1,"mt-3"],[1,"form-group"],["id","formFile","type","file","accept",".png, .jpg, .jpeg","name","avatar","required","",1,"mt-3","form-control",3,"change"],[1,"row","mb-4"],[1,"col-md-12","d-flex","justify-content-center","mt-4"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"col-md-5","bg-light","p-5","mb-5"],[1,"text-center","mb-3"],[3,"formGroup","ngSubmit"],[1,"form-floating","mb-3"],["type","text","formControlName","nombre","placeholder","Ingresa tu nombre",1,"form-control"],["for","registerName"],["class","text-danger",4,"ngIf"],["type","text","formControlName","apellido","placeholder","Ingresa tu apellido",1,"form-control"],["for","registerUsername"],["type","text","formControlName","telefono","placeholder","Ingresa tu n\xfamero de tel\xe9fono",1,"form-control"],["for","registerTel"],["type","number","formControlName","nit","placeholder","Ingresa tu NIT",1,"form-control"],["for","registerNIT"],[1,"col-md-12","d-flex","justify-content-center","mt-3"],["type","submit",1,"btn","btn-primary","btn-block","w-75"],[1,"text-danger"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-nav-bar"),e.TgZ(2,"section",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",1),e._UZ(9,"img",7),e.qZA(),e.TgZ(10,"form",8),e.NdJ("ngSubmit",function(){return o.onUploadAvatar()}),e.TgZ(11,"div",9)(12,"div",10)(13,"input",11),e.NdJ("change",function(s){return o.onFileSelected(s)}),e.qZA()(),e.TgZ(14,"div",12)(15,"div",13)(16,"button",14),e._uU(17,"Subir Foto"),e.qZA()()()()()(),e.TgZ(18,"div",15)(19,"div",16)(20,"h2"),e._uU(21,"Actualizar datos personales"),e.qZA()(),e.TgZ(22,"form",17),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(23,"div",18),e._UZ(24,"input",19),e.TgZ(25,"label",20),e._uU(26,"Nombre"),e.qZA(),e.YNc(27,S,2,0,"div",21),e.YNc(28,y,2,0,"div",21),e.YNc(29,F,2,0,"div",21),e.qZA(),e.TgZ(30,"div",18),e._UZ(31,"input",22),e.TgZ(32,"label",23),e._uU(33,"Apellido"),e.qZA(),e.YNc(34,x,2,0,"div",21),e.YNc(35,C,2,0,"div",21),e.YNc(36,w,2,0,"div",21),e.qZA(),e.TgZ(37,"div",18),e._UZ(38,"input",24),e.TgZ(39,"label",25),e._uU(40,"Tel\xe9fono"),e.qZA(),e.YNc(41,I,2,0,"div",21),e.qZA(),e.TgZ(42,"div",18),e._UZ(43,"input",26),e.TgZ(44,"label",27),e._uU(45,"NIT"),e.qZA(),e.YNc(46,q,2,0,"div",21),e.qZA(),e.TgZ(47,"div",12)(48,"div",28)(49,"button",29),e._uU(50,"Actualizar datos"),e.qZA()()()()()()()(),e._UZ(51,"app-footer"),e.qZA()()()),2&t){let l,s,d,u,p,g,f,h;e.xp6(9),e.s9C("src",o.previewImage||o.image,e.LSH),e.xp6(7),e.Q6J("disabled",o.uploading),e.xp6(6),e.Q6J("formGroup",o.updateForm),e.xp6(5),e.Q6J("ngIf",(null==(l=o.updateForm.get("nombre"))?null:l.hasError("minlength"))&&(null==(l=o.updateForm.get("nombre"))?null:l.touched)),e.xp6(1),e.Q6J("ngIf",(null==(s=o.updateForm.get("nombre"))?null:s.hasError("maxlength"))&&(null==(s=o.updateForm.get("nombre"))?null:s.touched)),e.xp6(1),e.Q6J("ngIf",(null==(d=o.updateForm.get("nombre"))?null:d.hasError("pattern"))&&(null==(d=o.updateForm.get("nombre"))?null:d.touched)),e.xp6(5),e.Q6J("ngIf",(null==(u=o.updateForm.get("apellido"))?null:u.hasError("minlength"))&&(null==(u=o.updateForm.get("apellido"))?null:u.touched)),e.xp6(1),e.Q6J("ngIf",(null==(p=o.updateForm.get("apellido"))?null:p.hasError("maxlength"))&&(null==(p=o.updateForm.get("apellido"))?null:p.touched)),e.xp6(1),e.Q6J("ngIf",(null==(g=o.updateForm.get("apellido"))?null:g.hasError("pattern"))&&(null==(g=o.updateForm.get("apellido"))?null:g.touched)),e.xp6(5),e.Q6J("ngIf",(null==(f=o.updateForm.get("telefono"))?null:f.hasError("pattern"))&&(null==(f=o.updateForm.get("telefono"))?null:f.touched)),e.xp6(5),e.Q6J("ngIf",(null==(h=o.updateForm.get("nit"))?null:h.hasError("pattern"))&&(null==(h=o.updateForm.get("nit"))?null:h.touched))}},dependencies:[A.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,i.F,T.w,P.c]}),r})()}];let R=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.Bz.forChild(N),c.Bz]}),r})();var z=a(592);let J=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[A.ez,i.UX,i.u5,R,z.g]}),r})()}}]);