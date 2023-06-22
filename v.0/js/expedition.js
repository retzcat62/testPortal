// HTML document is loaded. DOM is ready.
$(window).on("load", function(){     
"use strict";

// load dom ready then function
$.ready.then(function(){				  

// miscellaneous var 
var loader = $('.preloader');
var allelement = $('div, h1, h2, h3, h4, h5, p, ul, li, a, i, button');
var holdside = $('.holdsidebar');

// wrapper var
var expeditionpage = $('.expedition-page');
var whitepage = $('.white-page');

// page var 
var expeditionhome = $('.contentexpedition');
var bgslideshow = $('#bgslideshow, #particles, .bgexpedition');
var slidtext = $('#slidertext');

// button var 
var animmenu = $('#nav-menu li');
var listmenu = $('#nav-menu li a'); 
var mainmenu = $('.main-menu');
var overlaymenu = $('.overlay-menu');
var iconnav = $('#nav-icon');
var galnav = $('#opengal');
var galclose = $('.nav-bottom-close, .btn-content');

//gallery
var maingall = $('.bottom-option');

//nicescroll var
var nice = $(".main-content");

// start function
loader.fadeOut('fast', function() {					

 // call function scroll when page has loaded
 nicescr();
 // call function all element animation when page has loaded
 page();
 
//block header when scroll
nice.on('scroll', function(){
  if(nice.scrollTop() + nice.height() == nice.height()){
    $('.nav-top-block').removeClass('nav-block-show');
  } 
  else{
    $('.nav-top-block').addClass('nav-block-show');
  }
});

	
  // navigation menu
  iconnav.on('click', function(e) {
      e.preventDefault();
	  holdside.show();
	  galnav.fadeIn(1000);
	  maingall.addClass('fadeOutDown').fadeOut(1500);
      $(this).toggleClass('open');
	  mainmenu.toggleClass('menu-show');
	  overlaymenu.fadeToggle("slow");
	  expeditionhome.toggleClass('minimize');
	  animmenu.each(function(i){
      var t = $(this);
      setTimeout(function(){ t.toggleClass('show-menu'); }, (i+1) * 100);
	     overlaymenu.on('mousedown', function(e) {
	       e.preventDefault();
           iconnav.removeClass('open');
	       mainmenu.removeClass('menu-show');
	       overlaymenu.fadeOut("slow");
	       expeditionhome.removeClass('minimize');
	      animmenu.removeClass('show-menu'); 
          });
        });
	 setTimeout(function(){holdside.hide();}, 1000);
  });
      
      

  
  // navigation slide up gallery
  galnav.on('click', function(e) {
	$(this).fadeOut(500);
	maingall.removeClass('fadeOutDown').fadeIn(1000).addClass('animfadeInUpBig');
  });
  // navigation slide down gallery
  galclose.on('click', function(e) {
	galnav.fadeIn(500);
	maingall.addClass('fadeOutDown').fadeOut(1500);
  });

 // main animation all element
 function page(){
     $([allelement]).each(function(index, foundElements) {
           foundElements.each(function(element) {
            var $this = $(this);
            var time = $(this).attr('data-time');
            setTimeout(function() {
            $this.addClass('intro');
            }, time);
        });
        setTimeout(function () {
        holdside.hide();}, 2500
        );
		$('.opening').hide();
    });
 
  
 // subscribe
 $("form#subscribe").submit(function() {
 $("form#subscribe .subscribeerror").remove();
 var s = !1;
 if ($(".subscribfield").each(function() {
   if ("" == jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribeerror">Please fill your email</span>'), $(this).addClass("inputError"), s = !0;
   else if ($(this).hasClass("subscribeemail")) {
    var e = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    e.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribeerror">Please fill valid email</span>'), $(this).addClass("inputError"), s = !0)
   }
  }), !s) {
  $("form#subscribe input.submit").fadeOut("slow", function() {
   $(this).parent().append("")
  });
  var e = $(this).serialize();
  $.post($(this).attr("action"), e, function() {
   $("form#subscribe").fadeIn(1e3, function() {
    $(".subscribesuccess").fadeIn(1e3)
   }), setTimeout(function() {
    $("#subscribeemail").val(""), $(".subscribesuccess").hide()
   }, 2500)
   })
  }
  return !1
 });


 // contact form
 $(function(){$('#send').on('click', function(e) {
 e.preventDefault();var e=$('#name').val(),a=$('#email').val(),s=$('#message').val(),r=!1;if(0==a.length||"-1"==a.indexOf("@")||"-1"==a.indexOf( ".")){var r=!0;$("#error_email").fadeIn(500)}else $("#error_email").fadeOut(500);if(0==s.length){var r=!0;$("#error_message").fadeIn(500)}else $( "#error_message").fadeOut(500);return 0==r&&($("#send").attr({disabled:"true",value:"Loading..."}),$.ajax({type:"POST",url:"send.php",data:"name="+e+"&email="+a+"&subject=You Got Email&message="+s,success:function(e){"success"==e?($(".smart-btn").remove(),$("#mail_success").fadeIn(500)):($("#mail_failed").html(e).fadeIn(500),$("#send").removeAttr("disabled").attr("value","send").remove())}})),!1})});

 } // function end

 // reset animation
 function pagereset(){
    allelement.removeClass('intro');
    $(':input','#form1').val('');
    $('#error_message, #error_email', '.message').fadeOut(1500);
    $('#error_message').fadeOut(500);
    $('#error_email').fadeOut(500);
    $('#mail_success').fadeOut(500);
	$("#subscribeemail").val("");
	$("form#subscribe .subscribeerror").remove();
 }

});


// plugin start
//nicescroll
 function nicescr(){
  nice.hover(function(){
  nice.niceScroll({touchbehavior:false,boxzoom:false,horizrailenabled:false,cursorcolor:"#fff",cursorborder:"rgba(0, 0, 0, 0)", cursoropacitymax:0.5,  cursorwidth:4}).resize();
 });	
 }
 
 // countDown
 $(function(){
 $('#given_date').countdowntimer({
  dateAndTime : "2018/01/01 00:00:00",
  size : "lg",
  regexpMatchFormat: "([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})",
  regexpReplaceWith: "$1<sup>days</sup> $2<sup>hours</sup> $3<sup>mnt</sup> $4<sup>sec</sup>"
   });
 });

//slideshow background
$(function() {
    var slideBegin = 4000,
        transSpeed = 1000,
        simple_slideshow = bgslideshow,
        listItems = simple_slideshow.children('.bgexpedition'),
        listLen = listItems.length,
        i = 0,
        changeList = function() {
            listItems.eq(i).fadeOut(transSpeed);
            i += 1, i === listLen && (i = 0), listItems.eq(i).fadeIn(transSpeed);
        };
    listItems.not(':first').hide(), setInterval(changeList, slideBegin);
});

//slideshow text home
$(function() {
    var slideBegin = 3000,
        transSpeed = 500,
        simple_slideshow = slidtext,
        listItems = simple_slideshow.children('.main-text'),
        listLen = listItems.length,
        i = 0,
        changeList = function() {
            listItems.eq(i).fadeOut(transSpeed, function() {
                i += 1, i === listLen && (i = 0), listItems.eq(i).fadeIn(transSpeed)
            })
        };
    listItems.not(':first').hide(), setInterval(changeList, slideBegin);
});


// Magnific Popup img
$('.big-img').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: false
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});


// Magnific Popup dailymotion
$('.big-video').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      dailymotion: {
        index: 'dailymotion.com',
        id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if (m !== null) {
                if(m[4] !== undefined) {
                    return m[4];
                }
                return m[2];
            }
            return null;
        },
        src: 'http://www.dailymotion.com/embed/video/%id%'
      }
    }
  }
});

// Magnific Popup youtube
$('.big-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-with-zoom',
    removalDelay: 0,
    preloader: false,
    fixedContentPos: false,
    iframe: {
        patterns: {
            youtube: {
                src: 'http://www.youtube.com/embed/%id%?autoplay=1&rel=0'
            }
        }
    }
});

//Magnific Popup html
$('.detail-page').magnificPopup({					
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll'
	});

// Magnific Popup form
$('.popup-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#subscribeemail',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				$("#subscribeemail").val("");
	            $("form#subscribe .subscribeerror").remove();
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#subscribeemail';
				}
			}
		}
});

   
// owlCarousel testimonial
var owl = $("#owl-testimonial");
   owl.owlCarousel({
   items : 1,
   itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   itemsMobile : false,
   autoPlay : 3000,
   stopOnHover : true
});
   
// owlCarousel brand
var owl = $("#owl-brand");
   owl.owlCarousel({
   items : 5, 
   itemsDesktop : [1000,4], 
   itemsDesktopSmall : [900,3], 
   itemsTablet: [600,2],
   itemsMobile : false,
   autoPlay : 2000,
   stopOnHover : true
});	
   
// owlCarousel gallery
var owl = $("#owl-gal");
        owl.owlCarousel({
        navigation: true,
		autoPlay : 3000,
        stopOnHover : true,
		itemsDesktop : [1600,4],
		itemsDesktopSmall : [1024,3], 
        itemsTablet: [800,2],
        navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],

      });


});
});

// plugin end 
// HTML document loaded DOM end 