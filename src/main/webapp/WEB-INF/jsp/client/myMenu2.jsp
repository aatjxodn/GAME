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
						<th><a href="myMenu1.do">기본정보</a></th>
						<th style="background-color: #014b99; color:white;"><a href="myMenu2.do" style="color:white;">비밀번호변경</a></th>
						<th><a href="myMenu3.do">회원탈퇴</a></th>
					</tr>
				</table>
			</div>
			
			<div class="myMenu2_form">
				<h3>나의 비밀번호를 변경하실 수 있습니다.</h3>
				<ul>
					<li>
						<div>현재 비밀번호</div>
						<input type="password" id="CURRENT_PASSWORD" placeholder="현재 비밀번호를 입력하세요.">
					</li>
					<li>
						<div>새로운 비밀번호</div>
						<input type="password" id="NEW_PASSWORD1" placeholder="새로운 비밀번호를 입력하세요.">
					</li>
					<li>
						<div>새로운 비밀번호 확인</div>
						<input type="password" id="NEW_PASSWORD2" placeholder="새로운 비밀번호를 확인하세요.">
					</li>
				</ul>
			</div>
			
			<div class="myMenu2_form_but">
				<input type="button" value="변경하기" onclick="javascript:fn_passwordChange();">
				<input type="button" value="취소" onclick="javascript:fn_exit();">
			</div>			
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>