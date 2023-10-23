package kr.co.bodyfriend.exception;


import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import kr.co.bodyfriend.common.Response;
import kr.co.bodyfriend.common.ResultCodes;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	private static final Logger LOGGER = LoggerFactory.getLogger(RestResponseEntityExceptionHandler.class);

	@ExceptionHandler(value=Exception.class)
	protected <T> ResponseEntity<Response> etcException(Exception ex) {
		LOGGER.error("[HANDLER][RestResponseEntityExceptionHandler][etcException][Exception][{}] {}", ex.getClass().getCanonicalName(), ex.getMessage());
		
		Map<String, String> statusMap	= new HashMap<String, String>();
		Response response				= new Response();
		ResultCodes code				= ResultCodes.ERR_DB_NOT_DEFINED;

		statusMap.put("code"	, code.getCode());
		statusMap.put("message"	, code.getMessage());
		response.setStatus(statusMap);

		return new ResponseEntity<Response>(response, HttpStatus.OK);
		
	}

	@ExceptionHandler(value=BFException.class)
	protected ResponseEntity<Response> bfException(BFException ex) {
		LOGGER.error("[HANDLER][RestResponseEntityExceptionHandler][bfException][Exception][{}] {}", ex.getClass().getCanonicalName(), ex.getMessage());
		Map<String, String> statusMap	= new HashMap<String, String>();
		Response response				= new Response();
		ResultCodes inCode				= ex.getInCode();
		HttpStatus hsCode				= ex.getHsCode();
		ResultCodes outCode				= ex.getOutCode();

		if (outCode == null) {
			try {
				outCode = ResultCodes.valueOf(inCode.toString());
			} catch (Exception e) {
				LOGGER.error("[HANDLER][RestResponseEntityExceptionHandler][bfException][Exception] {}", ex.getMessage());
			}
		}

		if (outCode != null) {
			statusMap.put("code", outCode.getCode());
			statusMap.put("message", outCode.getMessage());
			response.setStatus(statusMap);
		}
		
		if (hsCode == null) {
			hsCode = HttpStatus.OK;
		}

		return new ResponseEntity<Response>(response, hsCode);
	}
}