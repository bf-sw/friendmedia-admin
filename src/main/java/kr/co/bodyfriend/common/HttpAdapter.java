package kr.co.bodyfriend.common;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.httpclient.util.HttpURLConnection;
import org.apache.http.NameValuePair;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import kr.co.bodyfriend.common.util.UtilManager;

public class HttpAdapter {
	
	private static Logger LOGGER		= LoggerFactory.getLogger(HttpAdapter.class);
	private static final int TIMEOUT	= 3 * 1000;
	
	/**
	 * HTTP API 호출 - HTTP GET
	 * 
	 * @param String callUrl 			 - API 호출 URL
	 * @param Map<String, Object> params - HashMap 타입의 파라미터
	 * @return JSONObject jsonObject 	 - JSONObject 타입 데이터 리턴
	 * @throws
	 */
	public static JSONObject httpGetRequest (String callUrl, Map<String, Object> params) throws IOException {
		JSONObject jsonObject 				= new JSONObject();
		CloseableHttpClient httpClient 		= null;
		CloseableHttpResponse httpResponse 	= null;
		
		LOGGER.info("[HttpAdapter][httpGetRequest][url] : {}", callUrl);
		
		try {
			if (UtilManager.isEmptyOrNull(callUrl)) return null;
			
			StringBuilder urlBuilder 	= new StringBuilder(callUrl);
			boolean isFirst				= true;
			
			if (!UtilManager.isEmptyOrNull(params)) {
				for (String key : params.keySet()) {
					LOGGER.info("[HttpAdapter][httpGetRequest][params][" + key + "] : {}", params.get(key).toString());
					if (isFirst) {
						urlBuilder.append("?" + key + "=" + params.get(key).toString());
					} else {
						urlBuilder.append("&" + key + "=" + params.get(key).toString());
					}
					isFirst = false;
				}
			}
			
			RequestConfig config = RequestConfig.custom()
					  .setConnectTimeout(TIMEOUT)
					  .setConnectionRequestTimeout(TIMEOUT)
					  .setSocketTimeout(TIMEOUT).build();
			
			httpClient 			= HttpClientBuilder.create().setDefaultRequestConfig(config).build();
			HttpGet httpRequest = new HttpGet(urlBuilder.toString());
			
			httpResponse 		= httpClient.execute(httpRequest);
			
			int responseCode 	= httpResponse.getStatusLine().getStatusCode();
			jsonObject.put(Consts.CODE, responseCode);
			
			LOGGER.info("[HttpAdapter][httpGetRequest][responseCode] : {}", responseCode);
			
			if (responseCode == HttpURLConnection.HTTP_OK) {
				String responseStr = EntityUtils.toString(httpResponse.getEntity(), Consts.UTF_8);
				LOGGER.info("[HttpAdapter][httpGetRequest][responseStr] : {}", responseStr);
				
				if (!UtilManager.isEmptyOrNull(responseStr)) {
					JSONObject result = UtilManager.getJsonFromJsonString(responseStr);
					if (UtilManager.isEmptyOrNull(result)) {
						jsonObject.put(Consts.DATA, UtilManager.getJsonFromXmlString(responseStr));
					} else {
						jsonObject.put(Consts.DATA, result);
					}
				}
			}
		} catch (Exception e) {
			LOGGER.error("[HttpAdapter][httpGetRequest][ERROR] : {}", e.getMessage());
		} finally {
			httpResponse.close();
			httpClient.close();
		}
		return jsonObject;
	}
	
	/**
	 * HTTP API 호출 - HTTP POST
	 * 
	 * @param String callUrl 			 - API 호출 URL
	 * @param Map<String, Object> params - HashMap 타입의 파라미터
	 * @param String accessTokenValue 	 - Access Token
	 * @return JSONObject jsonObject 	 - JSONObject 타입 데이터 리턴
	 * @throws
	 */
	public static JSONObject httpPostRequest (String callUrl, Map<String, Object> params, String accessTokenValue) throws IOException {
		JSONObject jsonObject 				= new JSONObject();
		CloseableHttpClient httpClient 		= null;
		CloseableHttpResponse httpResponse 	= null;
		
		LOGGER.info("[HttpAdapter][httpPostRequest][url] : {}", callUrl);
		LOGGER.info("[HttpAdapter][httpPostRequest][accessToken] : {}", accessTokenValue);
		
		try {
			if (UtilManager.isEmptyOrNull(callUrl)) return null;
			
			RequestConfig config = RequestConfig.custom()
					  .setConnectTimeout(TIMEOUT)
					  .setConnectionRequestTimeout(TIMEOUT)
					  .setSocketTimeout(TIMEOUT).build();
			
			httpClient 							= HttpClientBuilder.create().setDefaultRequestConfig(config).build();
			HttpPost httpRequest 				= new HttpPost(callUrl);
			
			List<NameValuePair> nameValuePairs 	= new ArrayList<NameValuePair>();
			
			if (!UtilManager.isEmptyOrNull(params)) {
				for (String key : params.keySet()) {
					LOGGER.info("[HttpAdapter][httpPostRequest][params][" + key + "] : {}", params.get(key).toString());
					nameValuePairs.add(new BasicNameValuePair(key, params.get(key).toString()));
				}
			}
			
			httpRequest.setEntity(new UrlEncodedFormEntity(nameValuePairs, Consts.UTF_8));
			
			if (!UtilManager.isEmptyOrNull(accessTokenValue)) {
				httpRequest.addHeader(Consts.AUTHORIZATION, Consts.BEARER + " " + accessTokenValue);
			}
			
			httpResponse 		= httpClient.execute(httpRequest);
			int responseCode 	= httpResponse.getStatusLine().getStatusCode();
			jsonObject.put(Consts.CODE, responseCode);
			
			LOGGER.info("[HttpAdapter][httpPostRequest][responseCode] : {}", responseCode);
			
			if (responseCode == HttpURLConnection.HTTP_OK) {
				String responseStr = EntityUtils.toString(httpResponse.getEntity(), Consts.UTF_8);
				LOGGER.info("[HttpAdapter][httpPostRequest][responseStr] : {}", responseStr);
				
				if (!UtilManager.isEmptyOrNull(responseStr)) {
					JSONObject result = UtilManager.getJsonFromJsonString(responseStr);
					if (UtilManager.isEmptyOrNull(result)) {
						jsonObject.put(Consts.DATA, UtilManager.getJsonFromXmlString(responseStr));
					} else {
						jsonObject.put(Consts.DATA, result);
					}
				}
			}
			
		} catch (Exception e) {
			LOGGER.error("[HttpAdapter][httpPostRequest][ERROR] : {}", e.getMessage());
		} finally {
			httpResponse.close();
			httpClient.close();
		}
		
		return jsonObject;
	}
	
}
