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
			MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
			});
		return false;
	});



});


var delay=3000 //set delay in miliseconds
var curindex=0

var randomimages=new Array()
var captions = new Array()

randomimages[0]="images/fcc.jpg"
captions[0] = "High Entropy Alloys"

randomimages[1]="images/nacre.jpg"
captions[1] = "Biomaterials"

randomimages[2]="images/fracturePhase.jpg"
captions[2] = "Phase Transitions"

randomimages[3]="images/fuseNetwork.jpg"
captions[3] = "Statistical Models"

randomimages[4]="images/stressConc.jpg"
captions[4] = "Massive Simulations"

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

