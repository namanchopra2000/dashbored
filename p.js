
var c =0;
function wow(){

var i = document.getElementById("table");

var j = i.insertRow(-1);

c++;
var l = j.insertCell(0).innerHTML ='<h3 id="ids"></h3>';

j.insertCell(1).innerHTML ='<input class="ids1" type ="text" style="text-align:center; height:45px;" required>';
j.insertCell(2).innerHTML ='<input class="ids2" type ="text" style="text-align:center; height:45px; "required> ';
j.insertCell(3).innerHTML ='<input class="ids3" type ="text" style="text-align:center; height:45px;" required> ';
j.insertCell(4).innerHTML ='<input class="ids4"  type ="number" style="text-align:center; height:45px;" required> ';
j.insertCell(5).innerHTML ='<input class="ids5" type ="email" style="text-align:center; height:45px;" required> ';
var k = j.insertCell(6);
k.innerHTML = '<button onclick=asd(event)  type="submit" style="background-color: black; padding:10px; color: aliceblue; "> Save </button>';

}

function asd(event){
    alert("wow");
    let cart = localStorage.getItem("cart");
    var tabledata=[];
    var but = event.target
    var fin = but.parentElement
    var idi = fin.getElementsByClassName("ids").innerText;
    var idi1 = fin.getElementsByClassName("ids1").value;
    var idi2 = fin.getElementsByClassName("ids2").value;
    var idi3 = fin.getElementsByClassName("ids3").value;
    var idi4 = fin.getElementsByClassName("ids4").value;
    var idi5 = fin.getElementsByClassName("ids5").value;
    let addrow = {id:idi , student_name:idi1 ,  student_roll:idi2, subject:idi3, marks:idi4, markedBy:idi5}
   tabledata.push(addrow);
   localStorage.setItem(cart , JSON.stringify(tabledata));
   console.log(tabledata)
}
