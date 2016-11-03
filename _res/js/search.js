$(document).ready(function()
{
	var search = $("#search");
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