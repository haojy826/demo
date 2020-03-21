$(function () {
    tableChart();
    showSum();
	function tableChart(){
		//var a=document.getElementById("tbody_data");
		var item="";
		//setInterval(function () {		    
			$.ajax({
			    url: "index.aspx/tableData",
			    type: "post",
			    dataType: "json",
			    contentType: "application/json;charest=utf-8",
			    success: function (data) {//data是后台传回的array一维数组，数组里面是整个数据表的数据
			        if(data)
			        {
			            
			            $("#table1 #tbody_data tr").remove();//将tbody中所有的行都删除，现在表空了
			            $.each(data, function (i,d) {//遍历处理data，可以是数组、DOM、json等，取决于直接给定或者ajax返回的类型;i是当前的位置，d是当前位置上的值
			                for (var j = 0; j < d.length / 4; j++)
			                {
			                    
			                    item = "<tr><td>" + data.d[0 + j * 4] + "</td><td>" + data.d[1 + j * 4] + "</td><td>" + data.d[2 + j * 4] + "</td><td>" + data.d[3 + j * 4]+ "</td></tr>";
			                    $("#table1").append(item);
			                }
			              
			            });
			        }
			    },
			    error: function (errorMsg) {
			        alert("图表请求数据失败！");
			    }
			});
		//}, 2000);
		
	}
	function showSum() {
	   // var b = document.getElementById("number");
	    var item1="";
	   // setInterval(function () {	        
	        $.ajax({
	            url: " index.aspx/gaugeData",
	            type: "post",
	            async: true,
	            dataType: "json",
	            contentType: "application/json;charest=utf-8",
	            success: function (data) {
	                if(data)
	                {
	                   
	                    item1 =data.d;
	                    $("#number").html("");
	                    $("#number").append(item1);//重新写新的数据	                      
	                }
	            },
	            error: function (errorMsg) {
	                alert("请求数据失败！");
	            }
	        });
	   // }, 500);
	   
	}
	
});