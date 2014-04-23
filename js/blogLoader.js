function loadDetails(itemId)
{
	$('div#'+itemId).load('blogs/'+itemId+'.html');
}

function loadBlog(itemId)
{
	$("#content").load('pages/blog.html #'+itemId);
	/*
	$("#content").load('pages/blog.html #c1', function() {
	var Pos=$('div#'+itemId).position().top;
	$('body').scrollTop(Pos-150);
	//$('#content').offset({top: Pos-150});

	});*/
}
