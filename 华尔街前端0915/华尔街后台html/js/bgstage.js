// JavaScript Document

//后台导航	   
var navli=$(".stagenav span");
var subnav = $(".stagenav dl");
navli.click(function(){
	var inx = $(".stagenav span").index(this);
	if($(this).hasClass("stagenavon")){
		$(this).removeClass("stagenavon");
		subnav.eq(inx).slideUp(500);
	}
	else{
		navli.removeClass("stagenavon"); 
	    $(this).addClass("stagenavon");
		subnav.slideUp(500);
		subnav.eq(inx).slideDown(500);
	}
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
//表格最后一行无边框
$(".protab table tr:last-child").css('border','none');
$(".poptab table tr:last-child").css('border','none');
//tab标题最后一个没有margin-right值
$(".propopmenu li:last").css('margin-right','0px');
//tab效果
$(".propopmenu li").click(function(){
	var i=$(this).index();
	$(this).siblings(".propopmenu li").removeClass("popmenuon");
	$(this).addClass("popmenuon");
	$(this).parent().parent().children(".propopcon").children("div").hide();
	$(this).parent().parent().children(".propopcon").children("div").eq(i).show();
});
//新增编辑弹出层
$('.cbtn').click(function(){
	$(".popupbg").width=document.body.offsetWidth+"px";
	$(".popupbg").height=screen.height+"px";
	$(".popuplayer").css('margin-top',document.documentElement.scrollTop + "px");
	$(".popup-shut").click(function(){$(".popupbg").hide();$(".popuplayer").hide();});
	$(".popuplayer").css('display','block') ;
	$(".popupbg").css('display','block');	
});
//删除弹出层
$(".delbut").click(function(){
	if($(".check-box").is(":checked")){
	$(".popupbg").width=document.body.offsetWidth+"px";
	$(".popupbg").height=screen.height+"px";
	$(".delselect").css('margin-top',document.documentElement.scrollTop + "px");
	$(".popup-shut").click(function(){$(".popupbg").hide();$(".delselect").hide();});
	$(".delselect").css('display','block') ;
	$(".popupbg").css('display','block');
	}
	else{
	$(".popupbg").width=document.body.offsetWidth+"px";
	$(".popupbg").height=screen.height+"px";
	$(".delunselect").css('margin-top',document.documentElement.scrollTop + "px");
	$(".popup-shut").click(function(){$(".popupbg").hide();$(".delunselect").hide();});
	$(".delunselect").css('display','block') ;
	$(".popupbg").css('display','block');
	}
});
//选择平台弹出层
$('.chooseplat').click(function(){
	$(".popuplayer").hide();
	$(".popupbg").width=document.body.offsetWidth+"px";
	$(".popupbg").height=screen.height+"px";
	$(".chooseplatform").css('margin-top',document.documentElement.scrollTop + "px");
	$(".chooseplatform").css('display','block') ;
	$(".popupbg").css('display','block');
	$(".popup-shut-plat").click(function(){
		$(".chooseplatform").hide();
		$(".popuplayer").css('display','block');
	});
	$(".choose").click(function(){
		$(".chooseplatform").hide();
		$(".popuplayer").css('display','block');
	});
});

