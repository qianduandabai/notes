var arr = ["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg"]
var cursor = 0;
function nextPage(){
	var a = document.getElementById('body')
	cursor++
	if (cursor >= arr.length) {
		cursor = 0;
	};
	
	
	a.style.backgroundImage = "url("+arr[cursor]+")"


}
function previousPage(){
	var a = document.getElementById('body')
	cursor--
	if (cursor < 0) {
		cursor = arr.length-1;
	};
	
	
	a.style.backgroundImage = "url("+arr[cursor]+")"

}