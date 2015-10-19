$(document).ready(function(){

  // and the LE-Robot Says "EEE-nitilize the Parse!"
  Parse.initialize("yIHXb3Um6tiVf6e8NZGoQZqZLBH5eIfEHBora4fb", "oxPjuyuWdSTlsfhBpDlvoMefGEU4Y6BRdmOBb0lt");
    //initilizers
    $(".button-collapse").sideNav();
    $('select').material_select();

    $('#fullpage').fullpage({
       loopBottom: true

    });
    $('.your-class').slick({
      autoplay: true,
      arrows:false

  });

    hideServiceText();
    hideClientText();
      $(".maintext").show();
      $(".mainclienttext").show();
      $(".serviceheadliner").text("A Tailored Fit");
      $(".your-class").show();
      $("#closeit").hide();
      $("#closeit2").hide();
      $(".clientheadliner").text("Collaboration Is Key");
  //  $(".welcometext").typed({

    //    contentType: 'html',
      //  strings: ["Some text here", "followed by some more text", "<a href='#'>Click Me!</a>"],
      //  typeSpeed: 0,

        //showCursor: false
    //});

    function hideServiceText(){
      $(".maintext").hide();
      $(".thebrandbooktext").hide();
      $(".brandstrategytext").hide();
      $(".webexperiencestext").hide();
      $(".brandidentitytext").hide();
    }

    $("#closeit").mouseover(function(){
      $(this).css("cursor","pointer");
    })
    $("#closeit2").mouseover(function(){
      $(this).css("cursor","pointer");
    })

    $(".LEButton").mouseover(function(){
        $(this).css("cursor","pointer");
    })

    $("#closeit").click(function(){
    hideServiceText();
    $(".maintext").show();
    $(".serviceheadliner").text("A Tailored Fit");
      $("#closeit").hide();

    })

    $("#closeit2").click(function(){
      $('.your-class').slick('slickPlay');
    hideClientText();
    $(".mainclienttext").show();
    $(".clientheadliner").text("Collaboration Is Key");
      $("#closeit2").hide();
        $(".your-class").show();

    })

    $(".brandbook").mouseover(function(){
      $(this).css("cursor","pointer");
    })
    $(".brandstategy").mouseover(function(){
      $(this).css("cursor","pointer");
    })
    $(".webexperience").mouseover(function(){
      $(this).css("cursor","pointer");
    })
    $(".brandidentity").mouseover(function(){
      $(this).css("cursor","pointer");
    })

    $(".brewrocket").mouseover(function(){
      $(this).css("cursor","pointer");
    })
    $(".bombshell").mouseover(function(){
      $(this).css("cursor","pointer");
    })
    $(".orinoco").mouseover(function(){
      $(this).css("cursor","pointer");
    })
    $(".winstons").mouseover(function(){
      $(this).css("cursor","pointer");
    })

    $(".brewrocket").click(function(){
      hideClientText();
      unslickit();
      $("#closeit2").show();
      $(".clientheadliner").text("Brewrocket");
      $(".brewrockettext").show();
    })
    $(".bombshell").click(function(){
      unslickit();
        hideClientText();
        $("#closeit2").show();
        $(".clientheadliner").text("Bombshell Salon");
        $(".bombshelltext").show();
    })
    $(".orinoco").click(function(){
      unslickit();
        hideClientText();
        $("#closeit2").show();
        $(".clientheadliner").text("Orinoco");
        $(".orinocotext").show();
    })
    $(".winstons").click(function(){
      unslickit();
      hideClientText();
      $(".winstonstext").show();
      $("#closeit2").show();
      $(".clientheadliner").text("Winston's Humidor");
    })

    function hideClientText(){



      $(".mainclienttext").hide();
      $(".winstonstext").hide();
      $(".bombshelltext").hide();
      $(".brewrockettext").hide();
      $(".orinocotext").hide();
      $(".your-class").hide();
    }


    function unslickit(){
      $('.your-class').slick('slickPause');
    }


    $(".brandbook").click(function(){

      hideServiceText();
      $(".serviceheadliner").text("The Brand Book");
      $(".thebrandbooktext").show();
      $("#closeit").show();

    })
    $(".brandstategy").click(function(){
      hideServiceText();
      $(".serviceheadliner").text("Brand Strategy");
        $("#closeit").show();
        $(".brandstrategytext").show();
    })
    $(".webexperience").click(function(){
      hideServiceText();
        $(".serviceheadliner").text("Web Experiences");
        $(".webexperiencestext").show();
          $("#closeit").show();
    })
    $(".brandidentity").click(function(){
      hideServiceText();
        $(".serviceheadliner").text("Brand Identity");
              $(".brandidentitytext").show();
          $("#closeit").show();
    })

    $("#senddetails").click(function(){
      var optionselected = $(".selectbox option:selected").text();
      var email = $("#email").val();
      var company = $("#company").val();
      var message = "Message sent by " + email + " from " + company + " inquired about " + optionselected;
      sendItOut(message);
    })


    function sendItOut(textToSend){
      Parse.Cloud.run('sendMail', { msg: textToSend }, {
        success: function(result) {
            $("#messageText").text("Thanks! We'll be in touch soon.");
              $("#messageText").css("color","green");
      },
      error: function(error) {
              $("#messageText").text("Message failed to send.");
              $("#messageText").css("color","red");
    }
  });
}




})
