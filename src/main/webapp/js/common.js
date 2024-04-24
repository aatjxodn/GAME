var local = localStorage.getItem("clientAccessToken");
var currentPageUrl = window.location.href;

$(document).ready(function() {
	
	if (local != null) {
		var jwtParts = local.split('.');
	    var encodedPayload = jwtParts[1];
	    var decodedPayload = new TextDecoder().decode(base64UrlDecode(encodedPayload));
	    var payloadObject = JSON.parse(decodedPayload);
        
        $(".header_con > .ul3").html("<ul><li><a style='cursor: pointer;' class='logout_but' onclick='javascript:fn_logout()'>로그아웃<a/></li><li><a class='myMenu_but' href='myMenu1.do'>나의메뉴<a/></li></ul>");
	
        // 현재 페이지가 myMenu1.do인 경우에만 실행
        if (currentPageUrl.indexOf("/myMenu1.do") !== -1) {
            document.getElementById('NAME').value = payloadObject.accessToken.NAME;
            document.getElementById('LOGIN_ID').value = payloadObject.accessToken.LOGIN_ID;
            document.getElementById('TEL1').value = payloadObject.accessToken.TEL1;
            document.getElementById('TEL2').value = payloadObject.accessToken.TEL2;
            document.getElementById('JUMINNUM').value = payloadObject.accessToken.JUMINNUM;
            document.getElementById('ADDRESS').value = payloadObject.accessToken.ADDRESS;
        }
	}
	
});


//Base64Url 디코딩 함수
function base64UrlDecode(input) {
    input = input.replace(/-/g, '+').replace(/_/g, '/');
    while (input.length % 4) {
        input += '=';
    }
    return new Uint8Array(Array.from(atob(input), c => c.charCodeAt(0)));
}

// 쿠키 확인
function fn_communication() {
	if (local == null) {
		alert("로그인이 필요한 서비스입니다.");
		location.href="login.do";
	} else {
		location.href="communication.do";
	}
}

//쿠키 확인
function fn_game1() {
	if (local == null) {
		alert("로그인이 필요한 서비스입니다.");
		location.href="login.do";
	} else {
		location.href="game1.do";
	}
}

//쿠키 확인
function fn_game2() {
	if (local == null) {
		alert("로그인이 필요한 서비스입니다.");
		location.href="login.do";
	} else {
		location.href="game2.do";
	}
}

//로그아웃
function fn_logout() {
	
	if (localStorage.getItem("successFlag") === 'true') {
		alert("배팅한 상태에서는 로그아웃이 불가능합니다.");
		return;
	}
	
    localStorage.removeItem('clientAccessToken')
    location.href="home.do";
}

