"use strict";(self.webpackChunkFrontend_ASIA_DEPOT=self.webpackChunkFrontend_ASIA_DEPOT||[]).push([[550],{2550:(ne,E,s)=>{s.r(E),s.d(E,{UserRegisterModule:()=>oe});var A=s(6895),o=s(433),N=s(5808),e=s(8256),q=s(529);let C=(()=>{class t{constructor(n){this.http=n}getAddress(n){return this.http.get(n)}addCustomer(n,r){return this.http.post(n,r)}getCustomerProfile(n){return this.http.get(n)}updateCustomer(n,r){return this.http.put(n,r)}uploadProfilePhoto(n,r){return this.http.post(n,r)}deleteProfilePhoto(n){return this.http.delete(n)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(q.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var w=s(2150),S=s(3310);function J(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," El nombre es obligatorio. "),e.qZA())}function y(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," El nombre no es v\xe1lido, no use car\xe1cteres especiales. "),e.qZA())}function k(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," El apellido es obligatorio. "),e.qZA())}function D(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," El apellido no es v\xe1lido, no use car\xe1cteres especiales. "),e.qZA())}function Y(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," El tel\xe9fono es obligatorio. "),e.qZA())}function Q(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," El tel\xe9fono no es v\xe1lido, debe de poseer 8 d\xedgitos. "),e.qZA())}function x(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," El NIT es obligatorio. "),e.qZA())}function L(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," El NIT no es v\xe1lido. "),e.qZA())}function M(t,i){if(1&t&&(e.TgZ(0,"option",39),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.Nombre_Departamento)}}function R(t,i){if(1&t&&(e.TgZ(0,"option",39),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.Nombre_Municipio)}}function P(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," La direcci\xf3n no es v\xe1lida, no use car\xe1cteres especiales. "),e.qZA())}function O(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," La direcci\xf3n es demasiado corta (m\xednimo 10 car\xe1cteres). "),e.qZA())}function $(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," La direcci\xf3n es demasiado larga (m\xe1ximo 100 car\xe1cteres). "),e.qZA())}function z(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," El correo es obligatorio. "),e.qZA())}function j(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," El correo no es v\xe1lido. "),e.qZA())}function B(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," El correo es demasiado largo (m\xe1ximo 40 car\xe1cteres). "),e.qZA())}function V(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," La contrase\xf1a es obligatoria. "),e.qZA())}function G(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," La contrase\xf1a debe contener al menos una letra may\xfascula, una letra min\xfascula, un d\xedgito y no debe contener espacios en blanco. "),e.qZA())}function K(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," La contrase\xf1a es demasiado corta (m\xednimo 8 car\xe1cteres). "),e.qZA())}function X(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," Debes repetir la contrase\xf1a. "),e.qZA())}function H(t,i){1&t&&(e.TgZ(0,"div",38),e._uU(1," Las contrase\xf1as no coinciden. "),e.qZA())}const W=function(){return["/login"]},ee=[{path:"",redirectTo:"signup",pathMatch:"full"},{path:"signup",component:(()=>{class t{constructor(n,r){this.fb=n,this.userService=r,this.departments=[],this.selectedDepartmentId=null,this.selectedMunicipalityId=null,this.municipalities=[],this.submitted=!1,this.validateForm()}ngOnInit(){this.getAddresses()}getAddresses(){this.userService.getAddress("http://3.144.81.64:3000/usuario/ver/direcciones").subscribe(n=>{this.departments=n.address})}onDepartmentSelected(n){const r=n.target.value;if(null!==r){this.selectedDepartmentId=Number(r);const l=this.departments.find(a=>a.id===this.selectedDepartmentId);this.municipalities=l?l.municipios:[]}else this.municipalities=[];this.registerForm.get("municipio")?.setValue(null)}validateForm(){this.registerForm=new o.cw({nombre:new o.NI("",[o.kI.required,o.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\xfc\xdc\s]+$/),o.kI.minLength(3),o.kI.maxLength(30)]),apellido:new o.NI("",[o.kI.required,o.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\xfc\xdc\s]+$/),o.kI.minLength(3),o.kI.maxLength(30)]),telefono:new o.NI("",[o.kI.required,o.kI.pattern(/^[345][0-9]{7}$/)]),nit:new o.NI("",[o.kI.required,o.kI.pattern("^[0-9]+$")]),direccion:new o.NI("",[o.kI.pattern(/^[^[\]<>(){}_=\\|';]+$/),o.kI.minLength(10),o.kI.maxLength(100)]),correo:new o.NI("",[o.kI.required,o.kI.email,o.kI.maxLength(40)]),password:new o.NI("",[o.kI.required,o.kI.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*\s).*$/),o.kI.minLength(8),o.kI.maxLength(25)]),repetir_password:new o.NI("",[o.kI.required]),departamento:new o.NI(null,[o.kI.required,o.kI.pattern("^[0-9]+$")]),municipio:new o.NI(null,[o.kI.required,o.kI.pattern("^[0-9]+$")])},{validators:[this.passwordMatchValidator]})}passwordMatchValidator(n){const r=n.get("password")?.value,l=n.get("repetir_password")?.value;return r===l?null:{passwordsNotMatch:!0}}getUserData(){const n={Nombre_Cliente:this.registerForm.get("nombre")?.value,Apellido_Cliente:this.registerForm.get("apellido")?.value,Telefono_Cliente:this.registerForm.get("telefono")?.value,NIT_Cliente:this.registerForm.get("nit")?.value,Direccion_General:this.registerForm.get("direccion")?.value,Correo_Cliente:this.registerForm.get("correo")?.value,Password_Cliente:this.registerForm.get("password")?.value,Repetir_Password_Cliente:this.registerForm.get("repetir_password")?.value,ID_Departamento_FK:this.registerForm.get("departamento")?.value,ID_Municipio_FK:this.registerForm.get("municipio")?.value};for(const r in n)n.hasOwnProperty(r)&&(null==n[r]||""===n[r])&&delete n[r];return 0===Object.keys(n).length?null:n}onSubmit(){if(this.submitted=!0,this.registerForm.valid){const n=this.registerForm.get("password")?.value,r=this.registerForm.get("repetir_password")?.value;if(n===r){const l=this.getUserData();this.userService.addCustomer("http://3.144.81.64:3000/nuevo/cliente",l).subscribe(a=>{alert(a.msg),this.registerForm.reset()})}else this.registerForm.get("repetir_password")?.setErrors({passwordsNotMatch:!0})}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(o.qu),e.Y36(C))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sing-up"]],decls:89,vars:24,consts:[[1,"container","mt-2","mb-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"tab-content"],["id","pills-login","role","tabpanel","aria-labelledby","tab-login",1,"tab-pane","fade","show","active"],[1,"border","border-2","border-dark","p-5",3,"formGroup","ngSubmit"],[1,"text-center","mb-3"],["type","button",1,"btn","btn-secondary","btn-floating","mx-1"],[1,"fab","fa-google"],[1,"text-center"],[1,"form-floating","mb-3"],["type","text","formControlName","nombre","placeholder","Ingresa tu nombre",1,"form-control"],["for","registerName"],["class","text-danger",4,"ngIf"],["type","text","formControlName","apellido","placeholder","Ingresa tu apellido",1,"form-control"],["for","registerUsername"],["type","text","formControlName","telefono","placeholder","Ingresa tu n\xfamero de tel\xe9fono",1,"form-control"],["for","registerTel"],["type","number","formControlName","nit","placeholder","Ingresa tu NIT",1,"form-control"],["for","registerNIT"],["aria-label","Default select example","formControlName","departamento",1,"form-select",3,"change"],["value","null"],[3,"value",4,"ngFor","ngForOf"],["for","registerDepartamento"],["aria-label","Default select example","formControlName","municipio",1,"form-select"],["for","registerMunicipio"],["type","text","formControlName","direccion","placeholder","Ingresa tu direcci\xf3n general",1,"form-control"],["for","registerAddress"],["type","email","formControlName","correo","placeholder","Ingresa tu correo",1,"form-control"],["for","registerEmail"],["type","password","formControlName","password","placeholder","Ingresa tu contrase\xf1a",1,"form-control"],["for","registerPassword"],["type","password","formControlName","repetir_password","placeholder","Repite la contrase\xf1a",1,"form-control"],["for","registerRepeatPassword"],[1,"row","mb-4"],[1,"col-md-12","d-flex","justify-content-center"],["type","submit",1,"btn","btn-primary","btn-block","w-75"],[3,"routerLink"],[1,"text-danger"],[3,"value"]],template:function(n,r){if(1&n&&(e._UZ(0,"app-nav-bar"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"form",5),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(7,"div",6)(8,"p"),e._uU(9,"Reg\xedstrate con:"),e.qZA(),e.TgZ(10,"button",7),e._UZ(11,"i",8),e.qZA()(),e.TgZ(12,"p",9),e._uU(13,"o:"),e.qZA(),e.TgZ(14,"div",10),e._UZ(15,"input",11),e.TgZ(16,"label",12),e._uU(17,"Nombre"),e.qZA(),e.YNc(18,J,2,0,"div",13),e.YNc(19,y,2,0,"div",13),e.qZA(),e.TgZ(20,"div",10),e._UZ(21,"input",14),e.TgZ(22,"label",15),e._uU(23,"Apellido"),e.qZA(),e.YNc(24,k,2,0,"div",13),e.YNc(25,D,2,0,"div",13),e.qZA(),e.TgZ(26,"div",10),e._UZ(27,"input",16),e.TgZ(28,"label",17),e._uU(29,"Tel\xe9fono"),e.qZA(),e.YNc(30,Y,2,0,"div",13),e.YNc(31,Q,2,0,"div",13),e.qZA(),e.TgZ(32,"div",10),e._UZ(33,"input",18),e.TgZ(34,"label",19),e._uU(35,"NIT"),e.qZA(),e.YNc(36,x,2,0,"div",13),e.YNc(37,L,2,0,"div",13),e.qZA(),e.TgZ(38,"div",10)(39,"select",20),e.NdJ("change",function(a){return r.onDepartmentSelected(a)}),e.TgZ(40,"option",21),e._uU(41,"Selecciona un departamento"),e.qZA(),e.YNc(42,M,2,2,"option",22),e.qZA(),e.TgZ(43,"label",23),e._uU(44,"Departamento"),e.qZA()(),e.TgZ(45,"div",10)(46,"select",24)(47,"option",21),e._uU(48,"Selecciona un municipio"),e.qZA(),e.YNc(49,R,2,2,"option",22),e.qZA(),e.TgZ(50,"label",25),e._uU(51,"Municipio"),e.qZA()(),e.TgZ(52,"div",10),e._UZ(53,"input",26),e.TgZ(54,"label",27),e._uU(55,"Direcci\xf3n general"),e.qZA(),e.YNc(56,P,2,0,"div",13),e.YNc(57,O,2,0,"div",13),e.YNc(58,$,2,0,"div",13),e.qZA(),e.TgZ(59,"div",10),e._UZ(60,"input",28),e.TgZ(61,"label",29),e._uU(62,"Correo"),e.qZA(),e.YNc(63,z,2,0,"div",13),e.YNc(64,j,2,0,"div",13),e.YNc(65,B,2,0,"div",13),e.qZA(),e.TgZ(66,"div",10),e._UZ(67,"input",30),e.TgZ(68,"label",31),e._uU(69,"Contrase\xf1a"),e.qZA(),e.YNc(70,V,2,0,"div",13),e.YNc(71,G,2,0,"div",13),e.YNc(72,K,2,0,"div",13),e.qZA(),e.TgZ(73,"div",10),e._UZ(74,"input",32),e.TgZ(75,"label",33),e._uU(76,"Repetir contrase\xf1a"),e.qZA(),e.YNc(77,X,2,0,"div",13),e.YNc(78,H,2,0,"div",13),e.qZA(),e.TgZ(79,"div",34)(80,"div",35)(81,"button",36),e._uU(82,"Crear cuenta"),e.qZA()()(),e.TgZ(83,"div",9)(84,"p"),e._uU(85,"\xbfYa posees una cuenta? "),e.TgZ(86,"a",37),e._uU(87,"Inicia sesi\xf3n"),e.qZA()()()()()()()()(),e._UZ(88,"app-footer")),2&n){let l,a,u,p,d,g,m,c,f,_,h,v,Z,U,F,T,I,b;e.xp6(6),e.Q6J("formGroup",r.registerForm),e.xp6(12),e.Q6J("ngIf",(null==(l=r.registerForm.get("nombre"))?null:l.hasError("required"))&&(null==(l=r.registerForm.get("nombre"))?null:l.touched)),e.xp6(1),e.Q6J("ngIf",(null==(a=r.registerForm.get("nombre"))?null:a.hasError("pattern"))&&(null==(a=r.registerForm.get("nombre"))?null:a.touched)),e.xp6(5),e.Q6J("ngIf",(null==(u=r.registerForm.get("apellido"))?null:u.hasError("required"))&&(null==(u=r.registerForm.get("apellido"))?null:u.touched)),e.xp6(1),e.Q6J("ngIf",(null==(p=r.registerForm.get("apellido"))?null:p.hasError("pattern"))&&(null==(p=r.registerForm.get("apellido"))?null:p.touched)),e.xp6(5),e.Q6J("ngIf",(null==(d=r.registerForm.get("telefono"))?null:d.hasError("required"))&&(null==(d=r.registerForm.get("telefono"))?null:d.touched)),e.xp6(1),e.Q6J("ngIf",(null==(g=r.registerForm.get("telefono"))?null:g.hasError("pattern"))&&(null==(g=r.registerForm.get("telefono"))?null:g.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=r.registerForm.get("nit"))?null:m.hasError("required"))&&(null==(m=r.registerForm.get("nit"))?null:m.touched)),e.xp6(1),e.Q6J("ngIf",(null==(c=r.registerForm.get("nit"))?null:c.hasError("pattern"))&&(null==(c=r.registerForm.get("nit"))?null:c.touched)),e.xp6(5),e.Q6J("ngForOf",r.departments),e.xp6(7),e.Q6J("ngForOf",r.municipalities),e.xp6(7),e.Q6J("ngIf",(null==(f=r.registerForm.get("direccion"))?null:f.hasError("pattern"))&&(null==(f=r.registerForm.get("direccion"))?null:f.touched)),e.xp6(1),e.Q6J("ngIf",(null==(_=r.registerForm.get("direccion"))?null:_.hasError("minlength"))&&(null==(_=r.registerForm.get("direccion"))?null:_.touched)),e.xp6(1),e.Q6J("ngIf",(null==(h=r.registerForm.get("direccion"))?null:h.hasError("maxlength"))&&(null==(h=r.registerForm.get("direccion"))?null:h.touched)),e.xp6(5),e.Q6J("ngIf",(null==(v=r.registerForm.get("correo"))?null:v.hasError("required"))&&(null==(v=r.registerForm.get("correo"))?null:v.touched)),e.xp6(1),e.Q6J("ngIf",(null==(Z=r.registerForm.get("correo"))?null:Z.hasError("email"))&&(null==(Z=r.registerForm.get("correo"))?null:Z.touched)),e.xp6(1),e.Q6J("ngIf",(null==(U=r.registerForm.get("correo"))?null:U.hasError("maxlength"))&&(null==(U=r.registerForm.get("correo"))?null:U.touched)),e.xp6(5),e.Q6J("ngIf",(null==(F=r.registerForm.get("password"))?null:F.hasError("required"))&&(null==(F=r.registerForm.get("password"))?null:F.touched)),e.xp6(1),e.Q6J("ngIf",(null==(T=r.registerForm.get("password"))?null:T.hasError("pattern"))&&(null==(T=r.registerForm.get("password"))?null:T.touched)),e.xp6(1),e.Q6J("ngIf",(null==(I=r.registerForm.get("password"))?null:I.hasError("minlength"))&&(null==(I=r.registerForm.get("password"))?null:I.touched)),e.xp6(5),e.Q6J("ngIf",(null==(b=r.registerForm.get("repetir_password"))?null:b.hasError("required"))&&(null==(b=r.registerForm.get("repetir_password"))?null:b.touched)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.registerForm.hasError("passwordsNotMatch")),e.xp6(8),e.Q6J("routerLink",e.DdM(23,W))}},dependencies:[A.sg,A.O5,o._Y,o.YN,o.Kr,o.Fj,o.wV,o.EJ,o.JJ,o.JL,o.sg,o.u,N.rH,w.w,S.c]}),t})()}];let te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[N.Bz.forChild(ee),N.Bz]}),t})();var re=s(335);let oe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[A.ez,o.UX,o.u5,te,re.d]}),t})()}}]);