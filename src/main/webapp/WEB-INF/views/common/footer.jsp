<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

			<footer class="footer">
				<!-- <section class="footer__action">
					<a href="#" class="button--ghostgray">매장찾기</a>
					<a href="#" class="button--ghostgray">바디프랜드 홈페이지</a>
				</section> -->
				<section class="footer__law">
					<a href="/company/termsOfService">이용약관</a>
					<a href="/company/privacy">개인정보취급방침</a>
					<a id="operatorsInformation">사업자정보확인</a>
					<!-- <i class="footer--toggle"></i> -->
				</section>
				<section class="footer__address">
					<address>
						<span>(주)바디프랜드</span>
						주소 : 서울특별시 강남구 양재천로 163 바디프랜드 <br>
						도곡타워  대표이사 : 박상현<br>
						사업자등록번호 : 106-86-49737<br>
						통신판매업신고번호 : 제 강남 15396<br>
						개인정보책임자 : 홍성진<br>
						전자메일주소 : customer@bodyfriend.co.kr
					</address>
				</section>
				<section class="footer__copyright">
					<p>Copyright 2018. BODYFRIEND, Inc. All Rights Reserved.</p>
				</section>
			</footer>
		</div>
		<div class="global-loading" style="display:none;">
		<!-- <div class="global-loading"> -->
            <img src="/resources/img/class/icon-loading.gif" alt="" class="img-responsive">
        </div>
	</body>
</html>

	<script type="text/javascript">
		$(window).bind("pageshow", function(event) {
			$("#operatorsInformation").unbind("click").bind("click", function() {
				window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no=&apv_perm_no=2007322012730215396", "_blank");  
			});
		});
	</script>