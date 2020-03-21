$(function(){
	gaugeChart();
	function gaugeChart(){
		var a=echarts.init(document.getElementById("gauge"));
		option={
			series:[{
				type:'gauge',//类型
				name:'级别',//系列名
				radius:'100%',//表盘半径,可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
				startAngle:225,//仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
				endAngle:-45,//仪表盘结束角度。
				clockwise:true,//仪表盘刻度是否是顺时针增长。
				data:[],//数据,还可以设置数据名,数组形式,连接数据库时，这里要为空，使用ajax动态获取数据
				min:0,//表盘的最小数据值
				max:500,//表盘的最大数据值
				splitNumber:10,//仪表盘刻度的分割段数
				axisLine:{//仪表盘轴线相关配置,那个仪表盘的圈
				       show:true,//是否显示仪表盘轴线
					   lineStyle:{//仪表盘轴线样式
						   color:[[0.2, '#aceccf'], [0.8, '#88b9d9'], [1, '#f13f3c']],//默认取值,仪表盘的轴线可以被分成不同颜色的多段。每段的结束位置和颜色可以通过一个数组来表示。
						   width:2,//轴线宽度
						   //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
						   shadowColor: 'rgba(0, 0, 0, 0.5)',//阴影颜色
						   shadowBlur: 10,//图形阴影的模糊大小
						   shadowOffsetX:1 ,//阴影水平方向上的偏移距离
						  shadowOffsetY:1,//阴影垂直方向上的偏移距离
						   opacity:1//图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
					   }					   					
				},
				splitLine:{//分隔线样式,大的格
					show:true,//是否显示分割线
					length:10,//分隔线线长。支持相对半径的百分比。
					lineStyle:{//分割线样式
					     // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
					     color:'auto',
						 //color:"#fff",
					      width:1.5,//线宽
						  type:'solid',//线的类型 solid dashed虚线 dotted点线 三种类型
						  //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
						  shadowColor: 'rgba(0, 0, 0, 0.5)',//阴影颜色
						  shadowBlur: 10,//图形阴影的模糊大小
						  shadowOffsetX:1 ,//阴影水平方向上的偏移距离
						  shadowOffsetY:1,//阴影垂直方向上的偏移距离
						  opacity:1//图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
						
					}
				},
				axisTick:{//刻度样式,小格子
				        show:true,//是否显示刻度
						splitNumber:5,//分隔线之间分割的刻度数
						length:5,//刻度线长。支持相对半径的百分比。
						lineStyle:{
							  // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
							  color: 'auto',
							  //color:'auto',
							  width:1,
							  type:'solid',
							  //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
							  shadowColor: 'rgba(0, 0, 0, 0.5)',//阴影颜色
							  shadowBlur: 10,//图形阴影的模糊大小
							  shadowOffsetX:1 ,//阴影水平方向上的偏移距离
							  shadowOffsetY:1,//阴影垂直方向上的偏移距离
							  opacity:1//图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形							  						
						}
					
				},
				axisLabel:{//刻度标签
					show:true,//是否显示标签
					distance:5,//标签与刻度线的距离					
					color:'#f8f8f8',//文字的颜色
					fontWeight:'normal',//文字字体的粗细,可选项:'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
					fontStyle:'normal',//文字字体的风格,三个可选项:normal,italic,oblique					
					fontFamily:'sans-serif',//文字的字体系列,还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
					shadowColor : '#fff', //默认透明
					shadowBlur: 10
					//fontSize:12//文字的字体大小,这里的原因,加上这句就不显示了
				},
				pointer:{//仪表盘指针
				    show:true,
					length:'80%',//指针长度，可以是绝对数值，也可以是相对于半径的半分比。
					width:4//指针宽度				
				},
				itemStyle:{//仪表盘指针样式
					color:'auto',//指针颜色，默认取数值所在的区间的颜色
					borderColor:"#000",//图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
					borderWidth:0.8,//描边线宽。为 0 时无描边。
					borderType:'solid',//柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
					shadowColor: 'rgba(0, 0, 0, 0.5)',
					shadowBlur: 10
				},
				title:{//仪表盘标题
				    //show:true;///////加上这句就不显示了
					offsetCenter:[0,'-40%'],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
					color:'#333',//文字的颜色
					fontStyle:'normal',
					fontWeight:'normal',//文字字体的粗细,可选项:'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
					fontFamily:'sans-serif',//文字的字体系列,还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
					fontSize:10,
					shadowColor : '#fff', //默认透明
					shadowBlur: 10
				},
				detail:{//仪表盘详情，用于显示数据。
					show:true,
					offsetCenter:[0,'50%'],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
					borderWidth: 0.7,
					borderColor: '#FFE4C4',
					shadowColor : '#FFE4C4', //默认透明
					shadowBlur: 5,
					color:'auto',//文字的颜色
					fontStyle:'normal',
					fontWeight:'bolder',//文字字体的粗细,可选项:'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
					fontFamily:'sans-serif',//文字的字体系列,还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
					fontSize:15
				}								
			}								
			]
		};
	    //使用ajax获取预警总数
		//setInterval(function () {		    
		    $.ajax({
		        type:"post",
		        async:true,
		        url:"index.aspx/gaugeData",
		        contentType: "application/json; charset=utf-8",
		        dataType: "json",
		        success: function (data) {//data是一个string类型的值
		            if(data)
		            {
		                
		                 var dataobj = JSON.parse(JSON.stringify(data));//低版本IE不支持直接使用JSON.parse，将json转换成JS对象，需要一个框架json2.js来兼容，然后使用这句话将json对象转换成JS对象
		                a.setOption({
		                    series: [{
		                        data:[dataobj.d]
		                        //data:[23]
		                    }]
		                });
		            }
		        },
		        error: function (errorMsg) {//读取数据失败后该怎么做,后台必须加上WebMethod，不然会执行error
		            alert("图表请求数据失败！");

		        }
		    });

		//}, 500);		
		a.setOption(option);
		window.addEventListener("resize",function(){
			a.resize();
		})	
	}
});