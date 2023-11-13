d3.csv('https://www.k12ea.gov.tw/files/common_unit/c8552d07-2d61-456c-addc-3949198984e1/doc/%E5%AD%B8%E7%94%9F%E8%BA%AB%E9%AB%98%E5%B9%B3%E5%9D%87%E5%80%BC(6%E6%AD%B2-15%E6%AD%B2).csv').then(
    res =>{
        drawHistogram(res)
    }
);

function drawHistogram(res){
    console.log(res);
    let myGraph2 = document.getElementById('myGraph');

    let trace1 = {};
    trace1.type ="histogram";
    trace1.opacity = 0.5;
    trace1.marker = {
        color:'green'
    };
    trace1.xbins ={
        size:1,
        start:0,
        end:100
    };
    trace1.name= "父母&小孩"
    trace1.x = [];
    for(let i =0;i<res.length;i++){
        trace1.x[i] = res[i]['Parch']
    }

    let trace2 = {};
    trace2.type ="histogram";
    trace2.opacity = 0.5;
    trace2.marker = {
        color:'red'
    };
    trace2.xbins ={
        size:1,
        start:0,
        end:100
    };
    trace2.name = "兄弟姊妹&配偶"
    trace2.x = [];
    for(let i =0;i<res.length;i++){
        trace2.x[i] = res[i]['SibSp']
    }

    let data =[];
    data.push(trace1);
    data.push(trace2);

    let layout ={
        margin:{
            t:50
        },
        barmode:"group"
    };
    Plotly.newPlot(myGraph, data, layout);
}




