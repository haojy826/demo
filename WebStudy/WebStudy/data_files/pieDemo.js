$(function(){
	pieChart1();
	pieChart2();
	function pieChart1(){
		var a=echarts.init(document.getElementById("pie1"));
		var option={
			tooltip:{
				show:true,//是否显示提示框组件，包括提示框浮层和 axisPointer。
				trigger:'item',//触发类型。'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none'什么都不触发
				triggerOn:'mousemove',//提示框触发的条件可选：'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发，用户可以通过 action.tooltip.showTip 和 action.tooltip.hideTip 来手动触发和隐藏。也可以通过 axisPointer.handle 来触发或隐藏。
				formatter:'{a}<br />{b}:{c}({d}%)',//提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
				backgroundColor:'rgba(153,153,153,0.4)',//提示框浮层的背景颜色。
				borderColor:'rgba(153,153,153,0.6)',//提示框浮层的边框颜色
				borderWidth:1,//提示框浮层的边框宽
				padding:5//提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
			},
			color:['rgba(205,205,0,0.8)','rgba(144,238,144,0.8)','	rgba(100,149,237,0.8)'],//图例的颜色,从这里进行修改
			legend:{
				type:'plain',//图例的类型。可选值：'plain'：普通图例。缺省就是普通图例。'scroll'：可滚动翻页的图例。当图例数量较多时可以使用,选择这一项时需要单独设置一些配置。
				show:true,//显示图例
				//left:20,//图例组件离容器左侧的距离。
				right:5,
				top:0,//图例组件离容器上侧的距离。
				width:4,//图例组件的宽度。默认自适应。
				height:2,//图例组件的高度。默认自适应。
				//orient:'vertical',//图例列表的布局朝向。
				align:'auto',//图例标记和文本的对齐。默认自动，根据组件的位置和 orient 决定，当组件的 left 值为 'right' 以及纵向布局（orient 为 'vertical'）的时候为右对齐，即为 'right'。
				padding:5,//图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
				itemGap:10,//图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
				selectedMode:true,//图例选择的模式，点击图例可以自动显示图中对应的部分,控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。
				icon:'roundRect',//图例项的 icon。标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
				data: [{
					name:'高级',
					textStyle:{
						color:'#dfe7ee'
					}
				},{
					name:'中级',
					textStyle:{
						color:'#dfe7ee'
					}
				},{
					name:'低级',
					textStyle:{
						color:'#dfe7ee'
					}
				}],
				
			},
			series:[{
				name:'等级占比',//系列名
				type:'pie',//图的类型
				radius:[0,'75%'],//饼图的半径。
				center:['50%','50%'],//饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
				
				legendHoverLink:true,//是否启用图例 hover 时的联动高亮。
				hoverAnimation:true,//是否开启 hover 在扇区上的放大动画效果。
				hoverOffset:10,//高亮扇区的偏移距离。
				top:'20%',//pie chart组件离容器上侧的距离。top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'。如果 top 的值为'top', 'middle', 'bottom'，组件会根据相应的位置自动对齐。
			    label:{//标签
					show:true,//是否显示标签
					position:'outside',//标签位置,'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside'饼图扇区内部。'inner' 同 'inside'。'center'在饼图中心位置。
					formatter:'{b}:{c}({d}%)',//标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行。
					color:'#fff',//文字颜色
					align:'left',//文字水平对齐方式，默认自动。
					
				},
				labelLine:{//标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
					show:true,
					length:10,//视觉引导线第一段的长度。
					length2:10,//视觉引导项第二段的长度。
					smooth:true,//是否平滑视觉引导线，默认不平滑，可以设置成 true 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。
					lineStyle:{
						color:'#ffffff',
						width:1,//线宽
						type:'solid',						
					}
				},								
				data:[
					//{value:55,name:'高级'},
					//{value:123,name:'中级'},
					//{value:234,name:'低级'}
						
				],
				 emphasis:{//高亮的扇区和标签样式。
					itemStyle: {
					    shadowBlur: 10,
					    shadowOffsetX: 0,
					    shadowColor: 'rgba(0, 0, 0, 0.2)'
					}
				}
			}]			    					
		};

	//	setInterval(function () {		    
		    $.ajax({
		        url: "index.aspx/pieData1",
		        type: "post",
		        dataType: "json",
		        contentType: "application/json;charest=utf-8",
		        async: true,
		        success: function (data) {
		            if(data)
		            {
		                a.setOption({
                                series: [{
                                    data: [
                                        { value: data.d[0], name: '高级'},
					                    { value: data.d[1], name: '中级' },
					                    { value: data.d[2], name: '低级' }
                                       //{ value: 12, name: '高级' },
					                    //{ value: 23, name: '中级' },
					                    //{ value: 34, name: '低级' }
                                    ]
                                }]
                            });
		            }
		        },
		        error: function (errorMsg) {
		            alert("请求数据失败！");
		        }
		    });
		//}, 1000);

		
		a.setOption(option);
		window.addEventListener("resize",function(){
			a.resize();
		})
	}	
	function pieChart2(){
		//var sum=0;
		//var higher=0;
		//var other=sum-higher;
		var b=echarts.init(document.getElementById("pie2"));
		var option={
			color:['rgba(180,238,180,0.8)','rgba(238,201,0,0.8)'],
			series:[{
				name:'高级预警占比',//系列名
				type:'pie',//图的类型
				radius:['50%','75%'],//饼图的半径。
				center:['50%','50%'],//饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。				
				//legendHoverLink:true,//是否启用图例 hover 时的联动高亮。
				//hoverAnimation:true,//是否开启 hover 在扇区上的放大动画效果。
				hoverOffset:10,//高亮扇区的偏移距离。
				top:'20%',//pie chart组件离容器上侧的距离。top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'。如果 top 的值为'top', 'middle', 'bottom'，组件会根据相应的位置自动对齐。
			    avoidLabelOverlap: false,
				roseType: 'radius',
			    label: {
			        normal: {
			            show: true,//不显示标签,为了鼠标触发时显示
			            position: 'center'//位置居中
			        }
			       
			    },
			    labelLine: {//标签的视觉引导线样式
			        normal: {
			            show: false//不显示引导线
			        }
			    },            				
				data:[
					/*{
						value:higher,
						name:'高级预警',
						
						label:{
							normal:{
								formatter: higher + "",
								textStyle: {
									fontSize: 20,
									color: "#fff",
								}
							},
							
						},
						emphasis:{//高亮的扇区和标签样式。
							itemStyle: {
							    shadowBlur: 10,
							    shadowOffsetX: 0,
							    shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
						},
					{
						value:other,
						label:{
							normal:{
								formatter:function(){
									return "\n\n\n占比" + Math.round(higher / sum * 100) + "%"
									},
								textStyle: {
									fontSize: 10,
									color: "#fff",
								}
							}
						},
						emphasis:{//高亮的扇区和标签样式。
							itemStyle: {
							    shadowBlur: 10,
							    shadowOffsetX: 0,
							    shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					   }*/
				],
				 
			}]			    					
		};

	//	setInterval(function () {		    
		    $.ajax({
		        url: "index.aspx/pieData2",
		        type: "post",
		        dataType: "json",
		        contentType: "application/json;charest=utf-8",
		        async: true,
		        success: function (data) {
		            if (data) {
		               
		                b.setOption({
		                    series: [{
		                        data: [
                                    	{
                                    	    value: data.d[1],
                                    	    name: '高级预警',

                                    	    label: {
                                    	        normal: {
                                    	            formatter: data.d[1] + "",
                                    	            textStyle: {
                                    	                fontSize: 20,
                                    	                color: "#fff",
                                    	            }
                                    	        },

                                    	    },
                                    	    emphasis: {//高亮的扇区和标签样式。
                                    	        itemStyle: {
                                    	            shadowBlur: 10,
                                    	            shadowOffsetX: 0,
                                    	            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    	        }
                                    	    }
                                    	},
					{
					    value: data.d[0] - data.d[1],
					    label: {
					        normal: {
					            formatter: function () {
					                return "\n\n\n占比" + Math.round(data.d[1] / data.d[0] * 100) + "%"
					            },
					            textStyle: {
					                fontSize: 10,
					                color: "#fff",
					            }
					        }
					    },
					    emphasis: {//高亮的扇区和标签样式。
					        itemStyle: {
					            shadowBlur: 10,
					            shadowOffsetX: 0,
					            shadowColor: 'rgba(0, 0, 0, 0.5)'
					        }
					    }
					}
		                        ]
		                    }]
		                });
		            }
		        },
		        error: function (errorMsg) {
		            alert("请求数据失败！");
		        }
		    });

	//	}, 1000);		
		b.setOption(option);
		window.addEventListener("resize",function(){
			b.resize();
		})
	}
});