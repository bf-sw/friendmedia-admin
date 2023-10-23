package kr.co.bodyfriend.common;

public enum ResultCodes {
	RET_SUCCESS							("200"        , "Success"),
	// 1xxx : 접속 에러 =================================================================
	ERR_DB_CONNECTION					("ERR_DB_1000", "Database 접속 오류입니다."),
	
	// 2xxx : 임계치 초과 ================================================================
	ERR_DB_LIMIT_COMMON					("ERR_DB_2000", "Database 임계치 관련 오류입니다."),
	
	// 3xxx : 데이터 파싱 에러 =============================================================
	ERR_PARSE							("ERR_MS_3000", "데이터 파싱 관련 오류입니다."),
	ERR_JSON_PARSE						("ERR_MS_3001", "파라미터 Parsing 오류입니다(JSON)."),
	ERR_PARAMETER_ENCODING				("ERR_MS_3002", "지원하지 않는 인코딩 오류입니다."),
	
	// 4xxx ; 파라미터 에러 ===============================================================
	ERR_PARAM_COMMON					("ERR_MS_4000", "파라미터 관련 오류입니다."),
	ERR_PARAM_NOT_FOUND 				("ERR_MS_4001", "필수 파라미터가 존재하지 않습니다."),
	ERR_PARAM_INVALID					("ERR_MS_4002", "파라미터 유형이 올바르지 않습니다."),
	ERR_PARAM_DATA_NOT_FOUND			("ERR_MS_4003", "요청한 파라미터의 결과 데이터가 존재하지 않습니다."),
	
	// 5xxx : 인증 에러 ==================================================================
	ERR_AUTH_COMMON						("ERR_MS_5000", "현재 인증되지 않았습니다. 계정인증을 진행해주세요."),
	ERR_NOT_ALLOW_IP					("ERR_MS_5001", "허용되지 않은 IP 입니다."),
	ERR_API_PERMISSION					("ERR_MS_5002", "허용되지 않은 API 입니다."),
	ERR_FAIL_LOGIN						("ERR_MS_5003", "일치하는 계정정보가 존재하지 않습니다."),
	ERR_LOGIN_TIMEOUT					("ERR_MS_5004", "인증이 만료되었습니다.\n재접속 하시기 바랍니다."),
	ERR_NOT_LOGIN						("ERR_MS_5005", "로그인 정보가 없습니다.\n로그인 화면으로 이동하시겠습니까?"),
	ERR_NO_HAVE_GODDS					("ERR_MS_5006", "제품 구매 완료 후 후기 작성이 가능합니다."),
	ERR_SOCIAL_USER						("ERR_MS_5007", "간편 로그인으로 회원가입 하셨습니다."),
	ERR_JOIN_AGE						("ERR_MS_5008", "만 14세 이상만 회원가입이 가능합니다."),
	ERR_AUCTION_AGE						("ERR_MS_5009", "만 18세 이상만 입찰이 가능합니다."),
	ERR_NOT_FOUND_KEY					("ERR_MS_5010", "시크릿 키가 존재하지 않습니다."),
	ERR_KEY_PERMISSION					("ERR_MS_5011", "허용된 시크릿 키가 아닙니다."),
	ERR_CODE_PERMISSION					("ERR_MS_5012", "서비스코드가 일치하지 않습니다."),
	ERR_NOT_FOUND_SERIAL				("ERR_MS_5013", "존재하지 않는 시리얼 번호 입니다."),
	ERR_NOT_MATCH_PASSWORD				("ERR_MS_5014", "비밀번호가 일치하지 않습니다."),
	ERR_NO_USE_PERMISSION				("ERR_MS_5015", "미사용 처리된 아이디 입니다."),
	
	// 6xxx : API 공통 에러 ==============================================================
	ERR_DATA_NOT_FOUND                  ("ERR_MS_6001", "해당 데이터가 존재하지 않습니다."),
	ERR_ALREADY_EXIST				    ("ERR_MS_6002", "이미 해당 데이터가 존재합니다."),
	ERR_NO_PERMISSION                   ("ERR_MS_6003", "해당 데이터 접근 권한이 없습니다."),
	
	// 7xxx : 카카오페이, BCCARD API 공통 에러 ==============================================================
	ERR_REQUEST_PAY_FAIL                ("ERR_MS_7001", "결제 전문 승인 요청 오류"),
	ERR_CREATE_QR_FAIL                  ("ERR_MS_7002", "QR 코드 생성 오류"),
	ERR_QR_EXP_TIME                  	("ERR_MS_7003", "바코드 사용 시간 초과 오류"),
	ERR_BCCARD_QR_FAIL                  ("ERR_MS_7004", "QR 코드 생성 오류"),
	ERR_REQUEST_ACTION_FAIL             ("ERR_MS_7005", "안마의자 작동 요청 호출 오류"),
		
	
	// 8xxx : Application 에러 =========================================================
	ERR_DATA_LOWER_DATA_EXISTS			("ERR_MS_8001", "하위 데이터가 존재합니다."),
	ERR_DB_DELETE_FAILURE				("ERR_MS_8002", "DB DELETE 실패"),
	ERR_DB_INSERT_FAILURE				("ERR_MS_8003", "DB INSERT 실패"),
	ERR_DB_UPDATE_FAILURE				("ERR_MS_8004", "DB UPDATE 실패"),
	ERR_DB_BASE_INFO_NOT_FOUND			("ERR_MS_8005", "검색조건 정보가 입력되지 않았습니다. 정보입력을 확인해주세요."),
	ERR_FILE_NOT_FOUND					("ERR_MS_8006", "요청한 파일이 존재 하지 않습니다." ),
	ERR_DUPLE_USER_ID					("ERR_MS_8007", "이미 사용중인 로그인 아이디 입니다." ),
	ERR_DUPLE_COM_ID					("ERR_MS_8008", "이미 사용중인 사원번호 입니다." ),
	ERR_NOT_FOUNT_ID					("ERR_MS_8009", "아이디가 존재하지 않습니다."),
	ERR_PW_CHG_FAIL						("ERR_MS_8010", "비밀번호 변경에 실패하였습니다.\n문의사항이 있으시면 02-3448-8980로 연락주시기 바랍니다."),
	ERR_EMAIL_SEND_FAIL					("ERR_MS_8011", "이메일 발송에 실패하였습니다."),
	ERR_MEMBER_JOIN_FAIL				("ERR_MS_8012", "회원가입에 실패하였습니다.\n문의사항이 있으시면 02-3448-8980로 연락주시기 바랍니다."),
	ERR_MEMBER_JOIN_ALREADY				("ERR_MS_8013", "일반 계정으로 회원가입된 정보가 있습니다."),
	ERR_FACEBOOK_JOIN_ALREADY			("ERR_MS_8014", "페이스북 계정으로 회원가입된 정보가 있습니다."),
	ERR_KAKAO_JOIN_ALREADY				("ERR_MS_8015", "카카오 계정으로 회원가입된 정보가 있습니다."),
	ERR_NAVER_JOIN_ALREADY				("ERR_MS_8016", "네이버 계정으로 회원가입된 정보가 있습니다."),
	ERR_COUPON_ISSUE					("ERR_MS_8017", "발급이 불가능한 쿠폰입니다."),
	ERR_COUPON_USE						("ERR_MS_8018", "사용이 불가능한 쿠폰입니다."),
	ERR_COUPON_DATE						("ERR_MS_8019", "쿠폰 사용 가능 날짜를 확인 하시기 바랍니다."),
	ERR_NAVERPAY_REGIST_ALREADY			("ERR_MS_8020", "이미 등록된 정기결제 정보입니다."),
	ERR_NAVERPAY_RESERVE_ALREADY		("ERR_MS_8021", "이미 예약된 정기결제 정보입니다."),
	ERR_NAVERPAY_EXPIRE_ALREADY			("ERR_MS_8022", "이미 해제된 정기결제 정보입니다."),
	ERR_NAVERPAY_CANCEL_ALREADY			("ERR_MS_8023", "이미 취소된 정기결제 정보입니다."),
	ERR_NAVERPAY_NOT_FOUND_APPROVAL		("ERR_MS_8024", "승인된 정기결제 정보가 없습니다."),
	ERR_NAVERPAY_NOT_FOUND_REGIST		("ERR_MS_8025", "등록된 정기결제 정보가 없습니다."),
	
	// 9xxx : 미정의 에러 =================================================================
	ERR_NOT_DEFINED						("ERR_MS_9000" , "잠시뒤 다시 이용하시기 바랍니다. [ERR_MS_9000]"),
	ERR_DB_NOT_DEFINED					("ERR_MS_9001" , "잠시뒤 다시 이용하시기 바랍니다. [ERR_MS_9001]")
	;
	
	
	private String code;
	private String message;

	private ResultCodes(String code, String msg) {
		this.code		= code;
		this.message	= msg;
	}
	public String getCode() {
		return this.code;
	}
	public String getMessage() {
		return this.message;
	}
	public boolean equals(String code) {
		return this.code.equals(code);
	}
	
}
