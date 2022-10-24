let boxs = document.getElementsByClassName('check').length;

function saveElias() {	
    for(let i = 1; i <= boxs; i++){
	    const box = document.getElementById(String(i));
        localStorage.setItem("radio" + String(i), box.checked);	
    }
}

//for loading
for(let i = 1; i <= boxs; i++){
    if(localStorage.length > 0){
        const check = JSON.parse(localStorage.getItem("radio" + String(i)));
        document.getElementById(String(i)).checked = check;
    }
}
window.addEventListener('change', saveElias);

function reset_radio() {
    const clist = document.getElementsByClassName('check');

    for (let i = 0; i < clist.length; i++) {
        clist[i].checked = false;
    }
    localStorage.clear();
}