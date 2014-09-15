// JavaScript Document
//弹窗
$('.login').click(function(){
	$(".popupbg").width=document.body.offsetWidth+"px";
	$(".popupbg").height=screen.height+"px";
	$(".poplogin").css('margin-top',document.documentElement.scrollTop + "px");
	$(".tcshut").click(function(){$(".popupbg").hide();$(".poplogin").hide();});
	$(".poplogin").css('display','block') ;
	$(".popupbg").css('display','block');
	$('.signup').click(function(){
		$(".poplogin").hide();
		$(".popsignup").css('display','block') ;
	});	
	$('.signup').click(function(){
		$(".poplogin").hide();
		$(".popsignup").css('display','block') ;
	});
});
$('.signup').click(function(){
	$(".popupbg").width=document.body.offsetWidth+"px";
	$(".popupbg").height=screen.height+"px";
	$(".popsignup").css('margin-top',document.documentElement.scrollTop + "px");
	$(".tcshut").click(function(){$(".popupbg").hide();$(".popsignup").hide();});
	$(".popsignup").css('display','block') ;
	$(".popupbg").css('display','block');
	$('.login').click(function(){
		$(".popsignup").hide();
		$(".poplogin").css('display','block') ;
	});
});
$('.password').click(function(){
	$(".popupbg").width=document.body.offsetWidth+"px";
	$(".popupbg").height=screen.height+"px";
	$(".poppassword").css('margin-top',document.documentElement.scrollTop + "px");
	$(".poppassword").css('display','block') ;
	$(".popupbg").css('display','block');
	$(".pswshut").click(function(){
		$(".poppassword").hide();
		$(".poplogin").css('display','block') ;
	});	
});
//首页图片切换
var pictags=$('.ad_list li');
var numtags=$(".num li");
var current;//设置当前帧的变量容器
var timer=3000;//设置切换的间隔时间

//初始所有标签样式
function disall(){
	for(var i=0; i<numtags.length; i++){
		numtags[i].className="";
		//pictags[i].style.display="none";
		$('.ad_list li').eq(i).fadeOut(500);
	}
}

//获取当前帧的索引值
function setnow(){
	for(i=0;i<numtags.length;i++){
		if(numtags[i].className=="numon"){
			current=i;
		}
	}
}

//设置自动切换
function gonext(){
	setnow();//获取当前帧索引
    current+=1;//帧自增1
	//判断：如果当前帧索引值是否大于切换按钮总数，如果大于按钮总数则回到初始状态
	if(current>=numtags.length){
		current=0;
	}
	disall();
	$(".num li").eq(current).addClass('numon');
	$('.ad_list li').eq(current).fadeIn(500);
	//numtags[current].className="btnon";
	//pictags[current].style.display="block";
}
//开始自动切换
var h=setInterval("gonext()",timer);
//手动切换
$(".num li").click(function(){
	clearInterval(h);
	var now=$(this).index();
	$(this).siblings(".num li").removeClass("numon");
	$(this).addClass("numon");
	$('.ad_list').children('li').fadeOut(500);
	$('.ad_list').children('li').eq(now).fadeIn(500);
	h=setInterval("gonext()",timer);
});

//下拉菜单
   $(".selectbox").each(function () {
	   var this_ul = $(".selectbox ul");
	   var _inx = $(".selectbox").index(this);
	   $(this).click(function (evt) { 
		   this_ul.eq(_inx).slideToggle(function(){
			   $(document).click(function(ev){
				    //alert($("#sel ul")[0].innerHTML);
					$(".selectbox ul").hide();
					ev.stopPropagation();
			   });
			   $(this).children('li').hover(function(){$(this).addClass('on');},function(){$(this).removeClass('on');});
			   $(this).children('li').click(function(e){
				   $(this).parent().parent().children('span').children('h3')[0].innerHTML=$(this)[0].innerHTML;
				   $(this).parent().hide();
				   e.stopPropagation();
			   });
		   });
		   evt.stopPropagation(); 
	   });
   });
//首页板块背景
$('.pro').hover(
function(){$(this).addClass('proon');},
function(){$(this).removeClass('proon');}
);
//选中效果
$('.prop_attrs li').click(function(){
	$(this).siblings('.prop_attrs li').removeClass('att_first');
	$(this).addClass('att_first');
});

$('.prop_attrs1 li').click(function(){
	$(this).siblings('.prop_attrs1 li').removeClass('att_first1');
	$(this).addClass('att_first1');
});

$('.tab h1').click(function(){
	$(this).siblings('.tab h1').removeClass('tabon');
	$(this).addClass('tabon');
});

$('.about_left li').click(function(){
	$(this).siblings('.about_left li').removeClass('abouton');
	$(this).addClass('abouton');
});


$(document).ready(function(e) {
    $('title')[0].innerHTML=$('.artitle')[0].innerHTML;
});
//60秒延时
var zcT=61;
function zcdjs(){
	zcT--;
	$(".zcdjs").children('span')[0].innerHTML=zcT;
    if(zcT!=0){
		var b=setTimeout("zcdjs()",1000);			
	}else{
		$('.zcyzm_btn').show();
	    $(".zcdjs").hide();
	}
}
$('.zcyzm_btn').click(function(){
	$('.zcyzm_btn').hide();
	$(".zcdjs").show();
	zcdjs();
});
var mmT=61;
function mmdjs(){
	mmT--;
	$(".mmdjs").children('span')[0].innerHTML=mmT;
    if(mmT!=0){
		var b=setTimeout("mmdjs()",1000);			
	}else{
		$('.mmyzm_btn').show();
	    $(".mmdjs").hide();
	}
}
$('.mmyzm_btn').click(function(){
	$('.mmyzm_btn').hide();
	$(".mmdjs").show();
	mmdjs();
});
//我要投资
$('.comp_list tr').hover(
function(){$(this).css('background-color','#f0f0f0');},
function(){$(this).css('background-color','#ffffff');}
);