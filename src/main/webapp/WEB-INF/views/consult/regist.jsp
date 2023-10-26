<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/head.jsp" %>
<!-- 개별 script -->
<script src="/resources/js/regist.js?v=20231026"></script>
<main class="list_page">
     <%@ include file="/WEB-INF/views/common/navbar.jsp" %>
     <form id="consultForm">
		<input type="hidden" id="id" name="id">
	    <section class="container">
	        <div class="page_title_area">
	            <h1 class="page_title">상담입력</h1>
	            <div>
	                <button type="button" id="goToListBtn">목록</button>
	                <button
	                    type="button"
	                    id="saveConsultBtn"
	                    class="active_btn"
	                >
	                    저장
	                </button>
	                <button
	                    type="button"
	                    id="deleteConsultBtn"
	                    class="active_btn"
	                >
	                    삭제
	                </button>
	            </div>
	        </div>
	        <section>
	            <div class="basic_container">
	                <h3 class="page_sub_title">고객정보</h3>
	                <table class="wide_table">
	                    <caption>
	                        고객 정보 입력 테이블
	                    </caption>
	                    <colgroup>
	                        <col width="10%" />
	                        <col width="*" />
	                        <col width="10%" />
	                        <col width="*" />
	                        <col width="10%" />
	                        <col width="*" />
	                    </colgroup>
	                    <tbody>
	                        <tr>
	                            <th>고객명</th>
	                            <td>
	                                <input
	                                    type="text"
	                                    id="name"
	                                    name="name"
										placeholder="고객명을 입력하세요"
	                                />
	                            </td>
	                            <th>연락처</th>
	                            <td>
	                                <input
	                                    type="text"
	                                    id="phone"
	                                    name="phone"
										maxlength="11"
										placeholder="연락처를 입력하세요" 
	                                />
	                            </td>
	                            <th>주문번호</th>
	                            <td>
	                                <input
	                                    type="text"
	                                    id="orderNo"
	                                    name="orderNo"
										placeholder="주문번호를 입력하세요" 
	                                />
	                            </td>
	                        </tr>
	                    </tbody>
	                </table>
	            </div>
	            <div class="basic_container">
	                <h3 class="page_sub_title">상담정보</h3>
	                <table class="wide_table">
	                    <caption>
	                        상담 정보 입력 테이블
	                    </caption>
	                    <colgroup>
	                        <col width="10%" />
	                        <col width="*" />
	                        <col width="10%" />
	                        <col width="*" />
	                        <col width="10%" />
	                        <col width="*" />
	                    </colgroup>
	                    <tbody>
	                        <tr>
	                            <th>채널</th>
	                            <td>
	                                <div class="input_cont">
	                                    <select id="channel" name="channel" required>
	                                        <option
	                                            value=""
	                                            selected
	                                            disabled
	                                        >
	                                            채널
	                                        </option>
	                                    </select>
	                                </div>
	                            </td>
	                            <th>인입유형</th>
	                            <td>
	                                <div class="input_cont">
	                                    <select id="inType" name="inType" required>
	                                        <option
	                                            value=""
	                                            selected
	                                            disabled
	                                        >
	                                            인입유형
	                                        </option>
	                                    </select>
	                                </div>
	                            </td>
	                        </tr>
	                        <tr>
	                            <th>상담유형</th>
	                            <td colspan="3">
	                                <div class="input_cont">
	                                    <select id="consultType" name="consultType" required>
	                                        <option
	                                            value=""
	                                            selected
	                                            disabled
	                                        >
	                                            품목
	                                        </option>
	                                    </select>
	                                    <select required id="level1" name="level1">
	                                        <option
	                                            value=""
	                                            selected
	                                            disabled
	                                        >
	                                            대분류
	                                        </option>
	                                    </select>
	                                    <select required id="level2" name="level2">
	                                        <option
	                                            value=""
	                                            selected
	                                            disabled
	                                        >
	                                            중분류
	                                        </option>
	                                    </select>
	                                </div>
	                            </td>
	                        </tr>
	                        <tr>
	                            <th>상담이력</th>
	                            <td colspan="3">
	                                <textarea
	                                    id="content"
	                                    name="content"
	                                ></textarea>
	                            </td>
	                        </tr>
	                        <tr>
	                            <th>상담일자</th>
	                            <td colspan="3">
	                                <div
	                                    class="input_cont datepicker_item"
	                                >
	                                    <input
	                                        type="text"
	                                        id="consultDate"
	                                        name="consultDate"
	                                    />
	                                </div>
	                            </td>
	                        </tr>
	                        <tr>
	                            <th>접수부서</th>
	                            <td>
	                                <div class="input_cont">
	                                    <input
	                                        type="text"
	                                        id="staffDept"
											readonly
	                                    />
	                                </div>
	                            </td>
	                            <th>접수상담사</th>
	                            <td>
	                                <div class="input_cont">
	                                    <input
	                                        type="text"
	                                        id="staffName"
											readonly
	                                    />
	                                </div>
	                            </td>
	                        </tr>
	                    </tbody>
	                </table>
	            </div>
	        </section>
	    </section>
    </form>
</main>
<script type="text/javascript">

   $(document).ready(function () {
     	Regist.init();
   });
	
</script>
</body>
</html>