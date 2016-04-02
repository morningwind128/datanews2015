(function($, Edge, compId) {
    var Composition = Edge.Composition,
      Symbol = Edge.Symbol; // 常用的 Edge 类别名

    //Edge symbol: 'stage'
    (function(symbolName) {
        Symbol.bindElementAction(compId, symbolName, "${btn_1}", "click", function(sym, e) {
          // 插入代码——当鼠标在此处单击
          sym.play();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {

          sym.stop();
        });
        //Edge binding end



        Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {

//echart begin
//echart1 start
            require.config({
              paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
              }
            });
            require(
              [
                'echarts',
                'echarts/chart/line', 'echarts/chart/bar', 'echarts/chart/scatter', 'echarts/chart/pie',
                'echarts/chart/chord', 'echarts/chart/map', 'echarts/chart/heatmap', 'echarts/chart/gauge',
                'echarts/chart/treemap', 'echarts/chart/venn', 'echarts/chart/tree'
              ],
              function(ec) {
                var myChart1 = ec.init(document.getElementById('Stage_echart1'));
                var option1 = {
    title : {
        text: '2040年哈萨克斯坦境外水资源供应预计',
        subtext: '基于2012年统计数据'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:[
            '','2040年预计邻国取水量','2040年预计流入哈境内水量','',
            '2012年邻国取水量','2012年流入哈境内水量',
        ]
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['威海-锡尔河流域',
          '巴尔喀什湖-阿拉湖流域','额尔齐斯河流域','里海流域','托博尔河-塔尔加河流域','楚河-塔拉斯河流域']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    grid: {y: 70, y2:30, x2:20},
    xAxis : [
        {
            type : 'category',
            axisLabel:{
              interval:0, 
            },
            data : ['威海-锡尔河流域','巴尔喀什湖-阿拉湖流域','额尔齐斯河流域','里海流域','托博尔河-塔尔加河流域','楚河-塔拉斯河流域']
        },
        {
            type : 'category',
            axisLine: {show:false},
            axisTick: {show:false},
            axisLabel: {show:false},
            splitArea: {show:false},
            splitLine: {show:false},
            data : ['威海-锡尔河流域','巴尔喀什湖-阿拉湖流域','额尔齐斯河流域','里海流域','托博尔河-塔尔加河流域','楚河-塔拉斯河流域']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{formatter:'{value} ms'}
        }
    ],
    series : [
        {
            name:'2012年邻国取水量',
            type:'bar',
            itemStyle: {normal: {color:'rgba(193,35,43,1)', label:{show:true}}},
            data:[198,35,12,18, 0,18]
        },
        {
            name:'2012年流入哈境内水量',
            type:'bar',
            itemStyle: {normal: {color:'rgba(181,195,52,1)', label:{show:true,textStyle:{color:'#27727B'}}}},
            data:[146,122,78,71,3,26]
        },
        {
            name:'2040年预计邻国取水量',
            type:'bar',
            xAxisIndex:1,
            itemStyle: {normal: {color:'rgba(193,35,43,0.5)', label:{show:true,formatter:function(p){return p.value > 0 ? (p.value +'\n'):'';}}}},
            data:[154,79,45,44,2,25]
        },
        {
            name:'2040年预计流入哈境内水量',
            type:'bar',
            xAxisIndex:1,
            itemStyle: {normal: {color:'rgba(181,195,52,0.5)', label:{show:true}}},
            data:[128,79,45,44,2,20]
        },
    ]
}; 
       myChart1.setOption(option1);
              }
            );
            //echart1 end

            //echart2 start
            require.config({
              paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
              }
            });
            require(
              [
                'echarts',
                'echarts/chart/line', 'echarts/chart/bar', 'echarts/chart/scatter', 'echarts/chart/pie',
                'echarts/chart/chord', 'echarts/chart/map', 'echarts/chart/heatmap', 'echarts/chart/gauge',
                'echarts/chart/treemap', 'echarts/chart/venn', 'echarts/chart/tree'

              ],
              function(ec) {
                var myChart2 = ec.init(document.getElementById('Stage_echart2'));
                var idx = 1;
                var option2 = {
                  timeline: {
                    data: [
                      '1999', '2001', '2003', {
                        name: '2005',
                        symbol: 'emptyStar6',
                        symbolSize: 8
                      },
                      '2007', '2009', '2011', {
                        name: '2013',
                        symbol: 'star6',
                        symbolSize: 8
                      }
                    ],
                    label: {
                      formatter: function(s) {
                        return s.slice(0, 7);
                      }
                    }
                  },
                  options: [{
                    title: {
                      text: '森林覆盖率',
                      subtext: '数据来自新疆维吾尔自治区统计局'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    toolbox: {
                      show: true,
                      feature: {
                        mark: {
                          show: true
                        },
                        dataView: {
                          show: true,
                          readOnly: false
                        },
                        magicType: {
                          show: true,
                          type: ['pie', 'funnel'],
                          option: {
                            funnel: {
                              x: '25%',
                              width: '50%',
                              funnelAlign: 'left',
                              max: 1700
                            }
                          }
                        },
                        restore: {
                          show: true
                        },
                        saveAsImage: {
                          show: true
                        }
                      }
                    },
                    series: [{
                      name: '森林覆盖率',
                      type: 'pie',
                      center: ['50%', '45%'],
                      radius: '50%',
                      data: [{
                        value: 6.048,
                        name: '森林覆盖率'
                      }, {
                        value: 353.952,
                        name: '其它土地'
                      }]
                    }]
                  }, {
                    series: [{
                      name: '森林覆盖率',
                      type: 'pie',
                      data: [{
                        value: 6.84,
                        name: '森林覆盖率'
                      }, {
                        value: 353.16,
                        name: '其它土地'
                      }]
                    }]
                  }, {
                    series: [{
                      name: '森林覆盖率',
                      type: 'pie',
                      data: [{
                        value: 7.56,
                        name: '森林覆盖率'
                      }, {
                        value: 352.44,
                        name: '其它土地'
                      }]
                    }]
                  }, {
                    series: [{
                      name: '森林覆盖率',
                      type: 'pie',
                      data: [{
                        value: 10.584,
                        name: '森林覆盖率'
                      }, {
                        value: 349.416,
                        name: '其它土地'
                      }]
                    }]
                  }, {
                    series: [{
                      name: '森林覆盖率',
                      type: 'pie',
                      data: [{
                        value: 12.6,
                        name: '森林覆盖率'
                      }, {
                        value: 347.4,
                        name: '其它土地'
                      }]
                    }]
                  }, {
                    series: [{
                      name: '森林覆盖率',
                      type: 'pie',
                      data: [{
                        value: 14.472,
                        name: '森林覆盖率'
                      }, {
                        value: 345.528,
                        name: '其它土地'
                      }]
                    }]
                  }, {
                    series: [{
                      name: '森林覆盖率',
                      type: 'pie',
                      data: [{
                        value: 14.832,
                        name: '森林覆盖率'
                      }, {
                        value: 345.168,
                        name: '其它土地'
                      }]
                    }]
                  }, {
                    series: [{
                      name: '森林覆盖率',
                      type: 'pie',
                      data: [{
                        value: 15.264,
                        name: '森林覆盖率'
                      }, {
                        value: 344.736,
                        name: '其它土地'
                      }]
                    }]
                  }]
                };
                myChart2.setOption(option2);
              }
            );
            //echart2 end
            //echart3 start
            require.config({
              paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
              }
            });
            require(
              [
                'echarts',
                'echarts/chart/line', 'echarts/chart/bar', 'echarts/chart/scatter', 'echarts/chart/pie',
                'echarts/chart/chord', 'echarts/chart/map', 'echarts/chart/heatmap', 'echarts/chart/gauge',
                'echarts/chart/treemap', 'echarts/chart/venn', 'echarts/chart/tree'

              ],
              function(ec) {
                var myChart3 = ec.init(document.getElementById('Stage_echart3'));
                var option3 = {
                  title: {
                    text: '甘肃省武威市三大产业占比'
                  },

                  tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                  },
                  legend: {
                    data: ['', '', '第一产业', '第二产业', '第三产业']
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'value'
                  },
                  yAxis: {
                    type: 'category',
                    data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
                  },
                  series: [{
                    name: '第一产业',
                    type: 'bar',
                    stack: '总量',
                    label: {
                      normal: {
                        show: true,
                        position: 'insideRight'
                      }
                    },
                    data: [45, 42, 38.9, 44.1, 41.6, 39.4, 37.2, 36, 35.3]
                  }, {
                    name: '第二产业',
                    type: 'bar',
                    stack: '总量',
                    label: {
                      normal: {
                        show: true,
                        position: 'insideRight'
                      }
                    },
                    data: [21, 23, 26.9, 24.8, 27.7, 30.2, 32.9, 33.4, 33.6]
                  }, {
                    name: '第三产业',
                    type: 'bar',
                    stack: '总量',
                    label: {
                      normal: {
                        show: true,
                        position: 'insideRight'
                      }
                    },
                    data: [34, 35, 34.2, 31.1, 30.7, 30.4, 29.9, 30.6, 31.1]
                  }]
                };
                myChart3.setOption(option3);
              }
            );
            //echart3 end
//echart4 start
require.config({
  paths: {
    echarts: 'http://echarts.baidu.com/build/dist'
  }
});
require(
  [
    'echarts',
    'echarts/chart/line', 'echarts/chart/bar', 'echarts/chart/scatter', 'echarts/chart/pie',
    'echarts/chart/chord', 'echarts/chart/map', 'echarts/chart/heatmap', 'echarts/chart/gauge',
    'echarts/chart/treemap', 'echarts/chart/venn', 'echarts/chart/tree'
  ],
  function(ec) {
    var myChart4 = ec.init(document.getElementById('Stage_echart4'));
    var option4 = {
      title: {
        text: '民勤市盆地地下水开采量与水资源使用量（万立方米）关系图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        left: '60%',
        data: ['', '', '', '盆地地下水开采量', '水资源使用量'],
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: '盆地地下水开采量',
        type: 'line',
        stack: '总量',
        areaStyle: {
          normal: {}
        },
        data: [60000, 55000, 33985, 29155, 12855, 8869, 8518, 8578, 8506]
      }, {
        name: '水资源使用量',
        type: 'line',
        stack: '盆地地下水开采量',
        areaStyle: {
          normal: {}
        },
        data: [6710, 6360, 5760, 5360, 3510, 3505.1, 3505.9, 3403, 5230]
      }, ]
    };
    myChart4.setOption(option4);
  }
);
//echart4 end

//echart5 start
require.config({
  paths: {
    echarts: 'http://echarts.baidu.com/build/dist'
  }
});
require(
  [
    'echarts',
    'echarts/chart/line', 'echarts/chart/bar', 'echarts/chart/scatter', 'echarts/chart/pie',
    'echarts/chart/chord', 'echarts/chart/map', 'echarts/chart/heatmap', 'echarts/chart/gauge',
    'echarts/chart/treemap', 'echarts/chart/venn', 'echarts/chart/tree'

  ],
  function(ec) {
    var myChart5 = ec.init(document.getElementById('Stage_echart5'));
    var timeData = [
      '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014',
    ];

    timeData = timeData.map(function(str) {
      return str.replace('2007/', '');
    });
    var option5 = {
      title: {
        text: '青土湖水域面积与观测井地下水位表示图',
        x: '10%'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function(params) {
          return params[0].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value + ' (m^3/s)<br/>';
        },
        axisPointer: {
          animation: false
        }
      },
      legend: {
        data: ['水域面积', '观测井地下水位'],
        x: '75%'
      },
      dataZoom: [{
        show: true,
        realtime: true,
        start: 0,
        end: 100,
        xAxisIndex: [0, 1]
      }, {
        type: 'inside',
        realtime: true,
        start: 0,
        end: 100,
        xAxisIndex: [0, 1]
      }],
      grid: [{
        left: 75,
        right: 50,
        height: '33%'
      }, {
        left: 75,
        right: 50,
        top: '55%',
        height: '33%'
      }],
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
          onZero: true
        },
        data: timeData
      }, {
        gridIndex: 1,
        type: 'category',
        boundaryGap: false,
        axisLine: {
          onZero: true
        },
        data: timeData,
        position: 'top'
      }],
      yAxis: [{
        name: '水域面积（平方公里）',
        type: 'value',
        max: 25
      }, {
        gridIndex: 1,
        name: '观测井地下水位（米）',
        type: 'value',
        inverse: true
      }],
      series: [{
        name: '水域面积',
        type: 'line',
        symbolSize: 8,
        hoverAnimation: false,
        data: [
          0, 0, 0, 3, 10, 14.8, 15, 22.28
        ]
      }, {
        name: '观测井地下水位',
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbolSize: 8,
        hoverAnimation: false,
        data: [
          4.02, 3.91, 3.88, 3.78, 3.6, 3.48, 3.32, 3.22
        ]
      }]
    };
    myChart5.setOption(option5);
  }
);
//echart5 end
//echart6 start
require.config({
  paths: {
    echarts: 'http://echarts.baidu.com/build/dist'
  }
});
require(
  [
    'echarts',
    'echarts/chart/line', 'echarts/chart/bar', 'echarts/chart/scatter', 'echarts/chart/pie',
    'echarts/chart/chord', 'echarts/chart/map', 'echarts/chart/heatmap', 'echarts/chart/gauge',
    'echarts/chart/treemap', 'echarts/chart/venn', 'echarts/chart/tree'

  ],
  function(ec) {
    var myChart6 = ec.init(document.getElementById('Stage_echart6'));
    var labelRight = {
      normal: {
        position: 'right'
      }
    };
    var option6 = {
      title: {
        text: '阿克苏－和田人均GDP（单位：元）',
        subtext: '数据来源新疆维吾尔自治区统计局'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        left: '70%',
        data: ['', '阿克苏市', '和田市']
      },
      toolbox: {
        show: true,
        feature: {
          mark: {
            show: true
          },
          dataView: {
            show: true,
            readOnly: false
          },
          magicType: {
            show: true,
            type: ['line', 'bar']
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      calculable: true,
      xAxis: [{
        type: 'category',
        data: ['1998', '1999', '2000', '2001', '2002', '2003', '2004',
          '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'
        ]
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: '阿克苏',
        type: 'bar',
        data: [7116, 6456, 4548, 7935, 8502, 9578, 10325, 12127, 13747, 16198,
          13555, 20458, 23165, 29714, 33793, 28954, 31309.3
        ],
        markPoint: {
          data: [{
            type: 'max',
            name: '最大值'
          }, {
            type: 'min',
            name: '最小值'
          }]
        },
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        }
      }, {
        name: '和田市',
        type: 'bar',
        data: [2922, 2666, 2699, 2795, 2945, 3486, 4095, 4535,
          4810, 5218, 6199, 7219, 8327, 5954, 6489, 7840, 16608
        ],
        markPoint: {
          data: [{
            type: 'max',
            name: '最大值'
          }, {
            type: 'min',
            name: '最小值'
          }]
        },
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        }
      }]
    };
    myChart6.setOption(option6);
  }
);
//echart6 end
//echart7 start
require.config({
  paths: {
    echarts: 'http://echarts.baidu.com/build/dist'
  }
});
require(
  [
    'echarts',
    'echarts/chart/line', 'echarts/chart/bar', 'echarts/chart/scatter', 'echarts/chart/pie',
    'echarts/chart/chord', 'echarts/chart/map', 'echarts/chart/heatmap', 'echarts/chart/gauge',
    'echarts/chart/treemap', 'echarts/chart/venn', 'echarts/chart/tree'
  ],
  function(ec) {
    var myChart7 = ec.init(document.getElementById('Stage_echart7'));
    var idx = 1;
    var option7 = {
      timeline: {
        data: [
          '1999', '2001', '2003', {
            name: '2005',
            symbol: 'emptyStar6',
            symbolSize: 8
          },
          '2007', '2009', '2011', {
            name: '2013',
            symbol: 'star6',
            symbolSize: 8
          }
        ],
        label: {
          formatter: function(s) {
            return s.slice(0, 7);
          }
        }
      },
      options: [{
        title: {
          text: '森林覆盖率',
          subtext: '数据来自新疆维吾尔自治区统计局'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1700
                }
              }
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        series: [{
          name: '森林覆盖率',
          type: 'pie',
          center: ['50%', '45%'],
          radius: '50%',
          data: [{
            value: 6.048,
            name: '森林覆盖率'
          }, {
            value: 353.952,
            name: '其它土地'
          }]
        }]
      }, {
        series: [{
          name: '森林覆盖率',
          type: 'pie',
          data: [{
            value: 6.84,
            name: '森林覆盖率'
          }, {
            value: 353.16,
            name: '其它土地'
          }]
        }]
      }, {
        series: [{
          name: '森林覆盖率',
          type: 'pie',
          data: [{
            value: 7.56,
            name: '森林覆盖率'
          }, {
            value: 352.44,
            name: '其它土地'
          }]
        }]
      }, {
        series: [{
          name: '森林覆盖率',
          type: 'pie',
          data: [{
            value: 10.584,
            name: '森林覆盖率'
          }, {
            value: 349.416,
            name: '其它土地'
          }]
        }]
      }, {
        series: [{
          name: '森林覆盖率',
          type: 'pie',
          data: [{
            value: 12.6,
            name: '森林覆盖率'
          }, {
            value: 347.4,
            name: '其它土地'
          }]
        }]
      }, {
        series: [{
          name: '森林覆盖率',
          type: 'pie',
          data: [{
            value: 14.472,
            name: '森林覆盖率'
          }, {
            value: 345.528,
            name: '其它土地'
          }]
        }]
      }, {
        series: [{
          name: '森林覆盖率',
          type: 'pie',
          data: [{
            value: 14.832,
            name: '森林覆盖率'
          }, {
            value: 345.168,
            name: '其它土地'
          }]
        }]
      }, {
        series: [{
          name: '森林覆盖率',
          type: 'pie',
          data: [{
            value: 15.264,
            name: '森林覆盖率'
          }, {
            value: 344.736,
            name: '其它土地'
          }]
        }]
      }]
    };
    myChart7.setOption(option7);
  }
);
//echart7 end
//echart8 start
require.config({
  paths: {
    echarts: 'http://echarts.baidu.com/build/dist'
  }
});
require(
  [
    'echarts',
    'echarts/chart/line', 'echarts/chart/bar', 'echarts/chart/scatter', 'echarts/chart/pie',
    'echarts/chart/chord', 'echarts/chart/map', 'echarts/chart/heatmap', 'echarts/chart/gauge',
    'echarts/chart/treemap', 'echarts/chart/venn', 'echarts/chart/tree'
  ],
  function(ec) {
    var myChart8 = ec.init(document.getElementById('Stage_echart8'));
    var option8 = {
      title: {
        text: '新疆历年造林面积示意图（单位：公顷）',
        subtext: '数据来自历年《新疆统计年鉴》',
        sublink: 'http://www.xjtj.gov.cn/sjcx/tjnj_3415/'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        left: '50%',
        data: ['','用材林', '经济林', '防护林', '薪炭林'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
      },
      series: [{
        name: '用材林',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: false,
            position: 'insideRight'
          }
        },
        data: [1605, 2149, 3034, 10152, 3897, 3226, 1780, 2991, 8744, 9387, 1996, 823, 3702, 3675, 3633]
      }, {
        name: '经济林',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: false,
            position: 'insideRight'
          }
        },
        data: [16512, 24536, 134723, 191380, 96897, 92449, 56548, 71325, 94820, 135584, 90546, 89942, 128692, 98541, 96593]
      }, {
        name: '防护林',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [16512, 24536, 134723, 191380, 96897, 92449, 56548, 71325, 94820, 135584, 90546, 89942, 128692, 98541, 96593]
      }, {
        name: '薪炭林',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: false,
            position: 'insideRight'
          }
        },
        data: [1012, 1424, 706, 2390, 2638, 738, 588, 589, 341, 954, 2298, 2356, 3309, 2948, 511]
      }]
    };
    myChart8.setOption(option8);
  }
);
//echart8 end
//echart9 start
require.config({
  paths: {
    echarts: 'http://echarts.baidu.com/build/dist'
  }
});
require(
  [
    'echarts',
    'echarts/chart/line', 'echarts/chart/bar', 'echarts/chart/scatter', 'echarts/chart/pie',
    'echarts/chart/chord', 'echarts/chart/map', 'echarts/chart/heatmap', 'echarts/chart/gauge',
    'echarts/chart/treemap', 'echarts/chart/venn', 'echarts/chart/tree'
  ],
  function(ec) {
    var myChart9 = ec.init(document.getElementById('Stage_echart9'));
    var labelRight = {
    normal: {
        position: 'right'
    }
	};
	var option9 = {
    title: {
        text: '新疆荒漠化土地面积变化示意图（单位：万平方公里）',
        subtext: '数据来自历年《中国荒漠化和沙化状况公报》',
        sublink: 'http://hmhfz.forestry.gov.cn/uploadfile/main/2015-12/file/2015-12-29-738809badf4b4d368821c3dd7b49e9ed.pdf'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type : 'value',
        position: 'top',
        splitLine: {lineStyle:{type:'dashed'}},
    },
    yAxis: {
        type : 'category',
        axisLine: {show: false},
        axisLabel: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
        data : ['2014', '2009', '2004', '1999']
    },
    series : [
        {
            name:'荒漠化土地面积变化',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}'
                }
            },
            data:[
                {value: -600, label: labelRight},
                {value: -400, label: labelRight},

                {value: -14200, label: labelRight},

                {value: 14500, label: labelRight}


            ]
        }
    ]
};
    myChart9.setOption(option9);
  }
);
//echart9 end
        });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${baerkashi}", "click", function(sym, e) {
        // 插入代码——当鼠标在此处单击
        sym.play("story1");
        sym.getSymbol("content_container1").play("story11");



      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1502, function(sym, e) {
        // 在此处插入代码
        sym.stop();

      });
      //Edge binding end





      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1062, function(sym, e) {
        // 在此处插入代码
        sym.getSymbol("content_container1").play();

      });
      //Edge binding end



      Symbol.bindElementAction(compId, symbolName, "${back}", "click", function(sym, e) {
        // 插入代码——当鼠标在此处单击

        // 从标签或特定时间开始播放时间轴。例如：
        // sym.play(500); 或 sym.play("myLabel");
        sym.play("all");

        sym.getSymbol("content_container1").play("orig");


      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2027, function(sym, e) {
        // 在此处插入代码
        sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${shamogonglu}", "click", function(sym, e) {
        // 插入代码——当鼠标在此处单击

        sym.play("story2-1");

        sym.getSymbol("content_container1").play("story22");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${board1}", "click", function(sym, e) {
        // 插入代码——当鼠标在此处单击
        sym.play();


      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2393, function(sym, e) {
        // 在此处插入代码
        sym.play("c21");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2587, function(sym, e) {
        // 在此处插入代码
        sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "click", function(sym, e) {
        // 插入代码——当鼠标在此处单击

        sym.play("story2-1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn4}", "click", function(sym, e) {
        // 插入代码——当鼠标在此处单击

        sym.play("c21");

      });
      //Edge binding end



      Symbol.bindElementAction(compId, symbolName, "${qingtuhu}", "click", function(sym, e) {
        // 插入代码——当鼠标在此处单击
        sym.play("story3-1");

        sym.getSymbol("content_container1").play("story33");



      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse17}", "mouseover", function(sym, e) {
        // 插入代码——当鼠标在此处单击
        sym.getSymbol("bigtime1").stop("tag17");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse16}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag16");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse15}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag15");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse14}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag14");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse13}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag13");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse12}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag12");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse11}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag11");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse10}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag10");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse9}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag9");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse8}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag8");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse7}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag7");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse6}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag6");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse5}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag5");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse4}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag4");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse3}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag3");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse2}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag2");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse1}", "mouseover", function(sym, e) {
        // 当鼠标光标划在对象上（悬停）时插入的代码将运行
        sym.getSymbol("bigtime1").stop("tag1");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn62}", "click", function(sym, e) {
        // 插入代码——当鼠标在此处单击

        sym.getSymbol("bigtime1").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn53}", "click", function(sym, e) {
        // 插入代码——当鼠标在此处单击
        sym.play("story3-1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8544, function(sym, e) {
        // 在此处插入代码
        sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8808, function(sym, e) {
        // 在此处插入代码
        sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9014, function(sym, e) {
        // 在此处插入代码
        sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
        // 在此处插入代码
        sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8053, function(sym, e) {
        // 在此处插入代码
        sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2130, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2207, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2279, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2345, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn5}", "click", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         sym.play("c31");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9296, function(sym, e) {
         // 在此处插入代码
         sym.play("c31");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub4}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         
         sym.play("c23");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub3}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         sym.play("c22");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub2}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         sym.play("c24");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub1}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         sym.play("c21");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub8}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击

         sym.play("c34");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub7}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         sym.play("c33");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub6}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         sym.play("c32");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub5}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         sym.play("c31");

      });
      //Edge binding end

    })("stage");
   //Edge symbol end:'stage'

  //=========================================================

  //Edge symbol: 'barner'
  (function(symbolName) {

  })("barner");
   //Edge symbol end:'barner'

  //=========================================================

  //Edge symbol: 'button1'
  (function(symbolName) {

  })("button1");
   //Edge symbol end:'button1'

  //=========================================================

  //Edge symbol: 'button_big_1'
  (function(symbolName) {
    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1281, function(sym, e) {
      // 在此处插入代码
      // 从标签或特定时间开始播放时间轴。例如：
      // sym.play(500); 或 sym.play("myLabel");
      sym.play(0);

    });
    //Edge binding end

    Symbol.bindElementAction(compId, symbolName, "${button1}", "click", function(sym, e) {

      sym.getComposition().getStage().play();

    });
    //Edge binding end

  })("button_big_1");
   //Edge symbol end:'button_big_1'

  //=========================================================

  //Edge symbol: 'content_container1'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19, function(sym, e) {
      // 在此处插入代码
      sym.stop();

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 814, function(sym, e) {
      sym.stop();

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 504, function(sym, e) {
      // 在此处插入代码
      sym.stop();

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 901, function(sym, e) {
      // 在此处插入代码
      sym.stop();

    });
    //Edge binding end

  })("content_container1");
   //Edge symbol end:'content_container1'

  //=========================================================

  //Edge symbol: 'Symbol_1'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
      sym.play(0);

    });
    //Edge binding end

  })("Symbol_1");
   //Edge symbol end:'Symbol_1'

  //=========================================================

  //Edge symbol: 'chartselect1'
  (function(symbolName) {

  })("chartselect1");
   //Edge symbol end:'chartselect1'

  //=========================================================

  //Edge symbol: 'content_container2'
  (function(symbolName) {

  })("content_container2");
   //Edge symbol end:'content_container2'

  //=========================================================

  //Edge symbol: 'content_contianer3'
  (function(symbolName) {

  })("content_contianer3");
   //Edge symbol end:'content_contianer3'

  //=========================================================

  //Edge symbol: 'Symbol_2'
  (function(symbolName) {

  })("Symbol_2");
   //Edge symbol end:'Symbol_2'

  //=========================================================

  //Edge symbol: 'Symbol_3'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
      // 在此处插入代码
      sym.play(0);

    });
    //Edge binding end

  })("Symbol_3");
   //Edge symbol end:'Symbol_3'

  //=========================================================

  //Edge symbol: 'btn3'
  (function(symbolName) {

  })("btn3");
   //Edge symbol end:'btn3'

  //=========================================================

  //Edge symbol: 'btn4'
  (function(symbolName) {

  })("btn4");
   //Edge symbol end:'btn4'

  //=========================================================

  //Edge symbol: 'Symbol_4'
  (function(symbolName) {

  })("Symbol_4");
   //Edge symbol end:'Symbol_4'

  //=========================================================

  //Edge symbol: 'btn5'
  (function(symbolName) {

  })("btn5");
   //Edge symbol end:'btn5'

  //=========================================================

  //Edge symbol: 'bigtime1'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
      // 在此处插入代码
      sym.stop();

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
      // 在此处插入代码
      sym.stop();

    });
    //Edge binding end

  })("bigtime1");
   //Edge symbol end:'bigtime1'

  //=========================================================

  //Edge symbol: 'timeline'
  (function(symbolName) {









  })("timeline");
   //Edge symbol end:'timeline'

  //=========================================================

  //Edge symbol: 'btn6'
  (function(symbolName) {

  })("btn6");
   //Edge symbol end:'btn6'

   //=========================================================

   //Edge symbol: 'tub1'
   (function(symbolName) {

      Symbol.bindElementAction(compId, symbolName, "${csel1}", "mouseover", function(sym, e) {
        // 插入代码——当鼠标在此处单击
        sym.getSymbol("bigtime1").stop("tag17");

      });
      //Edge binding end

   })("tub1");
   //Edge symbol end:'tub1'

   //=========================================================

   //Edge symbol: 'tub2'
   (function(symbolName) {

   })("tub2");
   //Edge symbol end:'tub2'

   //=========================================================

   //Edge symbol: 'tub3'
   (function(symbolName) {

   })("tub3");
   //Edge symbol end:'tub3'

   //=========================================================

   //Edge symbol: 'tub4'
   (function(symbolName) {

   })("tub4");
   //Edge symbol end:'tub4'

   //=========================================================

   //Edge symbol: 'tub5'
   (function(symbolName) {

   })("tub5");
   //Edge symbol end:'tub5'

   //=========================================================

   //Edge symbol: 'tub6'
   (function(symbolName) {

   })("tub6");
   //Edge symbol end:'tub6'

   //=========================================================

   //Edge symbol: 'tub7'
   (function(symbolName) {

   })("tub7");
   //Edge symbol end:'tub7'

   //=========================================================

   //Edge symbol: 'tub8'
   (function(symbolName) {

   })("tub8");
   //Edge symbol end:'tub8'

   //=========================================================
   
   //Edge symbol: 'minqin'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${tub7Copy}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         
         sym.getComposition().getStage().play("c33");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub6Copy}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         
         sym.getComposition().getStage().play("c32");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub5Copy}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         
         sym.getComposition().getStage().play("c31");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub8Copy}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         
         sym.getComposition().getStage().play("c34");

      });
      //Edge binding end

   })("minqin");
   //Edge symbol end:'minqin'

   //=========================================================
   
   //Edge symbol: 'xinjiang'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${tub4Copy2}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         
         sym.getComposition().getStage().play("c23");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub102}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         
         sym.getComposition().getStage().play("c21");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub101}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         sym.getComposition().getStage().play("c24");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tub103}", "mouseover", function(sym, e) {
         // 插入代码——当鼠标在此处单击
         
         sym.getComposition().getStage().play("c22");

      });
      //Edge binding end

   })("xinjiang");
   //Edge symbol end:'xinjiang'

   //=========================================================
   
   //Edge symbol: 'jianzao'
   (function(symbolName) {   
   
   })("jianzao");
   //Edge symbol end:'jianzao'

   //=========================================================
   
   //Edge symbol: '预载'
   (function(symbolName) {   
   
   })("预载");
   //Edge symbol end:'预载'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-225424192");
