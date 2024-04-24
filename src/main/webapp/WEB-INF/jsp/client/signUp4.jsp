<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>샘플페이지</title>
<link type="text/css" href="<c:url value='/css/common.css'/>" rel="stylesheet" />
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/signUp.js'/>"></script>

</head>
<body>
	<%@ include file="../common/header.jsp" %>
	<div id="signUp1">
		<div class="signUp1_con">
			<div class="signUp1_head">
				<h1>정보입력</h1>
				<h2>회원가입 후 다양한 서비스를 이용하실 수 있습니다.</h2>
				<table>
					<tr>
						<th>1.약관동의</th>
						<th>2.본인인증</th>
						<th>3.정보입력</th>
						<th style="background-color: #014b99; color:white;">4.가입완료</th>
					</tr>
				</table>
			</div>
			
			<div class="signUp4_form">
				<h3>회원가입을 환영합니다.</h3>
				<h5>회원가입에 성공하셨습니다. 다양한 서비스를 즐겨보세요.</h5>
			</div>
			
			<div class="signUp3_but">
				<a href="login.do">로그인</a>
			</div>			
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>