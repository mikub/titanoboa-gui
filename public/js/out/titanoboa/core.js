// Compiled by ClojureScript 1.10.238 {}
goog.provide('titanoboa.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('titanoboa.api');
goog.require('titanoboa.designer');
goog.require('titanoboa.systems');
goog.require('titanoboa.jobs');
goog.require('ajax.core');
goog.require('ajax.edn');
cljs.core.enable_console_print_BANG_.call(null);
titanoboa.core.load_data = (function titanoboa$core$load_data(){
titanoboa.api.check_cluster_enabled.call(null);

titanoboa.designer.load_def_list.call(null);

titanoboa.systems.load_systems.call(null);

titanoboa.systems.load_cluster.call(null);

return titanoboa.systems.load_dependencies.call(null);
});
if(typeof titanoboa.core.user_data !== 'undefined'){
} else {
titanoboa.core.user_data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof titanoboa.core.main_tab_selected !== 'undefined'){
} else {
titanoboa.core.main_tab_selected = reagent.core.atom.call(null,null);
}
titanoboa.core.modal_login = (function titanoboa$core$modal_login(){
var user = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (user){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"login-modal",new cljs.core.Keyword(null,"key","key",-1516042587),"login-modal",new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"login-modal",new cljs.core.Keyword(null,"data-backdrop","data-backdrop",-509065649),"static"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"login-modal-dialog",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),"15%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"login-modal-content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/logo_black.svg",new cljs.core.Keyword(null,"height","height",1025178622),(172),new cljs.core.Keyword(null,"title","title",636505583),"\"Why should anyone be frightened by a hat?\"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Orbitron",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700"], null)], null),"Please log in:"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.editor-field","div.input-group.editor-field",-606889894),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon editor-label"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (user){
return (function (p1__9692_SHARP_){
return cljs.core.swap_BANG_.call(null,user,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__9692_SHARP_.target.value);
});})(user))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),""], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.editor-field","div.input-group.editor-field",-606889894),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon editor-label"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (user){
return (function (p1__9693_SHARP_){
return cljs.core.swap_BANG_.call(null,user,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__9693_SHARP_.target.value);
});})(user))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),""], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user){
return (function (e){
titanoboa.api.auth.call(null,cljs.core.deref.call(null,user),((function (user){
return (function (r){
titanoboa.api.get_user.call(null,((function (user){
return (function (p1__9694_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.core.user_data,p1__9694_SHARP_);
});})(user))
);

titanoboa.core.load_data.call(null);

return cljs.core.reset_BANG_.call(null,titanoboa.core.main_tab_selected,new cljs.core.Keyword(null,"design","design",1241338903));
});})(user))
);

cljs.core.swap_BANG_.call(null,user,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),null);

return titanoboa.designer.jquery.call(null,"#login-modal").modal("hide");
});})(user))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-log-in","span.glyphicon.glyphicon-log-in",-1536249964)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," Log in"], null)], null)], null)], null)], null)], null);
});
;})(user))
});
titanoboa.core.navbar = (function titanoboa$core$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-inverse","nav.navbar.navbar-inverse",1434475316),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/logo_new.png",new cljs.core.Keyword(null,"height","height",1025178622),(42),new cljs.core.Keyword(null,"title","title",636505583),"\"Why should anyone be frightened by a hat?\"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"right","right",-452581833),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"7px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default",new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Orbitron",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"titanoboa."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"300"], null)], null),"io"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",-1723910318),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.core.main_tab_selected),new cljs.core.Keyword(null,"design","design",1241338903)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.core.main_tab_selected,new cljs.core.Keyword(null,"design","design",1241338903));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Orbitron",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700"], null)], null),"design"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.core.main_tab_selected),new cljs.core.Keyword(null,"jobs","jobs",-313607120)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.core.main_tab_selected,new cljs.core.Keyword(null,"jobs","jobs",-313607120));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Orbitron",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700"], null)], null),"jobs"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,titanoboa.core.main_tab_selected),new cljs.core.Keyword(null,"systems","systems",-1015374944)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,titanoboa.core.main_tab_selected,new cljs.core.Keyword(null,"systems","systems",-1015374944));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Orbitron",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700"], null)], null),"systems"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.navbar-right","ul.nav.navbar-nav.navbar-right",1710300738),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Orbitron",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"300",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),"5px"], null),new cljs.core.Keyword(null,"title","title",636505583),["logged in as ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.core.user_data)))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-user","span.glyphicon.glyphicon-user",1158329252)], null)," ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,titanoboa.core.user_data))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,titanoboa.core.user_data,cljs.core.PersistentArrayMap.EMPTY);

return titanoboa.api.log_out.call(null,cljs.core.identity);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Orbitron",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"300",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),"5px"], null),new cljs.core.Keyword(null,"title","title",636505583),"log out"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-log-out","span.glyphicon.glyphicon-log-out",-1591067176)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.core.modal_login], null)], null)], null);
});
titanoboa.core.get_tab_content = (function titanoboa$core$get_tab_content(tab_key){
if(cljs.core._EQ_.call(null,tab_key,new cljs.core.Keyword(null,"design","design",1241338903))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.designer.designer_tab], null);
} else {
if(cljs.core._EQ_.call(null,tab_key,new cljs.core.Keyword(null,"jobs","jobs",-313607120))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.jobs.jobs_tab], null);
} else {
if(cljs.core._EQ_.call(null,tab_key,new cljs.core.Keyword(null,"systems","systems",-1015374944))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.systems.systems_tab], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/logo_watermark.svg",new cljs.core.Keyword(null,"title","title",636505583),"\"Why should anyone be frightened by a hat?\"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null)], null);

}
}
}
});
titanoboa.core.main = (function titanoboa$core$main(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"arrange-vertically"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.core.navbar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.core.get_tab_content,cljs.core.deref.call(null,titanoboa.core.main_tab_selected)], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [titanoboa.core.main], null),document.getElementById("app"));
titanoboa.designer.initiate_resize_listener.call(null);
titanoboa.api.get_user.call(null,(function (p1__9695_SHARP_){
return cljs.core.reset_BANG_.call(null,titanoboa.core.user_data,p1__9695_SHARP_);
}));
titanoboa.core.load_data.call(null);
