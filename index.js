const BUTTON_RAD = 64;

const CANVAS = document.getElementById("myCanvas");
const CTX = CANVAS.getContext("2d");

class MenuItem
{
	constructor(label)
	{
		this.label = label;
		this.scale = 1.0;
	}
	
	draw(x, y)
	{
		// draw the circle
		
		CTX.beginPath();
		CTX.arc(x, y, BUTTON_RAD * this.scale, 0, Math.PI*2);
		CTX.strokeStyle = "#FFF";
		CTX.stroke();
		CTX.closePath();
		
		// draw the label
		
		CTX.font = "20px Arial";
		CTX.fillStyle = "#FFF";
		CTX.textAlign = "center";
		CTX.fillText(this.label, x, y);
		
	}
}

const MENUGRID = [
	[new MenuItem("Appetizers"), new MenuItem("Sushi"), new MenuItem("Grill")],
	[new MenuItem("Tempura"), new MenuItem("Nigiri")],
	[new MenuItem("Miso"), new MenuItem("Ramen"), new MenuItem("Dessert")]
];

function tick()
{
	const PADDING = 96;
	const OFFSET = 96;
	
	CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
	
	CTX.fillStyle = "#000";
	CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
	
	// DIRTY BUT IT WORKS!
	
	for(var i = 0; i < MENUGRID.length; ++i)
	{
		for(var j = 0; j < MENUGRID[i].length; ++j)
		{	
			MENUGRID[i][j].draw (
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

setInterval(tick, 1000 / 60);
