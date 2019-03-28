// Compiled by ClojureScript 1.7.28 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11796,handler){
var map__11797 = p__11796;
var map__11797__$1 = ((((!((map__11797 == null)))?((((map__11797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11797):map__11797);
var uri = cljs.core.get.call(null,map__11797__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__11797__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__11797__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__11797__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__11797__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__11797__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__11797__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__11797,map__11797__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__11795_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__11795_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__11797,map__11797__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___11805 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___11805)){
var response_type_11806 = temp__4425__auto___11805;
this$__$1.responseType = cljs.core.name.call(null,response_type_11806);
} else {
}

var seq__11799_11807 = cljs.core.seq.call(null,headers);
var chunk__11800_11808 = null;
var count__11801_11809 = (0);
var i__11802_11810 = (0);
while(true){
if((i__11802_11810 < count__11801_11809)){
var vec__11803_11811 = cljs.core._nth.call(null,chunk__11800_11808,i__11802_11810);
var k_11812 = cljs.core.nth.call(null,vec__11803_11811,(0),null);
var v_11813 = cljs.core.nth.call(null,vec__11803_11811,(1),null);
this$__$1.setRequestHeader(k_11812,v_11813);

var G__11814 = seq__11799_11807;
var G__11815 = chunk__11800_11808;
var G__11816 = count__11801_11809;
var G__11817 = (i__11802_11810 + (1));
seq__11799_11807 = G__11814;
chunk__11800_11808 = G__11815;
count__11801_11809 = G__11816;
i__11802_11810 = G__11817;
continue;
} else {
var temp__4425__auto___11818 = cljs.core.seq.call(null,seq__11799_11807);
if(temp__4425__auto___11818){
var seq__11799_11819__$1 = temp__4425__auto___11818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11799_11819__$1)){
var c__5792__auto___11820 = cljs.core.chunk_first.call(null,seq__11799_11819__$1);
var G__11821 = cljs.core.chunk_rest.call(null,seq__11799_11819__$1);
var G__11822 = c__5792__auto___11820;
var G__11823 = cljs.core.count.call(null,c__5792__auto___11820);
var G__11824 = (0);
seq__11799_11807 = G__11821;
chunk__11800_11808 = G__11822;
count__11801_11809 = G__11823;
i__11802_11810 = G__11824;
continue;
} else {
var vec__11804_11825 = cljs.core.first.call(null,seq__11799_11819__$1);
var k_11826 = cljs.core.nth.call(null,vec__11804_11825,(0),null);
var v_11827 = cljs.core.nth.call(null,vec__11804_11825,(1),null);
this$__$1.setRequestHeader(k_11826,v_11827);

var G__11828 = cljs.core.next.call(null,seq__11799_11819__$1);
var G__11829 = null;
var G__11830 = (0);
var G__11831 = (0);
seq__11799_11807 = G__11828;
chunk__11800_11808 = G__11829;
count__11801_11809 = G__11830;
i__11802_11810 = G__11831;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5008__auto__ = body;
if(cljs.core.truth_(or__5008__auto__)){
return or__5008__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
