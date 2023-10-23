package kr.co.bodyfriend.common;

import java.util.Properties;

import kr.co.bodyfriend.common.util.UtilManager;

public final class CommProperty {

	public static final String PROPERTY_FILE = "/config/system.properties";
	private static Properties propertyMap = new Properties();
	
	static {
		setProperty();
	}
	
	 private CommProperty() {
	    }

	    /**
	     * system.properties의 내용을 읽어 propertyMap에 저장
	     */
	    public static void setProperty() {
	        try {
	            // Read properties file.
	            propertyMap.load(kr.co.bodyfriend.common.CommProperty.class.getResourceAsStream(PROPERTY_FILE));
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }

	    /**
	     * property Map 반환
	     * 
	     * @return
	     */
	    public static Properties getPropertyMap() {
	        return propertyMap;
	    }

	    /**
	     * property Map의 값 수정<br/>
	     * 기존 값만 임시로 변경이 가능하며, 새로운 값은 넣을 수 없음<br/>
	     * common.property 파일도 반드시 변경을 시켜 주어야 함.
	     * 
	     * @param key
	     * @param value
	     * @throws Exception
	     */
	    public static void setProperty(String key, String value) throws Exception {
	        if (UtilManager.isEmptyOrNull(key)) {
	            throw new Exception("key is null or empty string");
	        } else if (value == null) {
	            throw new Exception("value is null");
	        } else {
	            if (getProperty(key) == null) {
	                throw new Exception("기존에 '" + key + "' 이름으로 정의된 property가 없습니다. ");
	            }
	            propertyMap.put(key, value);
	        }
	    }

	    /**
	     * propertyMap에서 해당 key의 값을 찾아서 반환한다.
	     * 
	     * @param key
	     * @return
	     */
	    public static String getProperty(String key) {
	        return propertyMap.getProperty(key);
	    }

	    /**
	     * propertyMap에서 해당 key의 값을 찾아 int로 변환하여 반환.
	     * 
	     * @param key
	     * @return
	     */
	    public static int getPropertyInt(String key) {
	        int propertyValue = 0;
	        try {
	            propertyValue = Integer.parseInt(propertyMap.getProperty(key));
	        } catch (Exception e) {
	            e.printStackTrace();
	            propertyValue = 0;
	        }
	        return propertyValue;
	    }
}
