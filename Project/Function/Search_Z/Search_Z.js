function search_z() {
    var x = document.getElementById("takeZ").value;
    var y = x.toLowerCase()

    var z = (y.match(/z/g) || []).length;

    if (z > 0){
        return document.getElementById("returnZ").innerHTML = "Il y a " + z + " z";
    } else{
        return document.getElementById("returnZ").innerHTML = "Il y a 0 z";
    }
}