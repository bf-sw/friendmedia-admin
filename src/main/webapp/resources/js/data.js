const ConsultStatusData = [
    { name: "접수", value: "REGISTRATION" },
    { name: "진행중", value: "READY" },
    { name: "완료", value: "COMPLETE" },
    { name: "취소/보류", value: "CANCEL" },
];

const OptionDataList = {
    //채널
    channel: [
        { seq: 1, text: "대원샵" },
        { seq: 2, text: "도토리숲" },
        { seq: 3, text: "엔엔마켓" },
        { seq: 4, text: "마블컬렉션" },
        { seq: 5, text: "네이버(대원미디어)" },
        { seq: 6, text: "네이버(블리자드)" },
        { seq: 7, text: "닌텐도제휴" },
        { seq: 8, text: "하비/지브리제휴" },
    ],
    //인입유형
    inType: [
        { seq: 1, text: "유선(IB)" },
        { seq: 2, text: "유선(OB)" },
        { seq: 3, text: "비유선(채팅)" },
        { seq: 4, text: "비유선(상품문의)" },
        { seq: 5, text: "비유선(1:1문의)" },
        { seq: 6, text: "비유선(고객문의)" },
    ],
    //대분류/중분류/소분류
    consultType: [
        {
            seq: 1,
            text: "회원",
            child: {
                level1: null,
                level2: [
                    { seq: 1, text: "정보문의" },
                    { seq: 2, text: "쿠폰/적립금" },
                    { seq: 3, text: "기타" },
                ],
            },
        },
        {
            seq: 2,
            text: "닌텐도",
            child: {
                level1: [
                    {
                        seq: 1,
                        text: "상품",
                        child: [
                            { seq: 1, text: "상품문의" },
                            { seq: 2, text: "프로모션" },
                            { seq: 3, text: "입고/재고" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 2,
                        text: "주문",
                        child: [
                            { seq: 1, text: "주문정보" },
                            { seq: 2, text: "결제문의" },
                            { seq: 3, text: "쿠폰/적립금" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 3,
                        text: "취소",
                        child: [
                            { seq: 1, text: "결제완료" },
                            { seq: 2, text: "상품(배송)준비중" },
                            { seq: 3, text: "배송지연" },
                            { seq: 4, text: "품절" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                    {
                        seq: 4,
                        text: "배송",
                        child: [
                            { seq: 1, text: "배송문의" },
                            { seq: 2, text: "선/부분발송" },
                            { seq: 3, text: "택배사고(파손, 분실)" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 5,
                        text: "교환",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "일정문의" },
                            { seq: 3, text: "불량/파손" },
                            { seq: 4, text: "누락/오배송" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                    {
                        seq: 6,
                        text: "반품",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "일정문의" },
                            { seq: 3, text: "불량/파손" },
                            { seq: 4, text: "누락/오배송" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                ],
            },
        },
        {
            seq: 3,
            text: "지브리",
            child: {
                level1: [
                    {
                        seq: 1,
                        text: "상품",
                        child: [
                            { seq: 1, text: "상품문의" },
                            { seq: 2, text: "프로모션" },
                            { seq: 3, text: "입고/재고" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 2,
                        text: "주문",
                        child: [
                            { seq: 1, text: "주문정보" },
                            { seq: 2, text: "결제문의" },
                            { seq: 3, text: "쿠폰/적립금" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 3,
                        text: "취소",
                        child: [
                            { seq: 1, text: "결제완료" },
                            { seq: 2, text: "상품(배송)준비중" },
                            { seq: 3, text: "배송지연" },
                            { seq: 4, text: "품절" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                    {
                        seq: 4,
                        text: "배송",
                        child: [
                            { seq: 1, text: "배송문의" },
                            { seq: 2, text: "선/부분발송" },
                            { seq: 3, text: "택배사고(파손, 분실)" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 5,
                        text: "교환",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "일정문의" },
                            { seq: 3, text: "불량/파손" },
                            { seq: 4, text: "누락/오배송" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                    {
                        seq: 6,
                        text: "반품",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "일정문의" },
                            { seq: 3, text: "불량/파손" },
                            { seq: 4, text: "누락/오배송" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                ],
            },
        },
        {
            seq: 4,
            text: "하비(캐릭터/피규어/완구)",
            child: {
                level1: [
                    {
                        seq: 1,
                        text: "상품",
                        child: [
                            { seq: 1, text: "상품문의" },
                            { seq: 2, text: "프로모션" },
                            { seq: 3, text: "입고/재고" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 2,
                        text: "주문",
                        child: [
                            { seq: 1, text: "주문정보" },
                            { seq: 2, text: "결제문의" },
                            { seq: 3, text: "쿠폰/적립금" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 3,
                        text: "취소",
                        child: [
                            { seq: 1, text: "결제완료" },
                            { seq: 2, text: "상품(배송)준비중" },
                            { seq: 3, text: "배송지연" },
                            { seq: 4, text: "품절" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                    {
                        seq: 4,
                        text: "배송",
                        child: [
                            { seq: 1, text: "배송문의" },
                            { seq: 2, text: "선/부분발송" },
                            { seq: 3, text: "택배사고(파손, 분실)" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 5,
                        text: "교환",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "일정문의" },
                            { seq: 3, text: "불량/파손" },
                            { seq: 4, text: "누락/오배송" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                    {
                        seq: 6,
                        text: "반품",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "일정문의" },
                            { seq: 3, text: "불량/파손" },
                            { seq: 4, text: "누락/오배송" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                ],
            },
        },
        {
            seq: 5,
            text: "카드(TCG/유희왕/뱅가드)",
            child: {
                level1: [
                    {
                        seq: 1,
                        text: "상품",
                        child: [
                            { seq: 1, text: "상품문의" },
                            { seq: 2, text: "프로모션" },
                            { seq: 3, text: "입고/재고" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 2,
                        text: "주문",
                        child: [
                            { seq: 1, text: "주문정보" },
                            { seq: 2, text: "결제문의" },
                            { seq: 3, text: "쿠폰/적립금" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 3,
                        text: "취소",
                        child: [
                            { seq: 1, text: "결제완료" },
                            { seq: 2, text: "상품(배송)준비중" },
                            { seq: 3, text: "배송지연" },
                            { seq: 4, text: "품절" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                    {
                        seq: 4,
                        text: "배송",
                        child: [
                            { seq: 1, text: "배송문의" },
                            { seq: 2, text: "선/부분발송" },
                            { seq: 3, text: "택배사고(파손, 분실)" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 5,
                        text: "교환",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "일정문의" },
                            { seq: 3, text: "불량/파손" },
                            { seq: 4, text: "누락/오배송" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                    {
                        seq: 6,
                        text: "반품",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "일정문의" },
                            { seq: 3, text: "불량/파손" },
                            { seq: 4, text: "누락/오배송" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                ],
            },
        },
        {
            seq: 6,
            text: "머천다이징(네이버스토어)",
            child: {
                level1: [
                    {
                        seq: 1,
                        text: "상품",
                        child: [
                            { seq: 1, text: "상품문의" },
                            { seq: 2, text: "프로모션" },
                            { seq: 3, text: "입고/재고" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 2,
                        text: "주문",
                        child: [
                            { seq: 1, text: "주문정보" },
                            { seq: 2, text: "결제문의" },
                            { seq: 3, text: "쿠폰/적립금" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 3,
                        text: "취소",
                        child: [
                            { seq: 1, text: "결제완료" },
                            { seq: 2, text: "상품(배송)준비중" },
                            { seq: 3, text: "배송지연" },
                            { seq: 4, text: "품절" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                    {
                        seq: 4,
                        text: "배송",
                        child: [
                            { seq: 1, text: "배송문의" },
                            { seq: 2, text: "선/부분발송" },
                            { seq: 3, text: "택배사고(파손, 분실)" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 5,
                        text: "교환",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "일정문의" },
                            { seq: 3, text: "불량/파손" },
                            { seq: 4, text: "누락/오배송" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                    {
                        seq: 6,
                        text: "반품",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "일정문의" },
                            { seq: 3, text: "불량/파손" },
                            { seq: 4, text: "누락/오배송" },
                            { seq: 5, text: "기타" },
                        ],
                    },
                ],
            },
        },
        {
            seq: 7,
            text: "기타",
            child: {
                level1: null,
                level2: [
                    { seq: 1, text: "입점/제휴/광고" },
                    { seq: 2, text: "매장문의" },
                    { seq: 3, text: "건의사항" },
                    { seq: 4, text: "오인입/관련없음" },
                    { seq: 5, text: "기타" },
                ],
            },
        },
    ],
};
