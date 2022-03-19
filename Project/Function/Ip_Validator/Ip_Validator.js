function ip_validator() {
    // Input utilisateur
    var x = document.getElementById("takeIP").value;
    
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(x)) {  
        
        // Output si valide
        return document.getElementById("returnIP").innerHTML = "Valid";
    } else {
        
        // Output si invalide
        return document.getElementById("returnIP").innerHTML = "Not valid";
    }
}
