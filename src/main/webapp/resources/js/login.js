const ACTIVE_CLASS = "on";
const Login = {
    init: function () {
        this.initEvent();
    },
    initEvent: function () {
        const self = this;

        Login.checkSessionInfo();

        Login.checkLoginActive();

        //탭 active, 저장
        $(".tab_list .tab_item")
            .off("click")
            .on("click", function (e) {
                const thisItem = $(e.currentTarget);
                $(".tab_list .tab_item").removeClass(ACTIVE_CLASS);
                thisItem.addClass(ACTIVE_CLASS);
                $("input[name=loginType]").val(thisItem.data("type"));
            });

        //정상 입력 시 로그인 버튼 활성화
        $("#id, #pwd").on("input", function (e) {
            self.checkLoginActive();
        });

        //비밀번호 보기 아이콘
        $(".pwd_show_icon").on("click", function (e) {
            const isShowBtnNotActive = $(e.currentTarget).hasClass("not_show");
            if (isShowBtnNotActive) {
                $(e.currentTarget).removeClass("not_show");
            } else {
                $(e.currentTarget).addClass("not_show");
            }
            $("#pwd").attr("type", isShowBtnNotActive ? "password" : "text");
        });

        //로그인 클릭
        $("#loginBtn").on("click", function () {
            self.login();
        });
    },
    //쿠키 확인후 처리
    checkSessionInfo: function () {
        //cookie 확인 : 아이디 저장, 자동로그인
        const savetype = Cookie.getCookie("daewonshop_savetype");
        const saveid = Cookie.getCookie("daewonshop_saveid");
        const autoid = Cookie.getCookie("daewonshop_autoid");
        const autopw = Cookie.getCookie("daewonshop_autopw");

        $("[name=saveId]").attr("checked", saveid !== "");
        $("[name=autoLogin]").attr("checked", autoid !== "");

        if (autoid != "") {
            if (savetype == "GW") {
                $("#group").addClass("on");
                $("#test").removeClass("on");
                $("#loginType").val($(".account").find(".on").attr("type"));
            } else if (savetype == "IS") {
                $("#group").removeClass("on");
                $("#test").addClass("on");
                $("#loginType").val($(".account").find(".on").attr("type"));
            }

            $("#id").val(autoid);
            $("#pwd").val(autopw);

            Login.login();
        }

        if (saveid != "") {
            $("#id").val(saveid);
        }
    },

    checkLoginActive: function () {
        const isIdValid = !Validation.isEmpty($("#id").val());
        const isPwdValid = !Validation.isEmpty($("#pwd").val());
        const isValid = isIdValid && isPwdValid;
        $("#loginBtn").attr("disabled", !isValid);
    },

    login: function () {
        if (Validation.isEmpty($("#id").val())) {
            alert("아이디를 입력하세요.");
            return;
        }
        if (Validation.isEmpty($("#pwd").val())) {
            alert("비밀번호를 입력하세요.");
            return;
        }

        const params = {
            loginType: $(".account .tab_item.on").data("type"),
            loginId: $("#id").val(),
            password: $("#pwd").val(),
        };

        $.ajax({
            method: "POST",
            url: `${API_URL}/auth/v1/login`,
            data: JSON.stringify(params),
            dataType: "json",
            contentType: "application/json",
            async: false,
            cache: false,
            beforeSend: function (xhr) {
                Loading.startLoading();
            },
            success: function (res) {
                if (res.status === 200) {
                    //아이디 저장, 자동로그인 체크하여 설정
                    Login.setSessionInfo();

                    //로그인 정보 세션에 저장
                    SessionStorage.setSessionStorage(
                        DAEWONSHOP_LOGIN_INFO,
                        res.data
                    );
                    location.href = "/consult/list";
                } else {
                    alert(res.message);
                }
            },
            error: function (res) {
                alert(res.responseJSON.message);
            },
            complete: function () {
                Loading.finishLoading();
            },
        });

        /*const formData = $("#login_form").serialize();
	    //아이디저장
	    const expdate = new Date();
	    if ($(".input[name=saveId]").is(":checked")) {
	        expdate.setTime(expdate.getTime() + 1000 * 3600 * 24 * 30); // 쿠키 유지 30일
	    } else {
	        expdate.setTime(expdate.getTime() - 1); // 쿠키 삭제조건
	    }
	    Cookie.setCookie("saveid", $("#user_id").val(), expdate);
	    Cookie.setCookie(
	        "savetype",
	        $(".account").find(".on").attr("type"),
	        expdate
	    );
			*/
    },
    //아이디저장, 자동로그인 설정
    setSessionInfo: function () {
        //아이디저장
        var expdate = new Date();
        if ($("input[name=saveId]").is(":checked")) {
            expdate.setTime(expdate.getTime() + 1000 * 3600 * 24 * 30); // 쿠키 유지 30일
        } else {
            expdate.setTime(expdate.getTime() - 1); // 쿠키 삭제조건
        }
        Cookie.setCookie("daewonshop_saveid", $("#id").val(), expdate);
        Cookie.setCookie(
            "daewonshop_savetype",
            $(".account").find(".on").data("type"),
            expdate
        );

        //자동로그인
        var expdate2 = new Date();
        if ($("input[name=autoLogin]").is(":checked")) {
            expdate2.setTime(expdate2.getTime() + 1000 * 3600 * 24 * 7); // 쿠키 유지 7일
        } else {
            expdate2.setTime(expdate2.getTime() - 1); // 쿠키 삭제조건
        }
        Cookie.setCookie("daewonshop_autoid", $("#id").val(), expdate2);
        Cookie.setCookie("daewonshop_autopw", $("#pwd").val(), expdate2);
    },
};
