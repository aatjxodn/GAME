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

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

</head>
<body>
	<%@ include file="../common/header.jsp" %>
	<div id="signUp1">
		<div class="signUp1_con">
			<div class="signUp1_head">
				<h1>본인인증</h1>
				<h2>회원가입 후 다양한 서비스를 이용하실 수 있습니다.</h2>
				<table>
					<tr>
						<th>1.약관동의</th>
						<th style="background-color: #014b99; color:white;">2.본인인증</th>
						<th>3.정보입력</th>
						<th>4.가입완료</th>
					</tr>
				</table>
			</div>
			
			<h3>회원가입을 환영합니다.</h3>
			<div class="signUp2_smsTable">
				<table>
					<tr>
						<th>이름</th>
						<td><input type="text" id="NAME" placeholder="이름을 입력하세요."></td>
					</tr>
					<tr>
						<th>휴대폰번호</th>
						<td>
							<input type="text" id="TEL1" placeholder="휴대폰 번호를 입력하세요.">
							<input type="button" id="sendSMSBut" onclick="javascript:fn_sendSMS();" value="인증번호 발송">
						</td>
						<th>인증번호</th>
						<td>
							<input type="text" id="completeSendSMS" placeholder="인증번호를 입력하세요.">
							<input type="button" id="completeSendSMSBut" onclick="javascript:fn_completeSendSMS();" value="확인">
						</td>
					</tr>
				</table>
			</div>			
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>