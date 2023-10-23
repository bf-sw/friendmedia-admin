<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	Integer SESSION_USER_IDX = (Integer) session.getAttribute("session_user_idx");
%>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0">
        <META HTTP-EQUIV="Expires" CONTENT="Mon, 06 Jan 1990 00:00:01 GMT">
		<META HTTP-EQUIV="Expires" CONTENT="-1">
		<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
		<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="stylesheet" href="/resources/css/common.css?version=201905280929">
        <link rel="stylesheet" href="/resources/css/jquery-ui.min.css">
		<script type="text/javascript" src="/resources/js/jquery-1.11.3.min.js"></script>
		<script type="text/javascript" src="/resources/js/jquery-ui.min.js"></script>
		<script type="text/javascript" src="/resources/js/extend/String.js"></script>
		<script type="text/javascript" src="/resources/js/extend/Date.js"></script>
		<script type="text/javascript" src="/resources/js/extend/Number.js"></script>
		<script type="text/javascript" src="/resources/js/common.js?version=201905280929"></script>
		<script type="text/javascript" src="/resources/js/common-event.js?version=201905280929"></script>
		<script type="text/javascript" src="/resources/js/Validation.js?version=201905280929"></script>
		<script type="text/javascript" src="/resources/js/Ajax.js"></script>
		<script type="text/javascript" src="/resources/js/plugins.min.js"></script>
		<script type="text/javascript" src="/resources/js/storage.js?version=201905280929"></script>
	</head>
	<script type="text/javascript">
		$(window).bind("pageshow", function(event) {
			CommonEvent.navigation.close($(".gnb__toggle"));
		});
		
		$(document).ready(function () {
			/* if (Validation.isEmpty(Storage.getItem("userInfo"))) {
				$(".no__login").attr("href", "javascript:if (confirm('로그인 정보가 없습니다. \n 로그인 하시겠습니까?')) location.href='/login/login';");
			} */
		});
    </script>
	<body>
		<div class="page">
			<header class="header">
				<h1 class="header__logo"><a href="/main/main"><img src="/resources/img/layout/header-logo.png" alt="" class="img-responsive"></a></h1>
			</header>