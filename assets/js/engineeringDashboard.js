var manholes=[{id:"100",location:"Place Abcz",uniqueManholeId:"349585435"},
{id:"101",location:"Place BCDE",uniqueManholeId:"7345574"},
{id:"102",location:"Place GH",uniqueManholeId:"74824985"},
{id:"103",location:"Place jdjkf",uniqueManholeId:"937467637"},
{id:"104",location:"Place fjvkx",uniqueManholeId:"674834849"}];

function appointedManhole(){
  event.preventDefault();
var formDoc=document.getElementById("appointDiv");
var empForm=document.createElement("div");
var tbl = document.createElement("table");
var tblhead=document.createElement("thead");
var head = document.createElement("th");
var headCell1=document.createElement("td");
var headText1 = document.createTextNode("Location");
headCell1.appendChild(headText1);
var headCell2=document.createElement("td");
var headText2 = document.createTextNode("Unique Manhole Id");
headCell2.appendChild(headText2);
head.appendChild(headCell1);
head.appendChild(headCell2);
tblhead.appendChild(head);
tbl.appendChild(tblhead);
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
      cellbtn.innerHTML="Click Here";
      cellbtn.addEventListener("click",function(){
        openForm();
      });
      cell3.appendChild(cellbtn);
      row.appendChild(cell3);
      tblBody.appendChild(row);
     
  }
  tbl.appendChild(tblBody);

empForm.appendChild(tbl);
formDoc.appendChild(empForm);
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