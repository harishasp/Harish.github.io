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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/inbox/inbox.component.ts");
/* harmony import */ var _sentbox_sentbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sentbox/sentbox.component */ "./src/app/sentbox/sentbox.component.ts");
/* harmony import */ var _drafts_drafts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drafts/drafts.component */ "./src/app/drafts/drafts.component.ts");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compose/compose.component */ "./src/app/compose/compose.component.ts");
/* harmony import */ var _roles_roles_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles/roles/roles.component */ "./src/app/roles/roles/roles.component.ts");
/* harmony import */ var _groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./groups/groups/groups.component */ "./src/app/groups/groups/groups.component.ts");
/* harmony import */ var _app_user_app_users_app_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-user/app-users/app-users.component */ "./src/app/app-user/app-users/app-users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_2__["InboxComponent"] },
    { path: 'sentbox', component: _sentbox_sentbox_component__WEBPACK_IMPORTED_MODULE_3__["SentboxComponent"] },
    { path: 'drafts', component: _drafts_drafts_component__WEBPACK_IMPORTED_MODULE_4__["DraftsComponent"] },
    { path: 'comp', component: _compose_compose_component__WEBPACK_IMPORTED_MODULE_5__["ComposeComponent"] },
    // {path:'role',component:RoleComponent},
    { path: 'roles', component: _roles_roles_roles_component__WEBPACK_IMPORTED_MODULE_6__["RolesComponent"] },
    { path: 'groups', component: _groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_7__["GroupsComponent"] },
    { path: 'user', component: _app_user_app_users_app_users_component__WEBPACK_IMPORTED_MODULE_8__["AppUsersComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-user/app-user/app-user.component.css":
/*!**********************************************************!*\
  !*** ./src/app/app-user/app-user/app-user.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-user/app-user/app-user.component.html":
/*!***********************************************************!*\
  !*** ./src/app/app-user/app-user/app-user.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row autofocus=\"false\">\n    <span>{{User.form.controls[$key]? \"Update User\":\"Create User\"}}</span>    \n      <span class=\"example-spacer\"></span>      \n  </mat-toolbar-row>\n</mat-toolbar>\n<form [formGroup]=\"User.form\" class=\"normal-form\">\n  <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n    <mat-grid-tile>\n      <div class=\"controles-container\">\n        <input type=\"hidden\" formControlName=\"$key\">\n        <mat-form-field>\n          <input formControlName=\"UserId\" matInput placeholder=\"UserId\">\n          <mat-error>This field is mandatory.</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input formControlName=\"UserName\" matInput placeholder=\"UserName\">\n          <mat-error>This field is mandatory.</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input formControlName=\"Email\" matInput placeholder=\"Email\">\n          <mat-error>Invalid email address.</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input formControlName=\"Phone\" matInput placeholder=\"Phone\">\n          <mat-error *ngIf=\"User.form.controls['Phone'].errors?.required\">This field is mandatory.</mat-error>\n          <mat-error *ngIf=\"User.form.controls['Phone'].errors?.minlength\">Minimum 8 charactors needed.</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input formControlName=\"PassWord\" matInput placeholder=\"PassWord\">\n          <mat-error>Invalid PassWord.</mat-error>\n        </mat-form-field>\n      </div>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <div class=\"controles-container\">\n        <div class=\"add-bottom-padding\">\n          <mat-radio-group formControlName=\"User_cust\">\n            <mat-radio-button value=\"U\">User</mat-radio-button>\n            <mat-radio-button value=\"C\">Customer</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n        <div class=\"add-bottom-padding\">\n          <mat-checkbox formControlName=\"IsBlocked\">Is Blocked?</mat-checkbox>\n        </div>\n        <div class=\"button-row\">\n          <button mat-raised-button color=\"primary\" (click)=\"Onsubmit()\" type=\"submit\">Submit</button>\n          <button mat-raised-button color=\"warn\" (click)=\"onClear()\">Clear</button>\n        </div>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n</form>"

/***/ }),

/***/ "./src/app/app-user/app-user/app-user.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/app-user/app-user/app-user.component.ts ***!
  \*********************************************************/
/*! exports provided: AppUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserComponent", function() { return AppUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/app-user.service */ "./src/app/shared/app-user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppUserComponent = /** @class */ (function () {
    function AppUserComponent(User, toastr, dialogRef) {
        this.User = User;
        this.toastr = toastr;
        this.dialogRef = dialogRef;
    }
    AppUserComponent.prototype.ngOnInit = function () {
        this.User.GetUsers();
    };
    AppUserComponent.prototype.onClear = function () {
        var $key = this.User.form.get('$key').value;
        this.User.form.reset();
        this.User.initializeFormGroup();
        this.User.form.patchValue({ $key: $key });
        this.dialogRef.close();
    };
    AppUserComponent.prototype.Onsubmit = function () {
        if (this.User.form.valid) {
            if (!this.User.form.get('$key').value) {
                // console.log(this.role.form.value);
                this.User.InsertUser(this.User.form.value);
                this.toastr.success(':: User added succesfully!');
            }
            else {
                this.User.UpdateUser(this.User.form.value);
                this.toastr.info(':: User Updated succesfully!');
            }
            this.User.form.reset();
            this.User.initializeFormGroup();
            this.OnClose();
        }
    };
    AppUserComponent.prototype.OnClose = function () {
        this.User.form.reset();
        this.User.initializeFormGroup();
        this.dialogRef.close();
    };
    AppUserComponent.prototype.CloseDialog = function () {
        this.dialogRef.close();
    };
    AppUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-user',
            template: __webpack_require__(/*! ./app-user.component.html */ "./src/app/app-user/app-user/app-user.component.html"),
            styles: [__webpack_require__(/*! ./app-user.component.css */ "./src/app/app-user/app-user/app-user.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_app_user_service__WEBPACK_IMPORTED_MODULE_1__["AppUserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], AppUserComponent);
    return AppUserComponent;
}());



/***/ }),

/***/ "./src/app/app-user/app-users/app-users.component.css":
/*!************************************************************!*\
  !*** ./src/app/app-user/app-users/app-users.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-user/app-users/app-users.component.html":
/*!*************************************************************!*\
  !*** ./src/app/app-user/app-users/app-users.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  \n  <button mat-raised-button (click)=\"openUserDialog()\">\n    <mat-icon>create</mat-icon>\n    Create User</button>\n\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search..\">\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"listdata\" matSort>\n      <ng-container matColumnDef=\"$key\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> $key </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.$key}}</td>\n      </ng-container>\n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"UserId\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> UserId </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.UserId}}</td>\n      </ng-container>\n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"UserName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> UserName </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.UserName}}</td>\n      </ng-container>\n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"Email\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.Email}}</td>\n      </ng-container>\n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"Phone\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.Phone}}</td>\n      </ng-container>\n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"PassWord\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> PassWord </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.PassWord}}</td>\n      </ng-container>\n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"User_cust\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> User_cust </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.User_cust}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"LastUpdated\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> LastUpdated </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.LastUpdated | date: format}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"IsBlocked\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>IsBlocked </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.IsBlocked}}</td>\n      </ng-container>\n      <!-- Action Column -->\n      <ng-container matColumnDef=\"Action\">\n        <th mat-header-cell *matHeaderCellDef> Action </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <button mat-icon-button (click)=\"OnEdit(row)\">\n            <mat-icon>launch</mat-icon>\n          </button>\n          <button mat-icon-button color=\"warn\" (click)=\"OnDelete(row)\">\n            <mat-icon>delete_outline</mat-icon>\n          </button>\n\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"isLoadingResults\"></mat-progress-bar>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/app-user/app-users/app-users.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/app-user/app-users/app-users.component.ts ***!
  \***********************************************************/
/*! exports provided: AppUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUsersComponent", function() { return AppUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/app-user.service */ "./src/app/shared/app-user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_user_app_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-user/app-user.component */ "./src/app/app-user/app-user/app-user.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppUsersComponent = /** @class */ (function () {
    // isRateLimitReached = false;
    function AppUsersComponent(userService, dialog, toastr) {
        this.userService = userService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.displayedColumns = ['UserId', 'UserName', 'Email', 'Phone', 'PassWord', 'User_cust', 'IsBlocked', 'LastUpdated', 'Action'];
        this.isLoadingResults = true;
    }
    AppUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.userService.GetUsers().subscribe(function (UserList) {
            var array = UserList.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
            _this.listdata = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](array);
            _this.listdata.sort = _this.sort;
            _this.listdata.paginator = _this.paginator;
            _this.isLoadingResults = false;
            // this.isRateLimitReached = false;
        });
    };
    AppUsersComponent.prototype.applyFilter = function (filterValue) {
        this.listdata.filter = filterValue.trim().toLowerCase();
        if (this.listdata.paginator) {
            this.listdata.paginator.firstPage();
        }
    };
    AppUsersComponent.prototype.openUserDialog = function () {
        // const dialogConfig = new MatDialogConfig();
        // dialogConfig.disableClose = true;
        // dialogConfig.autoFocus = true;
        // dialogConfig.hasBackdrop = false;
        this.userService.initializeFormGroup();
        var dialogRef = this.dialog.open(_app_user_app_user_component__WEBPACK_IMPORTED_MODULE_3__["AppUserComponent"], {
            width: '80%',
            data: {},
            hasBackdrop: false,
            autoFocus: true,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    AppUsersComponent.prototype.OnEdit = function (row) {
        this.userService.PopulateUser(row);
        var dialogRef = this.dialog.open(_app_user_app_user_component__WEBPACK_IMPORTED_MODULE_3__["AppUserComponent"], {
            width: '80%',
            data: {},
            hasBackdrop: false,
            autoFocus: true,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    AppUsersComponent.prototype.OnDelete = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            // width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log(row.$key);
                _this.userService.DeleteUser(row.$key);
                _this.toastr.warning(':: Roles delete succesfully!');
                // this.animal = result;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AppUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AppUsersComponent.prototype, "sort", void 0);
    AppUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-users',
            template: __webpack_require__(/*! ./app-users.component.html */ "./src/app/app-user/app-users/app-users.component.html"),
            styles: [__webpack_require__(/*! ./app-users.component.css */ "./src/app/app-user/app-users/app-users.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_app_user_service__WEBPACK_IMPORTED_MODULE_1__["AppUserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AppUsersComponent);
    return AppUsersComponent;
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-main-nav></app-main-nav>\n\n"

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
        this.title = 'Angular-Mails';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_material_model_material_model_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/material-model/material-model.module */ "./src/app/shared/material-model/material-model.module.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/inbox/inbox.component.ts");
/* harmony import */ var _sentbox_sentbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sentbox/sentbox.component */ "./src/app/sentbox/sentbox.component.ts");
/* harmony import */ var _drafts_drafts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drafts/drafts.component */ "./src/app/drafts/drafts.component.ts");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./compose/compose.component */ "./src/app/compose/compose.component.ts");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ckeditor */ "./node_modules/ngx-ckeditor/lib/src/index.js");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_ckeditor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _roles_role_role_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./roles/role/role.component */ "./src/app/roles/role/role.component.ts");
/* harmony import */ var _shared_role_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/role.service */ "./src/app/shared/role.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _roles_roles_roles_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./roles/roles/roles.component */ "./src/app/roles/roles/roles.component.ts");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _groups_group_group_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./groups/group/group.component */ "./src/app/groups/group/group.component.ts");
/* harmony import */ var _groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./groups/groups/groups.component */ "./src/app/groups/groups/groups.component.ts");
/* harmony import */ var _app_user_app_user_app_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-user/app-user/app-user.component */ "./src/app/app-user/app-user/app-user.component.ts");
/* harmony import */ var _app_user_app_users_app_users_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app-user/app-users/app-users.component */ "./src/app/app-user/app-users/app-users.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"],
                _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_9__["InboxComponent"],
                _sentbox_sentbox_component__WEBPACK_IMPORTED_MODULE_10__["SentboxComponent"],
                _drafts_drafts_component__WEBPACK_IMPORTED_MODULE_11__["DraftsComponent"],
                _compose_compose_component__WEBPACK_IMPORTED_MODULE_12__["ComposeComponent"],
                _roles_roles_roles_component__WEBPACK_IMPORTED_MODULE_22__["RolesComponent"],
                _roles_role_role_component__WEBPACK_IMPORTED_MODULE_15__["RoleComponent"],
                _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ConfirmDialogComponent"],
                _groups_group_group_component__WEBPACK_IMPORTED_MODULE_24__["GroupComponent"],
                _groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_25__["GroupsComponent"],
                _app_user_app_user_app_user_component__WEBPACK_IMPORTED_MODULE_26__["AppUserComponent"],
                _app_user_app_users_app_users_component__WEBPACK_IMPORTED_MODULE_27__["AppUsersComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _shared_material_model_material_model_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModelModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                ngx_ckeditor__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot(),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].FireConfig),
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_28__["NgMultiSelectDropDownModule"].forRoot(),
                ngx_editor__WEBPACK_IMPORTED_MODULE_29__["NgxEditorModule"]
            ],
            providers: [_shared_role_service__WEBPACK_IMPORTED_MODULE_16__["RoleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_compose_compose_component__WEBPACK_IMPORTED_MODULE_12__["ComposeComponent"],
                _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ConfirmDialogComponent"],
                _roles_role_role_component__WEBPACK_IMPORTED_MODULE_15__["RoleComponent"],
                _groups_group_group_component__WEBPACK_IMPORTED_MODULE_24__["GroupComponent"],
                _app_user_app_user_app_user_component__WEBPACK_IMPORTED_MODULE_26__["AppUserComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/compose/compose.component.css":
/*!***********************************************!*\
  !*** ./src/app/compose/compose.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/compose/compose.component.html":
/*!************************************************!*\
  !*** ./src/app/compose/compose.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  class=\"normal-form\" #f=\"ngForm\">\r\n<mat-card>\r\n  <span>To</span>\r\n  <ng-multiselect-dropdown [placeholder]=\"'To'\" [data]=\"dropdownList\" [(ngModel)]=\"ToItem\" [settings]=\"dropdownSettings\"\r\n    (onSelect)=\"onItemSelect($event)\"\r\n     >\r\n  </ng-multiselect-dropdown>\r\n  <span>Cc</span>\r\n  <ng-multiselect-dropdown [placeholder]=\"'Cc'\" [data]=\"dropdownList\" [(ngModel)]=\"CcItem\" [settings]=\"dropdownSettings\"\r\n    (onSelect)=\"onItemSelect($event)\"\r\n     >\r\n  </ng-multiselect-dropdown>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Subject\">\r\n  </mat-form-field>\r\n  <app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\"></app-ngx-editor>\r\n  <!-- <ck-editor name=\"editor1\" [(ngModel)]=\"editorValue\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor> -->\r\n  <mat-card>\r\n    <button mat-raised-button color=\"primary\" (click)=\"dddd()\">Send</button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"Close()\">Cancel</button>\r\n  </mat-card>\r\n</mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/compose/compose.component.ts":
/*!**********************************************!*\
  !*** ./src/app/compose/compose.component.ts ***!
  \**********************************************/
/*! exports provided: ComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeComponent", function() { return ComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/app-user.service */ "./src/app/shared/app-user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComposeComponent = /** @class */ (function () {
    function ComposeComponent(AppUser, dialogRef) {
        this.AppUser = AppUser;
        this.dialogRef = dialogRef;
        this.dropdownList = [];
        this.ToItem = [];
        this.CcItem = [];
        this.dropdownSettings = {};
        this.htmlContent = 'Hi Harisha';
    }
    ComposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AppUser.GetUsers().subscribe(function (UserList) {
            var array = UserList.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
            _this.dropdownList = array;
            // this.isRateLimitReached = false;
        });
        // this.dropdownList = [
        //   { item_id: 1, item_text: 'Mumbai' },
        //   { item_id: 2, item_text: 'Bangaluru' },
        //   { item_id: 3, item_text: 'Pune' },
        //   { item_id: 4, item_text: 'Navsari' },
        //   { item_id: 5, item_text: 'New Delhi' }
        // ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'UserId',
            textField: 'UserName',
            // selectAllText: 'Select All',
            // unSelectAllText: 'UnSelect All',
            itemsShowLimit: 10,
            allowSearchFilter: true,
            enableCheckAll: false,
        };
    };
    ComposeComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    ComposeComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    ComposeComponent.prototype.Send = function () {
        console.log(this.ToItem);
        console.log(this.htmlContent);
    };
    ComposeComponent.prototype.dddd = function () {
        console.log(this.ToItem);
        console.log(this.htmlContent);
    };
    ComposeComponent.prototype.Close = function () {
        this.dialogRef.close();
    };
    ComposeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-compose',
            template: __webpack_require__(/*! ./compose.component.html */ "./src/app/compose/compose.component.html"),
            styles: [__webpack_require__(/*! ./compose.component.css */ "./src/app/compose/compose.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_app_user_service__WEBPACK_IMPORTED_MODULE_1__["AppUserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ComposeComponent);
    return ComposeComponent;
}());



/***/ }),

/***/ "./src/app/drafts/drafts-datasource.ts":
/*!*********************************************!*\
  !*** ./src/app/drafts/drafts-datasource.ts ***!
  \*********************************************/
/*! exports provided: DraftsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftsDataSource", function() { return DraftsDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the Drafts view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var DraftsDataSource = /** @class */ (function (_super) {
    __extends(DraftsDataSource, _super);
    function DraftsDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    DraftsDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    DraftsDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DraftsDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DraftsDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return DraftsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/drafts/drafts.component.css":
/*!*********************************************!*\
  !*** ./src/app/drafts/drafts.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drafts/drafts.component.html":
/*!**********************************************!*\
  !*** ./src/app/drafts/drafts.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n    [length]=\"dataSource.data.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"50\"\n    [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/drafts/drafts.component.ts":
/*!********************************************!*\
  !*** ./src/app/drafts/drafts.component.ts ***!
  \********************************************/
/*! exports provided: DraftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftsComponent", function() { return DraftsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _drafts_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drafts-datasource */ "./src/app/drafts/drafts-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DraftsComponent = /** @class */ (function () {
    function DraftsComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    DraftsComponent.prototype.ngOnInit = function () {
        this.dataSource = new _drafts_datasource__WEBPACK_IMPORTED_MODULE_2__["DraftsDataSource"](this.paginator, this.sort);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DraftsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DraftsComponent.prototype, "sort", void 0);
    DraftsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drafts',
            template: __webpack_require__(/*! ./drafts.component.html */ "./src/app/drafts/drafts.component.html"),
            styles: [__webpack_require__(/*! ./drafts.component.css */ "./src/app/drafts/drafts.component.css")]
        })
    ], DraftsComponent);
    return DraftsComponent;
}());



/***/ }),

/***/ "./src/app/groups/group/group.component.css":
/*!**************************************************!*\
  !*** ./src/app/groups/group/group.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }"

/***/ }),

/***/ "./src/app/groups/group/group.component.html":
/*!***************************************************!*\
  !*** ./src/app/groups/group/group.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <mat-toolbar-row autofocus=\"false\">\n      <span>{{Group.form.controls[$GroupId]? \"Update Group\":\"Create Group\"}}</span>    \n        <span class=\"example-spacer\"></span>\n        <!-- <button mat-icon-button (click)=\"CloseDialog()\" autofocus=\"false\">\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">clear</mat-icon>\n          </button> -->\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <form [formGroup]=\"Group.form\" class=\"normal-form\" (submit)=\"Onsubmit()\">\n    <input type=\"hidden\" formControlName=\"$GroupId\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput formControlName=\"GroupName\" placeholder=\"Group\" >\n      <mat-error> Please enter Group Name </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput formControlName=\"GroupEmail\" placeholder=\"Group Email\" >\n      <mat-error> Please enter Group Email </mat-error>\n    </mat-form-field>\n    <div class=\"button-row\">\n      <button mat-raised-button color=\"primary\" [disabled]=\"Group.form.invalid\">Submit</button>\n      <button mat-raised-button color=\"warn\" (click)=\"OnClear()\">Clear</button>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/groups/group/group.component.ts":
/*!*************************************************!*\
  !*** ./src/app/groups/group/group.component.ts ***!
  \*************************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupComponent = /** @class */ (function () {
    function GroupComponent(Group, toastr, dialogRef) {
        this.Group = Group;
        this.toastr = toastr;
        this.dialogRef = dialogRef;
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.Group.GetGroup();
    };
    GroupComponent.prototype.OnClear = function () {
        this.Group.form.reset();
        this.Group.InitializeFormGroup();
        this.dialogRef.close();
    };
    GroupComponent.prototype.Onsubmit = function () {
        if (this.Group.form.valid) {
            if (!this.Group.form.get('$GroupId').value) {
                // console.log(this.role.form.value);
                this.Group.InsertGroup(this.Group.form.value);
                this.toastr.success(':: Group added succesfully!');
            }
            else {
                this.Group.UpdateGroup(this.Group.form.value);
                this.toastr.info(':: Group Updated succesfully!');
            }
            this.Group.form.reset();
            this.Group.InitializeFormGroup();
            this.OnClose();
        }
    };
    GroupComponent.prototype.OnClose = function () {
        this.Group.form.reset();
        this.Group.InitializeFormGroup();
        this.dialogRef.close();
    };
    GroupComponent.prototype.CloseDialog = function () {
        this.dialogRef.close();
    };
    GroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/groups/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.css */ "./src/app/groups/group/group.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_group_service__WEBPACK_IMPORTED_MODULE_1__["GroupService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/groups/groups/groups.component.css":
/*!****************************************************!*\
  !*** ./src/app/groups/groups/groups.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/groups/groups/groups.component.html":
/*!*****************************************************!*\
  !*** ./src/app/groups/groups/groups.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <button mat-raised-button (click)=\"openRoleDialog()\">\n      <mat-icon>create</mat-icon>\n      Create Group</button>\n  \n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search..\">\n    </mat-form-field>\n  \n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"listdata\" matSort>\n  \n        <!-- ID Column -->\n        <!-- <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n      </ng-container> -->\n        <!-- RoleId Column -->\n        <ng-container matColumnDef=\"$GroupId\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> $Group Id </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.$GroupId}}</td>\n        </ng-container>\n        <!-- Progress Column -->\n        <ng-container matColumnDef=\"GroupName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Group Name </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.GroupName}}</td>\n        </ng-container>\n        <!-- Email Column -->\n        <ng-container matColumnDef=\"GroupEmail\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Group Email </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.GroupEmail}}</td>\n        </ng-container>\n        <!-- Action Column -->\n        <ng-container matColumnDef=\"Action\">\n          <th mat-header-cell *matHeaderCellDef> Action </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <button mat-icon-button (click)=\"OnEdit(row)\">\n              <mat-icon>launch</mat-icon>\n            </button>\n            <button mat-icon-button color=\"warn\" (click)=\"OnDelete(row)\">\n              <mat-icon>delete_outline</mat-icon>\n            </button>\n  \n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <!-- <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\"> -->\n        <mat-progress-bar mode=\"indeterminate\" *ngIf=\"isLoadingResults\"></mat-progress-bar>\n      <!-- </div> -->\n  \n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n  </mat-card>"

/***/ }),

/***/ "./src/app/groups/groups/groups.component.ts":
/*!***************************************************!*\
  !*** ./src/app/groups/groups/groups.component.ts ***!
  \***************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../group/group.component */ "./src/app/groups/group/group.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GroupsComponent = /** @class */ (function () {
    // isRateLimitReached = false;
    function GroupsComponent(roleService, dialog, toastr) {
        this.roleService = roleService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.displayedColumns = ['GroupName', 'GroupEmail', 'Action'];
        this.isLoadingResults = true;
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.roleService.GetGroup().subscribe(function (GroupList) {
            var array = GroupList.map(function (item) {
                return __assign({ $GroupId: item.key }, item.payload.val());
            });
            _this.listdata = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](array);
            _this.listdata.sort = _this.sort;
            _this.listdata.paginator = _this.paginator;
            _this.isLoadingResults = false;
            // this.isRateLimitReached = false;
        });
    };
    GroupsComponent.prototype.applyFilter = function (filterValue) {
        this.listdata.filter = filterValue.trim().toLowerCase();
        if (this.listdata.paginator) {
            this.listdata.paginator.firstPage();
        }
    };
    GroupsComponent.prototype.openRoleDialog = function () {
        // const dialogConfig = new MatDialogConfig();
        // dialogConfig.disableClose = true;
        // dialogConfig.autoFocus = true;
        // dialogConfig.hasBackdrop = false;
        this.roleService.InitializeFormGroup();
        var dialogRef = this.dialog.open(_group_group_component__WEBPACK_IMPORTED_MODULE_3__["GroupComponent"], {
            // width: '250px',
            data: {},
            hasBackdrop: false,
            autoFocus: true,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    GroupsComponent.prototype.OnEdit = function (row) {
        this.roleService.PopulateGroup(row);
        var dialogRef = this.dialog.open(_group_group_component__WEBPACK_IMPORTED_MODULE_3__["GroupComponent"], {
            // width: '250px',
            data: {},
            hasBackdrop: false,
            autoFocus: true,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    GroupsComponent.prototype.OnDelete = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            // width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log(row.$RoleId);
                _this.roleService.DeleteGroup(row.$GroupId);
                _this.toastr.warning(':: Roles delete succesfully!');
                // this.animal = result;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], GroupsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], GroupsComponent.prototype, "sort", void 0);
    GroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/groups/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups/groups.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_group_service__WEBPACK_IMPORTED_MODULE_1__["GroupService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/inbox/inbox-datasource.ts":
/*!*******************************************!*\
  !*** ./src/app/inbox/inbox-datasource.ts ***!
  \*******************************************/
/*! exports provided: InboxDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxDataSource", function() { return InboxDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the Inbox view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var InboxDataSource = /** @class */ (function (_super) {
    __extends(InboxDataSource, _super);
    function InboxDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    InboxDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    InboxDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    InboxDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    InboxDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return InboxDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/inbox/inbox.component.css":
/*!*******************************************!*\
  !*** ./src/app/inbox/inbox.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inbox/inbox.component.html":
/*!********************************************!*\
  !*** ./src/app/inbox/inbox.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n    [length]=\"dataSource.data.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"50\"\n    [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/*!******************************************!*\
  !*** ./src/app/inbox/inbox.component.ts ***!
  \******************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _inbox_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox-datasource */ "./src/app/inbox/inbox-datasource.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InboxComponent = /** @class */ (function () {
    function InboxComponent(toastr) {
        this.toastr = toastr;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.dataSource = new _inbox_datasource__WEBPACK_IMPORTED_MODULE_2__["InboxDataSource"](this.paginator, this.sort);
        this.showSuccess();
    };
    InboxComponent.prototype.showSuccess = function () {
        this.toastr.success('Hello world!', 'Toastr fun!');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], InboxComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], InboxComponent.prototype, "sort", void 0);
    InboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__(/*! ./inbox.component.html */ "./src/app/inbox/inbox.component.html"),
            styles: [__webpack_require__(/*! ./inbox.component.css */ "./src/app/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n   \n}\n\na{\ncursor: pointer;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Angular-Mails </mat-toolbar>\n    <br/>\n    <button mat-raised-button style=\"width: 100%;\" (click)=\"openDialog()\" color=\"accent\"\n    matTooltip=\"Click to compose your mail\">Compose</button>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"\">Inbox</a>\n      <a mat-list-item routerLink=\"sentbox\">Sent</a>\n      <a mat-list-item routerLink=\"drafts\">Drafts</a>      \n    </mat-nav-list>\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Admin Panel\n          </mat-panel-title>          \n        </mat-expansion-panel-header> \n        <mat-nav-list>  \n        <a mat-list-item routerLink=\"groups\">Groups</a>\n        <a mat-list-item routerLink=\"roles\">Roles</a>\n        <a mat-list-item routerLink=\"user\">User</a>\n        \n        \n      </mat-nav-list>    \n      </mat-expansion-panel>\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                           (closed)=\"panelOpenState = false\">\n                           </mat-expansion-panel>\n                           </mat-accordion>\n                           \n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" >\n        <mat-toolbar-row>          \n      \n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <a (click)=\"drawer.toggle()\">\n        <div *ngIf=\"!(isHandset$ | async)\">\n          <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n          </div>\n      </a>\n          <span class=\"example-spacer\"></span>\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item>\n                <mat-icon>dialpad</mat-icon>\n                <span>Redial</span>\n              </button>\n              <button mat-menu-item disabled>\n                <mat-icon>voicemail</mat-icon>\n                <span>Check voicemail</span>\n              </button>\n              <button mat-menu-item>\n                <mat-icon>notifications_off</mat-icon>\n                <span>Disable alerts</span>\n              </button>\n            </mat-menu>\n          <!-- <mat-icon class=\"example-icon\">delete</mat-icon> -->\n        </mat-toolbar-row>      \n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <mat-card>\n<router-outlet></router-outlet>\n</mat-card>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../compose/compose.component */ "./src/app/compose/compose.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, dialog) {
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_compose_compose_component__WEBPACK_IMPORTED_MODULE_4__["ComposeComponent"], {
            // width: '250px',
            data: {},
            hasBackdrop: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed : ' + result);
            // this.animal = result;
        });
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/roles/role/role.component.css":
/*!***********************************************!*\
  !*** ./src/app/roles/role/role.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }"

/***/ }),

/***/ "./src/app/roles/role/role.component.html":
/*!************************************************!*\
  !*** ./src/app/roles/role/role.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <!-- <mat-toolbar-row> -->\n    <!-- <span>{{role.form.controls[$RoleId]?\"Update Role\":\"Create Role\"}}</span> -->\n  <!-- </mat-toolbar-row> -->\n  <mat-toolbar-row autofocus=\"false\">\n    <span>{{role.form.controls[$RoleId]? \"Update Role\":\"Create Role\"}}</span>    \n      <span class=\"example-spacer\"></span>\n      <!-- <button mat-icon-button (click)=\"CloseDialog()\" autofocus=\"false\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">clear</mat-icon>\n        </button> -->\n  </mat-toolbar-row>\n</mat-toolbar>\n<form [formGroup]=\"role.form\" class=\"normal-form\" (submit)=\"Onsubmit()\">\n  <input type=\"hidden\" formControlName=\"$RoleId\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput formControlName=\"RoleName\" placeholder=\"Role\" >\n    <mat-error> Please enter Role Name </mat-error>\n  </mat-form-field>\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" [disabled]=\"role.form.invalid\">Submit</button>\n    <button mat-raised-button color=\"warn\" (click)=\"OnClear()\">Clear</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/roles/role/role.component.ts":
/*!**********************************************!*\
  !*** ./src/app/roles/role/role.component.ts ***!
  \**********************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/role.service */ "./src/app/shared/role.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleComponent = /** @class */ (function () {
    function RoleComponent(role, toastr, dialogRef) {
        this.role = role;
        this.toastr = toastr;
        this.dialogRef = dialogRef;
    }
    RoleComponent.prototype.ngOnInit = function () {
        this.role.GetRoles();
    };
    RoleComponent.prototype.OnClear = function () {
        this.role.form.reset();
        this.role.InitializeFormGroup();
        this.dialogRef.close();
    };
    RoleComponent.prototype.Onsubmit = function () {
        if (this.role.form.valid) {
            if (!this.role.form.get('$RoleId').value) {
                // console.log(this.role.form.value);
                this.role.InsertRole(this.role.form.value);
                this.toastr.success(':: Roles added succesfully!');
            }
            else {
                this.role.UpdateRole(this.role.form.value);
                this.toastr.info(':: Roles Updated succesfully!');
            }
            this.role.form.reset();
            this.role.InitializeFormGroup();
            this.OnClose();
        }
    };
    RoleComponent.prototype.OnClose = function () {
        this.role.form.reset();
        this.role.InitializeFormGroup();
        this.dialogRef.close();
    };
    RoleComponent.prototype.CloseDialog = function () {
        this.dialogRef.close();
    };
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/roles/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/roles/role/role.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_role_service__WEBPACK_IMPORTED_MODULE_1__["RoleService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/roles/roles/roles.component.css":
/*!*************************************************!*\
  !*** ./src/app/roles/roles/roles.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  td, th {\r\n    width: 25%;\r\n  }"

/***/ }),

/***/ "./src/app/roles/roles/roles.component.html":
/*!**************************************************!*\
  !*** ./src/app/roles/roles/roles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <button mat-raised-button (click)=\"openRoleDialog()\">\n    <mat-icon>create</mat-icon>\n    Create Role</button>\n\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search..\">\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"listdata\" matSort>\n\n      <!-- ID Column -->\n      <!-- <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container> -->\n      <!-- RoleId Column -->\n      <ng-container matColumnDef=\"$RoleId\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> $RoleId </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.$RoleId}}</td>\n      </ng-container>\n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"RoleName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Role Name </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.RoleName}}</td>\n      </ng-container>\n      <!-- Action Column -->\n      <ng-container matColumnDef=\"Action\">\n        <th mat-header-cell *matHeaderCellDef> Action </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <button mat-icon-button (click)=\"OnEdit(row)\">\n            <mat-icon>launch</mat-icon>\n          </button>\n          <button mat-icon-button color=\"warn\" (click)=\"OnDelete(row)\">\n            <mat-icon>delete_outline</mat-icon>\n          </button>\n\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <!-- <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\"> -->\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"isLoadingResults\"></mat-progress-bar>\n    <!-- </div> -->\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/roles/roles/roles.component.ts":
/*!************************************************!*\
  !*** ./src/app/roles/roles/roles.component.ts ***!
  \************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/role.service */ "./src/app/shared/role.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role/role.component */ "./src/app/roles/role/role.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RolesComponent = /** @class */ (function () {
    // isRateLimitReached = false;
    function RolesComponent(roleService, dialog, toastr) {
        this.roleService = roleService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.displayedColumns = ['RoleName', 'Action'];
        this.isLoadingResults = true;
    }
    RolesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.roleService.GetRoles().subscribe(function (RoleList) {
            var array = RoleList.map(function (item) {
                return __assign({ $RoleId: item.key }, item.payload.val());
            });
            _this.listdata = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](array);
            _this.listdata.sort = _this.sort;
            _this.listdata.paginator = _this.paginator;
            _this.isLoadingResults = false;
            // this.isRateLimitReached = false;
        });
    };
    RolesComponent.prototype.applyFilter = function (filterValue) {
        this.listdata.filter = filterValue.trim().toLowerCase();
        if (this.listdata.paginator) {
            this.listdata.paginator.firstPage();
        }
    };
    RolesComponent.prototype.openRoleDialog = function () {
        // const dialogConfig = new MatDialogConfig();
        // dialogConfig.disableClose = true;
        // dialogConfig.autoFocus = true;
        // dialogConfig.hasBackdrop = false;
        this.roleService.InitializeFormGroup();
        var dialogRef = this.dialog.open(_role_role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"], {
            // width: '250px',
            data: {},
            hasBackdrop: false,
            autoFocus: true,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    RolesComponent.prototype.OnEdit = function (row) {
        this.roleService.PopulateRole(row);
        var dialogRef = this.dialog.open(_role_role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"], {
            // width: '250px',
            data: {},
            hasBackdrop: false,
            autoFocus: true,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    RolesComponent.prototype.OnDelete = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            // width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log(row.$RoleId);
                _this.roleService.DeleteRole(row.$RoleId);
                _this.toastr.warning(':: Roles delete succesfully!');
                // this.animal = result;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], RolesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], RolesComponent.prototype, "sort", void 0);
    RolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/roles/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.css */ "./src/app/roles/roles/roles.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_role_service__WEBPACK_IMPORTED_MODULE_1__["RoleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/sentbox/sentbox-datasource.ts":
/*!***********************************************!*\
  !*** ./src/app/sentbox/sentbox-datasource.ts ***!
  \***********************************************/
/*! exports provided: SentboxDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentboxDataSource", function() { return SentboxDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the Sentbox view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var SentboxDataSource = /** @class */ (function (_super) {
    __extends(SentboxDataSource, _super);
    function SentboxDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    SentboxDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    SentboxDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    SentboxDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    SentboxDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return SentboxDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/sentbox/sentbox.component.css":
/*!***********************************************!*\
  !*** ./src/app/sentbox/sentbox.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sentbox/sentbox.component.html":
/*!************************************************!*\
  !*** ./src/app/sentbox/sentbox.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n    [length]=\"dataSource.data.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"50\"\n    [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/sentbox/sentbox.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sentbox/sentbox.component.ts ***!
  \**********************************************/
/*! exports provided: SentboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentboxComponent", function() { return SentboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sentbox_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sentbox-datasource */ "./src/app/sentbox/sentbox-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SentboxComponent = /** @class */ (function () {
    function SentboxComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    SentboxComponent.prototype.ngOnInit = function () {
        this.dataSource = new _sentbox_datasource__WEBPACK_IMPORTED_MODULE_2__["SentboxDataSource"](this.paginator, this.sort);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SentboxComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SentboxComponent.prototype, "sort", void 0);
    SentboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sentbox',
            template: __webpack_require__(/*! ./sentbox.component.html */ "./src/app/sentbox/sentbox.component.html"),
            styles: [__webpack_require__(/*! ./sentbox.component.css */ "./src/app/sentbox/sentbox.component.css")]
        })
    ], SentboxComponent);
    return SentboxComponent;
}());



/***/ }),

/***/ "./src/app/shared/app-user.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/app-user.service.ts ***!
  \********************************************/
/*! exports provided: AppUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserService", function() { return AppUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppUserService = /** @class */ (function () {
    function AppUserService(fireBase) {
        this.fireBase = fireBase;
        this.dateNow = new Date();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            UserId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]),
            PassWord: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            User_cust: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            IsBlocked: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('N'),
        });
    }
    AppUserService.prototype.initializeFormGroup = function () {
        this.form.setValue({
            $key: null,
            UserId: '',
            UserName: '',
            Email: '',
            Phone: '',
            PassWord: 'AngoEmails',
            User_cust: '',
            IsBlocked: 'false',
        });
    };
    AppUserService.prototype.GetUsers = function () {
        this.AppUserList = this.fireBase.list('Users');
        return this.AppUserList.snapshotChanges();
    };
    AppUserService.prototype.InsertUser = function (User) {
        // console.log(new Date());
        // console.log(User.hireDate);
        this.AppUserList.push({
            // $key: User.$key,
            UserId: User.UserId,
            UserName: User.UserName,
            Email: User.Email,
            Phone: User.Phone,
            PassWord: User.PassWord,
            User_cust: User.User_cust,
            IsBlocked: User.IsBlocked,
            LastUpdated: this.dateNow
        });
    };
    AppUserService.prototype.UpdateUser = function (User) {
        this.AppUserList.update(User.$key, {
            // $key: User.$key,
            UserId: User.UserId,
            UserName: User.UserName,
            Email: User.Email,
            Phone: User.Phone,
            PassWord: User.PassWord,
            User_cust: User.User_cust,
            IsBlocked: User.IsBlocked,
            LastUpdated: this.dateNow
        });
    };
    AppUserService.prototype.DeleteUser = function ($key) {
        this.AppUserList.remove($key);
    };
    AppUserService.prototype.PopulateUser = function (row) {
        this.form.setValue(lodash__WEBPACK_IMPORTED_MODULE_3__["omit"](row, 'LastUpdated'));
    };
    AppUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], AppUserService);
    return AppUserService;
}());



/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete all</h2>\n<mat-dialog-content>Are you sure?</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-raised-button [mat-dialog-close]=\"true\" color=\"warn\">Yes</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
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

var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent() {
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/shared/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/shared/confirm-dialog/confirm-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/group.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/group.service.ts ***!
  \*****************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupService = /** @class */ (function () {
    function GroupService(fireBase) {
        this.fireBase = fireBase;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $GroupId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            GroupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            GroupEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    GroupService.prototype.InitializeFormGroup = function () {
        this.form.setValue({
            $GroupId: null,
            GroupName: '',
            GroupEmail: ''
        });
    };
    // InsertRole(form){  
    //   console.log(form);
    // }
    GroupService.prototype.GetGroup = function () {
        this.GroupList = this.fireBase.list('Groups');
        return this.GroupList.snapshotChanges();
    };
    GroupService.prototype.InsertGroup = function (Group) {
        this.GroupList.push({
            GroupName: Group.GroupName,
            GroupEmail: Group.GroupEmail
        });
    };
    GroupService.prototype.UpdateGroup = function (Group) {
        this.GroupList.update(Group.$GroupId, {
            GroupName: Group.GroupName,
            GroupEmail: Group.GroupEmail
        });
    };
    GroupService.prototype.DeleteGroup = function ($key) {
        this.GroupList.remove($key);
    };
    GroupService.prototype.PopulateGroup = function (row) {
        this.form.setValue(row);
    };
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/shared/material-model/material-model.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/material-model/material-model.module.ts ***!
  \****************************************************************/
/*! exports provided: MaterialModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModelModule", function() { return MaterialModelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var MaterialModelModule = /** @class */ (function () {
    function MaterialModelModule() {
    }
    MaterialModelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"]
            ],
            declarations: [],
            exports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"]
            ]
        })
    ], MaterialModelModule);
    return MaterialModelModule;
}());



/***/ }),

/***/ "./src/app/shared/role.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/role.service.ts ***!
  \****************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleService = /** @class */ (function () {
    function RoleService(fireBase) {
        this.fireBase = fireBase;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $RoleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            RoleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    RoleService.prototype.InitializeFormGroup = function () {
        this.form.setValue({
            $RoleId: null,
            RoleName: ''
        });
    };
    // InsertRole(form){  
    //   console.log(form);
    // }
    RoleService.prototype.GetRoles = function () {
        this.RoleList = this.fireBase.list('Roles');
        return this.RoleList.snapshotChanges();
    };
    RoleService.prototype.InsertRole = function (Role) {
        this.RoleList.push({
            RoleName: Role.RoleName
        });
    };
    RoleService.prototype.UpdateRole = function (Role) {
        this.RoleList.update(Role.$RoleId, {
            RoleName: Role.RoleName
        });
    };
    RoleService.prototype.DeleteRole = function ($key) {
        this.RoleList.remove($key);
    };
    RoleService.prototype.PopulateRole = function (row) {
        this.form.setValue(row);
    };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], RoleService);
    return RoleService;
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
    FireConfig: {
        apiKey: "AIzaSyC_rQmH9tc2alqkdCLluiq_Ec6BWS0sXDA",
        authDomain: "angularmails.firebaseapp.com",
        databaseURL: "https://angularmails.firebaseio.com",
        projectId: "angularmails",
        storageBucket: "angularmails.appspot.com",
        messagingSenderId: "685093232570"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! D:\Angular6Proj\Angular-Mails\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map