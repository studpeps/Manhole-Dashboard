var manholes=[{id:"100",location:"Place Abcz",DateToBeCompleted:"12-08-2020"},
{id:"101",location:"Place BCDE",DateToBeCompleted:"20-08-2020"},
{id:"102",location:"Place GH",DateToBeCompleted:"24-08-2020"},
{id:"103",location:"Place jdjkf",DateToBeCompleted:"24-08-2020"},
{id:"104",location:"Place fjvkx",DateToBeCompleted:"32-08-2020"}];

function appointedManhole(){
var formDoc=document.getElementById("appointDiv");
for(var i=0;i<manholes.length;i++){
    var empForm=document.createElement("div");
    empForm.classList.add("appoint-form");
    empForm.innerHTML="Location: "+manholes[i].location+"<br> Date to be completed on:"+manholes[i].DateToBeCompleted;
    var ID=manholes[i].id;
    empForm.addEventListener("click",function(){
        openForm(ID);
    });
    formDoc.appendChild(empForm);
}
}

function openForm(uniqueId)
{
    event.preventDefault();
    window.location="formPage.html";
    console.log(uniqueId);
}

//geolocation function
var x = document.getElementById("gpsX");
var y = document.getElementById("gpsY");

function getLocation() {
    event.preventDefault();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.value = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.value = position.coords.latitude;
  y.value=position.coords.longitude;
}

//to show image on upload
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#manholeImg1')
                .attr('src', e.target.result)
                .width(200)
                .height(150);
        };

        reader.readAsDataURL(input.files[0]);
    }
    var remove= document.createElement("button");
    remove.innerHTML="REMOVE";
    remove.addEventListener("click", function(){
    
    });

}

//to remove image
function removeImage(){
    event.preventDefault();
    document.getElementById('photo1').value = '';
    var element=document.getElementById('manholeImg1');
    document.getElementById('manholeImg1').setAttribute("src","#");
    document.getElementById('manholeImg1').style.width=0;
    document.getElementById('manholeImg1').style.height=0;
}