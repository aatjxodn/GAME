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
						<th style="background-color: #014b99; color:white;">3.정보입력</th>
						<th>4.가입완료</th>
					</tr>
				</table>
			</div>
			
			<div class="signUp3_form">
				<h3>회원가입을 환영합니다.</h3>
				<h5><b style="color:red;">*</b> 표시는 필수입력항목입니다.</h5>
				<ul>
					<li>이름 <b style="color:red;">*</b></li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="NAME" placeholder="이름을 입력하세요."></li>
					<li>아이디 <b style="color:red;">*</b></li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="LOGIN_ID" placeholder="아이디를 입력하세요."><input type="button" id="LOGIN_ID_CHECK" value="중복확인" onclick="javascript:fn_idCheck();"></li>
					<li>비밀번호 <b style="color:red;">*</b></li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="password" id="LOGIN_PW1" placeholder="비밀번호를 입력하세요.">&emsp;<span id="checkPassword1"></span></li>
					<li>비밀번호 확인 <b style="color:red;">*</b></li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="password" id="LOGIN_PW2" placeholder="비밀번호를 입력하세요.">&emsp;<span id="checkPassword2"></span></li>
					<li>휴대폰번호 <b style="color:red;">*</b></li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="TEL1" placeholder="휴대폰번호 11자리를 -없이 입력하세요.  ex)01012345678"></li>
					<li>휴대폰번호2</li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="TEL2" placeholder="휴대폰번호2를 입력하세요."></li>
					<li>생년월일 <b style="color:red;">*</b></li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="JUMINNUM" placeholder="생년월일 8자리를 입력하세요.  ex)19950824"></li>
					<li>주소 <b style="color:red;">*</b></li>
					<li style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><input type="text" id="ADDRESS" placeholder="주소를 입력하세요." onclick="javascript:fn_searchAddress();"><input type="button" id="SEARCH_ADDRESS" value="주소검색" onclick="javascript:fn_searchAddress();"></li>
					<li><input type="hidden" id="BCODE"><li>
					<li>성별 <b style="color:red;">*</b></li>
					<li id="SEX_CHECK_AREA" style="border-bottom: 1px solid #ccc; padding-bottom: 20px;">
						<input type="checkbox" id="WC_SEX1" value="SEXT000000" checked>
						<label for="WC_SEX1">남자</label>
						<input type="checkbox" id="WC_SEX2" value="SEXT000001" >
						<label for="WC_SEX2">여자</label>
					</li>
				</ul>
			</div>
			
			<div class="signUp3_but">
				<input type="button" value="회원가입" onclick="javascript:fn_completeJoin();">
				<input type="button" value="취소" onclick="javascript:fn_exit();">
			</div>			
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>