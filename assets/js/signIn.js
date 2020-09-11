const engineerbtn = document.getElementById('engineer');
const managerbtn = document.getElementById('manager');
const container = document.getElementById('container');

engineerbtn.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

managerbtn.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function managerSubmit(){
    event.preventDefault();
var managerIds=[{id:"1111",pass:"abc"},{id:"1112",pass:"abc"}];
var inputId=document.getElementById("mngId").value;
var inputPass=document.getElementById("mngPass").value;
for(var i=0;i<managerIds.length;i++){
 if(inputId==managerIds[i].id && inputPass==managerIds[i].pass){
    window.location="dashboard.html";}
}
}
function engineerSubmit(){
    event.preventDefault();
    var engineerIds=[{id:"111",pass:"abc"},{id:"112",pass:"abc"}];
    var inputId=document.getElementById("engId").value;
    var inputPass=document.getElementById("engPass").value;
    for(var i=0;i<engineerIds.length;i++){
     if(inputId==engineerIds[i].id && inputPass==engineerIds[i].pass){
        window.location="engineerDashboard.html";}
    }
    }