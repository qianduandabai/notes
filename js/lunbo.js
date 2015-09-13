
//轮播
var arr = ["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg"]
var cursor = 0;
// function nextPage(){
// 	var a = document.getElementById('body')
// 	cursor++
// 	if (cursor >= arr.length) {
// 		cursor = 0;
// 	};
// 	a.style.backgroundImage = "url("+arr[cursor]+")"
// }
// function previousPage(){
// 	var a = document.getElementById('body')
// 	cursor--
// 	if (cursor < 0) {
// 		cursor = arr.length-1;
// 	};
// 	a.style.backgroundImage = "url("+arr[cursor]+")"
// }
//用jquery写轮播
$(document).ready(function(){
	$('#shangye').click(function(){
		cursor++
		if (cursor >= arr.length) {
			cursor = 0;
		};
		$('#body').css('backgroundImage',"url("+arr[cursor]+")");

	})
	$('#xiaye').click(function(){
		var a = document.getElementById('body')
		cursor--
		if (cursor < 0) {
			cursor = arr.length-1;
		};
		$('#body').css('backgroundImage',"url("+arr[cursor]+")");
	})
	//换种方式轮播
	$(".l2").click(function(){
		$("#lunbo2").animate({
			right: 0,
    	width: "toggle"
	}, 6000, function() {
    // Animation complete.
  });
	})
})


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
	var a = document.getElementById("email").value
	var b = document.getElementById("pwd").value

	if(!a){
		alert("用户名为空");
		return;
	}
	var url = "/services/login?name="+a+"&password="+b;

        dorequest(url,"",function(data){
        data = JSON.parse(data)
                console.log(data.result)
        if(data.result == 'success'){

            location.href = '/html/bendian.html'
    }
        })

}



/*登录与注册背景切换*/
$(document).ready(function(){
	$("#signUp").click(function(){
		$("#signUp").css("background-color","#fff").css("color","#444");
		$("#logIn").css("background-color","rgba(17, 17, 17, 0.158039)").css("color","rgba(255, 255, 255, 0.498039)");
		$("#pwd").attr("placeholder","设置密码");
		$("#tijiaoid").attr("value","注册");
	});
});

$(document).ready(function(){
	$("#logIn").click(function(){
		$("#logIn").css("background-color","#fff").css("color","#444");
		$("#signUp").css("background-color","rgba(17, 17, 17, 0.158039)").css("color","rgba(255, 255, 255, 0.498039)");
		$("#pwd").attr("placeholder","密码");
		$("#tijiaoid").attr("value","登录");
	});
});
