$(function(){
	barChart1();
    barChart2();
	//electric_chart();
	function barChart1(){
		var a=echarts.init(document.getElementById("bar1"));
		var option={
	         color:['rgba(255,193,37,0.8)','rgba(152,251,152,0.8)','rgba(100,149,237,0.8)'],
			 tooltip:{
			 	show:true,//是否显示提示框组件，包括提示框浮层和 axisPointer。
			 	trigger:'axis',//触发类型。'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none'什么都不触发
			 	triggerOn:'mousemove',//提示框触发的条件可选：'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发，用户可以通过 action.tooltip.showTip 和 action.tooltip.hideTip 来手动触发和隐藏。也可以通过 axisPointer.handle 来触发或隐藏。
			 	
			 	backgroundColor:'rgba(153,153,153,0.4)',//提示框浮层的背景颜色。
			 	borderColor:'rgba(153,153,153,0.6)',//提示框浮层的边框颜色
			 	borderWidth:1,//提示框浮层的边框宽
			 	padding:5,//提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
				axisPointer:{// 坐标轴指示器，坐标轴触发有效
					type:'shadow' ,// 默认为直线，可选为：'line' | 'shadow'
					
				}
			 },
			 legend:{
			 	type:'plain',//图例的类型。可选值：'plain'：普通图例。缺省就是普通图例。'scroll'：可滚动翻页的图例。当图例数量较多时可以使用,选择这一项时需要单独设置一些配置。
			 	show:true,//显示图例
			 	right:20,//图例组件离容器左侧的距离。
			 	top:0,//图例组件离容器上侧的距离。
			 	//width:2,//图例组件的宽度。默认自适应。
			 	//height:1,//图例组件的高度。默认自适应。
			 	orient:'horizontal',//图例列表的布局朝向。
			 	align:'auto',//图例标记和文本的对齐。默认自动，根据组件的位置和 orient 决定，当组件的 left 值为 'right' 以及纵向布局（orient 为 'vertical'）的时候为右对齐，即为 'right'。
			 	padding:5,//图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
			 	itemGap:10,//图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
			 	selectedMode:true,//图例选择的模式，点击图例可以自动显示图中对应的部分,控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。
			 	icon:'roundRect',//图例项的 icon。标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
			 	data:[{
					name:'物料',
					textStyle:{
					color:'#dfe7ee'}
				},{
					name:'能量',
					textStyle:{
					color:'#dfe7ee'}
				},{
					name:'费用',
					textStyle:{
					color:'#dfe7ee'}
				}
				]
			 },
			 grid:{//坐标轴位置
				 left:30,
				 bottom:30,
				 top:20,
				 show:true,
				 borderColor:'rgba(238,233,233,0.2)',
				 borderWidth:0.5,
				  
			 },
			
			 xAxis: {
				    name:'产品',
			        type: 'category',
					data: [],//'A', 'B', 'C', 'D', 'E', 'F', 'G'
					axisLabel:{//坐标轴上项目颜色
						color:'rgba(223,231,238,0.7)',
						
					},
					axisLine:{
						lineStyle:{
							color:'rgba(223,231,238,0.7)'
						}
					},
			        
			    },
			yAxis: {
					//name:'数量',
			        type:'value',
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
					}
			    },
			
			series: [
                 /*   {
			        data: [500,630,560,480,730,590,600],
			        type: 'bar',
					name:'物料'
			         },
				     {
					data: [620,400,496,590,550,390,420],
					type: 'bar',
					name:'能量'
				    },
					{
						data: [120,100,96,90,150,190,120],
						type: 'bar',
						name:'费用'}*/
				   ]
		};

		//setInterval(function () {
		$.ajax({
		    url: "index.aspx/barData1",
		    type: "post",
		    dataType: "json",
		    contentType: "application/json;charest=utf-8",
		    anscy: true,
		    success: function (data) {
		        if(data)
		        {
		            var xdata = [];
		            var y1data = [];
		            var y2data = [];
		            var y3data = [];
		            $.each(data, function (i, d) {
		                for(var j=0;j<d.length;j+=4)
		                {
		                    xdata.push(data.d[j]);
		                    y1data.push(data.d[j + 1]);
		                    y2data.push(data.d[j + 2]);
		                    y3data.push(data.d[j + 3]);
		                }
		            });
		            a.setOption({
		                xAxis: {
                            data:xdata
		                },
		                series: [
                  {
                      data: y1data,
			        type: 'bar',
					name:'物料'
			         },
				     {
				         data: y2data,
					type: 'bar',
					name:'能量'
				    },
					{
						data: y3data,
						type: 'bar',
						name:'费用'}
		                ]
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

    ////电流波动曲线
	function electric_chart() {
	    var myChart = echarts.init(document.getElementById('bar2'));
	    //option = null;
	    option = {
	        tooltip: {
	            show: true,//是否显示提示框组件，包括提示框浮层和 axisPointer。
	            trigger: 'axis',//触发类型。'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none'什么都不触发
	            triggerOn: 'mousemove',//提示框触发的条件可选：'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发，用户可以通过 action.tooltip.showTip 和 action.tooltip.hideTip 来手动触发和隐藏。也可以通过 axisPointer.handle 来触发或隐藏。			 	
	            backgroundColor: 'rgba(153,153,153,0.4)',//提示框浮层的背景颜色。
	            borderColor: 'rgba(153,153,153,0.6)',//提示框浮层的边框颜色
	            borderWidth: 1,//提示框浮层的边框宽
	            padding: 5,//提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
	            axisPointer: {// 坐标轴指示器，坐标轴触发有效
	                type: 'shadow',// 默认为直线，可选为：'line' | 'shadow'					
	            }
	        },

	        grid: {//坐标轴位置
	            left: 50,
	            bottom: 30,
	            top: 20,
	            show: false,


	        },
	        yAxis: {
	            show: true,
	            type: 'category',
	            data: [],//'产品A', '产品B', '产品C', '产品D', '产品E', '产品F'
	            axisLabel: {//坐标轴上项目颜色
	                color: 'rgba(223,231,238,0.7)',

	            },
	            axisLine: {
	                lineStyle: {
	                    color: 'rgba(223,231,238,0)'
	                }
	            },
	        },
	        xAxis: {
	            show: false,
	            type: 'value',
	            splitLine: {//分隔线颜色
	                lineStyle: {
	                    // 使用深浅的间隔色
	                    color: ['rgba(247,247,247,0.3)'],
	                    width: 0.5,
	                }
	            }
	        },
	        series: [{
	            data: [],
	            //data: [100, 130, 56, 80, 130, 78],
	            type: 'bar',
	            barWidth: 10,
	            itemStyle: {
	                color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#83bff6' },
                            { offset: 0.5, color: '#188df0' },
                            { offset: 1, color: '#188df0' }
                        ]
                    ),

	            },
	            emphasis: {
	                itemStyle: {
	                    color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#2378f7' },
                                { offset: 0.7, color: '#2378f7' },
                                { offset: 1, color: '#83bff6' }
                            ]
                        )
	                }
	            },
	        }]
	    };
	    var names = [];    //类别数组（实际用来盛放X轴坐标值）    
	    var series1 = [];
	    //setInterval(function () {
	        $.ajax({
	            type: "post",
	            async: true,
	            url: "index.aspx/barData2",
	            contentType: "application/json; charset=utf-8",
	            dataType: "json", //返回数据形式为json  
	            success: function (data) {
	                if (data) {
	                    $.each(data, function (i, d) {
	                        for (var j = 0; j < d.length / 2; j++) {

	                            names.push(data.d[0 + j * 2]);    //挨个取出类别并填入类别数组
	                            //alert(data.d[0 + j * 2]);
	                            series1.push(data.d[1 + j * 2]);
	                            //alert(data.d[1 + j * 2]);
	                        }
	                    });
	                    console.log(names);
	                    console.log(series1);

	                    //var dataobj = JSON.parse(JSON.stringify(data));
	                    //names.shift();
	                    //series1.shift();

	                    myChart.setOption({

	                        yAxis: [{
	                            data: names

	                        }],
	                        series: [{

	                            data: series1
	                        }],

	                    });
	                }
	            },

	        });
	   // }, 500);
	    myChart.setOption(option);
	    window.addEventListener("resize", function () {
	        myChart.resize()
	    })

	}


	function barChart2(){
		var b=echarts.init(document.getElementById("bar2"));
		var option = {

		    tooltip: {
		        show: true,//是否显示提示框组件，包括提示框浮层和 axisPointer。
		        trigger: 'axis',//触发类型。'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none'什么都不触发
		        triggerOn: 'mousemove',//提示框触发的条件可选：'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发，用户可以通过 action.tooltip.showTip 和 action.tooltip.hideTip 来手动触发和隐藏。也可以通过 axisPointer.handle 来触发或隐藏。			 	
		        backgroundColor: 'rgba(153,153,153,0.4)',//提示框浮层的背景颜色。
		        borderColor: 'rgba(153,153,153,0.6)',//提示框浮层的边框颜色
		        borderWidth: 1,//提示框浮层的边框宽
		        padding: 5,//提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
		        axisPointer: {// 坐标轴指示器，坐标轴触发有效
		            type: 'shadow',// 默认为直线，可选为：'line' | 'shadow'					
		        }
		    },
		    grid: {//坐标轴位置
		        left: 50,
		        bottom: 30,
		        top: 20,
		        show: false,
		    },
		    yAxis: {
		        show: true,
		        type: 'category',
		        data:[],//'产品A', '产品B', '产品C', '产品D', '产品E', '产品F'
		        axisLabel: {//坐标轴上项目颜色
		            color: 'rgba(223,231,238,0.7)',
		        },
		        axisLine: {
		            lineStyle: {
		                color: 'rgba(223,231,238,0)'
		            }
		        },
		    },
		    xAxis: {
		        show: false,
		        type: 'value',
		        splitLine: {//分隔线颜色
		            lineStyle: {
		                // 使用深浅的间隔色
		                color: ['rgba(247,247,247,0.3)'],
		                width: 0.5,
		            }
		        }
		    },
		    series: [{
		        data:[],
		        //data: [100, 130, 56, 80, 130, 78],
		        type: 'bar',
		        barWidth: 10,
		        itemStyle: {
		            color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#83bff6' },
                            { offset: 0.5, color: '#188df0' },
                            { offset: 1, color: '#188df0' }
                        ]
                    ),
		        },
		        emphasis: {
		            itemStyle: {
		                color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#2378f7' },
                                { offset: 0.7, color: '#2378f7' },
                                { offset: 1, color: '#83bff6' }
                            ]
                        )
		            }
		        },
		    }]
		};
		 var ycontext = [];
		 var xdata = [];
		//setInterval(function () {		   		
		    $.ajax({
		        url: "index.aspx/barData22",
		        async: true,
		        type: "post",
		        dataType: "json",
		        contentType: "application/json;charest=utf-8",
		        success: function (result) {		           		           
		            if (result)
		            {
		               // console.log(result);
                        //barDate2对应的代码,使用一维数组进行传值
		                
		               /* $.each(result, function (i, d) {
		                     for (var i = 0; i < d.length; i+= 2)
		                       {
		                           ycontext.push(result.d[i]);
		                       }
		                    for (var i = 1; i < d.length; i+=2)
		                      {
		                          xdata.push(parseInt(result.d[i]));
		                      }
		                });
		                //console.log(xdata);
		                //console.log(ycontext);
		                b.setOption({

		                    yAxis: [{
		                        data: ycontext
		                    }],
		                    series: [{
		                        data: xdata
		                    }],
		                });		 */

		                //barDate22对应的代码，使用二维数组进行传值
		                $.each(result, function (i, d) {
		                    for(var i=0;i<d.length/2;i++)
		                    {
		                        ycontext.push(result.d[i]);
		                    }
		                    for(var j=d.length/2;j<d.length;j++)
		                    {
		                        xdata.push(result.d[j]);
		                    }
		                });
		                //console.log(xdata);
		                //console.log(ycontext);
		                b.setOption({
		                    yAxis:{
                                data:ycontext
		                    },
		                    series: [{
                                data:xdata
		                    }]
		                });
		               
		               //barData对应代码，使用JSON字符串进行传值，暂时还有问题，传过来的是JSON字符串，不能变成数组对象。 	
		              /* // result = JSON.parse(JSON.stringify(result));
		                result = JSON.parse(result);
		                //JSONArray.fromObject(result);
                         console.log(result);
                         $.each(result, function (i, d) {
                             console.log(d.length);
                          
		                for (var i = 0; i < d.length; i++)
		                {
		                    ycontext.push(result.name);
		                    xdata.push(result.data);
		                    
		                }
		               
		                b.setOption({

		                    yAxis: [{
		                        data: ycontext
		                    }],
		                    series: [{
		                        data: xdata
		                    }],
		                  });
		              });*/
		            }   
		        },
		        error: function (errorMsg) {
		            alert("请求数据失败！");
		        }
		    });
		//}, 500);		
		b.setOption(option);
		window.addEventListener("resize",function(){//图表自适应
			b.resize();
		})	
	}
});