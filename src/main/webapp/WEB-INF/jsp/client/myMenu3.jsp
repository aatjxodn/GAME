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
						<th><a href="myMenu2.do">비밀번호변경</a></th>
						<th style="background-color: #014b99;"><a href="myMenu3.do" style="color:white;">회원탈퇴</a></th>
					</tr>
				</table>
			</div>
			
			<div class="myMenu3_form">
				<h3>회원탈퇴 진행절차입니다.</h3>
				<h4>탈퇴 시 회원님의 모든 정보가 삭제되고, 복구하실 수 없습니다. 정말 탈퇴하시겠습니까?</h4>
				<div class="myMenu3_form1" contenteditable="false">
					<h4>
				    	회원의 신상정보에 대해서는 '개인정보보호에 관한 법률＇에 따라 완벽한 보안을 유지할 것입니다. 남양주시 교통약자 이동지원센터 회원으로 가입하시려면 먼저 약관에 동의 하셔야 합니다.<br/>
						회원가입은 홈페이지 상에서만 이루어집니다.<br/>
						아래의 이용약관을 반드시 읽어보신 후, 가입신청을 해주시기 바랍니다.<br/><br/>
				    </h4>
	
					제 1 장 총칙<br/><br/>
					
					제 1 조 (목적)본 약관은 남양주시 교통약자 이동지원센터 사이트가 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차, 이용자와 남양주시 교통약자 이동지원센터 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.<br/><br/>
					
					제 2 조 (약관의 효력과 변경)
					1. 남양주시 교통약자 이동지원센터 사이트는 귀하가 본 약관 내용에 동의하는 경우, 남양주시 교통약자 이동지원센터 사이트의 서비스 제공 행위 및 귀하의 서비스 사용 행위에 본 약관이 우선적으로 적용됩니다.<br/>
					2. 남양주시 교통약자 이동지원센터 사이트는 본 약관을 사전 고지 없이 변경할 수 있고, 변경된 약관은 남양주시 교통약자 이동지원센터 사이트 내에 공지하거나 e-mail을 통해 회원에게 공지하며, 공지와 동시에 그 효력이 발생됩니다. 이용자가 변경된 약관에 동의하지 않는 경우, 이용자는 본인의 회원등록을 취소(회원탈퇴)할 수 있으며 계속 사용의 경우는 약관 변경에 대한 동의로 간주됩니다.<br/><br/>
				</div>
				<div class="myMenu3_form_Check_Area">
					<input type="checkbox" id="myMenu3_form_Check"> <label for="myMenu3_form_Check" style="cursor: pointer;">회원탈퇴에 동의합니다.</label>
				</div>
			</div>
			
			<div class="myMenu3_but">
				<input type="button" value="탈퇴하기" onclick="javascript:fn_Withdrawal();">
			</div>			
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>