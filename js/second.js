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
var time=setInterval("auto()",3000);
$("#adCtrl ul li").hover(function(){
	clearInterval(time);
	i=$(this).index();
	$(this).siblings().html("<img src='images/bd2.png'/>");
	$("#adshow ul li").eq(i).fadeIn(1000).siblings().fadeOut();
	$(this).html("<img src='images/bd3.png'/>");	
},function(){
	time=setInterval("auto()",3000);
});


function auto(){
			i++;
			if(i>3){
				i=0;
			}
			$("#adshow ul li").eq(i).fadeIn(1000).siblings().fadeOut();	
			$("#adCtrl ul li").html("<img src='images/bd3.png'/>");
			$("#adCtrl ul li").eq(i).siblings().html("<img src='images/bd2.png'/>");		
		}
$("#top ul li").click(function(){
	$(this).css("background-color","#00a67c");
	$("#top ul li").eq(i).siblings().css("background-color","#000");
})