const Regist = {
    init: function () {
        this.initEvent();
    },
    initEvent: function () {
        DataSet.init();

        DatePicker.init($("#consultDate"));

        Regist.setReadonlyContent();

        $("#goToListBtn").on("click", function () {
            location.href = "/consult/list";
        });
        $("#saveConsultBtn").on("click", function () {
            Regist.regist();
        });

        //등록, 상세, 수정별 처리
        Regist.checkPageType();
    },
    checkPageType: function () {
        const urlParams = new URL(location.href).searchParams;
        const type = urlParams.get("type");
        const id = urlParams.get("id");
        switch (type) {
            case "detail":
                $("#deleteConsultBtn")
                    .css("display", "inline")
                    .on("click", function () {
                        Regist.deleteConsult(id);
                    });
                $(".page_title").text("상담 상세보기");
                $("#saveConsultBtn").text("수정");
                $("#saveConsultBtn")
                    .off("click")
                    .on("click", function () {
                        location.href = `/consult/regist?type=modify&id=${id}`;
                    });
                Regist.getConsultDetailApi(id);
                break;
            case "modify":
                $("#deleteConsultBtn").css("display", "none");
                $(".page_title").text("상담 수정");
                $("#saveConsultBtn").text("수정");
                Regist.getConsultDetailApi(id);
                break;
            default:
                $("#deleteConsultBtn").css("display", "none");
                break;
        }
        //input diabled 처리
        Regist.setContentDisable(type);
    },
    //수정/삭제 표시
    checkBtnActive: function (detailInfo) {
        //관리자 체크
        const isUserAuthorized = Header.isUserSameAuth();
        $("#deleteConsultBtn").css(
            "display",
            isUserAuthorized === "true" ? "inline" : "none"
        );
        //본인 + 상담 날짜 체크 : 날짜 체크 삭제
        const isCurUser = Header.isUserSameAuth(detailInfo.counselorId);
        // const today = new Date();
        // const detailDate = new Date(detailInfo.consultDate);
        // const isSameDate = DataTransform.checkSameDate(today, detailDate);

        $("#saveConsultBtn").css("display", isCurUser ? "inline" : "none");
    },
    setReadonlyContent: function () {
        const userInfo = Header.userInfo;
        // $("input[id=staffDept]").val(userInfo.department);
        $("input[id=staffDept]").val("프랜드미디어");
        $("input[id=staffName]").val(userInfo.name);
    },

    setContentDisable: function (type) {
        const allInputs = $(
            "#consultForm input, #consultForm select, #consultForm textarea"
        );
        switch (type) {
            case "detail":
                allInputs.attr("disabled", true);
                break;

            default:
                allInputs.attr("disabled", false);
                break;
        }
    },

    //상세페이지 정보 가져오기
    getConsultDetailApi: function (id) {
        $.ajax({
            method: "GET",
            url: `${API_URL}/consultation/v1/${id}/detail`,
            dataType: "json",
            contentType: "application/json",
            async: false,
            cache: false,
            beforeSend: function (xhr) {
                Loading.startLoading();
                xhr.setRequestHeader(
                    "Authorization",
                    `${$("input[id=tokenType]").val()} ${$(
                        "input[id=authCode]"
                    ).val()}`
                );
            },
            success: function (res) {
                if (res.status === 200) {
                    // console.log(res);
                    Regist.setConsultDetail(res.data);
                    Regist.checkBtnActive(res.data);
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
    },
    setConsultDetail: function (detailInfo) {
        // console.log("detail setting : ", detailInfo);
        for (let detailType in detailInfo) {
            const detailValue = detailInfo[detailType];
            switch (detailType) {
                case "channel":
                case "inType":
                case "consultType":
                case "consultStatus":
                    $(
                        `select[name='${detailType}'] option[value='${detailValue}']`
                    ).attr("selected", true);
                    $(`select[name='${detailType}']`).trigger("change");
                    break;
                case "level1":
                    $(
                        `select[name='${detailType}'] option[value='${detailValue}']`
                    ).attr("selected", true);
                    $(`select[name='${detailType}']`).trigger("change");
                    break;
                case "level2":
                    $(
                        `select[name='${detailType}'] option[value='${detailValue}']`
                    ).attr("selected", true);
                    break;
                case "content":
                    $(`textarea[name=${detailType}`).text(detailValue);
                    break;
                case "complaint":
                    $(`input[name='${detailType}']`).attr(
                        "checked",
                        detailValue
                    );
                    break;
                case "counselorNm":
                    $(`input[id=staffName]`).val(detailValue);
                    break;
                default:
                    $(`input[name=${detailType}]`).val(detailValue);
                    break;
            }
        }
    },

    validation: function () {
        let isValid = false;
        //고객명
        const name = $("input[name=name]");
        if (Validation.isEmpty(name.val())) {
            alert("고객명을 입력해 주세요.");
            name.focus();
            isValid = false;
            return;
        }
        //연락처
        const phone = $("input[name=phone]");
        if (Validation.isEmpty(phone.val())) {
            alert("연락처를 입력해 주세요.");
            phone.focus();
            isValid = false;
            return;
        }
        //주문번호
        const orderNo = $("input[name=orderNo]");
        if (Validation.isEmpty(orderNo.val())) {
            alert("주문번호를 입력해 주세요.");
            orderNo.focus();
            isValid = false;
            return;
        }
        //채널
        const channel = $("select[name=channel]");
        if (Validation.isEmpty(channel.val())) {
            alert("채널을 선택해 주세요.");
            channel.focus();
            isValid = false;
            return;
        }
        //인입유형
        const inType = $("select[name=inType]");
        if (Validation.isEmpty(inType.val())) {
            alert("인입유형을 선택해 주세요.");
            inType.focus();
            isValid = false;
            return;
        }
        //상담결과
        const consultStatus = $("select[name=consultStatus]");
        if (Validation.isEmpty(consultStatus.val())) {
            alert("상담결과를 선택해 주세요.");
            consultStatus.focus();
            isValid = false;
            return;
        }
        //상담유형 - 품목
        const consultType = $("select[name=consultType]");
        if (Validation.isEmpty(consultType.val())) {
            alert("품목을 선택해 주세요.");
            consultType.focus();
            isValid = false;
            return;
        }
        //상담유형 - 중분류
        const level2 = $("select[name=level2]");
        if (Validation.isEmpty(level2.val())) {
            alert("중분류를 선택해 주세요.");
            level2.focus();
            isValid = false;
            return;
        }
        //상담이력
        const content = $("textarea[name=content]");
        if (Validation.isEmpty(content.val())) {
            alert("상담이력을 입력해 주세요.");
            content.focus();
            isValid = false;
            return;
        }
        //상담일자
        const consultDate = $("input[name=consultDate]");
        if (Validation.isEmpty(consultDate.val())) {
            alert("상담일자를 선택해 주세요.");
            consultDate.focus();
            isValid = false;
            return;
        }

        isValid = true;
        return isValid;
    },
    regist: function (type) {
        if (Regist.validation()) {
            if (confirm("저장하시겠습니까?")) {
                const id = $("input[name=id]").val();
                let url = `${API_URL}/consultation/v1/regist`;
                let form = {
                    name: $("input[name=name]").val(),
                    phone: $("input[name=phone]").val(),
                    orderNo: $("input[name=orderNo]").val(),
                    channel: $("select[name=channel]").val(),
                    inType: $("select[name=inType]").val(),
                    consultStatus: $("select[name=consultStatus]").val(),
                    consultType: $("select[name=consultType]").val(),
                    level1:
                        $("select[name=level1]").val() === "0"
                            ? ""
                            : $("select[name=level1]").val(),
                    level2: $("select[name=level2]").val(),
                    content: $("textarea[name=content]").val(),
                    consultDate: $("input[name=consultDate]").val(),
                    complaint: $("input[name=complaint]").is(":checked"),
                };
                if (!Validation.isEmpty(id)) {
                    url = `${API_URL}/consultation/v1/update`;
                    form.id = id;
                }
                // console.log("폼", form);
                // return;

                $.ajax({
                    method: "POST",
                    url,
                    data: JSON.stringify(form),
                    dataType: "json",
                    contentType: "application/json",
                    async: false,
                    cache: false,
                    beforeSend: function (xhr) {
                        Loading.startLoading();
                        xhr.setRequestHeader(
                            "Authorization",
                            `${$("input[id=tokenType]").val()} ${$(
                                "input[id=authCode]"
                            ).val()}`
                        );
                    },
                    success: function (res) {
                        if (res.status === 200) {
                            // console.log(res);
                            alert("저장되었습니다.");
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
            }
        }
    },
    deleteConsult: function (id) {
        if (confirm("삭제하시겠습니까?")) {
            $.ajax({
                method: "POST",
                url: `${API_URL}/consultation/v1/delete`,
                data: JSON.stringify({ id }),
                dataType: "json",
                contentType: "application/json",
                async: false,
                cache: false,
                beforeSend: function (xhr) {
                    Loading.startLoading();
                    xhr.setRequestHeader(
                        "Authorization",
                        `${$("input[id=tokenType]").val()} ${$(
                            "input[id=authCode]"
                        ).val()}`
                    );
                },
                success: function (res) {
                    if (res.status === 200) {
                        // console.log(res);
                        alert("삭제되었습니다.");
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
        }
    },
};
