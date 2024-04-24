// 테스트
var apiUrl = "http://localhost:8081/BackAPI/rest_homepage.do";
// 실서버
//var apiUrl = "http://192.168.168.143:8080/BackAPI/rest_homepage.do";

//전역 변수로 중복 체크 여부를 저장할 변수 추가
var isIdChecked = false;
//비밀번호 체크
var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
var sendSMS = "";

window.onload = function(){
	
	if(sessionStorage.getItem('TEL1') != null) {
		
		document.getElementById('NAME').value = sessionStorage.getItem('NAME');
		document.getElementById('TEL1').value = sessionStorage.getItem('TEL1');
		const target = document.getElementById('NAME');
		const target2 = document.getElementById('TEL1');
		target.disabled = true;
		target2.disabled = true;
		sessionStorage.clear()
	}
	
	checkPassword();
	// 동의에 체크일 때, 동의하지않음에 체크 해제
	document.addEventListener('DOMContentLoaded', function () {
		const termsCheckbox1 = document.getElementById('terms01');
	    const noTermsCheckbox1 = document.getElementById('no_terms01');
	    const termsCheckbox2 = document.getElementById('terms02');
	    const noTermsCheckbox2 = document.getElementById('no_terms02');
	    const termsCheckbox3 = document.getElementById('terms03');
	    const noTermsCheckbox3 = document.getElementById('no_terms03');
	    const termsCheckbox4 = document.getElementById('terms04');
	    const noTermsCheckbox4 = document.getElementById('no_terms04');
	    const termsCheckbox5 = document.getElementById('terms05');
	    const noTermsCheckbox5 = document.getElementById('no_terms05');
	    const all_check_but = document.getElementById('all_check_but');

	    termsCheckbox1.addEventListener('change', function () {
	        if (termsCheckbox1.checked) {
	            noTermsCheckbox1.checked = false;
	        }
	    });

	    noTermsCheckbox1.addEventListener('change', function () {
	        if (noTermsCheckbox1.checked) {
	            termsCheckbox1.checked = false;
	            all_check_but.checked=false;
	        }
	    });
	    
	    termsCheckbox2.addEventListener('change', function () {
	        if (termsCheckbox2.checked) {
	            noTermsCheckbox2.checked = false;
	        }
	    });

	    noTermsCheckbox2.addEventListener('change', function () {
	        if (noTermsCheckbox2.checked) {
	            termsCheckbox2.checked = false;
	            all_check_but.checked=false;
	        }
	    });
	    
	    termsCheckbox3.addEventListener('change', function () {
	        if (termsCheckbox3.checked) {
	            noTermsCheckbox3.checked = false;
	        }
	    });

	    noTermsCheckbox3.addEventListener('change', function () {
	        if (noTermsCheckbox3.checked) {
	            termsCheckbox3.checked = false;
	            all_check_but.checked=false;
	        }
	    });
	    
	    termsCheckbox4.addEventListener('change', function () {
	        if (termsCheckbox4.checked) {
	            noTermsCheckbox4.checked = false;
	        }
	    });

	    noTermsCheckbox4.addEventListener('change', function () {
	        if (noTermsCheckbox4.checked) {
	            termsCheckbox4.checked = false;
	            all_check_but.checked=false;
	        }
	    });
	    
	    termsCheckbox5.addEventListener('change', function () {
	        if (termsCheckbox5.checked) {
	            noTermsCheckbox5.checked = false;
	        }
	    });

	    noTermsCheckbox5.addEventListener('change', function () {
	        if (noTermsCheckbox5.checked) {
	            termsCheckbox5.checked = false;
	            all_check_but.checked=false;
	        }
	    });
	    
	});
	
	// 전체 체크 시 전체 체크 버튼에 체크 표시
	document.addEventListener('DOMContentLoaded', function () {
	    const checkboxes = document.querySelectorAll('input[name^="terms"]');
	    const allCheckButton = document.getElementById('all_check_but');

	    checkboxes.forEach((checkbox) => {
	        checkbox.addEventListener('change', updateAllCheckButton);
	    });

	    function updateAllCheckButton() {
	        const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
	        allCheckButton.checked = allChecked;
	    }

	    allCheckButton.addEventListener('change', function () {
	        checkboxes.forEach((checkbox) => {
	            checkbox.checked = allCheckButton.checked;
	        });
	    });
	});
	
	//DOM에서 체크박스 요소들을 가져옵니다.
	var checkboxMale = document.getElementById('WC_SEX1');
	var checkboxFemale = document.getElementById('WC_SEX2');

	// 남자 체크박스의 이벤트 리스너를 추가합니다.
	checkboxMale.addEventListener('change', function() {
	    // 남자 체크박스가 선택되면 여자 체크박스를 해제합니다.
	    if (checkboxMale.checked) {
	        checkboxFemale.checked = false;
	    }
	});

	// 여자 체크박스의 이벤트 리스너를 추가합니다.
	checkboxFemale.addEventListener('change', function() {
	    // 여자 체크박스가 선택되면 남자 체크박스를 해제합니다.
	    if (checkboxFemale.checked) {
	        checkboxMale.checked = false;
	    }
	});
}


// 다음 버튼 누를 시
function fn_join(){
	if($("input:checkbox[name=terms01]").is(":checked") == false) {
		alert('회원약관에 동의해야 가입이 가능합니다.');
		return;
	}
	if ($("input:checkbox[name=terms02]").is(":checked") == false) {
		alert('개인정보 수집·이용 동의에 동의해야 가입이 가능합니다.');
		return;
	}
	
	location.href="signUp2.do";
	
}

// 취소 버튼 누를 시
function fn_exit(){
	
	const exitTrue = confirm("취소 하시겠습니까?");

	if (exitTrue == true) {
		alert("취소하셨습니다.")
		location.href="home.do";
	} else {
		return;
	}
	
}

//전체 체크 
function all_check(selectAll) {
    const termsCheckboxes = document.querySelectorAll('input[name^="terms"]');
    const noTermsCheckbox1 = document.getElementById('no_terms01');
    const noTermsCheckbox2 = document.getElementById('no_terms02');
    const noTermsCheckbox3 = document.getElementById('no_terms03');
    const noTermsCheckbox4 = document.getElementById('no_terms04');
    const noTermsCheckbox5 = document.getElementById('no_terms05');

    termsCheckboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    });

    if (selectAll.checked) {
        noTermsCheckbox1.checked = false;
        noTermsCheckbox2.checked = false;
        noTermsCheckbox3.checked = false;
        noTermsCheckbox4.checked = false;
        noTermsCheckbox5.checked = false;
    }
}

//JavaScript 코드
function checkPassword() {
	 $('#LOGIN_PW1').keyup(function(){		
		if (pwdCheck.test($('#LOGIN_PW1').val())) {
			$('#checkPassword1').html('사용 가능한 비밀번호입니다!');
			$("#checkPassword1").css('font-size', '16px');
		 	$('#checkPassword1').css('color', '#4caf50');
		 } else {
			$('#checkPassword1').html('비밀번호는 영문자+숫자+특수문자조합으로 8~25자리 사용해야 합니다.');
		    $("#checkPassword1").css('font-size', '16px');
			$("#checkPassword1").css('color', '#d32f2f');
		 }
     });
	 $('#LOGIN_PW1').keyup(function(){
	     if($('#LOGIN_PW2').val() != $('#LOGIN_PW1').val()){
	       $('#checkPassword2').html('비밀번호가 일치하지 않습니다.');
	       $('#checkPassword2').css('color', '#d32f2f');
	       $('#checkPassword2').css('text-align', 'left');
	       $("#checkPassword2").css('font-size', '16px');
	     } else{
	       $('#checkPassword2').html('비밀번호가 일치합니다!');
	       $('#checkPassword2').css('color', '#4caf50');
	       $('#checkPassword2').css('text-align', 'left');
	       $("#checkPassword2").css('font-size', '16px');
	     }
	 });
	 $('#LOGIN_PW2').keyup(function(){
	     if($('#LOGIN_PW1').val() != $('#LOGIN_PW2').val()){
	       $('#checkPassword2').html('비밀번호가 일치하지 않습니다.');
	       $('#checkPassword2').css('color', '#d32f2f');
	       $('#checkPassword2').css('text-align', 'left');
	       $("#checkPassword2").css('font-size', '16px');
	     } else{
	       $('#checkPassword2').html('비밀번호가 일치합니다!');
	       $('#checkPassword2').css('color', '#4caf50');
	       $('#checkPassword2').css('text-align', 'left');
	       $("#checkPassword2").css('font-size', '16px');
	     }
	 });
}

// 아이디 중복체크
function fn_idCheck() {
	
	var LOGIN_ID = document.getElementById('LOGIN_ID').value;
	
	if (LOGIN_ID == "") {
		alert("아이디를 입력해주세요.");
		return;
	}
	
	const headers = {
	        "CCODE": "GAME",
	        "TYPE": "WEB",
	        "TR": "CR00004",
	        "Content-Type": "application/json"
	    };
	    
	    const bodyData = {
	        LOGIN_ID: LOGIN_ID
	    };

	    $.ajax({
	        url: apiUrl,
	        type: "POST",
	        headers: headers,
	        contentType: "application/json",
	        data: JSON.stringify(bodyData),
	        success: function(data) {
	        	
	        	if (data.COUNT == 0) {
	        		alert("사용 가능한 아이디입니다.");
	        		isIdChecked = true;
	        		
	        		const target = document.getElementById('LOGIN_ID');
	        		const target2 = document.getElementById('LOGIN_ID_CHECK');
	        		target.disabled = true;
	        		target2.disabled = true;
	        		
	        	} else {
	        		alert("중복된 아이디입니다.");
	        		document.getElementById('LOGIN_ID').value = "";
	        		isIdChecked = false;
	        	}
	            
	        },
	        error: function(error) {
	            console.error("API 호출 중 오류 발생:", error);
	        }
	    });
}

// 회원가입 완료
function fn_completeJoin() {
	
	var NAME = document.getElementById('NAME').value;
	var LOGIN_ID = document.getElementById('LOGIN_ID').value;
	var LOGIN_PW1 = document.getElementById('LOGIN_PW1').value;
	var LOGIN_PW2 = document.getElementById('LOGIN_PW2').value;
	var TEL1 = document.getElementById('TEL1').value;
	var TEL2 = document.getElementById('TEL2').value;
	var JUMINNUM = document.getElementById('JUMINNUM').value;
	var ADDRESS = document.getElementById('ADDRESS').value;
	var BCODE = document.getElementById('BCODE').value;
	var WC_SEX1 = document.getElementById('WC_SEX1');
	var WC_SEX2 = document.getElementById('WC_SEX2');
	var WC_SEX = WC_SEX1.checked ? WC_SEX1.value : WC_SEX2.checked ? WC_SEX2.value : null;

	var HASH_LOGIN_PW2 = sha256(LOGIN_PW2);
//	var HASH_NAME = sha256(NAME);
//	var HASH_TEL1 = sha256(TEL1);
//	var HASH_TEL2 = sha256(TEL2);
//	var HASH_JUMINNUM = sha256(JUMINNUM);
//	var HASH_ADDRESS = sha256(ADDRESS);
	
	if (!isIdChecked) {
        alert("아이디 중복 체크를 먼저 진행해주세요.");
        return;
    }
	
	if (NAME == "") {
		alert("이름을 입력해주세요.");
		document.getElementById('NAME').focus();
		return;
	}
	if (LOGIN_ID == "") {
		alert("아이디를 입력해주세요.");
		document.getElementById('LOGIN_ID').focus();
		return;
	}
	if (LOGIN_PW1 == "") {
		alert("비밀번호를 입력해주세요.");
		document.getElementById('LOGIN_PW1').focus();
		return;
	}
	if (LOGIN_PW2 == "") {
		alert("비밀번호를 확인해주세요.");
		document.getElementById('LOGIN_PW2').focus();
		return;
	}
	if (LOGIN_PW1 != LOGIN_PW2) {
		alert("비밀번호가 틀립니다.");
		document.getElementById('LOGIN_PW1').focus();
		document.getElementById('LOGIN_PW1').value = "";
		document.getElementById('LOGIN_PW2').value = "";
		return;
	}
	if (TEL1 == "") {
		alert("휴대폰번호를 입력해주세요.");
		document.getElementById('TEL1').focus();
		return;
	}
	if (!/^\d+$/.test(TEL1) || TEL1.length !== 11) {
	    alert("숫자로 이루어진 11자리의 전화번호를 입력해주세요.");
	    document.getElementById('TEL1').focus();
	    document.getElementById('TEL1').value = "";
	    return;
	}
	if (JUMINNUM == "") {
		alert("생년월일을 입력해주세요.");
		document.getElementById('JUMINNUM').focus();
		return;
	}
	if (!/^\d+$/.test(JUMINNUM) || JUMINNUM.length !== 8) {
	    alert("숫자로 이루어진 8자리의 생년월일을 입력해주세요.");
	    document.getElementById('JUMINNUM').focus();
	    document.getElementById('JUMINNUM').value = "";
	    return;
	}
	if (ADDRESS == "") {
		alert("주소를 입력해주세요.");
		document.getElementById('ADDRESS').focus();
		return;
	}
	if (BCODE == "") {
		alert("주소를 검색해서 입력해주세요.");
		document.getElementById('ADDRESS').focus();
		document.getElementById('ADDRESS').value = "";
		return;
	}
	if (WC_SEX == null) {
		alert("성별을 선택해주세요.");
		document.getElementById('WC_SEX1').focus();
		return;
	}
	
	const completeJoin = confirm("회원가입 하시겠습니까?");

	if (completeJoin == true) {
		
		alert("가입에 성공하셨습니다.")
		
		const headers = {
	        "CCODE": "GAME",
	        "TYPE": "WEB",
	        "TR": "CC00001",
	        "Content-Type": "application/json"
	    };
	    
	    const bodyData = {
	        NAME: NAME,
	        LOGIN_ID: LOGIN_ID,
	        LOGIN_PW: HASH_LOGIN_PW2,
	        TEL1: TEL1,
	        TEL2: TEL2,
	        JUMINNUM: JUMINNUM,
	        ADDRESS: ADDRESS,
	        BCODE: BCODE,
	        WC_SEX: WC_SEX
	    };

	    $.ajax({
	        url: apiUrl,
	        type: "POST",
	        headers: headers,
	        contentType: "application/json",
	        data: JSON.stringify(bodyData),
	        success: function(data) {
	            
	            location.href="signUp4.do"
	            
	        },
	        error: function(error) {
	            console.error("API 호출 중 오류 발생:", error);
	        }
	    });
		
	} else {
		alert("취소하셨습니다.");
		return;
	}

}

// 주소검색
function fn_searchAddress() {
	new daum.Postcode({
        oncomplete: function(data) {
        	document.getElementById('ADDRESS').value = data.address;
        	document.getElementById('BCODE').value = data.bcode;
        }
    }).open();
}

// 문자전송
function fn_sendSMS() {
	
	var TEL1 = document.getElementById('TEL1').value;
	var NAME = document.getElementById('NAME').value;
	
	if (NAME == "") {
		alert("이름을 입력해주세요.");
		document.getElementById('NAME').focus();
		return;
	}
	if (TEL1 == "") {
		alert("휴대폰번호를 입력해주세요.");
		document.getElementById('TEL1').focus();
		return;
	}
	if (!/^\d+$/.test(TEL1) || TEL1.length !== 11) {
	    alert("숫자로 이루어진 11자리의 전화번호를 입력해주세요.");
	    document.getElementById('TEL1').focus();
	    document.getElementById('TEL1').value = "";
	    return;
	}
	
	const headers = {
        "CCODE": "GAME",
        "TYPE": "WEB",
        "TR": "SMS0001",
        "Content-Type": "application/json"
    };
    
    const bodyData = {
        TEL1: TEL1
    };

    $.ajax({
        url: apiUrl,
        type: "POST",
        headers: headers,
        contentType: "application/json",
        data: JSON.stringify(bodyData),
        success: function(data) {
        	
        	alert("인증번호를 전송하였습니다.");
        	document.getElementById('completeSendSMS').focus();
        	sendSMS = data.randomNum;
            
        },
        error: function(error) {
            console.error("API 호출 중 오류 발생:", error);
        }
    });
}

// 문자인증 확인
function fn_completeSendSMS() {
	
	var completeSendSMS = document.getElementById('completeSendSMS').value;
	var NAME = document.getElementById('NAME').value;
	var TEL1 = document.getElementById('TEL1').value;
	
	const headers = {
        "CCODE": "GAME",
        "TYPE": "WEB",
        "TR": "CR00005",
        "Content-Type": "application/json"
    };
    
    const bodyData = {
        TEL1: TEL1
    };

    $.ajax({
        url: apiUrl,
        type: "POST",
        headers: headers,
        contentType: "application/json",
        data: JSON.stringify(bodyData),
        success: function(data) {
        	
        	if (data.COUNT == 0) {
        		if (sendSMS == completeSendSMS) {
            		alert("인증 확인되었습니다.");
            		
            		sessionStorage.setItem('TEL1', TEL1);
                    sessionStorage.setItem('NAME', NAME);
            		
            		location.href="signUp3.do";
            	} else {
            		alert("인증번호가 틀렸습니다.");
            		document.getElementById('completeSendSMS').value = "";
            		document.getElementById('completeSendSMS').focus();
            		return;
            	}
        	} else {
        		alert("이미 가입된 번호가 있습니다.");
        		document.getElementById('NAME').value = "";
        		document.getElementById('TEL1').value = "";
        		document.getElementById('completeSendSMS').value = "";
        		document.getElementById('NAME').focus();
        		return;
        	}
            
        },
        error: function(error) {
            console.error("API 호출 중 오류 발생:", error);
        }
    });
	
}


