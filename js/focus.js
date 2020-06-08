function infoOn(obj){
    var targetid = obj.id; 
    document.getElementById("info" + targetid).style.display = "block";
}

function infoOff(obj){
    var targetid = obj.id; 
    document.getElementById("info" + targetid).style.display = "none";
}