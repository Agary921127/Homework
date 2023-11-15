d3.csv('gas.csv').then(
    res =>{
        drawPieChar(res)
    }
);

function drawPieChar(res){
    console.log(res);
    let myGraphW4=document.getElementById('myGraphW4');
    let traceW4_2022 = {};
    traceW4_2022.type ="pie";
    traceW4_2022.labels = [];
    traceW4_2022.values = [];
    traceW4_2022.domain = {
        row: 0,
        column: 0
    };
    traceW4_2022.hole = 0.4
    traceW4_2022.labels[0] = '卡達'
    traceW4_2022.values[0] = res[20]['卡達']
    traceW4_2022.labels[1] = '澳大利亞'
    traceW4_2022.values[1] = res[20]['澳大利亞']
    traceW4_2022.labels[2] = '俄羅斯'
    traceW4_2022.values[2] = res[20]['俄羅斯']
    traceW4_2022.labels[3] = '巴布亞紐幾內亞'
    traceW4_2022.values[3] = res[20]['巴布亞紐幾內亞']
    traceW4_2022.labels[4] = '印尼'
    traceW4_2022.values[4] = res[20]['印尼']
    traceW4_2022.labels[5] = '美國'
    traceW4_2022.values[5] = res[20]['美國']
    traceW4_2022.labels[6] = '馬來西亞'
    traceW4_2022.values[6] = res[20]['馬來西亞']
    traceW4_2022.labels[7] = '汶萊'
    traceW4_2022.values[7] = res[20]['汶萊']
    traceW4_2022.labels[8] = '奈及利亞'
    traceW4_2022.values[8] = res[20]['奈及利亞']
    traceW4_2022.labels[9] = '其他'
    traceW4_2022.values[9] = res[20]['其他']
//====================================================================
    let myGraphW4_2=document.getElementById('myGraphW4_2');
    let traceW4_2002 = {};
    traceW4_2002.type ="pie";
    traceW4_2002.labels = [];
    traceW4_2002.values = [];
    traceW4_2022.domain = {
        row: 1,
        column: 1
    };
    traceW4_2002.hole = 0.4
    traceW4_2002.labels[4] = '印尼'
    traceW4_2002.values[4] = res[0]['印尼']
    traceW4_2002.labels[6] = '馬來西亞'
    traceW4_2002.values[6] = res[0]['馬來西亞']
    let data1 =[];
    data1.push(traceW4_2022);
    let data2 =[];
    data2.push(traceW4_2002);

    let layout1 ={
        margin:{
            t:0
        },
        annotations: [
            {
            text: '2022年',
            font: {
                size: 30  
            },
            showarrow: false
            }
        ],
        legend: {
            font: {
              size: 14  
            }
        }
    };
    let layout2 ={
        margin:{
            t:0
        },
        annotations: [
            {
            text: '2002年',
            font: {
                size: 30  
            },
            showarrow: false
            }
        ],
        legend: {
            font: {
              size: 14  
            }
        }
    };
    Plotly.newPlot(myGraphW4, data1, layout1);
    Plotly.newPlot(myGraphW4_2, data2, layout2);
}
