d3.csv('TAR.csv').then(
    res =>{
        drawTaiwanAverageRevenue(res)
    }
);

function drawTaiwanAverageRevenue(res){
    console.log(res);
    let myGraphW3=document.getElementById('myGraphW3');

    let traceW3_taipei = {};
    traceW3_taipei.type ="bar";
    traceW3_taipei.name = "Taipei"
    traceW3_taipei.x = []
    traceW3_taipei.y = []

    for (let i=0;i<res.length;i++){
        if (res[i]['年']>=2010){
            traceW3_taipei.x[i] = res[i]['年']
            traceW3_taipei.y[i] = res[i]['臺北市-元']
        }
    }

    let traceW3_Newtaipei = {};
    traceW3_Newtaipei.type ="bar";
    traceW3_Newtaipei.name = "New Taipei City"
    traceW3_Newtaipei.x = []
    traceW3_Newtaipei.y = []

    for (let i=0;i<res.length;i++){
        if (res[i]['年']>=2010){
            traceW3_Newtaipei.x[i] = res[i]['年']
            traceW3_Newtaipei.y[i] = res[i]['新北市-元']
        }
    }

    let traceW3_taoyuan = {};
    traceW3_taoyuan.type ="bar";
    traceW3_taoyuan.name = "Taoyuan"
    traceW3_taoyuan.x = []
    traceW3_taoyuan.y = []

    for (let i=0;i<res.length;i++){
        if (res[i]['年']>=2010){
            traceW3_taoyuan.x[i] = res[i]['年']
            traceW3_taoyuan.y[i] = res[i]['桃園市-元']
        }
    }

    let traceW3_HC = {};
    traceW3_HC.type ="bar";
    traceW3_HC.name = "Hsinchu City"
    traceW3_HC.x = []
    traceW3_HC.y = []

    for (let i=0;i<res.length;i++){
        if (res[i]['年']>=2010){
            traceW3_HC.x[i] = res[i]['年']
            traceW3_HC.y[i] = res[i]['新竹市-元']
        }
    }
    let data =[];
    data.push(traceW3_taipei);
    data.push(traceW3_Newtaipei);
    data.push(traceW3_taoyuan);
    data.push(traceW3_HC);

    let layout ={
        margin:{
            t:50
        },
        yaxis: {
            range: [1000000,2000000]  // 设置 x 轴的范围
        },
        title: "北北桃新均薪十年比較長條圖"
    };
    Plotly.newPlot(myGraphW3, data, layout);
}




