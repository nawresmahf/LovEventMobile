(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{MjGR:function(n,e,t){"use strict";t.r(e);var l=t("CcnG"),u=t("26FU"),o=t("N+K7"),i=function(){function n(n){this.httpService=n,this.feedData$=new u.a([])}return n.prototype.changeFeedData=function(n){this.feedData$.next(n)},n.prototype.getCurrentFeedData=function(){return this.feedData$.getValue()},n.prototype.updateFeedData=function(n){var e=[];e.push(n);var t=this.getCurrentFeedData(),l=e.concat(t);this.changeFeedData(l)},n.prototype.deleteFeedData=function(n){var e=this.getCurrentFeedData();e.splice(n,1);var t=[].concat(e);this.changeFeedData(t)},n.prototype.feedData=function(n){return this.httpService.post("feed",n)},n.prototype.feedDelete=function(n){return this.httpService.post("feedDelete",n)},n.prototype.feedUpdate=function(n){return this.httpService.post("feedUpdate",n)},n.ngInjectableDef=l.Nb({factory:function(){return new n(l.Ob(o.a))},token:n,providedIn:"root"}),n}(),r=t("lGQG"),a=t("2g2N"),s=function(){function n(n,e,t){this.auth=n,this.feedSerive=e,this.toastService=t,this.postData={user_id:"",token:""}}return n.prototype.ngOnInit=function(){var n=this;this.auth.userData$.subscribe(function(e){n.authUser=e,n.feedData()})},n.prototype.feedData=function(){var n=this;console.log(this.authUser),this.postData.user_id=this.authUser.user_id,this.postData.token=this.authUser.token,this.postData.user_id&&this.postData.token&&this.feedSerive.feedData(this.postData).subscribe(function(e){n.feedSerive.changeFeedData(e.feedData)},function(e){n.toastService.presentToast("Network Issue.")})},n}(),c=function(){return function(){}}(),d=t("pMnS"),h=t("oBZk"),f=t("ZZ/e"),b=t("gIcY"),p=function(){function n(n){this.feedService=n,this.postData={feed:"",feed_id:"",lastCreated:"",token:"",user_id:""}}return n.prototype.ngOnInit=function(){},n.prototype.feedUpdateAction=function(){var n=this;this.postData.feed.length>0&&(this.postData.lastCreated="",this.postData.user_id=this.loginUser.user_id,this.postData.token=this.loginUser.token,this.feedService.feedUpdate(this.postData).subscribe(function(e){n.postData.feed="",n.feedService.updateFeedData(e.feedData)}))},n}(),g=l.qb({encapsulation:0,styles:[[""]],data:{}});function D(n){return l.Kb(0,[(n()(),l.sb(0,0,null,null,8,"ion-item",[],null,null,null,h.B,h.i)),l.rb(1,49152,null,0,f.F,[l.h,l.k,l.z],null,null),(n()(),l.sb(2,0,null,0,6,"ion-textarea",[["placeholder","Enter more information here..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,e,t){var u=!0,o=n.component;return"ionBlur"===e&&(u=!1!==l.Db(n,3)._handleBlurEvent(t.target)&&u),"ionChange"===e&&(u=!1!==l.Db(n,3)._handleInputEvent(t.target)&&u),"ngModelChange"===e&&(u=!1!==(o.postData.feed=t)&&u),u},h.J,h.q)),l.rb(3,16384,null,0,f.Ib,[l.k],null,null),l.Fb(1024,null,b.c,function(n){return[n]},[f.Ib]),l.rb(5,671744,null,0,b.h,[[8,null],[8,null],[8,null],[6,b.c]],{model:[0,"model"]},{update:"ngModelChange"}),l.Fb(2048,null,b.d,null,[b.h]),l.rb(7,16384,null,0,b.e,[[4,b.d]],null,null),l.rb(8,49152,null,0,f.vb,[l.h,l.k,l.z],{placeholder:[0,"placeholder"]},null),(n()(),l.sb(9,0,null,null,4,"ion-item",[],null,null,null,h.B,h.i)),l.rb(10,49152,null,0,f.F,[l.h,l.k,l.z],null,null),(n()(),l.sb(11,0,null,0,2,"ion-button",[["color","mango"],["item-end",""]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.feedUpdateAction()&&l),l},h.u,h.b)),l.rb(12,49152,null,0,f.i,[l.h,l.k,l.z],{color:[0,"color"]},null),(n()(),l.Ib(-1,0,["Update"]))],function(n,e){n(e,5,0,e.component.postData.feed),n(e,8,0,"Enter more information here..."),n(e,12,0,"mango")},function(n,e){n(e,2,0,l.Db(e,7).ngClassUntouched,l.Db(e,7).ngClassTouched,l.Db(e,7).ngClassPristine,l.Db(e,7).ngClassDirty,l.Db(e,7).ngClassValid,l.Db(e,7).ngClassInvalid,l.Db(e,7).ngClassPending)})}var m=function(){function n(n,e){this.changeDetectorRef=n,this.ngZone=e}return n.prototype.transform=function(n){var e=this;this.removeTimer();var t=new Date(n),l=new Date,u=Math.round(Math.abs((l.getTime()-t.getTime())/1e3)),o=Number.isNaN(u)?1e3:1e3*this.getSecondsUntilUpdate(u);this.timer=this.ngZone.runOutsideAngular(function(){return"undefined"!=typeof window?window.setTimeout(function(){e.ngZone.run(function(){return e.changeDetectorRef.markForCheck()})},o):null});var i=Math.round(Math.abs(u/60)),r=Math.round(Math.abs(i/60)),a=Math.round(Math.abs(r/24)),s=Math.round(Math.abs(a/30.416)),c=Math.round(Math.abs(a/365));return Number.isNaN(u)?"":u<=45?"a few seconds ago":u<=90?"a minute ago":i<=45?i+" minutes ago":i<=90?"an hour ago":r<=22?r+" hours ago":r<=36?"a day ago":a<=25?a+" days ago":a<=45?"a month ago":a<=345?s+" months ago":a<=545?"a year ago":c+" years ago"},n.prototype.ngOnDestroy=function(){this.removeTimer()},n.prototype.removeTimer=function(){this.timer&&(window.clearTimeout(this.timer),this.timer=null)},n.prototype.getSecondsUntilUpdate=function(n){return n<60?2:n<3600?30:n<86400?300:3600},n}(),v=function(){function n(){}return n.prototype.ngOnInit=function(){this.newTime=this.converTime(this.created)},n.prototype.converTime=function(n){return new Date(1e3*n)},n}(),k=l.qb({encapsulation:0,styles:[[""]],data:{}});function y(n){return l.Kb(0,[(n()(),l.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),l.Ib(1,null,[" "," "])),l.Eb(131072,m,[l.h,l.z])],null,function(n,e){var t=e.component;n(e,1,0,l.Jb(e,1,0,l.Db(e,2).transform(t.newTime)))})}var C=t("Ip0R"),U=t("mrSG"),w=function(){function n(n){this.alertController=n}return n.prototype.presentAlertConfirm=function(n,e){return U.b(this,void 0,void 0,function(){var t,l;return U.e(this,function(u){switch(u.label){case 0:return[4,this.alertController.create({header:n,message:e,buttons:[{text:"Cancel",role:"cancel"},{text:"Okay",role:"okay"}]})];case 1:return[4,(l=u.sent()).present()];case 2:return u.sent(),[4,l.onDidDismiss().then(function(n){t=n})];case 3:return u.sent(),[2,t]}})})},n.ngInjectableDef=l.Nb({factory:function(){return new n(l.Ob(f.a))},token:n,providedIn:"root"}),n}(),B=function(){function n(n,e){this.feedSerivce=n,this.alertSerivce=e,this.postData={user_id:"",token:"",feed_id:""}}return n.prototype.ngOnInit=function(){var n=this;this.feedSerivce.feedData$.subscribe(function(e){n.feedData=e})},n.prototype.feedDeleteAction=function(n,e){var t=this;this.postData.user_id=this.loginUser.user_id,this.postData.token=this.loginUser.token,this.postData.feed_id=e,this.alertSerivce.presentAlertConfirm("Delete feed","Do you want to delete this feed?").then(function(e){"okay"===e.role&&t.feedSerivce.feedDelete(t.postData).subscribe(function(e){e.success&&t.feedSerivce.deleteFeedData(n)})})},n}(),M=l.qb({encapsulation:0,styles:[[".right[_ngcontent-%COMP%]{float:right}.right[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px}ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#333!important}"]],data:{}});function F(n){return l.Kb(0,[(n()(),l.sb(0,0,null,null,9,"ion-card",[],null,null,null,h.w,h.c)),l.rb(1,49152,null,0,f.k,[l.h,l.k,l.z],null,null),(n()(),l.sb(2,0,null,0,7,"ion-card-content",[],null,null,null,h.v,h.d)),l.rb(3,49152,null,0,f.l,[l.h,l.k,l.z],null,null),(n()(),l.sb(4,0,null,0,2,"button",[["class","right"]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.feedDeleteAction(n.context.index,n.context.$implicit.feed_id)&&l),l},null,null)),(n()(),l.sb(5,0,null,null,1,"ion-icon",[["name","trash"]],null,null,null,h.z,h.g)),l.rb(6,49152,null,0,f.A,[l.h,l.k,l.z],{name:[0,"name"]},null),(n()(),l.sb(7,0,null,0,0,"p",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),l.sb(8,0,null,0,1,"app-timeago",[],null,null,null,y,k)),l.rb(9,114688,null,0,v,[],{created:[0,"created"]},null)],function(n,e){n(e,6,0,"trash"),n(e,9,0,e.context.$implicit.created)},function(n,e){n(e,7,0,e.context.$implicit.feed)})}function S(n){return l.Kb(0,[(n()(),l.hb(16777216,null,null,1,null,F)),l.rb(1,278528,null,0,C.h,[l.N,l.K,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,1,0,e.component.feedData)},null)}var _=l.qb({encapsulation:0,styles:[[""]],data:{}});function I(n){return l.Kb(0,[(n()(),l.sb(0,0,null,null,6,"ion-header",[],null,null,null,h.y,h.f)),l.rb(1,49152,null,0,f.z,[l.h,l.k,l.z],null,null),(n()(),l.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,h.L,h.s)),l.rb(3,49152,null,0,f.zb,[l.h,l.k,l.z],null,null),(n()(),l.sb(4,0,null,0,2,"ion-title",[],null,null,null,h.K,h.r)),l.rb(5,49152,null,0,f.xb,[l.h,l.k,l.z],null,null),(n()(),l.Ib(-1,0,["Accueil"])),(n()(),l.sb(7,0,null,null,9,"ion-content",[],null,null,null,h.x,h.e)),l.rb(8,49152,null,0,f.s,[l.h,l.k,l.z],null,null),(n()(),l.sb(9,0,null,0,3,"ion-item",[],null,null,null,h.B,h.i)),l.rb(10,49152,null,0,f.F,[l.h,l.k,l.z],null,null),(n()(),l.sb(11,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),l.Ib(12,null,[" Bienvenue dans LovEvent ",""])),(n()(),l.sb(13,0,null,0,1,"app-feed-update",[],null,null,null,D,g)),l.rb(14,114688,null,0,p,[i],{loginUser:[0,"loginUser"]},null),(n()(),l.sb(15,0,null,0,1,"app-feed-card",[],null,null,null,S,M)),l.rb(16,114688,null,0,B,[i,w],{loginUser:[0,"loginUser"]},null)],function(n,e){var t=e.component;n(e,14,0,t.authUser),n(e,16,0,t.authUser)},function(n,e){var t=e.component;n(e,12,0,null==t.authUser?null:t.authUser.name)})}function z(n){return l.Kb(0,[(n()(),l.sb(0,0,null,null,1,"app-feed",[],null,null,null,I,_)),l.rb(1,114688,null,0,s,[r.a,i,a.a],null,null)],function(n,e){n(e,1,0)},null)}var O=l.ob("app-feed",s,z,{},{},[]),T=t("j1ZV"),x=t("ZYCi");t.d(e,"FeedPageModuleNgFactory",function(){return N});var N=l.pb(c,[],function(n){return l.Ab([l.Bb(512,l.j,l.ab,[[8,[d.a,O]],[3,l.j],l.x]),l.Bb(4608,C.j,C.i,[l.u,[2,C.p]]),l.Bb(4608,b.j,b.j,[]),l.Bb(4608,f.b,f.b,[l.z,l.g]),l.Bb(4608,f.Db,f.Db,[f.b,l.j,l.q]),l.Bb(4608,f.Gb,f.Gb,[f.b,l.j,l.q]),l.Bb(1073742336,C.b,C.b,[]),l.Bb(1073742336,b.i,b.i,[]),l.Bb(1073742336,b.b,b.b,[]),l.Bb(1073742336,f.Bb,f.Bb,[]),l.Bb(1073742336,T.a,T.a,[]),l.Bb(1073742336,x.p,x.p,[[2,x.u],[2,x.m]]),l.Bb(1073742336,c,c,[]),l.Bb(1024,x.k,function(){return[[{path:"",component:s}]]},[])])})}}]);