var search;
var content;

$(document).ready(function()
{
	search = $("#search");
	content = $("#contentGrid");
	//Seach Feild
	search.on("propertychange change click keyup input paste submit", Search);
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

function Search(event)
{
	event.preventDefault();
	var query = $("input[type=search]").val();
	var cards = content.find(".imageCard");
	if(query.length == 0)
	{
		cards.fadeIn();
		return;
	}
	cards.hide();
	cards.find("div:contains('"+query+"')").parent().show();
}