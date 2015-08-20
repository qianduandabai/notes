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

function signup(){
	var a = document.getElementById("sighUp")
	a.style.backgroundColor = "#fff";

}


function dorequest(url,data,callback){
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.onreadystatechange = function(){
		if (request.readyState ==4 && request.status ==200) {
			callback(request.responseText)
		}
	}
	request.send(data)
}

function login(){
	dorequest("/login","name=aben&password=aben",function(data){
		console.log(data);
	})
}