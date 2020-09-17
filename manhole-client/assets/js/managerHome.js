var data=[
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"},
    {mapId:"110011",location:"goa goa",status:"completed",emp:"ravii"}];


    var mngTb=document.getElementById("managerTable");
    function showTable(){
        for(var i=0;i<data.length;i++)
        {
        var tbRow=document.createElement("tr");
        tbRow.classList.add("gradeA");
        var cell1=document.createElement("td");
        var cell2=document.createElement("td");
        var cell3=document.createElement("td");
        cell3.classList.add("hidden-phone");
        var cell4=document.createElement("td");
        cell4.classList.add("hidden-phone");
        cell4.classList.add("center");
        var cell5=document.createElement("td");
        var btn=document.createElement("button");
        cell1.innerHTML=data[i].mapId;
        cell2.innerHTML=data[i].location;
        cell3.innerHTML=data[i].status;
        cell4.innerHTML=data[i].emp;
        btn.innerHTML="Review";
        btn.addEventListener("click",function(){
            window.location.href="./managerForm.html";
        })
        cell5.appendChild(btn);
        tbRow.appendChild(cell1);
        tbRow.appendChild(cell2);
        tbRow.appendChild(cell3);
        tbRow.appendChild(cell4);
        tbRow.appendChild(btn);
        mngTb.appendChild(tbRow);
        }
    }
