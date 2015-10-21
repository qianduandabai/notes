// $("#showLogin").click(function(){
// 	$("#login").css({"display":"inline"});
// 	$(this).css({"background":"#00a67c"});
// 	$("#top .home").css("background-color","rgba(0,0,0,0.9)");
// });
$("#showLogin").click(function(){	
		$("#login").toggle(function(){
			console.log($("#login").css("display"));
			if($("#login").css("display")=="block"){
			$("#showLogin").css({"background":"#00a67c"});
			$("#top .home").css("background-color","rgba(0,0,0,0.9)");
			}else{
			$("#showLogin").css({"background":"rgba(0,0,0,0.9)"});
			$("#top .home").css("background-color","#00a67c");
		}
			
		});
		

});	
var i=0;
var time=0;
function auto(){
			i++;
			if(i>3){
				i=0;
			}
			$("#adshow ul li").eq(i).fadeIn(100).siblings().fadeOut();			
		}
		time=setInterval("auto()",3000);
		
