$(document).ready(function()
{
	var card = $(".imageCard");
	var img;
	for(var i = 0; i < 100; i ++)
	{
		img = card.clone();
		img.appendTo("#contentGrid").children(".name").text("Image " + i);
		img.find("img").attr("src", "res/img/imgtest"+((i%14)+1)+".jpg");
	}
	var item = $(".inputArea");
	for(var i = 0; i < 20; i ++)
	{
		item.clone().appendTo("#advancedSearch").children("label").text("Item " + i);
	}
	
});