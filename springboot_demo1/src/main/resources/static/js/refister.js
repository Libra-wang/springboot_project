document.querySelector(".new-kind").onclick = function () {
    document.querySelector(".register-bytel").style.display = "block";
    document.querySelector(".register-bypw").style.display = "none";
    document.querySelector(".new-kind").style.cursor = "default";
    document.querySelector(".now-kind").style.cursor = "pointer";
    document.querySelector(".new-kind").style.color = "#ff6000";
    document.querySelector(".now-kind").style.color = "black";

}
document.querySelector(".now-kind").onclick = function () {
    document.querySelector(".register-bypw").style.display = "block";
    document.querySelector(".register-bytel").style.display = "none";
    document.querySelector(".now-kind").style.cursor = "default";
    document.querySelector(".new-kind").style.cursor = "pointer";
    document.querySelector(".now-kind").style.color = "#ff6000";
    document.querySelector(".new-kind").style.color = "black";

}
