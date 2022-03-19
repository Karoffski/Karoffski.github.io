function search_z() {
    
    // Input utilisateur
    var x = document.getElementById("takeZ").value;
    // Caractères en minuscule
    var y = x.toLowerCase()

    var z = (y.match(/z/g) || []).length;

    if (z > 0){
        // Output si un ou plusieurs z
        return document.getElementById("returnZ").innerHTML = "Il y a " + z + " z";
    } else{
        // Output si 0 z
        return document.getElementById("returnZ").innerHTML = "Il y a 0 z";
    }
}
