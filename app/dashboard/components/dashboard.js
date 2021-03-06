System.register(['angular2/core', 'angular2/common', 'angular2/router', './Home/home', './Nav/nav', '../../services/global/GlobalService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, home_1, nav_1, GlobalService_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (nav_1_1) {
                nav_1 = nav_1_1;
            },
            function (GlobalService_1_1) {
                GlobalService_1 = GlobalService_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(globalService, injector, router, data, componentRef) {
                    this.isVisible = false;
                    console.log(injector);
                    // this.globalService = globalService;
                    this.globalService = injector.parent.get(GlobalService_1.GlobalService);
                    this.router = router;
                    this.data = data.get('type');
                    // this.componentRef = componentRef;
                    console.log(this.data);
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this.isVisible = false;
                    // if(!this.globalService.isLoggedIn()){
                    //    this.router.navigate(['Login'])
                    // }
                };
                DashboardComponent.prototype.onClickToggleMenu = function () {
                    this.isVisible = !this.isVisible;
                };
                DashboardComponent.prototype.onClickLogout = function (e) {
                    e.preventDefault();
                    this.globalService.logout().then(this.router.navigate(['Login']));
                    // .then(this.componentRef.destroy());
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard-container',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, nav_1.NavComponent],
                        styleUrls: ['app/dashboard/components/dashboard.css'],
                        templateUrl: 'app/dashboard/components/dashboard.html',
                    }),
                    router_1.RouteConfig([
                        { path: '/**', redirectTo: ['Home'] },
                        new router_1.AsyncRoute({ name: 'Products', path: '/products', loader: function () { return System.import('../../../app/dashboard/components/Products/products').then(function (p) { return p.ProductComponent; }); } }),
                        new router_1.AsyncRoute({ name: 'Tester', path: '/test', loader: function () { return System.import('../../../app/dashboard/components/tester/tester').then(function (t) { return t.TesterComponent; }); } }),
                        new router_1.AsyncRoute({ name: 'Users', path: '/users', loader: function () { return System.import('../../../app/dashboard/components/Users/userList').then(function (u) { return u.UserListComponent; }); } }),
                        new router_1.AsyncRoute({ name: 'Customers', path: '/customers/...', loader: function () { return System.import('../../../app/dashboard/components/Customers/customers').then(function (c) { return c.CustomersComponent; }); } }),
                        // new AsyncRoute({name:'UserDetail',path:'/detail/:id',loader:()=> System.import('../../../app/dashboard/components/Users/detail/detail').then(u=>u.UserDetailComponent)}),
                        new router_1.AsyncRoute({ name: 'MyProfile', path: '/myprofile', loader: function () { return System.import('../../../app/dashboard/components/MyProfile/MyProfile').then(function (u) { return u.MyProfileComponent; }); } }),
                        new router_1.AsyncRoute({ name: 'Services', path: '/services', loader: function () { return System.import('../../../app/dashboard/components/Services/services').then(function (s) { return s.ServicesListComponent; }); } }),
                        // { path: '/products', component:componentProxyFactory({path:'../../../app/dashboard/components/Products/products',provide:p => p.ProductComponent}),name:'Products'},
                        // { path: '/test', component:componentProxyFactory({path:'../../../app/dashboard/components/tester/tester',provide:t => t=>t.TesterComponent}),name:'Tester'},
                        // { path: '/products', component:componentProxyFactory({path:'../../../app/dashboard/components/Products/products',provide:p => p.ProductComponent}),name:'Products'},
                        { path: '/home', name: 'Home', component: home_1.HomeComponent, useAsDefault: true }
                    ]),
                    router_1.CanActivate(function (next, previous) {
                        return GlobalService_1.isLoggedIn(next, previous);
                    }), 
                    __metadata('design:paramtypes', [GlobalService_1.GlobalService, core_1.Injector, router_1.Router, router_1.RouteData, core_1.ComponentRef])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.js.map