let boxes = document.getElementsByClassName('box').length;

function saveAmbre() {	
    for(let i = 1; i <= boxes; i++){
	    const checkbox = document.getElementById(String(i));
        localStorage.setItem("checkbox" + String(i), checkbox.checked);	
    }
}

//for loading
for(let i = 1; i <= boxes; i++){
    if(localStorage.length > 0){
        const checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
        document.getElementById(String(i)).checked = checked;
    }
}
window.addEventListener('change', saveAmbre);


function reset_checkbox() {
    const clist = document.getElementsByClassName('box');

    for (let i = 0; i < clist.length; i++) {
        clist[i].checked = false;
    }
    localStorage.clear();
}