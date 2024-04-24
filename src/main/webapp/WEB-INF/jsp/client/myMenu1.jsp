<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>샘플페이지</title>
<link type="text/css" href="<c:url value='/css/common.css'/>" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"></script>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/myMenu.js'/>"></script>

</head>
<body>
	<%@ include file="../common/header.jsp" %>
	<div id="myMenu1">
		<div class="myMenu1_con">
			<div class="myMenu1_head">
				<h1>나의메뉴</h1>
				<h2>기본정보 및 비밀번호 변경 및 회원탈퇴를 진행하실 수 있습니다.</h2>
				<table>
					<tr>
						<th style="background-color: #014b99; color:white;"><a href="myMenu1.do" style="color:white;">기본정보</a></th>
						<th><a href="myMenu2.do">비밀번호변경</a></th>
						<th><a href="myMenu3.do">회원탈퇴</a></th>
					</tr>
				</table>
			</div>
			
			<div class="myMenu1_form">
				<h3>나의 기본정보를 확인하실 수 있습니다.</h3>
				<ul>
					<li>이름</li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="NAME" disabled="disabled"></li>
					<li>아이디</li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="LOGIN_ID" disabled="disabled"></li>
					<li>휴대폰번호</li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="TEL1" disabled="disabled"></li>
					<li>휴대폰번호2</li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="TEL2" disabled="disabled"></li>
					<li>생년월일</li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="JUMINNUM" disabled="disabled"></li>
					<li>주소</li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="ADDRESS" disabled="disabled"></li>
				</ul>
			</div>
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>