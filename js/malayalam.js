var availableText = [];
availableText[0] = ["Banana","banana"];
availableText[1] = ["Cheeks","cheeks"];
availableText[2] = ["Chest","chest"];
availableText[3] = ["Chicken","chicken"];
availableText[4] = ["Ears","ears"];
availableText[5] = ["Egg","egg"];
availableText[6] = ["Fingers","fingers"];
availableText[7] = ["Forehead","forehead"];
availableText[8] = ["Ghee","ghee"];
availableText[9] = ["Hair","hair"];
availableText[10] = ["Hands","hands"];
availableText[11] = ["Knee","knee"];
availableText[12] = ["Legs","legs"];
availableText[13] = ["Lentil","lentil"];
availableText[14] = ["Lips","lips"];
availableText[15] = ["Meal","meal"];
availableText[16] = ["Milk","milk"];
availableText[17] = ["Nails","nails"];
availableText[18] = ["Nose","nose"];
availableText[19] = ["Oil","oil"];
availableText[20] = ["Rice","rice"];
availableText[21] = ["Salt","salt"];
availableText[22] = ["Stomach","stomach"];
availableText[23] = ["Sugar","sugar"];
availableText[24] = ["Teeth","teeth"];
availableText[25] = ["Toes","fingers"];

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
