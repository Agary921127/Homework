d3.csv('https://raw.githubusercontent.com/ryanchung403/dataset/main/train_data_titanic.csv').then(
    res =>{
        drawHistogram(res)
    }
);

function drawHistogram(res){
    console.log(res);
    let myGraph=document.getElementById('myGraph');

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




