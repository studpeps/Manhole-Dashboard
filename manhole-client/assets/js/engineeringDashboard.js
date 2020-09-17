var manholes=[{id:"100",location:"Place Abcz",uniqueManholeId:"349585435"},
{id:"101",location:"Place BCDE",uniqueManholeId:"7345574"},
{id:"102",location:"Place GH",uniqueManholeId:"74824985"},
{id:"103",location:"Place jdjkf",uniqueManholeId:"937467637"},
{id:"104",location:"Place fjvkx",uniqueManholeId:"674834849"}];

function appointedManhole(){
var formDoc=document.getElementById("appointDiv");
var tblBody = document.createElement("tbody");

  // cells creation
  for (var j = 0; j <manholes.length; j++) {
    // table row creation
    var row = document.createElement("tr");
      var cell1 = document.createElement("td");
      var cellText1 = document.createTextNode(manholes[j].location);
      cell1.appendChild(cellText1);
      row.appendChild(cell1);
      var cell2 = document.createElement("td");
      var cellText2 = document.createTextNode(manholes[j].uniqueManholeId);
      cell2.appendChild(cellText2);
      row.appendChild(cell2);
      var cell3 = document.createElement("td");
      var cellbtn = document.createElement("button");
      cellbtn.innerHTML="Fill Form";
      cellbtn.addEventListener("click",function(){
        openForm();
      });
      cell3.appendChild(cellbtn);
      row.appendChild(cell3);
      tblBody.appendChild(row);
     
  }
  
formDoc.appendChild(tblBody);
}

function openForm(uniqueId)
{
    window.location="./engineerformPage.html";
    console.log(uniqueId);
}

//geolocation function
var x = document.getElementById("gpsX");
var y = document.getElementById("gpsY");

function getLocation(){
  console.log("entered");
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
  //console.log(input.value);
  var x;
  if(input.id=="photo1")
   x="#manholeImg1";
  else if(input.id=="photo2")
   x="#manholeImg2"
   else if(input.id=="photo3")
   x="#manholeImg3"
   else if(input.id=="photo4")
   x="#manholeImg4"
   else if(input.id=="photo5")
   x="#manholeImg5"
   else if(input.id=="photo6")
   x="#manholeImg6"
   else if(input.id=="photo7")
   x="#manholeImg7"

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(x)
                .attr('src', e.target.result)
                .width(200)
                .height(150);
        };

        reader.readAsDataURL(input.files[0]);
    }
   // var remove= document.createElement("button");
   // remove.innerHTML="REMOVE";
   // remove.addEventListener("click", function(){
    
   // });

}

//to remove image
function removeImage(input){
//console.log(input.name);
var x;
  if(input.name=="photo1")
   x="manholeImg1";
  else if(input.name=="photo2")
   x="manholeImg2"
   else if(input.name=="photo3")
    x="manholeImg3"
   else if(input.name=="photo4")
    x="manholeImg4"
   else if(input.name=="photo5")
    x="manholeImg5"
   else if(input.name=="photo6")
    x="manholeImg6"
   else if(input.name=="photo7")
    x="manholeImg7"
    document.getElementById(input.name).value ='';
  // var e=document.getElementById('manholeImg1');
  // console.log(e.value);
    document.getElementById(x).setAttribute("src","#");
   // document.getElementById('manholeImg1').style.width=0;
   // document.getElementById('manholeImg1').style.height=0;
}