$(function () {
    line();
    function line() {
        var a = echarts.init(document.getElementById("xyy"));
        var option = {
            color: ['rgba(255,215,0,1)', 'rgba(72,118,255,1)', 'rgba(255,0,0,1)'],
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {//坐标轴指示线
                    show: true,
                    type: 'cross',//指示器类型。'line' 直线指示器;'shadow' 阴影指示器;'none' 无指示器;'cross' 十字准星指示器。其实是种简写，表示启用两个正交的轴的 axisPointer。
                    axis: 'auto',//指示器的坐标轴。默认情况，坐标系会自动选择显示哪个轴的 axisPointer（默认取类目轴或者时间轴）。可以是 'x', 'y', 'radius', 'angle'。
                    snap: true,//坐标轴指示器是否自动吸附到点上。默认自动判断。这个功能在数值轴和时间轴上比较有意义，可以自动寻找细小的数值点。
                    label: {//十字提示线是坐标轴上显示数据
                        show: true,//是否显示文本标签。如果 tooltip.axisPointer.type 设置为 'cross' 则默认显示标签，否则默认不显示。
                        precision:'auto',
                        formatter: '{value}',
                        color:'black',//坐标轴上的提示字颜色
                    },
                    crossStyle: {
                        color:'white',//十字提示线颜色
                    },
                    

                },
                backgroundColor: 'rgba(50,50,50,0.7)',//提示框背景颜色


            },
            legend: {
                type: 'plain',
                show: true,
                top: 0,
                right: '50%',
                orient: 'horizontal',
                selectedModel: true,
                textStyle: {
                    color:'white'
                }

            },
            grid: {
                show: true,
                left: 50,
                buttom: 20,
                containLabel: false,//grid 区域是否包含坐标轴的刻度标签
                backgroundColor: 'rgba(128, 128, 128, 0.2)',

            },
            xAxis: {
                show: true,
                type: 'category',
               // name: '月份',
                nameLocation: 'end',//坐标轴名称显示位置。
                nameGap: 15,//坐标轴名称与轴线之间的距离。
                axisPointer: {
                    type: 'shadow'
                },
                axisLine: {
                    show: true,
                    //onZero:true,//X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效。
                    onZeroAxisIndex: 0,//当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上。
                    symbol: ['none', 'none'],//轴线两边的箭头。可以是字符串，表示两端使用同样的箭头；或者长度为 2 的字符串数组，分别表示两端的箭头。默认不显示箭头，即 'none'。两端都显示箭头可以设置为 'arrow'，只在末端显示箭头可以设置为 ['none', 'arrow']。
                    lineStyle: {
                        color: 'white',
                        width: 1,
                        type: 'solid',

                    }
                },
                axisTick: {//坐标轴刻度相关设置
                    show: true,
                    inside: true,//坐标轴刻度是否朝内，默认朝外。
                    length: 3,//坐标轴刻度的长度。

                },
                axisLabel: {
                    show: true,
                    inside: false,//X轴的标签朝外
                    color: 'white',
                },
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

            },
            yAxis: [{
                show: true,
                gridIndex: 0,//y 轴所在的 grid 的索引，默认位于第一个 grid。
                position: 'left',//y 轴的位置。默认 grid 中的第一个 y 轴在 grid 的左侧（'left'），第二个 y 轴视第一个 y 轴的位置放在另一侧。
                type: 'value',
                name: '水量',
                nameLocation: 'end',//坐标轴名称显示位置。
                nameGap: 15,//坐标轴名称与轴线之间的距离
                triggerEvent: false,//坐标轴的标签是否响应和触发鼠标事件，默认不响应。
                axisLine: {
                    show: true,
                    symbol: ['none', 'none'],
                    lineStyle: {
                        color: 'white',
                        width: 1,
                        type: 'solid',

                    }
                },
                axisTick: {
                    show: true,
                    inside: true,//坐标轴刻度是否朝内，默认朝外。
                    length: 3,//坐标轴刻度的长度。
                },
                axisLabel: {
                    show: true,
                    inside: false,//Y轴的标签朝外
                    color: 'white',
                    formatter: '{value} ml'//坐标轴标签名称
                },
                splitLine: {
                    show: false,
                    
                },
                interval: 40,//每一个间隔的值
                min: 0,//坐标轴最小值
                max:200//坐标轴最大值，如果是双坐标轴想要中间的分割线重合，就要手动设置分割的大小，这三项要同时使用
            },
			{
			    show: true,
			    gridIndex: 0,//y 轴所在的 grid 的索引，默认位于第一个 grid。
			    position: 'right',//y 轴的位置。默认 grid 中的第一个 y 轴在 grid 的左侧（'left'），第二个 y 轴视第一个 y 轴的位置放在另一侧。
			    type: 'value',
			    name: '温度',
			    nameLocation: 'end',//坐标轴名称显示位置。
			    nameGap: 15,//坐标轴名称与轴线之间的距离
			    triggerEvent: false,//坐标轴的标签是否响应和触发鼠标事件，默认不响应。
			    axisLine: {
			        show: true,
			        symbol: ['none', 'none'],
			        lineStyle: {
			            color: 'white',
			            width: 1,
			            type: 'solid',

			        }
			    },
			    axisTick: {
			        show: true,
			        inside: true,//坐标轴刻度是否朝内，默认朝外。
			        length: 3,//坐标轴刻度的长度。
			    },
			    axisLabel: {
			        show: true,
			        inside: false,
			        color: 'white',
			        formatter: '{value} ℃'
			    },
			    splitLine: {
			        show: true,
			    },
			    interval: 10,
			    min: 0,
			    max: 50

			}],
            series: [
				{
				    type: 'bar',
				    name: '蒸发量',
				    yAxisIndex: 0,
				    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
				}, {
				    type: 'bar',
				    name: '降水量',
				    yAxisIndex: 0,
				    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
				}, {
				    type: 'line',
				    name: '平均温度',
				    yAxisIndex: 1,
				    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
				}
            ]

        }
        a.setOption(option);
        window.addEventListener("resize", function () {
            a.resize();
        })
    }

});