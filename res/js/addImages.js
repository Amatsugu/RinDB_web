$(document).ready(function()
{
	var card = $(".imageCard");
	var img;
	var names = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");
	for(var i = 0; i < 100; i ++)
	{
		img = card.clone();
		img.appendTo("#contentGrid").children(".name").text(names[i%names.length]);
		img.find("img").attr("src", "res/img/imgtest"+((i%14)+1)+".jpg");
	}
	var item = $(".inputArea");
	for(var i = 0; i < 20; i ++)
	{
		item.clone().appendTo("#advancedSearch").children("label").text("Item " + i);
	}
	
});