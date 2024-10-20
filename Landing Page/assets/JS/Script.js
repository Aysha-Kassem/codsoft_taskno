document.getElementById('open').onclick = () => {
    document.getElementById("list").style.display = "grid";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
}

document.getElementById('close').onclick = () => {
    document.getElementById("list").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
}