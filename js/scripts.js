!function(){$("body").scrollspy({target:".fixed-top",offset:50}),(new WOW).init(),$("a.page-scroll").bind("click",function(e){var d=a(this);$("html, body").stop().animate({scrollTop:a(d.attr("href")).offset().top},1450,"easeInOutExpo"),preventDefault()})}(jQuery),$("#menuModal").on("hidden.bs.modal",function(){$("nav#topNav.navbar.navbar-default.navbar-fixed-top.bg-nav").css("display","block"),$("nav#topNav.navbar.navbar-default.bg-nav").css("display","block")});$("#menuModal").on("shown.bs.modal",function(){$("nav#topNav.navbar.navbar-default.navbar-fixed-top.bg-nav").css("display","none"),$("nav#topNav.navbar.navbar-default.bg-nav").css("display","none")});$(document).pjax("a#nav-back, a#nav-forward",{container:"#pjax-container",fragment:"#pjax-container"});window.NProgress&&NProgress.configure({showSpinner:true});$(document).on("pjax:send",function(){window.NProgress&&NProgress.start(),$("#menuModal").modal("hide"),$(".modal-backdrop").remove()});$(document).on("pjax:complete",function(){window.NProgress&&NProgress.done(true)});$(document).on("pjax:timeout",function(){preventDefault()});$(document).on("koken:lightbox:loading",function(){window.NProgress&&NProgress.start()});$(document).on("koken:lightbox:loaded",function(){NProgress.done(true)});jQuery(function(){jQuery(".smooth, .scrollme").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=jQuery(this.hash);b=b.length?b:jQuery("[name="+this.hash.slice(1)+"]");if(b.length){jQuery("html,body").animate({scrollTop:b.offset().top},1000);return false}}})});