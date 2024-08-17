window.onload = function() {
    var popup = document.getElementById("popup");
    popup.classList.add("active");
};

function closePopup() {
    var popup = document.getElementById("popup");
    popup.classList.remove("active");
}
