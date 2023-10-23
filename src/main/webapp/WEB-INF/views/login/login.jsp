<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>로그인</title>
<script type="text/javascript" src="/resources/js/jquery-1.11.3.min.js"></script>
</head>
<body>
	
</body>
<script type="text/javascript">

	$(document).ready(function() {
		let params = {
			"loginType" : "IS"
			, "loginId" : "loveug"
			, "password" : "aaaaaa1!"
		};
		$.ajax({
		    method : "POST"
		    , url : "http://172.30.40.35:8884/api/auth/v1/login"
		    , data : JSON.stringify(params)
		    , dataType : "json"
		    , contentType : "application/json"
		    , cache : false
		    , beforeSend : function (xhr) {
		    }
		    , success : function (res) {
		        console.log(res);
		    }
		    , error : function (jqXHR, textStatus, errorThrown) {
		    	
		    }
		});
	});
	
</script>
</html>