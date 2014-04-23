$(document).ready(function() {
	var p=window.location.hash;
	if (p=='#research')
	{
		$('#content').load('pages/research.html #c1');
	}
	if (p=='#pub')
	{
		$('#content').load('pages/publications.html #c1');
	}
	if (p=='#cv')
	{
		$('#content').load('pages/cv.html #c1');
	}
						   
	$('#nav li a').click(function(){
		var toLoad = $(this).attr('href')+' #c1';
		$("#content").load(toLoad, function() {
			$('body').scrollTop(1);
			});
		return false;
	});



});


var delay=3000 //set delay in miliseconds
var curindex=0

var randomimages=new Array()
var captions = new Array()

randomimages[0]="images/fccSM.jpg"
captions[0] = "High Entropy Alloy"

randomimages[1]="images/nacreSM.jpg"
captions[1] = "Nacre: Nature's flaw tolerant architecture"

randomimages[2]="images/fracturePhaseSM.jpg"
captions[2] = "Phase diagram of brittle fracture"

randomimages[3]="images/fuseNetworkSM.jpg"
captions[3] = "A fuse network"

randomimages[4]="images/stressConcSM.jpg"
captions[4] = "Stress field in a fuse network simulation"

var preload=new Array()

for (n=0;n<randomimages.length;n++)
{
	preload[n]=new Image()
	preload[n].src=randomimages[n]
}



function rotateimage()
{
	/*
	if (curindex==(tempindex=Math.floor(Math.random()*(randomimages.length)))){
		curindex=curindex==0? 1 : curindex-1
	}
	else
			curindex=tempindex
	*/
	curindex = (curindex+1)%randomimages.length
	$('#pic').attr('src',randomimages[curindex]);
	$('#picCap').text(captions[curindex]);
}

setInterval("rotateimage()",delay)

