d3.csv('SHA.csv').then(
    res =>{
        drawStudentsHeightAverage(res)
    }
);

function drawStudentsHeightAverage(res){
    console.log(res);
    let myGraphW3 = document.getElementById('myGraphW2');
    let traceW3_male = {};
    traceW3_male.mode = "markers";
    traceW3_male.type ="scatter";
    traceW3_male.name = "男生";
    traceW3_male.x = []
    traceW3_male.y = []
    for (let i=0;i<res.length;i++){
        traceW3_male.x[i] = res[i]["年齡"]
        traceW3_male.y[i] = res[i]["男"]
    }
    let traceW3_female = {};
    traceW3_female.mode = "markers";
    traceW3_female.type ="scatter";
    traceW3_female.name = "女生";
    traceW3_female.x = []
    traceW3_female.y = []
    for (let i=0;i<res.length;i++){
        traceW3_female.x[i] = res[i]["年齡"]
        traceW3_female.y[i] = res[i]["女"]
    }
    let data =[];
    data.push(traceW3_male);
    data.push(traceW3_female);
    let layout ={
        margin:{
            t:40
        },
        title: {
            text: '台灣男女身高年齡關係圖',
            font: {
                family: 'Arial',      
                size: 20,             
                color: 'black'        
            }
        },
        xaxis:{
            title: "Age"
        },
        yaxis:{
            title:{
                text: "Height",
                standoff: 9,
                angle: 0
            },
            automargin: true,
        }
    };
    Plotly.newPlot(myGraphW3, data, layout);
}




