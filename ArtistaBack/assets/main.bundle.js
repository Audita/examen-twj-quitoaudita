webpackJsonp([1,4],{

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterURLService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasterURLService = (function () {
    function MasterURLService() {
        //this._url = "http://localhost:1337/";
        this._url = "https://examen-twj-quitoaudita-audita.c9users.io/";
    }
    Object.defineProperty(MasterURLService.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (nuevoUrl) {
            this._url = nuevoUrl;
        },
        enumerable: true,
        configurable: true
    });
    MasterURLService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MasterURLService);
    return MasterURLService;
}());
//# sourceMappingURL=C:/Users/AuditaQuito/Documents/GitHub/examen-twj-quitoaudita/ArtistaAlbumFront/src/master-url.service.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_master_url_service__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumComponent = (function () {
    function AlbumComponent(_ActivatedRoute, _http, _masterURL) {
        this._ActivatedRoute = _ActivatedRoute;
        this._http = _http;
        this._masterURL = _masterURL;
        this.albumes = [];
        this.nuevoAlbum = {};
        this.disabledButtons = {
            NuevoAlbumFormSubmitButton: false
        };
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ActivatedRoute
            .params
            .subscribe(function (parametros) {
            _this._parametros = parametros;
            _this._http.get(_this._masterURL.url + 'Album?idArtista=' + _this._parametros.idArtista)
                .subscribe(function (res) {
                _this.albumes = res.json();
            }, function (err) {
                console.log(err);
            });
        });
    };
    AlbumComponent.prototype.crearAlbum = function (formulario) {
        var _this = this;
        var album = {
            nombre: formulario.value.nombre,
            fechaLanzamiento: formulario.value.fechaLanzamiento,
            URLPortada: formulario.value.URLPortada,
            idArtista: this._parametros.idArtista
        };
        this._http.post(this._masterURL.url + 'Album', album)
            .subscribe(function (res) {
            _this.albumes.push(res.json());
            _this.nuevoAlbum = {};
            _this.disabledButtons.NuevoAlbumFormSubmitButton = false;
        }, function (err) {
            console.log(err);
        });
    };
    AlbumComponent.prototype.borrarAlbum = function (id) {
        var _this = this;
        this._http.delete(this._masterURL.url + 'Album/' + id).subscribe(function (res) {
            var albumBorrado = res.json();
            _this.albumes = _this.albumes.filter(function (value) { return albumBorrado.id != value.id; });
        }, function (err) {
            console.log(err);
        });
    };
    AlbumComponent.prototype.actualizarAlbum = function (album, id) {
        var parametros = {
            nombre: album.nombre,
            fechaLanzamiento: album.fechaLanzamiento,
            URLPortada: album.URLPortada
        };
        this._http.put(this._masterURL.url + "Album/" + id, parametros).subscribe(function (res) {
            album.formularioCerrado = !album.formularioCerrado;
            console.log("Respuesta:", res.json());
        }, function (err) {
            console.log("Error: ", err);
        });
    };
    AlbumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-album',
            template: __webpack_require__(515),
            styles: [__webpack_require__(510)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_master_url_service__["a" /* MasterURLService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_master_url_service__["a" /* MasterURLService */]) === 'function' && _c) || Object])
    ], AlbumComponent);
    return AlbumComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/AuditaQuito/Documents/GitHub/examen-twj-quitoaudita/ArtistaAlbumFront/src/album.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_master_url_service__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistaComponent = (function () {
    function ArtistaComponent(_http, _masterURL) {
        this._http = _http;
        this._masterURL = _masterURL;
        this.title = "Bienvenido al Modulo de Artistas";
        this.nuevoArtista = {};
        this.artistas = [];
        this.disabledButtons = {
            NuevoArtistaFormSubmitButton: false
        };
    }
    ArtistaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get(this._masterURL.url + "Artista")
            .subscribe(function (res) {
            _this.artistas = res.json()
                .map(function (value) {
                value.formularioCerrado = true;
                return value;
            });
        }, function (err) {
            console.log(err);
        });
    };
    ArtistaComponent.prototype.crearArtista = function (formulario) {
        var _this = this;
        this.disabledButtons.NuevoArtistaFormSubmitButton = true;
        this._http.post(this._masterURL.url + "Artista", {
            nombre: formulario.value.nombre,
            estilo: formulario.value.estilo,
            paisResidencia: formulario.value.paisResidencia
        }).subscribe(function (res) {
            console.log("No hubo Errores");
            console.log(res);
            _this.artistas.push(res.json());
            _this.nuevoArtista = {};
            _this.disabledButtons.NuevoArtistaFormSubmitButton = false;
        }, function (err) {
            _this.disabledButtons.NuevoArtistaFormSubmitButton = false;
            console.log("Ocurrio un err or", err);
        }, function () {
        });
    };
    ArtistaComponent.prototype.borrarArtista = function (id) {
        var _this = this;
        this._http.delete(this._masterURL.url + "Artista/" + id)
            .subscribe(function (res) {
            var artistaBorrado = res.json();
            _this.artistas = _this.artistas.filter(function (value) { return artistaBorrado.id != value.id; });
        }, function (err) {
            console.log(err);
        });
    };
    ArtistaComponent.prototype.actualizarArtista = function (artista, formulario) {
        var parametos = {
            nombre: artista.nombre,
            estilo: artista.estilo,
            paisResidencia: artista.paisResidencia
        };
        this._http.put(this._masterURL.url + "Artista/" + artista.id, parametos)
            .subscribe(function (res) {
            artista.formularioCerrado = !artista.formularioCerrado;
            console.log("Respuesta:", res.json());
        }, function (err) {
            console.log("Error:", err);
        });
    };
    ArtistaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-artista',
            template: __webpack_require__(517),
            styles: [__webpack_require__(512)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_master_url_service__["a" /* MasterURLService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_master_url_service__["a" /* MasterURLService */]) === 'function' && _b) || Object])
    ], ArtistaComponent);
    return ArtistaComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/AuditaQuito/Documents/GitHub/examen-twj-quitoaudita/ArtistaAlbumFront/src/artista.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(518),
            styles: [__webpack_require__(513)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/AuditaQuito/Documents/GitHub/examen-twj-quitoaudita/ArtistaAlbumFront/src/home.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 335;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(456);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/AuditaQuito/Documents/GitHub/examen-twj-quitoaudita/ArtistaAlbumFront/src/main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(516),
            styles: [__webpack_require__(511)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/AuditaQuito/Documents/GitHub/examen-twj-quitoaudita/ArtistaAlbumFront/src/app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_master_url_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artista_artista_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__album_album_component__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__artista_artista_component__["a" /* ArtistaComponent */],
                __WEBPACK_IMPORTED_MODULE_9__album_album_component__["a" /* AlbumComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_master_url_service__["a" /* MasterURLService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/AuditaQuito/Documents/GitHub/examen-twj-quitoaudita/ArtistaAlbumFront/src/app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artista_artista_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__album_album_component__ = __webpack_require__(304);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'artista', component: __WEBPACK_IMPORTED_MODULE_2__artista_artista_component__["a" /* ArtistaComponent */] },
    { path: 'artista/:idArtista/album', component: __WEBPACK_IMPORTED_MODULE_3__album_album_component__["a" /* AlbumComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=C:/Users/AuditaQuito/Documents/GitHub/examen-twj-quitoaudita/ArtistaAlbumFront/src/app.routes.js.map

/***/ }),

/***/ 456:
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
//# sourceMappingURL=C:/Users/AuditaQuito/Documents/GitHub/examen-twj-quitoaudita/ArtistaAlbumFront/src/environment.js.map

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" >\r\n  <h1 align=\"center\">Albumes</h1>\r\n</div>\r\n<div class=\"col-sm-12\">\r\n<div class=\"col-sm-3\"></div>\r\n<div class=\"col-sm-6\">\r\n  <form class=\"animated bounceIn\" (ngSubmit)=\"crearAlbum(NuevoAlbumForm)\" #NuevoAlbumForm=\"ngForm\">\r\n  <div class=\"form-group\">\r\n    <label>Nombre:</label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           placeholder=\"Ingrese el nombre del album\"\r\n           name=\"nombre\"\r\n           [(ngModel)]=\"nuevoAlbum.nombre\"\r\n           #nombre=\"ngModel\"\r\n           #nombreElm\r\n    >\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Fecha de lanzamiento</label>\r\n    <input type=\"date\"\r\n           class=\"form-control\"\r\n           placeholder=\"Ingrese la fecha de lanzamiento\"\r\n           name=\"fechaLanzamiento\"\r\n           [(ngModel)]=\"nuevoAlbum.fechaLanzamiento\"\r\n           #fechaLanzamiento=\"ngModel\"\r\n           #nombreElm\r\n    >\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>URL de la Portada</label>\r\n    <input type=\"url\"\r\n           class=\"form-control\"\r\n           placeholder=\"Ingrese  la URL de la Portada\"\r\n           name=\"URLPortada\"\r\n           [(ngModel)]=\"nuevoAlbum.URLPortada\"\r\n           #URLPortada=\"ngModel\"\r\n           #nombreElm\r\n    >\r\n  </div>\r\n\r\n    <button [disabled]=\"disabledButtons.NuevoAlbumFormSubmitButton||!NuevoAlbumForm.valid\" type=\"submit\"\r\n            class=\"btn btn-block btn-success\">Crear Album\r\n    </button>\r\n  </form>\r\n</div>\r\n  <div class=\"col-sm-3\"></div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6 animated flipInX\" *ngFor=\"let album of albumes\">\r\n    <div class=\"text-center\">\r\n      <h3>{{album.nombre}}</h3>\r\n      <p>ID: {{album.id}}</p>\r\n      <p>Fecha de Lanzamiento: {{album.fechaLanzamiento}}</p>\r\n      <p>URL de la Portada: {{album.URLPortada}}</p>\r\n    </div>\r\n    <div class=\"row animated flipInY\" [hidden]=\"!album.formularioCerrado\">\r\n      <div class=\"col-sm-5\">\r\n        <button class=\"btn btn-block btn-info\"\r\n                (click)=\"album.formularioCerrado = !album.formularioCerrado\"\r\n        >Actualizar</button>\r\n      </div>\r\n      <div class=\"col-sm-2\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <button class=\"btn btn-block btn-danger\" (click)=\"borrarAlbum(album.id)\">Borrar</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"div\" [hidden]=\"album.formularioCerrado\">\r\n      <form action=\"\">\r\n        <form class=\"animated bounceIn\" (ngSubmit)=\"actualizarAlbum(album,album.id)\" #NuevoAlbumForm=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label>Nombre:</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Ingrese el nombre del album\"\r\n                   name=\"nombre\"\r\n                   [(ngModel)]=\"album.nombre\"\r\n                   #nombre=\"ngModel\"\r\n                   #nombreElm\r\n            >\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Fecha de lanzamiento</label>\r\n            <input type=\"date\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Ingrese la fecha de lanzamiento\"\r\n                   name=\"fechaLanzamiento\"\r\n                   [(ngModel)]=\"album.fechaLanzamiento\"\r\n                   #fechaLanzamiento=\"ngModel\"\r\n                   #nombreElm\r\n            >\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>URL de la Portada</label>\r\n            <input type=\"url\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Ingrese  la URL de la Portada\"\r\n                   name=\"URLPortada\"\r\n                   [(ngModel)]=\"album.URLPortada\"\r\n                   #URLPortada=\"ngModel\"\r\n                   #nombreElm\r\n            >\r\n          </div>\r\n\r\n\r\n          <button [disabled]=\"disabledButtons.NuevoAlbumFormSubmitButton||!NuevoAlbumForm.valid\" type=\"submit\"\r\n                  class=\"btn btn-block btn-success\">Actualizar\r\n          </button>\r\n          <button type=\"button\"\r\n                  class=\"btn btn-block btn-warning\"\r\n                  (click)=\"album.formularioCerrado = !album.formularioCerrado\"\r\n          >\r\n            Cancelar\r\n          </button>\r\n        </form>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\">\r\n  <!-- El logotipo y el icono que despliega el menú se agrupan\r\n       para mostrarlos mejor en los dispositivos móviles -->\r\n  <div class=\"navbar-header\">\r\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\r\n            data-target=\".navbar-ex1-collapse\">\r\n      <span class=\"sr-only\">Desplegar navegación</span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Artistas y Album</a>\r\n  </div>\r\n\r\n  <!-- Agrupar los enlaces de navegación, los formularios y cualquier\r\n       otro elemento que se pueda ocultar al minimizar la barra -->\r\n  <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"active\"><a [routerLink]=\"['/home']\">Inicio</a></li>\r\n      <li class=\"dropdown\">\r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n          Artista <b class=\"caret\"></b>\r\n        </a>\r\n        <ul class=\"dropdown-menu\">\r\n          <li><a [routerLink]=\"['/artista']\">Crear</a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" >\r\n  <h1 align=\"center\">{{title}}</h1>\r\n</div>\r\n<div class=\"col-sm-12\">\r\n  <div class=\"col-sm-3\"></div>\r\n  <div class=\"col-sm-6\">\r\n    <form class=\"animated bounceIn\" (ngSubmit)=\"crearArtista(NuevoArtistaForm)\" #NuevoArtistaForm=\"ngForm\">\r\n\r\n      <div class=\"form-group\">\r\n        <label>Nombre:</label>\r\n        <input required\r\n               minlength=\"3\"\r\n               type=\"text\"\r\n               class=\"form-control\" placeholder=\"Ingrese el nombre del artista\"\r\n               name=\"nombre\"\r\n               [(ngModel)]=\"nuevoArtista.nombre\"\r\n               #nombre=\"ngModel\"\r\n               #nombreElm\r\n        >\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Estilo</label>\r\n        <input required\r\n               minlength=\"3\"\r\n               type=\"text\"\r\n               class=\"form-control\" placeholder=\"Ingrese el estilo\"\r\n               name=\"estilo\"\r\n               [(ngModel)]=\"nuevoArtista.estilo\"\r\n               #nombre=\"ngModel\"\r\n               #nombreElm\r\n        >\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Pais de Residencia</label>\r\n        <input  required\r\n                minlength=\"3\"\r\n                type=\"text\"\r\n                class=\"form-control\" placeholder=\"Ingrese el pais de recidencia\"\r\n                name=\"paisResidencia\"\r\n                [(ngModel)]=\"nuevoArtista.paisResidencia\"\r\n                #nombre=\"ngModel\"\r\n                #nombreElm>\r\n      </div>\r\n\r\n      <button [disabled]=\"disabledButtons.NuevoArtistaFormSubmitButton||!NuevoArtistaForm.valid\" type=\"submit\"\r\n              class=\"btn btn-block btn-success\">Crear Artista\r\n      </button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-sm-3\"></div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6 animated flipInX\" *ngFor=\"let artista of artistas\">\r\n    <div class=\"text-center\">\r\n      <h3>{{artista.nombre}}</h3>\r\n      <p>ID: {{artista.id}}</p>\r\n      <p>Estilo: {{artista.estilo}}</p>\r\n      <p>Pais de Residencia: {{artista.paisResidencia}}</p>\r\n    </div>\r\n    <div class=\"row animated flipInY\" [hidden]=\"!artista.formularioCerrado\">\r\n      <div class=\"col-sm-5\">\r\n        <button class=\"btn btn-block btn-info\"\r\n                (click)=\"artista.formularioCerrado = !artista.formularioCerrado\"\r\n        >Actualizar</button>\r\n      </div>\r\n      <div class=\"col-sm-2\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <button class=\"btn btn-block btn-danger\" (click)=\"borrarArtista(artista.id)\">Borrar</button>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n        <a [routerLink]=\"[artista.id,'album']\">Ir a Album</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"div\" [hidden]=\"artista.formularioCerrado\">\r\n      <form action=\"\">\r\n        <form class=\"animated bounceIn\" (ngSubmit)=\"actualizarArtista(artista)\" #NuevoArtistaForm=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label>Nombre:</label>\r\n            <input required\r\n                   minlength=\"3\"\r\n                   type=\"text\"\r\n                   class=\"form-control\" placeholder=\"Ingrese el nombre del artista\"\r\n                   name=\"nombre\"\r\n                   [(ngModel)]=\"artista.nombre\"\r\n                   #nombre=\"ngModel\"\r\n                   #nombreElm\r\n            >\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Estilo</label>\r\n            <input required\r\n                   minlength=\"3\"\r\n                   type=\"text\"\r\n                   class=\"form-control\" placeholder=\"Ingrese el estilo\"  name=\"estilo\"\r\n                   [(ngModel)]=\"artista.estilo\"\r\n                   #nombre=\"ngModel\"\r\n                   #nombreElm\r\n            >\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Pais de Residencia</label>\r\n            <input  required\r\n                    minlength=\"3\"\r\n                    type=\"text\"\r\n                    class=\"form-control\" placeholder=\"Ingrese el pais de recidencia\"\r\n                    name=\"paisResidencia\"\r\n                    [(ngModel)]=\"artista.paisResidencia\"\r\n                    #nombre=\"ngModel\"\r\n                    #nombreElm>\r\n          </div>\r\n          <button [disabled]=\"disabledButtons.NuevoArtistaFormSubmitButton||!NuevoArtistaForm.valid\" type=\"submit\"\r\n                  class=\"btn btn-block btn-success\">Actualizar\r\n          </button>\r\n          <button type=\"button\"\r\n                  class=\"btn btn-block btn-warning\"\r\n                  (click)=\"artista.formularioCerrado = !artista.formularioCerrado\">Cancelar\r\n          </button>\r\n        </form>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" >\r\n  <h1 align=\"center\">BIENVENIDOS AL SISTEMA ARTISTA Y ALBUM</h1>\r\n</div>\r\n\r\n<div class=\"container\" style=\"background-color:black\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\"></div>\r\n    <div class=\"col-sm-8\" >\r\n      <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <!-- Indicators -->\r\n        <ol class=\"carousel-indicators\">\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n        </ol>\r\n\r\n        <!-- Wrapper for slides -->\r\n        <div class=\"carousel-inner\" role=\"listbox\">\r\n\r\n          <div class=\"item active\">\r\n            <img src=\"http://www.radioagricultura.cl/wp-content/uploads/2016/11/shakira.jpg\" alt=\"shakira\"  width=\"1200\">\r\n            <div class=\"carousel-caption\">\r\n              <h3>Shakira</h3>\r\n              <p>Artista de música Pop.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <img src=\"http://www.abc.es/media/estilo/2016/08/19/carlos-vives-khQH--620x349@abc.jpg\" alt=\"CarlosVives\" width=\"1200\">\r\n            <div class=\"carousel-caption\">\r\n              <h3>Carlos Vives</h3>\r\n              <p>Artista de Vallenato y Cumbia.</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item\">\r\n            <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7_MqQMB9ruH6waP2RW5Jg9qA-cfbk4WFTvLCnaZCCkJdvbuE\" alt=\"Alberto Plaza\" width=\"1200\" >\r\n            <div class=\"carousel-caption\">\r\n              <h3>Alberto Plaza</h3>\r\n              <p>Artista de música trova romántica.</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item\">\r\n            <img src=\"http://vistazo.com/sites/default/files/field/image/2016/07/15/mgid-uma-video-mtv.jpg\" alt=\"Jennifer Lopez\" width=\"1200\">\r\n            <div class=\"carousel-caption\">\r\n              <h3>Jennifer Lopez</h3>\r\n              <p>Artista de música Pop.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Left and right controls -->\r\n        <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-2\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);


/***/ })

},[536]);
//# sourceMappingURL=main.bundle.js.map