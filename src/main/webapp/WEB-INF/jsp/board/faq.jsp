<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>샘플페이지</title>

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<link type="text/css" href="<c:url value='/css/common.css'/>" rel="stylesheet" />
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/faq.js'/>"></script>
</head>
<body>
	<%@ include file="../common/header.jsp" %>
	<div id="faqForm">
		<div class="faqForm_con">
			<div class="faqForm_con1">
				<h1>자주하는 질문</h1>
				<h2>"샘플홈페이지"의 자주하는 질문을 알려드립니다.</h2>
			</div>
			<div class="faqForm_con2">
				<table>
					<thead>
						<tr>
							<th width="10%">번호</th>
							<th width="60%">제목</th>
							<th width="10%">작성자</th>
							<th width="10%">등록일</th>
							<th width="10%">조회수</th>
						</tr>
					</thead>
					<tbody class="faqColumn">
					
				    </tbody>
				</table>
			</div>
			<div class="faqForm_con3">
			
			</div>
		</div>
	</div>
	<%@ include file="../common/footer.jsp" %>
</body>
</html>