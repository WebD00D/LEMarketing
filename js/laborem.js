$(document).ready(function(){

  // and the LE-Robot Says "EEE-nitilize the Parse!"
  Parse.initialize("yIHXb3Um6tiVf6e8NZGoQZqZLBH5eIfEHBora4fb", "oxPjuyuWdSTlsfhBpDlvoMefGEU4Y6BRdmOBb0lt");
    //initilizers
    $(".button-collapse").sideNav();
    $('select').material_select();
    $('.parallax').parallax();

    $('.your-class').slick({
      autoplay: true,
      arrows:false

  });

  $("#projectBudget").text("$" + $("#test5").val());

    hideServiceText();
    hideClientText();
      $(".maintext").show();
      $(".mainclienttext").show();
      $(".serviceheadliner").text("A Tailored Fit");
      $(".your-class").show();
      $("#closeit").hide();
      $("#closeit2").hide();
      $("#closeme").hide();
      $(".clientheadliner").text("Collaboration Is Key");

  //  $(".welcometext").typed({

    //    contentType: 'html',
      //  strings: ["Some text here", "followed by some more text", "<a href='#'>Click Me!</a>"],
      //  typeSpeed: 0,

        //showCursor: false
    //});

    function hideServiceText(){
      $("#brandidentitytext").hide();
      $("#brandanalysistext").hide();
      $("#branduitext").hide();
      $("#brandstrategytext").hide();
    }

    $("#closeme").mouseover(function(){
      $(this).css("cursor","pointer");
    })


    $(".LEButtonPink").mouseover(function(){
      $(this).css("cursor","pointer");
      $(this).addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function(){
        $(this).removeClass('animated bounce');
      });
    })

    $(".LEIcons").mouseover(function(){
      $(this).css("cursor","pointer");
      $(this).addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function(){
        $(this).removeClass('animated tada');
      });
    })

    $(".quote").mouseover(function(){
      $(this).css("cursor","pointer");
      $(this).addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function(){
        $(this).removeClass('animated pulse');
      });
    })

    $("#brandbookquestion").click(function(e){
      e.preventDefault();
      swal({
        title: "The Brand Book",
        text: "<p style='text-align:justify'>Starting January 2016, we will be offering a product called the Brand Book. The book will serve as an identity guideline for your company, outlining the following: <Br> <ol style='text-align:left'><li>Overview of brand, including history, vision and personality</li><li>Logo specifications and examples of usage</li><li>Typography palette</li><li>Color palette</li></ol></p>",
        html: true,
        confirmButtonText: "Cool",
        confirmButtonColor: "#000000"
      })
    })


    $("#btnSubmitInquiry").click(function(e){

      e.preventDefault();

      var name = $("#name").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      var deadline = $("#deadline").val();
      var deadlineReason = $("#deadlineReason").val();
      var projectBudget = $("#test5").val();

      //build inquiry details list
      var InquiryDetailHTML = '';

      if ($("#webapp").is(":checked")){
        InquiryDetailHTML += ' Website / Application  - '
      }
      if ($("#identiy").is(":checked")){
        InquiryDetailHTML += ' Brand Identity - '
      }
      if ($("#print").is(":checked")){
        InquiryDetailHTML += ' Print / Ad Design - '
      }
      if ($("#consult").is(":checked")){
        InquiryDetailHTML += ' Consultation - '
      }
      if ($("#workshop").is(":checked")){
        InquiryDetailHTML += ' Workshop / Speaking - '
      }
      if ($("#brandbook").is(":checked")){
        InquiryDetailHTML += ' BrandBook - '
      }

     var textToSend = "Inquiry Email\n" +
		"From: "+ name + "\n"+
		"Email: "+ email + "\n"+
		"Phone: "+ phone + "\n\n"+
		"Deadline: "+ deadline + "\n"+
    "Deadline Explanation: "+ deadlineReason + "\n"+
    "Project Budget: $"+ projectBudget + "\n"+
		"Looking For:\n" + InquiryDetailHTML;

    Parse.Cloud.run('sendMail', { msg: textToSend }, {
      success: function(result) {
            swal({   title: "Message Sent!",   text: "We'll be in touch with you soon!" ,   type: "success", confirmButtonText:"Okay",confirmButtonColor: "#34495e"});

      },
      error: function(error) {
        console.log(error);
        swal({   title: "Failed to Send!",   text: "Hmm something's not right." ,   type: "error",   confirmButtonText: "OK",confirmButtonColor: "#34495e" });
      }
    });





    })

    $("#test5").change(function(){
      $("#projectBudget").text("$" +$(this).val());
    })

    $(".materialboxed").mouseover(function(){
      $(this).addClass("z-depth-5");
    })
    $(".materialboxed").mouseout(function(){
      $(this).removeClass("z-depth-5");
    })


    $("#closeme").click(function(){
    hideServiceText();
    $(".maintext").show();
    $("#servicetext").show();
    $("#ourPassionIs").text("Story Telling");
    $("#closeme").hide();

    })

$(".headlinks").click(function(e){
  e.preventDefault();
  goToByScroll($(this).attr('data-page'));
})

$("#GoToPhase2").click(function(e){
    e.preventDefault();
    goToByScroll("Phase2");
})
$("#GoToPhase3").click(function(e){
    e.preventDefault();
    goToByScroll("Phase3");
})
$("#GoToInquire").click(function(e){
    e.preventDefault();
    goToByScroll("inquire");
})

$("#ShareYours").click(function(e){
    e.preventDefault();
    goToByScroll("inquire");
})

$("#learnmore").click(function(e){
  e.preventDefault();
  goToByScroll("ourApproach");
})


function goToByScroll(id){
       $('html,body').animate({
       scrollTop: $("#"+id).offset().top},
       'slow');
}



    $(".brand").mouseover(function(){
      $(this).css("cursor","pointer");
      $(this).addClass("z-depth-3");
    })
    $(".brand").mouseout(function(){
      $(this).css("cursor","pointer");
      $(this).removeClass("z-depth-3");
    })

    $(".brand").click(function(){
      hideServiceText();
      $("#ourPassionIs").text($(this).attr('data-headline'));
      $("#closeme").show();
      $("#servicetext").hide();
      var textid = $(this).attr('data-text');
      $("#"+textid).show();
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
      //unslickit();
      $("#closeit2").show();
      $(".clientheadliner").text("Brewrocket");
      $(".brewrockettext").show();
    })
    $(".bombshell").click(function(){
      //unslickit();
        hideClientText();
        $("#closeit2").show();
        $(".clientheadliner").text("Bombshell Salon");
        $(".bombshelltext").show();
    })
    $(".orinoco").click(function(){
    //  unslickit();
        hideClientText();
        $("#closeit2").show();
        $(".clientheadliner").text("Orinoco");
        $(".orinocotext").show();
    })
    $(".winstons").click(function(){
    //  unslickit();
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
