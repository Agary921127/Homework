d3.csv('https://service.taipower.com.tw/data/opendata/apply/file/d003001/001.csv').then(
    res =>{
        drawHistogram(res)
    }
);

function drawHistogram(res){
    console.log(res);
    
}




