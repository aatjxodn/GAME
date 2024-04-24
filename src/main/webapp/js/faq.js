// 테스트
var apiUrl = "http://localhost:8081/BackAPI/rest_homepage.do";
// 실서버
//var apiUrl = "http://192.168.168.143:8080/BackAPI/rest_homepage.do";

//현재 페이지를 저장하는 변수
let currentPage = 1;
// 한 페이지에 표시할 아이템 수
const itemsPerPage = 5;

$(document).ready(function() {
	fn_faq(1);
});

// 자주하는 질문 불러오기
function fn_faq(page) {
	
	//현재 페이지를 저장하는 변수
	const currentPage = 1;
	// 한 페이지에 표시할 아이템 수
	const itemsPerPage = 5;
	
    const headers = {
        "CCODE": "GAME",
        "TYPE": "WEB",
        "TR": "BR00001",
        "Content-Type": "application/json"
    };

    // 페이징을 위해 OFFSET을 계산
    const offset = (page - 1) * itemsPerPage;

    const bodyData = {
        LIMIT: itemsPerPage,
        OFFSET: offset,
        TABLE_NAME: "WEB_BOARD_FAQ"
    };

    $.ajax({
        url: apiUrl,
        type: "POST",
        headers: headers,
        contentType: "application/json",
        data: JSON.stringify(bodyData),
        success: function(data) {
            console.log("서버 응답 데이터:", data);
            console.log("서버 응답 데이터:", data.selectBoardList);
            console.log("서버 응답 데이터:", data.selectBoardListCount);

            renderBoardList(data.selectBoardList);
            renderPagination(data.selectBoardListCount, page);
        },
        error: function(error) {
            console.error("API 호출 중 오류 발생:", error);
        }
    });

    function renderBoardList(boardList) {
        // 받아온 데이터를 반복하여 목록에 추가
        $(".faqColumn").empty(); // 목록을 비우고 다시 그림

        for (let i = 0; i < boardList.length; i++) {
            const FAQ_ROWNUM = boardList[i].ROWNUM;
            const FAQ_SUBJECT = boardList[i].SUBJECT;
            const FAQ_NAME = boardList[i].NAME;
            const FAQ_REGDATE = boardList[i].REGDATE;
            const FAQ_VIEW = boardList[i].VIEW;

            // 각 데이터를 별도의 <tr>에 추가
            const newRow = $("<tr>");
            newRow.append("<td>" + FAQ_ROWNUM + "</td>");
            newRow.append("<td style='text-align:left;'>" + FAQ_SUBJECT + "</td>");
            newRow.append("<td>" + FAQ_NAME + "</td>");
            newRow.append("<td>" + FAQ_REGDATE + "</td>");
            newRow.append("<td>" + FAQ_VIEW + "</td>");
            newRow.append("</tr>");

            // 새로운 <tr>을 목록에 추가
            $(".faqColumn").append(newRow);
        }
    }

    function renderPagination(totalItems, currentPage) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        
        let paginationHtml = "<div class='pagination'>";
        
        if (currentPage == 1) {
        	paginationHtml += "<span><input type='button' value='<' style='background-color:#ccc;'></span>";
        } else {
        	paginationHtml += "<span><input type='button' onclick='fn_faq(" + (currentPage - 1) + ")' value='<'></span>";
        }

        for (let i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
                paginationHtml += "<span><input type='button' value='" + i +"' style='background-color: #555; color: #fff;'></span>";
            } else {
                paginationHtml += "<span><input type='button' onclick='fn_faq(" + i + ")' value='" + i +"'></span>";
            }
        }
        
        if (currentPage == totalPages) {
        	paginationHtml += "<span><input type='button' value='>' style='background-color:#ccc;'></span>";
        } else {
        	paginationHtml += "<span><input type='button' onclick='fn_faq(" + (currentPage + 1) + ")' value='>'></span>";
        }
        
        paginationHtml += "</div>";
        // 기존 페이지 네비게이션을 삭제하고 새로운 페이지 네비게이션을 추가
        $(".pagination").remove();
        $(".faqForm_con3").append(paginationHtml);
    }
}