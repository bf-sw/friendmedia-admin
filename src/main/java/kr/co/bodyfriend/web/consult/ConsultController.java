package kr.co.bodyfriend.web.consult;

import java.net.URI;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import kr.co.bodyfriend.common.CommProperty;
import kr.co.bodyfriend.common.Consts;
import kr.co.bodyfriend.common.util.UtilManager;
import kr.co.bodyfriend.exception.BFException;

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
	
	/**
	 * 상담이력 엑셀 생성
	 * 
	 * @param 
	 * @return
	 * @throws 
	 */
	@RequestMapping(value="/consult/excel")
	public String makeExcel(@RequestParam Map<String, Object> params, Map<String,Object> modelMap) throws BFException {
		LOGGER.info("[CONSULT][CONTROLLER][ConsultController][makeExcel][START]");
		
		try {
			HttpHeaders httpHeaders	= new HttpHeaders();
			httpHeaders.add(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE);
			httpHeaders.setContentType(new MediaType(Consts.APPLICATION, Consts.JSON, Charset.forName(Consts.UTF_8)));
			httpHeaders.set("Authorization", "Bearer " + params.get("token"));
			
			UriComponentsBuilder uriComponentsBuilder = UriComponentsBuilder.fromHttpUrl(CommProperty.getProperty("friendmedia.api.url." + UtilManager.getSystemEnvironment()))
			        .queryParam("startDate", params.get("startDate"))
			        .queryParam("endDate", params.get("endDate"))
			        .queryParam("name", params.get("name"))
			        .queryParam("phone", params.get("phone"))
			        .queryParam("orderNo", params.get("orderNo"))
			        .queryParam("channel", params.get("channel"))
			        .queryParam("inType", params.get("inType"))
			        .queryParam("consultType", params.get("consultType"))
			        .queryParam("level1", params.get("level1"))
			        .queryParam("level2", params.get("level2"))
			        .queryParam("complaint", params.get("complaint"))
			        .queryParam("consultStatus", params.get("consultStatus"));
			
			RestTemplate restTemplate = new RestTemplate();
			
			RequestEntity<String> requestEntity = new RequestEntity<>(httpHeaders, HttpMethod.GET, uriComponentsBuilder.build().encode().toUri());
			ResponseEntity<String> response = restTemplate.exchange(requestEntity, String.class);

			if (!UtilManager.isEmptyOrNull(response) && HttpStatus.OK.equals(response.getStatusCode())) {
				String body = response.getBody();
				
				ObjectMapper mapper = new ObjectMapper();
				JsonNode root 		= mapper.readTree(body);
				String data 		= root.at("/data").toString();
				
				List<Map<String, Object>> excelData = 
						   new ObjectMapper().readValue(data, new TypeReference<List<Map<String, Object>>>(){});
				
				modelMap.put("excelData", excelData);
				modelMap.put("title"	, "상담이력");
				return "consultExcel";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		LOGGER.info("[CONSULT][CONTROLLER][ConsultController][makeExcel][END]");
		return "";
	}
}

