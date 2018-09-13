(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"this.productViewList\">\n    <!-- <div class=\"col-md-1\">\n\n  </div> -->\n\n    <!-- <div class=\"loading\" *ngIf=\"this.isLoading\">\n    </div> -->\n    <div class=\"col-md-4\">\n        <input class=\"form-control\" type=\"search\" id=\"search-input\" placeholder=\"Search By Description\">\n    </div>\n    <div class=\"col-md-3\">\n        <select class=\"form-control\">\n          <option>Select All</option>\n          <option>Brand</option>\n          <option>Category</option>\n          <option>Model</option>\n          <!-- <option>Model</option> -->\n      </select>\n    </div>\n    <!-- <div class=\"col-md-3\" *ngIf=\"this.listOfProductOption != null\">\n        <select (change)=\"this.loadProductsToView()\" class=\"form-control\" id=\"select-input\">\n              <option  *ngFor = \"let option of this.listOfProductOption\" [value]=\"option.id\">\n                      {{option.name}}\n                  </option>\n          </select>\n    </div> -->\n    <div class=\"col-md-1\">\n\n    </div>\n</div>\n\n\n<h6 class=\"text-muted text-normal text-uppercase padding-top-2x\">\n    Product Table For Admin</h6>\n<hr class=\"margin-bottom-1x\">\n<div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th>Image</th>\n                <th>Product No</th>\n                <th>Description</th>\n                <th>Cost</th>\n                <th>Retails</th>\n                <th>Stocks</th>\n                <th>Edit</th>\n                <th>Add Image</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let product of this.productViewList;let i = index\" [attr.data-index]=\"i\">\n                <td>\n                    <img *ngIf=\"product.image!=null\" src=\"data:image/png;base64,{{product.image}}\" height=\"100px\" width=\"100px\" />\n                    <img *ngIf=\"(product.image=='aW1hZ2U=')\" src=\"assets/images/no-image-found.jpg\" height=\"100px\" width=\"100px\" alt=\"{{product.productNo}}\">\n                </td>\n                <td>{{product.productNo}}</td>\n                <td>{{product.description}}</td>\n                <td>$ {{product.cost}}</td>\n                <td>$ {{product.retail}}</td>\n                <td>{{product.saleQuantity}}</td>\n                <td><input type=\"file\" id=\"file-input\"> <img class=\"image\" /></td>\n                <td><button class=\"btn btn-outline-success\" (click)=\"addImage(product, i)\">Add Image</button></td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _shared_shaered_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shaered.service */ "./src/app/shared/shaered.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(adminService, element, sharedService) {
        this.adminService = adminService;
        this.element = element;
        this.sharedService = sharedService;
        this.productViewList = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getProductDetails();
    };
    AdminComponent.prototype.getProductDetails = function () {
        var _this = this;
        this.sharedService.getAllProducts()
            .subscribe(function (product) {
            _this.productViewList = product;
        });
    };
    AdminComponent.prototype.addImage = function (product, index) {
        var element = (document.querySelectorAll('#file-input')[index]);
        console.log('image', element.files[0]);
        // console.log('Event', event.target.files[0]);
        this.image = element.files[0];
        this.formData = new FormData();
        this.formData.append('file', this.image);
        this.sharedService.addImage(product.productNo, this.formData);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _shared_shaered_service__WEBPACK_IMPORTED_MODULE_2__["ShaeredService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]],
            providers: [_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminService = /** @class */ (function () {
    function AdminService() {
    }
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _customer_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer/login/login.component */ "./src/app/customer/login/login.component.ts");
/* harmony import */ var _customer_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer/signup/signup.component */ "./src/app/customer/signup/signup.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    // { path: 'product/:type/:id', component: ProductComponent},
    { path: 'product/:type/:id', component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"] },
    { path: 'login', component: _customer_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _customer_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    // { path: 'viewCart', component: CartComponent},
    // { path: 'checkout', component: CheckoutComponent},
    // { path: 'shipping', component: ShippingComponent},
    // { path: 'payment', component: PaymentComponent},
    // { path: 'address', component: AddressComponent},
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer/customer.module */ "./src/app/customer/customer.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_8__["ProductModule"],
                _customer_customer_module__WEBPACK_IMPORTED_MODULE_9__["CustomerModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_10__["AdminModule"]
            ],
            exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer/change-password/change-password.component.css":
/*!************************************************************************!*\
  !*** ./src/app/customer/change-password/change-password.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    color: red;\n}\n\nh3 {\n    color: red;\n}\n\nh2 {\n    color: red;\n}\n\nhr {\n    border-top: 2px solid rgba(0, 0, 0, .1);\n}\n\n.mat-button {\n    background: red;\n    color: white;\n    width: 100%\n}\n\nem {\n    color: red;\n}"

/***/ }),

/***/ "./src/app/customer/change-password/change-password.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/change-password/change-password.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"container\">\n    <mat-card-title>\n      <h3>Change Password</h3>\n      <hr style=\"border-top: 5px solid red;\">\n    </mat-card-title>\n    <mat-card-content>\n        <form [formGroup]=\"changePasswordForm\">\n            <div class=\"col-md-12\" style=\"border: 1px dotted gray;\">\n              <h4>Change Password Here</h4>\n              <p>Please enter old password and confirm password to change your password!!</p>\n              <hr>\n\n              <ul>\n                  <li style=\"margin:5px;\">\n                    <label>Old Password\n                      <em>*</em>\n                    </label>\n                    <div>\n                      <input type=\"password\" class=\"form-control\" formControlName=\"oldPassword\">\n                    </div>\n                    <div *ngIf=\"changePasswordForm.get('oldPassword').hasError('required') && changePasswordForm.get('oldPassword').touched\" class=\"alert alert-danger\">\n                      *Required!!\n                    </div>\n                    <div *ngIf=\"changePasswordForm.get('oldPassword').hasError('pattern') && changePasswordForm.get('oldPassword').touched\" class=\"alert alert-danger\">\n                      *Value Not Alloewd\n                    </div>\n                  </li>\n                </ul>\n      \n              <ul>\n                <li style=\"margin:5px;\">\n                  <label>Password\n                    <em>*</em>\n                  </label>\n                  <div>\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n                  </div>\n                  <div *ngIf=\"changePasswordForm.get('password').hasError('required') && changePasswordForm.get('password').touched\" class=\"alert alert-danger\">\n                    *Required!!\n                  </div>\n                  <div *ngIf=\"changePasswordForm.get('password').hasError('pattern') && changePasswordForm.get('password').touched\" class=\"alert alert-danger\">\n                    *Value Not Alloewd\n                  </div>\n                </li>\n              </ul>\n              <ul>\n                  <li style=\"margin:5px;\">\n                    <label>Confirm Password\n                      <em>*</em>\n                    </label>\n                    <div>\n                      <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\n                    </div>\n                    <div *ngIf=\"changePasswordForm.get('confirmPassword').hasError('required') && changePasswordForm.get('confirmPassword').touched\" class=\"alert alert-danger\">\n                      *Required!!\n                    </div>\n                    <div *ngIf=\"changePasswordForm.get('confirmPassword').hasError('pattern') && changePasswordForm.get('confirmPassword').touched\" class=\"alert alert-danger\">\n                      *Value Not Alloewd\n                    </div>\n                  </li>\n                </ul>\n          \n                <ul>\n                  <button mat-button color=\"primary\" [disabled]=\"changePasswordForm.invalid\">CHANGE PASSWORD</button>\n                </ul>\n      \n            </div>\n          </form>\n    </mat-card-content>\n  </mat-card>\n  "

/***/ }),

/***/ "./src/app/customer/change-password/change-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/change-password/change-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm = this.formBuilder.group({
            'oldPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ChangePasswordComponent.prototype.sendResetLink = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/customer/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/customer/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/customer/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/customer/signup/signup.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer/customer.service.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/customer/reset-password/reset-password.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/customer/forgot-password/forgot-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/customer/change-password/change-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"]],
            providers: [_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/customer/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.login = function (username, password) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + '/auth', JSON.stringify({ username: username, password: password }));
    };
    CustomerService.prototype.addOrUpdateCustomer = function (customer) {
        return this.http.post(this.url + '/addCustomer', customer);
    };
    CustomerService.prototype.resetPassword = function (customerDao) {
        var headers = new Headers({
            'content-type': 'application/json'
        });
        this.http.post(this.url + '/resetPassword', customerDao)
            .subscribe(function (test) {
            console.log('Reset password', test);
        });
    };
    CustomerService.prototype.sendResetPasswordLink = function (email) {
        var headers = new Headers({
            // 'Authorization': 'Bearer ' +this.getToken(),
            'content-type': 'application/json'
        });
        this.http.post(this.url + '/sendEmailToResetPassword', email)
            .subscribe(function (test) {
            console.log('test', test);
        });
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/customer/forgot-password/forgot-password.component.css":
/*!************************************************************************!*\
  !*** ./src/app/customer/forgot-password/forgot-password.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    color: red;\n}\n\nh3 {\n    color: red;\n}\n\nh2 {\n    color: red;\n}\n\nhr {\n    border-top: 2px solid rgba(0, 0, 0, .1);\n}\n\n.mat-button {\n    background: red;\n    color: white;\n    width: 100%\n}\n\nem {\n    color: red;\n}"

/***/ }),

/***/ "./src/app/customer/forgot-password/forgot-password.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/forgot-password/forgot-password.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"container\">\n  <mat-card-title>\n    <h3>Forgot Your Password?</h3>\n    <hr style=\"border-top: 5px solid red;\">\n  </mat-card-title>\n  <mat-card-content>\n      <form [formGroup]=\"forgotPasswordForm\">\n          <div class=\"col-md-12\" style=\"border: 1px dotted gray;\">\n            <h4>Recover Your Password</h4>\n            <p>Please enter your email address and we will send you link to reset your password!!</p>\n            <hr>\n    \n            <ul>\n              <li style=\"margin:5px;\">\n                <label>Email Address\n                  <em>*</em>\n                </label>\n                <div>\n                  <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n                </div>\n                <div *ngIf=\"forgotPasswordForm.get('email').hasError('required') && forgotPasswordForm.get('email').touched\" class=\"alert alert-danger\">\n                  *Required!!\n                </div>\n                <div *ngIf=\"forgotPasswordForm.get('email').hasError('pattern') && forgotPasswordForm.get('email').touched\" class=\"alert alert-danger\">\n                  *Value Not Alloewd\n                </div>\n              </li>\n            </ul>\n        \n              <ul>\n                <button mat-button color=\"primary\" [disabled]=\"forgotPasswordForm.invalid\" (click)=\"this.sendResetLink()\">SUBMIT</button>\n              </ul>\n    \n          </div>\n        </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/customer/forgot-password/forgot-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/forgot-password/forgot-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(formBuilder, customerService) {
        this.formBuilder = formBuilder;
        this.customerService = customerService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotPasswordForm = this.formBuilder.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ForgotPasswordComponent.prototype.sendResetLink = function () {
        console.log('in side rest');
        this.customerService.sendResetPasswordLink(this.forgotPasswordForm.get('email').value);
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/customer/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/customer/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/customer/login/login.component.css":
/*!****************************************************!*\
  !*** ./src/app/customer/login/login.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-button {\n\tborder-radius: 30px;\n\twidth: 100%;\n\tbackground: red;\n}\nli {\n\tmargin: 10px;\n}\n.forgot-password {\n\tfloat: right\n}\nem {\n    color: red;\n}\n"

/***/ }),

/***/ "./src/app/customer/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/customer/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 50px; margin-bottom: 50px;\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n    </div>\n    <div class=\"col-md-6\">\n      <mat-card>\n        <form [formGroup]=\"loginForm\">\n          <ul>\n            <li>\n              <label>Username </label>\n              <em>*</em>\n            </li>\n            <li>\n              <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n              <div *ngIf=\"loginForm.get('email').hasError('required') && loginForm.get('email').touched\" class=\"alert alert-danger\">\n                *Required!!\n              </div>\n              <div *ngIf=\"loginForm.get('email').hasError('pattern') && loginForm.get('email').touched\" class=\"alert alert-danger\">\n                *Value Not Alloewd\n              </div>\n            </li>\n          </ul>\n          <ul>\n            <li>\n              <label>Password </label>\n              <em>*</em>\n            </li>\n            <li>\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n              <div *ngIf=\"loginForm.get('password').hasError('required') && loginForm.get('password').touched\" class=\"alert alert-danger\">\n                *Required!!\n              </div>\n              <div *ngIf=\"loginForm.get('password').hasError('pattern') && loginForm.get('password').touched\" class=\"alert alert-danger\">\n                *Value Not Alloewd\n              </div>\n            </li>\n          </ul>\n\n          <ul>\n            <li>\n              <input type=\"checkbox\"> Remember me\n              <a href=\"#\" class=\"forgot-password\"> Forgot Password?</a>\n            </li>\n          </ul>\n\n          <ul>\n            <li>\n              <button mat-button class=\"login-button\" [disabled]=\"loginForm.invalid\" (click)=\"this.login()\">Login</button>\n            </li>\n          </ul>\n\n          <ul>\n            <li style=\"text-align: center;\">\n              <a href=\"javascript:;\" routerLink = \"/signup\">Not a Member? Signup Now </a>\n            </li>\n          </ul>\n        </form>\n      </mat-card>\n\n    </div>\n    <div class=\"col-md-3\">\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/customer/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/customer/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, customerService, router) {
        this.formBuilder = formBuilder;
        this.customerService = customerService;
        this.router = router;
        this.loginSuccess = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var username = this.loginForm.get('email').value;
        var password = this.loginForm.get('password').value;
        this.customerService.login(username, password)
            .subscribe(function (response) {
            console.log('response', response);
            if (response) {
                //this.toastr.success('Wel-Come, Login Successfully!!', null, {positionClass: "toast-top-center"});
                _this.router.navigate(['']);
                //this.globalService.getPurchasedProductList();
                // window.location.reload();
            }
            else {
                _this.loginSuccess = false;
                //this.toastr.error('Wrong Username Or Password', null, {positionClass: "toast-top-center"});
            }
        }, function (err) {
            if (err == 'Unauthorized') {
                _this.loginSuccess = false;
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/customer/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/customer/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/customer/reset-password/reset-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/customer/reset-password/reset-password.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    color: red;\n}\n\nh3 {\n    color: red;\n}\n\nh2 {\n    color: red;\n}\n\nhr {\n    border-top: 2px solid rgba(0, 0, 0, .1);\n}\n\n.mat-button {\n    background: red;\n    color: white;\n    width: 100%\n}\n\nem {\n    color: red;\n}"

/***/ }),

/***/ "./src/app/customer/reset-password/reset-password.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/customer/reset-password/reset-password.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"container\">\n    <mat-card-title>\n      <h3>Reset Password</h3>\n      <hr style=\"border-top: 5px solid red;\">\n    </mat-card-title>\n    <mat-card-content>\n        <form [formGroup]=\"resetPasswordForm\">\n            <div class=\"col-md-12\" style=\"border: 1px dotted gray;\">\n              <h4>Recover Your Password</h4>\n              <p>Please enter password and confirm password to reset your password!!</p>\n              <hr>\n      \n              <ul>\n                <li style=\"margin:5px;\">\n                  <label>Password\n                    <em>*</em>\n                  </label>\n                  <div>\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n                  </div>\n                  <div *ngIf=\"resetPasswordForm.get('password').hasError('required') && resetPasswordForm.get('password').touched\" class=\"alert alert-danger\">\n                    *Required!!\n                  </div>\n                  <div *ngIf=\"resetPasswordForm.get('password').hasError('pattern') && resetPasswordForm.get('password').touched\" class=\"alert alert-danger\">\n                    *Value Not Alloewd\n                  </div>\n                </li>\n              </ul>\n              <ul>\n                  <li style=\"margin:5px;\">\n                    <label>Confirm Password\n                      <em>*</em>\n                    </label>\n                    <div>\n                      <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\n                    </div>\n                    <div *ngIf=\"resetPasswordForm.get('confirmPassword').hasError('required') && resetPasswordForm.get('confirmPassword').touched\" class=\"alert alert-danger\">\n                      *Required!!\n                    </div>\n                    <div *ngIf=\"resetPasswordForm.get('confirmPassword').hasError('pattern') && resetPasswordForm.get('confirmPassword').touched\" class=\"alert alert-danger\">\n                      *Value Not Alloewd\n                    </div>\n                  </li>\n                </ul>\n          \n                <ul>\n                  <button mat-button color=\"primary\" [disabled]=\"resetPasswordForm.invalid\" (click)=\"this.resetPassword()\">RESET PASSWORD</button>\n                </ul>\n      \n            </div>\n          </form>\n    </mat-card-content>\n  </mat-card>\n  "

/***/ }),

/***/ "./src/app/customer/reset-password/reset-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/customer/reset-password/reset-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/customer/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(formBuilder, customerService, activatedRoute) {
        this.formBuilder = formBuilder;
        this.customerService = customerService;
        this.activatedRoute = activatedRoute;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.resetPasswordForm = this.formBuilder.group({
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // Here I am getting email address and token from the form the url
        this.email = this.activatedRoute.snapshot.queryParams["email"];
        this.token = this.activatedRoute.snapshot.queryParams["token"];
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var customerDao = new _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
        customerDao.email = this.email;
        customerDao.password = this.resetPasswordForm.get('password').value;
        customerDao.confirmPassword = this.resetPasswordForm.get('confirmPassword').value;
        customerDao.token = this.token;
        this.customerService.resetPassword(customerDao);
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/customer/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/customer/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/customer/signup/signup.component.css":
/*!******************************************************!*\
  !*** ./src/app/customer/signup/signup.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-button {\n\tborder-radius: 30px;\n\twidth: 100%;\n\tbackground: red;\n}\nli {\n\tmargin: 10px;\n}\nhr {\n\tborder-top: 2px solid rgba(0,0,0,.1);\n}\nh3 {\n\tcolor: red;\n}\nem {\n    color: red;\n}"

/***/ }),

/***/ "./src/app/customer/signup/signup.component.html":
/*!*******************************************************!*\
  !*** ./src/app/customer/signup/signup.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 50px; margin-bottom: 50px;\">\n  <mat-card>\n    <form [formGroup]=\"customerForm\">\n      <h3>Personal Information</h3>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <ul>\n            <li>\n              <label>First Name </label>\n              <em>*</em>\n            </li>\n            <li>\n              <input type=\"text\" class=\"form-control\" formControlName=\"firstName\">\n              <div *ngIf=\"customerForm.get('firstName').hasError('required') && customerForm.get('firstName').touched\"\n                class=\"alert alert-danger\">\n                *Required!!\n              </div>\n              <div *ngIf=\"customerForm.get('firstName').hasError('pattern') && customerForm.get('firstName').touched\"\n                class=\"alert alert-danger\">\n                *Value Not Alloewd\n              </div>\n            </li>\n          </ul>\n          <ul>\n            <li>\n              <label>Email </label>\n              <em>*</em>\n            </li>\n            <li>\n              <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n              <div *ngIf=\"customerForm.get('email').hasError('required') && customerForm.get('email').touched\" class=\"alert alert-danger\">\n                *Required!!\n              </div>\n              <div *ngIf=\"customerForm.get('email').hasError('pattern') && customerForm.get('email').touched\" class=\"alert alert-danger\">\n                *Value Not Alloewd\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-6\">\n          <ul>\n            <li>\n              <label>Last Name </label>\n              <em>*</em>\n            </li>\n            <li>\n              <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n              <div *ngIf=\"customerForm.get('lastName').hasError('required') && customerForm.get('lastName').touched\"\n                class=\"alert alert-danger\">\n                *Required!!\n              </div>\n              <div *ngIf=\"customerForm.get('lastName').hasError('pattern') && customerForm.get('lastName').touched\"\n                class=\"alert alert-danger\">\n                *Value Not Alloewd\n              </div>\n            </li>\n          </ul>\n          <ul>\n            <li>\n              <label>Phone Number </label>\n              <em>*</em>\n            </li>\n            <li>\n              <input type=\"number\" class=\"form-control\" formControlName=\"phoneNo\">\n              <div *ngIf=\"customerForm.get('phoneNo').hasError('required') && customerForm.get('phoneNo').touched\"\n                class=\"alert alert-danger\">\n                *Required!!\n              </div>\n              <div *ngIf=\"customerForm.get('phoneNo').hasError('pattern') && customerForm.get('phoneNo').touched\" class=\"alert alert-danger\">\n                *Value Not Alloewd\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!-- <hr> -->\n      <h3 style=\"margin-top: 15px;\">Address Information</h3>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <ul>\n            <li>\n              <label>Company Name </label>\n              <em>*</em>\n            </li>\n            <li>\n              <input type=\"text\" class=\"form-control\" formControlName=\"companyName\">\n              <div *ngIf=\"customerForm.get('companyName').hasError('required') && customerForm.get('companyName').touched\"\n                class=\"alert alert-danger\">\n                *Required!!\n              </div>\n              <div *ngIf=\"customerForm.get('companyName').hasError('pattern') && customerForm.get('companyName').touched\"\n                class=\"alert alert-danger\">\n                *Value Not Alloewd\n              </div>\n            </li>\n          </ul>\n          <ul>\n            <li>\n              <label>Address 1 </label>\n              <em>*</em>\n            </li>\n            <li>\n              <input type=\"text\" class=\"form-control\" formControlName=\"street\">\n              <div *ngIf=\"customerForm.get('street').hasError('required') && customerForm.get('street').touched\" class=\"alert alert-danger\">\n                *Required!!\n              </div>\n              <div *ngIf=\"customerForm.get('street').hasError('pattern') && customerForm.get('street').touched\" class=\"alert alert-danger\">\n                *Value Not Alloewd\n              </div>\n            </li>\n          </ul>\n          <ul>\n            <li>\n              <label>City </label>\n              <em>*</em>\n            </li>\n            <li>\n              <input type=\"text\" class=\"form-control\" formControlName=\"city\">\n              <div *ngIf=\"customerForm.get('city').hasError('required') && customerForm.get('city').touched\" class=\"alert alert-danger\">\n                *Required!!\n              </div>\n              <div *ngIf=\"customerForm.get('city').hasError('pattern') && customerForm.get('city').touched\" class=\"alert alert-danger\">\n                *Value Not Alloewd\n              </div>\n            </li>\n          </ul>\n          <ul>\n            <li>\n              <label>State </label>\n              <em>*</em>\n            </li>\n            <li>\n              <select class=\"form-control\" formControlName=\"state\">\n                <option *ngFor=\"let state of this.state\" [ngValue]=\"state\">\n                  {{state}}\n                </option>\n\n              </select>\n              <div *ngIf=\"customerForm.get('state').hasError('required') && customerForm.get('state').touched\" class=\"alert alert-danger\">\n                *Required!!\n              </div>\n              <div *ngIf=\"customerForm.get('state').hasError('pattern') && customerForm.get('state').touched\" class=\"alert alert-danger\">\n                *Value Not Alloewd\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-6\">\n          <ul>\n            <li>\n              <label>Sales Tax Id</label>\n            </li>\n            <li>\n              <input type=\"text\" class=\"form-control\" formControlName=\"taxId\">\n            </li>\n          </ul>\n          <ul>\n            <li>\n              <label>Address 2 </label>\n            </li>\n            <li>\n              <input type=\"text\" placeholder=\"Please Enter Address 2\">\n            </li>\n          </ul>\n          <ul>\n            <li>\n              <label>Zipcode </label>\n              <em>*</em>\n            </li>\n            <li>\n              <input type=\"number\" class=\"form-control\" formControlName=\"zipCode\">\n              <div *ngIf=\"customerForm.get('zipCode').hasError('required') && customerForm.get('zipCode').touched\"\n                class=\"alert alert-danger\">\n                *Required!!\n              </div>\n              <div *ngIf=\"customerForm.get('zipCode').hasError('pattern') && customerForm.get('zipCode').touched\" class=\"alert alert-danger\">\n                *Value Not Alloewd\n              </div>\n            </li>\n          </ul>\n          <ul>\n            <li>\n              <label>Country </label>\n            </li>\n            <li>\n              <input type=\"text\" class=\"form-control\" formControlName=\"country\">\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n\n        </div>\n        <div class=\"col-md-6\">\n          <ul>\n            <li>\n              <button mat-button class=\"signup-button\" [disabled]=\"customerForm.invalid\" (click)=\"this.register()\">Register</button>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n\n        </div>\n\n      </div>\n    </form>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/customer/signup/signup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/signup/signup.component.ts ***!
  \*****************************************************/
/*! exports provided: SignupComponent, Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as moment from 'moment';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, customerService) {
        this.formBuilder = formBuilder;
        this.customerService = customerService;
        this.state = [];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.customerForm = this.formBuilder.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'phoneNo': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')]],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'street': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'zipCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'city': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'state': ['Alabama', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'country': [''],
            'companyName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'name': [''],
            'createdTimestamp': [''],
            'tier': [''],
            'operationType': [''],
            'taxId': ['']
        });
        // tslint:disable-next-line:whitespace
        // tslint:disable-next-line:max-line-length
        this.state = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        this.customerForm.get('state').setValue('Alabama');
    };
    SignupComponent.prototype.register = function () {
        if (!this.customerForm.valid) {
            alert('Please fill all required fields');
        }
        var name = this.customerForm.get('firstName').value;
        var a = this.customerForm.get('lastName');
        this.customerForm.get('name').setValue(this.customerForm.get('firstName').value + ' ' + this.customerForm.get('lastName').value);
        // this.customerForm.get('createdTimestamp').setValue(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
        this.customerForm.get('tier').setValue(3);
        this.customerForm.get('operationType').setValue('Add');
        this.customerService.addOrUpdateCustomer(this.customerForm.value)
            .subscribe(function (data) {
            // if (data.status === 200 || data.status === 201) {
            //   this.toastr.success('Wel-Come'+name+' Please check your email for login details', 'Registered Successfully!!');
            //   this.router.navigate(['']);
            // }
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
        this.customerForm.reset();
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/customer/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/customer/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], SignupComponent);
    return SignupComponent;
}());

var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/home/home-page/home-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home-page/home-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--========================================\n                     Banner \n==========================================-->\n<section class=\"banner\">\n  <div id=\"banner-slider\" class=\"owl-carousel owl-theme\">\n    <div class=\"item\">\n      <img src=\"assets/image/banner/GLAMOR-CASE-S9.gif\" alt=\"\">\n    </div>\n    <div class=\"item\">\n      <img src=\"assets/image/banner/diamond-case-s9.gif\" alt=\"\">\n    </div>\n    <div class=\"item\">\n      <img src=\"assets/image/banner/aero-iphone-9-banner.gif\" alt=\"\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"assets/image/banner/lg-q7-banner.gif\" alt=\"\">\n    </div>\n    <div class=\"item\">\n      <img src=\"assets/image/banner/samsung-note-9.gif\" alt=\"\">\n    </div>\n    <div class=\"item\">\n      <img src=\"assets/image/banner/space-case.gif\" alt=\"\">\n    </div>\n  </div>\n</section>\n\n<!--========================================\n                   Banner Bottom \n==========================================-->\n<section class=\"banner-bottom\">\n  <div class=\"container\">\n    <!--============ Policy =============-->\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-xs-12 no-padding\">\n        <div class=\"banner-bottom-box\">\n          <img alt=\"\" src=\"assets/image/shipp-icon.png\">\n          <div class=\"txt-sec\">\n            <h3>FREE SHIPPING OPTIONS</h3>\n            <a href=\"javascript:;\">Read more</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 col-xs-12 no-padding\">\n        <div class=\"banner-bottom-box\">\n          <img alt=\"\" src=\"assets/image/warenty-icon.png\">\n          <div class=\"txt-sec\">\n            <h3>RETURNS? NO PROBLEM</h3>\n            <a href=\"javascript:;\">Click here</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 col-xs-12 no-padding\">\n        <div class=\"banner-bottom-box\">\n          <img alt=\"\" src=\"assets/image/accessrs-icon.png\">\n          <div class=\"txt-sec\">\n            <h3>ONLINE SUPPORT</h3>\n            <a href=\"javascript:;\">Order Now</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--========================================\n                   Product \n==========================================-->\n<section class=\"products\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"title\">\n        <h2>Newest Phone Models</h2>\n      </div>\n      <div class=\"main-product-slider\">\n        <div class=\"product-slider owl-carousel owl-theme\">\n          <div class=\"item\" *ngFor=\"let newProduct of this.newProduct\">\n            <div class=\"product-box\">\n              <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">{{newProduct.description}}</a>\n            </div>\n          </div>\n          <!-- <div class=\"item\">\n            <div class=\"product-box\">\n              <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"product-box\">\n              <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"product-box\">\n              <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"product-box\">\n              <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"product-box\">\n              <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"product-box\">\n              <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"product-box\">\n              <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"product-box\">\n              <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n            </div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"title\">\n        <h2>Popular Phone Models</h2>\n      </div>\n\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-4 col-xs-6\">\n        <div class=\"product-box\">\n          <a href=\"javascript:;\"><img src=\"assets/image/mobile.png\" alt=\"\">Google-Pixel</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home-page/home-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.ts ***!
  \*******************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shaered_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shaered.service */ "./src/app/shared/shaered.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(sharedService) {
        this.sharedService = sharedService;
        this.newProduct = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.getNewProducts();
    };
    HomePageComponent.prototype.ngAfterViewInit = function () {
        // this.test();
    };
    HomePageComponent.prototype.getNewProducts = function () {
        var _this = this;
        this.sharedService.getNewProducts()
            .subscribe(function (newProduct) {
            _this.newProduct = newProduct;
        });
    };
    HomePageComponent.prototype.test = function () {
        $(".product-slider").owlCarousel({
            items: 6,
            loop: true,
            autoplay: true,
            autoplaySpeed: 3000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                },
                1400: {
                    items: 6,
                    loop: true
                }
            }
        });
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_shaered_service__WEBPACK_IMPORTED_MODULE_1__["ShaeredService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]],
            declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .bg-white {\n  background: #fff;\n}\n.container {\n  margin-left: auto;\n  margin-right: auto;\n}\n.main-content {\n  display: block;\n  padding-bottom: 50px;\n  min-height: 450px;\n}\n.mb-50 {\n  margin-bottom: 50px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.row {\n  margin-right: -10px;\n  margin-left: -10px;\n}\n.pull-right {\n  float: right !important;\n}\n\n.col-md-3 {\n  width: 25%;\n}\n\n.categories_slidebar {\n    width: 100%;\n    float: left;\n    border: 1px solid #dfe5e8;\n}\n\n.col-xs-6.col-sm-6.col-md-3.product.text-center {\n    padding-left: 8px;\n    padding-right: 8px;\n}\n\n.categories_slidebar .widget-title {\n    width: 100%;\n    float: left;\n    text-transform: uppercase;\n    color: #ff3427;\n    font-weight: bold;\n    padding: 12px;\n    margin: 0;\n    border-bottom: 1px solid #dfe5e8;\n}\n#products-tab {\n    background: #f4f6f7;\n    width: 100%;\n    float: left;\n}\n\n#products-tab .card-header {padding: 0 12px;border-bottom: 1px solid #dfe5e8;}\n#products-tab .collapsed i {\n    transform: rotate(180deg);\n    \n}\n#products-tab .card-header i {\n    float: right;\n    padding: 6px 0;\n    transition: all 0.3s ease;\n}\n\n#products-tab .card-header a {\n    color: #333;\n    padding: 12px 0;\n    display: block;\n    text-decoration: none;\n}\n\n#products-tab .card-body {\n    padding-left: 0;\n    margin: 0;\n    list-style: none;\n}\n\n#products-tab .card-body a {\n    padding: 10px 12px;\n    display: block;\n    border-bottom: 1px solid #dfe5e8;\n}\n#products-tab .card {\n    width: 100%;\n    float: left;\n}\n\n.products .product-inner {\n    -o-transition: all 0.3s;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    position: relative;\n    overflow: visible;\n    border: 1px solid #dfe5e8;\n    background-color: #fff;\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n    margin-bottom: 30px;\n}\n.products .product-image {\n    display: block;\n    text-align: center;\n    position: relative;\n    margin: -1px -1px 0 !important;\n    background-color: #f4f6f7;\n}\n.product .product-labels {\n    position: absolute;\n    width: 60px;\n    right: -21px;\n    top: 21px;\n    z-index: 2;\n}\n\n.product .onsale {\n    position: relative;\n    display: block;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n    font-size: 12px;\n    text-align: center;\n    border-radius: 50%;\n    z-index: 2;\n    margin: 0 auto;\n    background-color: #00bcd4;\n    color: #fff;\n}\n\n.product .new-label {\n    position: relative;\n    display: block;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    font-size: 12px;\n    text-align: center;\n    border-radius: 50%;\n    z-index: 1;\n    background: #393d50;\n    color: #fff;\n    margin: 0 auto;\n}\n\n.product .out-of-stock-label {\n    position: relative;\n    display: block;\n    width: 50px;\n    height: 50px;\n    font-size: 12px;\n    line-height: 12px;\n    text-align: center;\n    border-radius: 50%;\n    background: #f44336;\n    margin: 0 auto;\n    text-transform: uppercase;\n    padding-top: 17px;\n    color: #fff;\n    font-weight: bold;\n}\n.product .onsale + .out-of-stock-label, .product .new-label+.out-of-stock-label {\n    margin-top: -15px;\n}\n.product .out-of-stock-label .small {\n    font-size: 8px;\n    display: block;\n}\n.products .product-image-inner {\n    display: block;\n    position: relative;\n    overflow: hidden;\n}\n.products .product-image img {\n    display: inline-block;\n    width: 136px;\n    height: 136px;\n    object-fit: contain;\n}\n\n.products .product-info {\n    padding: 0px 8px 8px;\n}\n.products .product-info .product-rating {\n    min-height: 16px;\n}\n.products .product-info .product-rating .empty-rating {\n    padding-top: 8px;\n    padding-bottom: 7px;\n}\n.products .product-info .product-rating .empty-rating:before {\n    content: '';\n    display: block;\n    border: 0 none;\n    border-top: 1px solid red;\n    width: 50px;\n    margin: 0 auto;\n}\n\n.products .product-info .product-title {\n    margin-bottom: 0;    \n    color: #5f727f;\n        line-height: 16px;\n        font-size: 12px;\n}\n.products .product-info .price ins, .products .product-info .price .amount {\n    color: #00bcd4;    \n        line-height: 18px;\n        font-size: 13px;\n            margin: 3px 0;\n    display: block;\n}\n.products .product-inner:hover {\n    border-color: #f4f6f7;\n        background-color: #f4f6f7;\n}\n.products .product-inner:hover .product-image-inner picture:last-child{\n   left: 0;\n}\n@media (max-width: 767px)\n{\n  .products .product-info .btn {\n    font-size: 12px;\n    height: 30px;\n  }\n} */\n.categories_slidebar {\n  width: 100%;\n  float: left;\n  border: 1px solid #dfe5e8;\n}\n.categories_slidebar .widget-title {\n  width: 100%;\n  float: left;\n  text-transform: uppercase;\n  color: #ff3427;\n  font-weight: bold;\n  padding: 12px;\n  margin: 0;\n  border-bottom: 1px solid #dfe5e8;\n}\n#products-tab {\n  background: #f4f6f7;\n  width: 100%;\n  float: left;\n}\n#products-tab .card-header {\n  padding: 0 12px;\n  border-bottom: 1px solid #dfe5e8;\n}\n#products-tab .collapsed i {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n#products-tab .card-header i {\n  float: right;\n  padding: 6px 0;\n  transition: all 0.3s ease;\n}\n#products-tab .card-header a {\n  color: #333;\n  padding: 12px 0;\n  display: block;\n  text-decoration: none;\n}\n#products-tab .card-body {\n  padding-left: 0;\n  margin: 0;\n  list-style: none;\n}\n#products-tab .card-body a {\n  padding: 10px 12px;\n  display: block;\n  border-bottom: 1px solid #dfe5e8;\n}\n#products-tab .card {\n  width: 100%;\n  float: left;\n}\n.products .product-inner {\n  transition: all 0.3s;\n  position: relative;\n  overflow: visible;\n  border: 1px solid #dfe5e8;\n  background-color: #fff;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n  margin-bottom: 30px;\n}\n.products .product-image {\n  display: block;\n  text-align: center;\n  position: relative;\n  margin: -1px -1px 0 !important;\n  /* background-color: #f4f6f7; */\n}\n.product .product-labels {\n  position: absolute;\n  width: 50px;\n  right: -10px;\n  top: 21px;\n  z-index: 2;\n}\n.product .onsale {\n  position: relative;\n  display: block;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 12px;\n  text-align: center;\n  border-radius: 50%;\n  z-index: 2;\n  margin: 0 auto;\n  background-color: #00bcd4;\n  color: #fff;\n}\n.product .new-label {\n  position: relative;\n  display: block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 12px;\n  text-align: center;\n  border-radius: 50%;\n  z-index: 1;\n  background: #393d50;\n  color: #fff;\n  margin: 0 auto;\n}\n.product .out-of-stock-label {\n  position: relative;\n  display: block;\n  width: 50px;\n  height: 50px;\n  font-size: 12px;\n  line-height: 12px;\n  text-align: center;\n  border-radius: 50%;\n  background: #f44336;\n  margin: 0 auto;\n  text-transform: uppercase;\n  padding-top: 17px;\n  color: #fff;\n  font-weight: bold;\n}\n.product .onsale+.out-of-stock-label,\n.product .new-label+.out-of-stock-label {\n  margin-top: -15px;\n}\n.product .out-of-stock-label .small {\n  font-size: 8px;\n  display: block;\n}\n.products .product-image-inner {\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\n.products .product-image img {\n  display: inline-block;\n  width: 136px;\n  height: 136px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.products .product-info {\n  padding: 0px 8px 8px;\n}\n.products .product-info .product-rating {\n  min-height: 16px;\n}\n.products .product-info .product-rating .empty-rating {\n  padding-top: 8px;\n  padding-bottom: 7px;\n}\n.products .product-info .product-rating .empty-rating:before {\n  content: '';\n  display: block;\n  border: 0 none;\n  border-top: 1px solid red;\n  width: 100%;\n  margin: 0 auto;\n}\n.products .product-info .product-title {\n  margin-bottom: 0;\n  color: black;\n  line-height: 16px;\n  font-size: 13px;\n}\n.products .product-info .price ins,\n.products .product-info .price .amount {\n  color: black;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 650;\n  margin: 3px 0;\n  display: block;\n}\n.products .product-inner:hover {\n  border-color: #f4f6f7;\n  background-color: #f4f6f7;\n}\n.products .product-inner:hover .product-image-inner picture:last-child {\n  left: 0;\n}\n@media (max-width: 767px) {\n  .products .product-info .btn {\n    font-size: 12px;\n    height: 30px;\n  }\n}\n.col-xs-6.col-sm-6.col-md-3.product.text-center {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-card {\n  list-style-type: none;\n  float: left;\n  width: 217px;\n  font-size: 13px;\n  height: 315px;\n  margin: 3px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: white;\n  background: red;\n}\np {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  text-align: left;\n}\n.addToCartOnSalePage {\n  background: red;\n  color: white;\n  margin-top: 5px;\n  width: 100%;\n  line-height: 32px;\n}\n.notify-me-button {\n  background: red;\n  color: white;\n  margin-top: 35px;\n  width: 100%;\n  line-height: 32px;\n}\n"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main-content container\" role=\"main\">\n  <div class=\"row mt-50 mb-50\">\n    <div class=\"col-md-9 col-sm-12 col-xs-12 order-1\" style=\"margin-top: 20px;\">\n      <div class=\"row products pt-0\">\n        <div *ngFor=\"let product of this.productList\" class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n          <div class=\"product-inner centered-box\">\n            <a href=\"javascript:;\" class=\"product-image\">\n              <div class=\"product-labels\">\n                <span *ngIf=\"product.onSale\" class=\"onsale title-h6\">Sale!</span>\n                <span *ngIf=\"product.newProduct\" class=\"new-label title-h6\">New</span>\n                <span *ngIf=\"product.quantity <= 0\" class=\"out-of-stock-label title-h6\">Out\n                  <span class=\"small\">of stock</span>\n                </span>\n              </div>\n              <span class=\"product-image-inner\">\n                  <picture>\n                    <img *ngIf=\"(product.image==null)\" class=\"\" mat-card-image src=\"assets/image/noImage.png\">\n                    <img *ngIf=\"(product.image!=null)\" src=\"data:image/png;base64,{{product.image}}\" class=\"\" alt=\"NEO\">\n                  </picture>\n\n                  <!-- <picture>\n                   <img src=\"/assets/images/final_logo_3000x1000.png\" class=\"\" alt=\"NEO\">\n                  </picture> -->\n                </span>\n            </a>\n            <div class=\"product-info clearfix\">\n              <div class=\"product-rating product-rating-empty\">\n                <div class=\"empty-rating\"></div>\n              </div>\n              <div class=\"product-title title-h6\">\n                <a href=\"javascript:;\">{{product.description}}</a>\n              </div>\n              <div class=\"product-price\">\n                <span class=\"price\">\n                  <span class=\"woocommerce-Price-amount amount\">\n                    <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                  </span>\n                </span>\n              </div>\n              <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n              <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\"> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-12 col-xs-12\" style=\"margin-top: 20px;\">\n      <div class=\"categories_slidebar\">\n        <h4 class=\"widget-title\">Categories</h4>\n        <!--Accordion wrapper-->\n        <div class=\"accordion\" id=\"products-tab\" role=\"tablist\" aria-multiselectable=\"true\">\n          <!-- Bags -->\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"bags\">\n              <a data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseOne\" aria-expanded=\"true\"\n                aria-controls=\"collapseOne\" class=\"\">\n                Bags <i class=\"fa fa-angle-up\"></i></a>\n            </div>\n            <div id=\"collapseOne\" class=\"collapse in\" role=\"tabpanel\" aria-labelledby=\"bags\">\n              <ul class=\"card-body\">\n                <li><a href=\"javascript:;\">Bags-1</a></li>\n                <li><a href=\"javascript:;\">Bags-2</a></li>\n                <li><a href=\"javascript:;\">Bags-3</a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- End Bags -->\n          <!-- Sunglass -->\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"sunglass\">\n              <a data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseTwo\" aria-expanded=\"false\"\n                aria-controls=\"collapseTwo\">\n                Sunglass <i class=\"fa fa-angle-up\"></i></a>\n            </div>\n            <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"sunglass\" data-parent=\"#accordionEx\">\n              <ul class=\"card-body\">\n                <li><a href=\"javascript:;\">Sunglass-1</a></li>\n                <li><a href=\"javascript:;\">Sunglass-2</a></li>\n                <li><a href=\"javascript:;\">Sunglass-3</a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- End Sunglass -->\n        </div>\n        <!--/.Accordion wrapper-->\n        <h4 class=\"widget-title\">Categories 2</h4>\n        <!--Accordion wrapper-->\n        <div class=\"accordion\" id=\"products-tab\" role=\"tablist\" aria-multiselectable=\"true\">\n          <!-- Bags -->\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"bags-2\">\n              <a data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseThree\" aria-expanded=\"true\"\n                aria-controls=\"collapseThree\" class=\"\">\n                Bags <i class=\"fa fa-angle-up\"></i></a>\n            </div>\n            <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"bags\">\n              <ul class=\"card-body\">\n                <li><a href=\"javascript:;\">Bags-1</a></li>\n                <li><a href=\"javascript:;\">Bags-2</a></li>\n                <li><a href=\"javascript:;\">Bags-3</a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- End Bags -->\n          <!-- Sunglass -->\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"sunglass\">\n              <a data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseFour\" aria-expanded=\"false\"\n                aria-controls=\"collapseFour\">\n                Sunglass <i class=\"fa fa-angle-up\"></i></a>\n            </div>\n            <div id=\"collapseFour\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"sunglass\" data-parent=\"#accordionEx\">\n              <ul class=\"card-body\">\n                <li><a href=\"javascript:;\">Sunglass-1</a></li>\n                <li><a href=\"javascript:;\">Sunglass-2</a></li>\n                <li><a href=\"javascript:;\">Sunglass-3</a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- End Sunglass -->\n        </div>\n        <!--/.Accordion wrapper-->\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shaered_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shaered.service */ "./src/app/shared/shaered.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent(router, route, sharedService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.productList = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // PARAMS CHANGED .. TO SOMETHING REALLY COOL HERE ..
            // for example extract the id..
            var id = +params['id'];
            if (params['type'] == 'model') {
                // (+) converts string 'id' to a number
                _this.getProductByModelId(id);
            }
            else if (params['type'] == 'subCategory') {
                _this.getProductBySubCategoryId(id);
            }
        });
    };
    ProductComponent.prototype.getProductByModelId = function (id) {
        //let id = +this.route.snapshot.paramMap.get('id');
        var _this = this;
        //this.loadingService.loading = true;
        console.log("model id", id);
        this.sharedService.getProductByModelId(id)
            .subscribe(function (product) {
            //this.productList = product;
            var selectedCustomer = _this.sharedService.getCustomerDetailsForSale();
            if (selectedCustomer) {
                product.forEach(function (product) {
                    if (selectedCustomer.tier == 3) {
                        product.retail = product.tier3;
                    }
                    else if (selectedCustomer.tier == 2) {
                        product.retail = product.tier2;
                    }
                    else if (selectedCustomer.tier == 1) {
                        product.retail = product.tier1;
                    }
                });
            }
            _this.productList = product;
            _this.productList = _this.productList.slice();
            // this.loadingService.loading = false;
        });
    };
    ProductComponent.prototype.getProductBySubCategoryId = function (id) {
        //let id = +this.route.snapshot.paramMap.get('id');
        var _this = this;
        //this.loadingService.loading = true;
        console.log("model id", id);
        this.sharedService.getProductBySubCategoryId(id)
            .subscribe(function (product) {
            //this.productList = product;
            var selectedCustomer = _this.sharedService.getCustomerDetailsForSale();
            if (selectedCustomer) {
                product.forEach(function (product) {
                    if (selectedCustomer.tier == 3) {
                        product.retail = product.tier3;
                    }
                    else if (selectedCustomer.tier == 2) {
                        product.retail = product.tier2;
                    }
                    else if (selectedCustomer.tier == 1) {
                        product.retail = product.tier1;
                    }
                });
            }
            _this.productList = product;
            _this.productList = _this.productList.slice();
            // this.loadingService.loading = false;
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_shaered_service__WEBPACK_IMPORTED_MODULE_2__["ShaeredService"]])
    ], ProductComponent);
    return ProductComponent;
}());

var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-6 fotter-box\">\n        <h5>Quick Links</h5>\n        <ul>\n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> About Us</a></li>            \n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> Shipping Information</a></li>            \n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> FAQ</a></li>            \n        </ul>\n      </div>  \n      <div class=\"col-md-3 col-sm-6 fotter-box\">\n        <h5>My Account</h5>\n        <ul>\n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> My Account</a></li>            \n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> Orders History</a></li>            \n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> Return a Product</a></li>            \n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> Broken Screen Buyback</a></li>            \n        </ul>\n      </div>\n      <div class=\"col-md-3 col-sm-6 fotter-box\">\n        <h5>Terms & Conditions</h5>\n        <ul>\n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> Terms & Conditions</a></li>            \n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> Returns Policy</a></li>            \n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> RMA Form</a></li>            \n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> Trademark Disclaimer</a></li>            \n        </ul>\n      </div>\n      <div class=\"col-md-3 col-sm-6 fotter-box\">\n        <h5>Contact Us</h5>\n        <ul>\n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> Lorem ipsum amet site</a></li>            \n          <li><a href=\"javascript:;\"><i class=\"fa fa-caret-right\"></i> Dummy, UK 489756</a></li>            \n          <li><a href=\"tel:+441234567890\"><i class=\"fa fa-caret-right\"></i> +44 123 456 7890</a></li>            \n          <li><a href=\"mailto:example@example.com\"><i class=\"fa fa-caret-right\"></i> example@example.com</a></li>            \n        </ul>\n      </div>      \n    </div>\n  </div>\n</footer>\n\n<section class=\"footer-bottom\">\n    <div class=\"row display-flex flex-center\">\n      <div class=\"col-md-2 col-sm-12\"></div>\n      <div class=\"col-md-7 col-sm-12 display-flex flex-center\" style=\"flex-wrap: nowrap;\">\n          <a class=\"logo\" href=\"javascript:;\"><img src=\"assets/image/NeoSmallLogo.png\" width=\"50\"></a>\n          <p class=\"custom-block\">All trademarks are properties of their respective holders. Neo Cellular LLC is a third party replacement part wholesaler and does not own or make claim to those trademarks used on this website in which it is not the holder.</p>\n      </div>\n      <div class=\"col-md-3 col-sm-12\">\n          <address>© 2018 Neo Cellular 2 . All Rights Reserved.</address>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header sticky-menu\">\n  <section id=\"header\" class=\"header\">\n    <div class=\"timer\">\n      <a href=\"javascript:;\">New Product Launch in <span id=\"clock\">-13168284</span>s</a>\n    </div>\n    t\n    <div class=\"header-top\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-7 col-sm-4\">\n            <ul class=\"flat-infomation social-bar\">\n              <li><a href=\"javascript:;\"><img src=\"assets/image/icon/facebook.svg\"></a></li>\n              <li><a href=\"javascript:;\"><img src=\"assets/image/icon/twitter.svg\"></a></li>\n              <li><a href=\"javascript:;\"><img src=\"assets/image/icon/google-plus.svg\"></a></li>\n              <li><a href=\"javascript:;\"><img src=\"assets/image/icon/linkedin.svg\"></a></li>\n            </ul>\n          </div>\n          <div class=\"col-xs-5 col-sm-8\">\n            <ul class=\"flat-unstyled desktop-account\">\n              <li class=\"account\"><a href=\"javascript:void(0)\" [routerLink]=\"['/login']\" routerLinkActive=\"active\">login</a></li>\n              <li class=\"account\"><a href=\"javascript:void(0)\" [routerLink]=\"['/signup']\" routerLinkActive=\"active\">register</a></li>\n              <li class=\"account\"><a href=\"javascript:;\">my account</a></li>\n              <li class=\"account\"><a href=\"javascript:;\">shipping info</a></li>\n            </ul>\n            <ul class=\"flat-unstyled mobile-account\">\n              <li class=\"account\">\n                <a href=\"javascript:;\">My Account<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n                <ul class=\"unstyled\">\n                  <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n                  <li><a href=\"javascript:;\">register</a></li>\n                  <li><a href=\"javascript:;\">my account</a></li>\n                  <li><a href=\"javascript:;\">shipping info</a></li>\n                </ul>\n              </li>\n              <!-- <li><a href=\"javascript:;\">Broken Screen Buyback</a></li> -->\n              <!-- <li><a href=\"javascript:;\">Shipping Information</a></li> -->\n            </ul>\n            <!-- /.flat-unstyled -->\n          </div>\n          <!-- /.col-md-4 -->\n        </div>\n        <!-- /.row -->\n      </div>\n      <!-- /.container -->\n    </div>\n    <!-- /.header-top -->\n    <div class=\"header-menu menu-stick\">\n      <div class=\"header-middle \">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <div id=\"logo\" class=\"logo\">\n                <a href=\"\">\n                  <img src=\"assets/image/logo.gif\" alt=\"Neo Wireless Accessories\" width=\"170\">\n                </a>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"top-search\">\n                <form action=\"#\" method=\"get\" class=\"form-search\">\n                  <!-- /.cat-wrap -->\n                  <div class=\"box-search\">\n                    <input type=\"text\" name=\"search\" placeholder=\"Search..\">\n                    <span class=\"btn-search\">\n                      <button type=\"submit\" class=\"waves-effect\">\n                        <img src=\"assets/image/search-icon.png\" alt=\"\">\n                      </button>\n                    </span>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"box-cart\">\n                <!-- /.inner-box -->\n                <div class=\"inner-box\">\n                  <i class=\"fa fa-phone\"></i>&nbsp;<a href=\"tel:(678) 404-5669\">(678) 404-5669</a>\n                </div>\n                <!-- /.inner-box -->\n                <div class=\"inner-box\">\n                  <a href=\"#\" title=\"\">\n                    <div class=\"icon-cart\">\n                      <img src=\"assets/image/cart-icon.png\" alt=\"\">\n                      <span class=\"cart-item-count\">2</span>\n                    </div>\n                  </a>\n                  <div class=\"dropdown-box list-item-cart\">\n                    <ul>\n                      <li>\n                        <div class=\"bag-product clearfix\">\n                          <figure class=\"pull-left\">\n                            <a class=\"bag-product-img\" href=\"javascript:;\">\n                              <img width=\"120\" height=\"150\" src=\"assets/image/best-seller-tablet.jpg\">\n                            </a>\n                          </figure>\n                          <div class=\"bag-product-details\">\n                            <div class=\"bag-product-title\">\n                              <a href=\"javascript:;\">iPad Mini</a>\n                            </div>\n                            <div class=\"bag-product-price\">Unit Price:\n                              <span class=\"amount\">£200</span>\n                            </div>\n                            <div class=\"bag-product-quantity\">Quantity: 1</div>\n                          </div>\n                          <a href=\"javascript:;\" class=\"remove-product fa fa-times\"></a>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"bag-product clearfix\">\n                          <figure class=\"pull-left\">\n                            <a class=\"bag-product-img\" href=\"javascript:;\">\n                              <img width=\"120\" height=\"150\" src=\"assets/image/best-deala.phone.jpg\">\n                            </a>\n                          </figure>\n                          <div class=\"bag-product-details\">\n                            <div class=\"bag-product-title\">\n                              <a href=\"javascript:;\">iPad Mini</a>\n                            </div>\n                            <div class=\"bag-product-price\">Unit Price:\n                              <span class=\"amount\">£200</span>\n                            </div>\n                            <div class=\"bag-product-quantity\">Quantity: 1</div>\n                          </div>\n                          <a href=\"javascript:;\" class=\"remove-product fa fa-times\"></a>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"bag-product clearfix\">\n                          <figure class=\"pull-left\">\n                            <a class=\"bag-product-img\" href=\"javascript:;\">\n                              <img width=\"120\" height=\"150\" src=\"assets/image/best-seller-tablet.jpg\">\n                            </a>\n                          </figure>\n                          <div class=\"bag-product-details\">\n                            <div class=\"bag-product-title\">\n                              <a href=\"javascript:;\">iPad Mini</a>\n                            </div>\n                            <div class=\"bag-product-price\">Unit Price:\n                              <span class=\"amount\">£200</span>\n                            </div>\n                            <div class=\"bag-product-quantity\">Quantity: 1</div>\n                          </div>\n                          <a href=\"javascript:;\" class=\"remove-product fa fa-times\"></a>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"bag-product clearfix\">\n                          <figure class=\"pull-left\">\n                            <a class=\"bag-product-img\" href=\"javascript:;\">\n                              <img width=\"120\" height=\"150\" src=\"assets/image/best-deala.phone.jpg\">\n                            </a>\n                          </figure>\n                          <div class=\"bag-product-details\">\n                            <div class=\"bag-product-title\">\n                              <a href=\"javascript:;\">iPad Mini</a>\n                            </div>\n                            <div class=\"bag-product-price\">Unit Price:\n                              <span class=\"amount\">£200</span>\n                            </div>\n                            <div class=\"bag-product-quantity\">Quantity: 1</div>\n                          </div>\n                          <a href=\"javascript:;\" class=\"remove-product fa fa-times\"></a>\n                        </div>\n                      </li>\n                    </ul>\n                    <div class=\"total\">\n                      <span>Subtotal:</span>\n                      <span class=\"price header-total-price\"><span class=\"money\">$0.00</span></span>\n                    </div>\n                    <div class=\"btn-cart\">\n                      <a href=\"javascript:;\" class=\"view-cart\">View Cart</a>\n                      <a href=\"javascript:;\" class=\"check-out\">Checkout</a>\n                    </div>\n                  </div>\n                </div>\n                <!-- /.inner-box -->\n              </div>\n              <!-- /.box-cart -->\n            </div>\n          </div>\n          <!-- /.row -->\n        </div>\n        <!-- /.container -->\n      </div>\n      <!-- /.header-middle -->\n      <div class=\"header-bottom\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12 col-12\">\n              <div class=\"nav-wrap\">\n                <div id=\"mainnav\" class=\"mainnav \">\n                  <ul class=\"menu\">\n                    <li class=\"has-mega-menu\">\n                      <a href=\"#\" title=\"Electronic\">Brand</a>\n                      <span class=\"btn-submenu\"></span>\n                      <div class=\"submenu\">\n                        <div class=\"row no-margin\" *ngIf=\"this.menuDto\">\n                          <div *ngFor=\"let brand of this.menuDto.webBrandDtoList\" class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\" >\n                              <img class=\"img-responsive\" (click)=\"this.onBrandSelect(brand)\" src=\"data:image/png;base64,{{brand.brandImage}}\" alt=\"{{brand.brandName}}\"\n                                width=\"142\">\n                            </a>\n                          </div>\n\n                          <div class=\"brand-submenu\" *ngIf=\"this.selectedBrand\">\n                            <h3>{{this.selectedBrand.brandName}}</h3>\n                            <div class=\"row clearfix\">\n                            <div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\" *ngFor=\"let model of this.selectedBrand.modelDtoList\">\n                              <a href=\"javascript:;\" routerLink=\"/product/model/{{model.modelId}}\">\n                                <img src=\"assets/image/best-deala.phone.jpg\" alt=\"{{model.name}}\">\n                                <span>{{model.name}}</span>\n                              </a>\n                            </div>\n                          </div>\n                        </div>\n                        </div>\n                      </div>\n                    </li>\n                    <li class=\"has-mega-menu\">\n                        <a href=\"#\" title=\"Category\">Category</a>\n                        <span class=\"btn-submenu\"></span>\n                        <div class=\"submenu\">\n                          <div class=\"row no-margin\" *ngIf=\"this.menuDto\">\n                            <div *ngFor=\"let category of this.menuDto.categoryDtoList\" class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                              <a class=\"thumbnail-two\" href=\"javascript:;\">\n                                <img class=\"img-responsive\" (click)=\"this.onCategorySelete(category)\"src=\"assets/image/Merchandising.gif\" alt=\"{{category.name}}\"\n                                  width=\"142\">\n                                  <span>{{category.name}}</span>\n                              </a>\n                            </div>\n  \n                            <div class=\"brand-submenu\" *ngIf=\"this.selectedCategory\">\n                              <h3>{{this.selectedCategory.name}}</h3>\n                              <div class=\"row clearfix\">\n                              <div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\" *ngFor=\"let subCategory of this.selectedCategory.subCategoryDaoList\">\n                                <a href=\"javascript:;\" routerLink=\"/product/subCategory/{{subCategory.id}}\">\n                                  <img src=\"assets/image/best-deala.phone.jpg\" alt=\"{{subCategory.name}}\">\n                                  <span>{{subCategory.name}}</span>\n                                </a>\n                              </div>\n                            </div>\n                          </div>\n                          </div>\n                        </div>\n                      </li>\n                    <!-- <li class=\"has-mega-menu\">\n                      <a href=\"#\" title=\"Category\">Category</a>\n                      <span class=\"btn-submenu\"></span>\n                      <div class=\"submenu\">\n                        <div *ngIf=\"this.menuDto\" class=\"row no-margin\">\n                          <div *ngFor=\"let category of this.menuDto.categoryDtoList\" class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail-two\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" (click)=\"onCategorySelete(category)\" src=\"assets/image/Merchandising.gif\"><span>{{category.name}}</span>\n                            </a>\n                          </div>\n                        </div>\n\n                        <div class=\"brand-submenu\" *ngIf=\"this.selectedCategory\">\n                            <h3>{{this.selectedCategory.name}}</h3>\n                            <div class=\"row clearfix\">\n                            <div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\" *ngFor=\"let subCategory of this.selectedCategory.subCategoryDaoList\">\n                              <a href=\"javascript:;\" routerLink=\"/product/model/{{subCategory.id}}\">\n                                <img src=\"assets/image/best-deala.phone.jpg\" alt=\"{{subCategory.name}}\">\n                                <span>{{subCategory.name}}</span>\n                              </a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </li> -->\n                    <li class=\"has-mega-menu\">\n                      <a href=\"#\" title=\"Electronic\">Carrier</a>\n                      <span class=\"btn-submenu\"></span>\n                      <div class=\"submenu\">\n                        <div class=\"row no-margin\">\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-Adonit.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-Belkin.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-Body-Glove.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-BodyGuardz.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-Braven.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-Card-Ninja.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-Adonit.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-Body-Glove.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-BodyGuardz.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-Body-Glove.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-BodyGuardz.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                            <a class=\"thumbnail\" href=\"javascript:;\">\n                              <img class=\"img-responsive\" src=\"assets/image/logo-Braven.png\" width=\"142\">\n                            </a>\n                          </div>\n                          <div class=\"brand-submenu\">\n                            <h3>Apple</h3>\n                            <div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\">\n                              <a href=\"javascript:;\">\n                                <img src=\"assets/image/best-deala.phone.jpg\" alt=\"\">\n                                <span>iphone x</span>\n                              </a>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\">\n                              <a href=\"javascript:;\">\n                                <img src=\"assets/image/best-deala.phone.jpg\" alt=\"\">\n                                <span>iphone x</span>\n                              </a>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\">\n                              <a href=\"javascript:;\">\n                                <img src=\"assets/image/best-deala.phone.jpg\" alt=\"\">\n                                <span>iphone x</span>\n                              </a>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\">\n                              <a href=\"javascript:;\">\n                                <img src=\"assets/image/best-deala.phone.jpg\" alt=\"\">\n                                <span>iphone x</span>\n                              </a>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\">\n                              <a href=\"javascript:;\">\n                                <img src=\"assets/image/best-deala.phone.jpg\" alt=\"\">\n                                <span>iphone x</span>\n                              </a>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\">\n                              <a href=\"javascript:;\">\n                                <img src=\"assets/image/best-deala.phone.jpg\" alt=\"\">\n                                <span>iphone x</span>\n                              </a>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\">\n                              <a href=\"javascript:;\">\n                                <img src=\"assets/image/best-deala.phone.jpg\" alt=\"\">\n                                <span>iphone x</span>\n                              </a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                    <li class=\"has-mega-menu\">\n                      <a href=\"#\" title=\"Electronic\">New Arrival</a>\n                      <span class=\"btn-submenu\"></span>\n                    </li>\n                    <li class=\"has-mega-menu\">\n                      <a href=\"#\" title=\"Electronic\">Sale</a>\n                      <span class=\"btn-submenu\"></span>\n                    </li>\n                  </ul>\n                </div> \n              </div>\n              <div class=\"btn-menu\">\n                <span></span>\n              </div>\n              <!-- //mobile menu button -->\n            </div>\n            <!-- /.col-md-9 -->\n          </div>\n          <!-- /.row -->\n        </div>\n        <!-- /.container -->\n      </div>\n      <!-- /.header-bottom -->\n    </div>\n  </section>\n  <!-- /#header -->\n</header>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent, WebMenuDto, CategoryDao, WebBrandDto, ModelDao, SubCategoryDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebMenuDto", function() { return WebMenuDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDao", function() { return CategoryDao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebBrandDto", function() { return WebBrandDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDao", function() { return ModelDao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryDao", function() { return SubCategoryDao; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shaered_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaered.service */ "./src/app/shared/shaered.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sharedService, router, route) {
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getMenuDetail();
    };
    HeaderComponent.prototype.onBrandSelect = function (brand) {
        this.selectedBrand = brand;
        jquery__WEBPACK_IMPORTED_MODULE_3__('.has-mega-menu').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.submenu').fadeIn('200');
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('.thumbnail').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.brand-submenu').fadeToggle('slow');
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('.brand-submenu a, .thumbnail-two').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.submenu').fadeOut('200');
        });
        console.log('selected Brand', brand);
    };
    HeaderComponent.prototype.onCategorySelete = function (category) {
        this.selectedCategory = category;
        jquery__WEBPACK_IMPORTED_MODULE_3__('.has-mega-menu').on('mouseover', function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.submenu').fadeIn('200');
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('.thumbnail-two').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.brand-submenu').fadeToggle('slow');
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('.brand-submenu a, .thumbnail-two').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.submenu').fadeOut('200');
        });
    };
    HeaderComponent.prototype.getMenuDetail = function () {
        var _this = this;
        this.sharedService.getWebMenu()
            .subscribe(function (response) {
            _this.menuDto = response;
            console.log('Webmenu response', _this.menuDto);
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_shaered_service__WEBPACK_IMPORTED_MODULE_1__["ShaeredService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());

var WebMenuDto = /** @class */ (function () {
    function WebMenuDto() {
    }
    return WebMenuDto;
}());

var CategoryDao = /** @class */ (function () {
    function CategoryDao() {
    }
    return CategoryDao;
}());

var WebBrandDto = /** @class */ (function () {
    function WebBrandDto() {
    }
    return WebBrandDto;
}());

var ModelDao = /** @class */ (function () {
    function ModelDao() {
    }
    return ModelDao;
}());

var SubCategoryDao = /** @class */ (function () {
    function SubCategoryDao() {
    }
    return SubCategoryDao;
}());



/***/ }),

/***/ "./src/app/shared/shaered.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/shaered.service.ts ***!
  \*******************************************/
/*! exports provided: ShaeredService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaeredService", function() { return ShaeredService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShaeredService = /** @class */ (function () {
    function ShaeredService(http) {
        this.http = http;
        this.headers = new Headers({});
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productUrl;
    }
    ShaeredService.prototype.getWebMenu = function () {
        return this.http.get(this.url + '/getWebMenu');
    };
    ShaeredService.prototype.getNewProducts = function () {
        return this.http.get(this.url + '/getNewProducts');
    };
    ShaeredService.prototype.getProductByModelId = function (modelId) {
        return this.http.get(this.url + '/getEcommerceProductsByModel?modelId=' + modelId);
    };
    ShaeredService.prototype.getProductBySubCategoryId = function (subCategoryId) {
        return this.http.get(this.url + '/getProductsBySubCategory?subCategoryId=' + subCategoryId);
    };
    ShaeredService.prototype.getAllProducts = function () {
        var headers = new Headers({});
        return this.http.get(this.url + '/getAllProduct');
    };
    ShaeredService.prototype.addImage = function (productNo, image) {
        var headers = new Headers({});
        console.log('Customer to be Added' + image);
        this.http.post(this.url + '/insertProductImage?productNo=' + productNo, image)
            .subscribe(function (data) {
            console.log('Response From Add Customer call' + data);
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    ShaeredService.prototype.setCustomerDetailsForSale = function (obj) {
        this.customerDetails = obj;
        localStorage.setItem('customerDetails', JSON.stringify(obj));
    };
    ShaeredService.prototype.getCustomerDetailsForSale = function () {
        this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
        return this.customerDetails;
    };
    ShaeredService.prototype.clearCustomer = function () {
        localStorage.removeItem('customerDetails');
    };
    ShaeredService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShaeredService);
    return ShaeredService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shaered_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaered.service */ "./src/app/shared/shaered.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            ],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            providers: [_shaered_service__WEBPACK_IMPORTED_MODULE_4__["ShaeredService"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    productUrl: 'http://localhost:8080',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Alok/Desktop/My-Project/Neo-Accessories 2/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map