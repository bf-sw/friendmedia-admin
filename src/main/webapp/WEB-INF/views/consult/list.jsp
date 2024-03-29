<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/head.jsp" %>
<!-- 개별 script -->
<script src="/resources/js/list.js?v=20240116"></script>
<main class="list_page">
     <%@ include file="/WEB-INF/views/common/navbar.jsp" %>
     <section class="container">
        <input type="hidden" name="curPage" id="curPage" value="0" /> 
        <input type="hidden" name="pageSize" id="pageSize" value="10" />
         <div class="page_title_area">
             <h1 class="page_title">상담이력</h1>
             <button
                 type="button"
                 id="writeNewConsultBtn"
                 class="active_btn"
             >
                 등록
             </button>
         </div>
         <section class="search_category">
             <table class="wide_table">
                 <caption>
                     상담 이력 검색 카테고리 선택 테이블
                 </caption>
                 <colgroup>
                     <col width="10%" />
                     <col width="15%" />
                     <col width="10%" />
                     <col width="15%" />
                     <col width="10%" />
                     <col width="15%" />
                     <col width="10%" />
                     <col width="15%" />
                 </colgroup>
                 <tbody>
                     <tr>
                         <th>상담일자</th>
                         <td colspan="3">
                             <div>
                                 <div class="input_cont datepicker_item">
                                     <input
                                         type="text"
                                         id="startDate"
                                         name="startDate"
                                     />
                                 </div>
                                 <span>~</span>
                                 <div class="input_cont datepicker_item">
                                     <input
                                         type="text"
                                         id="endDate"
                                         name="endDate"
                                     />
                                 </div>
                                 <label class="basic_checkbox">
                                     <input
                                         type="checkbox"
                                         name="totalSearch"
                                         id="totalSearch"
                                         checked
                                     />
                                     <span class="on"></span>
                                     <span>날짜무시</span>
                                 </label>
                             </div>
                         </td>
                         <th>민원여부</th>
                         <td>
                            <div class="input_cont">
                                <select id="complaint" name="complaint" required>
                                    <option value="">
                                        전체
                                    </option>
                                    <option value=true>
                                        O
                                    </option>
                                    <option value=false>
                                        X
                                    </option>
                                </select>
                            </div>
                         </td>
                         <th>상담결과</th>
                         <td>
                            <div class="input_cont">
                                <select id="consultStatus" name="consultStatus" required>
                                    <option value="">
                                        전체
                                    </option>
                                    <option value="REGISTRATION">
                                        접수
                                    </option>
                                    <option value="READY">
                                        진행중
                                    </option>
                                    <option value="COMPLETE">
                                        완료
                                    </option>
                                    <option value="CANCEL">
                                        취소/보류
                                    </option>
                                </select>
                            </div>
                         </td>
                     </tr>
                     <tr>
                         <th>고객명</th>
                         <td>
                             <input
                                 type="text"
                                 id="name"
                                 name="name"
                             />
                         </td>
                         <th>연락처</th>
                         <td>
                             <input
                                 type="text"
                                 id="phone"
                                 name="phone"
                             />
                         </td>
                         <th>주문번호</th>
                         <td>
                             <input
                                 type="text"
                                 id="orderNo"
                                 name="orderNo"
                             />
                         </td>
                         <th>채널</th>
                         <td>
                             <div class="input_cont">
                                 <select id="channel" name="channel" required>
                                     <option value="" selected disabled>
                                         채널
                                     </option>
                                 </select>
                             </div>
                         </td>
                     </tr>
                     <tr>
                         <th>인입유형</th>
                         <td>
                             <div class="input_cont">
                                 <select id="inType" name="inType" required>
                                     <option value="" selected disabled>
                                         인입유형
                                     </option>
                                 </select>
                             </div>
                         </td>
                         <th>상담유형</th>
                         <td colspan="3">
                             <div class="input_cont">
                                 <select id="consultType" name="consultType" required>
                                     <option value="" selected disabled>
                                         대분류
                                     </option>
                                 </select>
                                 <select id="level1" name="level1" required>
                                     <option value="" selected disabled>
                                         중분류
                                     </option>
                                 </select>
                                 <select id="level2" name="level2" required>
                                     <option value="" selected disabled>
                                         소분류
                                     </option>
                                 </select>
                             </div>
                         </td>
                         <th>상담사명</th>
                         <td>
                             <input
                                 type="text"
                                 id="counselorNm"
                                 name="counselorNm"
                             />
                         </td>
                     </tr>
                 </tbody>
             </table>
             <div class="button_cont centered_btn">
                 <button type="button" id="searchParamInitBtn">
                     초기화
                 </button>
                 <button type="button" id="searchBtn" class="active_btn">
                     검색
                 </button>
             </div>
         </section>
         <section class="search_result">
             <div class="search_result_info">
                 <span
                     >검색결과(<em id="searchResultCount"></em>)</span
                 >
                 <div>
                     <button type="button" class="active_btn" id="modifyBtn">
                         수정
                     </button>
                     <button type="button" id="downloadExcelBtn">
                         엑셀다운로드
                     </button>
                 </div>
             </div>
             <div class="search_result_table">
                 <table class="basic_table" id="consultResultTable">
                     <caption>
                         상담 이력 검색 결과 테이블
                     </caption>
                     <colgroup>
                        <col width="1%" /> <!--체크박스-->
                        <col width="2.5%" /> <!--번호-->
                        <col width="2.5%" /> <!--민원-->
                        <col width="4%" /> <!--상담결과-->
                        <col width="6%" /> <!--고객명-->
                        <col width="8%" /> <!--연락처-->
                        <col width="8%" /> <!--주문번호-->
                        <col width="8%" /> <!--채널-->
                        <col width="8%" /> <!--인입유형-->
                        <col width="9%" /> <!--대분류-->
                        <col width="7%" /> <!--중분류-->
                        <col width="7%" /> <!--소분류-->
                        <col width="*" /> <!--상담이력-->
                        <col width="6%" /> <!--상담일자-->
                        <col width="4%" /> <!--상담사명-->
                        <col width="6%" /> <!--접수부서-->
                    </colgroup>
                     <thead>
                         <tr>
                             <th>
                                 <label
                                     class="basic_checkbox table_checkbox"
                                 >
                                     <input
                                         type="checkbox"
                                         id="totalSelect"
                                     />
                                     <span class="on"></span>
                                 </label>
                             </th>
                             <th>번호</th>
                             <th>민원</th>
                             <th>상담결과</th>
                             <th>고객명</th>
                             <th>연락처</th>
                             <th>주문번호</th>
                             <th>채널</th>
                             <th>인입유형</th>
                             <th>대분류</th>
                             <th>중분류</th>
                             <th>소분류</th>
                             <th>상담이력</th>
                             <th>상담일자</th>
                             <th>상담사명</th>
                             <th>접수부서</th>
                         </tr>
                     </thead>
                     <tbody></tbody>
                 </table>
             </div>
            <button type="button" class="active_btn" id="deleteMultiConsultBtn" style="margin-top: 10px;">
                삭제
            </button>
             <div class="paging"></div>
         </section>
     </section>
 </main>
 <div class="modal">
    <div class="modal_cont">
        <div class="modal_top">
            <button class="modal_close_btn">
                <img src="/resources/img/ico_close.png"/>
            </button>
        </div>
        <div class="modal_content">
            <h2>선택 수정 사항</h2>
            <table>
                <tbody>
                    <tr>
                        <td>상담결과</td>
                        <td>
                            <select id="modal_consultStatus" name="modal_consultStatus" required>
                                <option value="">
                                    전체
                                </option>
                                <option value="REGISTRATION">
                                    접수
                                </option>
                                <option value="READY">
                                    진행중
                                </option>
                                <option value="COMPLETE">
                                    완료
                                </option>
                                <option value="CANCEL">
                                    취소/보류
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>채널</td>
                        <td>
                            <select id="modal_channel" name="modal_channel" required>
                                <option value="" selected disabled>
                                    채널
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>인입유형</td>
                        <td>
                            <select id="modal_inType" name="modal_inType" required>
                                <option value="" selected disabled>
                                    인입유형
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>상담유형</td>
                        <td>
                            <select id="modal_consultType" name="modal_consultType" required>
                                <option value="" selected disabled>
                                    대분류
                                </option>
                            </select>
                            <br />
                            <select id="modal_level1" name="modal_level1" required>
                                <option value="" selected disabled>
                                    중분류
                                </option>
                            </select>
                            <br />
                            <select id="modal_level2" name="modal_level2" required>
                                <option value="" selected disabled>
                                    소분류
                                </option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal_btm">
            <button type="button" id="initModifyConsultBtn">초기화</button>
            <button type="button" class="active_btn" id="modifyConsultBtn">수정</button>
        </div>
    </div>
 </div>
<script type="text/javascript">

   $(document).ready(function () {
        Modal.init();
        List.init();
   });
	
</script>
</body>
</html>