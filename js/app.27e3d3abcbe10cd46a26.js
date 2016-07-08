webpackJsonp([0],{0:function(t,e,i){"use strict";var n=i(1),o=i(111),r=i(328),a=i(349),s=i(640),c=i(402);n.enableProdMode(),o.bootstrap(a.AppComponent,[r.HTTP_PROVIDERS,s.APP_ROUTER_PROVIDERS,c.MRS_APP_PROVIDER])["catch"](function(t){return console.error(t)})},349:function(t,e,i){"use strict";var n=i(1),o=i(350),r=i(402);i(634);var a=function(){function t(t){this.storageService=t,this.title="Marvel reading stats",this.showNav=!1}return t.prototype.ngOnInit=function(){this.storageService.getStorage()},t.prototype.toggleNav=function(){this.showNav=!this.showNav},t=__decorate([n.Component({selector:"mrs-app",directives:o.ROUTER_DIRECTIVES.slice(),template:i(638),styles:[i(639)]}),__metadata("design:paramtypes",[r.StorageService])],t)}();e.AppComponent=a},402:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(403)),n(i(632)),n(i(633))},403:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(404)),n(i(406)),n(i(631))},404:function(t,e,i){"use strict";var n=i(1),o=i(328),r=i(405),a=function(){function t(t){this.http=t,this.apiUrl="https://gateway.marvel.com:80/v1/public/",this.loading=!1,this.config=r.CONFIG}return t.prototype.checkStatus=function(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e},t.prototype.parseJSON=function(t){return t.json()},t.prototype.getCommonParams=function(){var t=[];if(this.config.commonsParameters)for(var e in this.config.commonsParameters)this.config.commonsParameters.hasOwnProperty(e)&&t.push(e+"="+this.config.commonsParameters[e]);return t},t.prototype.getPagination=function(t){var e="";if(t>1){var i=t-1;i*=this.config.commonsParameters&&this.config.commonsParameters.limit?this.config.commonsParameters.limit:20,e="offset="+i}return e},t.prototype.getTypeList=function(t,e,i){var n=["apikey="+this.config.apiKey],o=this.apiUrl+t;if("undefined"!=typeof e&&null!==e){var r="";r+="series"===t?"titleStartsWith":"nameStartsWith",r+="="+e,n.push(r)}return n=n.concat(this.getCommonParams()),"undefined"!=typeof i&&null!==i&&n.push(this.getPagination(i)),o+="?"+n.join("&"),this.loading=!0,this.http.request(o).map(this.checkStatus).map(this.parseJSON)},t.prototype.getComicsFromType=function(t,e,i){var n=["apikey="+this.config.apiKey],o=this.apiUrl+t+"/"+e+"/comics";return n=n.concat(this.getCommonParams()),"undefined"!=typeof i&&null!==i&&n.push(this.getPagination(i)),o+="?"+n.join("&"),this.loading=!0,this.http.request(o).map(this.checkStatus).map(this.parseJSON)},t=__decorate([n.Injectable(),__metadata("design:paramtypes",[o.Http])],t)}();e.MarvelService=a},405:function(t,e){"use strict";e.CONFIG={apiKey:"dc427536218f323ad45f45c209060ead",commonsParameters:{limit:20}}},406:function(t,e,i){"use strict";var n=i(1),o=i(407),r=i(631),a=function(){function t(t){var e=this;this.storageService=t,this.userData=new o.BehaviorSubject(null),this.userHasCollection=!1,this.storageService.currentStorage.subscribe(function(t){e.userData.next(t),e.userHasCollection=t.comics.size>0})}return t.prototype.addComic=function(t){var e=this.userData.getValue();e.comics.set(t.id,t),this.storageService.updateStorage(e)},t.prototype.removeComic=function(t){var e=this.userData.getValue();e.comics["delete"](t.id),this.storageService.updateStorage(e)},t=__decorate([n.Injectable(),__metadata("design:paramtypes",[r.StorageService])],t)}();e.MRSService=a},631:function(t,e,i){"use strict";var n=i(1),o=i(407),r=function(){function t(){this.storageKey="marvel-reading-stats",this.currentStorage=new o.BehaviorSubject(null),this.defaultModel={comics:new Map}}return t.prototype.initStorage=function(){this.updateStorage(this.defaultModel)},t.prototype.getStorage=function(){var t=localStorage.getItem(this.storageKey);if(t){var e=JSON.parse(t);e.comics=new Map(e.comics),this.currentStorage.next(e)}else this.initStorage()},t.prototype.updateStorage=function(t){var e=Object.assign({},t);e.comics=Array.from(e.comics),localStorage.setItem(this.storageKey,JSON.stringify(e)),this.currentStorage.next(t)},t.prototype.deleteStorage=function(){localStorage.removeItem(this.storageKey),this.currentStorage.next(null)},t=__decorate([n.Injectable(),__metadata("design:paramtypes",[])],t)}();e.StorageService=r},632:function(t,e){"use strict";var i=function(){function t(){this.isInCollection=!1}return t}();e.Comic=i;var n=function(){function t(){}return t}();e.ComicsCollection=n},633:function(t,e,i){"use strict";var n=i(631),o=i(406),r=i(404);e.MRS_APP_PROVIDER=[{provide:n.StorageService,useClass:n.StorageService},{provide:o.MRSService,useClass:o.MRSService},{provide:r.MarvelService,useClass:r.MarvelService}]},634:function(t,e){},638:function(t,e){t.exports='<header>\n  <div class="app-title">\n    <h1>{{ title }}</h1>\n  </div>\n  <div [ngClass]="{\'opened\': showNav}" class="nav-toggle" attr.aria-expanded="{{ showNav }}" (click)="toggleNav()">\n    <span class="sr-only">Toogle navigation</span>\n    <div class="icon-bar"></div>\n    <div class="icon-bar"></div>\n    <div class="icon-bar"></div>\n  </div>\n  <nav [ngClass]="{\'opened\': showNav}" attr.aria-expanded="{{ showNav }}">\n    <a [routerLink]="[\'\']">Home</a>\n    <a [routerLink]="[\'library\']">Library</a>\n    <a [routerLink]="[\'collection\']">My collection</a>\n    <a [routerLink]="[\'stats\']">My stats</a>\n  </nav>\n</header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<footer>\n  <div class="bfc">\n    <p class="fl">\n      <a href="http://developer.marvel.com/" title="Marvel developer website">Data provided by Marvel</a>. © 2016 <a href="http://marvel.com/" title="Marvel website">Marvel</a>\n    </p>\n    <p class="fr">\n      <a href="https://github.com/SBats/marvel-reading-stats-frontend/" title="Marvel Reading Stats github repository">Open-source application</a> by <a href="http://simonbats.com/" title="Simon Bats website">Simon Bats</a>\n    </p>\n  </div>\n</footer>\n'},639:function(t,e){t.exports="header{background-color:black;color:white;padding:2rem 8vw}header nav{display:inline-block;vertical-align:middle}@media (max-width: 1023px){header nav{display:block;overflow:hidden;max-height:0;margin:0;transition:max-height 0.3s ease-out, margin 0.3s ease-out}header nav.opened{margin-top:2rem;max-height:50vh}}header a{display:block;padding:1em 2em;color:#aaa;text-transform:uppercase;text-decoration:none;transition:color 0.2s ease-out}header a:hover,header a:focus{color:white}header a.active{color:#f0141e}@media (min-width: 769px){header a{display:inline-block}}.nav-toggle{display:inline-block;padding:1rem;vertical-align:middle;cursor:pointer;float:right}@media (min-width: 1024px){.nav-toggle{display:none}}.nav-toggle.opened .icon-bar:nth-child(2){transform:rotateZ(-45deg) translate(-5px, 5px)}.nav-toggle.opened .icon-bar:nth-child(3){transform:rotateZ(45deg)}.nav-toggle.opened .icon-bar:nth-child(4){opacity:0;transform:translateY(2rem)}.icon-bar{width:2rem;height:2px;background:white;border-radius:1px;transition:transform 0.2s ease-out, opacity 0.2s ease-out}.icon-bar+.icon-bar{margin-top:0.5rem}.app-title{display:inline-block;background:#f0141e;padding:1rem;vertical-align:middle;overflow:hidden}.app-title h1{margin:0;letter-spacing:-2px;text-transform:uppercase;transform:scale(1, 2);font-size:2rem;word-spacing:6px;line-height:2rem}main{min-height:80vh}footer{padding:2rem;background:black;color:white;font-weight:lighter}footer a{color:white;text-decoration:none}footer a:hover,footer a:focus{text-decoration:underline}footer p{display:inline-block;margin:0 1rem}\n"},640:function(t,e,i){"use strict";var n=i(350),o=i(641),r=i(645),a=i(674),s=i(679);e.routes=[{path:"",component:o.HomeComponent}].concat(r.libraryRoutes,a.collectionRoutes,s.statsRoutes),e.APP_ROUTER_PROVIDERS=[n.provideRouter(e.routes)]},641:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(642))},642:function(t,e,i){"use strict";var n=i(1),o=i(350),r=i(402),a=function(){function t(t){this.mrsService=t,this.userHasCollection=!1}return t.prototype.ngOnInit=function(){this.userHasCollection=this.mrsService.userHasCollection},t=__decorate([n.Component({selector:"mrs-home",template:i(643),styles:[i(644)],directives:o.ROUTER_DIRECTIVES.slice()}),__metadata("design:paramtypes",[r.MRSService])],t)}();e.HomeComponent=a},643:function(t,e){t.exports='<h2 class="home-title">Collect and share stats about your readings of the marvelous Marvel universe</h2>\n<div *ngIf="!userHasCollection" class="greetings grid-2-small-1">\n  <div class="greetings-title">\n    <h3>Welcome&nbsp;!</h3>\n  </div>\n  <div class="greetings-links">\n    <a href [routerLink]="[\'/library\']">\n      Start by adding comics to your collection\n    </a>\n  </div>\n</div>\n<div *ngIf="userHasCollection" class="greetings grid-2-small-1">\n  <div class="greetings-title">\n    <h3>Welcome back&nbsp;!</h3>\n  </div>\n  <div class="greetings-links">\n    <a href [routerLink]="[\'/collection\']">\n      Browse your collection\n    </a>\n    <div>Or</div>\n    <a href [routerLink]="[\'/library\']">\n      Keep filling it\n    </a>\n  </div>\n</div>\n'},644:function(t,e){t.exports=':host{background:url("/marvel-reading-stats-frontend/img/home-bg.gif") center center no-repeat;background-size:cover;min-height:80vh;display:block;width:100%;padding:4rem 0}.home-title{font-family:inherit;text-align:center;width:60vw;margin:auto;padding:5rem 0;color:white}.greetings{margin:0;overflow:hidden;text-align:center}.greetings-title{color:white;position:relative;padding:3rem;margin:auto}@media (min-width: 769px){.greetings-title{transform:skew(-11deg, 0)}}.greetings-title h3{display:inline-block;margin-bottom:0;vertical-align:middle}.greetings-links{margin:auto;font-size:2rem;padding:0 3rem;line-height:5rem;text-transform:uppercase;font-weight:bolder;color:#f0141e}@media (min-width: 769px){.greetings-links{transform:skew(-11deg, 0)}}.greetings-links a{display:block;color:white;text-decoration:none;background:#f0141e url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//+/JhAzIGMUDhRrYgigq4QbgyEAwgChmkuDn1MilAAAAABJRU5ErkJggg==") center center repeat;padding:2rem 4rem}.greetings-links a:hover,.greetings-links a:focus{background-color:#c40d15}\n'},645:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(646)),n(i(649)),n(i(650))},646:function(t,e,i){"use strict";var n=i(1),o=i(350),r=function(){function t(){}return t=__decorate([n.Component({selector:"mrs-library",template:i(647),styles:[i(648)],directives:[o.ROUTER_DIRECTIVES]}),__metadata("design:paramtypes",[])],t)}();e.LibraryComponent=r},647:function(t,e){t.exports="<router-outlet></router-outlet>\n"},648:function(t,e){t.exports=""},649:function(t,e,i){"use strict";var n=i(645),o=i(650),r=i(654),a=i(666);e.libraryRoutes=[{path:"library",component:n.LibraryComponent,children:[{path:":type",component:r.LibraryListComponent},{path:":type/:id",component:a.LibraryDetailComponent},{path:"",component:o.LibraryTypesComponent}]}]},650:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(651))},651:function(t,e,i){"use strict";var n=i(1),o=i(350),r=function(){function t(){}return t=__decorate([n.Component({selector:"mrs-library-types",template:i(652),styles:[i(653)],directives:[o.ROUTER_DIRECTIVES]}),__metadata("design:paramtypes",[])],t)}();e.LibraryTypesComponent=r},652:function(t,e){t.exports='<h2 class="page-title">Library</h2>\n<p class="chose">Browse by</p>\n<ul class="types-menu">\n  <li class="types-menu-item">\n    <a [routerLink]="[\'series\']">\n      <span>Series</span>\n    </a>\n  </li>\n  <!-- <li class="types-menu-item">\n    <a [routerLink]="[\'creators\']">\n      <span>Creators</span>\n    </a>\n  </li> -->\n  <li class="types-menu-item">\n    <a [routerLink]="[\'events\']">\n      <span>Events</span>\n    </a>\n  </li>\n</ul>\n'},653:function(t,e){t.exports=".chose{text-align:center;font-size:2rem}.types-menu{max-width:1024px;list-style:none;padding:0;margin:auto;text-align:center}.types-menu-item{display:inline-block;margin:auto 2rem}.types-menu-item a{display:block;margin:2rem auto;width:20rem;height:14rem;line-height:11rem;padding:1rem;background:#333;text-decoration:none;color:white;font-size:2rem}.types-menu-item a:hover,.types-menu-item a:focus{background:#404040}.types-menu-item span{display:inline-block;line-height:normal;vertical-align:bottom}\n"},654:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(655))},655:function(t,e,i){"use strict";var n=i(1),o=i(350),r=i(402),a=i(656),s=i(660),c=function(){function t(t,e,i){this.marvelService=t,this.route=e,this.router=i,this.elements=[],this.loading=!0,this.currentPage=1,this.pageQuantity=null,this.queryFiltersList=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],this.startWithQuery=null,this.subscribers=[!1]}return t.prototype.ngOnInit=function(){var t=this;this.subscribers.push(this.route.params.subscribe(function(e){t.libraryType=e.type,t.loadList()})),this.subscribers.push(this.router.routerState.queryParams.subscribe(function(e){t.startWithQuery=e.startwith||null,t.currentPage=e.page||1,t.libraryType&&t.loadList()}))},t.prototype.ngOnDestroy=function(){this.subscribers.map(function(t){return t.unsubscribe()})},t.prototype.setPageQuantity=function(t,e){this.pageQuantity=Math.ceil(e/t)},t.prototype.selectLetter=function(t,e){t.preventDefault(),this.startWithQuery=e,this.updateQueries()},t.prototype.selectPage=function(t){this.currentPage=t,this.updateQueries()},t.prototype.updateQueries=function(){var t={};this.startWithQuery&&(t.startwith=this.startWithQuery),this.currentPage&&(t.page=this.currentPage),this.router.navigate(["library",this.libraryType],{queryParams:t})},t.prototype.loadList=function(){var t=this;this.loading=!0,this.subscribers[0]&&this.subscribers[0].unsubscribe&&this.subscribers[0].unsubscribe(),this.subscribers[0]=this.marvelService.getTypeList(this.libraryType,this.startWithQuery,this.currentPage).subscribe(function(e){t.elements=e.data.results,t.setPageQuantity(e.data.limit,e.data.total),t.loading=!1})},t.prototype.navigateToDetail=function(t){this.router.navigate(["/library",this.libraryType,t.id],{queryParams:null})},t=__decorate([n.Component({selector:"mrs-library-list",template:i(664),styles:[i(665)],directives:[o.ROUTER_DIRECTIVES,a.ElementsListComponent,s.PaginatorComponent]}),__metadata("design:paramtypes",[r.MarvelService,o.ActivatedRoute,o.Router])],t)}();e.LibraryListComponent=c},656:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(657))},657:function(t,e,i){"use strict";var n=i(1),o=i(350),r=function(){function t(){this.selectAction=new n.EventEmitter}return t.prototype.select=function(t,e){t.preventDefault(),this.selectAction.emit(e)},__decorate([n.Input(),__metadata("design:type",Array)],t.prototype,"list",void 0),__decorate([n.Output(),__metadata("design:type",n.EventEmitter)],t.prototype,"selectAction",void 0),t=__decorate([n.Component({selector:"mrs-elements-list",template:i(658),styles:[i(659)],directives:[o.ROUTER_DIRECTIVES]}),__metadata("design:paramtypes",[])],t)}();e.ElementsListComponent=r},658:function(t,e){t.exports='<ul class="elements-list">\n  <li class="elements-list-item" *ngFor="let item of list">\n      <a href (click)="select($event, item)">\n        <span class="title">{{ item.title }}</span>\n      </a>\n  </li>\n</ul>\n'},659:function(t,e){t.exports=":host{display:block;max-width:1024px;margin:auto;padding:4rem}.elements-list{list-style:none;padding:0}.elements-list-item a{display:block;border-bottom:1px solid #333;padding:1rem 2rem;cursor:pointer;background:transparent;text-decoration:none}.elements-list-item a:hover,.elements-list-item a:focus{background:#eaeaea}.elements-list-item a:active{background:#ddd}\n"},660:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(661))},661:function(t,e,i){"use strict";var n=i(1),o=function(){function t(){this.pageQuantity=0,this.currentPage=0,this.selectPage=new n.EventEmitter}return t.prototype.ngOnInit=function(){this.setPageList(this.pageQuantity)},t.prototype.ngOnChanges=function(t){t.pageQuantity&&this.setPageList(t.pageQuantity.currentValue)},t.prototype.setPageList=function(t){t&&t>1?this.pageList=new Array(t):this.pageList=null},t.prototype.select=function(t,e){t.preventDefault(),this.selectPage.emit(e)},__decorate([n.Input(),__metadata("design:type",Number)],t.prototype,"pageQuantity",void 0),__decorate([n.Input(),__metadata("design:type",Number)],t.prototype,"currentPage",void 0),__decorate([n.Output(),__metadata("design:type",n.EventEmitter)],t.prototype,"selectPage",void 0),t=__decorate([n.Component({selector:"mrs-paginator",template:i(662),styles:[i(663)]}),__metadata("design:paramtypes",[])],t)}();e.PaginatorComponent=o},662:function(t,e){t.exports='<ul class="paginator">\n  <li class="paginator-item" *ngFor="let element of pageList; let index = index">\n    <a *ngIf="(index + 1) != currentPage" href (click)="select($event, index+1)">\n      {{ index + 1 }}\n    </a>\n    <span *ngIf="(index + 1) == currentPage" class="active">\n      {{ index + 1 }}\n    </span>\n  </li>\n</ul>\n'},663:function(t,e){t.exports=':host{max-width:1024px;padding:0 4rem;display:block;margin:2rem auto}.paginator{list-style:none;overflow-x:auto;overflow-y:hidden;white-space:nowrap;margin:0 auto;padding:1rem;text-align:center}.paginator-item{display:inline-block}.paginator-item a,.paginator-item span{display:inline-block;padding:0.6rem}.paginator-item a{text-decoration:none}.paginator-item a:hover,.paginator-item a:focus{text-decoration:underline}.paginator-item .active{color:#f0141e}.paginator-item:not(:last-child)::after{content:"-";display:inline-block;margin:0 0.4rem}\n'},664:function(t,e){t.exports='<h2 class="page-title">{{ libraryType }}</h2>\n<div class="letter-filter">\n  <ul>\n    <li *ngFor="let filter of queryFiltersList">\n      <a *ngIf="startWithQuery !== filter" href (click)="selectLetter($event, filter)">{{ filter }}</a>\n      <span class="active" *ngIf="startWithQuery === filter">{{ filter }}</span>\n    </li>\n  </ul>\n</div>\n<div *ngIf="loading" class="mrs-loader">Loading...</div>\n<div *ngIf="!loading">\n  <mrs-elements-list [list]="elements" (selectAction)="navigateToDetail($event)">\n  </mrs-elements-list>\n  <mrs-paginator *ngIf="pageQuantity > 1" [pageQuantity]="pageQuantity" [currentPage]="currentPage" (selectPage)="selectPage($event)">\n  </mrs-paginator>\n</div>\n'},665:function(t,e){t.exports='h2{text-transform:capitalize}.letter-filter{text-transform:uppercase}.letter-filter ul{list-style:none;padding:0 4rem;text-align:center}.letter-filter li{display:inline-block;margin-bottom:2rem}.letter-filter li:not(:last-child)::after{content:"-";display:inline-block;margin:auto 1rem}.letter-filter .active{color:#f0141e}.letter-filter a{text-decoration:none}.letter-filter a:hover,.letter-filter a:focus{text-decoration:underline}mrs-elements-list+mrs-paginator{margin-top:-3rem}\n'},666:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(667))},667:function(t,e,i){"use strict";var n=i(1),o=i(350),r=i(402),a=i(668),s=i(660),c=function(){function t(t,e,i,n){this.marvelService=t,this.route=e,this.router=i,this.mrsService=n,this.elements=[],this.loading=!0,this.currentPage=1,this.pageQuantity=null,this.subscribers=[]}return t.prototype.ngOnInit=function(){var t=this;this.subscribers.push(this.route.params.subscribe(function(e){t.libraryId=e.id,t.libraryType=e.type,t.libraryType&&t.libraryId&&t.loadList()})),this.subscribers.push(this.router.routerState.queryParams.subscribe(function(e){t.currentPage=e.page||1,t.libraryType&&t.libraryId&&t.loadList()})),this.subscribers.push(this.mrsService.userData.subscribe(function(e){t.userData=e,t.checkCollectionElements(t.elements,t.userData)}))},t.prototype.ngOnDestroy=function(){this.subscribers.map(function(t){return t.unsubscribe()})},t.prototype.setPageQuantity=function(t,e){this.pageQuantity=Math.ceil(e/t)},t.prototype.selectPage=function(t){this.currentPage=t,this.updateQueries()},t.prototype.updateQueries=function(){var t={};this.currentPage&&(t.page=this.currentPage),this.router.navigate(["."],{queryParams:t})},t.prototype.loadList=function(){var t=this;this.loading=!0,this.subscribers[0]&&this.subscribers[0].unsubscribe&&this.subscribers[0].unsubscribe(),this.subscribers[0]=this.marvelService.getComicsFromType(this.libraryType,this.libraryId,this.currentPage).subscribe(function(e){t.elements=e.data.results,t.checkCollectionElements(t.elements,t.userData),t.setPageQuantity(e.data.limit,e.data.total),t.loading=!1})},t.prototype.checkCollectionElements=function(t,e){this.elements.map(function(t){return t.isInCollection=e.comics.has(t.id)})},t.prototype.addComicToCollection=function(t){this.mrsService.addComic(t)},t.prototype.removeComicFromCollection=function(t){this.mrsService.removeComic(t)},t=__decorate([n.Component({selector:"mrs-library-detail",template:i(672),styles:[i(673)],directives:[a.ComicsListComponent,s.PaginatorComponent]}),__metadata("design:paramtypes",[r.MarvelService,o.ActivatedRoute,o.Router,r.MRSService])],t)}();e.LibraryDetailComponent=c},668:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(669))},669:function(t,e,i){"use strict";var n=i(1),o=function(){function t(){this.addAction=new n.EventEmitter,this.removeAction=new n.EventEmitter}return t.prototype.add=function(t){this.addAction.emit(t)},t.prototype.remove=function(t){this.removeAction.emit(t)},__decorate([n.Input(),__metadata("design:type",Array)],t.prototype,"list",void 0),__decorate([n.Output(),__metadata("design:type",n.EventEmitter)],t.prototype,"addAction",void 0),__decorate([n.Output(),__metadata("design:type",n.EventEmitter)],t.prototype,"removeAction",void 0),t=__decorate([n.Component({selector:"mrs-comics-list",template:i(670),styles:[i(671)]}),__metadata("design:paramtypes",[])],t)}();e.ComicsListComponent=o},670:function(t,e){t.exports='<ul class="grid-4">\n  <li *ngFor="let item of list" class="comic" [ngClass]="{\'read\': item.isInCollection}">\n    <div class="comic-cover-container">\n      <div class="comic-cover">\n        <img [src]="item.thumbnail.path + \'/portrait_uncanny.\' + item.thumbnail.extension" [alt]="item.title + \' cover\'"/>\n      </div>\n      <div class="comic-actions">\n        <button\n        (click)="add(item)"\n        *ngIf="!item.isInCollection"\n        class="comic-actions-item">\n          <div class="icon"><img src="img/plus.svg" alt="plus icon"/></div>\n          <div class="label">Add to your collection</div>\n        </button>\n        <button\n        (click)="remove(item)"\n        *ngIf="item.isInCollection"\n        class="comic-actions-item">\n          <div class="icon"><img src="img/minus.svg" alt="minus icon"/></div>\n          <div class="label">Remove from your collection</div>\n        </button>\n      </div>\n      <div class="comic-links">\n        <a class="comic-links-item" [href]="item.urls[0].url" target="_blank">\n          <div class="icon">\n            <img src="img/link.svg" alt="link icon"/>\n          </div>\n          <div class="label">This comic on marvel.com</div>\n        </a>\n      </div>\n    </div>\n    <div class="comic-title">{{ item.title }}</div>\n  </li>\n</ul>\n'},671:function(t,e){t.exports='ul{list-style:none;padding:4rem;max-width:1024px;margin:auto}li{display:inline-block;margin-left:auto;margin-right:auto}.comic{margin-bottom:4rem}.comic.read .comic-cover-container::before{opacity:0}.comic.read .comic-actions{opacity:0.8;z-index:1}.comic-cover-container{position:relative;margin-bottom:1rem;border:1px solid rgba(0,0,0,0.4)}.comic-cover-container::before{content:"";position:absolute;width:100%;height:100%;top:0;left:0;background:black;opacity:0.2;transition:opacity 0.2s ease-out}@media (min-width: 769px){.comic-cover-container::before{opacity:0.4}.comic-cover-container:hover::before{opacity:0.2}}.comic-cover{background:#ddd;width:100%;height:0;overflow:hidden;padding-bottom:150%}.comic-cover>img{display:block}.comic-actions,.comic-links{position:relative}@media (min-width: 769px){.comic-actions,.comic-links{position:absolute;top:0;right:0;width:6rem;height:6rem}}.comic-actions-item,.comic-links-item{display:block;cursor:pointer;border:none;font-size:1.4rem;padding:0.6rem;color:white;width:100%;background:transparent;transition:background 0.15s ease-out}@media (max-width: 767px){.comic-actions-item,.comic-links-item{background:#333}}@media (max-width: 767px){.comic-actions-item:hover,.comic-actions-item:focus,.comic-links-item:hover,.comic-links-item:focus{background:black}.comic-actions-item:hover .icon,.comic-actions-item:focus .icon,.comic-links-item:hover .icon,.comic-links-item:focus .icon{background:black}}@media (min-width: 769px){.comic-actions-item:hover .label,.comic-actions-item:focus .label,.comic-links-item:hover .label,.comic-links-item:focus .label{left:100%;opacity:1;pointer-events:normal;transition:left 0.2s ease-out 0.4s, opacity 0.2s ease-out 0.5s}}.comic-actions-item .label,.comic-links-item .label{font-size:1.6rem;display:block;padding:1rem;text-align:center;width:100%;text-transform:uppercase}@media (min-width: 769px){.comic-actions-item .label,.comic-links-item .label{position:absolute;width:14rem;left:-8rem;top:0;background:black;z-index:3;opacity:0;pointer-events:none;transition:left 0.2s ease-in}}.comic-actions-item .icon,.comic-links-item .icon{height:5rem;width:5rem;padding:1rem;position:relative}@media (max-width: 767px){.comic-actions-item .icon,.comic-links-item .icon{position:absolute;top:0;left:50%;background:#333;transition:background 0.15s ease-out;transform:translate(-50%, -60%);border-radius:50%}}@media (min-width: 769px){.comic-actions-item .icon,.comic-links-item .icon{z-index:1;text-align:right;height:4rem;width:auto;padding:0.6rem;margin:-0.6rem}.comic-actions-item .icon::before,.comic-links-item .icon::before{content:"";display:block;position:absolute;top:0;right:0;width:0;height:0;z-index:-1;transition:border 0.2s ease-out}}.comic-actions-item .icon img,.comic-links-item .icon img{max-height:100%;max-width:100%}@media (max-width: 767px){.comic-actions-item{background:#f0141e}}@media (max-width: 767px){.comic-actions-item:hover,.comic-actions-item:focus{background:#c40d15}.comic-actions-item:hover .icon,.comic-actions-item:focus .icon{background:#c40d15}}@media (min-width: 769px){.comic-actions-item:hover .icon::before,.comic-actions-item:focus .icon::before{border-top-color:#dc0e17}}@media (min-width: 769px){.comic-actions-item .label{background:#c40d15}}@media (max-width: 767px){.comic-actions-item .icon{background:#f0141e}}@media (min-width: 769px){.comic-actions-item .icon::before{border-top:6rem solid #f0141e;border-left:7rem solid transparent}}@media (min-width: 769px){.comic-links{top:auto;bottom:0}}.comic-links-item{text-decoration:none}@media (min-width: 769px){.comic-links-item{position:absolute;bottom:0}}@media (min-width: 769px){.comic-links-item:hover .icon::before,.comic-links-item:focus .icon::before{border-bottom-color:black}}@media (max-width: 767px){.comic-links-item .icon{display:none}}@media (min-width: 769px){.comic-links-item .icon::before{top:auto;bottom:0;border-bottom:6rem solid #333;border-left:7rem solid transparent}}@media (min-width: 769px){.comic-links-item .label{top:auto;bottom:0}}.comic-title{font-size:1.3em}\n'},672:function(t,e){t.exports='<h2 class="page-title">Series name</h2>\n<div *ngIf="loading" class="mrs-loader">Loading...</div>\n<div *ngIf="!loading">\n  <mrs-comics-list\n    [list]="elements"\n    (addAction)="addComicToCollection($event)"\n    (removeAction)="removeComicFromCollection($event)">\n  </mrs-comics-list>\n  <mrs-paginator *ngIf="pageQuantity > 1" [pageQuantity]="pageQuantity" [currentPage]="currentPage" (selectPage)="selectPage($event)">\n  </mrs-paginator>\n</div>\n'},673:function(t,e){t.exports="mrs-comics-list+mrs-paginator{margin-top:-4rem}\n"},674:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(675)),n(i(678))},675:function(t,e,i){"use strict";var n=i(1),o=i(350),r=i(402),a=i(668),s=function(){function t(t){this.mrsService=t,this.userHasCollection=!1,this.collection=[],this.subscribers=[]}return t.prototype.ngOnInit=function(){var t=this;this.subscribers.push(this.mrsService.userData.subscribe(function(e){t.collection=Array.from(e.comics.values()),t.collection.map(function(t){return t.isInCollection=!0})})),this.userHasCollection=this.mrsService.userHasCollection},t.prototype.ngOnDestroy=function(){this.subscribers.map(function(t){return t.unsubscribe()})},t.prototype.addComicToCollection=function(t){this.mrsService.addComic(t)},t.prototype.removeComicFromCollection=function(t){this.mrsService.removeComic(t)},t=__decorate([n.Component({selector:"mrs-collection",template:i(676),styles:[i(677)],directives:o.ROUTER_DIRECTIVES.concat([a.ComicsListComponent])}),__metadata("design:paramtypes",[r.MRSService])],t)}();e.CollectionComponent=s},676:function(t,e){t.exports='<h2 class="page-title">My Collection</h2>\n<div *ngIf="!userHasCollection">\n  <h3>Your collection is empty :(</h3>\n  <a href [routerLink]="[\'/library\']">Add comics to it !</a>\n</div>\n<div *ngIf="userHasCollection">\n  <mrs-comics-list\n    [list]="collection"\n    (addAction)="addComicToCollection($event)"\n    (removeAction)="removeComicFromCollection($event)">\n  </mrs-comics-list>\n</div>\n'},677:648,678:function(t,e,i){"use strict";var n=i(674);e.collectionRoutes=[{path:"collection",component:n.CollectionComponent}]},679:function(t,e,i){"use strict";function n(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}n(i(680)),n(i(684))},680:function(t,e,i){"use strict";var n=i(1),o=i(350),r=i(402),a=i(681),s=function(){function t(t){this.mrsService=t,this.userHasCollection=!1,this.collection=[],this.subscribers=[]}return t.prototype.ngOnInit=function(){var t=this;this.subscribers.push(this.mrsService.userData.subscribe(function(e){t.collection=Array.from(e.comics.values()),t.collection.map(function(t){return t.isInCollection=!0})})),this.userHasCollection=this.mrsService.userHasCollection},t.prototype.ngOnDestroy=function(){this.subscribers.map(function(t){return t.unsubscribe()})},t=__decorate([n.Component({selector:"mrs-stats",template:i(682),styles:[i(683)],directives:o.ROUTER_DIRECTIVES.slice(),pipes:[a.TimeSpentPipe]}),__metadata("design:paramtypes",[r.MRSService])],t)}();e.StatsComponent=s},681:function(t,e,i){"use strict";var n=i(1),o=function(){function t(){this.timePerComic=20}return t.prototype.transform=function(t){return(t*this.timePerComic/60).toFixed(2)},t=__decorate([n.Pipe({name:"mrsTimeSpentPipe"}),__metadata("design:paramtypes",[])],t)}();e.TimeSpentPipe=o},682:function(t,e){t.exports='<h2 class="page-title">My Stats</h2>\n<div *ngIf="!userHasCollection">\n  <h3>Your collection is empty :(</h3>\n  <a href [routerLink]="[\'/library\']">Add comics to it !</a>\n</div>\n<div *ngIf="userHasCollection" class="stats-grid">\n  <div class="stats-widget read-stat">\n    <div class="donut-chart read-donut">\n      <div class="slice one"></div>\n      <div class="slice two"></div>\n      <div class="chart-center">\n        <span>{{ collection.length }}</span>\n      </div>\n    </div>\n    <h3>Comics read</h3>\n  </div>\n\n  <div class="stats-widget time-stat">\n    <div class="donut-chart time-donut">\n      <div class="slice one"></div>\n      <div class="slice two"></div>\n      <div class="chart-center">\n        <span>{{ collection.length | mrsTimeSpentPipe }} hours</span>\n      </div>\n    </div>\n    <h3>Times spent</h3>\n  </div>\n</div>\n'},683:function(t,e){t.exports=".donut-chart{position:relative;border-radius:50%;overflow:hidden}.donut-chart .slice{position:absolute;top:0;left:0;width:100%;height:100%}.donut-chart .chart-center{position:absolute;border-radius:50%}.donut-chart .chart-center span{display:inline-block;text-align:center;width:100%}.stats-grid{max-width:1024px;margin:auto}.stats-widget{font-weight:1.5rem;padding:4rem;display:inline-block}.stats-widget h3{margin-bottom:0;text-align:center}.donut-chart.read-donut{width:150px;height:150px;background:transparent}.donut-chart.read-donut .slice.one{clip:rect(0 150px 75px 0);transform:rotate(90deg);background:#f0141e}.donut-chart.read-donut .slice.two{clip:rect(0 75px 150px 0);transform:rotate(205.2deg);background:#f0141e}.donut-chart.read-donut .chart-center{top:10px;left:10px;width:130px;height:130px;background:#fff;line-height:116px}.donut-chart.read-donut .chart-center span{font-size:40px;color:#000;line-height:4rem;vertical-align:middle}.donut-chart.time-donut{width:150px;height:150px;background:transparent}.donut-chart.time-donut .slice.one{clip:rect(0 150px 75px 0);transform:rotate(90deg);background:#f0141e}.donut-chart.time-donut .slice.two{clip:rect(0 75px 150px 0);transform:rotate(252deg);background:#f0141e}.donut-chart.time-donut .chart-center{top:10px;left:10px;width:130px;height:130px;background:#fff;line-height:116px}.donut-chart.time-donut .chart-center span{font-size:40px;color:#000;line-height:4rem;vertical-align:middle}\n";
},684:function(t,e,i){"use strict";var n=i(679);e.statsRoutes=[{path:"stats",component:n.StatsComponent}]}});
//# sourceMappingURL=app.27e3d3abcbe10cd46a26.js.map