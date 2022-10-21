function loginAmbre() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user == "ambre" && pass == "100207") {
        urlAmbre();
        return true;
    } else {
        return false;
        }
    }

function urlAmbre() {
    window.location.href = "../pages/ambre.html";
}

function loginElias() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user == "elias" && pass == "010212") {
        urlElias();
        return true;
    } else {
        return false;
        }
}

function errorLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user == "elias" && pass == "010212" || user == "ambre" && pass == "100207") {
        return true;
    } else {
        alert('identifiant ou mot de passe invalid');
    }
}

function urlElias() {
    window.location.href = "../pages/elias.html";
}

function redirectHome() {
    window.location.href = "../index.html";
}

function reset_checkbox() {
    const clist = document.getElementsByClassName('box');

    for (let i = 0; i < clist.length; i++) {
        clist[i].checked = false;
    }
    localStorage.clear();
}

let boxes = document.getElementsByClassName('box').length;

function save() {	
    for(let i = 1; i <= boxes; i++){
	    var checkbox = document.getElementById(String(i));
        localStorage.setItem("checkbox" + String(i), checkbox.checked);	
    }
}

//for loading
for(let i = 1; i <= boxes; i++){
    if(localStorage.length > 0){
        var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
        document.getElementById(String(i)).checked = checked;
    }
}
window.addEventListener('change', save);