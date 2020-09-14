 var manholeId=document.getElementById("id");
 var manholeLocation=document.getElementById("location");
 var manholeDesc=document.getElementById("Description");
 var manholeMapId=document.getElementById("mapId");

 var data=[];
 var empList=[
     {empno:"101",empname:"rajesh"},
     {empno:"102",empname:"rilu"},
     {empno:"103",empname:"riki"}];
                             
function RandomId()
{
    manholeId.value= Math.floor(100000000 + Math.random() * 900000000);
    console.log(manholeId.value);
}
                              
 function addManhole()
 {
    data=JSON.parse(localStorage.getItem("data"));
    if(data==null)
       data=[];
       
   data.push(
       {id:manholeId.value,
        location:manholeLocation.value,
        desc:manholeDesc.value,
        mapId:manholeMapId.value});
   localStorage.setItem("data",JSON.stringify(data));
   console.log(data);
   
 }
 function onetime(node, type, callback) {

	// create event
	node.addEventListener(type, function(e) {
		// remove event
		e.target.removeEventListener(e.type, arguments.callee);
		// call handler
		return callback(e);
	});

}
onetime(document.getElementById("assignbtn"), "click", optionManhole);


 function optionManhole(e){
    
     var opt=document.getElementById("manholeToAssign");
     data=JSON.parse(localStorage.getItem("data"));
     for(var i=0;i<data.length;i++)
     {
        var option= document.createElement("OPTION");
        console.log(data[i].mapId);
        option.innerHTML=data[i].mapId;
        console.log(option);
        opt.appendChild(option);
     }
     var emp=document.getElementById("employeeList");
     for(var j=0;j<empList.length;j++)
     {
         var empDet=document.createElement("OPTION");
         empDet.innerHTML=empList[j].empname;
         emp.appendChild(empDet);
     }
 }

 function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
    document.getElementById("uniqueId").value="";
   document.getElementById("holedesc").value="";
 }
 function optionSelected(){
     var drop=document.getElementById("manholeToAssign");
    var selected=drop[drop.selectedIndex].innerHTML;
    data=JSON.parse(localStorage.getItem("data"));
    var s=[];
    var ans={};
    var k=0;
    for(var i=0;i<data.length;i++)
    {
        if(data[i].mapId==selected)
         s[k++]=data[i];
    }
    console.log(s);
    var locations=document.getElementById("holeloc");
    removeOptions(locations);
    //add disabled option
    var disableOpt=document.createElement("OPTION");
    disableOpt.innerHTML="Choose a Location";
    locations.appendChild(disableOpt);
    var x=document.getElementById("holeloc").options[0].disabled=true;
     for(var j=0;j<k;j++)
     {
         var locDet=document.createElement("OPTION");
         locDet.innerHTML=s[j].location;
         locations.appendChild(locDet);
     }
    }
    function selectLocation(){
        var locations=document.getElementById("holeloc");
        data=JSON.parse(localStorage.getItem("data"));
        var locationSelected=locations[locations.selectedIndex].innerHTML;
     for(var l=0;l<data.length;l++)
     {
         if(data[l].location==locationSelected)
          ans=data[l];
     }
    document.getElementById("uniqueId").value=ans.id;
   document.getElementById("holedesc").value=ans.desc;

    }

    //to show image
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