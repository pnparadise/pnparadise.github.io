(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"199c":function(e,t){},"19dd":function(e,t,n){},2144:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view",[n("div",{attrs:{id:"app"}})])},i=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}))},"23be":function(e,t,n){"use strict";var r=n("199c"),i=n.n(r);t["default"]=i.a},2852:function(e,t,n){"use strict";var r=n("daa5"),i=n.n(r);i.a},"3dfd":function(e,t,n){"use strict";var r=n("2144"),i=n("23be"),a=(n("034f"),n("2877")),o=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=n("3dfd"),a=n("8c4f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"screen"},[n("div",{staticClass:"screen-header"},[n("Header")],1),n("div",{staticClass:"screen-content"},[n("router-view",{attrs:{path:e.$route.params.path}})],1)])},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"fluid-container"},[n("div",{staticClass:"logo"},[e._v("MarkdownBook")]),n("div",{staticClass:"nav"},[n("ul",[n("li",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],attrs:{type:"search",placeholder:"关键字"},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),n("input",{attrs:{type:"button",value:"搜索"},on:{click:e.search}})])]),e.login===e.github.owner?["editor"===e.$route.name?[e.file.sha?e._e():n("li",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPath,expression:"newPath"}],attrs:{type:"search",placeholder:"文件名称"},domProps:{value:e.newPath},on:{input:function(t){t.target.composing||(e.newPath=t.target.value)}}}),e._v("\n                            .md\n                        ")])]),n("li",[n("a",{class:{disabled:!!e.processing,blink:"save"===e.processing},attrs:{href:"javascript:void(0)"},on:{click:e.saveFile}},[e._v("保存")])]),n("li",[n("a",{class:{disabled:!!e.processing},attrs:{href:"javascript:void(0)"},on:{click:e.discardFile}},[e._v("返回")])])]:[n("li",[n("a",{class:{disabled:!!e.processing},attrs:{href:"javascript:void(0)"},on:{click:e.newFile}},[e._v("新增")])]),e.file.sha?[n("li",[n("a",{class:{disabled:!!e.processing},attrs:{href:"javascript:void(0)"},on:{click:e.editFile}},[e._v("修改")])]),n("li",[n("a",{class:{disabled:!!e.processing,blink:"remove"===e.processing},attrs:{href:"javascript:void(0)"},on:{click:e.removeFile}},[e._v("删除")])])]:e._e()]]:e._e(),n("li",[e.login?n("img",{staticClass:"avatar",attrs:{title:"@"+e.login+" 登出",alt:"@"+e.login,src:e.avatar},on:{click:function(t){return e.logout()}}}):e.token?e._e():n("a",{attrs:{href:"javascript:void(0)"},on:{click:[function(t){return t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.goLogin(!1)},function(t){return t.ctrlKey?t.shiftKey||t.altKey||t.metaKey?null:e.goLogin(!0):null}]}},[e._v("登录")])])],2)])])])},l=[],u=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),h=(n("a481"),n("386d"),n("27ae")),d=n("d69d"),p=n.n(d),f=n("2b27"),v=n.n(f),m="040ab84ddddee4c947c9f0f23a546464045f01ad",g={owner:"pnparadise",repo:"gitbook",publicToken:m,client:null,defaultClient:new p.a({auth:"token "+m})};function b(){if(!g.client){var e=v.a.get("access_token");e&&(g.client=new p.a({auth:"token "+e}))}return new Promise((function(e,t){g.client?e(g.client):e(g.defaultClient)}))}var w={config:g,contents:function(e,t){return b().then((function(n){return n.repos.getContents({owner:g.owner,repo:g.repo,path:e,headers:{"If-None-Match":""},mediaType:{format:t||"html"}}).then((function(e){var t=e.headers["content-type"]||"";return-1===t.indexOf("application/vnd.github.v3.raw")&&-1===t.indexOf("application/vnd.github.v3.html")||(e.type="file"),-1!==t.indexOf("application/json")&&(Array.isArray(e.data)?e.type="dir":e.type=e.data.type),e}))}))},remove:function(e){return b().then((function(t){return t.repos.deleteFile({owner:g.owner,repo:g.repo,path:e.path,message:"octokit: [master] page deleted",sha:e.sha})}))},commit:function(e){return b().then((function(t){return t.repos.createOrUpdateFile({owner:g.owner,repo:g.repo,path:e.path,message:"octokit: [master] page modified",content:h["Base64"].encode(e.text),sha:e.sha})}))},user:function(){return b().then((function(e){return e.users.getAuthenticated()}))},search:function(e){return b().then((function(t){return t.search.code({q:e.q+"+repo:"+g.owner+"/"+g.repo,page:e.page,per_page:e.perPage,mediaType:{format:"text-match+json"}})}))},encode:function(e){return h["Base64"].encodeURI(e)},decode:function(e){return h["Base64"].decode(e)},parentDir:function(e){return e.replace(/\/?([^/]+\/?)?$/,"")}},y=n("2f62");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={name:"Header",computed:O({},Object(y["c"])(["file","dir"])),data:function(){return{processing:!1,login:null,avatar:null,keyword:null,newPath:null,token:null,github:w.config}},mounted:function(){this.initial()},watch:{$route:function(e,t){this.initial()}},methods:O({},Object(y["b"])(["receiveFile"]),{initial:function(){this.$route.params.sha&&(this.file.sha=this.$route.params.sha,this.file.path=this.$route.params.path||""),this.$route.params.mkdir&&(this.dir=this.$route.params.mkdir||""),this.newPath=this.dir&&this.dir+"/newfile"||"newfile";var e=this.token;this.token=this.$route.query.access_token||this.$cookies.get("access_token"),this.keyword=this.$route.params.keyword,e!==this.token&&this.updateUser(this.token)},search:function(){return this.$router.push({name:"search",params:{keyword:this.keyword}})},updateUser:function(e){var t=this;e?(this.$cookies.get("access_token")!==e&&this.$cookies.set("access_token",e,"7d"),w.user().then((function(e){t.login=e.data.login,t.avatar=e.data.avatar_url+"&s=32"}))):(this.token=null,this.login=null,this.avatar=null)},goHome:function(e){return this.$router.push("/t/"+(this.file.path||this.dir))},goLogin:function(e){return this.$router.push({name:"login",query:{me:e,redirectUrl:window.location.href}})},logout:function(){this.$cookies.remove("access_token"),w.config.client=null,this.updateUser(null)},newFile:function(){return this.receiveFile({}),this.$router.push("/add/"+this.dir)},editFile:function(){return this.$router.push("/edit/"+this.file.sha+"/"+this.file.path)},removeFile:function(){var e=this;this.processing||(this.processing="remove",w.remove(this.file).then((function(t){return e.receiveFile({}),e.goHome()})).finally((function(){e.processing=!1})))},saveFile:function(){var e=this;this.processing||(this.processing="save",this.file.sha||(this.file.path=this.newPath+".md"),w.commit(this.file).then((function(t){return e.goHome()})).finally((function(){e.processing=!1})))},discardFile:function(){this.goHome()}})},j=_,P=(n("823e"),n("2877")),C=Object(P["a"])(j,c,l,!1,null,"6b9b72d3",null),$=C.exports,D={name:"Home",components:{Header:$}},x=D,q=(n("bcc3"),Object(P["a"])(x,o,s,!1,null,"a08b8bb4",null)),A=q.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}],staticClass:"editor-container"},[n("ul",{staticClass:"mirrormark-toolbar"},[n("li",{staticClass:"bold"},[n("a",{on:{click:function(t){return e.takeAction("bold")}}})]),n("li",{staticClass:"italicize"},[n("a",{on:{click:function(t){return e.takeAction("italicize")}}})]),n("li",{staticClass:"blockquote"},[n("a",{on:{click:function(t){return e.takeAction("blockquote")}}})]),n("li",{staticClass:"code"},[n("a",{on:{click:function(t){return e.takeAction("code")}}})]),n("li",{staticClass:"strikethrough"},[n("a",{on:{click:function(t){return e.takeAction("strikethrough")}}})]),n("li",{staticClass:"link"},[n("a",{on:{click:function(t){return e.takeAction("link")}}})]),n("li",{staticClass:"image"},[n("a",{on:{click:function(t){return e.takeAction("image")}}})]),n("li",{staticClass:"unorderedList"},[n("a",{on:{click:function(t){return e.takeAction("unorderedList")}}})]),n("li",{staticClass:"orderedList"},[n("a",{on:{click:function(t){return e.takeAction("orderedList")}}})]),n("li",{staticClass:"preview"},[n("a",{on:{click:function(t){return e.takeAction("preview")}}})])]),n("codemirror",{ref:"editor",attrs:{options:e.options,events:["drop"]},on:{drop:e.upload},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}],staticClass:"editor-preview markdown-body",domProps:{innerHTML:e._s(e.markdown)}}),n("div",{staticClass:"fixed"},[n("a",{class:e.preview&&e.edit&&"active",attrs:{href:"#"},on:{click:function(t){return e.changeMode("all")}}},[e._v("Edit & Preview")]),n("a",{class:!e.preview&&e.edit&&"active",attrs:{href:"#"},on:{click:function(t){return e.changeMode("edit")}}},[e._v("Edit Only")]),n("a",{class:!e.edit&&e.preview&&"active",attrs:{href:"#"},on:{click:function(t){return e.changeMode("preview")}}},[e._v("Preview Only")])])])},F=[],S=(n("8449"),n("55dd"),n("7f7f"),n("8f94")),I=(n("959b"),n("44a0"),n("9f09"),n("9eb9"),n("0e54")),L=n.n(I),R=n("c197"),H=n.n(R);n("19fe"),n("43bf");function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}L.a.setOptions({renderer:new L.a.Renderer,highlight:function(e,t,n){var r=H.a.languages[t]||H.a.languages.autoit;return H.a.highlight(e,r)},gfm:!0,breaks:!1});var T={name:"editor",components:{codemirror:S["codemirror"]},computed:U({},Object(y["c"])(["file"])),props:{path:String},data:function(){return{editorHeight:0,edit:!0,preview:!0,markdown:null,content:null,editor:null,options:{tabSize:4,mode:"text/x-gfm",lineNumbers:!0,line:!0,lineWrapping:!0,theme:"mirrormark",viewportMargin:1/0}}},watch:{content:function(e,t){this.markdown=L()(e),this.file.text=e,this.receiveFile(this.file)}},mounted:function(){var e=this;this.editor=this.$refs.editor.codemirror,this.path&&w.contents(this.path,"raw").then((function(t){return e.content=t.data,t}))},methods:U({},Object(y["b"])(["receiveFile"]),{changeMode:function(e){e&&"edit"===e?(this.edit=!0,this.preview=!1):e&&"preview"===e?(this.edit=!1,this.preview=!0):(this.edit=!0,this.preview=!0)},upload:function(e,t){if(/image\/.+$/.test(t.dataTransfer.files[0].type)){this.text="!["+t.dataTransfer.files[0].name+"]("+t.dataTransfer.files[0].webkitRelativePath+")";var n=e.coordsChar({left:t.x,top:t.y});e.replaceRange(this.text,n)}},insert:function(e){var t=this.editor.getDoc(),n=t.getCursor();t.replaceRange(e,{line:n.line,ch:n.ch})},insertAround:function(e,t){var n=this.editor.getDoc(),r=n.getCursor();if(n.somethingSelected()){var i=n.getSelection();n.replaceSelection(e+i+t)}else n.replaceRange(e+t,{line:r.line,ch:r.ch}),n.setCursor({line:r.line,ch:r.ch+e.length})},insertBefore:function(e,t){var n=this.editor.getDoc(),r=n.getCursor();if(n.somethingSelected()){var i=n.listSelections();i.forEach((function(r){for(var i=[r.head.line,r.anchor.line].sort(),a=i[0];a<=i[1];a++)n.replaceRange(e,{line:a,ch:0});n.setCursor({line:i[0],ch:t||0})}))}else n.replaceRange(e,{line:r.line,ch:0}),n.setCursor({line:r.line,ch:t||0})},takeAction:function(e){switch(e){case"bold":this.insertAround("**","**");break;case"italicize":this.insertAround("*","*");break;case"strikethrough":this.insertAround("~~","~~");break;case"code":this.insertAround("```\r\n","\r\n```");break;case"blockquote":this.insertBefore("> ",2);break;case"orderedList":this.insertBefore("1. ",3);break;case"unorderedList":this.insertBefore("* ",2);break;case"image":this.insertBefore("![](http://)",2);break;case"link":this.insertAround("[","](http://)");break;case"hr":this.insert("---");break}}})},z=T,B=(n("5f83"),Object(P["a"])(z,E,F,!1,null,"840353b2",null)),K=B.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fluid-container"},[n("div",{staticClass:"panel entry-list"},[n("DirectoryPanel",{attrs:{loading:e.loading,items:e.items,path:e.path}})],1),n("div",{staticClass:"panel markdown-body"},[n("router-view",{attrs:{preview:e.preview}})],1)])},J=[],W=(n("7514"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"entry-box"},[n("li",{staticClass:"entry",class:{active:e.loadingParentDir(),disabled:""===e.dir},on:{click:function(t){return e.parentDir()}}},[n("div",{staticClass:"entry-body"},[e.loadingParentDir()?n("div",{staticClass:"entry-indicator"},[n("Loading")],1):e._e(),e._v("\n            "+e._s(e.dir?"返回上一层":"根目录")+"\n        ")]),n("div",{staticClass:"entry-footer"},[e._v("\n            "+e._s(e.dir||"..."))])]),e._l(e.items,(function(t){return n("li",{staticClass:"entry",class:{active:t.path===e.path},on:{click:function(n){return e.processItem(t)}}},[n("div",{staticClass:"entry-body"},[e.loading&&t.path===e.path?n("div",{staticClass:"entry-indicator"},[n("Loading")],1):e._e(),e._v("\n            "+e._s(t.name)+"\n        ")]),"file"===t.type?n("div",{staticClass:"entry-footer"},[e._v(e._s(t.size)+" byte")]):e._e(),"dir"===t.type?n("div",{staticClass:"entry-footer"},[e._v("目录")]):e._e()])}))],2)}),G=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader simple-circle"})},V=[],X={name:"Loading"},Y=X,Z=(n("694c"),Object(P["a"])(Y,Q,V,!1,null,"46b33e49",null)),ee=Z.exports;function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re={name:"DirectoryPanel",components:{Loading:ee},props:{path:String,items:Array,loading:Boolean},computed:ne({},Object(y["c"])(["dir","file"])),methods:{redirect:function(e){this.path!==e&&this.$router.push("/t/"+e)},loadingParentDir:function(){return this.loading&&w.parentDir(this.dir)===(this.path||"")},parentDir:function(){this.dir&&!this.loading&&this.redirect(w.parentDir(this.dir))},processItem:function(e){this.loading||this.redirect(e.path)}}},ie=re,ae=(n("5869"),Object(P["a"])(ie,W,G,!1,null,"7ba97aa2",null)),oe=ae.exports;function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le={name:"Entry",components:{DirectoryPanel:oe},props:{path:String},data:function(){return{loading:!1,items:null,preview:null}},computed:ce({},Object(y["c"])(["dir","file"])),created:function(){},beforeDestroy:function(){},mounted:function(){var e=this;this.refresh(this.path).then((function(){e.restoreHash()}))},watch:{path:function(e,t){"article"===this.$route.name&&this.refresh(e)}},methods:ce({},Object(y["b"])(["receiveFile","receiveDir"]),{refresh:function(e){return this.showContent(e||"")},restoreHash:function(){if(this.$route.hash){var e=document.querySelector("[href='"+decodeURIComponent(this.$route.hash)+"']");if(e){var t=50,n=e.getBoundingClientRect().top,r=n-t;window.scrollTo({top:r,behavior:"smooth"})}}},markedItem:function(e){this.receiveFile(this.items.find((function(t){return t.path===e})))},showContent:function(e){var t=this,n=null;return this.loading=!0,w.contents(e).then((function(r){if("file"===r.type){if(t.preview=r.data,n=w.parentDir(e),n!==t.dir||null===t.items)return t.showContent(n).then((function(n){return t.markedItem(e),n}));t.markedItem(e)}else t.items=r.data,n=e;return t.receiveDir(n),r})).finally((function(){t.loading=!1}))}})},ue=le,he=(n("2852"),Object(P["a"])(ue,N,J,!1,null,"188f0c09",null)),de=he.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-panel"},[e._l(e.searchItems,(function(t){return[n("div",{staticClass:"search-header"},[n("pre",[n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){return e.showFile(t.path)}}},[e._v(e._s(t.name))])]),e._l(t["text_matches"],(function(t){return[n("pre",{staticClass:"matchText",domProps:{innerHTML:e._s(e.pretty(t.fragment,t.matches))}})]}))],2)]})),e.incompleteResults?n("div",{staticClass:"search-footer"},[n("pre",[n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.more()}}},[e._v("查看更多")])])]):e._e()],2)},fe=[],ve={name:"SearchPanel",data:function(){return{query:{q:null,page:1,perPage:10},searchItems:[],incompleteResults:!1}},mounted:function(){this.query.q=this.$route.params.keyword,this.query.page=1,this.query.perPage=10,this.search()},watch:{"$route.params.keyword":function(e){this.query.q=e,this.query.page=1,this.query.perPage=10,this.searchItems=[],this.search()}},methods:{search:function(){var e=this;return w.search(this.query).then((function(t){e.searchItems=e.searchItems.concat(t.data.items),e.incompleteResults=e.searchItems.length!==t.data.total_count}))},more:function(){return this.query.page++,this.search()},showFile:function(e){this.$router.push("/t/"+e)},pretty:function(e,t){for(var n="",r=0,i=null,a=0;a<t.length;a++)i=t[a],n+=e.substring(r,i.indices[0])+"<span class='pl-k'>"+i.text+"</span>",r=i.indices[1];return n+e.substring(r)}}},me=ve,ge=(n("77ba"),Object(P["a"])(me,pe,fe,!1,null,"04e612bf",null)),be=ge.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{domProps:{innerHTML:e._s(e.preview)}})},ye=[],ke={name:"ArticlePanel",props:{preview:String}},Oe=ke,_e=Object(P["a"])(Oe,we,ye,!1,null,"66494a34",null),je=_e.exports,Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},Ce=[],$e={name:"Login",mounted:function(){if(this.$route.query.me){var e="client_id=225031944a6bf76a419c";window.location="https://github.com/login/oauth/authorize?"+e+"&redirect_uri="+encodeURIComponent(this.authorizeUrl(e))+"&scope=repo&login="+w.config.owner+"&state="+Math.floor(1e5*Math.random())}else{var t="client_id=Iv1.fb87a658b1a64609";window.location="https://github.com/login/oauth/authorize?"+t+"&redirect_uri="+encodeURIComponent(this.authorizeUrl(t))+"&state="+Math.floor(1e5*Math.random())}},methods:{authorizeUrl:function(e){return"http://nonwa11.xyz:8443/github.php?"+e+"&redirect_uri="+encodeURIComponent(this.$route.query.redirectUrl||"")}}},De=$e,xe=Object(P["a"])(De,Pe,Ce,!1,null,"011d517a",null),qe=xe.exports;r["a"].use(a["a"]);var Ae=new a["a"]({mode:"history",base:"/",routes:[{path:"/",component:A,children:[{name:"entry",path:"/",component:de,children:[{name:"search",path:"/s/:keyword",component:be},{name:"article",path:"/t/:path*",component:je},{name:"article",path:"/",component:je}]},{path:"/edit/:sha/:path*",component:K,name:"editor"},{path:"/add/:mkdir*",component:K,name:"editor"},{name:"login",path:"/login",component:qe}]}]});r["a"].use(y["a"]);var Ee={file:{},dir:""},Fe={receiveFile:function(e,t){e.file=t},receiveDir:function(e,t){e.dir=t}},Se={},Ie=new y["a"].Store({state:Ee,mutations:Fe,actions:Se});r["a"].use(v.a),r["a"].config.productionTip=!1,new r["a"]({router:Ae,store:Ie,render:function(e){return e(i["default"])}}).$mount("#app")},5869:function(e,t,n){"use strict";var r=n("8a66"),i=n.n(r);i.a},"5f83":function(e,t,n){"use strict";var r=n("7862"),i=n.n(r);i.a},"64a9":function(e,t,n){},"694c":function(e,t,n){"use strict";var r=n("7bc9"),i=n.n(r);i.a},"77ba":function(e,t,n){"use strict";var r=n("9501"),i=n.n(r);i.a},7862:function(e,t,n){},"7bc9":function(e,t,n){},"823e":function(e,t,n){"use strict";var r=n("19dd"),i=n.n(r);i.a},"8a66":function(e,t,n){},9501:function(e,t,n){},bcc3:function(e,t,n){"use strict";var r=n("efdc"),i=n.n(r);i.a},daa5:function(e,t,n){},efdc:function(e,t,n){}}]);
//# sourceMappingURL=chunk-common.5937f781.js.map