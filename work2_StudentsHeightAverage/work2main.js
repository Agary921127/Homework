d3.csv('SHA.csv').then(
    res =>{
        drawStudentsHeightAverage(res)
    }
);

function drawStudentsHeightAverage(res){
    console.log(res);
    let myGraphW3 = document.getElementById('myGraphW2');

    let traceW3_1 = {};
    traceW3_1.mode = "markers+lines";
    traceW3_1.type ="scatter";
    traceW3_1.x = []
    traceW3_1.y = []

    for (let i=0;i<res.length;i++){
        traceW3_1.x[i] = res[i]["學年度"]
        traceW3_1.y[i] = res[i]["總計"]
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




