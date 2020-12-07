let file = {};

function reload (){
    location.reload();
}

window.onload = function () {
    return getEverything()
}

function getEverything() {
    auth.onAuthStateChanged(user => {
        if (user) {
            firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
                document.getElementById('profile-pic').src = imgUrl;
            })
            firebase.storage().ref('users/' + user.uid + '/firstname.txt').getDownloadURL().then(firstname => {
                fetch(firstname).then(function (response) {
                    response.text().then(function (text) {
                        document.getElementById('fname').value = text;
                    })
                })
            })
            firebase.storage().ref('users/' + user.uid + '/pronouns.txt').getDownloadURL().then(pronouns => {
                fetch(pronouns).then(function (response) {
                    response.text().then(function (text) {
                        document.getElementById('pronouns').value = text;
                    })
                })
            })
            firebase.storage().ref('users/' + user.uid + '/gender.txt').getDownloadURL().then(gender => {
                fetch(gender).then(function (response) {
                    response.text().then(function (text) {
                        document.getElementById('gender').value = text;
                    })
                })
            })
            firebase.storage().ref('users/' + user.uid + '/username.txt').getDownloadURL().then(username => {
                fetch(username).then(function (response) {
                    response.text().then(function (text) {
                        document.getElementById('user_name').value = text;
                        document.getElementById('username').innerHTML = text;
                    })
                })
            })
            firebase.storage().ref('users/' + user.uid + '/address.txt').getDownloadURL().then(username => {
                fetch(username).then(function (response) {
                    response.text().then(function (text) {
                        document.getElementById('address').value = text;
                    })
                })
            })
        } else {
            console.log('user logged out');
        }
    });
}

function chooseFile(e) {
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('user logged in: ', user);
            var user = firebase.auth().currentUser;
            file = e.target.files[0];
            firebase.storage().ref('users/' + user.uid + '/profile.jpg').put(file)
            firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
                document.getElementById('profile-pic').src = imgUrl;
            })
        } else {
            console.log('user logged out');
        }
    });
}

function saveChanges() {
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('user logged in: ', user);
            var user = firebase.auth().currentUser;
            firstname = document.getElementById('fname').value;
            firebase.storage().ref('users/' + user.uid + '/firstname.txt').putString(firstname)
            firebase.storage().ref('users/' + user.uid + '/firstname.txt').getDownloadURL().then(firstname => {
                fetch(firstname).then(function (response) {
                    response.text().then(function (text) {
                        document.getElementById('fname').value = text;
                    })
                })
            })
            pronouns = document.getElementById('pronouns').value;
            firebase.storage().ref('users/' + user.uid + '/pronouns.txt').putString(pronouns)
            firebase.storage().ref('users/' + user.uid + '/pronouns.txt').getDownloadURL().then(pronouns => {
                fetch(pronouns).then(function (response) {
                    response.text().then(function (text) {
                        document.getElementById('pronouns').value = text;
                    })
                })
            })
            gender = document.getElementById('gender').value;
            firebase.storage().ref('users/' + user.uid + '/gender.txt').putString(gender)
            firebase.storage().ref('users/' + user.uid + '/gender.txt').getDownloadURL().then(gender => {
                fetch(gender).then(function (response) {
                    response.text().then(function (text) {
                        document.getElementById('gender').value = text;
                    })
                })
            })
            username = document.getElementById('user_name').value;
            firebase.storage().ref('users/' + user.uid + '/username.txt').putString(username)
            firebase.storage().ref('users/' + user.uid + '/username.txt').getDownloadURL().then(username => {
                fetch(username).then(function (response) {
                    response.text().then(function (text) {
                        document.getElementById('user_name').value = text;
                    })
                })
            })
            address = document.getElementById('address').value;
            firebase.storage().ref('users/' + user.uid + '/address.txt').putString(address)
            firebase.storage().ref('users/' + user.uid + '/address.txt').getDownloadURL().then(username => {
                fetch(username).then(function (response) {
                    response.text().then(function (text) {
                        document.getElementById('address').value = text;
                    })
                })
            })
            location.reload();
        } else {
            console.log('user logged out');
        }
    });
}