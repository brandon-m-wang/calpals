$(document).ready(function() {

    $('#pre-signup').on("click", function() {
        $('#sign-in-active').fadeOut("fast");
        $('#sign-up-active').delay("slow").fadeIn("fast");
        $('.active-box').css("left", "67vw");
    });

    $('#pre-signin').on("click", function() {
        $('#sign-up-active').fadeOut("fast");
        $('#sign-in-active').delay("slow").fadeIn("fast");
        $('.active-box').css("left", "47vw");
    });

});