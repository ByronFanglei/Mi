$(function(){
	// 购物车下滑
	$("#down").hide();
	$("#shop").hover(function(){
		$("#down").slideDown(200);
		$("#shop .icon,#shop .font").css({"color":"#ff6700"});
		$("#shop .icon,#shop .font").css({"background-color":"#fff"});
	},function(){
		$("#down").slideUp(200);
		setTimeout(function(){
		$("#shop .icon,#shop .font").css({"color":"#b0b0b0"});
		$("#shop .icon,#shop .font").css({"background-color":"#424242"});
		},400)
	});
	$("#down").hover(function(){
		$("#shop .icon,#shop .font").css({"color":"#ff6700"});
		$("#shop .icon,#shop .font").css({"background-color":"#fff"});
	},function(){
		setTimeout(function(){	
		$("#shop .icon,#shop .font").css({"color":"#b0b0b0"});
		$("#shop .icon,#shop .font").css({"background-color":"#424242"});
		},400)
	})
	$("#down").mouseover(function(){
		$(this).stop()
	})
	$("#down").mouseout(function(){
		$(this).slideUp()
	})
	// 搜索框hover
	$("#hunticon").hover(function(){
		$("#hunticon #icon").attr("src","images/oko.png");
		$("#hunt").css({"border":"#b0b0b0 1px solid"});
		// $("#hunt").css({"height":"51px"});
	},function(){
		$("#hunticon #icon").attr("src","images/okw.png");
		$("#hunt").css({"border":"#e0e0e0 1px solid"});
	});

	$("#hunt").focus(function(){
		$("#eightmi,#twomis").fadeOut(200);
		$("#hunticon,#hunt").css({"border":"#ff6700 1px solid"});
	});
	$("#hunt").blur(function(){
		$("#eightmi,#twomis").fadeIn(260);
		$("#hunticon,#hunt").css({"border":"#e0e0e0 1px solid"});
	});
	// 轮播效果
	var i=0;
	mytime();
	// 显示第一张
	$("#caroimg").eq(0).show().siblings("#caroimg").hide();
	$("#dotmin").eq(0).css({"background-color":"#ff6700","opacity":"0.5"})
	.siblings("#dotmin").css({"background-color":"#000","opacity":"0.5"});

	function mytime(){
		time = setInterval(function(){
		i++;
		if (i==$(".caro #caroimg").length){
			i=0;
		}	
		$(".caro #caroimg").eq(i).fadeIn(1000).siblings("#caroimg").fadeOut(1000);
		$(".dot #dotmin").eq(i).css({"background-color":"#ff6700","opacity":"0.5"})
		.siblings("#dotmin").css({"background-color":"#000","opacity":"0.5"});
		
	},5000)
	}
	// 箭头hover
	$(".caro .jian").hover(function(){
		clearInterval(time);
	},function(){
		mytime();
	});
	// 左箭头
	$(".caro #left").click(function(){
		i--;
		if (i<0) {
			i=$(".caro #caroimg").length-1;
		}
		$(".caro #caroimg").eq(i).show().siblings("#caroimg").hide();
		$(".dot #dotmin").eq(i).css({"background-color":"#ff6700","opacity":"0.5"}).siblings("#dotmin").css({"background-color":"#000","opacity":"0.5"});
	});
	// 右箭头
	$(".caro #right").click(function(){
		i++;
		if (i>$(".caro #caroimg").length-1) {
			i=0;
		}
		$(".caro #caroimg").eq(i).show().siblings("#caroimg").hide();
		$(".dot #dotmin").eq(i).css({"background-color":"#ff6700","opacity":"0.5"}).siblings("#dotmin").css({"background-color":"#000","opacity":"0.5"});
	});
	// 小圆点hover
	$(".dot #dotmin").hover(function(){
		clearInterval(time);
		i=$(this).index();
		$(".caro #caroimg").eq(i).fadeIn().siblings("#caroimg").fadeOut();
		$(".dot #dotmin").eq(i).css({"background-color":"#ff6700","opacity":"0.5"})
		.siblings("#dotmin").css({"background-color":"#000","opacity":"0.5"});
	},function(){
		mytime();
	});
	// 小米手机下滑
	$(".miphone").slideUp();
	$(".two ul a").hover(function(){
		var m = $(this).index();
		$(".miphone").eq(m).stop().slideDown(260)
		$(".miphone").hover(function(){
			$(this).stop()
		},function(){
			$(this).stop().slideUp(260)
		})
	},function(){
		var m = $(this).index();
		$(".miphone").eq(m).stop().slideUp(260)
	})



	

	// 右边滑动
		$(".page li").hover(function(){
		$(this).css({"background":"#fff"})
		})
		$(".page .font").hover(function(){
			$(this).css({"color":"#ff6700"})
		},function(){
			$(this).css({"color":"#333"})
		})

		$(".pages").hide();
		
		$(".one").hover(function(){
			var l = $(this).index(); 
			$(".pages").eq(l).show();
		},function(){
			var l = $(this).index(); 
			$(".pages").eq(l).hide();
		})
		var l = $(".one").index(); 
		$(".pages").eq(l).mouseover(function(){
		$(".pages").eq(l).show()
		})
		$(".pages").eq(l).mouseout(function(){
		$(".pages").eq(l).hide()
		})
	
	// 倒计时
	var times = new Date("2018/8/29/11:59:59")
		var hh=times.getHours();
		var mm=times.getMinutes();
		var ss=times.getSeconds();
	var h;
	var m
	var s
	function changehour(h,m,s){
		if (h<10) {
			return "0"+h;
		}else
		{
			return h;
		}
		if (m<10) {
			return "0"+h;
		}else
		{
			return h;
		}
		if (s<10) {
			return "0"+h;
		}else
		{
			return h;
		}
	}

	timemover = setInterval(function(){
		var time = new Date();
		var ll=	time.getHours();
		var lll=time.getMinutes();
		var llll=time.getSeconds();
		var news = parseInt((times-time)/1000);
		h= parseInt(news/60/60%24);
		m= parseInt(news/60%60);
		s= parseInt(news%60);
		// $("#hour").text(changehour(h));
		// $("#minute").text(changehour(m));
		// $("#secs").text(changehour(s));
		$("#hour").text(ll);
		$("#minute").text(lll);
		$("#secs").text(llll);
	},1000);

	// 闪购滑动
	$("#you").click(function(){
		$("#maxbox").animate({marginLeft:"-992px"})
	})
	$("#zuo").click(function(){
		$("#maxbox").animate({marginLeft:"0px"})
	})

	// 家电
   
	$("#move ul li").eq(0).attr("id","add");
	for(s=0;s<$("#move ul li").length;s++){
		$("#move ul li").eq(s).hover(function(){
		$(this).attr("id","add").siblings().removeAttr("id","add");
		$(".boxs").eq($(this).index()).css({"display":"block"}).siblings().css({"display":"none"});
	})
	}

	// 家电图片向上滑动
			// 一
	$(".up").hide();
	$(".house").hover(function(){
		var p = $(this).index()
		$(".house").eq(p).addClass("housecss");
		$(".up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".up").eq(p).mouseover(function(){
				var p = $(this).index()
				$(".house").eq(p).addClass("housecss");
				$(".up").eq(p).stop();
			})	
		})
	},function(){
		var p = $(this).index()
		$(".house").eq(p).removeClass("housecss");
		$(".up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".up").eq(p).mouseout(function(){
				var p = $(this).index()
				$(".house").eq(p).removeClass("housecss");
				$(".up").eq(p).slideDown();
			})
		})
	})
		// 二
	$(".houset").hover(function(){
		var p = $(this).index()
		$(".houset").eq(p).addClass("housecss");
		$(".houset .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".houset .up").eq(p).mouseover(function(){
				var p = $(this).index()
				$(".houset").eq(p).addClass("housecss");
				$(".houset .up").eq(p).stop();
			})	
		})
	},function(){
		var p = $(this).index()
		$(".houset").eq(p).removeClass("housecss");
		$(".houset .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".houset .up").eq(p).mouseout(function(){
				var p = $(this).index()
				$(".houset").eq(p).removeClass("housecss");
				$(".houset .up").eq(p).slideDown();
			})
		})
	})
	// 三
	$(".housett").hover(function(){
		var p = $(this).index()
		$(".housett").eq(p).addClass("housecss");
		$(".housett .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".housett .up").eq(p).mouseover(function(){
				var p = $(this).index()
				$(".housett").eq(p).addClass("housecss");
				$(".housett .up").eq(p).stop();
			})	
		})
	},function(){
		var p = $(this).index()
		$(".housett").eq(p).removeClass("housecss");
		$(".housett .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".housett .up").eq(p).mouseout(function(){
				var p = $(this).index()
				$(".housett").eq(p).removeClass("housecss");
				$(".housett .up").eq(p).slideDown();
			})
		})
	})
	// 四
	$(".housef").hover(function(){
		var p = $(this).index()
		$(".housef").eq(p).addClass("housecss");
		$(".housef .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".housef .up").eq(p).mouseover(function(){
				var p = $(this).index()
				$(".housef").eq(p).addClass("housecss");
				$(".housef .up").eq(p).stop();
			})	
		})
	},function(){
		var p = $(this).index()
		$(".housef").eq(p).removeClass("housecss");
		$(".housef .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".housef .up").eq(p).mouseout(function(){
				var p = $(this).index()
				$(".housef").eq(p).removeClass("housecss");
				$(".housef .up").eq(p).slideDown();
			})
		})
	})


	// 输入框点击显示
	$("#hunt").focus(function(){
		$("#clicks").show();
	})
	$("#hunt").blur(function(){
		$("#clicks").hide();
	})
	// 为您推荐
	$("#youc").click(function(){
		$(".recommax").animate({marginLeft:"-992px"})
	})
	$("#zuoc").click(function(){
		$(".recommax").animate({marginLeft:"0px"})
	})

	// 内容部分
	// 第一个小轮播
	$("#conleft,#conright").hide();
	$(".con").hover(function(){
		$(this).addClass("hover");
		$("#conleft,#conright").show();
	},function(){
		$(this).removeClass("hover");
		$("#conleft,#conright").hide();
	})

	$("#conleft,#conright").hover(function(){
		$(this).css({"background":"#ccc"})
	},function(){
		$(this).css({"background":"#fafafa"})
	})
	// 轮播
	$(".conson").eq(0).show().siblings().hide();
	$(".dott").show();
	$(".dott .dotss span").eq(0).css({"border-color":"#ff6700","background-color":"rgba(255,255,255,0.5)"});
		// 左箭头
		var k= 0
	$("#conleft").click(function(){

		k--;
		if (k<0) {
			k=$(".conson").length-1;
		}
		$(".conson").eq(k).show().siblings().hide();
		$("#conleft,#conright").show();
		$(".con").addClass("hover")
		$(".dott").show();
		$(".dott .dotss span").eq(k).css({"border-color":"#ff6700","background-color":"rgba(255,255,255,0.5)"})
		.parent().siblings().children().css({"border-color":"#f5f5f5","background-color":"rgba(0,0,0,0.5)"});
	});
		$("#conright").click(function(){

		k++;
		if (k>$(".conson").length-1) {
			k=0;
		}
		$(".conson").eq(k).show().siblings().hide();
		$("#conleft,#conright").show();
		$(".con").addClass("hover")
		$(".dott").show();
		$(".dott .dotss span").eq(k).css({"border-color":"#ff6700","background-color":"rgba(255,255,255,0.5)"})
		.parent().siblings().children().css({"border-color":"#f5f5f5","background-color":"rgba(0,0,0,0.5)"});
	});
		// 小圆点hover
		$(".dott .dotss span").hover(function(){
			$(this).css({"background-color":"#ff6700"})
		},function(){
			$(this).css({"background-color":"rgba(0,0,0,0.5)"})
		})

	// 第二个小轮播	

	

	// 固定导航
	$("#toptitle").hide();
	var hei = screen.availHeight;
	$(window).scroll(function(){
		if($(window).scrollTop()>3*hei){
			$("#toptitle").show();
		}else{
			$("#toptitle").hide();
		}
	})
});