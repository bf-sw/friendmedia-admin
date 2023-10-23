package kr.co.bodyfriend.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;


public class Interceptor extends HandlerInterceptorAdapter {
	
	private static Logger LOGGER = LoggerFactory.getLogger(Interceptor.class);
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		
		//request.setCharacterEncoding("UTF-8");
		
		return true;
	}
	
	@Override
	public void postHandle (HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
	
	}
}
