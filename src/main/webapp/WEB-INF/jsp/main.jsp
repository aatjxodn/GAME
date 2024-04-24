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
<script type="text/javascript" src="<c:url value='/js/banner.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/login.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/notice.js'/>"></script>

</head>

<body>
	<%@ include file="common/header.jsp" %><br/>
	<div id="mainPage">
		<div class="mainPage_con">
			<!-- 메인 -->
			<div class="mainPage_con1">
				<div class="left_main">
					<div class="left_main_top">
						<h2>홀.짝</h2>
						<h3>홀.짝 게임을 하려면 클릭!</h3>
					</div>
					<div class="left_main_bottom">
						<h2>사다리</h2>
						<h3>사다리 게임을 하려면 클릭!</h3>
					</div>
				</div>
				<div class="right_main">
					<table>
						<thead>
							<tr>
								<th>공지사항</th>
								<th>자주하는 질문</th>
							</tr>
						</thead>
						<tbody class="noticeColumn">
					
				    	</tbody>
					</table>
				</div>
			</div>
			<!-- 메인 끝 -->
		</div>
	</div>
	<div id="mainPage">
		<div class="mainPage_con">
			<!-- 슬라이드 배너 시작 -->
			<div class="mainPage_banner">
		    	<ul class="mainPage_banners">
		        	<li class="slide1"><img src="images/banners/" /></li>
		            <li class="slide2"><img src="images/banners/" /></li>
		            <li class="slide3"><img src="images/banners/" /></li>
		            <li class="slide4"><img src="images/banners/" /></li>
		            <li class="slide5"><img src="images/banners/" /></li>
		            <li class="slide6"><img src="images/banners/" /></li>
		        </ul>
		        <div id="slider-nav">
					<div id="slider-nav-prv">&#10094;</div>
					<div id="slider-nav-nxt">&#10095;</div>
					<div id="slider-nav-dot-con">			
						<span class="slider-nav-dot" id="nav-dot1"></span>
						<span class="slider-nav-dot" id="nav-dot2"></span>
						<span class="slider-nav-dot" id="nav-dot3"></span> 
						<span class="slider-nav-dot" id="nav-dot4"></span>
						<span class="slider-nav-dot" id="nav-dot5"></span>
						<span class="slider-nav-dot" id="nav-dot6"></span>
					</div>
				</div>
		    </div>
			<!-- 슬라이드 배너 끝 -->
		</div>
	</div>
	<%@ include file="common/footer.jsp" %>
</body>
</html>