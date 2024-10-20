// open the list
document.getElementById("open_list").onclick = () => {
    document.getElementById("list").style.display = "grid";
    document.getElementById("open_list").style.display = "none";
    document.getElementById("close_list").style.display = "inline-block";
}

// close the list
document.getElementById("close_list").onclick = () => {
    document.getElementById("list").style.display = "none";
    document.getElementById("open_list").style.display = "inline-block";
    document.getElementById("close_list").style.display = "none";
}

// close the list onclick any link in list
document.getElementById("list").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        document.getElementById("list").style.display = "none";
        document.getElementById("open_list").style.display = "inline-block";
        document.getElementById("close_list").style.display = "none";
    }
});