<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="WebStudy.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
   <title>首页</title>
		<script src="./data_files/echarts.min.js" type="text/javascript" charset="UTF-8"></script>
		<script src="./data_files/jquery.js" type="text/javascript" charset="UTF-8"></script>
		<script src="./data_files/gaugeDemo.js" type="text/javascript" charset="utf-8"></script>
		<script src="./data_files/pieDemo.js" type="text/javascript" charset="utf-8"></script>
		<script src="./data_files/barDemo.js" type="text/javascript" charset="utf-8"></script>
		<script src="./data_files/lineDemo.js" type="text/javascript" charset="utf-8"></script>
        <script src="./data_files/tableDemo.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="./data_files/data.css" />
</head>
<body>
    <div class="head">
			<h1>数据管理平台</h1>
       
		</div>
		<div class="mainbox">
			<ul>
				<li>
					<div class="box">
						<div class="box_left">
							<div class="title1" id="title1">预警总数</div>
							<div id="number"></div>
						</div>
						  <div class="box_right">
						  	<div class="title2">高级预警占比</div>
							<div id="pie2" style="width: 100%;height: 160px;"></div>
						  </div>
						  
					</div>
					
					<div class="box">
						<div class="title">产品消耗统计</div>
						<div id="bar1" style="width: 100%;height: 160px;"></div>
					</div>
					
					<div class="box">
						<div class="title">产品质量统计</div>
						<div id="bar2" style="width: 100%;height: 160px;"></div>
					</div>
					
				</li>
				<li>
					<div class="box1">
						
					</div>
					
					<div class="box">
						<div class="title">
							设备利用率走势图
						<div class="title_right">设备总数：<span id="number1"></span></div>
						</div>
						<div id="line" style="width: 100%;height: 160px;"></div>
					</div>
					
				</li>
			    <li>
					<div class="box">
						<div class="title">预警数量</div>
						<div id="gauge" style="width: 100%;height:170px;"></div>
					</div>
					
					<div class="box">
						<div class="title">预警等级占比</div>
						<div id="pie1" style="width: 100%;height: 160px;"></div>
					</div>
					
					<div class="box">
						<div class="title">安全预警信息</div>
						<table id="table1">
							<thead>
								<tr>
									<th>预警级别</th>
									<th>预警内容</th>
									<th>预警时间</th>
									<th>预警状态</th>
								</tr>
							</thead>
							<tbody id="tbody_data">
								
							</tbody>
						</table>
					</div>
					
				</li>
			</ul>
			
		</div>
    <div class="bottom"><span><a href="./index1.aspx">下一页</a></span></div>
</body>
</html>
