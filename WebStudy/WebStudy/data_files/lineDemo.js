$(function(){
    lineChart();
    number();
	function lineChart(){
		var a=echarts.init(document.getElementById("line"));
		var option={
	
			 tooltip:{
			 	show:true,//是否显示提示框组件，包括提示框浮层和 axisPointer。
			 	trigger:'axis',//触发类型。'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none'什么都不触发
			 	triggerOn:'mousemove',//提示框触发的条件可选：'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发，用户可以通过 action.tooltip.showTip 和 action.tooltip.hideTip 来手动触发和隐藏。也可以通过 axisPointer.handle 来触发或隐藏。
			 	formatter:"{a}数{b}:</br>{c}%",
			 	backgroundColor:'rgba(50,50,50,0.7)',//提示框浮层的背景颜色。
			 	borderColor:'#333',//提示框浮层的边框颜色
			 	borderWidth:1,//提示框浮层的边框宽
			 	padding:5,//提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
				axisPointer:{// 坐标轴指示器，坐标轴触发有效
					type:'line' ,// 默认为直线，可选为：'line' | 'shadow'
					
				}
			 },
			 color:['rgba(176,226,255,0.8)'],
			 legend:{
			 	type:'plain',//图例的类型。可选值：'plain'：普通图例。缺省就是普通图例。'scroll'：可滚动翻页的图例。当图例数量较多时可以使用,选择这一项时需要单独设置一些配置。
			 	show:true,//显示图例
				textStyle:{
				color:'#dfe7ee'},
			 	right:'40%',//图例组件离容器左侧的距离。
			 	top:0,//图例组件离容器上侧的距离。
			 	width:'auto',//图例组件的宽度。默认自适应。
			 	height:'auto',//图例组件的高度。默认自适应。
			 	orient:'horizontal',//图例列表的布局朝向。
			 	align:'auto',//图例标记和文本的对齐。默认自动，根据组件的位置和 orient 决定，当组件的 left 值为 'right' 以及纵向布局（orient 为 'vertical'）的时候为右对齐，即为 'right'。
			 	padding:5,//图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
			 	itemGap:10,//图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
			 	selectedMode:true,//图例选择的模式，点击图例可以自动显示图中对应的部分,控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。
			 	//icon:'none',//图例项的 icon。标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
			 	data:['设备']
			 },
			 grid:{//坐标轴位置
			 				 left:30,
			 				 bottom:30,
			 				 top:30,
			 				 show:false,
			 				 
			 				  
			 },
			 xAxis: {
				    name:'设备数',
			        type: 'category',
					axisLabel:{//坐标轴上项目颜色
						color:'rgba(223,231,238,0.7)',
						
					},
					axisLine:{
						lineStyle:{
							color:'rgba(223,231,238,0.7)'
						}
					},
			        data: []//1, 7, 13, 19, 25, 31, 37
			    },
			yAxis: {
					name:'利用率',
					axisLine:{
						lineStyle:{
							color:'rgba(223,231,238,0.7)',
							
						}
					},
					splitLine: {//分隔线颜色
					    lineStyle: {
					        // 使用深浅的间隔色
					        color: ['rgba(247,247,247,0.3)'],
							width:0.5,
					    }
					},
			        type: 'value'
			    },
			series: [
			       {
					  data: [],//80,70,56,80,75,90,70
			          type: 'line',
					  smooth:false,
					  name:'设备', 
					  areaStyle: {
					  	normal: {
					  		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					  			offset: 0,
					  			color: "rgba(32, 174, 189, 76)"
					  		}, {
					  			offset: 1,
					  			color: "rgba(69, 135, 141, 0)"
					  		}], false),
					  		shadowColor: "rgba(23, 29, 22, 25)",
					  		shadowBlur: 10
					  	}
					  },
				   } 			        				     
				   ]
		};
                 var xdata = [];
		         var ydata = [];
		//setInterval(function () {
		    $.ajax({
		        url: "index.aspx/lineData",
		        async: true,
		        dataType: "json",
		        contentType: "application/json;charest=utf-8",
		        type: "post",
		        success: function (data) {
		            if(data)
		            {
		               // console.log(data);
		                $.each(data, function (i, d)
		                {
		                    for(var a=0;a<d.length/2;a++)
		                    {
		                        xdata.push(data.d[a]);
		                        //console.log(xdata);
                                
		                    }
		                    for(var b=d.length/2;b<d.length;b++)
		                    {
		                        ydata.push(data.d[b]);
		                       // console.log(ydata);
		                       
		                    }

		                });
		                
		                //console.log(xdata);
		               // console.log(ydata);
		                a.setOption({
		                    xAxis: {
                                data:xdata
		                    },
		                    series: [{

                                data:ydata
		                    }]
		                });
		            }
		        },
		        error: function (errorMsg) {
		            alert("请求数据失败！");
		        }
		    });
		//}, 500);
		a.setOption(option);
		window.addEventListener("resize",function(){
			a.resize();
		})	
	}
	function number() {//设备总数
	    //setInterval(function () {
	    var item = "";
	    $.ajax({
	        url: "index.aspx/sum",
	        type: "post",
	        dataType: "json",
	        contentType: "application/json;charest=utf-8",
	        async: true,
	        success: function (data) {
	            if(data)
	            {
	                item = data.d;
	                $("#number1").append(item);
                 }
	        },
	        error: function (errorMsg) {
	            alert("请求数据失败！");
	        }
	    });
	  //  }, 500);
	}
});