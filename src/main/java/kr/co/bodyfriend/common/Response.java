package kr.co.bodyfriend.common;

import java.util.Map;

import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;


@XmlRootElement(name="Response")
public class Response {

	
	protected Map<String, Object> data;
	protected Map<String, String> status;
	
	public Response() {}
	public Response(Map<String, Object> data, Map<String, String> status) {
		this.data 	= data;
		this.status = status;
	}
	
	@XmlJavaTypeAdapter(MapAdapter.class)
	public Map<String, Object> getData() {
		return data;
	}
	public void setData(Map<String, Object> data) {
		this.data = data;
	}
	
	@XmlJavaTypeAdapter(MapAdapter.class)
	public Map<String, String> getStatus() {
		return status;
	}
	public void setStatus(Map<String, String> status) {
		ContextUtil.setAttribute("result", status);
		this.status = status;
	}
}