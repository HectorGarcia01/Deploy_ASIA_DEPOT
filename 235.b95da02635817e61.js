"use strict";(self.webpackChunkFrontend_ASIA_DEPOT=self.webpackChunkFrontend_ASIA_DEPOT||[]).push([[235],{2235:(te,E,s)=>{s.r(E),s.d(E,{UserRegisterModule:()=>re});var b=s(6895),o=s(433),A=s(5808),N=s(1548),e=s(8256),C=s(6785),q=s(2150),w=s(3310);function S(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," El nombre es obligatorio. "),e.qZA())}function J(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," El nombre no es v\xe1lido, no use car\xe1cteres especiales. "),e.qZA())}function D(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," El apellido es obligatorio. "),e.qZA())}function Q(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," El apellido no es v\xe1lido, no use car\xe1cteres especiales. "),e.qZA())}function y(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," El tel\xe9fono es obligatorio. "),e.qZA())}function Y(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," El tel\xe9fono no es v\xe1lido, debe de poseer 8 d\xedgitos. "),e.qZA())}function k(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," El NIT no es v\xe1lido. "),e.qZA())}function x(r,i){if(1&r&&(e.TgZ(0,"option",36),e._uU(1),e.qZA()),2&r){const n=i.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.Nombre_Departamento)}}function L(r,i){if(1&r&&(e.TgZ(0,"option",36),e._uU(1),e.qZA()),2&r){const n=i.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.Nombre_Municipio)}}function M(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," La direcci\xf3n no es v\xe1lida, no use car\xe1cteres especiales. "),e.qZA())}function R(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," La direcci\xf3n es demasiado corta (m\xednimo 10 car\xe1cteres). "),e.qZA())}function $(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," La direcci\xf3n es demasiado larga (m\xe1ximo 100 car\xe1cteres). "),e.qZA())}function O(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," El correo es obligatorio. "),e.qZA())}function P(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," El correo no es v\xe1lido. "),e.qZA())}function z(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," El correo es demasiado largo (m\xe1ximo 40 car\xe1cteres). "),e.qZA())}function j(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," La contrase\xf1a es obligatoria. "),e.qZA())}function B(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," La contrase\xf1a debe contener al menos una letra may\xfascula, una letra min\xfascula, un d\xedgito y no debe contener espacios en blanco. "),e.qZA())}function V(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," La contrase\xf1a es demasiado corta (m\xednimo 8 car\xe1cteres). "),e.qZA())}function G(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," Debes repetir la contrase\xf1a. "),e.qZA())}function K(r,i){1&r&&(e.TgZ(0,"div",35),e._uU(1," Las contrase\xf1as no coinciden. "),e.qZA())}const X=function(){return["/login"]},H=[{path:"",redirectTo:"signup",pathMatch:"full"},{path:"signup",component:(()=>{class r{constructor(n,t){this.fb=n,this.userService=t,this.departments=[],this.selectedDepartmentId=null,this.selectedMunicipalityId=null,this.municipalities=[],this.submitted=!1,this.validateForm()}ngOnInit(){this.getAddresses()}getAddresses(){this.userService.getAddress(`${N.Q}/usuario/ver/direcciones`).subscribe(n=>{this.departments=n.address})}onDepartmentSelected(n){const t=n.target.value;if(null!==t){this.selectedDepartmentId=Number(t);const l=this.departments.find(a=>a.id===this.selectedDepartmentId);this.municipalities=l?l.municipios:[]}else this.municipalities=[];this.registerForm.get("municipio")?.setValue(null)}validateForm(){this.registerForm=new o.cw({nombre:new o.NI("",[o.kI.required,o.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\xfc\xdc\s]+$/),o.kI.minLength(3),o.kI.maxLength(30)]),apellido:new o.NI("",[o.kI.required,o.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\xfc\xdc\s]+$/),o.kI.minLength(3),o.kI.maxLength(30)]),telefono:new o.NI("",[o.kI.required,o.kI.pattern(/^[345][0-9]{7}$/)]),nit:new o.NI("",[o.kI.pattern("^[0-9]+$")]),direccion:new o.NI("",[o.kI.pattern(/^[^[\]<>(){}_=\\|';]+$/),o.kI.minLength(10),o.kI.maxLength(100)]),correo:new o.NI("",[o.kI.required,o.kI.email,o.kI.maxLength(40)]),password:new o.NI("",[o.kI.required,o.kI.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*\s).*$/),o.kI.minLength(8),o.kI.maxLength(25)]),repetir_password:new o.NI("",[o.kI.required]),departamento:new o.NI(null,[o.kI.pattern("^[0-9]+$")]),municipio:new o.NI(null,[o.kI.pattern("^[0-9]+$")])},{validators:[this.passwordMatchValidator]})}passwordMatchValidator(n){const t=n.get("password")?.value,l=n.get("repetir_password")?.value;return t===l?null:{passwordsNotMatch:!0}}getUserData(){const n={Nombre_Cliente:this.registerForm.get("nombre")?.value,Apellido_Cliente:this.registerForm.get("apellido")?.value,Telefono_Cliente:this.registerForm.get("telefono")?.value,NIT_Cliente:this.registerForm.get("nit")?.value,Direccion_General:this.registerForm.get("direccion")?.value,Correo_Cliente:this.registerForm.get("correo")?.value,Password_Cliente:this.registerForm.get("password")?.value,Repetir_Password_Cliente:this.registerForm.get("repetir_password")?.value,ID_Departamento_FK:this.registerForm.get("departamento")?.value,ID_Municipio_FK:this.registerForm.get("municipio")?.value};for(const t in n)n.hasOwnProperty(t)&&(null==n[t]||""===n[t])&&delete n[t];return 0===Object.keys(n).length?null:n}onSubmit(){if(this.submitted=!0,this.registerForm.valid){const n=this.registerForm.get("password")?.value,t=this.registerForm.get("repetir_password")?.value;if(n===t){const l=this.getUserData();this.userService.addCustomer(`${N.Q}/nuevo/cliente`,l).subscribe(a=>{alert(a.msg),this.registerForm.reset()})}else this.registerForm.get("repetir_password")?.setErrors({passwordsNotMatch:!0})}}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(o.qu),e.Y36(C.v))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-sing-up"]],decls:84,vars:23,consts:[[1,"container","mt-2","mb-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"tab-content"],["id","pills-login","role","tabpanel","aria-labelledby","tab-login",1,"tab-pane","fade","show","active"],[1,"border","border-2","border-dark","p-5",3,"formGroup","ngSubmit"],[1,"text-center","mb-3"],["type","button",1,"btn","btn-secondary","btn-floating","mx-1"],[1,"fab","fa-google"],[1,"text-center"],[1,"form-floating","mb-3"],["type","text","formControlName","nombre","placeholder","Ingresa tu nombre",1,"form-control"],["for","registerName"],["class","text-danger",4,"ngIf"],["type","text","formControlName","apellido","placeholder","Ingresa tu apellido",1,"form-control"],["for","registerUsername"],["type","text","formControlName","telefono","placeholder","Ingresa tu n\xfamero de tel\xe9fono",1,"form-control"],["for","registerTel"],["type","number","formControlName","nit","placeholder","Ingresa tu NIT",1,"form-control"],["for","registerNIT"],["aria-label","Default select example","formControlName","departamento",1,"form-select",3,"change"],["value","null"],[3,"value",4,"ngFor","ngForOf"],["for","registerDepartamento"],["aria-label","Default select example","formControlName","municipio",1,"form-select"],["for","registerMunicipio"],["type","text","formControlName","direccion","placeholder","Ingresa tu direcci\xf3n general",1,"form-control"],["for","registerAddress"],["type","email","formControlName","correo","placeholder","Ingresa tu correo",1,"form-control"],["for","registerEmail"],["type","password","formControlName","password","placeholder","Ingresa tu contrase\xf1a",1,"form-control"],["for","registerPassword"],["type","password","formControlName","repetir_password","placeholder","Repite la contrase\xf1a",1,"form-control"],["for","registerRepeatPassword"],[3,"routerLink"],[1,"text-danger"],[3,"value"]],template:function(n,t){if(1&n&&(e._UZ(0,"app-nav-bar"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"form",5),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(7,"div",6)(8,"p"),e._uU(9,"Reg\xedstrate con:"),e.qZA(),e.TgZ(10,"button",7),e._UZ(11,"i",8),e.qZA()(),e.TgZ(12,"p",9),e._uU(13,"o:"),e.qZA(),e.TgZ(14,"div",10),e._UZ(15,"input",11),e.TgZ(16,"label",12),e._uU(17,"Nombre"),e.qZA(),e.YNc(18,S,2,0,"div",13),e.YNc(19,J,2,0,"div",13),e.qZA(),e.TgZ(20,"div",10),e._UZ(21,"input",14),e.TgZ(22,"label",15),e._uU(23,"Apellido"),e.qZA(),e.YNc(24,D,2,0,"div",13),e.YNc(25,Q,2,0,"div",13),e.qZA(),e.TgZ(26,"div",10),e._UZ(27,"input",16),e.TgZ(28,"label",17),e._uU(29,"Tel\xe9fono"),e.qZA(),e.YNc(30,y,2,0,"div",13),e.YNc(31,Y,2,0,"div",13),e.qZA(),e.TgZ(32,"div",10),e._UZ(33,"input",18),e.TgZ(34,"label",19),e._uU(35,"NIT"),e.qZA(),e.YNc(36,k,2,0,"div",13),e.qZA(),e.TgZ(37,"div",10)(38,"select",20),e.NdJ("change",function(a){return t.onDepartmentSelected(a)}),e.TgZ(39,"option",21),e._uU(40,"Selecciona un departamento"),e.qZA(),e.YNc(41,x,2,2,"option",22),e.qZA(),e.TgZ(42,"label",23),e._uU(43,"Departamento"),e.qZA()(),e.TgZ(44,"div",10)(45,"select",24)(46,"option",21),e._uU(47,"Selecciona un municipio"),e.qZA(),e.YNc(48,L,2,2,"option",22),e.qZA(),e.TgZ(49,"label",25),e._uU(50,"Municipio"),e.qZA()(),e.TgZ(51,"div",10),e._UZ(52,"input",26),e.TgZ(53,"label",27),e._uU(54,"Direcci\xf3n general"),e.qZA(),e.YNc(55,M,2,0,"div",13),e.YNc(56,R,2,0,"div",13),e.YNc(57,$,2,0,"div",13),e.qZA(),e.TgZ(58,"div",10),e._UZ(59,"input",28),e.TgZ(60,"label",29),e._uU(61,"Correo"),e.qZA(),e.YNc(62,O,2,0,"div",13),e.YNc(63,P,2,0,"div",13),e.YNc(64,z,2,0,"div",13),e.qZA(),e.TgZ(65,"div",10),e._UZ(66,"input",30),e.TgZ(67,"label",31),e._uU(68,"Contrase\xf1a"),e.qZA(),e.YNc(69,j,2,0,"div",13),e.YNc(70,B,2,0,"div",13),e.YNc(71,V,2,0,"div",13),e.qZA(),e.TgZ(72,"div",10),e._UZ(73,"input",32),e.TgZ(74,"label",33),e._uU(75,"Repetir contrase\xf1a"),e.qZA(),e.YNc(76,G,2,0,"div",13),e.YNc(77,K,2,0,"div",13),e.qZA(),e.TgZ(78,"div",9)(79,"p"),e._uU(80,"\xbfYa posees una cuenta? "),e.TgZ(81,"a",34),e._uU(82,"Inicia sesi\xf3n"),e.qZA()()()()()()()()(),e._UZ(83,"app-footer")),2&n){let l,a,u,p,g,m,d,c,f,_,v,h,Z,F,U,T,I;e.xp6(6),e.Q6J("formGroup",t.registerForm),e.xp6(12),e.Q6J("ngIf",(null==(l=t.registerForm.get("nombre"))?null:l.hasError("required"))&&(null==(l=t.registerForm.get("nombre"))?null:l.touched)),e.xp6(1),e.Q6J("ngIf",(null==(a=t.registerForm.get("nombre"))?null:a.hasError("pattern"))&&(null==(a=t.registerForm.get("nombre"))?null:a.touched)),e.xp6(5),e.Q6J("ngIf",(null==(u=t.registerForm.get("apellido"))?null:u.hasError("required"))&&(null==(u=t.registerForm.get("apellido"))?null:u.touched)),e.xp6(1),e.Q6J("ngIf",(null==(p=t.registerForm.get("apellido"))?null:p.hasError("pattern"))&&(null==(p=t.registerForm.get("apellido"))?null:p.touched)),e.xp6(5),e.Q6J("ngIf",(null==(g=t.registerForm.get("telefono"))?null:g.hasError("required"))&&(null==(g=t.registerForm.get("telefono"))?null:g.touched)),e.xp6(1),e.Q6J("ngIf",(null==(m=t.registerForm.get("telefono"))?null:m.hasError("pattern"))&&(null==(m=t.registerForm.get("telefono"))?null:m.touched)),e.xp6(5),e.Q6J("ngIf",(null==(d=t.registerForm.get("nit"))?null:d.hasError("pattern"))&&(null==(d=t.registerForm.get("nit"))?null:d.touched)),e.xp6(5),e.Q6J("ngForOf",t.departments),e.xp6(7),e.Q6J("ngForOf",t.municipalities),e.xp6(7),e.Q6J("ngIf",(null==(c=t.registerForm.get("direccion"))?null:c.hasError("pattern"))&&(null==(c=t.registerForm.get("direccion"))?null:c.touched)),e.xp6(1),e.Q6J("ngIf",(null==(f=t.registerForm.get("direccion"))?null:f.hasError("minlength"))&&(null==(f=t.registerForm.get("direccion"))?null:f.touched)),e.xp6(1),e.Q6J("ngIf",(null==(_=t.registerForm.get("direccion"))?null:_.hasError("maxlength"))&&(null==(_=t.registerForm.get("direccion"))?null:_.touched)),e.xp6(5),e.Q6J("ngIf",(null==(v=t.registerForm.get("correo"))?null:v.hasError("required"))&&(null==(v=t.registerForm.get("correo"))?null:v.touched)),e.xp6(1),e.Q6J("ngIf",(null==(h=t.registerForm.get("correo"))?null:h.hasError("email"))&&(null==(h=t.registerForm.get("correo"))?null:h.touched)),e.xp6(1),e.Q6J("ngIf",(null==(Z=t.registerForm.get("correo"))?null:Z.hasError("maxlength"))&&(null==(Z=t.registerForm.get("correo"))?null:Z.touched)),e.xp6(5),e.Q6J("ngIf",(null==(F=t.registerForm.get("password"))?null:F.hasError("required"))&&(null==(F=t.registerForm.get("password"))?null:F.touched)),e.xp6(1),e.Q6J("ngIf",(null==(U=t.registerForm.get("password"))?null:U.hasError("pattern"))&&(null==(U=t.registerForm.get("password"))?null:U.touched)),e.xp6(1),e.Q6J("ngIf",(null==(T=t.registerForm.get("password"))?null:T.hasError("minlength"))&&(null==(T=t.registerForm.get("password"))?null:T.touched)),e.xp6(5),e.Q6J("ngIf",(null==(I=t.registerForm.get("repetir_password"))?null:I.hasError("required"))&&(null==(I=t.registerForm.get("repetir_password"))?null:I.touched)),e.xp6(1),e.Q6J("ngIf",t.submitted&&t.registerForm.hasError("passwordsNotMatch")),e.xp6(4),e.Q6J("routerLink",e.DdM(22,X))}},dependencies:[b.sg,b.O5,o._Y,o.YN,o.Kr,o.Fj,o.wV,o.EJ,o.JJ,o.JL,o.sg,o.u,A.rH,q.w,w.c]}),r})()}];let W=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[A.Bz.forChild(H),A.Bz]}),r})();var ee=s(335);let re=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[b.ez,o.UX,o.u5,W,ee.d]}),r})()}}]);