package egovframework.front.service.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	// 메인
	@RequestMapping("/home.do")
	public String home() {
		return "main";
	}
	// 회원가입 절차 1
	@RequestMapping("/signUp1.do")
	public String signUp1() {
		return "client/signUp1";
	}
	// 회원가입 절차 2
	@RequestMapping("/signUp2.do")
	public String signUp2() {
		return "client/signUp2";
	}
	// 회원가입 절차 3
	@RequestMapping("/signUp3.do")
	public String signUp3() {
		return "client/signUp3";
	}
	// 회원가입 절차 4
	@RequestMapping("/signUp4.do")
	public String signUp4() {
		return "client/signUp4";
	}
	// 클라이언트 로그인
	@RequestMapping("/login.do")
	public String login() {
		return "client/login";
	}
	// 클라이언트 나의메뉴1
	@RequestMapping("/myMenu1.do")
	public String myMenu1() {
		return "client/myMenu1";
	}
	// 클라이언트 나의메뉴2
	@RequestMapping("/myMenu2.do")
	public String myMenu2() {
		return "client/myMenu2";
	}
	// 클라이언트 나의메뉴3
	@RequestMapping("/myMenu3.do")
	public String myMenu3() {
		return "client/myMenu3";
	}
	// 관리자 로그인
	@RequestMapping("/admin.do")
	public String admin() {
		return "admin/login";
	}
	// 클라이언트 나의메뉴
	@RequestMapping("/findId.do")
	public String find_id() {
		return "client/findId";
	}
	// 관리자 로그인
	@RequestMapping("/findPw.do")
	public String findPw() {
		return "client/findPw";
	}
	// 공지사항 조회
	@RequestMapping("/selectNotice.do")
	public String selectNotice() {
		return "board/notice";
	}
	// 자주하는 질문 조회
	@RequestMapping("/selectFaq.do")
	public String selectFaq() {
		return "board/faq";
	}
	// 소통방
	@RequestMapping("/communication.do")
	public String communication() {
		return "board/communication";
	}
	// 소통방
	@RequestMapping("/game1.do")
	public String game1() {
		return "game/game1";
	}
	// 소통방
	@RequestMapping("/game2.do")
	public String game2() {
		return "game/game2";
	}
}
