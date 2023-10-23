package kr.co.bodyfriend.exception;

import org.springframework.http.HttpStatus;
import kr.co.bodyfriend.common.ResultCodes;

public class BFException extends Exception {
private static final long serialVersionUID = 1L;
	
	private ResultCodes inCode;
	private HttpStatus 	hsCode;
	private ResultCodes outCode;
	
	public ResultCodes getInCode() {
		return inCode;
	}

	public void setInCode(ResultCodes inCode) {
		this.inCode = inCode;
	}

	public HttpStatus getHsCode() {
		return hsCode;
	}

	public void setHsCode(HttpStatus hsCode) {
		this.hsCode = hsCode;
	}

	public ResultCodes getOutCode() {
		return outCode;
	}

	public void setOutCode(ResultCodes outCode) {
		this.outCode = outCode;
	}

	private String      detailMsg = null;
	
	public BFException(ResultCodes code) {
		super(code.getMessage());
		this.inCode = code;
	}
	
	public BFException(ResultCodes code, HttpStatus hsCode) {
		super(code.getMessage());
		this.inCode = code;
		this.hsCode = hsCode;
	}
	
	public BFException(ResultCodes code, String detailMsg) {
		super(code.getMessage() + " : " + detailMsg);
		this.inCode      = code;
		this.detailMsg = detailMsg;
	}

	public String getDetailMsg() {
		return detailMsg;
	}

}
