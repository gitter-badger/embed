/*! mashape-api-docs-embed - v3.0.1 - 2014/12/02 */
!function(a){function b(a){this.options=this.merge(b.DEFAULTS,a),this.container=this.setup(),this.getData(function(a){this.container.innerHTML=this.tmpl(this.options.template,{groups:this.groupEndpoints(a.endpoints.data)}),this.attachEvents()}.bind(this))}a.Mashape=a.Mashape||{},Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});var c={};if(b.DEFAULTS={apiURL:"https://api-new.mashape.com/v1/",payload:{arrayCount:!0,include:["endpoints","endpoints.headers","endpoints.routeparameters","endpoints.parameters","endpoints.payload","endpoints.response","endpoints.response.headers","endpoints.payload.headers","endpoints.group"]},template:'<% for (group in groups) { %><div class="mashape-group"><div class="mashape-group-header"><%= groups[group].name %></div><% for (var i = 0; i < groups[group].endpoints.length; i++) { %><div class="mashape-endpoint"><span class="mashape-endpoint-name"><%= groups[group].endpoints[i].name %></span> <span class="mashape-endpoint-method mashape-<%= groups[group].endpoints[i].method.toLowerCase() %>"><%= groups[group].endpoints[i].method %></span><p><%= groups[group].endpoints[i].description %></p><div class="mashape-endpoint-content"><span class="mashape-endpoint-route"><span><%= groups[group].endpoints[i].method %></span><%= groups[group].endpoints[i].route %></span><% if (groups[group].endpoints[i].parameters.data.length) { %><div class="mashape-parameter-header">Parameters</div><% for (var k = 0; k < groups[group].endpoints[i].parameters.data.length; k++) { %><div class="mashape-parameter"><span class="mashape-parameter-name"><%= groups[group].endpoints[i].parameters.data[k].name %></span> <span class="mashape-parameter-type"><%= groups[group].endpoints[i].parameters.data[k].type %></span> <span class="mashape-parameter-condition-<%= groups[group].endpoints[i].parameters.data[k].condition.toLowerCase() %>">(<%= groups[group].endpoints[i].parameters.data[k].condition.toLowerCase() %>)</span> <span class="mashape-parameter-description"><%= groups[group].endpoints[i].parameters.data[k].description || "no description" %></span><% if (groups[group].endpoints[i].parameters.data[k].value) { %> <span class="mashape-parameter-example">Example:<%= groups[group].endpoints[i].parameters.data[k].value %></span><% } %></div><% } %><% } %><% if (groups[group].endpoints[i].response && groups[group].endpoints[i].response.body) { %><div class="mashape-response-header">Response Example</div><span class="mashape-example"><%= groups[group].endpoints[i].response.body %></span><% } %></div></div><% } %></div><% } %>',style:'.mashape-clearfix:after,.mashape-clearfix:before{content:"";display:table}.mashape-clearfix:after{clear:both}.mashape-doc{display:block!important;font-family:Arial,sans-serif;font-size:13px;color:rgba(0,0,0,.8);line-height:20px}.mashape-doc *{margin:0;border:0;padding:0}.mashape-doc .mashape-group{margin-top:40px}.mashape-doc .mashape-group:first-of-type{margin-top:0}.mashape-doc .mashape-group-header{font-size:1.6em;font-weight:700;line-height:1.3em;margin-bottom:7px;padding:0 10px}.mashape-doc .mashape-endpoint{-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;transition:all .2s ease-out;border-top:1px rgba(0,0,0,.12) solid;padding:7px 10px}.mashape-doc .mashape-endpoint:hover{background:rgba(0,0,0,.04);cursor:pointer}.mashape-doc .mashape-endpoint:last-of-type{border-bottom:1px rgba(0,0,0,.12) solid}.mashape-doc .mashape-endpoint.mashape-selected{background:0 0}.mashape-doc .mashape-endpoint.mashape-authentication:hover,.mashape-doc .mashape-endpoint.mashape-selected:hover{background:0 0;cursor:auto}.mashape-doc .mashape-endpoint.mashape-authentication .mashape-parameter-description:before{content:""}.mashape-doc .mashape-endpoint .mashape-endpoint-name{font-weight:700;font-size:1.1em}.mashape-doc .mashape-endpoint .mashape-endpoint-method{font-family:monospace;text-transform:uppercase;float:right}.mashape-doc .mashape-endpoint .mashape-endpoint-method.mashape-get{color:#66A4D1}.mashape-doc .mashape-endpoint .mashape-endpoint-method.mashape-post{color:#8CB562}.mashape-doc .mashape-endpoint .mashape-endpoint-method.mashape-put{color:#936}.mashape-doc .mashape-endpoint .mashape-endpoint-method.mashape-delete{color:#CB3234}.mashape-doc .mashape-endpoint .mashape-endpoint-route,.mashape-doc .mashape-endpoint .mashape-example{display:block;background:rgba(0,0,0,.04);border:1px solid rgba(0,0,0,.12);border-radius:3px;font-family:monospace;padding:5px 9px;margin-top:1em;overflow:auto}.mashape-doc .mashape-endpoint .mashape-endpoint-route span,.mashape-doc .mashape-endpoint .mashape-example span{text-transform:uppercase}.mashape-doc .mashape-endpoint .mashape-example{background:0 0;margin-bottom:1.5em;white-space:pre;max-height:340px}.mashape-doc .mashape-endpoint .mashape-parameter-header,.mashape-doc .mashape-endpoint .mashape-response-header{font-weight:700;margin-top:1em}.mashape-doc .mashape-endpoint .mashape-response-header{margin:1.5em 0 -.5em}.mashape-doc .mashape-endpoint .mashape-parameter{margin:6px 0 14px;padding-left:20px}.mashape-doc .mashape-endpoint .mashape-parameter:after,.mashape-doc .mashape-endpoint .mashape-parameter:before{content:"";display:table}.mashape-doc .mashape-endpoint .mashape-parameter:after{clear:both}.mashape-doc .mashape-endpoint .mashape-parameter div:nth-child(1){float:left;width:20%;position:relative;z-index:100}.mashape-doc .mashape-endpoint .mashape-parameter div:nth-child(2){float:right;width:80%}.mashape-doc .mashape-endpoint .mashape-parameter-name{display:block;margin-left:-10px;opacity:.5;font-weight:700}.mashape-doc .mashape-endpoint .mashape-parameter-constant,.mashape-doc .mashape-endpoint .mashape-parameter-type{text-transform:capitalize}.mashape-doc .mashape-endpoint .mashape-parameter-optional:before{content:", "}.mashape-doc .mashape-endpoint .mashape-parameter-description:before{content:": "}.mashape-doc .mashape-endpoint .mashape-parameter-example{display:block}.mashape-doc .mashape-endpoint .mashape-endpoint-content{max-height:0;overflow-y:hidden;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;transition:all .2s ease-out}.mashape-doc .mashape-endpoint.active .mashape-endpoint-content{max-height:500px}'},b.prototype.setup=function(){var a=document.createElement("style"),b=document.createElement("div"),c=document.querySelector(this.options.selector);return a.innerHTML=this.options.style,b.classList.add("mashape-doc"),b.innerHTML="Loading documentation...",c.appendChild(a),c.appendChild(b),b},b.prototype.attachEvents=function(){var a=this.container.querySelectorAll(".mashape-endpoint");[].forEach.call(a,function(a){a.addEventListener("click",function(){a.classList.toggle("active")},!1)})},b.prototype.getData=function(a){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(4===b.readyState){if(200===b.status&&b.responseText)return a(JSON.parse(b.responseText));this.container.innerHTML="There was an error loading the documentation. If you are the owner of this API, you may need to make this API public on Mashape."}}.bind(this),b.open("GET",this.options.apiURL+"accounts/"+this.options.user+"/apis/"+this.options.api+"/versions/current?"+this.querystring(this.options.payload),!0),b.send()},b.prototype.groupEndpoints=function(a){for(var b,c={},d=0;d<a.length;d++)b=a[d],"undefined"==typeof b.group&&(b.group={id:"__ungroupped__",name:"Ungroupped"}),b.group.id in c||(c[b.group.id]={name:b.group.name,endpoints:[]}),c[b.group.id].endpoints.push(b);return c},b.prototype.tmpl=function e(a,b){var d=/\W/.test(a)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):c[a]=c[a]||e(document.getElementById(a).innerHTML);return b?d(b):d},b.prototype.merge=function(){for(var a={},b=0;b<arguments.length;b++)for(var c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a},b.prototype.querystring=function(a){return a?Object.keys(a).map(function(b){var c=a[b];return Array.isArray(c)?c.map(function(a){return encodeURIComponent(b)+"="+encodeURIComponent(a)}).join("&"):encodeURIComponent(b)+"="+encodeURIComponent(c)}).join("&"):""},Array.isArray(a._MashapeConfig)){a.Mashape.Doc||(a.Mashape.Doc=[]);for(var d=0;d<a._MashapeConfig.length;d++)a.Mashape.Doc.push(new b(a._MashapeConfig[d]))}else a.Mashape.Doc=new b(a._MashapeConfig)}(window);