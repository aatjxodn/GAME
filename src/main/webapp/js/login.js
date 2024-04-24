// 테스트
var apiUrl = "http://localhost:8081/BackAPI/rest_homepage.do";
// 실서버
//var apiUrl = "http://192.168.168.143:8080/BackAPI/rest_homepage.do";

// 로그인
function fn_login() {
	
	var LOGIN_PW = document.getElementById("LOGIN_PW").value;
	var HASH_LOGIN_PW = sha256(LOGIN_PW);
	
    const headers = {
        "CCODE": "GAME",
        "TYPE": "WEB",
        "TR": "CR00001",
        "Content-Type": "application/json"
    };
    
    const bodyData = {
        LOGIN_ID: document.getElementById("LOGIN_ID").value,
        LOGIN_PW: HASH_LOGIN_PW
    };

    $.ajax({
        url: apiUrl,
        type: "POST",
        headers: headers,
        contentType: "application/json",
        data: JSON.stringify(bodyData),
        success: function(data) {
            console.log("서버 응답 데이터:", data);
            
            if (data.clientAccessToken != null) {
            	var jwtToken = data.clientAccessToken;
                var jwtParts = jwtToken.split('.');
    	        var encodedPayload = jwtParts[1];
    	        var decodedPayload = atob(encodedPayload);
    	        var payloadObject = JSON.parse(decodedPayload);
    	        console.log(payloadObject);
                
    	        // 로컬 스토리지 저장
                localStorage.setItem("clientAccessToken", data.clientAccessToken);
                
                location.href="home.do";
                
            } else {
            	alert(data.MESSAGE);
            }
            
        },
        error: function(error) {
            console.error("API 호출 중 오류 발생:", error);
        }
    });

}

