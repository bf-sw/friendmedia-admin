package kr.co.bodyfriend.web.login;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller("web.LoginController")
public class LoginController {

	private static Logger LOGGER = LoggerFactory.getLogger(LoginController.class);
	
	/**
	 * 관리자 로그인
	 * 
	 * @param @return @throws
	 * @throws Exception 
	 */
	@RequestMapping(value = "/login")
	public ModelAndView login(HttpServletRequest request) throws Exception {
		LOGGER.info("[LOGIN][CONTROLLER][LoginController][login][START]");

		ModelAndView mav = new ModelAndView();
		
		mav.setViewName("login/login");

		LOGGER.info("[LOGIN][CONTROLLER][LoginController][login][END]");
		return mav;
	}
}

