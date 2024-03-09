let count = 0;
a=document.getElementById("num");
document.getElementById("inc").onclick = function () {
    count += 1;
    a.innerHTML=count;
}
document.getElementById("res").onclick= function () {
    count = 0;
    a.innerHTML = count;
}
document.getElementById("dec").onclick = function () {
    count -= 1;
    a.innerHTML = count;
}