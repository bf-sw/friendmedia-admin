const List = {
    FM_SEARCH_PARAMS: "FM_SEARCH_PARAMS",
    init: function () {
        this.initEvent();
        this.initContent();
    },
    initEvent: function () {
        const self = this;

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
            self.searchParamInit();
        });
        //search btn
        $("#searchBtn").on("click", function () {
            $("#curPage").val(0);
            self.getConsultListApi();
        });
        $(".search_category input[type=text]").on("keydown", function (e) {
            if (e.key === "Enter") {
                $("#curPage").val(0);
                self.getConsultListApi();
            }
        });
        //excel download
        $("#downloadExcelBtn").on("click", function () {
            self.downloadExcel();
        });
        //multi delete btn
        $("#deleteMultiConsultBtn").on("click", function () {
            const selectedItems = $(".list_checkbox:checked");
            if (selectedItems.length > 0) {
                if (confirm("삭제하시겠습니까?")) {
                    self.deleteConsult(selectedItems);
                }
            } else {
                alert("삭제할 상담을 선택해 주세요.");
            }
        });
        //multi modify btn
        $("#modifyBtn").on("click", function () {
            const selectedItems = $(".list_checkbox:checked");
            if (selectedItems.length > 0) {
                Modal.show();
            } else {
                alert("수정할 상담을 선택해 주세요.");
            }
        });

        //modal btn
        $("#initModifyConsultBtn").on("click", function () {
            Modal.modalSelectInit();
        });
        $("#modifyConsultBtn").on("click", function () {
            const selectedItems = $(".list_checkbox:checked");
            if (confirm("수정하시겠습니까?")) {
                self.modifyConsult(selectedItems);
            }
        });
    },
    initContent: function () {
        DataSet.init();

        //datepicker
        DatePicker.init($("#startDate, #endDate"));

        //상담 parameter 저장 있을 시 세팅
        this.setSearchParams();

        //처음 목록 불러오기
        List.getConsultListApi();

        const isUserAuthorized = Header.isUserSameAuth();
        $("#deleteMultiConsultBtn").css(
            "display",
            isUserAuthorized === "true" ? "inline" : "none"
        );
    },
    setSearchParams: function () {
        const self = this;

        const searchParams =
            LocalStorage.getLocalStorage(self.FM_SEARCH_PARAMS) || {};
        console.log("searchParams", searchParams);
        for (let i in searchParams) {
            const itemVal = searchParams[i];
            const itemDom = $(`[name=${i}]`);
            // console.log(i, itemDom, itemDom.prop("tagName"), itemVal);
            switch (itemDom.prop("tagName")) {
                case "INPUT":
                    if (i === "totalSearch") {
                        $(`[name=${i}]`).attr("checked", itemVal);
                    } else if (i.includes("Date")) {
                        if (Validation.isEmpty(itemVal)) {
                            DatePicker.init(itemDom);
                        } else {
                            itemDom.val();
                        }
                    } else {
                        itemDom.val(itemVal);
                    }
                    break;
                case "SELECT":
                    if (!Validation.isEmpty(itemVal)) {
                        itemDom.val(itemVal);
                        $(`[name='${i}'] option[value='${itemVal}']`).attr(
                            "selected",
                            true
                        );
                        $(`[name='${i}']`).trigger("change");
                    }
                    break;

                default:
                    break;
            }
        }
    },

    searchParamInit: function () {
        $(".search_category input, .search_category select").val("");
        DataSet.init();
        DatePicker.init($("#startDate, #endDate"));
        LocalStorage.deleteLocalStorage(this.FM_SEARCH_PARAMS);
    },
    getSearchParams: function (type) {
        const self = this;

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
        const complaint = $("select[name=complaint]").val();
        const consultStatus = $("select[name=consultStatus]").val();

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
            complaint,
            // consultStatus: consultStatus === "" ? null : consultStatus,
        };
        if (consultStatus !== "") {
            params.consultStatus = consultStatus;
        }
        //검색어 저장
        LocalStorage.setLocalStorage(self.FM_SEARCH_PARAMS, {
            ...params,
            totalSearch: $("input[name=totalSearch]:checked").is(":checked"),
        });
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
                    List.setConsultList(res.data);
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
    setConsultList: function (listData) {
        let listContent;
        const curPageNum = Number($("#curPage").val());
        const pageSizeNum = Number($("#pageSize").val());
        const totalCountNum = listData.totalElements;
        let lastIdx = totalCountNum - curPageNum * pageSizeNum;
        if (listData.content.length > 0) {
            listContent = listData.content.map(
                (
                    {
                        channel,
                        complaint,
                        consultDate,
                        consultType,
                        counselorNm,
                        consultStatus,
                        department,
                        id,
                        inType,
                        level1,
                        level2,
                        name,
                        orderNo,
                        phone,
                        content,
                    },
                    idx
                ) => {
                    const consultStatusName =
                        ConsultStatusData.find(
                            (item) => item.value === consultStatus
                        )?.name || "";

                    return `<tr style="cursor:pointer;" data-id=${id}>
                        <td class="checkbox_td">
                            <label class="basic_checkbox table_checkbox">
                                <input type="checkbox" id="select_${id}" class="list_checkbox" data-id="${id}" />
                                <span class="on"></span>
                            </label>
                        </td>
                        <td>${lastIdx - idx}</td>
                        <td>${complaint ? "O" : "X"}</td>
                        <td>${consultStatus ? consultStatusName : ""}</td>
                        <td>${name}</td>
                        <td>${DataTransform.formatPhoneNumber(phone)}</td>
                        <td>${orderNo}</td>
                        <td>${channel}</td>
                        <td>${inType}</td>
                        <td>${consultType}</td>
                        <td>${level1 || "-"}</td>
                        <td>${level2}</td>
                        <td>
                        ${
                            content.length >= 30
                                ? content.substring(0, 29) + "..."
                                : content
                        }
                        </td>
                        <td>${consultDate}</td>
                        <td>${counselorNm}</td>
                        <td>프랜드미디어</td>
                    </tr>`;
                }
            );
        } else {
            listContent =
                "<tr><td colspan='14'>검색 결과가 없습니다.</td></tr>";
        }
        $("#searchResultCount").text(listData.totalElements);
        $("#consultResultTable tbody").empty();
        $("#consultResultTable tbody").append(listContent);
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
        Loading.setLoading(3000);

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
        const complaint = $("select[name=complaint]").val();
        const consultStatus = $("select[name=consultStatus]").val();

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
        let complaintURL = `&complaint=${complaint}`;
        let consultStatusURL = `&consultStatus=${consultStatus}`;

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
            counselorNmURL +
            complaintURL +
            consultStatusURL;
        // console.log(url);
        location.href = url;
    },
    deleteConsult: function (selectedItems) {
        let url = `${API_URL}/consultation/v1/multi/delete`;
        let deleteIdx = {
            ids: [],
        };
        $.each(selectedItems, function (_, item) {
            if (selectedItems.length === 1) {
                url = `${API_URL}/consultation/v1/delete`;
                deleteIdx = { id: $(item).data("id") };
            } else {
                deleteIdx.ids.push({ id: $(item).data("id") });
            }
        });
        $.ajax({
            method: "POST",
            url,
            data: JSON.stringify(deleteIdx),
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
                    alert("삭제되었습니다.");
                    List.getConsultListApi();
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
    modifyConsult: function (selectedItems) {
        let url = `${API_URL}/consultation/v1/multi/update`;
        const modifyParams = {
            consultStatus: $("select[name=modal_consultStatus]").val(),
            channel: $("select[name=modal_channel]").val(),
            inType: $("select[name=modal_inType]").val(),
            consultType: $("select[name=modal_consultType]").val(),
            level1: $("select[name=modal_level1]").val(),
            level2: $("select[name=modal_level2]").val(),
        };
        let data = { ids: [] };
        $.each(selectedItems, function (_, item) {
            data.ids.push($(item).data("id"));
        });
        for (let i in modifyParams) {
            const item = modifyParams[i];
            if (!(!item || item === "" || item === "0")) {
                data[i] = item;
            }
        }
        console.log(modifyParams, data);

        $.ajax({
            method: "POST",
            url,
            data: JSON.stringify(data),
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
                    alert("수정되었습니다.");
                    List.getConsultListApi();
                    Modal.hide();
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
};
