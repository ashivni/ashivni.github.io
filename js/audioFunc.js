var html5_audiotypes={ 
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}

function createsoundbite(sound){

	var html5audio=document.createElement('audio');
	//html5audio.setAttribute("id","backgroundPlayer");
	html5audio.id="backgroundPlayer";
	if (html5audio.canPlayType){ //check support for HTML5 audio
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source');
			sourceel.setAttribute('src', arguments[i])
			var ext = arguments[i].split('.').pop();
			var type = html5_audiotypes[ext];
			sourceel.setAttribute('type', type)
			html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip=function(){
			html5audio.pause()
			//html5audio.currentTime=0
			html5audio.play()
		}
		return html5audio
	}
	else{
		return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
	}
}

//Initialize two sound clips with 1 fallback file each:

//var mouseoversound=createsoundbite("whistle.ogg", "whistle.mp3")
//var clicksound=createsoundbite("click.ogg", "click.mp3")

