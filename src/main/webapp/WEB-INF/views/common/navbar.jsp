<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
  </head>
<body>
	<header>
	    <div class="logo_area" onclick="location.href='/consult/list'">
	        <img
	            src="/resources/img/friend_media_logo.png"
	            alt="FriendMedia Logo"
	        />
	        <span>대원샵 상담이력 관리</span>
	    </div>
	    <div class="user_info_area">
	        <span><em id="loggedInUserName"></em>님</span>
	        <button type="button" id="logoutBtn">로그아웃</button>
	    </div>
	</header>