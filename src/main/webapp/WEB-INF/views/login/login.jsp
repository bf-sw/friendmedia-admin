<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/head.jsp" %>
<!-- 개별 script -->
<script src="/resources/js/login.js?v=20231026"></script>
<main class="login_page">
	 <%@ include file="/WEB-INF/views/common/navbar.jsp" %>
        <div class="login_wrap">
            <div class="login_cont">
                <h1 class="page_title text_centered">로그인</h1>
                <input type="hidden" name="loginType" />
                <ul class="tab_list account">
                    <li id="group" class="tab_item on" data-type="GW">
                        그룹웨어
                    </li>
                    <li id="test" class="tab_item" data-type="IS">
                        임시계정
                    </li>
                </ul>
                <div class="input_cont">
                    <input
                        type="text"
                        id="id"
                        name="id"
                        placeholder="아이디"
                        class="wide_input"
                        onkeypress="if ( event.key==='Enter' ) {$('#pwd').focus();}"
                    />
                </div>
                <div class="input_cont">
                    <span class="pwd_show_icon"></span>
                    <input
                        type="password"
                        id="pwd"
                        name="pwd"
                        placeholder="비밀번호"
                        class="wide_input"
                        onkeypress="if ( event.key==='Enter' ) {Login.login();}"
                    />
                </div>
                <div class="flex_container">
                    <label class="basic_checkbox">
                        <input type="checkbox" name="saveId" id="saveId" />
                        <span class="on"></span>
                        <span>아이디 저장</span>
                    </label>
                    <label class="basic_checkbox">
                        <input
                            type="checkbox"
                            name="autoLogin"
                            id="autoLogin"
                        />
                        <span class="on"></span>
                        <span>자동 로그인</span>
                    </label>
                </div>
                <div class="button_cont">
                    <button id="loginBtn" class="big_btn" disabled>
                        로그인
                    </button>
                </div>
            </div>
        </div>
   </main>
<script type="text/javascript">

   $(document).ready(function () {
       Login.init();
   });
	
</script>
</body>
</html>