var taskinput = document.getElementById("taskvalue")
var currenttaskcounter = 0

addtask = function(){
    

    console.log("AddTask Called...")
    localStorage.setItem("task" +currenttaskcounter,taskinput.value)
    currenttaskcounter++
    taskinput.value="";
    taskinput.focus();
}

var initializevalue = function(){
if(localStorage.taskcounter == null){
    localStorage.taskcounter = 0
    currenttaskcounter = localStorage.taskcounter
}else{
    currenttaskcounter = localStorage.taskcounter
}
}

//create new ol
var newol = document.createElement("ol")
//append
containerref.appendChild()


