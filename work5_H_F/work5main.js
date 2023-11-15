d3.csv('final.csv').then(
    res =>{
        drawHistogram(res)
    }
);

function drawHistogram(res){
    let myGraphW5 = document.getElementById('myGraphW5');
    
    let traceW5_1={};
    traceW5_1.type= "bar";
    traceW5_1.name = "天然氣";
    traceW5_1.x = [];
    traceW5_1.y = [];
    for (let i=0;i<res.length;i++){
        console.log(res[i]['日期(年)'])
        console.log(res[i]['液化天然氣進口量合計'])
        traceW5_1.x[i] = res[i]['日期(年)']
        traceW5_1.y[i] = res[i]['液化天然氣進口量合計']
    };
    let traceW5_2={};
    traceW5_2.type= "bar";
    traceW5_2.name = "煤";
    traceW5_2.x = [];
    traceW5_2.y = [];
    for (let i=0;i<res.length;i++){
        console.log(res[i]['日期(年)'])
        console.log(res[i]['煤炭進口量_總計'])
        traceW5_2.x[i] = res[i]['日期(年)']
        traceW5_2.y[i] = res[i]['煤炭進口量_總計']
    };
    let traceW5_3={};
    traceW5_3.type= "bar";
    traceW5_3.name = "石油";
    traceW5_3.x = [];
    traceW5_3.y = [];
    for (let i=0;i<res.length;i++){
        console.log(res[i]['日期(年)'])
        console.log(res[i]['原油進口量合計'])
        traceW5_3.x[i] = res[i]['日期(年)']
        traceW5_3.y[i] = res[i]['原油進口量合計']*0.157
    };

    let data = [traceW5_1,traceW5_2,traceW5_3];

    let layout = {
        margin :{
            t:50
        },
        xaxis:{
            title: "單位: 千噸"
        },
        barmode: "stack"
    }
    Plotly.newPlot(myGraphW5, data, layout);
}
