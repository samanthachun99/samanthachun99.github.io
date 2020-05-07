// attach event listeners to the body
var body = document.getElementById('body');
body.addEventListener('mousedown', startDrawing);
body.addEventListener('mousemove', useBrush);
body.addEventListener('mouseup', stopDrawing);

// create a switch called isDrawing that is false by default, but turns to true when user is pressing the mouse, and turn off again when user stops pressing the mouse.

var isDrawing = false;

function startDrawing(event){
	// the event here is the mouse event from our addeventlistener. javascript allows you to access the event
	isDrawing = true;
	// console.log(event);
}

function useBrush(event) {
	if (isDrawing == true){
		// gets the mouse position
		var x = event.pageX;
		var y = event.pageY;
		// creates a new div that is the brushstroke
		var div = document.createElement('div');
		div.style.left = x + "px";
		div.style.top = y + "px";
		div.classList.add('brush');
		body.appendChild(div);
	}
}

function stopDrawing() {
	isDrawing = false;
}
