$(document).ready(function() {
	
	$(".header_con > .ul2 > li > a").hover(function() {
		$(".header_con > .ul2 > li > ul").slideDown(300);
		$(".header_con > .ul2 > li > ul").css("display","block");
		$(".header_con > .ul2 > li > ul").css("position","absolute");
		$(".header_con > .ul2 > li > ul").css("z-index","1");
		$(".header_con > .ul2 > li > ul").css("background-color","#fff");
		
		$(".header_con > .ul2 > li > ul > li > a").css("color","#000");
		$(".header_con > .ul1 > li > a").css("color","#000");
		$(".header_con > .ul2 > li > a").css("color","#000");
		$(".header_con > .ul3 > li > a").css("color","#000");
		$("#header").css("background-color","#fff");
		$("#header").css("border-bottom","1px solid #ccc");
		$("#header").css("transition","all 0.3s");
		$(".logout_but").css("color","#000");
		$(".myMenu_but").css("color","#000");
		
	});
	
	$(".header_con > .ul2").mouseleave(function() {
		$(".header_con > .ul2 > li > ul").slideUp(300);	
		
		$(".header_con > .ul2 > li > ul").css("background-color","#142336");
		$(".header_con > .ul2 > li > ul > li > a").css("color","#fff");
		$(".header_con > .ul1 > li > a").css("color","#fff");
		$(".header_con > .ul2 > li > a").css("color","#fff");
		$(".header_con > .ul3 > li > a").css("color","#fff");
		$("#header").css("background-color","#142336");
		
		$(".logout_but").css("color","#fff");
		$(".myMenu_but").css("color","#fff");
	});
	
});

