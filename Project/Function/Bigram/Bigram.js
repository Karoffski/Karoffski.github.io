function bigram(data, length) {
                                    
    var data = document.getElementById("takeBigram").value.split(" ");
    var length = 3
    var result = [];
    
        for (var i = 0; i < data.length - (length - 1); i++) {
            var progress = [];
    
            for (var j = 0; j < length; j++) {
                progress.push(data[i + j])
            }
    
            result.push(progress);
        }

        var stringResult = result.toString()
        var finalResult = stringResult.replace(/,/g, ' ');
        
        return document.getElementById("returnBigram").innerHTML = finalResult;
}