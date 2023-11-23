const ConsultStatusData = [
    { name: "접수", value: "REGISTRATION" },
    { name: "진행중", value: "READY" },
    { name: "완료", value: "COMPLETE" },
    { name: "취소/보류", value: "CANCEL" },
];

const OptionDataList = {
    //채널
    channel: [
        { seq: 1, text: "대원샵(해피톡포함)" },
        { seq: 2, text: "도토리숲" },
        { seq: 3, text: "네이버(종합)" },
        { seq: 4, text: "네이버(블리자드)" },
        { seq: 5, text: "엔엔마켓" },
        { seq: 6, text: "닌텐도제휴" },
        { seq: 7, text: "하비,지브리 제휴" },
    ],
    //인입유형
    inType: [
        { seq: 1, text: "유선" },
        { seq: 2, text: "비유선(채팅)" },
        { seq: 3, text: "비유선(1:1)" },
        { seq: 3, text: "비유선(상품문의)" },
        { seq: 3, text: "비유선(고객문의)" },
    ],
    //품목
    consultType: [
        {
            seq: 1,
            text: "회원",
            child: {
                level1: null,
                level2: [
                    { seq: 1, text: "정보문의" },
                    { seq: 2, text: "적립금/쿠폰" },
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
                            { seq: 2, text: "재고문의" },
                            { seq: 3, text: "프로모션" },
                        ],
                    },
                    {
                        seq: 2,
                        text: "결제",
                        child: [
                            { seq: 1, text: "결제방법" },
                            { seq: 2, text: "포인트/쿠폰" },
                        ],
                    },
                    {
                        seq: 3,
                        text: "주문",
                        child: [
                            { seq: 1, text: "주문서수정" },
                            { seq: 2, text: "배송지수정" },
                        ],
                    },
                    {
                        seq: 4,
                        text: "취소",
                        child: [
                            { seq: 1, text: "결제완료" },
                            { seq: 2, text: "상품준비중" },
                            { seq: 3, text: "배송중" },
                            { seq: 4, text: "품절" },
                        ],
                    },
                    {
                        seq: 5,
                        text: "교환",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "불량/파손" },
                            { seq: 3, text: "누락/오배송" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 6,
                        text: "반품",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "불량/파손" },
                            { seq: 3, text: "누락/오배송" },
                        ],
                    },
                    {
                        seq: 7,
                        text: "배송",
                        child: [
                            { seq: 1, text: "배송관련" },
                            { seq: 2, text: "부분발송" },
                            { seq: 3, text: "출고지연" },
                            { seq: 4, text: "택배사고(파손, 분실)" },
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
                            { seq: 2, text: "재고문의" },
                            { seq: 3, text: "프로모션" },
                        ],
                    },
                    {
                        seq: 2,
                        text: "결제",
                        child: [
                            { seq: 1, text: "결제방법" },
                            { seq: 2, text: "포인트/쿠폰" },
                        ],
                    },
                    {
                        seq: 3,
                        text: "주문",
                        child: [
                            { seq: 1, text: "주문서수정" },
                            { seq: 2, text: "배송지수정" },
                        ],
                    },
                    {
                        seq: 4,
                        text: "취소",
                        child: [
                            { seq: 1, text: "결제완료" },
                            { seq: 2, text: "상품준비중" },
                            { seq: 3, text: "배송중" },
                            { seq: 4, text: "품절" },
                        ],
                    },
                    {
                        seq: 5,
                        text: "교환",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "불량/파손" },
                            { seq: 3, text: "누락/오배송" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 6,
                        text: "반품",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "불량/파손" },
                            { seq: 3, text: "누락/오배송" },
                        ],
                    },
                    {
                        seq: 7,
                        text: "배송",
                        child: [
                            { seq: 1, text: "배송관련" },
                            { seq: 2, text: "부분발송" },
                            { seq: 3, text: "출고지연" },
                            { seq: 4, text: "택배사고(파손, 분실)" },
                        ],
                    },
                ],
            },
        },
        {
            seq: 4,
            text: "하비(완구,피규어,캐릭터)",
            child: {
                level1: [
                    {
                        seq: 1,
                        text: "상품",
                        child: [
                            { seq: 1, text: "상품문의" },
                            { seq: 2, text: "재고문의" },
                            { seq: 3, text: "프로모션" },
                        ],
                    },
                    {
                        seq: 2,
                        text: "결제",
                        child: [
                            { seq: 1, text: "결제방법" },
                            { seq: 2, text: "포인트/쿠폰" },
                        ],
                    },
                    {
                        seq: 3,
                        text: "주문",
                        child: [
                            { seq: 1, text: "주문서수정" },
                            { seq: 2, text: "배송지수정" },
                        ],
                    },
                    {
                        seq: 4,
                        text: "취소",
                        child: [
                            { seq: 1, text: "결제완료" },
                            { seq: 2, text: "상품준비중" },
                            { seq: 3, text: "배송중" },
                            { seq: 4, text: "품절" },
                        ],
                    },
                    {
                        seq: 5,
                        text: "교환",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "불량/파손" },
                            { seq: 3, text: "누락/오배송" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 6,
                        text: "반품",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "불량/파손" },
                            { seq: 3, text: "누락/오배송" },
                        ],
                    },
                    {
                        seq: 7,
                        text: "배송",
                        child: [
                            { seq: 1, text: "배송관련" },
                            { seq: 2, text: "부분발송" },
                            { seq: 3, text: "출고지연" },
                            { seq: 4, text: "택배사고(파손, 분실)" },
                        ],
                    },
                ],
            },
        },
        {
            seq: 5,
            text: "카드(TCG,유희왕,뱅가드)",
            child: {
                level1: [
                    {
                        seq: 1,
                        text: "상품",
                        child: [
                            { seq: 1, text: "상품문의" },
                            { seq: 2, text: "재고문의" },
                            { seq: 3, text: "프로모션" },
                        ],
                    },
                    {
                        seq: 2,

                        text: "결제",
                        child: [
                            { seq: 1, text: "결제방법" },
                            { seq: 2, text: "포인트/쿠폰" },
                        ],
                    },
                    {
                        seq: 3,
                        text: "주문",
                        child: [
                            { seq: 1, text: "주문서수정" },
                            { seq: 2, text: "배송지수정" },
                        ],
                    },
                    {
                        seq: 4,
                        text: "취소",
                        child: [
                            { seq: 1, text: "결제완료" },
                            { seq: 2, text: "상품준비중" },
                            { seq: 3, text: "배송중" },
                            { seq: 4, text: "품절" },
                        ],
                    },
                    {
                        seq: 5,
                        text: "교환",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "불량/파손" },
                            { seq: 3, text: "누락/오배송" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 6,
                        text: "반품",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "불량/파손" },
                            { seq: 3, text: "누락/오배송" },
                        ],
                    },
                    {
                        seq: 7,
                        text: "배송",
                        child: [
                            { seq: 1, text: "배송관련" },
                            { seq: 2, text: "부분발송" },
                            { seq: 3, text: "출고지연" },
                            { seq: 4, text: "택배사고(파손, 분실)" },
                        ],
                    },
                ],
            },
        },
        {
            seq: 6,
            text: "머천다이징(네이버스토어 유입)",
            child: {
                level1: [
                    {
                        seq: 1,
                        text: "상품",
                        child: [
                            { seq: 1, text: "상품문의" },
                            { seq: 2, text: "재고문의" },
                            { seq: 3, text: "프로모션" },
                        ],
                    },
                    {
                        seq: 2,
                        text: "결제",
                        child: [
                            { seq: 1, text: "결제방법" },
                            { seq: 2, text: "포인트/쿠폰" },
                        ],
                    },
                    {
                        seq: 3,
                        text: "주문",
                        child: [
                            { seq: 1, text: "주문서수정" },
                            { seq: 2, text: "배송지수정" },
                        ],
                    },
                    {
                        seq: 4,
                        text: "취소",
                        child: [
                            { seq: 1, text: "결제완료" },
                            { seq: 2, text: "상품준비중" },
                            { seq: 3, text: "배송중" },
                            { seq: 4, text: "품절" },
                        ],
                    },
                    {
                        seq: 5,
                        text: "교환",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "불량/파손" },
                            { seq: 3, text: "누락/오배송" },
                            { seq: 4, text: "기타" },
                        ],
                    },
                    {
                        seq: 6,
                        text: "반품",
                        child: [
                            { seq: 1, text: "고객변심" },
                            { seq: 2, text: "불량/파손" },
                            { seq: 3, text: "누락/오배송" },
                        ],
                    },
                    {
                        seq: 7,
                        text: "배송",
                        child: [
                            { seq: 1, text: "배송관련" },
                            { seq: 2, text: "부분발송" },
                            { seq: 3, text: "출고지연" },
                            { seq: 4, text: "택배사고(파손, 분실)" },
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
                    { seq: 1, text: "관련없음" },
                    { seq: 2, text: "마케팅, 입점 문의" },
                    { seq: 3, text: "대원샵" },
                    { seq: 4, text: "도토리숲" },
                    { seq: 5, text: "매장안내" },
                    { seq: 6, text: "브랜드스토어" },
                    { seq: 7, text: "엔엔마켓" },
                    { seq: 8, text: "제휴몰" },
                    { seq: 9, text: "기타" },
                ],
            },
        },
    ],
};
