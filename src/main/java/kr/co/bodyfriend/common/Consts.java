package kr.co.bodyfriend.common;

public class Consts {
	
	public final static String URL 								= "url";
	public static final String CODE 							= "code";
	public final static String DATA 							= "data";
	public final static String RESULT_CODE 						= "result_cd";
	public final static String CHECK 							= "check";
	public final static String IS_CERTIFY 						= "is_certify";
	
	public final static String POST 							= "POST";
	public final static String PUT 								= "PUT";
	public final static String DELETE 							= "DELETE";
	public final static String GET 								= "GET";
	
	public final static String USER								= "USER";
	
	public final static String USER_ID							= "user_id";
	public final static String USER_IDX							= "user_idx";
	public final static String USER_PW							= "user_pw";
	public final static String USER_TYPE						= "user_type";
	public final static String USERTYPE							= "userType";
	public final static String USER_NAME						= "user_name";
	public final static String USER_PHONE						= "user_phone";
	public final static String USER_EMAIL						= "user_email";
	public final static String USER_BIRTHDAY					= "user_birthday";
	public final static String CUST_CODE						= "cust_code";
	public final static String CUST_NAME						= "cust_name";
	public final static String LEVEL_CODE						= "level_code";
	public final static String LEVEL_NAME						= "level_name";
	
	public final static String SESSION_ID						= "session_id";
	public final static String SESSION_USER_ID					= "session_user_id";
	public final static String SESSION_USER_IDX					= "session_user_idx";
	public final static String SESSION_USER_NAME				= "session_user_name";
	public final static String SESSION_USER_PHONE				= "session_user_phone";
	public final static String SESSION_USER_EMAIL				= "session_user_email";
	public final static String SESSION_USER_TYPE				= "session_user_type";
	public final static String SESSION_USER_BIRTHDAY			= "session_user_birthday";
	public final static String SESSION_LEVEL_CODE				= "session_level_code";
	public final static String SESSION_LEVEL_NAME				= "session_level_name";
	
	//
	public final static String RADIUS							= "radius";
	public final static String LATITUDE							= "lat";
	public final static String LONGITUDE						= "lng";
	
	
	
	public final static String UTF_8							= "UTF-8";
	public final static String EUC_KR							= "euc-kr";
	public final static String APPLICATION						= "application";
	public final static String JSON								= "json";
	public final static String FORM_URLENCODED					= "x-www-form-urlencoded";
	
	public final static String DEPOSIT_NAME						= "depositNm";
	public final static String DEFAULT_USER						= "dujang";
	public final static String PAY_CNT							= "payCnt";
	public final static String END_PAY_CNT						= "endPayCnt";
	public final static String START_PAY_CNT					= "startPayCnt";
	public final static String AMT								= "amt";
	public final static String GOODS_NAME						= "goodsName";
	public final static String GOODS_CNT						= "goodsCnt";
	public final static String GOODS_CL							= "goodsCl";
	public final static String CATEGORY_IDX						= "categoryIdx";
	public final static String GOODS_IDX						= "goodsIdx";
	public static final String REVIEW_IDX 						= "reviewIdx";
	public static final String PWD		 						= "pwd";
	public final static String MERCHANTKEY						= "merchantKey";
	public final static String PAY_METHOD						= "payMethod";
	public final static String RETURN_URL						= "returnURL";
	public final static String CHARSET							= "charSet";
	public final static String USER_IP							= "userIP";
	public final static String MALL_IP							= "mallIP";
	public final static String ENCODE_PARAMETERS				= "encodeParameters";
	public final static String TR_KEY							= "charset";
	public final static String REG_DATE							= "regDate";
	public final static String CUSTCODE							= "custCode";
	public final static String CUSTNAME							= "custName";
	public final static String EXTRA_INFOS						= "extraInfos";
	public final static String PAY_RESULT_CD					= "payResultCd";
	public final static String PAY_RESULT_INFOS					= "payResultInfo";
	public final static String PAY_ROOT							= "payRoot";
	
	public static final String RESULT_DATA 						= "resultData";
	public static final String RESULT_MSG 						= "resultMsg";
	public static final String CALLBACK_URL 					= "callbackUrl";
	
	public static final String AUTHORIZATION 					= "Authorization";
	public static final String BEARER 							= "Bearer";
	public static final String ORD_NBR 							= "ordNbr";
	
	public static final String SERVICE_CODE						= "serviceCode";
    public static final String SECRET_KEY						= "secretKey";
    public static final String STROKE							= "stroke";
	
	public static class ExpireCode {
		public static final String
		YES		= "Y",
		NO		= "N";
	}
	
	public static class ResultCode {
		public static final String
		SUCCESS		= "200";
	}
	
	public enum ReturnStatus {
		C200("Success"),
		C201("처리 되었습니다."),
		C202("조회 되었습니다."),
		C203("등록 되었습니다."),
		C204("삭제 되었습니다."),
		C205("요청 되었습니다."),
		C300("기타 데이터 관련 오류"),
		C301("검색된 데이터가 존재하지 않습니다."),
		C302("처리된 데이터가 존재하지 않습니다."),
		C303("수정된 데이터가 존재하지 않습니다."),
		C304("삭제된 데이터가 존재하지 않습니다."),
		C305("데이터가 이미 존재합니다."),
		C400("데이터베이스 연결 오류 입니다."),
		C401("알수 없는 에러입니다."),
		C402("이미 요청되었습니다."),
		C403("응답이 없습니다."),
		C404("XML Parse 에러.");
		private String msg;
		private ReturnStatus() {}
		private ReturnStatus(String msg) { this.msg = msg; }
		public String getMsg() {
			return msg;
		}
	}
}
 