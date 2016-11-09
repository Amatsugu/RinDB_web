var search;
var content;
var curReq = "/DB/latest/";
var count = 25;
var page = 1;
var lastReq;

$(document).ready(function()
{
	search = $("#search");
	content = $("#contentGrid");
	lastReq = $.ajax(
	{
		url:curReq+count+"/"+page,
		async: false,
		success: function(text)
		{
			content.append(text);
			$(".imageCard").fadeIn();
		}
	});
	$(window).scroll(function() 
	{
   		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
		{
			page++;
			console.log(page);
       		lastReq = $.ajax(
			{
				url:curReq+count+"/"+page,
				async: true,
				success: function(text)
				{
					content.append(text);
					$(".imageCard").fadeIn();
				}
			});
	   	}
	});
	//Seach Feild
	var lastQuery;
	search.on("propertychange change keyup input paste submit", function (event)
	{
		event.preventDefault();
		var query = $("input[type=search]").val();
		if(lastQuery != query)
		{
			lastQuery = query;
			console.log(query);
			page = 1;
			if(lastReq && lastReq.readyState != 4)
				lastReq.abort();
			if(query == "")
			{
				curReq = "/DB/latest/";
			}else
			{
				curReq = "/DB/search/"+query+"/";
			}
			content.html("<div class=\"searching\">Searching...</div");
			var curPage;
			lastReq = $.ajax(
			{
				url:curReq+count+"/"+page,
				async: true,
				success: function(text)
				{
					if(text == "")
						text = "<div class=\"searching\">No Results found</div";
					content.html(text);
					$(".imageCard").fadeIn();
				}
			});
		}
	});
	//Advanced Search
	var arrow = $("#advancedSearchButton");
	arrow.on("click", function()
	{
		if(search.css("height") == "45px")
		{
			search.css("height", "450px");
			arrow.css("transform", "rotate(-90deg)");
		}
		else
		{
			search.css("height", "45px");
			arrow.css("transform", "rotate(0deg)");
		}
	});
});



function GetMatchingTags(query)
{
	var tags = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".toLocaleLowerCase().split(" ");
	var outTags;
	for(var i = 0; i < tags.length; i++)
	{
		if(tags[i].search(query.toLocaleLowerCase()))
			outTags += tags[i] + "|";
	}
	return outTags.split("|");
}