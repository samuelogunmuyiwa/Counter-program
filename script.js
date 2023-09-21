//declare a let variable to increase and decrease 

let count = 0;

//write the function to increase my counter by 1 when clicked.

document.getElementById('increaseBtn').onclick = function() {
	count+= 1;
	document.getElementById("countLabel").innerHTML = count;
}

// write the function to decrease my counter by 1 when clicked.

document.getElementById('decreaseBtn').onclick = function() {
	count-= 1;
	document.getElementById("countLabel").innerHTML = count;
}