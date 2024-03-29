$(document).ready(function () {
    Header.init();
});

const DAEWONSHOP_LOGIN_INFO = "DAEWONSHOP_LOGIN_INFO";
// const API_URL = "http://172.30.40.98:8884/api";
const API_URL = "https://fm.bodyfriend.com/api";

const Loading = {
    LOADING_HIDE_CLASS: "hide",
    setLoading: function (duration) {
        $("#loading").removeClass(Loading.LOADING_HIDE_CLASS);
        setTimeout(() => {
            $("#loading").addClass(Loading.LOADING_HIDE_CLASS);
        }, duration || 1000);
    },
    startLoading: function () {
        $("#loading").removeClass(Loading.LOADING_HIDE_CLASS);
    },
    finishLoading: function () {
        $("#loading").addClass(Loading.LOADING_HIDE_CLASS);
    },
};

const Header = {
    userInfo: null,
    init: function () {
        if (window.location.pathname.includes("login")) {
            $("header .user_info_area").css("display", "none");
        } else {
            //logout
            $("#logoutBtn").on("click", function () {
                if (confirm("로그아웃 하시겠습니까?")) {
                    Header.logout();
                }
            });
            //user info set
            Header.userInfo = SessionStorage.getSessionStorage(
                DAEWONSHOP_LOGIN_INFO
            );
            // console.log(Header.userInfo);
            if (!Header.userInfo) {
                location.href = "/login";
            }
            $("#loggedInUserName").html(Header.userInfo.name);
            $("input[id=tokenType]").val(Header.userInfo.tokenType);
            $("input[id=authCode]").val(Header.userInfo.accessToken);
            $("input[id=loginId]").val(Header.userInfo.loginId);
            $("input[id=isAdmin]").val(Header.userInfo.admin);
            // console.log($("input[id=authCode]").val());
        }
    },
    logout: function () {
        //로그아웃시 세션삭제, 자동로그인 삭제
        SessionStorage.deleteSessionStorage(DAEWONSHOP_LOGIN_INFO);
        Cookie.deleteCookie("autoid");
        Cookie.deleteCookie("autopw");
        location.href = "/login";
    },
    isUserSameAuth: function (userId) {
        //권한, 같은 유저 확인
        const curUserId = $("input[id=loginId]").val();
        let isUserSameAuth = false;
        if (userId) {
            //같은지 확인
            if (userId === curUserId) isUserSameAuth = true;
        } else {
            //관리자 확인
            isUserSameAuth = $("input[id=isAdmin]").val();
        }
        return isUserSameAuth;
    },
};

const DataSet = {
    init: function () {
        DataSet.dataEventInit();
        DataSet.setSelectOption();
    },
    dataEventInit: function () {
        $(
            "select[name=consultType], select[name=level1], select[name=modal_consultType], select[name=modal_level1]"
        ).on("change", function (e) {
            DataSet.setOptionLv(e.target.name, e.target.value);
        });
    },
    setSelectOption: function () {
        //채널, 인입경로, 품목 세팅
        for (let depth1 in OptionDataList) {
            let depth1Item = OptionDataList[depth1];
            DataSet.setOptionDom(depth1, depth1Item);
        }
    },
    setOptionLv: function (type, selectedValue) {
        //품목에 따른 대분류, 중분류 세팅
        let level1Dom,
            level2Dom = "";
        let consultTypeData;
        const itemType = type.replaceAll("modal_", "");
        const isModalItem = type.includes("modal_") ? "modal_" : "";
        switch (type) {
            case "consultType":
            case "modal_consultType":
                consultTypeData = OptionDataList[itemType].find(
                    ({ text }) => text === selectedValue
                );
                const islevel1Exist = consultTypeData.child.level1;
                if (islevel1Exist) {
                    //대분류
                    DataSet.setOptionDom(
                        "level1",
                        consultTypeData.child.level1
                    );
                    //중분류 초기화
                    level2Dom = "<option value=''>소분류</option>";
                    $(`select[name=${isModalItem}level2]`).html(level2Dom);
                } else {
                    //대분류 초기화
                    level1Dom = "<option value=''>중분류</option>";
                    $(`select[name=${isModalItem}level1]`).html(level1Dom);
                    //중분류
                    DataSet.setOptionDom(
                        "level2",
                        consultTypeData.child.level2
                    );
                }
                $(`select[name=${isModalItem}level1]`).attr(
                    "disabled",
                    !islevel1Exist
                );
                break;

            case "level1":
            case "modal_level1":
                const consultType = $(
                    `select[name=${isModalItem}consultType]`
                ).val();
                consultTypeData = OptionDataList["consultType"].find(
                    ({ text }) => text === consultType
                );

                if (!Validation.isEmpty(selectedValue)) {
                    const level2Data = consultTypeData.child.level1.find(
                        ({ text }) => text === selectedValue
                    );
                    //중분류
                    DataSet.setOptionDom("level2", level2Data.child);
                }

                break;

            default:
                break;
        }
    },
    //list 넘기면 option dom 가져옴
    setOptionDom: function (domName, list) {
        const totalDom = "<option value='' selected disabled>전체</option>";
        const domItem = list.map(({ text }) => {
            return `<option value='${text}'>
                    ${text}
                </option>`;
        });
        // .join(",", "")
        // .replaceAll(",", "");
        $(`select[name=${domName}], select[name=modal_${domName}]`).empty();
        $(`select[name=${domName}], select[name=modal_${domName}]`).append(
            totalDom + domItem
        );
    },
};

const DatePicker = {
    pickerOption: {
        dateFormat: "yy-mm-dd", //달력 날짜 형태
        showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        showMonthAfterYear: true, // 월- 년 순서가아닌 년도 - 월 순서
        changeYear: true, //option값 년 선택 가능
        changeMonth: true, //option값  월 선택 가능
        showOn: "both", //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
        buttonImage:
            "https://bodyfriend.speedgabia.com/img/bodyfriend/icon/icon_datepicker.svg", //버튼 이미지 경로
        buttonImageOnly: true, //버튼 이미지만 깔끔하게 보이게함
        buttonText: "선택", //버튼 호버 텍스트
        yearSuffix: "년", //달력의 년도 부분 뒤 텍스트
        monthNamesShort: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ], //달력의 월 부분 텍스트
        monthNames: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ], //달력의 월 부분 Tooltip
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"], //달력의 요일 텍스트
        dayNames: [
            "일요일",
            "월요일",
            "화요일",
            "수요일",
            "목요일",
            "금요일",
            "토요일",
        ], //달력의 요일 Tooltip
        minDate: "-5y", //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        maxDate: "+5y", //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
        onSelect: function (dateString, dateObj) {
            //날짜 선택 이벤트
            let id = dateObj.id;
            let curTime = new Date(dateString).getTime();

            $(`.input[name='${id}']`).val(dateString);

            const startDateTime =
                $("#startDate").val() !== ""
                    ? new Date($("#startDate").val()).getTime()
                    : "";
            const endDateTime =
                $("#endDate").val() !== ""
                    ? new Date($("#endDate").val()).getTime()
                    : "";

            if (id === "startDate") {
                //시작일
                if (endDateTime !== "" && endDateTime < curTime) {
                    //종료일이 있을경우 종료일보다 클 수 없음
                    alert("시작일이 종료일보다 클 수 없습니다.");
                    $(`input[name='${id}']`).val("");
                    return;
                }
            } else if (id === "endDate") {
                //종료일
                if (startDateTime !== "" && startDateTime > curTime) {
                    //시작일이 있을경우 종료일보다 클 수 없음
                    alert("종료일이 시작일보다 작을 수 없습니다.");
                    $(`input[name='${id}']`).val("");
                    return;
                }
            }
        },
    },
    init: function (dom) {
        const self = this;
        dom.datepicker({ ...self.pickerOption });
        dom.val(DataTransform.dateToString(new Date()));
    },
};

const DataTransform = {
    dateToString: function (dateObj) {
        //date object -> YYYY-MM-DD
        //const dateString = new Date(dateObj);
        const year = dateObj.getFullYear();
        const month = Number(dateObj.getMonth()) + 1;
        const date = dateObj.getDate();

        const returnDateString = `${year}-${String(month).padStart(
            2,
            "0"
        )}-${String(date).padStart(2, "0")}`;
        return returnDateString;
    },
    stringToDate: function (dateString) {
        //YYYY-MM-dd -> date object
        const dateArr = dateString.split("-");
        // console.log(dateString);
        // console.log(dateArr[0] + dateArr[1] + dateArr[2]);
        return Number(dateArr[0] + dateArr[1] + dateArr[2]);
    },
    dateToMonth: function (dateObj) {
        //date object -> YYYYMM
        const year = dateObj.getFullYear();
        const month = Number(dateObj.getMonth()) + 1;

        const returnDateString = `${year}${String(month).padStart(2, "0")}`;
        return returnDateString;
    },
    formatPhoneNumber: function (phoneNumber) {
        if (typeof phoneNumber !== "string") {
            phoneNumber = String(phoneNumber);
        }
        // 숫자만 추출
        const digitsOnly = phoneNumber.replace(/\D/g, "");
        // 앞에서부터 3자리, 4자리, 4자리로 나누어 형식 변경
        return digitsOnly.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    },
    unformatPhoneNumber: function (phoneNumber) {
        // 하이픈(-)을 제거
        return phoneNumber.replace(/-/g, "");
    },
    checkSameDate: function (date1, date2) {
        const isSameYear = date1.getFullYear() === date2.getFullYear();
        const isSameMonth = date1.getMonth() === date2.getMonth();
        const isSameDay = date1.getDate() === date2.getDate();

        return isSameYear && isSameMonth && isSameDay;
    },
};

const Cookie = {
    setCookie: function (name, value, expires) {
        document.cookie =
            name +
            "=" +
            escape(value) +
            "; path=/; expires=" +
            expires.toGMTString();
    },
    getCookie: function (Name) {
        var search = Name + "=";
        if (document.cookie.length > 0) {
            // 쿠키가 설정되어 있다면
            offset = document.cookie.indexOf(search);
            if (offset != -1) {
                // 쿠키가 존재하면
                offset += search.length;
                // set index of beginning of value
                end = document.cookie.indexOf(";", offset);
                // 쿠키 값의 마지막 위치 인덱스 번호 설정
                if (end == -1) end = document.cookie.length;
                return unescape(document.cookie.substring(offset, end));
            }
        }
        return "";
    },
    deleteCookie: function (type) {
        const expdate = new Date();
        expdate.setDate(expdate.getDate() - 1);
        document.cookie =
            "daewonshop_" +
            type +
            "= " +
            "; expires=" +
            expdate.toGMTString() +
            "; path=/";
        // document.cookie =
        //     "daewonshop_saveid= " +
        //     "; expires=" +
        //     expdate.toGMTString() +
        //     "; path=/";
        // document.cookie =
        //     "daewonshop_savetype= " +
        //     "; expires=" +
        //     expdate.toGMTString() +
        //     "; path=/";
        // document.cookie =
        //     "daewonshop_autoid= " +
        //     "; expires=" +
        //     expdate.toGMTString() +
        //     "; path=/";
        // document.cookie =
        //     "daewonshop_autopw= " +
        //     "; expires=" +
        //     expdate.toGMTString() +
        //     "; path=/";
    },
};

const Validation = {
    isEmpty: function (targetStr) {
        if (
            targetStr === undefined ||
            targetStr === null ||
            targetStr.toString().replaceAll(/\s/g, "") == ""
        ) {
            return true;
        }
        return false;
    },
};

const LocalStorage = {
    getLocalStorage: (text) => {
        const localStorageItem = localStorage.getItem(text);
        let returnItem;
        if (
            !localStorageItem ||
            localStorageItem === undefined ||
            localStorageItem === null ||
            localStorageItem === "undefined"
        ) {
            returnItem = null;
        } else {
            returnItem = JSON.parse(localStorageItem);
        }
        return returnItem;
    },
    setLocalStorage: (text, value) => {
        localStorage.setItem(text, JSON.stringify(value));
    },
    deleteLocalStorage: (text) => {
        localStorage.removeItem(text);
    },
};

const SessionStorage = {
    getSessionStorage: (text) => {
        const sessionStorageItem = sessionStorage.getItem(text);
        return sessionStorageItem ? JSON.parse(sessionStorageItem) : null;
    },
    setSessionStorage: (text, value) => {
        sessionStorage.setItem(text, JSON.stringify(value));
    },
    deleteSessionStorage: (text) => {
        sessionStorage.removeItem(text);
    },
};

const Paging = {
    pageSize: 10,
    navSize: 5,
    isSession: false,
    serverCallCnt: 0,

    init: function (appendEle, totCnt, curPage, paramBoolean) {
        const self = this;
        var callback = self.movePage;
        var l_cnt = self.pageSize;
        var p_cnt = self.navSize;

        var sellBoolean =
            paramBoolean == null || paramBoolean == undefined
                ? false
                : paramBoolean;
        var pageCnt = sellBoolean == true ? self.pageSize : 5;
        var listCnt = 5;

        appendEle.html("");

        if (totCnt == undefined) return;

        pageCnt = sellBoolean == true ? self.pageSize : 5;
        p_cnt = sellBoolean == true ? p_cnt : 5;

        if (p_cnt != null) pageCnt = p_cnt;
        if (l_cnt != null) listCnt = l_cnt;

        var totPageCnt = Math.max(0, Math.floor(totCnt / listCnt));
        var start = Math.floor(curPage / pageCnt) * pageCnt;

        var end = start + pageCnt - 1;
        end = Math.min(end, totPageCnt);

        if (sellBoolean) {
            var startImg =
                '<a title="처음으로" class="first cursor num">&lt;&lt;</a>';
            var startFirstImg = $(startImg);

            if (start > 0) startFirstImg.bind("click", { page: 0 }, callback);
            if (start >= pageCnt)
                appendEle.children("span").append(startFirstImg);
        }

        if (start > 0) {
            var startImg = $(
                '<a title="이전" class="prev cursor num">&lt;</a>'
            );
            startImg.bind("click", { page: start - pageCnt }, callback);
            appendEle.append(startImg);
        }

        for (var i = start; i <= end; i++) {
            var pageTag = i;

            if (i == curPage) {
                pageTag = $(
                    '<a class="cursor num on active">' + (i + 1) + "</a>"
                );
            } else {
                pageTag = $('<a class="cursor num">' + (i + 1) + "</a>");
                pageTag.bind("click", { page: i }, callback);
            }
            appendEle.append(pageTag);
        }

        if (end < totPageCnt) {
            var endImg = $('<a title="다음" class="next cursor num">&gt;</a>');
            endImg.bind("click", { page: end + 1 }, callback);
            appendEle.append(endImg);
        }

        if (sellBoolean) {
            var endImg =
                '<a title="마지막으로" class "last cursor num">&gt;&gt;</a>';
            var endLastImg = $(endImg);

            if (curPage < totPageCnt) {
                endLastImg.bind("click", { page: totPageCnt }, callback);
            }

            if (end < totPageCnt) appendEle.append(endLastImg);
        }
    },
    movePage: function (event) {
        var curPage = event.data.page;
        $("#curPage").val(curPage);
        List.getConsultListApi();
    },
};

const Modal = {
    MODAL_SHOW_CLASS: "on",
    init: function () {
        const self = this;
        $(".modal .modal_close_btn").on("click", function () {
            $(".modal").removeClass(self.MODAL_SHOW_CLASS);
        });
    },
    show: function () {
        $(".modal").addClass(this.MODAL_SHOW_CLASS);
    },
    hide: function () {
        this.modalSelectInit();
        $(".modal").removeClass(this.MODAL_SHOW_CLASS);
    },
    modalSelectInit: function () {
        $(".modal select").each(function () {
            $(this).find("option:first").prop("selected", true);
        });
    },
};
