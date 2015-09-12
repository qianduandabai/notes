$(document).ready(function(){
	//text()
	$("#test1Btn").click(function(){
		$('#test1').text('第一个段落测试成功');
	});
	//对应的回调函数text(i,origText)
	$("#test1Btn").click(function(){
		$('#test1').text(function(i,origText){
			return 'Old text:'+ origText + 'New text:Sucess!(index:'+i+')'
		});
	});

	//html()
	$("#test2Btn").click(function(){
		$('#test2').html('<b>第二个段落测试</b>');
	});
	//对应回调函数 html(i,origText)
	$("#test2Btn").click(function(){
		$('#test2').html(function(i,origText){
			return "Old text2:" + origText + "New text2: test2 <b>succeed</b>! (index:"+i+")"
		});
	});
	//val()
	$("#shurutestBtn").click(function(){
		$('#shurutext1').val('输入框测试成功');
	});
	//attr()
	$(".testAttr").click(function(){
		$('#test1').attr({
			"align":"center",
			"title":"属性案例"
		});
	});

	//对应回调函数attr()
	$(".testAttr").click(function(){
		$('#test1').attr("title",function(i,origValue){
			return origValue+"title测试";
		});
	});
	//append() prepend()
	$('#zhuijia').click(function(){
		$('#test1').append('<p>追加段落</p>')
	})
	$('#qianzhuijia').click(function(){
		$('#test2').prepend('<p><hr/>前追加段落</p>')
	})
	//after() before()
	$('#houbian').click(function(){
		$('#test1').append('<p>After</p>')
	})
	$('#qianbian').click(function(){
		$('#test2').prepend('<p><hr/>Before</p>')
	})

	//删除元素 remove() empty()
	$('#shanchu').click(function(){
		$('#sccs').remove();
	})
	$('#shanchu2').click(function(){
		$('#shanchu5').empty();
	})
	//删除特定元素
	$('#shanchu3').click(function(){
		$('#sccs p').remove('.shanchu1');
	})
	//添加类
	$('#tianjialei').click(function(){
		$('p').addClass('blue');
		$('#test1,#test2').addClass('important');
	})
	//删除类
	$('#shanchulei').click(function(){
		$('#sccs p').removeClass('shanchu1');
	})
	//toggle
	$('#qiehuan').click(function(){
		$('#sccs p').toggleClass('shanchu1');
	})
	//css
	$('#fanhui').click(function(){
		alert($(".shanchu1").css("color"));
	})
	$('#shezhiCss').click(function(){
		$("#shanchu5").css({
			"color":"blue",
			"font-size":"200%"
		});
	})
	//尺寸大小
	$('#showSize').click(function(){
		var txt = "Width:"+$("#sizetest").width()+"</br>Height:"+$("#sizetest").height()+"</br>innerWidth:"+$("#sizetest").innerWidth()+"</br>innerHeight:"+$("#sizetest").innerHeight();
		$("#sizetest").html(txt);
	})
	//窗口尺寸 文档尺寸
	$('#chuangkousize').click(function(){
		var txt = "WindowWidth:"+$(window).width()+"</br>WindowHeight:"+$(window).height()+"</br>DocWidth:"+$(document).width()+"</br>DocHeight:"+$("#sizetest").height();
		$("#sizetest").html(txt);
	})
	//调整尺寸
	$('#tiaozhengsize').click(function(){
		$("#sizetest").width(320).height(320);
	})
	//返回直接父元素
	$('#bianlitest').click(function(){
		$('#test').parent().css({
		"border":"1px solid grey",
		"margin":"3px"
	})
	})
	//返回祖先
	$('#zuxianbtn').click(function(){
		$('#zuxiantest').parents().css({
		"border":"1px solid blue",
		"margin":"3px"
	})
	})
	//带参数的搜索祖先
	$('#canshubtn').click(function(){
		$('#canshutest').parents('div').css("border","1px solid green");
	})
	//参数之间祖先
	$('#canshubtn2').click(function(){
		$('#canshutest2').parentsUntil('body').css("border","1px solid red");
	})
	//直接子元素
	$('#zileibtn1').click(function(){
		$('#zuxian').children().css({
		"border":"1px solid green",
		"margin":"3px"
	})
	})
	//特定直接子元素
	$('#zileibtn2').click(function(){
		$('#zuxian2').children('#test').css("background-color","green");
	})
	//返回所有特定子元素
	$('#zileibtn3').click(function(){
		$('#zuxian').find('.zilei').css("background-color","yellow");
	})
	// 同胞练习,所有同胞
	$('#tongbaobtn1').click(function(){
		$('#test').siblings().css("color","purple");
	})
	// 下一个同胞
	$('#tongbaobtn2').click(function(){
		$('#test').next().css("color","purple");
	})
	// 后边的所有同胞
	$('#tongbaobtn3').click(function(){
		$('#zuxian2').nextAll().css("color","red");
	})
	$('#tongbaobtn4').click(function(){
		$('#test').nextUntil('p').css("color","blue");
	})
	//首个元素first()
	$("#guolvbtn").click(function(){
		$("ul li").first().css("background-color","orange")
	})
	//最后一个元素last()
	$("#guolvbtn2").click(function(){
		$("#zuxian3 .zilei").last().css("color","orange")
	})
	//指定元素eq()
	$("#guolvbtn3").click(function(){
		$("li").eq('3').css("font-size","200%")
	})
	//过滤元素filter()
	$("#guolvbtn4").click(function(){
		$("p").filter('.zilei').css("color","blue")
	})
	//筛选不匹配元素not()
	$("#guolvbtn5").click(function(){
		$("li").not('.zilei').css("background-color","red")
	})
	//Ajax加载练习
	$("#jiazaibtn").click(function(){
		$("#jiazai").load('../../index.html p')
	})
	//Ajax加载练习 get() post()
	$("#gettest").click(function(){
		$.get('../../index.html',function(data,status){
			$('#jiazai2').html(data+'状态：'+status);
		})
	})
	$("#posttest").click(function(){
		$.post('/services/login',{
			name:"aben",
			password:"aben"
		},function(data,status){
			$('#jiazai3').html(data+'状态：'+status);
		})
	})





})
//直接添加元素
function appendText()
{
		var txt1 = '<p>text1</p>';
		var txt2 = $('<p></p>').text('text2');
		var txt3 = document.createElement('p');
		txt3.innerHTML='text3';
		$('body').append(txt1,txt2,txt3);
}
function afterText()
{
		var txt1 = '<b>I</b>';
		var txt2 = $('<i></i>').text('love');
		var txt3 = document.createElement('big');
		txt3.innerHTML='Jquery';
		$('#test2').append(txt1,txt2,txt3);
}
