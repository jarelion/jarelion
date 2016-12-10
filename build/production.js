(function(e){e.bigfoot=function(t){var n;var r=e.extend({actionOriginalFN:"hide",activateCallback:function(){},activateOnHover:false,allowMultipleFN:false,appendPopoversTo:undefined,breakpoints:{},deleteOnUnhover:false,hoverDelay:250,numberResetSelector:undefined,popoverDeleteDelay:300,popoverCreateDelay:100,positionNextToBlock:true,positionContent:true,preventPageScroll:true,scope:false,useFootnoteOnlyOnce:true,contentMarkup:'<aside class="footnote-content bottom"'+'data-footnote-number="{{FOOTNOTENUM}}" '+'data-footnote-identifier="{{FOOTNOTEID}}" '+'alt="Footnote {{FOOTNOTENUM}}">'+'<div class="footnote-main-wrapper">'+'<div class="footnote-content-wrapper">'+"{{FOOTNOTECONTENT}}"+"</div></div>"+'<div class="tooltip"></div>'+"</aside>",buttonMarkup:'<a href="#" class="footnote-button" '+'id="{{SUP:data-footnote-backlink-ref}}" '+'data-footnote-number="{{FOOTNOTENUM}}" '+'data-footnote-identifier="{{FOOTNOTEID}}" '+'alt="See Footnote {{FOOTNOTENUM}}" '+'rel="footnote"'+'data-footnote-content="{{FOOTNOTECONTENT}}">'+'<span class="footnote-circle" data-footnote-number="{{FOOTNOTENUM}}"></span>'+'<span class="footnote-circle"></span>'+'<span class="footnote-circle"></span>'+"</a>"},t);var i=function(){var t;t=!r.scope?'a[href*="#"]':r.scope+' a[href*="#"]';var n=e(t).filter(function(){var t=e(this);var n=t.attr("rel");if(!n||n=="null"){n=""}return(t.attr("href")+n).match(/(fn|footnote|note)[:\-_\d]/gi)&&t.closest("[class*=footnote]:not(a):not(sup)").length<1});var i=[],f=[],l=[],c,h,p;s(n,f);e(f).each(function(){c=e(this).attr("data-footnote-ref").replace(/[:.+~*\]\[]/g,"\\$&");if(r.useFootnoteOnlyOnce)c=c+":not(.footnote-processed)";h=e(c).closest("li");if(h.length>0){i.push(h.first().addClass("footnote-processed"));l.push(this)}});var d,v,m=1,g,y,b,w,E,S;for(var x=0;x<i.length;x++){g=u(e(i[x]).html().trim(),e(l[x]).data("footnote-backlink-ref")).replace(/"/g,"&quot;").replace(/&lt;/g,"&ltsym;").replace(/&gt;/g,"&gtsym;");y=+(x+1);E="";b=e(l[x]);w=e(i[x]);if(r.numberResetSelector){v=b.closest(r.numberResetSelector);if(v.is(d)){m+=1}else{m=1}d=v}else{m=y}if(g.indexOf("<")!==0){g="<p>"+g+"</p>"}E=r.buttonMarkup.replace(/\{\{FOOTNOTENUM\}\}/g,m).replace(/\{\{FOOTNOTEID\}\}/g,y).replace(/\{\{FOOTNOTECONTENT\}\}/g,g);E=a(E,"SUP",b);E=a(E,"FN",w);S=e(E).insertBefore(b);var T=w.parent();switch(r.actionOriginalFN.toLowerCase()){case"delete":b.remove();w.remove();o(T);break;case"hide":b.addClass("footnote-print-only");w.addClass("footnote-print-only");o(T);break;case"ignore":b.addClass("footnote-print-only");break}}};var s=function(t,n){var r,i,s,o;t.each(function(){var t=e(this);s="#"+t.attr("href").split("#")[1];r=t.closest("sup");i=t.find("sup");if(r.length>0){o=(r.attr("id")||"")+(t.attr("id")||"");n.push(r.attr({"data-footnote-backlink-ref":o,"data-footnote-ref":s}))}else if(i.length>0){o=(i.attr("id")||"")+(t.attr("id")||"");n.push(t.attr({"data-footnote-backlink-ref":o,"data-footnote-ref":s}))}else{o=t.attr("id")||"";n.push(t.attr({"data-footnote-backlink-ref":o,"data-footnote-ref":s}))}})};var o=function(e){var t;if(e.is(":empty")||e.children(":not(.footnote-print-only)").length===0){t=e.parent();if(r.actionOriginalFN.toLowerCase()==="delete"){e.remove()}else{e.addClass("footnote-print-only")}o(t)}else if(e.children(":not(.footnote-print-only)").length==e.children("hr:not(.footnote-print-only)").length){t=e.parent();if(r.actionOriginalFN.toLowerCase()==="delete"){e.remove()}else{e.children("hr").addClass("footnote-print-only");e.addClass("footnote-print-only")}o(t)}};var u=function(e,t){if(t.indexOf(" ")>=0){t=t.trim().replace(/ +/g,"|").replace(/(.*)/g,"($1)")}var n=new RegExp("(\\s|&nbsp;)*<\\s*a[^#<]*#"+t+"[^>]*>(.*?)<\\s*/\\s*a>","g");return e.replace(n,"").replace("[]","")};var a=function(e,t,n){var r=new RegExp("\\{\\{"+t+":([^\\}]*)\\}\\}","g"),i,s,o;i=r.exec(e);while(i){if(i[1]){s=n.attr(i[1])||"";e=e.replace("{{"+t+":"+i[1]+"}}",s)}i=r.exec(e)}return e};var f=function(t){if(r.activateOnHover){var n=e(t.target).closest(".footnote-button"),i='[data-footnote-identifier="'+n.attr("data-footnote-identifier")+'"]';if(n.hasClass("active"))return;n.addClass("hover-instantiated");if(!r.allowMultipleFN){var s=".footnote-content:not("+i+")";v(s)}h(".footnote-button"+i).addClass("hover-instantiated")}};var l=function(t){var n=e(t.target),r=n.closest(".footnote-button");$nearFootnote=n.closest(".footnote-content");if(r.length>0){t.preventDefault();c(r)}else if($nearFootnote.length<1){if(e(".footnote-content").length>0){v()}}};var c=function(e){e.blur();var t='data-footnote-identifier="'+e.attr("data-footnote-identifier")+'"';if(e.hasClass("changing")){return}else if(!e.hasClass("active")){e.addClass("changing");setTimeout(function(){e.removeClass("changing")},r.popoverCreateDelay);h(".footnote-button["+t+"]");e.addClass("click-instantiated");if(!r.allowMultipleFN){v(".footnote-content:not(["+t+"])")}}else{if(!r.allowMultipleFN){v()}else{v(".footnote-content["+t+"]")}}};var h=function(t){t=t||".footnote-button";var n;if(typeof t!=="string"&&r.allowMultipleFN){n=t}else if(typeof t!=="string"){n=t.first()}else if(r.allowMultipleFN){n=e(t).closest(".footnote-button")}else{n=e(t+":first").closest(".footnote-button")}var i=e();n.each(function(){var t=e(this),n;try{n=r.contentMarkup.replace(/\{\{FOOTNOTENUM\}\}/g,t.attr("data-footnote-number")).replace(/\{\{FOOTNOTEID\}\}/g,t.attr("data-footnote-identifier")).replace(/\{\{FOOTNOTECONTENT\}\}/g,t.attr("data-footnote-content").replace(/&gtsym;/,"&gt;").replace(/&ltsym;/,"&lt;"));n=a(n,"BUTTON",t)}finally{$content=e(n);try{r.activateCallback($content)}catch(s){}if(!r.appendPopoversTo){$nearestBlock=t.closest("p, div, pre, li, ul, section, article, main, aside");$siblingFootnote=$nearestBlock.siblings(".footnote-content:last");if($siblingFootnote.length>0){$content.insertAfter($siblingFootnote)}else{$content.insertAfter($nearestBlock)}}else{$content.appendTo(r.appendPopoversTo+":first")}$content.attr("data-bigfoot-max-height",$content.height());m();t.addClass("active");$content.find(".footnote-content-wrapper").bindScrollHandler();i=i.add($content)}});setTimeout(function(){i.addClass("active")},r.popoverCreateDelay);return i};e.fn.bindScrollHandler=function(){if(!r.preventPageScroll){return}e(this).on("DOMMouseScroll mousewheel",function(t){var n=e(this),r=n.scrollTop(),i=n[0].scrollHeight,s=parseInt(n.css("height")),o=n.closest(".footnote-content");if(n.scrollTop()>0&&n.scrollTop()<10){o.addClass("scrollable")}if(!o.hasClass("scrollable")){return}var u=t.type=="DOMMouseScroll"?t.originalEvent.detail*-40:t.originalEvent.wheelDelta,a=u>0;var f=function(){t.stopPropagation();t.preventDefault();t.returnValue=false;return false};if(!a&&-u>i-s-r){n.scrollTop(i);o.addClass("fully-scrolled");return f()}else if(a&&u>r){n.scrollTop(0);o.removeClass("fully-scrolled");return f()}else{o.removeClass("fully-scrolled")}})};var p=function(t){if(r.deleteOnUnhover&&r.activateOnHover){setTimeout(function(){var n=e(t.target).closest(".footnote-content, .footnote-button");if(e(".footnote-button:hover, .footnote-content:hover").length<1){v()}},r.hoverDelay)}};var d=function(e){if(e.keyCode==27){v()}};var v=function(t,n){t=t||".footnote-content";n=n||r.popoverDeleteDelay;var i=e(),s,o,u;e(t).each(function(){u=e(this);s=u.attr("data-footnote-identifier");o=e('.footnote-button[data-footnote-identifier="'+s+'"]');if(!o.hasClass("changing")){i=i.add(o);o.removeClass("active hover-instantiated click-instantiated").addClass("changing");u.removeClass("active").addClass("disapearing");setTimeout(function(){u.remove();o.removeClass("changing")},n)}});return i};var m=function(){if(r.positionContent){e(".footnote-content").each(function(){var t=e(this),n='data-footnote-identifier="'+t.attr("data-footnote-identifier")+'"',r=t.find(".footnote-content-wrapper"),i=e(".footnote-button["+n+"]");var s=y(i),o=parseFloat(t.css("width")),u=parseFloat(t.css("margin-top")),a=+t.attr("data-bigfoot-max-height"),f=2*u+a,l=1e4;if(s.bottomRoom<f&&s.topRoom>s.bottomRoom){t.css({top:"auto",bottom:s.bottomRoom+"px"}).addClass("top").removeClass("bottom");l=s.topRoom-u-15;t.css({"transform-origin":s.leftRelative*100+"% 100%"})}else{t.css({bottom:"auto",top:s.topRoom+"px"}).addClass("bottom").removeClass("top");l=s.bottomRoom-u-15;t.css({"transform-origin":s.leftRelative*100+"% 0%"})}t.find(".footnote-content-wrapper").css({"max-height":Math.min(l,a)+"px"});t.css({left:s.leftRoom-s.leftRelative*o+"px"});g(t,s.leftRelative);if(parseInt(t.css("height"))<t.find(".footnote-content-wrapper")[0].scrollHeight){t.addClass("scrollable")}})}};var g=function(e,t){t=t||.5;var n=e.find(".tooltip");if(n.length>0){n.css({left:t*100+"%"})}};var y=function(t){var n=parseFloat(t.outerWidth()),r=parseFloat(t.outerHeight()),i=b(),s=t.offset().top-e(window).scrollTop()+r/2,o=t.offset().left+n/2;return{topRoom:s,bottomRoom:i.height-s,leftRoom:o,rightRoom:i.width-o,leftRelative:o/i.width,topRelative:s/i.height}};var b=function(){var e=document.createElement("div");e.style.cssText="position: fixed;top: 0;left: 0;bottom: 0;right: 0;";document.documentElement.insertBefore(e,document.documentElement.firstChild);var t={width:e.offsetWidth,height:e.offsetHeight};document.documentElement.removeChild(e);return t};var w=function(e,t,i,s,o){t=t||r.popoverDeleteDelay;if(i===null||i!==false)i=true;var u,a,f;if(typeof e==="string"){if(e.toLowerCase()==="iphone"){f="<320px"}else if(e.toLowerCase()==="ipad"){f="<768px"}else{f=e}if(f.charAt(0)===">"){a="min"}else if(f.charAt(0)==="<"){a="max"}else{a=null}var l=a?"("+a+"-width: "+f.substring(1)+")":f;u=window.matchMedia(l)}else{u=e}if(u.media&&u.media==="invalid")return{added:false,mq:u,listener:null};var c=a==="min",h=a==="max";s=s||E(i,t,c,function(e){e.addClass("fixed-bottom")});o=o||E(i,t,h,function(){});var p=function(e){if(e.matches){s(i,n)}else{o(i,n)}};u.addListener(p);p(u);r.breakpoints[e]={added:true,mq:u,listener:p};return r.breakpoints[e]};var E=function(e,t,n,r){return function(e,i){var s;if(e){s=i.close();i.updateSetting("activateCallback",r)}setTimeout(function(){i.updateSetting("positionContent",n);if(e)i.activate(s)},t)}};var S=function(e,t){var n=null,i,s=false;if(typeof e==="string"){mqFound=r.breakpoints[e]!==undefined}else{for(i in r.breakpoints){if(r.breakpoints.hasOwnProperty(i)&&r.breakpoints[i].mq===e){mqFound=true;break}}}if(mqFound){var o=r.breakpoints[i||e];if(t){t({matches:false})}else{o.listener({matches:false})}o.mq.removeListener(o.listener);delete r.breakpoints[i||e]}return mqFound};var x=function(e,t){var n;if(typeof e==="string"){n=r[e];r[e]=t}else{n={};for(var i in e){if(e.hasOwnProperty(i)){n[i]=r[i];r[i]=e[i]}}}return n};var T=function(e){return r[e]};e(document).ready(function(){i();e(document).on("mouseenter",".footnote-button",f);e(document).on("touchend click",l);e(document).on("mouseout",".hover-instantiated",p);e(document).on("keyup",d);e(window).on("scroll resize",m)});n={close:function(e,t){return v(e,t)},activate:function(e){return h(e)},reposition:function(){return m()},addBreakpoint:function(e,t,n,r,i){return w(e,t,n,r,i)},removeBreakpoint:function(e,t){return S(e,t)},getSetting:function(e){return T(e)},updateSetting:function(e,t){return x(e,t)}};return n}})(jQuery);$(function() {
  
  var postURLs,
      isFetchingPosts = false,
      shouldFetchPosts = true,
      postsToLoad = $(".posts").children().length,
      loadNewPostsThreshold = 3000;
  
  // Load the JSON file containing all URLs
  $.getJSON('/all-posts.json', function(data) {
    postURLs = data["posts"];
    
    // If there aren't any more posts available to load than already visible, disable fetching
    if (postURLs.length <= postsToLoad)
      disableFetching();
  });
	
  // If there's no spinner, it's not a page where posts should be fetched
  if ($(".infinite-spinner").length < 1)
    shouldFetchPosts = false;
	
  // Are we close to the end of the page? If we are, load more posts
  $(window).scroll(function(e){
    if (!shouldFetchPosts || isFetchingPosts) return;
    
    var windowHeight = $(window).height(),
        windowScrollPosition = $(window).scrollTop(),
        bottomScrollPosition = windowHeight + windowScrollPosition,
        documentHeight = $(document).height();
    
    // If we've scrolled past the loadNewPostsThreshold, fetch posts
    if ((documentHeight - loadNewPostsThreshold) < bottomScrollPosition) {
      fetchPosts();
    }
  });
  
  // Fetch a chunk of posts
  function fetchPosts() {
    // Exit if postURLs haven't been loaded
    if (!postURLs) return;
    
    isFetchingPosts = true;
    
    // Load as many posts as there were present on the page when it loaded
    // After successfully loading a post, load the next one
    var loadedPosts = 0,
        postCount = $(".posts").children().length,
        callback = function() {
          loadedPosts++;
          var postIndex = postCount + loadedPosts;
          
          if (postIndex > postURLs.length-1) {
            disableFetching();
            return;
          }
          
          if (loadedPosts < postsToLoad) {
            fetchPostWithIndex(postIndex, callback);
          } else {
            isFetchingPosts = false;
          }
        };
		
    fetchPostWithIndex(postCount + loadedPosts, callback);
  }
	
  function fetchPostWithIndex(index, callback) {
    var postURL = postURLs[index];
		
    $.get(postURL, function(data) {
      $(data).find(".post").appendTo(".posts");
      callback();
    });
  }
  
  function disableFetching() {
    shouldFetchPosts = false;
    isFetchingPosts = false;
    $(".infinite-spinner").fadeOut();
  }
	
});
;/*!
 * jScroll - jQuery Plugin for Infinite Scrolling / Auto-Paging - v2.2.4
 * http://jscroll.com/
 *
 * Copyright 2011-2013, Philip Klauzinski
 * http://klauzinski.com/
 * Dual licensed under the MIT and GPL Version 2 licenses.
 * http://jscroll.com/#license
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * @author Philip Klauzinski
 * @requires jQuery v1.4.3+
 */
(function(b){b.jscroll={defaults:{debug:false,autoTrigger:true,autoTriggerUntil:false,loadingHtml:"<small>Loading...</small>",padding:0,nextSelector:"a:last",contentSelector:"",pagingSelector:"",callback:false}};var a=function(e,g){var o=e.data("jscroll"),n=(typeof g==="function")?{callback:g}:g,p=b.extend({},b.jscroll.defaults,n,o||{}),c=(e.css("overflow-y")==="visible"),l=e.find(p.nextSelector).first(),v=b(window),h=b("body"),q=c?v:e,m=b.trim(l.attr("href")+" "+p.contentSelector);e.data("jscroll",b.extend({},o,{initialized:true,waiting:false,nextHref:m}));r();k();t();function k(){var x=b(p.loadingHtml).filter("img").attr("src");if(x){var w=new Image();w.src=x}}function r(){if(!e.find(".jscroll-inner").length){e.contents().wrapAll('<div class="jscroll-inner" />')}}function d(w){if(p.pagingSelector){var x=w.closest(p.pagingSelector).hide()}else{var x=w.parent().not(".jscroll-inner,.jscroll-added").addClass("jscroll-next-parent").hide();if(!x.length){w.wrap('<div class="jscroll-next-parent" />').parent().hide()}}}function j(){return q.unbind(".jscroll").removeData("jscroll").find(".jscroll-inner").children().unwrap().filter(".jscroll-added").children().unwrap()}function i(){r();var D=e.find("div.jscroll-inner").first(),B=e.data("jscroll"),C=parseInt(e.css("borderTopWidth")),y=isNaN(C)?0:C,x=parseInt(e.css("paddingTop"))+y,A=c?q.scrollTop():e.offset().top,z=D.length?D.offset().top:0,w=Math.ceil(A-z+q.height()+x);if(!B.waiting&&w+p.padding>=D.outerHeight()){f("info","jScroll:",D.outerHeight()-w,"from bottom. Loading next request...");return u()}}function s(w){w=w||e.data("jscroll");if(!w||!w.nextHref){f("warn","jScroll: nextSelector not found - destroying");j();return false}else{t();return true}}function t(){var w=e.find(p.nextSelector).first();if(p.autoTrigger&&(p.autoTriggerUntil===false||p.autoTriggerUntil>0)){d(w);if(h.height()<=v.height()){i()}q.unbind(".jscroll").bind("scroll.jscroll",function(){return i()});if(p.autoTriggerUntil>0){p.autoTriggerUntil--}}else{q.unbind(".jscroll");w.bind("click.jscroll",function(){d(w);u();return false})}}function u(){var x=e.find("div.jscroll-inner").first(),w=e.data("jscroll");w.waiting=true;x.append('<div class="jscroll-added" />').children(".jscroll-added").last().html('<div class="jscroll-loading">'+p.loadingHtml+"</div>");return e.animate({scrollTop:x.outerHeight()},0,function(){x.find("div.jscroll-added").last().load(w.nextHref,function(A,z,B){if(z==="error"){return j()}var y=b(this).find(p.nextSelector).first();w.waiting=false;w.nextHref=y.attr("href")?b.trim(y.attr("href")+" "+p.contentSelector):false;b(".jscroll-next-parent",e).remove();s();if(p.callback){p.callback.call(this)}f("dir",w)})})}function f(w){if(p.debug&&typeof console==="object"&&(typeof w==="object"||typeof console[w]==="function")){if(typeof w==="object"){var y=[];for(var x in w){if(typeof console[x]==="function"){y=(w[x].length)?w[x]:[w[x]];console[x].apply(console,y)}else{console.log.apply(console,y)}}}else{console[w].apply(console,Array.prototype.slice.call(arguments,1))}}}b.extend(e.jscroll,{destroy:j});return e};b.fn.jscroll=function(c){return this.each(function(){var f=b(this),e=f.data("jscroll");if(e&&e.initialized){return}var d=new a(f,c)})}})(jQuery);