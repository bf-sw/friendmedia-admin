package kr.co.bodyfriend.web.consult;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller("web.ConsultController")
public class ConsultController {

	private static Logger LOGGER = LoggerFactory.getLogger(ConsultController.class);
	
	/**
	 * 상담이력 등록
	 * 
	 * @param @return @throws
	 * @throws Exception 
	 */
	@RequestMapping(value = "/consult/regist")
	public ModelAndView regist(HttpServletRequest request) throws Exception {
		LOGGER.info("[CONSULT][CONTROLLER][ConsultController][regist][START]");

		ModelAndView mav = new ModelAndView();
		
		mav.setViewName("consult/regist");

		LOGGER.info("[CONSULT][CONTROLLER][ConsultController][regist][END]");
		return mav;
	}
	
	/**
	 * 상담이력 목록 조회
	 * 
	 * @param @return @throws
	 * @throws Exception 
	 */
	@RequestMapping(value = "/consult/list")
	public ModelAndView list(HttpServletRequest request) throws Exception {
		LOGGER.info("[CONSULT][CONTROLLER][ConsultController][list][START]");

		ModelAndView mav = new ModelAndView();
		
		mav.setViewName("consult/list");

		LOGGER.info("[CONSULT][CONTROLLER][ConsultController][list][END]");
		return mav;
	}
}

