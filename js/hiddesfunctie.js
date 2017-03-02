$(document).ready(function () {
  // (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);mobile = jQuery.browser.mobile;
  if (/Mobi/.test(navigator.userAgent)) {mobile = true;}else{mobile=false}

  var smallscreen = false;if($(window).width() <= 660){smallscreen = true;}

    $('.background-img').hide();
      $.get('https://hiddeschultze.nl/js/getlastIGpost.php', function(data) {
        var json = $.parseJSON(data);
        var instaurl = json.data[0].images.standard_resolution.url;
        var instadesc = json.data[0].caption.text;
        $('.background-img').fadeIn('fast');
        $('.background-img').css({'background-image' : 'url("' + instaurl + '")'});
        if(!mobile){$("#instabgdetails").html("<instaico></instaico>@hiddehs: " + instadesc)};
      })

    $("#instabgdetails").click(function () {
      window.open("https://instagram.com/hiddehs");
    })

    // loaded margin
    if(smallscreen != true){
      var content_titleheight = $("#portfolio .content_title").height();
      $("<style>")
      .prop("type", "text/css")
      .html("\
      header.loaded{\
        height: calc(100vh - " + content_titleheight + "px);\
      }")
      .appendTo("head");
      $("<style>")
      .prop("type", "text/css")
      .html("\
      #hiddespersoonlijkesite.headerloaded{\
        top: calc(100vh - " + content_titleheight + "px);\
      }")
      .appendTo("head");
    }


    // contactbg choose
    var random14 = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  $("#hiddespersoonlijkesite #contact background").css({"background-image" : "url('img/background/" + random14 + ".png')"})

  var thetypehiddeschultzetext = "hidde<point>.</point>&#8203;schultze<year><reg>®</reg></year>";

  if(mobile){
    // $('header').toggleClass('mobile');
    // $('#hiddespersoonlijkesite').toggleClass('mobile');
    if(smallscreen || $(window).width() <= '1024') var thetypehiddeschultzetext = "hidde<point>.</point>&#8203;schultze";
    $("footer").append('<i class="material-icons" title="je ziet atm de mobiele versie van hiddeschultze.nl">phone_iphone</i>');
  }else{
    $("footer").append('<i class="material-icons" title="je ziet atm de desktop versie van hiddeschultze.nl">computer</i>' )
  }


  $(window).scrollTop(0);
  $('html, body').animate({ scrollTop: 0 });
  var headerchanged = false;
  var hiddespersoonlijkesitetopstart = null;
  var firstloaded = false;

// type that shit
$("#contact typingcan").typed({
  strings: ["^300(mobiele) website", "^300promotie video","^300aftermovie", "^300logo ontwerp", "^300socialmedia ontwerp", "^300(nieuwe) website","^300(vernieuwde) website"],
  typespeed: 0,
  backspeed: 0,
  startDelay: 500,
  backDelay: 2000,
  loop: true,
  shuffle: true
})

$("#hiddeschultze_text").typed({
  strings: [thetypehiddeschultzetext],
  typespeed: 0,
  startDelay: 200,
  onStringTyped: function() {
    firstloaded = true;
    $(".typed-cursor").fadeOut('fast');
    $('header').toggleClass('loaded');
    $('#hiddespersoonlijkesite').toggleClass('headerloaded');
    // if(mobile){$('header').height('90vh');$('#hiddespersoonlijkesite').css({'top' : '90vh' });}else{$('header').height('70vh');$('#hiddespersoonlijkesite').css({'top' : '70vh' });}
    setTimeout(function () {
      $('#hiddespersoonlijkesite').css({'transition' : 'none' });
      hiddespersoonlijkesitetopstart = $("#hiddespersoonlijkesite").offset().top - $(window).scrollTop();
      // console.log('p' + hiddespersoonlijkesitetopstart);
      $("body").removeClass('locked');
    },500)


    $("#hiddeschultze_can").typed({
      strings: ['^200<pointing id="dev"></pointing>^500developer','^200<pointing id="desg"></pointing>^500designer','^200<pointing id="film"></pointing>^500filmmaker', ''],
      typespeed: 2,
      backDelay: 1500,
      loop: false,
      // shuffle: true,
      // startDelay: 1000,
      callback: function() {

        $("#hiddeschultze_can").typed({
          strings: ['^200<pointing id="dev"></pointing>^500developer<BR>^200<pointing id="desg"></pointing>^500designer<BR>^200<pointing id="film"></pointing>^500filmmaker'],
          typespeed: 0,
          backDelay: 1500,
          loop: false,
          // startDelay: 1000,
          callback: function() {
            $(".typed-cursor").fadeOut('fast')
          },
        });

      },
    });
  },
});

var incr=0

// start scrollfunction
$(window).scroll(function () {
  // console.log(firstloaded)
  if(firstloaded){
    var headertop = $("#hiddeschultze_block").position().top + 30;
    var standarddiff = hiddespersoonlijkesitetopstart - headertop;

    var psitetop = $("#hiddespersoonlijkesite").offset().top - $(window).scrollTop();
    var hiddespersoonlijkesitetop =  psitetop;

    var currentdiff = hiddespersoonlijkesitetop - headertop;
    var tussenruimte = currentdiff / standarddiff;
    var tussenrreverse = (1 - tussenruimte);

    if(smallscreen){
      if((tussenrreverse * 70) < 71){
        // aloritm
        $("menu").height((70 * tussenrreverse));
        if(smallscreen == true){
        }else{
          // $("menu").height((90 * tussenrreverse)*(Math.pow(1.1, tussenrreverse - 0.05) - 1)*10 + 'px');
        }
        $("#hiddeschultze_block").css({'opacity' : tussenruimte});
      }
    }else{
      if((tussenrreverse * 90) < 91){
        // aloritm
        $("menu").height((90 * tussenrreverse));
        if(smallscreen == true){
        }else{
          // $("menu").height((90 * tussenrreverse)*(Math.pow(1.1, tussenrreverse - 0.05) - 1)*10 + 'px');
        }
        $("#hiddeschultze_block").css({'opacity' : tussenruimte});
      }
    }



    if(psitetop < 0.5){
      if($('menu').hasClass('fixed') != true){

        // now at the top
        $('menu').addClass('fixed');
        $(".hiddeschultze_text").css({"top" : '0px'});
        if (smallscreen) {
          $("menu").height('75px');
          $("#hiddespersoonlijkesite").css({'padding-top' : '75px'});
        }else{
          $("#hiddespersoonlijkesite").css({'padding-top' : '90px'});
          $("menu").height('90px');
        }

      }
    }else{
      if($('menu').hasClass('fixed')){
        $('menu').removeClass('fixed');
        $("#hiddespersoonlijkesite").css({'padding-top' : '0'});
      }
    }

    if(tussenruimte < 0){
      // console.log('kleiner');
      if(headerchanged != true){
        $(".hiddeschultze_text").find('year').hide();

        if(smallscreen){
          $("#hiddeschultze_text").html('hidde<point>.</point>');
        }
        $(".hiddeschultze_text").addClass('menumode');
        $(".hiddeschultze_text").css({'opacity' : '0'});
        $(".hiddeschultze_text").detach().appendTo('.hiddeschultze_text_menuholder');
        $(".hiddeschultze_text.menumode").animate({'opacity' : 1}, 400, function () {
        });

        headerchanged = true
      }
      if(psitetop > 0){
        // $(".hiddeschultze_text").css({"top" : psitetop + 'px'})
      }
    }else{
      if(headerchanged = true){
        $(".hiddeschultze_text").removeClass('menumode');
        $(".hiddeschultze_text").find('year').show();
        $(".hiddeschultze_text").detach().appendTo('.hiddeschultze_text_standardholder');
        if($('.hamburger').hasClass('is-active')) $('.hamburger').click();
        if(smallscreen){
          $("#hiddeschultze_text").html('hidde<point>.</point>&#8203;schultze');
        }
        headerchanged = false;
      }
    }

    // currentpagechange
    var contacttotop = ($('#contact').offset().top - 90 - $(window).scrollTop()) / $(window).height() * 100;
    var porttotop = ($('#portfolio').offset().top - 90 - $(window).scrollTop()) / $(window).height() * 100;
    if(contacttotop < 45){
      $('li').removeClass('active');
      $('li.menu_item:contains(".contact")').addClass('active');
    }else if(porttotop < 45){
      $('li').removeClass('active');
      $('li.menu_item:contains(".portfolio")').addClass('active');
    }


  }
})
//endscrollfunction

$(".hamburger").click(function () {
  $(this).toggleClass('is-active');
  $('#hiddespersoonlijkesite menu').toggleClass('mobilemenu');
  $('.menulinks').fadeToggle('fast');
})
// menuitemclick
$(".menu_item").click(function () {
  var gotopart = $(this).text().split('.')[1];

  $('html, body').animate({
    scrollTop: $("#" + gotopart).offset().top - 90
  }, 500);

  $('li').removeClass('active');
  $(this).addClass('active');
  if($(".hamburger").css('display') == "block"){$(".hamburger").click()}
})



// PORTFOLIO FUNCTIONS

// initialize porto items

// FETCH/initialize ALL data

var int = 0;
var maxint = 5;
if(smallscreen) maxint = 2;
var portoitemtemplate = $(".port_item_template").html();
// console.log(portoitemtemplate);
function getPortfolioHidde() {

  $.getJSON( "../hiddesdata.json", function( data ) {

    var maxrowitems = Math.floor((data.portfolio).length / 3);
    var thisrowitems = 1;
    var currentrow = 1;

    for (i = 0; i <= (data.portfolio).length; i++) {
      if(thisrowitems < maxrowitems){
        $(".col-" + currentrow).append(portoitemtemplate);
        thisrowitems++;
      }else{
        thisrowitems = 0;
        currentrow++;
      }
    }

    $('#portfolio .port_item').each(function () {
      if(data.portfolio[int] != null && int <= maxint){
      var projectname = data.portfolio[int].name;
      var projecttype = data.portfolio[int].type;
      var projectdescription = data.portfolio[int].description;

      var linkbool = data.portfolio[int].link;
      var ownerbool = data.portfolio[int].owner;


      $(this).find('.porto_item_logo').attr('src' , 'img/portologos/' + projectname.toLowerCase() + '.png');
      $(this).find('.porto_item_over_title').text(projecttype);
      $(this).find('.porto_item_over_desc').prepend(projectdescription);

      if(linkbool){
        var linkurl = data.portfolio[int].linkurl;
        $(this).find('.porto_item_over_desc_link').show();
        $(this).find('linking').text(linkurl);
      }else{
        $(this).find('.porto_item_over_desc_link').hide();
      }
      if(ownerbool){
        $(this).find('.porto_item_over_desc_owner').show();
        $(this).find('owner').text('eigenaar');
      }else{
        $(this).find('.porto_item_over_desc_owner').hide();
      }
      if(projecttype == 'film'){
        var projectfilmid = data.portfolio[int].video;
        $(this).find('.porto_item_over_desc_film').show();
        $(this).find('.porto_item_over_desc_film').attr('id', projectfilmid);
      }else{
        $(this).find('.porto_item_over_desc_film').hide();
      }
      // all descriptions set now applying max height
      }

      // remove mobile extra portoimages
      if(int > maxint){
        $(this).hide();
      }else{
        $(this).show();
      }
      int++;

    })

    var loadedImgNum = 0;
    var portoimages = $('.porto_item_logo');
    portoimages.on('load', function(){
      loadedImgNum = loadedImgNum + 1;
      if (loadedImgNum == (maxint + 1)) {
        var int = 0;
        $('#portfolio .port_item').each(function () {

          if(int <= maxint){
            var theportheight = $(this).height();
            $(this).height(theportheight);
            $(this).find('.porto_item_over').toggleClass('locked');
          }
          int++;

        })
        loadedImgNum=0;
      }
    });


  });
}




  getPortfolioHidde();


$(".porto_more").unbind('click').click(function () {
  maxint = 5;
  int = 0;
  loadedImgNum = 0;
  getPortfolioHidde();
  $(this).fadeOut('fast');
})

$(document).on('mouseover mouseout', ".port_item", function () {
  $(this).toggleClass('hover');
})

$(document).on('mouseover', ".port_item", function () {
  var descobj = $(this).find('.porto_item_over_desc');
  var el = $(this).find('.porto_item_over_desc'),
      curHeight = el.height(),
      autoHeight = el.css('height', 'auto').height();
  el.height(curHeight).animate({height: autoHeight}, 1);
})
$(document).on('mouseleave', ".port_item",function () {
  var descobj = $(this).find('.porto_item_over_desc');
  $(descobj).animate({
    height: 0
  },1);
})
$(document).on('mouseover mouseout', ".porto_item_over_desc_link", function() {
  $(this).find('.porto_item_over_desc_link').toggleClass('hover');
})
$(document).on('mouseover mouseout', ".porto_item_over_desc_film", function() {
  $(this).find('.porto_item_over_desc_film').toggleClass('hover');
})
$(document).on('click', "linking", function() {
  window.open('http://' + $(this).text());
})
$(document).on('click', "div.porto_item_over_desc_film", function() {
  var filmid = $(this).attr('id');
  if(smallscreen){
    window.open("https://youtu.be/"+filmid);
  }else{
    $('.ytb-filmmaker').hide();
    $('.ytb-filmmaker').fadeIn('slow');

    // initialize ytb
    $('.ytb-filmmaker_holder').append('<iframe src="https://www.youtube.com/embed/' + filmid + '?rel=0&amp;showinfo=0&color=white&autoplay=1" frameborder="0" allowfullscreen></iframe>')

    $('.ytb-filmmaker_holder').css({'top' : (($(window).height() - $('.ytb-filmmaker_holder').outerHeight()) / 2) + 'px'})
  }
})



$(".ytb-filmmaker").click(function () {
  if($(this).attr("class") !== "ytb-filmmaker_holder"){
    $('.ytb-filmmaker').fadeOut('slow' , function () {
      $('.ytb-filmmaker_holder iframe').remove();
    });
  }
})



// socialize

$(".social_block_item").each(function () {
  // console.log($(this).attr('id'))
  $(this).css({'background-image' : 'url(img/socialicon/' + $(this).attr('id') + '.svg)'});
})
  $(".social_block_item").mouseover(function () {
    if($(this).attr('id') == 'insta'){
      $(this).css({'background-image' : 'url(img/socialicon/' + $(this).attr('id') + 'h.png)'});
    }else{
      $(this).css({'background-image' : 'url(img/socialicon/' + $(this).attr('id') + 'h.svg)'});
    }
    $(this).addClass('hover');
  })
  $(".social_block_item").mouseleave(function () {
    $(this).css({'background-image' : 'url(img/socialicon/' + $(this).attr('id') + '.svg)'});
    $(this).removeClass('hover');
  })
  $(".social_block_item").click(function () {
    window.open($(this).attr('href'));
  })
$("mail").click(function () {
  window.open('mailto:hello@hiddeschultze.nl');
})


// socialformfunctions

$(".submit_social_form").hover(function () {
  $(this).parent().toggleClass('sub_hover');
  $(this).find('txt').toggle();
})
$("textarea[name='message']").focus(function () {
    $(this).parent().addClass('active');
})

$("input").focusout(function () {
  $(this).parent().removeClass('input_focus');
})
// $("textarea[name='message']").focusout(function () {
//   // alert($(this).val())
//   if($(this).val().length === 0){
//     $(this).parent().removeClass('active');
//   }
// })
$("input").focus(function () {
  $(this).parent().addClass('input_focus');
})
$(".submit_social_form").mouseover(function () {
  $("input").blur();
  $("input").removeClass('input_focus');
});
$(".submit_social_form").click(function () {
  $("#submit_social_form_placehold").click();
})

$("footer year").html(new Date().getFullYear());

})








// $("#hiddeschultze_block").css({'top':($(window).height() / 2)-($("#hiddeschultze_block").height() / 4)});
// $("#hiddeschultze_block").css({'top':($(window).height() / 2)-($("#hiddeschultze_block").height()/2)});
