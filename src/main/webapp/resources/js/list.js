const List = {
    init: function () {
        this.initEvent();
        this.initContent();
    },
    initEvent: function () {
        //checkbox
        //전체선택
        $("#totalSelect").on("click", function (e) {
            $(".list_checkbox").prop("checked", e.target.checked);
        });
        $(".list_checkbox").on("click", function (e) {
            const isAllSelected =
                $(".list_checkbox:checked").length ===
                $(".list_checkbox").length;
            $("#totalSelect").prop("checked", isAllSelected);
        });

        //write btn
        $("#writeNewConsultBtn").on("click", function () {
            location.href = "/consult/regist";
        });

        //init btn
        $("#searchParamInitBtn").on("click", function () {
            List.searchParamInit();
        });
        //search btn
        $("#searchBtn").on("click", function () {
            $("#curPage").val(0);
            List.getConsultListApi();
        });
        $(".search_category input[type=text]").on("keydown", function (e) {
            if (e.key === "Enter") {
                $("#curPage").val(0);
                List.getConsultListApi();
            }
        });
        //excel download
        $("#downloadExcelBtn").on("click", function () {
            List.downloadExcel();
        });
    },
    initContent: function () {
        DataSet.init();

        //datepicker
        DatePicker.init($("#startDate, #endDate"));

        //처음 목록 불러오기
        List.getConsultListApi();
    },
    searchParamInit: function () {
        // $(".search_category input, .search_category select").val("");
        DataSet.init();
        DatePicker.init($("#startDate, #endDate"));
    },
    getSearchParams: function (type) {
        const isDateRangeNull = $("input[name=totalSearch]").is(":checked");

        const counselorNm = $("input[name=counselorNm]").val();
        const channel = $("select[name=channel]").val();
        const consultType = $("select[name=consultType]").val();
        const deleted = false;
        const endDate = isDateRangeNull
            ? ""
            : DataTransform.stringToDate($("input[name=endDate]").val());
        const inType = $("select[name=inType]").val();
        const level1 = $("select[name=level1]").val();
        const level2 = $("select[name=level2]").val();
        const name = $("input[name=name]").val();
        const orderNo = $("input[name=orderNo]").val();
        const page = $("#curPage").val();
        const phone = $("input[name=phone]").val();
        const size = $("#pageSize").val();
        const startDate = isDateRangeNull
            ? ""
            : DataTransform.stringToDate($("input[name=startDate]").val());

        params = {
            counselorNm: counselorNm || "",
            channel: channel || "",
            consultType: consultType || "",
            deleted,
            endDate,
            inType: inType || "",
            level1: !level1 || level1 === "0" ? "" : level1,
            level2: !level2 || level2 === "0" ? "" : level2,
            name: name || "",
            orderNo: orderNo || "",
            page,
            phone: phone || "",
            size,
            startDate,
        };
        // console.log("params", params);
        return params;
    },

    getConsultListApi: function () {
        const data = List.getSearchParams();
        $.ajax({
            method: "GET",
            url: `${API_URL}/consultation/v1/search`,
            data,
            dataType: "json",
            contentType: "application/json",
            async: false,
            cache: false,
            beforeSend: function (xhr) {
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
                    List.setConsultList(res.data);
                } else {
                    alert(res.message);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {},
        });
    },
    setConsultList: function (listData) {
        let listContent;
        if (listData.content.length > 0) {
            listContent = listData.content
                .map(
                    ({
                        channel,
                        consultDate,
                        consultType,
                        counselorNm,
                        department,
                        id,
                        inType,
                        level1,
                        level2,
                        name,
                        orderNo,
                        phone,
                    }) => {
                        return `<tr onclick="location.href='/consult/regist?type=detail&id=${id}'" style="cursor:pointer;">
                        <td>
                            <label class="basic_checkbox table_checkbox">
                                <input type="checkbox" id="select_${id}" class="list_checkbox"/>
                                <span class="on"></span>
                            </label>
                        </td>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${DataTransform.formatPhoneNumber(phone)}</td>
                        <td>${orderNo}</td>
                        <td>${channel}</td>
                        <td>${inType}</td>
                        <td>${consultType}</td>
                        <td>${level1 || "-"}</td>
                        <td>${level2}</td>
                        <td>${consultDate}</td>
                        <td>프랜드미디어</td>
                        <td>${counselorNm}</td>
                    </tr>`;
                    }
                )
                .join("")
                .replaceAll(",", "");
        } else {
            listContent =
                "<tr><td colspan='13'>검색 결과가 없습니다.</td></tr>";
        }
        $("#searchResultCount").text(listData.totalElements);
        $("#consultResultTable tbody").html(listContent);
        $("#consultResultTable tbody tr td:not(.checkbox_td)").on(
            "click",
            function (e) {
                const thisTr = $(e.currentTarget).parent("tr");
                const id = thisTr.data("id");
                location.href = `/consult/regist?type=detail&id=${id}`;
            }
        );
        Paging.init(
            $(".paging"),
            listData.totalElements,
            Number($("#curPage").val()),
            true
        );
    },
    downloadExcel: function () {
        let baseUrl = `/consult/excel?token=${$("input[name=authCode]").val()}`;

        //날짜무시 여부
        const isDateRangeNull = $("input[name=totalSearch]").is(":checked");

        const startDate = isDateRangeNull
            ? ""
            : DataTransform.stringToDate($("input[name=startDate]").val());
        const endDate = isDateRangeNull
            ? ""
            : DataTransform.stringToDate($("input[name=endDate]").val());
        const channel = $("select[name=channel]").val() || "";
        const consultType = $("select[name=consultType]").val() || "";
        const inType = $("select[name=inType]").val() || "";
        const level1 = $("select[name=level1]").val() || "";
        const level2 = $("select[name=level2]").val() || "";
        const name = $("input[name=name]").val() || "";
        const orderNo = $("input[name=orderNo]").val() || "";
        const phone = $("input[name=phone]").val() || "";
        const counselorNm = $("input[name=counselorNm]").val() || "";

        let nameURL = `&name=${name}`;
        let phoneURL = `&phone=${phone}`;
        let startDateURL = `&startDate=${startDate}`;
        let endDateURL = `&endDate=${endDate}`;
        let orderNoURL = `&orderNo=${orderNo}`;
        let channelURL = `&channel=${channel}`;
        let inTypeURL = `&inType=${inType}`;
        let consultTypeURL = `&consultType=${consultType}`;
        let level1URL = `&level1=${level1 === "0" ? "" : level1}`;
        let level2URL = `&level2=${level2 === "0" ? "" : level2}`;
        let counselorNmURL = `&counselorNm=${counselorNm}`;

        let url =
            baseUrl +
            nameURL +
            phoneURL +
            startDateURL +
            endDateURL +
            orderNoURL +
            channelURL +
            inTypeURL +
            consultTypeURL +
            level1URL +
            level2URL +
            counselorNmURL;

        location.href = url;
    },
};
