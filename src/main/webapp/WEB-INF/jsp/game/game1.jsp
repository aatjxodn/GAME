<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>샘플페이지</title>

<link type="text/css" href="<c:url value='/css/common.css'/>" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/game.js'/>"></script>

</head>

<body>
	<%@ include file="../common/header.jsp" %>
	
	<div id="resultModal"></div>
	
	<div id="game1Form">
		<div class="game1Form_con">
			<h1><b style="color:#1E90FF;">홀</b><b style="color:#DC143C;">짝</b> 게임</h1>
			<h3>배팅 시 배팅액 차감, 성공 시 배팅액의 2배를 가져갑니다.<br/>게임 결과까지 10초 남았을 때, 게임 시작 후 10초 동안은 배팅이 제한됩니다.</h3>
			<div class="game1Form_left">
				<img src="images/games/slot-machine-159972_640.png" id="left_image1">
				<div id="countdown"></div>
				<span><input type="button" id="choiceHol" value="홀" onclick="selectChoice('홀')"></span>
				<span><input type="button" id="choiceJjak" value="짝" onclick="selectChoice('짝')"></span>
				<div class="bat_con">
					<div class="pointArea"></div>
					<input type="text" id="battingText" placeholder="배팅액">
					<input type="button" id="battingBut" value="배팅하기" onclick="fn_batting()">
				</div>
			</div>
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>