<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index1.aspx.cs" Inherits="WebStudy.index1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>test</title>
    <script src="./data_files/echarts.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="./data_files/jquery.js" type="text/javascript" charset="utf-8"></script>
	<script src="./data_files/lineandbar.js" type="text/javascript" charset="utf-8"></script>
    <script src="./data_files/XYY.js" type="text/javascript" charset="utf-8"></script>
    <link rel="stylesheet" type="text/css" href="./data_files/data.css" />
</head>

<body>
     <div class="head">
			<h1>数据管理平台</h1>      
	</div>
	<div class="mainbox1">
		<ul>
            <li>
                  <div id="xyy" style="width:90%;height: 55%;">
			          <!--柱形图+折线图双坐标轴-->
		          </div>
                 
            </li>
            <li>
                  <div id="lineandbar" style="width: 80%;height: 45%;">
			          <!--柱形图+折线图-->
		          </div>
            </li>
		</ul>
	</div>
    <div class="bottom"><span><a href="./index.aspx">首页</a></span></div>
</body>
</html>
