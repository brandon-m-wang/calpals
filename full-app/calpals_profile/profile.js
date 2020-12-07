const img = document.getElementById('pf-pic')

function post() {
    const postheader = document.createElement("div");
    postheader.classList.add("post-header");
    postheader.innerHTML = document.getElementById("postheaderref").innerHTML;
    const postcontent = document.createElement("div");
    postcontent.classList.add("post");
    postcontent.innerHTML = document.getElementById("content").value;
    const totalcontent = document.createElement("div");
    totalcontent.innerHTML = postheader.outerHTML + postcontent.outerHTML;
    console.log(postheader.outerHTML);
    console.log(postcontent.outerHTML);
    document.getElementById("main-body").appendChild(totalcontent);
}

function removepost() {
    let main = document.getElementById("main-body");
    main.removeChild(main.lastElementChild);
}

window.onload = function () {
    return getPfp()
}

function getPfp () {
    auth.onAuthStateChanged(user => {
        if (user) {
            firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
                document.getElementById('pf-pic').src = imgUrl;
            })
        } else {
            console.log('user logged out');
        }
    });
}
