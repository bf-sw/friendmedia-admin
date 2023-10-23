package kr.co.bodyfriend.common;

public class CommonCodes {
	
	public static class SaleKind {
		public static final String
			PURCHASE	= "0",
			RENTAL		= "1";
		
		public static final String[] VALIDCODES = {PURCHASE, RENTAL};
	}
	
	public static class PayKind {
		public static final String
			NONPAYMENT	= "0",
			PAYMENT		= "1";
		
		public static final String[] VALIDCODES = {NONPAYMENT, PAYMENT};
	}
	
	public static class UserType {
		public static final String
			USER	= "u",
			ORDER	= "o";
		
		public static final String[] VALIDCODES = {USER, ORDER};
	}
	
	public static class CustKind {
		public static final String
			CHAIR   = "01",
			LACLOUD = "03",
			WATER	= "06";
		
		public static final String[] VALIDCODES = {CHAIR, LACLOUD, WATER};
	}
	
	public static class ResultCode {
		public static final String
			SUCCESS		= "200",
			NOT_FOUND	= "404";
		
		public static final String[] VALIDCODES = {SUCCESS, NOT_FOUND};
	}
	
	public static class NicePayCode {
		public static final String
			SUCCESS		= "0000";
	}
	
	public static class Charset {
		public static final String
			EUC_KR		= "euc-kr",
			UTF_8		= "utf-8";
	}
	
	public static class ResultCodeBoolean {
		public static final String
		SUCCESS		= "1",
		FAIL		= "0",
		ERROR		= "2";
		
		public static final String[] VALIDCODES = {SUCCESS, FAIL, ERROR};
	}
	
	public static class CertCheck {
		public static final String
			CERT_Y		= "Y",
			CERT_N		= "N";
		
		public static final String[] VALIDCODES = {CERT_Y, CERT_N};
	}
	
	public static class NicePayResultCode {
		public static final String
		CARD_SUCCESS			= "3001",
		VBANK_SUCCESS			= "4100";
	}
	
	public static class CmsDivCode {
		public static final String
		VLNT_ISSUE			= "현금영수증 미신청",
		DEDUCTION			= "발행번호",
		EXPENSE_EVIDENCE	= "지출증빙 신청상태(본사접수)",
		TAX_INVOICE			= "세금계산서 신청상태(본사접수)",
		CREDIT_CARD			= "카드결제 시 해당없음";
	}
	
	public static class ServiceCode {
		public static final String
			KAKAOPAY		= "KAKAOPAY",
			BCCARD			= "BCCARD",
			NAVERPAY		= "NAVERPAY",
			CLOVA 			= "CLOVA",
			SMARTGOLF		= "SMARTGOLF",
			LOUNGE			= "LOUNGE",
			MASSAGEMAP		= "MASSAGEMAP",
			MESSAGE			= "MESSAGE",
			REMOTE			= "REMOTE",
			LOGIN			= "LOGIN",
			APP				= "APP";

	}
	
	public static class CallResult {
		public static final String
			SUCCESS		= "success",
			FAIL		= "fail";
		
		public static final String[] VALIDCODES = {SUCCESS, FAIL};
	}
	
	public static class MessageType {
		public static final String
		SMS			= "SMS",
		EMAIL		= "EMAIL";
	}
	
	public static class SystemEnvironment {
		public static final String
		DEVELOPMENT			= "development",
		PRODUCT				= "product";
	}
	
	public static class MassageMapType {
		public static final String
		MASSAGE			= "MASSAGE",
		AIR				= "AIR";
	}
	
	public static class YesOrNo {
		public static final String
			YES		= "Y",
			NO		= "N";
	}
	
	public static class ApiVersion {
		public static final String
		V1		= "v1",
		V2		= "v2",
		V3		= "v3",
		V4		= "v4",
		V5		= "v5",
		V6		= "v6",
		V7		= "v7",
		V8		= "v8",
		V9		= "v9",
		V10		= "v10";
	}
}
