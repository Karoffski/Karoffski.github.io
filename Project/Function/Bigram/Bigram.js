function bigram(data, length) {
    
    // Input utilisateur                                
    var data = document.getElementById("takeBigram").value.split(" ");
    
    // Initialisation des paramètres
    var length = 3
    // Initialisation du tableau
    var result = [];
   
        for (var i = 0; i < data.length - (length - 1); i++) {
            var progress = [];
    
            for (var j = 0; j < length; j++) {
                progress.push(data[i + j])
            }
    
            result.push(progress);
        }
        
        // Transformer le résultat sous forme d'une chaine de caractères
        var stringResult = result.toString()
        // Remplacer les , par un espace
        var finalResult = stringResult.replace(/,/g, ' ');
        // Output utilisateur
        return document.getElementById("returnBigram").innerHTML = finalResult;
}
