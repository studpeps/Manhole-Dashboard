 var manholeId=document.getElementById("id");
 var manholeLocation=document.getElementById("location");
 var manholeDesc=document.getElementById("Description");

 var data=[];
 var empList=[{empno:"101",empname:"rajesh"},{empno:"102",empname:"rilu"},{empno:"103",empname:"riki"}];
                             
function RandomId()
{
    manholeId.value= Math.floor(100000000 + Math.random() * 900000000);
    console.log(manholeId.value);
}
                              
 function addManhole()
 {
    data=JSON.parse(localStorage.getItem("data"));
    console.log(data);
    if(data==null)
       data=[];
       console.log(data);
   data.push({id:manholeId.value,location:manholeLocation.value,desc:manholeDesc.value});
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
        option.innerHTML=data[i].location;
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
 function optionSelected(){
     var drop=document.getElementById("manholeToAssign");
    var selected=drop[drop.selectedIndex].innerHTML;
    data=JSON.parse(localStorage.getItem("data"));
    var s={};
    for(var i=0;i<data.length;i++)
    {
        if(data[i].location==selected)
         s=data[i];
    }
    console.log(s);
    document.getElementById("uniqueId").value=s.id;
    document.getElementById("holeloc").value=s.location;
    document.getElementById("holedesc").value=s.desc;


 }
