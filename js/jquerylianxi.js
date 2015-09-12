<!--隐藏-->
$(document).ready(function(){
		$("button").click(function(){
		$(".p2").hide();
		});
		});
// focus()
$(document).ready(function(){
	$("#focus").focus(function(){
		$("#focus").css("background-color","red");
	})
})
// hide()
$(document).ready(function(){
	$("#hide").click(function(){
		$(".showorhide").hide("slow",function(){
			alert("something is hidden");
		});
	});
})
// show()
$(document).ready(function(){
	$("#show").click(function(){
		$(".showorhide").show("fast");
	});
})
// toggle()
$(document).ready(function(){
	$("#change").click(function(){
		$(".showorhide").toggle("slow");
	});
})
// fadeIn()
$(document).ready(function(){
	$("#fadein").click(function(){
		$("#div1").fadeIn();
		$("#div2").fadeIn();
		$("#div3").fadeIn();
	});
});
// fadeOut()
$(document).ready(function(){
	$("#fadeout").click(function(){
		$("#div1").fadeOut();
		$("#div2").fadeOut();
		$("#div3").fadeOut();
	});
});
// fadeToggle()
$(document).ready(function(){
	$("#fadetoggle").click(function(){
		$("#div1").fadeToggle();
		$("#div2").fadeToggle("slow");
		$("#div3").fadeToggle("2000");
	});
});
// fadeTo()
$(document).ready(function(){
	$("#fadeto").click(function(){
		$("#div1").fadeTo("slow",0.7);
		$("#div2").fadeTo("slow",0.6);
		$("#div3").fadeTo(1000,0.4);
	});
});
// 平面隐藏显示
$(document).ready(function(){
	$("#slideUp").click(function(){
		$("#panel").slideUp();
	});
});
$(document).ready(function(){
	$("#slideDown").click(function(){
		$("#panel").slideDown();
	});
});
$(document).ready(function(){
	$("#slideToggle").click(function(){
		$("#panel").slideToggle();
	});
});
// 自定义动画
// $(document).ready(function(){
// 	$("#inputani").click(function(){
// 		$("#animate1").animate({
// 			left:'50px',
// 		    opacity:'0.5',
// 		    height:'50px',
// 		    width:'50px'
// 		});
// 	});
// });
//自定义动画 使用相对值
$(document).ready(function(){
	$("#inputani").click(function(){
		// $("#animate1").animate({
		// 	left:'150px',
		//     height:'+=50px',
		//     width:'+=50px',
		// 	fontSize:'2em'
		// })
		$("#animate1").animate({
			height:'toggle'
		});//预定
	});
	$("#slidetoggle").click(function(){
		$(".slide p").slideToggle(3000);
	});
	$("#stopslide").click(function(){
		$(".slide p").stop();
	});

});
// DOM方法　　text(),html()
$(document).ready(function(){
	$("#showtext").click(function(){
		alert("text:"+$("#domtext").text());
	});
});
$(document).ready(function(){
	$("#showhtml").click(function(){
		alert("html:"+$(".htmlprac").html());
	});
	$("#showcolor").click(function(){
		alert("title:"+$(".htmlprac").attr("title"));
	});
	// 设置内容
	$("#btn1").click(function(){
		$("#btn1p").text("这是文本内容");
	});
	$("#btn2").click(function(){
		$("#btn2p").html("<br>这是html内容</br>");
	});
	$("#btn3").click(function(){
		$("#btn3input").val("Amy And Abiton");
	});
	$('#testtextbtn').click(function(){
		$(".testtext").text(function(i,origText){
		 alert( "Old text: " + origText + " New text: Hello world! (index: " + i + ")");
	   });
	 });


});
