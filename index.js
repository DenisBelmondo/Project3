function SB_Draw_Circle(CTX)
{
	CTX.beginPath();
	CTX.strokeStyle = "#FFF";
	CTX.arc(100, 75, 50, 0, 2*Math.PI);
	CTX.stroke();
	
	return;
}

function main()
{
	const CANVAS = document.getElementById("myCanvas");
	const CTX = CANVAS.getContext("2d");
	
	CTX.fillStyle = "#000";
	CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
	
	SB_Draw_Circle(CTX);
	
	return;
}

main();
