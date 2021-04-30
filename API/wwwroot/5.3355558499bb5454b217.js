(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jcJX:function(t,e,r){"use strict";r.r(e),r.d(e,"AccountModule",function(){return x});var n=r("PCNd"),i=r("ofXK"),o=r("3Pt+"),s=r("HDdC"),a=r("D0XW"),c=r("DH7j");function b(t){return!Object(c.a)(t)&&t-parseFloat(t)+1>=0}var l=r("z+Ro");function u(t){const{index:e,period:r,subscriber:n}=t;if(n.next(e),!n.closed){if(-1===r)return n.complete();t.index=e+1,this.schedule(t,r)}}var m=r("LRne"),p=r("eIep"),d=r("lJxs"),f=r("fXoL"),h=r("2rwd"),g=r("tyNb"),v=r("gA0Q");function w(t,e){if(1&t&&(f.Sb(0,"li"),f.Ac(1),f.Rb()),2&t){const t=e.$implicit;f.Bb(1),f.Cc(" ",t," ")}}function S(t,e){if(1&t&&(f.Sb(0,"ul",10),f.yc(1,w,2,1,"li",11),f.Rb()),2&t){const t=f.bc();f.Bb(1),f.hc("ngForOf",t.errors)}}let y=(()=>{class t{constructor(t,e,r){this.fb=t,this.accountService=e,this.router=r}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[o.q.required]],email:[null,[o.q.required,o.q.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")],[this.validateEmailNotTaken()]],password:[null,[o.q.required]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(t=>{this.router.navigateByUrl("/shop")},t=>{console.log(t),this.errors=t.errors})}validateEmailNotTaken(){return t=>function(t=0,e,r){let n=-1;return b(e)?n=Number(e)<1?1:Number(e):Object(l.a)(e)&&(r=e),Object(l.a)(r)||(r=a.a),new s.a(e=>{const i=b(t)?t:+t-r.now();return r.schedule(u,i,{index:0,period:n,subscriber:e})})}(500).pipe(Object(p.a)(()=>t.value?this.accountService.checkEmailExists(t.value).pipe(Object(d.a)(t=>t?{emailExists:!0}:null)):Object(m.a)(null)))}}return t.\u0275fac=function(e){return new(e||t)(f.Mb(o.b),f.Mb(h.a),f.Mb(g.c))},t.\u0275cmp=f.Gb({type:t,selectors:[["app-register"]],decls:12,vars:6,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","fw-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled mt-3",4,"ngIf"],["type","submit",1,"w-100","btn","btn-lg","btn-primary","mt-3"],[1,"text-danger","list-unstyled","mt-3"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(f.Sb(0,"div",0),f.Sb(1,"div",1),f.Sb(2,"form",2),f.Zb("ngSubmit",function(){return e.onSubmit()}),f.Sb(3,"div",3),f.Sb(4,"h1",4),f.Ac(5,"Register"),f.Rb(),f.Rb(),f.Nb(6,"app-text-input",5),f.Nb(7,"app-text-input",6),f.Nb(8,"app-text-input",7),f.yc(9,S,2,1,"ul",8),f.Sb(10,"button",9),f.Ac(11,"Register"),f.Rb(),f.Rb(),f.Rb(),f.Rb()),2&t&&(f.Bb(2),f.hc("formGroup",e.registerForm),f.Bb(4),f.hc("label","Display Name"),f.Bb(1),f.hc("label","Email Address"),f.Bb(1),f.hc("label","Password")("type","password"),f.Bb(1),f.hc("ngIf",e.errors))},directives:[o.r,o.l,o.f,v.a,o.k,o.d,i.m,i.l],styles:[""]}),t})();const R=[{path:"login",component:(()=>{class t{constructor(t,e,r,n){this.fb=t,this.accountService=e,this.router=r,this.activatedRoute=n}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new o.e({email:new o.c("",[o.q.required,o.q.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]),password:new o.c("",o.q.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(t=>{this.router.navigateByUrl(this.returnUrl)},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(f.Mb(o.b),f.Mb(h.a),f.Mb(g.c),f.Mb(g.a))},t.\u0275cmp=f.Gb({type:t,selectors:[["app-login"]],decls:10,vars:5,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","fw-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"w-100","btn","btn-lg","btn-primary","mt-3",3,"disabled"]],template:function(t,e){1&t&&(f.Sb(0,"div",0),f.Sb(1,"div",1),f.Sb(2,"form",2),f.Zb("ngSubmit",function(){return e.onSubmit()}),f.Sb(3,"div",3),f.Sb(4,"h1",4),f.Ac(5,"Login"),f.Rb(),f.Rb(),f.Nb(6,"app-text-input",5),f.Nb(7,"app-text-input",6),f.Sb(8,"button",7),f.Ac(9,"Sign in"),f.Rb(),f.Rb(),f.Rb(),f.Rb()),2&t&&(f.Bb(2),f.hc("formGroup",e.loginForm),f.Bb(4),f.hc("label","Email Address"),f.Bb(1),f.hc("label","Password")("type","password"),f.Bb(1),f.hc("disabled",e.loginForm.invalid))},directives:[o.r,o.l,o.f,v.a,o.k,o.d],styles:[""]}),t})()},{path:"register",component:y}];let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.Kb({type:t}),t.\u0275inj=f.Jb({imports:[[g.g.forChild(R)],g.g]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.Kb({type:t}),t.\u0275inj=f.Jb({imports:[[i.c,N,n.a]]}),t})()}}]);