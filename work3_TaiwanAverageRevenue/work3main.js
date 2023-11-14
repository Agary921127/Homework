d3.csv('TAR.csv').then(
    res =>{
        drawTaiwanAverageRevenue(res)
    }
);

function drawTaiwanAverageRevenue(res){
    console.log(res);
    let myGraphW3=document.getElementById('myGraphW3');

    let traceW3_1 = {};
    traceW3_1.mode = "markers";
    traceW3_1.type ="scatter";
    traceW3_1.x = []
    traceW3_1.y = []

    for (let i=0;i<res.length;i++){
        traceW3_1.x[i] = res[i][0]
        traceW3_1.y[i] = res[i][1]
    }
    let data =[];
    data.push(traceW3_1);

    let layout ={
        margin:{
            t:50
        },
    };
    Plotly.newPlot(myGraphW3, data, layout);
}




