function viewPdf(){
    var button = document.getElementById("viewPdf");
    if (button.value=="View"){
        button.value = "Hide";
        button.innerHTML = "Hide";
        document.getElementById("showPdf").innerHTML = "<object data='Resume.pdf' type='application/pdf' width='100%' ></object>";
        button.setAttribute("class", "button is-primary is-active");
    }
    else{
    document.getElementById("showPdf").innerHTML = null;
    button.value = "View";  
    button.innerHTML = "View"; 
    button.setAttribute("class", "button is-active"); 
    }
}
function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
}