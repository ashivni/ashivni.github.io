$(document).ready(function() {
						   
	var hash = window.location.hash.substr(1);
	//console.log(window.location.hash);
	//console.log('Hash: ' + hash);
	var href = $('#nav li a').each(function(){
		var href = $(this).attr('href');
		//console.log('Loop1: ' + href)
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #c1';
			$('#content').load(toLoad)
		}											
	});

	var href = $('#nav li ul li a').each(function(){
		var href = $(this).attr('href');
		//console.log('Loop 2: ' +href)
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #c1';
			$('#content').load(toLoad)
		}											
	});

	$('#nav li a').click(function(){
		var toLoad = $(this).attr('href')+' #c1';
		//$('#content').load(toLoad);
		$("#content").load(toLoad, function() {
			$('#content').scrollTop(1);
			});
		/*
		$("#content").load(toLoad, function(rt,ts,xm) {
		  console.log( "Load was performed. " + toLoad  );
			console.log('Response text: ' + rt);
			});*/
		return false;
	});

});
