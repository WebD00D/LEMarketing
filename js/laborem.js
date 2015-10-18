$(document).ready(function(){

    //initilizers
    $(".button-collapse").sideNav();
    $('#fullpage').fullpage({
       loopBottom: true
    });

  //  $(".welcometext").typed({

    //    contentType: 'html',
      //  strings: ["Some text here", "followed by some more text", "<a href='#'>Click Me!</a>"],
      //  typeSpeed: 0,

        //showCursor: false
    //});


    $("#brandstrategyContainer").mouseover(function(){
      $("#brandstrategy").css({ 'background-color': 'white' });
    $("#brandstrategy").css('background-image', 'none');
    $("#brandstrategytext").removeClass("hide");
    $("#brandstrategyHeadline").css("color","black");

    })
    $("#brandstrategyContainer").mouseout(function(){
      $("#brandstrategy").css({ 'background-image': 'URL(https://www.mojandroid.sk/wp-content/uploads/2015/01/Black-And-White-Chess-Board-Android-Wallpaper.jpg)' });
    $("#brandstrategytext").addClass("hide");
    $("#brandstrategyHeadline").css("color","white");

    })



})
