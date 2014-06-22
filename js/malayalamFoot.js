function malayInputs() {
	var availableTags = [];
	for (var i = 0; i < availableText.length; i++)
	{
		availableTags[i] = availableText[i][0];
	}

	$("#tags").autocomplete({
		source: availableTags
	});
}

function malayLoad(){
	var val = $("#tags").val();
	var loc = -1;
	for (var i = 0; i < availableText.length; i++)
	{
		if (availableText[i][0] == val)
		{
			loc = i;
			break;
		}
	}

	aud=document.getElementById("player");
	$("#oggsrc").attr("src", 'langs/malayRecords/'+availableText[loc][1]+'.ogg');
	$("#mp3src").attr("src", 'langs/malayRecords/'+availableText[loc][1]+'.mp3');
	$("#embedsrc").attr("src", 'langs/malayRecords/'+availableText[loc][1]+'.mp3');
	if (aud.canPlayType("audio/mp3")){
		aud.src = 'langs/malayRecords/'+availableText[loc][1]+'.mp3';
		aud.load();//suspends and restores all audio element
	}
	else if(aud.canPlayType("audio/ogg")){
		aud.src = 'langs/malayRecords/'+availableText[loc][1]+'.ogg';
		aud.load();
	}
}
