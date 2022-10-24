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
