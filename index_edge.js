/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"echarts.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'img1',
                            type: 'image',
                            rect: ['0px', '65px', '1511px', '831px', 'auto', 'auto'],
                            opacity: '0.3008130192756653',
                            fill: ["rgba(0,0,0,0)",'img/img1.png','0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['945px', '79px', '408px', '689px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.48)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'content_container1',
                            symbolName: 'content_container1',
                            type: 'rect',
                            rect: ['945px', '79px', '420px', '689', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            boxShadow: ["", 0, 3, 25, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'barnerCopy',
                            symbolName: 'barner',
                            type: 'rect',
                            rect: ['29.9%', '2.9%', '550', '32', 'auto', 'auto'],
                            boxShadow: ["", 3, 3, 13, 0, "rgba(0,0,0,0.65098)"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(63,63,63,0.82)", 2, 2, 2],
                            transform: [[],[],[],['2.48364','2.48364']]
                        },
                        {
                            id: 'iconfont-huanbao2Copy',
                            type: 'image',
                            rect: ['6px', '5px', '62px', '60px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'img/iconfont-huanbao.png','0px','0px']
                        },
                        {
                            id: 'titlebarner2Copy',
                            type: 'image',
                            rect: ['109px', '4px', '717px', '62px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'img/titlebarner.png','0px','0px']
                        },
                        {
                            id: 'baerkashi',
                            type: 'group',
                            rect: ['138px', '143px', '296px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'iconfont-diliweizhi2',
                                type: 'image',
                                rect: ['0px', '0px', '42px', '42px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",'img/iconfont-diliweizhi.png','0px','0px']
                            },
                            {
                                id: 'title4',
                                type: 'image',
                                rect: ['47px', '0px', '230px', '48px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",'img/title4.png','0px','0px']
                            }]
                        },
                        {
                            id: 'e1bkg',
                            type: 'rect',
                            rect: ['37px', '189px', '850px', '457px', 'auto', 'auto'],
                            borderRadius: ["26px", "26px", "26px", "26px 26px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "echart1"
                        },
                        {
                            id: 'echart1',
                            type: 'rect',
                            rect: ['37px', '189px', '850px', '457px', 'auto', 'auto'],
                            borderRadius: ["26px", "26px", "26px", "26px 26px"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "echart1"
                        },
                        {
                            id: 'echart2',
                            type: 'rect',
                            rect: ['36px', '189px', '850px', '457px', 'auto', 'auto'],
                            borderRadius: ["26px", "26px", "26px", "26px 26px"],
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "echart2"
                        },
                        {
                            id: 'echart3',
                            display: 'none',
                            type: 'rect',
                            rect: ['36px', '189px', '850px', '457px', 'auto', 'auto'],
                            borderRadius: ["26px", "26px", "26px", "26px 26px"],
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "echart3"
                        },
                        {
                            id: 'echart4',
                            display: 'none',
                            type: 'rect',
                            rect: ['36px', '189px', '850px', '457px', 'auto', 'auto'],
                            borderRadius: ["26px", "26px", "26px", "26px 26px"],
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "echart4"
                        },
                        {
                            id: 'echart5',
                            display: 'none',
                            type: 'rect',
                            rect: ['36px', '189px', '850px', '457px', 'auto', 'auto'],
                            borderRadius: ["26px", "26px", "26px", "26px 26px"],
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "echart5"
                        },
                        {
                            id: 'chartselect1',
                            symbolName: 'chartselect1',
                            type: 'rect',
                            rect: ['296', '681', '315', '42', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'echart6',
                            display: 'none',
                            type: 'rect',
                            rect: ['36px', '189px', '850px', '457px', 'auto', 'auto'],
                            borderRadius: ["26px", "26px", "26px", "26px 26px"],
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "echart6"
                        },
                        {
                            id: 'echart7',
                            display: 'none',
                            type: 'rect',
                            rect: ['36px', '189px', '850px', '457px', 'auto', 'auto'],
                            borderRadius: ["26px", "26px", "26px", "26px 26px"],
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "echart7"
                        },
                        {
                            id: 'echart8',
                            display: 'none',
                            type: 'rect',
                            rect: ['36px', '189px', '850px', '457px', 'auto', 'auto'],
                            borderRadius: ["26px", "26px", "26px", "26px 26px"],
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "echart8"
                        },
                        {
                            id: 'echart9',
                            display: 'none',
                            type: 'rect',
                            rect: ['36px', '189px', '850px', '457px', 'auto', 'auto'],
                            borderRadius: ["26px", "26px", "26px", "26px 26px"],
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "echart9"
                        },
                        {
                            id: 'back',
                            type: 'image',
                            rect: ['748px', '120px', '100px', '33px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'img/back.png','0px','0px']
                        },
                        {
                            id: 'shamogonglu',
                            display: 'block',
                            type: 'group',
                            rect: ['5px', '-63px', '533px', '237px', 'auto', 'auto'],
                            autoOrient: false,
                            clip: 'rect(160px 533px 237px 228px)',
                            opacity: '0',
                            c: [
                            {
                                id: 'title22',
                                type: 'image',
                                rect: ['336px', '170px', '144px', '29px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",'img/title2.png','0px','0px'],
                                transform: [[],[],[],['1.77608','1.77608']]
                            },
                            {
                                id: 'iconfont-diliweizhi',
                                type: 'image',
                                rect: ['238px', '160px', '42px', '42px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",'img/iconfont-diliweizhi.png','0px','0px']
                            }]
                        },
                        {
                            id: 'board1',
                            symbolName: 'Symbol_2',
                            display: 'block',
                            type: 'rect',
                            rect: ['-700px', '399px', '627', '324', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'qingtuhu',
                            symbolName: 'Symbol_4',
                            display: 'block',
                            type: 'rect',
                            rect: ['670px', '226px', '206', '42', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'btn3',
                            symbolName: 'btn3',
                            display: 'none',
                            type: 'rect',
                            rect: ['37px', '669px', '120px', '42', 'auto', 'auto']
                        },
                        {
                            id: 'btn4',
                            symbolName: 'btn4',
                            display: 'none',
                            type: 'rect',
                            rect: ['755px', '669px', '120', '42', 'auto', 'auto']
                        },
                        {
                            id: 'btn5',
                            symbolName: 'btn4',
                            display: 'none',
                            type: 'rect',
                            rect: ['748px', '662px', '120', '42', 'auto', 'auto']
                        },
                        {
                            id: 'btn53',
                            symbolName: 'btn5',
                            display: 'none',
                            type: 'rect',
                            rect: ['743px', '659px', '120px', '42px', 'auto', 'auto']
                        },
                        {
                            id: 'bigtime1',
                            symbolName: 'bigtime1',
                            display: 'none',
                            type: 'rect',
                            rect: ['62', '194', '800', '400', 'auto', 'auto'],
                            opacity: '1',
                            userClass: "bigtime1"
                        },
                        {
                            id: 'timeline',
                            display: 'none',
                            type: 'group',
                            rect: ['102px', '609px', '732', '21', 'auto', 'auto'],
                            opacity: '1',
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['8px', '9px', '717px', '3px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)",[270,[['rgba(44,50,139,1.00)',0],['rgba(4,91,17,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse1',
                                type: 'ellipse',
                                rect: ['0px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse2',
                                type: 'ellipse',
                                rect: ['47px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse3',
                                type: 'ellipse',
                                rect: ['92px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse4',
                                type: 'ellipse',
                                rect: ['134px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse5',
                                type: 'ellipse',
                                rect: ['181px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse6',
                                type: 'ellipse',
                                rect: ['224px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse7',
                                type: 'ellipse',
                                rect: ['269px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse8',
                                type: 'ellipse',
                                rect: ['315px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse9',
                                type: 'ellipse',
                                rect: ['359px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse10',
                                type: 'ellipse',
                                rect: ['402px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse11',
                                type: 'ellipse',
                                rect: ['445px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse12',
                                type: 'ellipse',
                                rect: ['491px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse13',
                                type: 'ellipse',
                                rect: ['538px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse14',
                                type: 'ellipse',
                                rect: ['585px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse15',
                                type: 'ellipse',
                                rect: ['630px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse16',
                                type: 'ellipse',
                                rect: ['672px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Ellipse17',
                                type: 'ellipse',
                                rect: ['712px', '0px', '20px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)",[50,50,true,'farthest-corner',[['rgba(13,237,13,0.73)',0],['rgba(21,116,21,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "elipse17",
                                boxShadow: ["", 1, 1, 18, 0, "rgba(0,0,0,0.65098)"]
                            }]
                        },
                        {
                            id: 'story2-tubgp',
                            display: 'none',
                            type: 'group',
                            rect: ['148px', '674px', '441', '21', 'auto', 'auto'],
                            c: [
                            {
                                id: 'tub1',
                                symbolName: 'tub1',
                                type: 'rect',
                                rect: ['0px', '0px', '61', '21', 'auto', 'auto']
                            },
                            {
                                id: 'tub2',
                                symbolName: 'tub2',
                                type: 'rect',
                                rect: ['138px', '0px', '61', '21', 'auto', 'auto']
                            },
                            {
                                id: 'tub3',
                                symbolName: 'tub3',
                                type: 'rect',
                                rect: ['263px', '0px', '65', '21', 'auto', 'auto']
                            },
                            {
                                id: 'tub4',
                                symbolName: 'tub4',
                                type: 'rect',
                                rect: ['379px', '0px', '62', '21', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'story3tubgp',
                            display: 'none',
                            type: 'group',
                            rect: ['193px', '680', '417px', '21px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'tub5',
                                symbolName: 'tub5',
                                type: 'rect',
                                rect: ['-57px', '0px', '62', '21', 'auto', 'auto']
                            },
                            {
                                id: 'tub6',
                                symbolName: 'tub6',
                                type: 'rect',
                                rect: ['55px', '0px', '62', '21', 'auto', 'auto']
                            },
                            {
                                id: 'tub7',
                                symbolName: 'tub7',
                                type: 'rect',
                                rect: ['233px', '0px', '62', '21', 'auto', 'auto']
                            },
                            {
                                id: 'tub8',
                                symbolName: 'tub8',
                                type: 'rect',
                                rect: ['355px', '0px', '62', '21', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'btn62',
                            symbolName: 'btn6',
                            display: 'none',
                            type: 'rect',
                            rect: ['391', '662px', '120px', '28px', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'jianzao',
                            symbolName: 'jianzao',
                            display: 'none',
                            type: 'rect',
                            rect: ['67', '221', '792', '373', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'F11',
                            type: 'image',
                            rect: ['1160px', '23px', '234px', '42px', 'auto', 'auto'],
                            clip: 'rect(0px 161px 34px 0px)',
                            fill: ["rgba(0,0,0,0)",'img/F11.png','0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1366px', '768px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 18024,
                    autoPlay: true,
                    labels: {
                        "all": 0,
                        "story1": 1062,
                        "story2-1": 1660,
                        "story2-2": 2093,
                        "c21": 2112,
                        "c22": 2181,
                        "c23": 2248,
                        "c24": 2326,
                        "story3-1": 2430,
                        "story3-2": 8078,
                        "c31": 8500,
                        "c32": 8720,
                        "c33": 8958,
                        "c34": 9197
                    },
                    data: [
                        [
                            "eid10114",
                            "display",
                            0,
                            0,
                            "linear",
                            "${echart5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10099",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${echart5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10116",
                            "display",
                            9024,
                            0,
                            "linear",
                            "${echart5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10100",
                            "display",
                            17176,
                            0,
                            "linear",
                            "${echart5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10101",
                            "display",
                            17929,
                            0,
                            "linear",
                            "${echart5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10102",
                            "display",
                            18024,
                            0,
                            "linear",
                            "${echart5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1447",
                            "opacity",
                            0,
                            84,
                            "linear",
                            "${board1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1442",
                            "opacity",
                            750,
                            263,
                            "linear",
                            "${board1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1419",
                            "boxShadow.blur",
                            961,
                            0,
                            "linear",
                            "${content_container1}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid10803",
                            "top",
                            2532,
                            0,
                            "linear",
                            "${btn5}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1528",
                            "display",
                            1632,
                            0,
                            "linear",
                            "${baerkashi}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1118",
                            "display",
                            3330,
                            0,
                            "linear",
                            "${baerkashi}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1119",
                            "display",
                            3395,
                            0,
                            "linear",
                            "${baerkashi}",
                            'block',
                            'none'
                        ],
                        [
                            "eid317",
                            "opacity",
                            455,
                            165,
                            "linear",
                            "${baerkashi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "height",
                            345,
                            0,
                            "linear",
                            "${iconfont-huanbao2Copy}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid1437",
                            "top",
                            926,
                            0,
                            "linear",
                            "${board1}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid1440",
                            "top",
                            1013,
                            0,
                            "linear",
                            "${board1}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid10801",
                            "top",
                            2104,
                            0,
                            "linear",
                            "${story2-tubgp}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid967",
                            "display",
                            1632,
                            0,
                            "linear",
                            "${chartselect1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2530",
                            "display",
                            0,
                            0,
                            "linear",
                            "${timeline}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2529",
                            "display",
                            2391,
                            0,
                            "linear",
                            "${timeline}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2528",
                            "display",
                            2441,
                            0,
                            "linear",
                            "${timeline}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2527",
                            "display",
                            2658,
                            0,
                            "linear",
                            "${timeline}",
                            'block',
                            'block'
                        ],
                        [
                            "eid9941",
                            "display",
                            8074,
                            0,
                            "linear",
                            "${timeline}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9942",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${timeline}",
                            'none',
                            'none'
                        ],
                        [
                            "eid532",
                            "top",
                            1062,
                            450,
                            "linear",
                            "${baerkashi}",
                            '143px',
                            '97px'
                        ],
                        [
                            "eid1665",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1656",
                            "display",
                            2391,
                            0,
                            "linear",
                            "${btn5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1655",
                            "display",
                            2441,
                            0,
                            "linear",
                            "${btn5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10793",
                            "display",
                            8075,
                            0,
                            "linear",
                            "${btn5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid930",
                            "display",
                            1062,
                            0,
                            "linear",
                            "${back}",
                            'block',
                            'none'
                        ],
                        [
                            "eid931",
                            "display",
                            1107,
                            0,
                            "linear",
                            "${back}",
                            'none',
                            'block'
                        ],
                        [
                            "eid991",
                            "display",
                            1632,
                            0,
                            "linear",
                            "${back}",
                            'block',
                            'none'
                        ],
                        [
                            "eid992",
                            "display",
                            1722,
                            0,
                            "linear",
                            "${back}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10047",
                            "display",
                            0,
                            0,
                            "linear",
                            "${echart4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10040",
                            "display",
                            8176,
                            0,
                            "linear",
                            "${echart4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10049",
                            "display",
                            8849,
                            0,
                            "linear",
                            "${echart4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10051",
                            "display",
                            9024,
                            0,
                            "linear",
                            "${echart4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10080",
                            "display",
                            17137,
                            0,
                            "linear",
                            "${echart4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10081",
                            "display",
                            17622,
                            0,
                            "linear",
                            "${echart4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10082",
                            "display",
                            17662,
                            0,
                            "linear",
                            "${echart4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10083",
                            "display",
                            17795,
                            0,
                            "linear",
                            "${echart4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10084",
                            "display",
                            17845,
                            0,
                            "linear",
                            "${echart4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1420",
                            "boxShadow.blur",
                            961,
                            0,
                            "linear",
                            "${barnerCopy}",
                            '13px',
                            '13px'
                        ],
                        [
                            "eid10178",
                            "display",
                            0,
                            0,
                            "linear",
                            "${echart9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10174",
                            "display",
                            2092,
                            0,
                            "linear",
                            "${echart9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10189",
                            "display",
                            2326,
                            0,
                            "linear",
                            "${echart9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10190",
                            "display",
                            2373,
                            0,
                            "linear",
                            "${echart9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1577",
                            "top",
                            1788,
                            0,
                            "linear",
                            "${btn4}",
                            '669px',
                            '669px'
                        ],
                        [
                            "eid588",
                            "opacity",
                            1217,
                            285,
                            "linear",
                            "${echart1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10802",
                            "left",
                            2532,
                            0,
                            "linear",
                            "${btn5}",
                            '748px',
                            '748px'
                        ],
                        [
                            "eid10179",
                            "display",
                            0,
                            0,
                            "linear",
                            "${echart8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10175",
                            "display",
                            2092,
                            0,
                            "linear",
                            "${echart8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10187",
                            "display",
                            2240,
                            0,
                            "linear",
                            "${echart8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10188",
                            "display",
                            2297,
                            0,
                            "linear",
                            "${echart8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10856",
                            "top",
                            2685,
                            0,
                            "linear",
                            "${btn62}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1697",
                            "display",
                            500,
                            0,
                            "linear",
                            "${qingtuhu}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1698",
                            "display",
                            1062,
                            0,
                            "linear",
                            "${qingtuhu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1699",
                            "display",
                            2391,
                            0,
                            "linear",
                            "${qingtuhu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1700",
                            "display",
                            2432,
                            0,
                            "linear",
                            "${qingtuhu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10180",
                            "display",
                            0,
                            0,
                            "linear",
                            "${echart7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10176",
                            "display",
                            2092,
                            0,
                            "linear",
                            "${echart7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10184",
                            "display",
                            2177,
                            0,
                            "linear",
                            "${echart7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10185",
                            "display",
                            2194,
                            0,
                            "linear",
                            "${echart7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10186",
                            "display",
                            2240,
                            0,
                            "linear",
                            "${echart7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9957",
                            "opacity",
                            8054,
                            0,
                            "linear",
                            "${echart2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1498",
                            "width",
                            961,
                            0,
                            "linear",
                            "${content_container1}",
                            '420px',
                            '420px'
                        ],
                        [
                            "eid929",
                            "opacity",
                            1062,
                            440,
                            "linear",
                            "${back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid993",
                            "opacity",
                            1722,
                            0,
                            "linear",
                            "${back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid531",
                            "left",
                            1062,
                            450,
                            "linear",
                            "${baerkashi}",
                            '138px',
                            '37px'
                        ],
                        [
                            "eid10044",
                            "left",
                            16230,
                            0,
                            "linear",
                            "${echart4}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid1666",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1585",
                            "display",
                            1632,
                            0,
                            "linear",
                            "${btn4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1584",
                            "display",
                            1660,
                            0,
                            "linear",
                            "${btn4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1596",
                            "display",
                            2040,
                            0,
                            "linear",
                            "${btn4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10799",
                            "left",
                            1788,
                            316,
                            "linear",
                            "${btn3}",
                            '37px',
                            '748px'
                        ],
                        [
                            "eid1441",
                            "left",
                            750,
                            263,
                            "linear",
                            "${board1}",
                            '48px',
                            '-700px'
                        ],
                        [
                            "eid1492",
                            "left",
                            961,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '945px',
                            '945px'
                        ],
                        [
                            "eid10290",
                            "display",
                            0,
                            0,
                            "linear",
                            "${story2-tubgp}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10289",
                            "display",
                            2074,
                            0,
                            "linear",
                            "${story2-tubgp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10296",
                            "display",
                            2394,
                            0,
                            "linear",
                            "${story2-tubgp}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1412",
                            "background-color",
                            1722,
                            0,
                            "linear",
                            "${e1bkg}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid10780",
                            "display",
                            0,
                            0,
                            "linear",
                            "${jianzao}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10779",
                            "display",
                            1634,
                            0,
                            "linear",
                            "${jianzao}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10785",
                            "display",
                            2036,
                            0,
                            "linear",
                            "${jianzao}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1756",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn53}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1754",
                            "display",
                            2391,
                            0,
                            "linear",
                            "${btn53}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1755",
                            "display",
                            8075,
                            0,
                            "linear",
                            "${btn53}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10800",
                            "left",
                            2104,
                            0,
                            "linear",
                            "${story2-tubgp}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid1405",
                            "display",
                            1062,
                            0,
                            "linear",
                            "${shamogonglu}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1406",
                            "display",
                            1107,
                            0,
                            "linear",
                            "${shamogonglu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1404",
                            "display",
                            1502,
                            0,
                            "linear",
                            "${shamogonglu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1597",
                            "display",
                            2391,
                            0,
                            "linear",
                            "${shamogonglu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9910",
                            "opacity",
                            2469,
                            0,
                            "linear",
                            "${bigtime1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1102",
                            "opacity",
                            1217,
                            151,
                            "linear",
                            "${e1bkg}",
                            '0.000000',
                            '0.75'
                        ],
                        [
                            "eid1371",
                            "opacity",
                            1502,
                            130,
                            "linear",
                            "${e1bkg}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid1372",
                            "opacity",
                            1632,
                            176,
                            "linear",
                            "${e1bkg}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid10388",
                            "opacity",
                            2408,
                            0,
                            "linear",
                            "${e1bkg}",
                            '0.75',
                            '0.75'
                        ],
                        [
                            "eid9940",
                            "opacity",
                            8076,
                            0,
                            "linear",
                            "${timeline}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1581",
                            "left",
                            1788,
                            0,
                            "linear",
                            "${btn4}",
                            '755px',
                            '755px'
                        ],
                        [
                            "eid2525",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn62}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2524",
                            "display",
                            2391,
                            0,
                            "linear",
                            "${btn62}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2526",
                            "display",
                            2441,
                            0,
                            "linear",
                            "${btn62}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2522",
                            "display",
                            2658,
                            0,
                            "linear",
                            "${btn62}",
                            'block',
                            'block'
                        ],
                        [
                            "eid9944",
                            "display",
                            8074,
                            0,
                            "linear",
                            "${btn62}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9945",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${btn62}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1103",
                            "display",
                            0,
                            0,
                            "linear",
                            "${e1bkg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1104",
                            "display",
                            1217,
                            0,
                            "linear",
                            "${e1bkg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1106",
                            "display",
                            1632,
                            0,
                            "linear",
                            "${e1bkg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10335",
                            "display",
                            2428,
                            0,
                            "linear",
                            "${e1bkg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10336",
                            "display",
                            2476,
                            0,
                            "linear",
                            "${e1bkg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10196",
                            "display",
                            0,
                            0,
                            "linear",
                            "${echart3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10198",
                            "display",
                            8608,
                            0,
                            "linear",
                            "${echart3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10199",
                            "display",
                            8848,
                            0,
                            "linear",
                            "${echart3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1719",
                            "opacity",
                            500,
                            64,
                            "linear",
                            "${qingtuhu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid994",
                            "display",
                            0,
                            0,
                            "linear",
                            "${echart1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid995",
                            "display",
                            1062,
                            0,
                            "linear",
                            "${echart1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1362",
                            "display",
                            1217,
                            0,
                            "linear",
                            "${echart1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid965",
                            "display",
                            1632,
                            0,
                            "linear",
                            "${echart1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1444",
                            "display",
                            0,
                            0,
                            "linear",
                            "${board1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1443",
                            "display",
                            961,
                            0,
                            "linear",
                            "${board1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1435",
                            "display",
                            1013,
                            0,
                            "linear",
                            "${board1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1483",
                            "left",
                            0,
                            0,
                            "linear",
                            "${content_container1}",
                            '945px',
                            '945px'
                        ],
                        [
                            "eid10615",
                            "left",
                            8798,
                            0,
                            "linear",
                            "${tub5}",
                            '-57px',
                            '-57px'
                        ],
                        [
                            "eid10299",
                            "display",
                            0,
                            0,
                            "linear",
                            "${story3tubgp}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10297",
                            "display",
                            8052,
                            0,
                            "linear",
                            "${story3tubgp}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10298",
                            "display",
                            8070,
                            0,
                            "linear",
                            "${story3tubgp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10181",
                            "display",
                            0,
                            0,
                            "linear",
                            "${echart6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10177",
                            "display",
                            2092,
                            0,
                            "linear",
                            "${echart6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10182",
                            "display",
                            2121,
                            0,
                            "linear",
                            "${echart6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10183",
                            "display",
                            2176,
                            0,
                            "linear",
                            "${echart6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9954",
                            "display",
                            0,
                            0,
                            "linear",
                            "${echart2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9956",
                            "display",
                            8054,
                            0,
                            "linear",
                            "${echart2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9969",
                            "display",
                            8067,
                            0,
                            "linear",
                            "${echart2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10045",
                            "display",
                            8569,
                            0,
                            "linear",
                            "${echart2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10046",
                            "display",
                            8608,
                            0,
                            "linear",
                            "${echart2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1763",
                            "width",
                            3000,
                            0,
                            "linear",
                            "${btn53}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid9968",
                            "left",
                            8054,
                            0,
                            "linear",
                            "${echart2}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid10783",
                            "opacity",
                            1634,
                            2,
                            "linear",
                            "${jianzao}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10784",
                            "opacity",
                            1636,
                            202,
                            "linear",
                            "${jianzao}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1706",
                            "top",
                            2432,
                            135,
                            "linear",
                            "${qingtuhu}",
                            '226px',
                            '116px'
                        ],
                        [
                            "eid1667",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1583",
                            "display",
                            1632,
                            0,
                            "linear",
                            "${btn3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1582",
                            "display",
                            2058,
                            0,
                            "linear",
                            "${btn3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1594",
                            "display",
                            2391,
                            0,
                            "linear",
                            "${btn3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1078",
                            "top",
                            1632,
                            395,
                            "linear",
                            "${shamogonglu}",
                            '123px',
                            '-63px'
                        ],
                        [
                            "eid340",
                            "opacity",
                            0,
                            410,
                            "linear",
                            "${img1}",
                            '0.300813',
                            '0.77235771544715'
                        ],
                        [
                            "eid1579",
                            "top",
                            1788,
                            0,
                            "linear",
                            "${btn3}",
                            '669px',
                            '669px'
                        ],
                        [
                            "eid1767",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bigtime1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1768",
                            "display",
                            2391,
                            0,
                            "linear",
                            "${bigtime1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1769",
                            "display",
                            2515,
                            0,
                            "linear",
                            "${bigtime1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9946",
                            "display",
                            8073,
                            0,
                            "linear",
                            "${bigtime1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9947",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${bigtime1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "width",
                            345,
                            0,
                            "linear",
                            "${iconfont-huanbao2Copy}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid1570",
                            "left",
                            1788,
                            0,
                            "linear",
                            "${btn42}",
                            '0',
                            ''
                        ],
                        [
                            "eid1705",
                            "left",
                            2432,
                            135,
                            "linear",
                            "${qingtuhu}",
                            '670px',
                            '43px'
                        ],
                        [
                            "eid556",
                            "opacity",
                            1062,
                            445,
                            "linear",
                            "${chartselect1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10616",
                            "left",
                            8798,
                            0,
                            "linear",
                            "${tub6}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid1023",
                            "opacity",
                            620,
                            130,
                            "linear",
                            "${shamogonglu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1059",
                            "opacity",
                            1062,
                            440,
                            "linear",
                            "${shamogonglu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1063",
                            "opacity",
                            1557,
                            75,
                            "linear",
                            "${shamogonglu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1077",
                            "left",
                            1632,
                            395,
                            "linear",
                            "${shamogonglu}",
                            '6px',
                            '-207px'
                        ],
                        [
                            "eid10043",
                            "opacity",
                            16230,
                            0,
                            "linear",
                            "${echart4}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "barner": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '550px', '32px', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '0']],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(23,23,23,1.00)', 'solid'],
                            cursor: 'context-menu',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '550px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16289",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16290",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16291",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16292",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16293",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "button1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.51203', '0.51203']],
                            id: 'text2',
                            type: 'image',
                            rect: ['-313px', '-393px', '414px', '126px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/text2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '230px', '92px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "button_big_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            userClass: 'btn_1',
                            id: 'button1',
                            symbolName: 'button1',
                            rect: ['223px', '371px', '230', '92', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '230px', '92px']
                        }
                    }
                },
                timeline: {
                    duration: 1281,
                    autoPlay: true,
                    data: [
                        [
                            "eid837",
                            "left",
                            0,
                            655,
                            "linear",
                            "${button1}",
                            '223px',
                            '291px'
                        ],
                        [
                            "eid838",
                            "left",
                            655,
                            626,
                            "linear",
                            "${button1}",
                            '291px',
                            '223px'
                        ],
                        [
                            "eid816",
                            "top",
                            0,
                            0,
                            "linear",
                            "${button1}",
                            '371px',
                            '371px'
                        ],
                        [
                            "eid817",
                            "top",
                            1281,
                            0,
                            "linear",
                            "${button1}",
                            '371px',
                            '371px'
                        ]
                    ]
                }
            },
            "content_container1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'titleright1',
                            opacity: '0',
                            rect: ['-25px', '78px', '411px', '587px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/titleright1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'textright1',
                            opacity: '0',
                            rect: ['13px', '21px', '130px', '43px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/textright1.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            overflow: 'scroll',
                            id: 'Group9',
                            rect: ['0', '-5', '420px', '688px', 'auto', 'auto'],
                            display: 'none',
                            c: [
                            {
                                type: 'image',
                                rect: ['0px', '0px', '390px', '4527px', 'auto', 'auto'],
                                id: '_3',
                                opacity: '1',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'img/hs.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            overflow: 'scroll',
                            id: 'Group7',
                            rect: ['0', '0', '420px', '688px', 'auto', 'auto'],
                            display: 'none',
                            c: [
                            {
                                rect: ['0', '0', '0', '0', 'auto', 'auto'],
                                id: 'xinjiang',
                                symbolName: 'xinjiang',
                                type: 'rect'
                            }]
                        },
                        {
                            type: 'group',
                            overflow: 'scroll',
                            id: 'Group',
                            rect: ['0', '0', '420px', '688px', 'auto', 'auto'],
                            display: 'block',
                            c: [
                            {
                                rect: ['0', '0', '0', '0', 'auto', 'auto'],
                                id: 'minqin',
                                symbolName: 'minqin',
                                type: 'rect'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '408px', '689px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "orig": 0,
                        "story11": 99,
                        "story22": 519,
                        "story33": 845
                    },
                    data: [
                        [
                            "eid1476",
                            "width",
                            347,
                            0,
                            "linear",
                            "${Group9}",
                            '420px',
                            '420px'
                        ],
                        [
                            "eid1264",
                            "height",
                            221,
                            0,
                            "linear",
                            "${Group9}",
                            '688px',
                            '688px'
                        ],
                        [
                            "eid1350",
                            "opacity",
                            0,
                            19,
                            "linear",
                            "${textright1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid728",
                            "opacity",
                            19,
                            75,
                            "linear",
                            "${textright1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1351",
                            "opacity",
                            0,
                            19,
                            "linear",
                            "${titleright1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid726",
                            "opacity",
                            19,
                            75,
                            "linear",
                            "${titleright1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1275",
                            "display",
                            19,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1274",
                            "display",
                            94,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1273",
                            "display",
                            108,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1251",
                            "display",
                            519,
                            0,
                            "linear",
                            "${_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1261",
                            "display",
                            19,
                            0,
                            "linear",
                            "${Group7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1260",
                            "display",
                            504,
                            0,
                            "linear",
                            "${Group7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1262",
                            "display",
                            519,
                            0,
                            "linear",
                            "${Group7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1742",
                            "display",
                            814,
                            0,
                            "linear",
                            "${Group7}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1743",
                            "display",
                            845,
                            0,
                            "linear",
                            "${Group7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1270",
                            "display",
                            19,
                            0,
                            "linear",
                            "${Group9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1271",
                            "display",
                            94,
                            0,
                            "linear",
                            "${Group9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1272",
                            "display",
                            108,
                            0,
                            "linear",
                            "${Group9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1263",
                            "display",
                            517,
                            0,
                            "linear",
                            "${Group9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid731",
                            "opacity",
                            94,
                            295,
                            "linear",
                            "${_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9918",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9917",
                            "display",
                            517,
                            0,
                            "linear",
                            "${Group}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9919",
                            "display",
                            846,
                            0,
                            "linear",
                            "${Group}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bkg1',
                            opacity: '1',
                            rect: ['0px', '0px', '1939px', '1091px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/bkg1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1646px', '926px']
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: true,
                    data: [
                        [
                            "eid265",
                            "top",
                            0,
                            4920,
                            "linear",
                            "${bkg1}",
                            '0px',
                            '-137px'
                        ],
                        [
                            "eid278",
                            "top",
                            4920,
                            4080,
                            "linear",
                            "${bkg1}",
                            '-137px',
                            '-137px'
                        ],
                        [
                            "eid284",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bkg1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid263",
                            "left",
                            0,
                            4920,
                            "linear",
                            "${bkg1}",
                            '0px',
                            '-35px'
                        ],
                        [
                            "eid277",
                            "left",
                            4920,
                            4080,
                            "linear",
                            "${bkg1}",
                            '-35px',
                            '0px'
                        ]
                    ]
                }
            },
            "chartselect1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '315px', '42px', 'auto', 'auto'],
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            fill: ['rgba(38,67,69,1.00)'],
                            id: 'RoundRect3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            rect: ['6px', '7px', '303px', '27px', 'auto', 'auto'],
                            id: 'chart1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'img/chart1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '315px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "content_container2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Image2',
                            type: 'image',
                            rect: ['0px', '0px', '390px', '4527px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/%E5%93%88%E8%90%A8%E5%85%8B%E6%96%AF%E5%9D%A6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400px', '4643px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "content_contianer3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['958px', '79px', '408px', '689px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'rect2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.48)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '627px', '324px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.50)'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 3, 3, 40, 5, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            rect: ['32px', '13px', '152px', '50px', 'auto', 'auto'],
                            id: 'textright1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'img/textright1.png', '0px', '0px']
                        },
                        {
                            rect: ['56px', '75px', '514px', '174px', 'auto', 'auto'],
                            id: 'text1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'img/text1.png', '0px', '0px']
                        },
                        {
                            rect: ['184', '261', '141', '50', 'auto', 'auto'],
                            id: 'btnbig',
                            symbolName: 'Symbol_3',
                            type: 'rect'
                        },
                        {
                            rect: ['722px', '63px', '87px', '161px', 'auto', 'auto'],
                            id: 'maker',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'img/maker.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '627px', '324px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '141px', '50px', 'auto', 'auto'],
                            id: 'text2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'img/text2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '141px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1427",
                            "left",
                            0,
                            917,
                            "linear",
                            "${text2}",
                            '0px',
                            '30px'
                        ],
                        [
                            "eid1428",
                            "left",
                            917,
                            1083,
                            "linear",
                            "${text2}",
                            '30px',
                            '0px'
                        ]
                    ]
                }
            },
            "btn3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '119px', '42px', 'auto', 'auto'],
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            fill: ['rgba(38,67,69,1.00)'],
                            id: 'story2-sel1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            rect: ['-21px', '0px', '231px', '43px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.76744', '0.76744']],
                            id: 'btn3',
                            type: 'image',
                            clip: 'rect(0px 144px 42.625919342041px 0px)',
                            fill: ['rgba(0,0,0,0)', 'img/btn3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1788,
                    autoPlay: true,
                    data: [
                        [
                            "eid1551",
                            "top",
                            1788,
                            0,
                            "linear",
                            "${btn3}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "btn4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '120px', '42px', 'auto', 'auto'],
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            fill: ['rgba(38,67,69,1.00)'],
                            id: 'RoundRect3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            rect: ['-267px', '-46px', '720px', '133px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.24583', '0.24812']],
                            id: 'btn42',
                            type: 'image',
                            clip: 'rect(0px 454px 102px 0px)',
                            fill: ['rgba(0,0,0,0)', 'img/btn4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'title33',
                            rect: ['-16px', '-10px', '249px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/title3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'iconfont-diliweizhiCopy2',
                            rect: ['191px', '-10px', '42px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/iconfont-diliweizhi.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '206px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "btn5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '120px', '42px', 'auto', 'auto'],
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            fill: ['rgba(38,67,69,1.00)'],
                            id: 'RoundRect3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            rect: ['-265px', '-46px', '720px', '133px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.24812', '0.24812']],
                            id: 'btn52',
                            type: 'image',
                            clip: 'rect(0px 446px 114px 0px)',
                            fill: ['rgba(0,0,0,0)', 'img/btn5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bigtime1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_160325',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/160325.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_151008',
                            opacity: '1',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/151008.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_140320',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/140320.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_140131',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/140131.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_131128',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/131128.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_110325',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/110325.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_110312',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/110312.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_110208',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/110208.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_100715',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/100715.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_100325',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/100325.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_090407',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/090407.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_080503',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/080503.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_080404',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/080404.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_050122',
                            opacity: '1',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/050122.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_020130',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/020130.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_000313',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/000313.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_890102',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/890102.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_880716',
                            opacity: '0',
                            rect: ['0px', '0px', '800px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/880716.jpg', '0px', '0px']
                        },
                        {
                            rect: ['758px', '400px', '20px', '20px', 'auto', 'auto'],
                            id: 'iconfont-hongqi',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'img/iconfont-hongqi.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "tag1": 0,
                        "tag2": 500,
                        "tag3": 1000,
                        "tag4": 1503,
                        "tag5": 2000,
                        "tag6": 2501,
                        "tag7": 2999,
                        "tag8": 3499,
                        "tag9": 3999,
                        "tag10": 4502,
                        "tag11": 4999,
                        "tag12": 5500,
                        "tag13": 6000,
                        "tag14": 6500,
                        "tag15": 7000,
                        "tag16": 7503,
                        "tag17": 8000
                    },
                    data: [
                        [
                            "eid2163",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_890102}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2181",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_890102}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2199",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_890102}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2175",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2193",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2211",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2229",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2238",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2256",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2274",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2292",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2310",
                            "opacity",
                            3999,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2328",
                            "opacity",
                            4502,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2346",
                            "opacity",
                            4999,
                            0,
                            "linear",
                            "${_131128}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2364",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2383",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2401",
                            "opacity",
                            6500,
                            0,
                            "linear",
                            "${_131128}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2419",
                            "opacity",
                            7000,
                            0,
                            "linear",
                            "${_131128}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2539",
                            "left",
                            0,
                            8000,
                            "linear",
                            "${iconfont-hongqi}",
                            '45px',
                            '758px'
                        ],
                        [
                            "eid2171",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_100715}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2189",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_100715}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2207",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_100715}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2225",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_100715}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2245",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_100715}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2263",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_100715}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2281",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_100715}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2299",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_100715}",
                            '0.04',
                            '0'
                        ],
                        [
                            "eid2317",
                            "opacity",
                            3999,
                            0,
                            "linear",
                            "${_100715}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2335",
                            "opacity",
                            4502,
                            0,
                            "linear",
                            "${_100715}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2353",
                            "opacity",
                            4999,
                            0,
                            "linear",
                            "${_100715}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2177",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2195",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2213",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2231",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2244",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2262",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2280",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2298",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2316",
                            "opacity",
                            3999,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2334",
                            "opacity",
                            4502,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2352",
                            "opacity",
                            4999,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2370",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${_140320}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2389",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2407",
                            "opacity",
                            6500,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2425",
                            "opacity",
                            7000,
                            0,
                            "linear",
                            "${_140320}",
                            '0.008130081300813',
                            '0'
                        ],
                        [
                            "eid2443",
                            "opacity",
                            7503,
                            0,
                            "linear",
                            "${_140320}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2461",
                            "opacity",
                            8000,
                            0,
                            "linear",
                            "${_140320}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2176",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2194",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2212",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2230",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2239",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2257",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2275",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2293",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2311",
                            "opacity",
                            3999,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2329",
                            "opacity",
                            4502,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2347",
                            "opacity",
                            4999,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2365",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2384",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2402",
                            "opacity",
                            6500,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2420",
                            "opacity",
                            7000,
                            0,
                            "linear",
                            "${_140131}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid2438",
                            "opacity",
                            7503,
                            0,
                            "linear",
                            "${_140131}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2167",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_080404}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2185",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_080404}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2203",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_080404}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2221",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_080404}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2248",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_080404}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2266",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_080404}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2284",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_080404}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2162",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_880716}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2180",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_880716}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2165",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_020130}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2183",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_020130}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2201",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_020130}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2219",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_020130}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2249",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_020130}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2164",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_000313}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2182",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_000313}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2200",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_000313}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2218",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_000313}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2174",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2192",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2210",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2228",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2237",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2255",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2273",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2291",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2309",
                            "opacity",
                            3999,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2327",
                            "opacity",
                            4502,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2345",
                            "opacity",
                            4999,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2363",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2382",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${_110325}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2400",
                            "opacity",
                            6500,
                            0,
                            "linear",
                            "${_110325}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2169",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_090407}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2187",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_090407}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2205",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_090407}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2223",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_090407}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2240",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_090407}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2258",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_090407}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2276",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_090407}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2294",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_090407}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2312",
                            "opacity",
                            3999,
                            0,
                            "linear",
                            "${_090407}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2168",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_080503}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2186",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_080503}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2204",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_080503}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2222",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_080503}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2241",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_080503}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2259",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_080503}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2277",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_080503}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2295",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_080503}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2166",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_050122}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2184",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_050122}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2202",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_050122}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2220",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_050122}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2236",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_050122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2254",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_050122}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2178",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2196",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2214",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2232",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2235",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2253",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2271",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2289",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2307",
                            "opacity",
                            3999,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2325",
                            "opacity",
                            4502,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2343",
                            "opacity",
                            4999,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2361",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2380",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${_151008}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2398",
                            "opacity",
                            6500,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2416",
                            "opacity",
                            7000,
                            0,
                            "linear",
                            "${_151008}",
                            '0.008130081300813',
                            '0'
                        ],
                        [
                            "eid2434",
                            "opacity",
                            7503,
                            0,
                            "linear",
                            "${_151008}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2452",
                            "opacity",
                            8000,
                            0,
                            "linear",
                            "${_151008}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid2179",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2197",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2215",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2233",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2243",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2261",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2279",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2297",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2315",
                            "opacity",
                            3999,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2333",
                            "opacity",
                            4502,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2351",
                            "opacity",
                            4999,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2369",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2388",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2406",
                            "opacity",
                            6500,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2424",
                            "opacity",
                            7000,
                            0,
                            "linear",
                            "${_160325}",
                            '0.008130081300813',
                            '0'
                        ],
                        [
                            "eid2442",
                            "opacity",
                            7503,
                            0,
                            "linear",
                            "${_160325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2460",
                            "opacity",
                            8000,
                            0,
                            "linear",
                            "${_160325}",
                            '0.008130081300813',
                            '0'
                        ],
                        [
                            "eid2173",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2191",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2209",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2227",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2250",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2268",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2286",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2304",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2322",
                            "opacity",
                            3999,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2340",
                            "opacity",
                            4502,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2358",
                            "opacity",
                            4999,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2376",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${_110312}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2395",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${_110312}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2172",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_110208}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2190",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_110208}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2208",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_110208}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2226",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_110208}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2252",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_110208}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2270",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_110208}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2288",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_110208}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2306",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_110208}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2324",
                            "opacity",
                            3999,
                            0,
                            "linear",
                            "${_110208}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2342",
                            "opacity",
                            4502,
                            0,
                            "linear",
                            "${_110208}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2360",
                            "opacity",
                            4999,
                            0,
                            "linear",
                            "${_110208}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2378",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${_110208}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2170",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_100325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2188",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${_100325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2206",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${_100325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2224",
                            "opacity",
                            1503,
                            0,
                            "linear",
                            "${_100325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2251",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${_100325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2269",
                            "opacity",
                            2501,
                            0,
                            "linear",
                            "${_100325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2287",
                            "opacity",
                            2999,
                            0,
                            "linear",
                            "${_100325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2305",
                            "opacity",
                            3499,
                            0,
                            "linear",
                            "${_100325}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2323",
                            "opacity",
                            3999,
                            0,
                            "linear",
                            "${_100325}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2341",
                            "opacity",
                            4502,
                            0,
                            "linear",
                            "${_100325}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "timeline": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '732px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "btn6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '120px', '42px', 'auto', 'auto'],
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            fill: ['rgba(38,67,69,1.00)'],
                            id: 'RoundRect3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            type: 'image',
                            id: 'btn6',
                            rect: ['11px', '5px', '170px', '31px', 'auto', 'auto'],
                            clip: 'rect(0px 108px 31.166666030884px 0px)',
                            fill: ['rgba(0,0,0,0)', 'img/btn6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '181px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tub1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'csel1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: 'elipse17',
                            fill: ['rgba(255,255,255,1)', [50, 50, false, 'farthest-corner', [['rgba(13,237,13,0.73)', 0], ['rgba(21,116,21,1.00)', 100]]]],
                            rect: ['0px', '0px', '20px', '21px', 'auto', 'auto'],
                            boxShadow: ['', 1, 1, 18, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            rect: ['31px', '-4px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​阿克苏－和田</p><p style=\"margin: 0px;\">人均GDP</p>',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '61px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tub2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['18px', '-4px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​新疆荒漠化土地</p><p style=\"margin: 0px;\">面积变化示意图</p>',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'csel2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: 'elipse17',
                            boxShadow: ['', 1, 1, 18, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['-13px', '0px', '20px', '21px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(13,237,13,0.73)', 0], ['rgba(21,116,21,1.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '61px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tub3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['34px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">​森林覆盖率</p>',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'csel3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: 'elipse17',
                            boxShadow: ['', 1, 1, 18, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['0px', '0px', '20px', '21px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(13,237,13,0.73)', 0], ['rgba(21,116,21,1.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '65px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tub4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['31px', '-4px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">​新疆历年造林</p><p style=\"margin: 0px;\">面积示意图</p>',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'csel4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: 'elipse17',
                            boxShadow: ['', 1, 1, 18, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['0px', '0px', '20px', '21px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(13,237,13,0.73)', 0], ['rgba(21,116,21,1.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tub5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['31px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy3',
                            text: '<p style=\"margin: 0px;\">​森林覆盖率</p>',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'csel4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: 'elipse17',
                            boxShadow: ['', 1, 1, 18, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['0px', '0px', '20px', '21px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(13,237,13,0.73)', 0], ['rgba(21,116,21,1.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tub6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['21px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy4',
                            text: '<p style=\"margin: 0px;\">​甘肃省武威市</p><p style=\"margin: 0px;\">三大产业占比</p>',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'csel4Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: 'elipse17',
                            boxShadow: ['', 1, 1, 18, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['-7px', '0px', '20px', '21px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(13,237,13,0.73)', 0], ['rgba(21,116,21,1.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tub7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-37px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy5',
                            text: '<p style=\"margin: 0px;\">​民勤市盆地地下水开采量</p><p style=\"margin: 0px;\">与水资源使用量关系图</p>',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'csel4Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: 'elipse17',
                            fill: ['rgba(255,255,255,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(13,237,13,0.73)', 0], ['rgba(21,116,21,1.00)', 100]]]],
                            rect: ['-68px', '0px', '20px', '21px', 'auto', 'auto'],
                            boxShadow: ['', 1, 1, 18, 0, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tub8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['14px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy6',
                            text: '<p style=\"margin: 0px;\">​青土湖水域面积与</p><p style=\"margin: 0px;\">观测井地下水位表示图</p>',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'csel4Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: 'elipse17',
                            boxShadow: ['', 1, 1, 18, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['-17px', '0px', '20px', '21px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(13,237,13,0.73)', 0], ['rgba(21,116,21,1.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "minqin": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '390px', '5733px', 'auto', 'auto'],
                            id: 'ww',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'img/ww.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tub5Copy',
                            symbolName: 'tub5',
                            transform: [[], [], [], ['1.42857', '1.42857']],
                            rect: ['133px', '3622px', '62', '21', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'tub6Copy',
                            symbolName: 'tub6',
                            transform: [[], [], [], ['1.20968', '1.20968']],
                            rect: ['126px', '1960px', '62', '21', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'tub7Copy',
                            symbolName: 'tub7',
                            transform: [[], [], [], ['1.42857', '1.42857']],
                            rect: ['208px', '4662px', '62', '21', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'tub8Copy',
                            symbolName: 'tub8',
                            transform: [[], [], [], ['1.42857', '1.42857']],
                            rect: ['126px', '4253px', '62', '21', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid10676",
                            "scaleX",
                            914,
                            0,
                            "linear",
                            "${tub7Copy}",
                            '1.42857',
                            '1.42857'
                        ],
                        [
                            "eid10672",
                            "scaleX",
                            914,
                            0,
                            "linear",
                            "${tub8Copy}",
                            '1.42857',
                            '1.42857'
                        ],
                        [
                            "eid10693",
                            "left",
                            914,
                            0,
                            "linear",
                            "${tub6Copy}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid10640",
                            "scaleX",
                            914,
                            0,
                            "linear",
                            "${tub5Copy}",
                            '1.42857',
                            '1.42857'
                        ],
                        [
                            "eid10757",
                            "left",
                            914,
                            0,
                            "linear",
                            "${tub7Copy}",
                            '208px',
                            '208px'
                        ],
                        [
                            "eid10740",
                            "top",
                            914,
                            0,
                            "linear",
                            "${tub5Copy}",
                            '3622px',
                            '3622px'
                        ],
                        [
                            "eid10689",
                            "scaleX",
                            914,
                            0,
                            "linear",
                            "${tub6Copy}",
                            '1.20968',
                            '1.20968'
                        ],
                        [
                            "eid10641",
                            "scaleY",
                            914,
                            0,
                            "linear",
                            "${tub5Copy}",
                            '1.42857',
                            '1.42857'
                        ],
                        [
                            "eid10739",
                            "left",
                            914,
                            0,
                            "linear",
                            "${tub5Copy}",
                            '133px',
                            '133px'
                        ],
                        [
                            "eid1741",
                            "opacity",
                            845,
                            44,
                            "linear",
                            "${ww}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10758",
                            "top",
                            914,
                            0,
                            "linear",
                            "${tub7Copy}",
                            '4662px',
                            '4662px'
                        ],
                        [
                            "eid1730",
                            "display",
                            814,
                            0,
                            "linear",
                            "${ww}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1732",
                            "display",
                            845,
                            0,
                            "linear",
                            "${ww}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1739",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${ww}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10673",
                            "scaleY",
                            914,
                            0,
                            "linear",
                            "${tub8Copy}",
                            '1.42857',
                            '1.42857'
                        ],
                        [
                            "eid10749",
                            "left",
                            914,
                            0,
                            "linear",
                            "${tub8Copy}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid10690",
                            "scaleY",
                            914,
                            0,
                            "linear",
                            "${tub6Copy}",
                            '1.20968',
                            '1.20968'
                        ],
                        [
                            "eid10677",
                            "scaleY",
                            914,
                            0,
                            "linear",
                            "${tub7Copy}",
                            '1.42857',
                            '1.42857'
                        ],
                        [
                            "eid10750",
                            "top",
                            914,
                            0,
                            "linear",
                            "${tub8Copy}",
                            '4253px',
                            '4253px'
                        ],
                        [
                            "eid10694",
                            "top",
                            914,
                            0,
                            "linear",
                            "${tub6Copy}",
                            '1960px',
                            '1960px'
                        ]
                    ]
                }
            },
            "xinjiang": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '390px', '6964px', 'auto', 'auto'],
                            overflow: 'auto',
                            id: 'xj',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'img/xj.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.44445', '1.44445']],
                            id: 'tub102',
                            symbolName: 'tub1',
                            userClass: 'tub102',
                            rect: ['132px', '4235px', '61', '21', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.44445', '1.44445']],
                            id: 'tub101',
                            symbolName: 'tub2',
                            userClass: 'tub101',
                            rect: ['43px', '1233px', '61', '21', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.44445', '1.44445']],
                            id: 'tub103',
                            symbolName: 'tub3',
                            userClass: 'tub103',
                            rect: ['265px', '1233px', '65', '21', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'tub4Copy2',
                            symbolName: 'tub4',
                            transform: [[], [], [], ['1.19714', '1.19714']],
                            rect: ['139px', '4844px', '62', '21', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 744,
                    autoPlay: true,
                    data: [
                        [
                            "eid10590",
                            "scaleX",
                            744,
                            0,
                            "linear",
                            "${tub103}",
                            '1.44445',
                            '1.44445'
                        ],
                        [
                            "eid10917",
                            "top",
                            744,
                            0,
                            "linear",
                            "${tub4Copy2}",
                            '4844px',
                            '4844px'
                        ],
                        [
                            "eid10591",
                            "scaleY",
                            744,
                            0,
                            "linear",
                            "${tub103}",
                            '1.44445',
                            '1.44445'
                        ],
                        [
                            "eid10595",
                            "scaleY",
                            744,
                            0,
                            "linear",
                            "${tub102}",
                            '1.44445',
                            '1.44445'
                        ],
                        [
                            "eid1127",
                            "opacity",
                            549,
                            175,
                            "linear",
                            "${xj}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10603",
                            "scaleY",
                            744,
                            0,
                            "linear",
                            "${tub4Copy2}",
                            '1.19714',
                            '1.19714'
                        ],
                        [
                            "eid10911",
                            "left",
                            744,
                            0,
                            "linear",
                            "${tub103}",
                            '265px',
                            '265px'
                        ],
                        [
                            "eid10914",
                            "left",
                            744,
                            0,
                            "linear",
                            "${tub102}",
                            '132px',
                            '132px'
                        ],
                        [
                            "eid10916",
                            "left",
                            744,
                            0,
                            "linear",
                            "${tub4Copy2}",
                            '139px',
                            '139px'
                        ],
                        [
                            "eid10602",
                            "scaleX",
                            744,
                            0,
                            "linear",
                            "${tub4Copy2}",
                            '1.19714',
                            '1.19714'
                        ],
                        [
                            "eid10915",
                            "top",
                            744,
                            0,
                            "linear",
                            "${tub102}",
                            '4235px',
                            '4235px'
                        ],
                        [
                            "eid10912",
                            "top",
                            744,
                            0,
                            "linear",
                            "${tub101}",
                            '1233px',
                            '1233px'
                        ],
                        [
                            "eid10913",
                            "left",
                            744,
                            0,
                            "linear",
                            "${tub101}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid10587",
                            "scaleY",
                            744,
                            0,
                            "linear",
                            "${tub101}",
                            '1.44445',
                            '1.44445'
                        ],
                        [
                            "eid10586",
                            "scaleX",
                            744,
                            0,
                            "linear",
                            "${tub101}",
                            '1.44445',
                            '1.44445'
                        ],
                        [
                            "eid10910",
                            "top",
                            744,
                            0,
                            "linear",
                            "${tub103}",
                            '1233px',
                            '1233px'
                        ],
                        [
                            "eid10594",
                            "scaleX",
                            744,
                            0,
                            "linear",
                            "${tub102}",
                            '1.44445',
                            '1.44445'
                        ]
                    ]
                }
            },
            "jianzao": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '1px', '791px', '372px', 'auto', 'auto'],
                            id: 'gif',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'img/gif.gif', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '791px', '372px', 'auto', 'auto'],
                            id: 'bkg22',
                            opacity: '0.62393165093202',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'img/bkg2.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['2.85345', '2.85345']],
                            type: 'image',
                            id: 'text5',
                            rect: ['156px', '320px', '200px', '275px', 'auto', 'auto'],
                            clip: 'rect(46px 151px 104px 27px)',
                            fill: ['rgba(0,0,0,0)', 'img/text5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_201',
                            rect: ['1px', '1px', '426px', '187px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/201.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sm1',
                            rect: ['521px', '137px', '260px', '219px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sm1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '792px', '373px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-225424192");
