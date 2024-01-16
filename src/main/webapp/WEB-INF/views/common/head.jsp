<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>대원샵</title>
        <link rel="stylesheet" href="/resources/css/reset.css?v=20231023" />
        <link rel="stylesheet" href="/resources/css/font.css?v=20231023" />
        <link rel="stylesheet" href="/resources/css/style.min.css?v=20231102" />
        <script
            type="text/javascript"
            src="/resources/js/lib/jquery-3.6.1.min.js"
        ></script>
        <script
            type="text/javascript"
            src="/resources/js/lib/jquery-ui.1.31.2.min.js"
        ></script>
        <script
            type="text/javascript"
            src="/resources/js/lib/datepicker_ko.js"
        ></script>

        <script
            type="text/javascript"
            src="/resources/js/data.js?v=202401150414"
        ></script>
        <script
            type="text/javascript"
            src="/resources/js/script.js?v=20240116"
        ></script>
    </head>
    <body>
        <input type="hidden" name="tokenType" id="tokenType" />
        <input type="hidden" name="authCode" id="authCode" />
        <input type="hidden" name="loginId" id="loginId" />
        <input type="hidden" name="isAdmin" id="isAdmin" />
        <div id="loading" class="hide">
            <div class="loading_bg"></div>
            <div class="loading_spinner"></div>
        </div>
    </body>
</html>
