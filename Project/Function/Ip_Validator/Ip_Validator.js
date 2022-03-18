function ip_validator() {
    var x = document.getElementById("takeIP").value;

    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(x)) {  
        return document.getElementById("returnIP").innerHTML = "Valid";
    } else {
        return document.getElementById("returnIP").innerHTML = "Not valid";
    }
}