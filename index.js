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
	const OFFSET = 96;
	
	const CANVAS = document.getElementById("myCanvas");
	const CTX = CANVAS.getContext("2d");
	
	CTX.fillStyle = "#000";
	CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
	
	var menuGrid = [
		[new MenuItem("Appetizers"), new MenuItem("Sushi"), new MenuItem("Grill")],
		[new MenuItem("Tempura"), new MenuItem("Nigiri")],
		[new MenuItem("Miso"), new MenuItem("Ramen"), new MenuItem("Dessert")]
	];
	
	// DIRTY BUT IT WORKS!
	
	for(var i = 0; i < menuGrid.length; ++i)
	{
		for(var j = 0; j < menuGrid[i].length; ++j)
		{	
			menuGrid[i][j].draw(
				CTX,
				((j * BUTTON_RAD) + (j * PADDING) + OFFSET)
					// stagger every second row
					+ ((i + 1) % 2 == 0 ? BUTTON_RAD : 0)
					+ 200,
				(i * BUTTON_RAD) + (i * PADDING) + OFFSET
			);
		}
	}
	
	return;
}

function tick()
{
	
	
	return;
}

main();
setInterval(tick, 1000 / 60);
