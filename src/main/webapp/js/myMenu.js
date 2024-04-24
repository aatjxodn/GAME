// 테스트
var apiUrl = "http://localhost:8081/BackAPI/rest_homepage.do";
// 실서버
//var apiUrl = "http://192.168.168.143:8080/BackAPI/rest_homepage.do";
// 로컬 토큰 가져오기
var localToken = localStorage.getItem("clientAccessToken");

var jwtParts = localToken.split('.');
var encodedPayload = jwtParts[1];
var decodedPayload = new TextDecoder().decode(base64UrlDecode(encodedPayload));
var payloadObject = JSON.parse(decodedPayload);

// 비밀번호 변경
function fn_passwordChange(){
	
	var CURRENT_PASSWORD = document.getElementById("CURRENT_PASSWORD").value;
	var NEW_PASSWORD1 = document.getElementById("NEW_PASSWORD1").value;
	var NEW_PASSWORD2 = document.getElementById("NEW_PASSWORD2").value;
	
	var HASH_CURRENT_PASSWORD = sha256(CURRENT_PASSWORD);
	var HASH_NEW_PASSWORD2 = sha256(NEW_PASSWORD2);
	
	if (CURRENT_PASSWORD == "") {
		alert("현재 비밀번호를 입력해주세요.");
		return;
	}
	if (NEW_PASSWORD1 == "") {
		alert("새로운 비밀번호를 입력해주세요.");
		return;
	}
	if (NEW_PASSWORD2 == "") {
		alert("새로운 비밀번호 확인을 입력해주세요.");
		return;
	}
	if (NEW_PASSWORD1 != NEW_PASSWORD2) {
		alert("새로운 비밀번호를 다시 한 번 확인해주세요.");
		document.getElementById('NEW_PASSWORD2').focus();
		document.getElementById('NEW_PASSWORD2').value = "";
		return;
	}
	
	const headers = {
        "CCODE": "GAME",
        "TYPE": "WEB",
        "TR": "CR00006",
        "Content-Type": "application/json"
    };
    
    const bodyData = {
    	IDX: payloadObject.accessToken.IDX,
    	CCODE: payloadObject.accessToken.CCODE
    };

    $.ajax({
        url: apiUrl,
        type: "POST",
        headers: headers,
        contentType: "application/json",
        data: JSON.stringify(bodyData),
        success: function(data) {
        	
        	console.log(data.getPassword);
        	
        	if (data.getPassword == HASH_CURRENT_PASSWORD) {
        		
        		const exitTrue = confirm("비밀번호를 변경하시겠습니까?");

        		if (exitTrue == true) {
        			
        			const headers = {
    			        "CCODE": "GAME",
    			        "TYPE": "WEB",
    			        "TR": "CU00001",
    			        "Content-Type": "application/json"
    			    };
    			    
    			    const bodyData = {
    			    	IDX: payloadObject.accessToken.IDX,
    			        CCODE: payloadObject.accessToken.CCODE,
    			    	LOGIN_PW: HASH_NEW_PASSWORD2
    			    };

    			    $.ajax({
    			        url: apiUrl,
    			        type: "POST",
    			        headers: headers,
    			        contentType: "application/json",
    			        data: JSON.stringify(bodyData),
    			        success: function(data) {
    			        	
    			        	alert("비밀번호가 변경되었습니다.");
    			            
    			        	location.href="myMenu2.do";
    			            
    			        },
    			        error: function(error) {
    			            console.error("API 호출 중 오류 발생:", error);
    			        }
    			    });
        				
        		} else {
        			return;
        		}
        		
        	} else {
        		alert("현재 비밀번호가 틀립니다.");
        		document.getElementById('CURRENT_PASSWORD').focus();
        		document.getElementById('CURRENT_PASSWORD').value = "";
        		return;
        	}
        	
            
        },
        error: function(error) {
            console.error("API 호출 중 오류 발생:", error);
        }
    });
	
}

// 회원 탈퇴
function fn_Withdrawal() {
	
	var checkbox = document.getElementById("myMenu3_form_Check");
    
    if (!checkbox.checked) {
        alert("회원탈퇴에 동의해야 탈퇴할 수 있습니다.");
        return;
    }
	
	const exitTrue = confirm("탈퇴하면 되돌릴 수 없습니다.\n정말 탈퇴하시겠습니까?");

	if (exitTrue == true) {
		
		const headers = {
		        "CCODE": "GAME",
		        "TYPE": "WEB",
		        "TR": "CD00001",
		        "Content-Type": "application/json"
		    };
		    
		    const bodyData = {
		    	IDX: payloadObject.accessToken.IDX,
		        CCODE: payloadObject.accessToken.CCODE
		    };

		    $.ajax({
		        url: apiUrl,
		        type: "POST",
		        headers: headers,
		        contentType: "application/json",
		        data: JSON.stringify(bodyData),
		        success: function(data) {
		        	alert("탈퇴하셨습니다. 이용해주셔서 감사합니다.");
		        	localStorage.removeItem('clientAccessToken')
		            location.href="home.do";
		        },
		        error: function(error) {
		            console.error("API 호출 중 오류 발생:", error);
		        }
		    });
		
	} else {
		return;
	}
}

//취소 버튼 누를 시
function fn_exit(){
	
	const exitTrue = confirm("취소 하시겠습니까?");

	if (exitTrue == true) {
		alert("취소하셨습니다.");
		location.href="home.do";
	} else {
		return;
	}
	
}