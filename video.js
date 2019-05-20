var videoref = document.getElementById("myvideo")
var playref = document.getElementById("playid")
var pauseref = document.getElementById("pauseid")

 
 var VideoPlay = function()
            {
                console.log("Play video")
                videoref.play()
                playref.disabled = true
                pauseref.disabled = false
            }
            var VideoPause = function()
            {
                console.log("pause video")
                videoref.pause()
                pauseref.disabled=true
                playref.disabled = false
            }