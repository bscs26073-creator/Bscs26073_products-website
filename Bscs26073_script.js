window.onload= function() {
    alert ("Welcome to my website");
}



document.getElementById("date").innerHTML = new Date().getFullYear();



function checkAvailability(id) {
    document.getElementById(id).innerHTML = "Available";
}