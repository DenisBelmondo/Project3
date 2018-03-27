const BUTTON_RAD = 64;

class MenuItem
{
	constructor(label)
	{
		this.label = label;
	}
	
	draw(ctx, x, y)
	{
		// draw the circle
		
		ctx.beginPath();
		ctx.strokeStyle = "#FFF";
		ctx.arc(x, y, BUTTON_RAD, 0, Math.PI * 2);
		ctx.stroke();
		
		// draw the label
		
		ctx.font = "20px Arial";
		ctx.fillStyle = "#FFF";
		ctx.textAlign = "center";
		ctx.fillText(this.label, x, y);
	}
}

function main()
{
	const PADDING = 96;
	
	const CANVAS = document.getElementById("myCanvas");
	const CTX = CANVAS.getContext("2d");
	
	CTX.fillStyle = "#000";
	CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
	
	var menuItems = [new MenuItem("Sushi"), new MenuItem("Sashimi")];
	
	// DIRTY BUT IT WORKS!
	for(var i = 0; i < menuItems.length; ++i)
	{
		menuItems[i].draw(CTX,
			(i * BUTTON_RAD) + (i * PADDING) + PADDING, PADDING);
	}
	
	return;
}

main();
