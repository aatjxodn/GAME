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
<script type="text/javascript" src="<c:url value='/js/game2.js'/>"></script>

</head>
<body>
	<%@ include file="../common/header.jsp" %>
	
	<div id="resultModal"></div>
	
	<div id="game2Form">
		<div class="game2Form_con">
			<h1><b style="color:#1E90FF;">홀</b><b style="color:#DC143C;">짝</b> 게임</h1>
			<h3>배팅 시 배팅액 차감, 성공 시 배팅액의 2배를 가져갑니다.<br/>게임 결과까지 10초 남았을 때, 게임 시작 후 10초 동안은 배팅이 제한됩니다.</h3>
			<div class="game2Form_left">
				<img src="images/games/slot-machine-159972_640.png" id="left_image2">
				<div id="countdown"></div>
				<span><input type="button" id="choiceHol" value="홀" onclick="selectChoice('홀')"></span>
				<span><input type="button" id="choiceJjak" value="짝" onclick="selectChoice('짝')"></span>
				<div class="bat_con">
					<div class="pointArea"></div>
					<input type="text" id="battingText" placeholder="배팅액">
					<input type="button" id="battingBut" value="배팅하기" onclick="fn_batting()">
				</div>
			</div>
			<div class="game2Form_right">
			    <div id="chatArea"></div>
			    <input type="text" id="messageInput" placeholder="사람들과 소통하세요!" onkeyup="enterkey()">
			    <input type="button" id="sendMessageButton" onclick="sendMessage()" value="보내기">
			</div>
		</div>
	</div>
	
	<%@ include file="../common/footer.jsp" %>
</body>
</html>