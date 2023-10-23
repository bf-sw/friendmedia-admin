package kr.co.bodyfriend.common;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ContextUtil {
	private static final Logger LOGGER = LoggerFactory.getLogger(ContextUtil.class);
	
	public static HttpServletRequest getRequest() {
		return RequestContext.getRequest();
	}
	
	public static HttpSession getSession() {
		HttpServletRequest request = ContextUtil.getRequest();
		if (request == null) return null;
		return request.getSession();
	}
	
	public static Object getAttribute(String name) {
		HttpServletRequest request = ContextUtil.getRequest();
		if (request == null) return null;
		return request.getAttribute(name);
	}
	
	public static void setAttribute(String name, Object obj) {
		HttpServletRequest request = ContextUtil.getRequest();
		if (request == null) return;
		request.setAttribute(name, obj);
	}
	
	public static void setAttribute(String name, String key, String value) {
		HttpServletRequest request = ContextUtil.getRequest();
		if (request == null) return;
		Object obj = request.getAttribute(name);
		if (obj == null) {
			obj = new HashMap();
		}
		((Map)obj).put(key, value);
		request.setAttribute(name, obj);
	}
	
	public static Object getParameter(String name) {
		HttpServletRequest request = ContextUtil.getRequest();
		if (request == null) return null;
		return request.getParameter(name);
	}

}
