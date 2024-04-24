// 테스트
var apiUrl = "http://localhost:8081/BackAPI/rest_homepage.do";
// 실서버
//var apiUrl = "http://192.168.168.143:8080/BackAPI/rest_homepage.do";
// 로컬 토큰 가져오기
var localToken = localStorage.getItem("clientAccessToken");

$(document).ready(function() {
	
	if (localToken != null) {
		
	    const headers = {
	        "CCODE": "GAME",
	        "TYPE": "WEB",
	        "TR": "CR00002",
	        "Content-Type": "application/json"
	    };
	    
	    const bodyData = {
	    	clientAccessToken: localToken
	    };
	
	    $.ajax({
	        url: apiUrl,
	        type: "POST",
	        headers: headers,
	        contentType: "application/json",
	        data: JSON.stringify(bodyData),
	        success: function(data) {
	        	
	        	console.log(data);
	            
	            if (data.clientAccessAvailable == false) {
	            	localStorage.removeItem('clientAccessToken');
	            	localStorage.setItem("clientAccessToken", data.clientAccessToken);
	            }
	            if (data.clientRefreshAvailable == false) {
	            	alert("세션이 만료되었습니다.\n다시 로그인 해주세요.");
	            	localStorage.removeItem('clientAccessToken');
	            	location.href="login.do";
	            }
	            
	        },
	        error: function(error) {
	            console.error("API 호출 중 오류 발생:", error);
	        }
	    });
	}
});
	
