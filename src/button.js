// embed/button.js
// @author Nijiko Yonskai
// @copyright 2013 Mashape Inc
var Mashape = typeof Mashape !== 'undefined' ? Mashape : {};
Mashape.attr = function (e, n) { return e.getAttribute('data-' + n); };
Mashape.get = function (e) { for(var c=document.getElementsByTagName("*"),d=[],a,b=0;b<c.length;b++)a=c[b],a.id&&a.id===e&&d.push(a);return d};
Mashape.el = function(e){var d=document,a={};a.e=d.createElement(e);a.css=function(b){for(var c in b)b.hasOwnProperty(c)&&(a.e.style[c]=b[c]);return a};a.addId=function(b){a.e.id+=(a.e.id.length > 1 ? " ":"")+b;return a};a.addClass=function(b){a.e.className+=(a.e.className.length > 1 ? " ":"")+b;return a};a.setCSS=function(b){a.e.appendChild(d.createTextNode(b));return a};a.text=function(b,c){a.e.innerHTML=c?a.e.innerHTML+b:b;return a};a.attr=function(b,c){return c?(a.e.setAttribute(b,c),a):a.e.getAttribute(b)};return a};
Mashape.style = '.mashape-button{display:inline-block;margin-bottom:1px;border:1px solid #2b2e3c;background-image:-webkit-linear-gradient(#565C77, #2B2E3C);background-image:-moz-linear-gradient(#565C77, #2B2E3C);background-image:-ms-linear-gradient(#565C77, #2B2E3C);background-image:linear-gradient(#565C77 0%, #2B2E3C 100%);-webkit-font-smoothing:antialiased;padding:0 10px 3px;text-decoration:none;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;-moz-box-shadow:0 1px 0 rgba(0,0,0,.2), inset 0 1px rgba(255,255,255,.15);-webkit-box-shadow:0 1px 0 rgba(0,0,0,.2), inset 0 1px rgba(255,255,255,.15);box-shadow:0 1px 0 rgba(0,0,0,.2), inset 0 1px rgba(255,255,255,.15);cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;font-size:13px;line-height:27px !important;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif !important;text-shadow:0 -1px 0 rgba(0,0,0,.3);color:#fff;font-weight:bold}a.mashape-button:hover{text-decoration:none;color:#f1f1f1;background-image:-webkit-linear-gradient(#5F6686, #35394B);background-image:-moz-linear-gradient(#5F6686, #35394B);background-image:-ms-linear-gradient(#5F6686, #35394B);background-image:linear-gradient(#5F6686 0%, #35394B 100%);}.mashape-button > span{font-size:14px;color:#78c2e9;font-weight:bold}.mashape-button em{font-weight:bold;font-style:normal;color:#fff}.mashape-button em > span{border-bottom:2px solid #a2cb7d}.mashape-button .icon{margin-right:5px;padding-right:8px;padding-bottom:3px;border-right:1px solid rgba(0,0,0,.15);box-shadow:1px 0 0 rgba(255,255,255,.05)}.mashape-button.light{background-image:-webkit-linear-gradient(#F0F6FB, #D1E4F1);background-image:-moz-linear-gradient(#F0F6FB, #D1E4F1);background-image:-ms-linear-gradient(#F0F6FB, #D1E4F1);background-image:linear-gradient(#F0F6FB 0%, #D1E4F1 100%);color:#2D6A96;text-shadow:0 1px rgba(255,255,255,.8);border-color:#AACCE5;-moz-box-shadow:0 1px 0 rgba(0,0,0,.1), inset 0 1px rgba(255,255,255,.15);-webkit-box-shadow:0 1px 0 rgba(0,0,0,.1), inset 0 1px rgba(255,255,255,.15);box-shadow:0 1px 0 rgba(0,0,0,.1), inset 0 1px rgba(255,255,255,.15)}a.mashape-button.light:hover{color:#4792C8;background-image:-webkit-linear-gradient(#EFF6FA, #D8E8F3);background-image:-moz-linear-gradient(#EFF6FA, #D8E8F3);background-image:-ms-linear-gradient(#EFF6FA, #D8E8F3);background-image:linear-gradient(#EFF6FA 0%, #D8E8F3 100%)}.mashape-button.light > span{color:#78c2e9}.mashape-button.light .icon{border-right:1px solid rgb(74.184%, 84.731%, 92.287%);box-shadow:1px 0 0 rgba(255,255,255,.5)}.mashape-button.light em{color:#2b2e3c}.mashape-button span em > span{border-bottom:2px solid #a2cb7d}';
Mashape.button = function (id) {
  function build (el) {
    el.innerHTML='';
    var button = Mashape.el('a').addClass('mashape-button'), name = Mashape.attr(el, 'name'),  api = Mashape.attr(el, 'api'), icon = Mashape.attr(el, 'icon'), light = Mashape.attr(el, 'light'), text = Mashape.attr(el, 'text') || "Consume API";
    if (light) button.addClass('light');
    button.text('<span class="icon"><em>m<span>a</span></em>' + (icon ? '' : 'shape') + '</span>');
    button.text(text, true);
    button.attr('href', document.location.protocol + "//www.mashape.com/" + name + '/' + api + '?utm_campaign=embed&utm_medium=button&utm_source=' + api + '&utm_content=jslink');
    el.appendChild(button.e);
  }
  var st = Mashape.el('style'); st.addId('mashape-style').attr('style','text/css').setCSS(Mashape.style);
  if (!document.getElementById('mashape-style')) (document.head || document.getElementsByTagName('head')[0]).appendChild(st.e);
  var i = 0, elements = Mashape.get("mashape-button");
  for (i; i < elements.length; i++) build(elements[i]);
};

Mashape.button();
