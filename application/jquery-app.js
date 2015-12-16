$(document).ready(function(){
 //small_screen nav
 $("div.navigation_small li").on('mouseenter',function(){
   $("div.navigation_small li a").css('color','white');
   $(this).find('a').css('color','black');
 }).on('mouseleave',function(){
   $("div.navigation_small li a").css('color','white');
 })
 //Set current selection

  $(".navigation li a").click(function(){
    $(".navigation li a.current-nav").removeClass("current-nav");
    $(this).addClass("current-nav");
  });
//Add function to search box clear button
$('#searchNav').on('click',function(){
  $(".gsc-clear-button").click(function(){
    $("#searchBox").removeClass('in');
})
})

 //Add effect for index page
$(window).load(
  function(){
     var options = {
    animateThreshold: 0,
    scrollPollInterval: 50
};
$('.aniview').AniView(options);
  })
 $("div.mainBody").on("mouseenter","#factory",function(){
  $("#factory").attr("src","image/factory_fill.png");
}).on("mouseleave","#factory",function(){
   $("#factory").attr("src","image/factory.png");
 });


//game effect
 $("#gameNav").click(function(){
    $("body").css("background-image","url('image/marioBackground.jpg')");
    $("#mushroom, #marioFlower").fadeIn("slow");
    $("div.fb-comments").hide();
 });
 $("#portfolioNav,#aboutNav,.logo").click(function(){
    $("body").css("background-image","");
    $("#mushroom, #marioFlower").fadeOut("fast");
 });
 $("div.mainBody").on("click","div.colorpicker h1",function(){
      $("body").css("background-image","url('image/marioBackground.jpg')");
 });
 $("#galleryNav").click(function(){
    $("body").css("background-image","url('image/gallery_wall.jpg')");
    $("#mushroom, #marioFlower").fadeOut("fast");
    $("div.fb-comments").hide();
 });
 $("#mushroom").draggable({cursor: "pointer",zIndex: 100,containment: "body"},"enable");
 $("#marioFlower").draggable({cursor: "pointer",zIndex: 100,containment: "body"},"enable");

var interval;
 $("#gameNav").click(function(){
  startBouncing();
  setTimeout(stopBouncing,3000);
  });
 function startBouncing(){
  interval = setInterval(function(){ 
    $("#mushroom,#marioFlower").animate({"top":"+=50px"},600);
    $("#mushroom,#marioFlower").animate({"top":"-=50px"},600);
    },1200);
}
 function stopBouncing(){
    clearInterval(interval);
 }

//gallery effect
  $(".mainBody").on("click","#galleryTitle",function(){
    $("body").css("background-image","url('image/gallery_wall.jpg')");
    $("#galleryTitle").text("Famous Gallery");
  	$("div.galleryIntro h2.welcome").remove();
  	$("div.galleryIntro h1 span").remove();
  	$("div.galleryIntro h1").animate({fontSize:"60px"},'fast');
  	var text="<h2 class='welcome' style='text-align:center'><em> Welcome! </em></h2>"
  	$("div.galleryIntro h1").after(text);
  	$("div.sign").animate({marginLeft:"28%"},'fast');
  });
  
//google Map
    
    $(".mainBody").on("click","button.mapHide",function(){
      var $bt = $("button.mapHide");
    $("div#googleMap").fadeToggle();
    if($bt.text() == " Hide Map "){
    $bt.removeClass("btn-primary").addClass("btn-success");
    $bt.text(" Show Map ");
    }
    else{
      $bt.removeClass("btn-success").addClass("btn-primary");
    $bt.text(" Hide Map ");
    }
   })
//about

//backTop icon
   $('#backTop').backTop({
  'position' : 500,
  // scroll animation speed
  // red, white, black or green
  'color' : 'black',
});
//backTop Link
 $('a.backToTop').on('click',function(e){
  e.preventDefault();
  $('body').animate({'scrollTop':0},'600');
 })
//footer display
  $("footer a").attr('target','_blank');

});