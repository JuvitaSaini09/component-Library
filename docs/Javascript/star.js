const stars = document.querySelectorAll(".star");
const output = document.querySelector(".star-rating")

for (let i = 0; i < stars.length; i++) {
    stars[i].starValue = (i + 1);
    ["mouseover", "mouseout", "click"].forEach(function (e) {
        stars[i].addEventListener(e, staRatingEventHandler)
    })
}

function staRatingEventHandler(event) {
    let type = event.type;
    let starValue = this.starValue;
    if (type === "click") {
        if (starValue > 1) {
            output.innerHTML = "You rated " + starValue + " stars";
        }
    }
    stars.forEach(function (element, indx) {
        if (type === "click") {
            if (indx < starValue) {
                element.classList.add("final");
            } else {
                element.classList.remove("final");
            }
        }
        if (type === "mouseover") {
            if (indx < starValue) {
                element.classList.add("hover");
            } else {
                element.classList.remove("hover");
            }
        }
        if (type === "mouseout") {
            element.classList.remove("hover");
        }
    })



}