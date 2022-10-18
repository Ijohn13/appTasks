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
    window.location.href = "../ambre/ambre.html";
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

function urlElias() {
    window.location.href = "../elias/elias.html";
}

function redirectHome() {
    window.location.href = "../home.html";
}

function reset_checkbox() {
    window.location.reload();
}
