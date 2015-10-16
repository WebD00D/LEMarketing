$(document).ready(function(){

    //initilizers
    $(".button-collapse").sideNav();
    $('#fullpage').fullpage();

    $(".welcometext").typed({

        contentType: 'html',
        strings: ["Some text here", "followed by some more text"],
        typeSpeed: 0,

        showCursor: false
    });


})
