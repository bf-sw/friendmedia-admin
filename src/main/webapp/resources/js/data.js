const OptionDataList = {
    depth1: {
        //채널
        channel: [
            { seq: 0, value: 0, text: "채널 선택" },
            { seq: 1, value: "daewonshop", text: "대원샵 (해피톡포함)" },
            { seq: 2, value: "dotorisoop", text: "도토리숲" },
            { seq: 3, value: "naver", text: "네이버" },
            { seq: 4, value: "nnmarket", text: "엔엔마켓" },
            { seq: 5, value: "nintendo", text: "닌텐도제휴" },
            { seq: 6, value: "harbi_zibri", text: "하비,지브리 제휴" },
        ],
        //인입유형
        inType: [
            { seq: 0, value: 0, text: "인입유형 선택" },
            { seq: 1, value: "phone", text: "유선" },
            { seq: 2, value: "chat", text: "비유선(채팅)" },
            { seq: 3, value: "board", text: "비유선(게시판)" },
        ],
        //품목
        consultType: [
            { seq: 0, value: 0, text: "품목 선택" },
            { seq: 1, value: "member", text: "회원", level1: null },
            { seq: 2, value: "nintendo", text: "닌텐도" },
            { seq: 3, value: "zibri", text: "지브리" },
            { seq: 4, value: "harbi", text: "하비(완구,피규어,캐릭터)" },
            { seq: 5, value: "card", text: "카드(TCG,유희왕,뱅가드)" },
            {
                seq: 6,
                value: "merchandising",
                text: "머천다이징(네이버스토어 유입)",
            },
            { seq: 7, value: "etc", text: "기타", level1: null },
        ],
    },
    depth2: {
        level1: [
            { seq: 0, value: 0, text: "대분류 선택" },
            { seq: 1, value: "product", text: "상품" },
            { seq: 2, value: "payment", text: "결제" },
            { seq: 3, value: "order", text: "주문" },
            { seq: 4, value: "cancel", text: "취소" },
            { seq: 5, value: "exchange", text: "교환" },
            { seq: 6, value: "return", text: "반품" },
            { seq: 7, value: "delivery", text: "배송" },
            { seq: 8, value: "etc", text: "기타" },
        ],
    },
    depth3: {
        level2: {
            //lev 1 null
            member: [
                { seq: 0, value: 0, text: "중분류 선택" },
                { seq: 1, value: "", text: "정보문의" },
                { seq: 2, value: "", text: "적립금/쿠폰" },
                { seq: 3, value: "", text: "기타" },
            ],
            etc: [
                { seq: 0, value: 0, text: "중분류 선택" },
                { seq: 1, value: "", text: "관련없음" },
                { seq: 2, value: "", text: "대원샵" },
                { seq: 3, value: "", text: "도토리숲" },
                { seq: 4, value: "", text: "매장안내" },
                { seq: 5, value: "", text: "브랜드스토어" },
                { seq: 6, value: "", text: "엔엔마켓" },
                { seq: 7, value: "", text: "제휴몰" },
                { seq: 8, value: "", text: "기타" },
            ],
        },
        product: [
            { seq: 0, value: 0, text: "중분류 선택" },
            { seq: 1, value: "product", text: "상품문의" },
            { seq: 2, value: "stock", text: "재고문의" },
            { seq: 3, value: "promotion", text: "프로모션" },
        ],
        payment: [
            { seq: 0, value: 0, text: "중분류 선택" },
            { seq: 1, value: "payment_method", text: "결제방법" },
            { seq: 2, value: "", text: "포인트/쿠폰" },
        ],
        order: [
            { seq: 0, value: 0, text: "중분류 선택" },
            { seq: 1, value: "", text: "주문서수정" },
            { seq: 2, value: "", text: "배송지수정" },
        ],
        cancel: [
            { seq: 0, value: 0, text: "중분류 선택" },
            { seq: 1, value: "", text: "결제완료" },
            { seq: 2, value: "", text: "상품준비중" },
            { seq: 3, value: "", text: "배송중" },
            { seq: 4, value: "", text: "품절" },
        ],
        exchange: [
            { seq: 0, value: 0, text: "중분류 선택" },
            { seq: 1, value: "", text: "고객변심" },
            { seq: 2, value: "", text: "불량/파손" },
            { seq: 3, value: "", text: "누락/오배송" },
            { seq: 4, value: "", text: "기타" },
        ],
        return: [
            { seq: 0, value: 0, text: "중분류 선택" },
            { seq: 1, value: "", text: "고객변심" },
            { seq: 2, value: "", text: "불량/파손" },
            { seq: 3, value: "", text: "누락/오배송" },
        ],
        delivery: [
            { seq: 0, value: 0, text: "중분류 선택" },
            { seq: 1, value: "", text: "배송관련" },
            { seq: 2, value: "", text: "부분발송" },
            { seq: 3, value: "", text: "출고지연" },
            { seq: 4, value: "", text: "택배사고(파손, 분실)" },
        ],
        etc: [
            { seq: 0, value: 0, text: "중분류 선택" },
            { seq: 1, value: "", text: "마케팅, 입점 문의" },
        ],
    },
};
