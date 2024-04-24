// 테스트
var apiUrl = "http://localhost:8081/BackAPI/rest_homepage.do";
// 실서버
//var apiUrl = "http://192.168.168.143:8080/BackAPI/rest_homepage.do";

var currentPoint = 0;
var selectedChoice = null;
var local = localStorage.getItem("clientAccessToken");
var jwtParts = local.split('.');
var encodedPayload = jwtParts[1];
var decodedPayload = new TextDecoder().decode(base64UrlDecode(encodedPayload));
var payloadObject = JSON.parse(decodedPayload);
console.log(payloadObject);

$(document).ready(function() {
	
	mouseEvent();
	mouseHover();
	
	if (localStorage.getItem('successFlag') === 'true') {
		$(".bat_con > .pointArea").html("정산 중.....");
		$('#battingText').val('');
	    $('#battingText').attr('placeholder', '배팅액');
	} else {
		fn_selectPoint();
	}
	
	startCountdown();

});

// 현재시간 체크 및 게임 시간 체크
function startCountdown() {

	var countdownElement = document.getElementById('countdown');

	function updateCountdown() {
		var currentTime = new Date();
		var seconds = 60 - currentTime.getSeconds();

		if (seconds >= 0) {
			var displaySeconds = (seconds < 10 ? "0" : "") + seconds;
			countdownElement.textContent = "남은 시간: " + displaySeconds + "초";

			if (seconds < 10 || seconds > 50) {
				battingTrue();
			} else {
				battingFalse();
			}

			if (seconds === 1) {
				
				const headers = {
					"CCODE" : "GAME",
					"TYPE" : "WEB",
					"TR" : "GG00002",
					"Content-Type" : "application/json"
				};

				const bodyData = {
					CHOICE : "",
					GAMEPOINT : parseInt(localStorage.getItem('batPoint'), 10) || 0,
					IDX : payloadObject.accessToken.IDX
				};

				$.ajax({
					url : apiUrl,
					type : "POST",
					headers : headers,
					contentType : "application/json",
					data : JSON.stringify(bodyData),
					success : function(data) {
						
						console.log("결과 : " + data.gameResult);
						
						if (localStorage.getItem('selectedChoice') == data.gameResult) {
							
							const headers = {
								"CCODE" : "GAME",
								"TYPE" : "WEB",
								"TR" : "GG00003",
								"Content-Type" : "application/json"
							};

							const bodyData = {
								CHOICE : localStorage.getItem('selectedChoice'),
								GAMEPOINT : localStorage.getItem('batPoint') || 0,
								IDX : payloadObject.accessToken.IDX
							};

							$.ajax({
								url : apiUrl,
								type : "POST",
								headers : headers,
								contentType : "application/json",
								data : JSON.stringify(bodyData),
								success : function(data) {
									
									currentPoint = data.currentPoint;
									$(".bat_con > .pointArea").html("보유 포인트 : " + data.currentPoint + "p");
									$('#battingText').val('');
								    $('#battingText').attr('placeholder', '배팅액');
									
								},
								error : function(error) {
									console.error("API 호출 중 오류 발생:", error);
								}
							});
							
						}
						
						setTimeout(function() {
							fn_selectPoint()
							localStorage.removeItem('successFlag');
							localStorage.removeItem('selectedChoice');
							localStorage.removeItem('batPoint');
							
							$("#resultModal").html("게임 결과: " + data.gameResult + "! <a class='modal_close_btn'>닫기</a>");
							modal('resultModal');
						}, 1000);
						
					},
					error : function(error) {
						console.error("API 호출 중 오류 발생:", error);
					}
				});
			}

			if (localStorage.getItem('successFlag') === 'true') {
				battingTrue();
			}

		} else {
			countdownElement.textContent = "남은 시간: 00초";
		}
	}

	// 초기 카운트 다운 시작
	updateCountdown();

	// 1초마다 카운트 다운 업데이트
	setInterval(updateCountdown, 1000);
}

// 홀, 짝 선택 시
function selectChoice(choice) {
	selectedChoice = choice;
}

// 배팅할 때
function fn_batting() {
	if (selectedChoice) {
		
		var battingAmount = parseInt($('#battingText').val(), 10);

		if (selectedChoice == "") {
			alert("홀 또는 짝을 선택해주세요.");
			return;
		}
		if ($('#battingText').val() == "") {
			alert("배팅할 금액을 입력해주세요.");
			return;
		}
		if (isNaN($('#battingText').val())) {
		    alert("배팅할 금액을 숫자로 입력해주세요.");
		    document.getElementById('battingText').value ="";
		    document.getElementById('battingText').focus();
		    return;
		}
		if (currentPoint < $('#battingText').val()) {
		    alert("보유포인트보다 높은 금액은 배팅이 제한됩니다.");
		    document.getElementById('battingText').value = "";
		    document.getElementById('battingText').focus();
		    return;
		}

		const userConfirm = confirm(selectedChoice + "에 배팅하시겠습니까?");

		if (userConfirm == true) {
			alert(selectedChoice + "에 배팅 성공!")
			
			localStorage.setItem('successFlag', 'true');
			localStorage.setItem('selectedChoice', selectedChoice);
			localStorage.setItem('batPoint', $('#battingText').val());

			battingTrue();
			
			$(".bat_con > .pointArea").html("정산 중.....");
			$('#battingText').val('');
		    $('#battingText').attr('placeholder', '배팅액');

		} else {
			alert("취소하셨습니다.");
		}

	} else {
		alert("홀 또는 짝 중 하나를 선택해주세요.");
	}
}

// 모달 띄우기
function modal(id) {
	var zIndex = 9999;
	var modal = $('#' + id);

	// 모달 div 뒤에 희끄무레한 레이어
	var bg = $('<div>').css({
		position : 'fixed',
		zIndex : zIndex,
		left : '0px',
		top : '0px',
		width : '100%',
		height : '100%',
		overflow : 'auto',
		// 레이어 색갈은 여기서 바꾸면 됨
		backgroundColor : 'rgba(0,0,0,0.4)'
	}).appendTo('body');
	
	modal
		.css(
			{
				position : 'fixed',
				boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

				// 시꺼먼 레이어 보다 한칸 위에 보이기
				zIndex : zIndex + 1,

				// div center 정렬
				top : '50%',
				left : '50%',
				transform : 'translate(-50%, -50%)',
				msTransform : 'translate(-50%, -50%)',
				webkitTransform : 'translate(-50%, -50%)'
			}).show()
	// 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
	.find('.modal_close_btn').on('click', function() {
		bg.remove();
		modal.hide();
	});
	
	// 5초 후에 모달을 자동으로 닫습니다.
    setTimeout(function () {
        bg.remove();
        modal.hide();
    }, 5000);
}

// 현재 포인트 조회
function fn_selectPoint() {
	const headers = {
		"CCODE" : "GAME",
		"TYPE" : "WEB",
		"TR" : "GG00001",
		"Content-Type" : "application/json"
	};

	const bodyData = {
		IDX : payloadObject.accessToken.IDX
	};

	$.ajax({
		url : apiUrl,
		type : "POST",
		headers : headers,
		contentType : "application/json",
		data : JSON.stringify(bodyData),
		success : function(data) {
			
			currentPoint = data.currentPoint;
			$(".bat_con > .pointArea").html("보유 포인트 : " + data.currentPoint + "p");
			$('#battingText').val('');
		    $('#battingText').attr('placeholder', '배팅액');
		    
		},
		error : function(error) {
			console.error("API 호출 중 오류 발생:", error);
		}
	});
}

// 배팅 했을때 css 변화
function battingTrue() {
	document.getElementById('battingBut').disabled = true;
	document.getElementById('choiceHol').disabled = true;
	document.getElementById('choiceJjak').disabled = true;
	document.getElementById('battingText').disabled = true;
	$('.game1Form_left').css('filter', 'brightness(70%)');
	$('.game1Form_left').css('background-color', '#32CD32');
	$('#choiceJjak').css('border', '3px solid #DC143C');
	$('#choiceHol').css('border', '3px solid #1E90FF');
}
//배팅 안 했을때 css 변화
function battingFalse() {
	document.getElementById('battingBut').disabled = false;
	document.getElementById('choiceHol').disabled = false;
	document.getElementById('choiceJjak').disabled = false;
	document.getElementById('battingText').disabled = false;
	$('.game1Form_left').css('filter', 'brightness(100%)');
	$('.game1Form_left').css('background-color', '#32CD32');
}

// 버튼 마우스 올릴 때
function mouseHover() {
	// 배팅 버튼 마우스 올릴 시
	$("#battingBut").hover(function() {
		$('#battingBut').css('background-color', '#fff');
		$('#battingBut').css('color', '#000');
	}, function() {
		$('#battingBut').css('background-color', '#000');
		$('#battingBut').css('color', '#fff');   
	});
	
	// 홀 버튼 마우스 올릴 시
	$("#choiceHol").hover(function() {
		$('#choiceHol').css('border', '3px solid black');
	}, function() {
		$('#choiceHol').css('border', '3px solid #1E90FF'); 
	});
	
	// 짝 버튼 마우스 올릴 시
	$("#choiceJjak").hover(function() {
		$('#choiceJjak').css('border', '3px solid black');
	}, function() {
		$('#choiceJjak').css('border', '3px solid #DC143C');
	});
}
// 버튼 누를 시
function mouseEvent() {
	// 홀 버튼 누를 시
	$("#choiceHol").on("click", function() {
		document.getElementById('choiceHol').disabled = true;

		$('#choiceHol').css('filter', 'brightness(70%)');
		$('#choiceHol').css('border', '3px solid black');

		$('#choiceJjak').css('filter', 'brightness(100%)');
		$('#choiceJjak').css('border', '3px solid #DC143C');
	});

	// 짝 버튼 누를 시
	$("#choiceJjak").on("click", function() {
		document.getElementById('choiceJjak').disabled = true;

		$('#choiceJjak').css('filter', 'brightness(70%)');
		$('#choiceJjak').css('border', '3px solid black');

		$('#choiceHol').css('filter', 'brightness(100%)');
		$('#choiceHol').css('border', '3px solid #1E90FF');
	});
}
