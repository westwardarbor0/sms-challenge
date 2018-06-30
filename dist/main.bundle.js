webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header\">\n  <div class=\"main-header-nav\">\n    <button mat-raised-button type=\"button\" class=\"main-header-nav-jsonTable\" (click)=\"activePage = ''\">\n      <mat-icon>home</mat-icon>\n      <span>Home</span>\n    </button>\n    <button mat-raised-button type=\"button\" class=\"main-header-nav-jsonTable\" (click)=\"activePage = 'jsonTable'\">\n      <mat-icon>list</mat-icon>\n      <span>Sort table demo</span>\n    </button>\n    <button mat-raised-button type=\"button\" class=\"main-header-nav-formValidation\" (click)=\"activePage = 'formValidation'\">\n      <mat-icon>done_all</mat-icon>\n      <span>Form validation demo</span>\n    </button>\n  </div>\n</div>\n<div class=\"main-container\">\n\n\n  <div class=\"main-default-content\" *ngIf=\"activePage == ''\">\n    <span class=\"main-welcome-text\">Welcome</span>\n    <span class=\"main-about-text\">This app is my solution to your challenge</span>\n  </div>\n\n\n  <app-json-table *ngIf=\"activePage == 'jsonTable'\"></app-json-table>\n  \n  <app-form-validation *ngIf=\"activePage == 'formValidation'\"></app-form-validation>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/***/ (function(module, exports) {

module.exports = ".main-header {\n  background: #3d5afe;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  z-index: 9999;\n}\n.main-header .main-header-nav {\n  margin: 8px auto;\n  display: block;\n  width: 465px;\n}\n.main-container {\n  float: left;\n  width: 100%;\n  height: calc(100% - 50px);\n  margin-top: 50px;\n  overflow: auto;\n}\n.main-container .main-default-content {\n  margin: 10% auto;\n  width: 400px;\n  height: 300px;\n  padding: 15px;\n  -webkit-box-shadow: 0 0 10px #00000042;\n          box-shadow: 0 0 10px #00000042;\n  background: white;\n}\n.main-container .main-default-content .main-welcome-text,\n.main-container .main-default-content .main-about-text {\n  float: left;\n  width: 100%;\n  color: #3d5afe;\n  font-size: 40px;\n  text-align: center;\n}\n.main-container .main-default-content .main-about-text {\n  font-size: 20px;\n  margin-top: 100px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.activePage = "";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__json_table_json_table_component__ = __webpack_require__("./src/app/json-table/json-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__form_validation_form_validation_component__ = __webpack_require__("./src/app/form-validation/form-validation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__json_table_json_table_component__["a" /* JsonTableComponent */],
                __WEBPACK_IMPORTED_MODULE_8__form_validation_form_validation_component__["a" /* FormValidationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatNativeDateModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form-validation/form-validation.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"formValidation-form\" [formGroup]=\"formValidation\" >\n  <mat-form-field class=\"formValidation-form-field\">\n    <input matInput placeholder=\"Email\" [(ngModel)]=\"formEmail\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\n    <mat-error *ngIf=\"formValidation.get('email').hasError('email') && !formValidation.get('email').hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"formValidation.get('email').hasError('required')\">\n      Email is\n      <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"formValidation-form-field\">\n    <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"formPassword\" formControlName=\"password\" [errorStateMatcher]=\"matcher\">\n    <mat-hint>Passwords must match, atleast 8 charactes long</mat-hint>\n    <mat-error *ngIf=\"formValidation.get('password').hasError('passwordMismatch') && !formValidation.get('password').hasError('required')  && !formValidation.get('passwordConfirm').hasError('required')\">\n        Passwords are different\n      </mat-error>\n      <mat-error *ngIf=\"formValidation.get('password').hasError('passwordShort') && !formValidation.get('password').hasError('required')\">\n          Password is to short\n      </mat-error>\n    <mat-error *ngIf=\"formValidation.get('password').hasError('required')\">\n      Password is\n      <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"formValidation-form-field\">\n    <input matInput type=\"password\" placeholder=\"Password confirm\" [(ngModel)]=\"formPasswordConfirm\" formControlName=\"passwordConfirm\" [errorStateMatcher]=\"matcher\">\n    <mat-hint>Passwords must match, atleast 8 charactes long</mat-hint>\n    <mat-error *ngIf=\"formValidation.get('passwordConfirm').hasError('passwordMismatch') && !formValidation.get('passwordConfirm').hasError('required')  && !formValidation.get('password').hasError('required')\">\n        Passwords are different\n      </mat-error>\n      <mat-error *ngIf=\"formValidation.get('passwordConfirm').hasError('passwordShort') && !formValidation.get('passwordConfirm').hasError('required')\">\n          Password is to short\n      </mat-error>\n    <mat-error *ngIf=\"formValidation.get('passwordConfirm').hasError('required')\">\n      Password is\n      <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n\n  <button mat-raised-button type=\"button\" [disabled]=\"!(this.formValidation.status == 'VALID')\" class=\"formValidation-form-confirm\" (click)=\"confirmValidation()\">\n      <mat-icon>send</mat-icon>\n      <span>Send</span>\n    </button>\n</form>\n"

/***/ }),

/***/ "./src/app/form-validation/form-validation.component.less":
/***/ (function(module, exports) {

module.exports = ".formValidation-form {\n  margin: 10% auto;\n  width: 400px;\n  height: 300px;\n  padding: 15px;\n  -webkit-box-shadow: 0 0 10px #00000042;\n          box-shadow: 0 0 10px #00000042;\n  background: white;\n  position: relative;\n}\n.formValidation-form .formValidation-form-field {\n  float: left;\n  margin-top: 17px;\n  width: 100%;\n}\n.formValidation-form .formValidation-form-confirm {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n}\n"

/***/ }),

/***/ "./src/app/form-validation/form-validation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormValidationComponent; });
/* unused harmony export CustomValidators */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Error when invalid control is dirty, touched, or submitted. */
//triggers the events
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var FormValidationComponent = /** @class */ (function () {
    function FormValidationComponent() {
        this.formEmail = '';
        this.formPassword = '';
        this.formPasswordConfirm = '';
        //defining group of validators for form fields
        this.formValidation = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            //validation of email field
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email,
            ]),
            //validation of password and confirm
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                CustomValidators.passwordsMatch(this).bind(this),
                CustomValidators.passwordLength().bind(this) //custom validation 
            ]),
            'passwordConfirm': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                CustomValidators.passwordsMatch(this).bind(this),
                CustomValidators.passwordLength().bind(this) //custom validation 
            ])
        });
        this.matcher = new MyErrorStateMatcher(); //init of the events , up
    }
    //event after form confirm
    //just example
    FormValidationComponent.prototype.confirmValidation = function () {
        alert("Stealing your creditials...");
    };
    FormValidationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-form-validation',
            template: __webpack_require__("./src/app/form-validation/form-validation.component.html"),
            styles: [__webpack_require__("./src/app/form-validation/form-validation.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FormValidationComponent);
    return FormValidationComponent;
}());

//custo validators for passwords
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    //passing form and chechcking if passwords match 
    CustomValidators.passwordsMatch = function (form) {
        return function (control) {
            if (form['formPassword'] !== form['formPasswordConfirm']) {
                return { 'passwordMismatch': true }; //err if not
            }
            else {
                return null;
            }
        };
    };
    //password length control
    CustomValidators.passwordLength = function () {
        return function (control) {
            if (control.value == null) {
                return null;
            }
            if (control.value.length < 8) {
                return { 'passwordShort': true }; //err if not
            }
            else {
                return null;
            }
        };
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/app/json-table/json-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jsonTable-date-filter\">\n  <div class=\"jsonTable-date-filter-wrapper\">\n  <mat-form-field class=\"jsonTable-date-from\">\n    <input matInput [(ngModel)]=\"filterDateFrom\" [matDatepicker]=\"pickerFrom\" placeholder=\"Choose start date\">\n    <mat-datepicker-toggle matSuffix [for]=\"pickerFrom\"></mat-datepicker-toggle>\n    <mat-datepicker #pickerFrom></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field class=\"jsonTable-date-to\">\n    <input matInput [(ngModel)]=\"filterDateTo\" [matDatepicker]=\"pickerTo \" placeholder=\"Choose end date\">\n    <mat-datepicker-toggle matSuffix [for]=\"pickerTo\"></mat-datepicker-toggle>\n    <mat-datepicker #pickerTo></mat-datepicker>\n  </mat-form-field>\n  <button mat-raised-button type=\"button\" class=\"jsonTable-date-startFilter\" (click)=\"filterTable()\">\n      <mat-icon>schedule</mat-icon>\n      <span>Filter</span>\n  </button>\n  <button mat-icon-button type=\"button\" class=\"jsonTable-date-clearFilter\" *ngIf=\"activeFilter\" (click)=\"unfilterTable()\">\n      <mat-icon>clear</mat-icon>\n  </button>\n</div>\n</div>\n<div class=\"jsonTable-data-container\">\n  <table matSort (matSortChange)=\"sortData($event)\">\n    <tr>\n      <th mat-sort-header=\"city\">City</th>\n      <th mat-sort-header=\"start_date\">Start date</th>\n      <th mat-sort-header=\"end_date\">End date</th>\n      <th mat-sort-header=\"price\">Price</th>\n      <th mat-sort-header=\"status\">Status</th>\n      <th mat-sort-header=\"color\">Color</th>\n    </tr>\n\n    <tr *ngFor=\"let city of jsonData\">\n      <td>{{city.city}}</td>\n      <td>{{city.start_date}}</td>\n      <td>{{city.end_date}}</td>\n      <td>{{city.price}}</td>\n      <td>{{city.status}}</td>\n      <td>{{city.color}}</td>\n    </tr>\n  </table>\n</div>\n<button mat-raised-button type=\"button\" class=\"jsonTable-nav-loadmore\" *ngIf=\"isNextPage() && !activeFilter\" (click)=\"addJsonPage()\">\n  <mat-icon>cached</mat-icon>\n  <span>Load more...</span>\n</button>\n"

/***/ }),

/***/ "./src/app/json-table/json-table.component.less":
/***/ (function(module, exports) {

module.exports = ".jsonTable-data-container,\n.jsonTable-date-filter {\n  width: 50%;\n  margin: 0 auto;\n  padding: 10px;\n  -webkit-box-shadow: 0 0 10px #00000042;\n          box-shadow: 0 0 10px #00000042;\n  background: white;\n  margin-top: 8px;\n  margin-bottom: 10px;\n  overflow: auto;\n  min-width: 500px;\n}\n.jsonTable-date-filter-wrapper {\n  margin: 0 auto;\n  display: block;\n}\n.jsonTable-data-container {\n  height: calc(100% - 160px);\n}\n.jsonTable-data-container table {\n  float: left;\n  width: 100%;\n}\n.jsonTable-date-filter {\n  height: 50px;\n  width: 555px;\n  overflow: hidden;\n}\n.jsonTable-nav-loadmore {\n  margin: 0 auto;\n  display: block;\n}\n"

/***/ }),

/***/ "./src/app/json-table/json-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JsonTableComponent = /** @class */ (function () {
    function JsonTableComponent(http) {
        this.http = http;
        this.jsonData = [];
        this.origData = [];
        this.fullData = [];
        this.filterDateFrom = "";
        this.filterDateTo = "";
        this.activeFilter = false;
        this.activePage = 1;
        this.pageSize = 50;
    }
    //init of class
    JsonTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getJSON().subscribe(function (data) {
            _this.jsonData, _this.origData = data.slice(0, _this.pageSize);
            _this.fullData = data;
            _this.initSortHeader();
        });
    };
    //disable the date filter 
    JsonTableComponent.prototype.unfilterTable = function () {
        this.activeFilter = false;
        this.activePage = 1;
        this.ngOnInit();
    };
    //control of date fitler
    JsonTableComponent.prototype.filterTable = function () {
        var date_from = new Date(this.filterDateFrom);
        var date_to = new Date(this.filterDateTo);
        //filter determing the date 
        var filtered = this.fullData.filter(function (city) {
            var start = new Date(city['start_date']);
            var end = new Date(city['end_date']);
            //dates compare
            return (date_from < start && end < date_to);
        });
        this.activePage = 1;
        this.jsonData = filtered;
        this.activeFilter = true;
    };
    //request for json data
    JsonTableComponent.prototype.getJSON = function () {
        return this.http.get("./assets/data/data.json");
    };
    //control if next page is avaiable
    JsonTableComponent.prototype.isNextPage = function () {
        return (this.activePage * this.pageSize) < this.fullData.length;
    };
    //loading nect page of results
    JsonTableComponent.prototype.addJsonPage = function () {
        this.activePage++;
        this.jsonData, this.origData = this.fullData.slice(0, this.activePage * this.pageSize);
        this.initSortHeader();
    };
    //reinitalization of material sorted header
    JsonTableComponent.prototype.initSortHeader = function () {
        var defSort = { active: "", direction: "" };
        if (this.lastSort) {
            defSort = this.lastSort;
        }
        this.sortData(defSort);
    };
    //sort data function for material sorted header
    JsonTableComponent.prototype.sortData = function (sort) {
        var _this = this;
        this.lastSort = sort;
        var data = this.origData.slice();
        if (this.activeFilter) {
            data = this.jsonData;
        }
        if ((!sort.active || sort.direction === '')) {
            this.jsonData = data;
            return;
        }
        //sorting data with right filter
        this.jsonData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'city': return _this.compare(a.city, b.city, isAsc);
                case 'start_date': return _this.compareDate(a.start_date, b.start_date, isAsc);
                case 'end_date': return _this.compareDate(a.end_date, b.end_date, isAsc);
                case 'price': return _this.compare(a.price, b.price, isAsc);
                case 'status': return _this.compare(a.status, b.status, isAsc);
                case 'color': return _this.compare(a.color, b.color, isAsc);
                default: return 0;
            }
        });
    };
    //compare as string
    JsonTableComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    //compare as date
    JsonTableComponent.prototype.compareDate = function (a, b, isAsc) {
        return (new Date(a) < new Date(b) ? -1 : 1) * (isAsc ? 1 : -1);
    };
    JsonTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-json-table',
            template: __webpack_require__("./src/app/json-table/json-table.component.html"),
            styles: [__webpack_require__("./src/app/json-table/json-table.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JsonTableComponent);
    return JsonTableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map