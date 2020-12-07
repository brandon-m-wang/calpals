$(document).ready(function () {

    $('#pre-signup').on("click", function () {
        $('#sign-in-active').fadeOut("fast");
        $('#sign-up-active').delay("slow").fadeIn("fast");
        $('.active-box').css("left", "67vw");
    });

    $('#pre-signin').on("click", function () {
        $('#sign-up-active').fadeOut("fast");
        $('#sign-in-active').delay("slow").fadeIn("fast");
        $('.active-box').css("left", "47vw");
    });

});

function login() {

    const userEmail = document.getElementById("email_field").value;
    const userPass = document.getElementById("password_field").value;
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
            .then((user) => {
                window.location.href = "../homefeed/homefeed.html";
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                window.alert(errorMessage);
            });
    })
}

function signUp(){

		var email = document.getElementById("email");
		var password = document.getElementById("password");

		firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((user) => {
                window.location.href = "../homefeed/homefeed.html";
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                window.alert(errorMessage);
            });
	}
