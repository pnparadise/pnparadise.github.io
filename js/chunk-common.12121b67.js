(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"0c1f":function(e,t,n){"use strict";var i=n("36de"),r=n.n(i);r.a},"199c":function(e,t){},"23be":function(e,t,n){"use strict";var i=n("199c"),r=n.n(i);t["default"]=r.a},2932:function(e,t){e.exports={owner:"pnparadise",defaultRepo:"gitbook",personalRepo:"secretbook",publicToken:"040ab84ddddee4c947c9f0f23a546464045f01ad",oauthAppsClientId:"225031944a6bf76a419c",githubAppsClientId:"Iv1.fb87a658b1a64609",oauthUrl:"https://api.ggga.ga/github.php"}},3255:function(e,t,n){},3489:function(e,t,n){"use strict";var i=n("76ad"),r=n.n(i);r.a},"36de":function(e,t,n){},"3dfd":function(e,t,n){"use strict";var i=n("e2c8"),r=n("23be"),a=(n("034f"),n("2877")),o=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=o.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=n("3dfd"),a=n("8c4f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"screen"},[n("div",{staticClass:"screen-header"},[n("Header")],1),n("div",{staticClass:"screen-content"},[n("router-view",{attrs:{path:e.$route.params.path,repo:e.$route.params.repo}})],1)])},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"container"},[n("span",{staticClass:"logo"},[e._v("\n            MarkdownBook "),e.github.repo===e.github.personalRepo?n("span",{staticClass:"logo iconfont icon-jiesuo"}):e._e()]),n("nav",{staticClass:"main-nav"},[n("ul",{staticClass:"nav-list"},[n("li",{staticClass:"nav-item search"},[n("form",{staticClass:"nav-form",attrs:{role:"search"},on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"nav-input",attrs:{type:"search",maxlength:"32",placeholder:"关键字"},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),n("a",{staticClass:"nav-icon iconfont icon-sousuo",on:{click:e.search}})])]),e.login===e.github.owner?["editor"===e.$route.name?[n("li",{staticClass:"nav-item search"},[n("form",{staticClass:"nav-form",attrs:{role:"search"},on:{submit:function(e){e.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.path,expression:"path"}],staticClass:"nav-input",attrs:{readonly:e.file.sha,type:"search",maxlength:"32",placeholder:"文件名称"},domProps:{value:e.path},on:{input:function(t){t.target.composing||(e.path=t.target.value)}}}),e._v(".md\n                                "),n("a",{staticClass:"nav-icon iconfont icon-baocun",class:{disabled:!!e.processing,blink:"save"===e.processing},on:{click:e.saveFile}}),n("a",{staticClass:"nav-icon iconfont icon-chexiao",class:{disabled:!!e.processing},on:{click:e.discardFile}}),e.file.sha?n("a",{staticClass:"nav-icon iconfont icon-shanchu",class:{disabled:!!e.processing,blink:"remove"===e.processing},on:{click:e.removeFile}}):e._e()])])]:[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"iconfont icon-jiahao",class:{disabled:!!e.processing},on:{click:e.newFile}})]),e.file.sha?[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"iconfont icon-bianjibiaoge",class:{disabled:!!e.processing},on:{click:e.editFile}})])]:e._e()]]:e._e(),n("li",{staticClass:"nav-item"},[e.login?n("img",{staticClass:"avatar",attrs:{title:"@"+e.login+" 登出",alt:"@"+e.login,src:e.avatar},on:{click:[function(t){return t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.logout()},function(t){return t.ctrlKey?t.shiftKey||t.altKey||t.metaKey?null:e.switchRepo():null}]}}):e.token?e._e():n("a",{on:{click:[function(t){return t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.goLogin(!1)},function(t){return t.ctrlKey?t.shiftKey||t.altKey||t.metaKey?null:e.goLogin(!0):null}]}},[e._v("登录")])])],2)])])])},l=[],u=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("7f7f"),n("bd86")),h=(n("386d"),n("27ae")),p=n("d69d"),d=n.n(p),f=n("2b27"),m=n.n(f),v=n("2932"),g=n.n(v),b={owner:g.a.owner,repo:g.a.defaultRepo,defaultRepo:g.a.defaultRepo,personalRepo:g.a.personalRepo,publicToken:g.a.publicToken,oauthAppsClientId:g.a.oauthAppsClientId,githubAppsClientId:g.a.githubAppsClientId,oauthUrl:g.a.oauthUrl,client:null,defaultClient:new d.a({auth:"token "+g.a.publicToken})};function w(){if(!b.client){var e=m.a.get("access_token");e&&(b.client=new d.a({auth:"token "+e}))}return new Promise((function(e,t){b.client?e(b.client):e(b.defaultClient)}))}function y(e){var t=e.headers["content-type"]||"";-1===t.indexOf("application/vnd.github.v3.raw")&&-1===t.indexOf("application/vnd.github.v3.html")||(e.type="file"),-1!==t.indexOf("application/json")&&(Array.isArray(e.data)?e.type="dir":e.type=e.data&&e.data.type||null)}var k={config:b,contents:function(e,t){return w().then((function(n){return n.repos.getContents({owner:b.owner,repo:b.repo,path:e,headers:{"If-None-Match":""},mediaType:{format:t||"html"}}).then((function(e){return y(e),e}))}))},remove:function(e){return w().then((function(t){return t.repos.deleteFile({owner:b.owner,repo:b.repo,path:e.path,message:"octokit: [master] page deleted",sha:e.sha})}))},commit:function(e){return w().then((function(t){return t.repos.createOrUpdateFile({owner:b.owner,repo:b.repo,path:e.path,message:"octokit: [master] page modified",content:h["Base64"].encode(e.text),sha:e.sha})}))},user:function(){return w().then((function(e){return e.users.getAuthenticated()}))},search:function(e){return w().then((function(t){return t.search.code({q:e.q+"+repo:"+b.owner+"/"+b.repo,page:e.page,per_page:e.perPage,mediaType:{format:"text-match+json"}})}))},encode:function(e){return h["Base64"].encodeURI(e)},decode:function(e){return h["Base64"].decode(e)},parentDir:function(e){return e.replace(/\/?([^/]+\/?)?$/,"")},prefix:function(){return this.config.repo===this.config.defaultRepo?"/t/":"/p/"},switchPrefix:function(){return this.config.repo===this.config.defaultRepo?"/p/":"/t/"},repoPrefix:function(){return this.config.repo===this.config.defaultRepo?"t":"p"},repo:function(e){return"t"===e&&this.config.defaultRepo||this.config.personalRepo}},O=n("2f62");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={name:"Header",computed:_({},Object(O["c"])(["file","dir"])),data:function(){return{processing:!1,login:null,avatar:null,keyword:null,path:null,token:null,github:k.config}},mounted:function(){this.initial()},watch:{$route:function(e,t){this.initial()},path:function(e,t){var n=this;/^\w*(\w+\/?){0,2}\w*$/.test(e)||this.$nextTick((function(){n.path=t}))}},methods:_({},Object(O["b"])(["receiveFile","receiveDir"]),{initial:function(){"editor"===this.$route.name&&(this.$route.params.sha?(this.file.sha=this.$route.params.sha,this.file.path=this.$route.params.path||"",this.path=this.file.path.replace(/\.md$/,"")):(this.path=this.dir&&this.dir+"/newfile"||"newfile",this.receiveDir(this.$route.params.mkdir||""))),this.$route.params.repo&&(k.config.repo=k.repo(this.$route.params.repo));var e=this.token;this.token=this.$route.query.access_token||this.$cookies.get("access_token"),this.keyword=this.$route.params.keyword,e!==this.token&&this.updateUser(this.token)},switchRepo:function(){return this.receiveFile({}),this.$router.push(k.switchPrefix()+"README.md")},search:function(){return this.$router.push({name:"search",params:{repo:k.repoPrefix(),keyword:this.keyword}})},updateUser:function(e){var t=this;e?(this.$cookies.get("access_token")!==e&&this.$cookies.set("access_token",e,"7d"),k.user().then((function(e){t.login=e.data.login,t.avatar=e.data.avatar_url+"&s=24"}))):(this.token=null,this.login=null,this.avatar=null)},goHome:function(e){return this.$router.push(k.prefix()+(this.file.path||this.dir))},goLogin:function(e){return this.$router.push({name:"login",query:{me:e,redirectUrl:window.location.href}})},logout:function(){this.$cookies.remove("access_token"),k.config.client=null,this.updateUser(null)},newFile:function(){return this.receiveFile({}),this.$router.push("/add"+k.prefix()+this.dir)},editFile:function(){return this.$router.push("/edit"+k.prefix()+this.file.sha+"/"+this.file.path)},removeFile:function(){var e=this;this.processing||(this.processing="remove",k.remove(this.file).then((function(t){return e.receiveFile({}),e.goHome()})).finally((function(){e.processing=!1})))},saveFile:function(){var e=this;this.processing||(this.processing="save",this.file.sha||(this.file.path=this.path+".md"),k.commit(this.file).then((function(t){return e.goHome()})).finally((function(){e.processing=!1})))},discardFile:function(){this.goHome()}})},P=j,$=(n("3489"),n("2877")),x=Object($["a"])(P,c,l,!1,null,"62d6d571",null),D=x.exports,R={name:"Home",components:{Header:D}},A=R,I=(n("9ac2"),Object($["a"])(A,o,s,!1,null,"8b4752d6",null)),E=I.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}],staticClass:"editor-container"},[n("ul",{staticClass:"mirrormark-toolbar"},[n("li",{staticClass:"bold"},[n("a",{on:{click:function(t){return e.takeAction("bold")}}})]),n("li",{staticClass:"italicize"},[n("a",{on:{click:function(t){return e.takeAction("italicize")}}})]),n("li",{staticClass:"blockquote"},[n("a",{on:{click:function(t){return e.takeAction("blockquote")}}})]),n("li",{staticClass:"code"},[n("a",{on:{click:function(t){return e.takeAction("code")}}})]),n("li",{staticClass:"strikethrough"},[n("a",{on:{click:function(t){return e.takeAction("strikethrough")}}})]),n("li",{staticClass:"link"},[n("a",{on:{click:function(t){return e.takeAction("link")}}})]),n("li",{staticClass:"image"},[n("a",{on:{click:function(t){return e.takeAction("image")}}})]),n("li",{staticClass:"unorderedList"},[n("a",{on:{click:function(t){return e.takeAction("unorderedList")}}})]),n("li",{staticClass:"orderedList"},[n("a",{on:{click:function(t){return e.takeAction("orderedList")}}})]),n("li",{staticClass:"preview"},[n("a",{on:{click:function(t){return e.takeAction("preview")}}})])]),n("codemirror",{ref:"editor",attrs:{options:e.options,events:["drop"]},on:{drop:e.upload},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}],staticClass:"editor-preview markdown-body",domProps:{innerHTML:e._s(e.markdown)}}),n("div",{staticClass:"fixed"},[n("a",{class:e.preview&&e.edit&&"active",attrs:{href:"#"},on:{click:function(t){return e.changeMode("all")}}},[e._v("Edit & Preview")]),n("a",{class:!e.preview&&e.edit&&"active",attrs:{href:"#"},on:{click:function(t){return e.changeMode("edit")}}},[e._v("Edit Only")]),n("a",{class:!e.edit&&e.preview&&"active",attrs:{href:"#"},on:{click:function(t){return e.changeMode("preview")}}},[e._v("Preview Only")])])])},q=[],S=(n("8449"),n("55dd"),n("8f94")),U=(n("959b"),n("44a0"),n("9f09"),n("9eb9"),n("0e54")),L=n.n(U),K=n("c197"),M=n.n(K);n("19fe"),n("43bf");function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}L.a.setOptions({renderer:new L.a.Renderer,highlight:function(e,t,n){var i=M.a.languages[t]||M.a.languages.autoit;return M.a.highlight(e,i)},gfm:!0,breaks:!1});var B={name:"editor",components:{codemirror:S["codemirror"]},computed:H({},Object(O["c"])(["file"])),props:{path:String},data:function(){return{editorHeight:0,edit:!0,preview:!0,markdown:null,content:null,editor:null,options:{tabSize:4,mode:"text/x-gfm",lineNumbers:!0,line:!0,lineWrapping:!0,theme:"mirrormark",viewportMargin:1/0}}},watch:{content:function(e,t){this.markdown=L()(e),this.file.text=e,this.receiveFile(this.file)}},mounted:function(){var e=this;this.editor=this.$refs.editor.codemirror,this.path&&k.contents(this.path,"raw").then((function(t){return e.content=t.data,t}))},methods:H({},Object(O["b"])(["receiveFile"]),{changeMode:function(e){e&&"edit"===e?(this.edit=!0,this.preview=!1):e&&"preview"===e?(this.edit=!1,this.preview=!0):(this.edit=!0,this.preview=!0)},upload:function(e,t){if(/image\/.+$/.test(t.dataTransfer.files[0].type)){this.text="!["+t.dataTransfer.files[0].name+"]("+t.dataTransfer.files[0].webkitRelativePath+")";var n=e.coordsChar({left:t.x,top:t.y});e.replaceRange(this.text,n)}},insert:function(e){var t=this.editor.getDoc(),n=t.getCursor();t.replaceRange(e,{line:n.line,ch:n.ch})},insertAround:function(e,t){var n=this.editor.getDoc(),i=n.getCursor();if(n.somethingSelected()){var r=n.getSelection();n.replaceSelection(e+r+t)}else n.replaceRange(e+t,{line:i.line,ch:i.ch}),n.setCursor({line:i.line,ch:i.ch+e.length})},insertBefore:function(e,t){var n=this.editor.getDoc(),i=n.getCursor();if(n.somethingSelected()){var r=n.listSelections();r.forEach((function(i){for(var r=[i.head.line,i.anchor.line].sort(),a=r[0];a<=r[1];a++)n.replaceRange(e,{line:a,ch:0});n.setCursor({line:r[0],ch:t||0})}))}else n.replaceRange(e,{line:i.line,ch:0}),n.setCursor({line:i.line,ch:t||0})},takeAction:function(e){switch(e){case"bold":this.insertAround("**","**");break;case"italicize":this.insertAround("*","*");break;case"strikethrough":this.insertAround("~~","~~");break;case"code":this.insertAround("```\r\n","\r\n```");break;case"blockquote":this.insertBefore("> ",2);break;case"orderedList":this.insertBefore("1. ",3);break;case"unorderedList":this.insertBefore("* ",2);break;case"image":this.insertBefore("![](http://)",2);break;case"link":this.insertAround("[","](http://)");break;case"hr":this.insert("---");break}}})},z=B,N=(n("e55c"),Object($["a"])(z,F,q,!1,null,"2539eb5e",null)),J=N.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fluid-container"},[n("div",{staticClass:"panel markdown-body"},[e.preview?[n("router-view",{attrs:{preview:e.preview}})]:[n("span",[e._v(e._s(e.loading?"加载中...":"markdown预览"))])]],2),n("div",{staticClass:"panel entry-list"},[n("DirectoryPanel",{attrs:{loading:e.loading,items:e.items,path:e.path}})],1)])},G=[],Q=(n("7514"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"entry-box"},[n("li",{staticClass:"entry",class:{active:e.loadingParentDir(),disabled:""===e.dir},on:{click:function(t){return e.parentDir()}}},[n("div",{staticClass:"entry-body"},[e.loadingParentDir()?n("div",{staticClass:"entry-indicator"},[n("Loading")],1):e._e(),e._v("\n            "+e._s(e.dir?"返回上一层":"根目录")+"\n        ")]),n("div",{staticClass:"entry-footer"},[e._v("\n            "+e._s(e.dir||"..."))])]),e._l(e.items,(function(t){return n("li",{staticClass:"entry",class:{active:t.path===e.path},on:{click:function(n){return e.processItem(t)}}},[n("div",{staticClass:"entry-body"},[e.loading&&t.path===e.path?n("div",{staticClass:"entry-indicator"},[n("Loading")],1):e._e(),e._v("\n            "+e._s(t.name)+"\n        ")]),"file"===t.type?n("div",{staticClass:"entry-footer"},[e._v(e._s(t.size)+" byte")]):e._e(),"dir"===t.type?n("div",{staticClass:"entry-footer"},[e._v("目录")]):e._e()])}))],2)}),V=[],X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader simple-circle"})},Y=[],Z={name:"Loading"},ee=Z,te=(n("694c"),Object($["a"])(ee,X,Y,!1,null,"46b33e49",null)),ne=te.exports;function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae={name:"DirectoryPanel",components:{Loading:ne},props:{path:String,items:Array,loading:Boolean},computed:re({},Object(O["c"])(["dir","file"])),methods:{redirect:function(e){this.path!==e&&this.$router.push(k.prefix()+e)},loadingParentDir:function(){return this.loading&&((this.path||"")===k.parentDir(this.dir)||null===this.items)},parentDir:function(){this.dir&&!this.loading&&this.redirect(k.parentDir(this.dir))},processItem:function(e){this.loading||this.redirect(e.path)}}},oe=ae,se=(n("bec4"),Object($["a"])(oe,Q,V,!1,null,"eb686ed6",null)),ce=se.exports;function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he={name:"Entry",components:{DirectoryPanel:ce},props:{path:String,repo:String},data:function(){return{loading:!1,items:null,preview:null}},computed:ue({},Object(O["c"])(["dir","file"])),created:function(){},beforeDestroy:function(){},mounted:function(){var e=this;this.refresh(this.path).then((function(){e.restoreHash()}))},watch:{path:function(e,t){"article"===this.$route.name&&this.refresh(e)},repo:function(e,t){"article"===this.$route.name&&(this.preview=null,this.items=null,this.refresh(this.path,!0))}},methods:ue({},Object(O["b"])(["receiveFile","receiveDir"]),{refresh:function(e,t){return this.showContent(e||"",t)},restoreHash:function(){if(this.$route.hash){var e=document.querySelector("[href='"+decodeURIComponent(this.$route.hash)+"']");if(e){var t=64,n=e.getBoundingClientRect().top,i=n-t;window.scrollTo({top:i,behavior:"smooth"})}}},markedItem:function(e){this.receiveFile(this.items.find((function(t){return t.path===e})))},showContent:function(e,t){var n=this,i=null;return this.loading=!0,k.contents(e).then((function(r){if("file"===r.type){if(n.preview=r.data,i=k.parentDir(e),t||i!==n.dir||null===n.items)return n.showContent(i).then((function(t){return n.markedItem(e),t}));n.markedItem(e)}else n.items=r.data,i=e;return n.receiveDir(i),r})).catch((function(i){if(n.preview=i.message,t)return n.showContent(k.parentDir(e))})).finally((function(){n.loading=!1}))}})},pe=he,de=(n("0c1f"),Object($["a"])(pe,W,G,!1,null,"35df6d6a",null)),fe=de.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-panel"},[e._l(e.searchItems,(function(t){return[n("div",{staticClass:"search-header"},[n("pre",[n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){return e.showFile(t.path)}}},[e._v(e._s(t.name))])]),e._l(t["text_matches"],(function(t){return[n("pre",{staticClass:"matchText",domProps:{innerHTML:e._s(e.pretty(t.fragment,t.matches))}})]}))],2)]})),e.loading||0!==e.searchItems.length?e._e():n("div",{staticClass:"search-header"},[e._v("\n        未找到任何结果\n    ")]),e.loading?n("div",{staticClass:"search-header"},[e._v("\n        查找中...\n    ")]):e._e(),e.incompleteResults?n("div",{staticClass:"search-footer"},[n("pre",[n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.more()}}},[e._v("查看更多")])])]):e._e()],2)},ve=[],ge={name:"SearchPanel",data:function(){return{loading:!1,query:{q:null,page:1,perPage:10},searchItems:[],incompleteResults:!1}},mounted:function(){this.query.q=this.$route.params.keyword,this.query.page=1,this.query.perPage=10,this.search()},watch:{"$route.params.keyword":function(e){this.query.q=e,this.query.page=1,this.query.perPage=10,this.searchItems=[],this.search()}},methods:{search:function(){var e=this;return this.loading=!0,k.search(this.query).then((function(t){e.searchItems=e.searchItems.concat(t.data.items),e.incompleteResults=e.searchItems.length!==t.data.total_count})).finally((function(){e.loading=!1}))},more:function(){return this.query.page++,this.search()},showFile:function(e){this.$router.push(k.prefix()+e)},pretty:function(e,t){for(var n="",i=0,r=null,a=0;a<t.length;a++)r=t[a],n+=e.substring(i,r.indices[0])+"<span class='pl-k'>"+r.text+"</span>",i=r.indices[1];return n+e.substring(i)}}},be=ge,we=(n("fb7b"),Object($["a"])(be,me,ve,!1,null,"470e6ea4",null)),ye=we.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{domProps:{innerHTML:e._s(e.preview)}})},Oe=[],Ce={name:"ArticlePanel",props:{preview:String}},_e=Ce,je=Object($["a"])(_e,ke,Oe,!1,null,"66494a34",null),Pe=je.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},xe=[],De={name:"Login",mounted:function(){if(this.$route.query.me){var e="client_id="+k.config.oauthAppsClientId;window.location="https://github.com/login/oauth/authorize?"+e+"&redirect_uri="+encodeURIComponent(this.authorizeUrl(e))+"&scope=repo&login="+k.config.owner+"&state="+Math.floor(1e5*Math.random())}else{var t="client_id="+k.config.githubAppsClientId;window.location="https://github.com/login/oauth/authorize?"+t+"&redirect_uri="+encodeURIComponent(this.authorizeUrl(t))+"&state="+Math.floor(1e5*Math.random())}},methods:{authorizeUrl:function(e){return k.config.oauthUrl+"?"+e+"&redirect_uri="+encodeURIComponent(this.$route.query.redirectUrl||"")}}},Re=De,Ae=Object($["a"])(Re,$e,xe,!1,null,"581735f4",null),Ie=Ae.exports;i["a"].use(a["a"]);var Ee=new a["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/t/README.md"},{path:"/",component:E,children:[{name:"entry",path:"/",component:fe,children:[{name:"search",path:"/s:repo(t|p)/:keyword",component:ye},{name:"article",path:"/:repo(t|p)/:path*",component:Pe},{name:"article",path:"/",component:Pe}]},{path:"/edit/:repo(t|p)/:sha/:path*",component:J,name:"editor"},{path:"/add/:repo(t|p)/:mkdir*",component:J,name:"editor"},{name:"login",path:"/login",component:Ie}]}]});i["a"].use(O["a"]);var Fe={file:{},dir:""},qe={receiveFile:function(e,t){e.file=t},receiveDir:function(e,t){e.dir=t}},Se={},Ue=new O["a"].Store({state:Fe,mutations:qe,actions:Se});i["a"].use(m.a),i["a"].config.productionTip=!1,new i["a"]({router:Ee,store:Ue,render:function(e){return e(r["default"])}}).$mount("#app")},"64a9":function(e,t,n){},"694c":function(e,t,n){"use strict";var i=n("7bc9"),r=n.n(i);r.a},"76ad":function(e,t,n){},"7bc9":function(e,t,n){},"89f4":function(e,t,n){},"9ac2":function(e,t,n){"use strict";var i=n("d161"),r=n.n(i);r.a},bec4:function(e,t,n){"use strict";var i=n("d94a"),r=n.n(i);r.a},d161:function(e,t,n){},d94a:function(e,t,n){},e2c8:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view",[n("div",{attrs:{id:"app"}})])},r=[];n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}))},e55c:function(e,t,n){"use strict";var i=n("89f4"),r=n.n(i);r.a},fb7b:function(e,t,n){"use strict";var i=n("3255"),r=n.n(i);r.a}}]);
//# sourceMappingURL=chunk-common.12121b67.js.map