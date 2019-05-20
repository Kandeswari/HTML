var videoref = document.getElementById("myvideo")
var videoplay = function(){

    videoref.onplay()
   
   
}

var videopause = function(){
videoref.onpause()
console.log(videoref.paused)
document.getElementById("myplay").disabled = false
document.getElementById("mypasue").disabled = true
}
setdefault = function(){

    document.getElementById("myplay").disabled = false
    document.getElementById("mypasue").disabled = true
}