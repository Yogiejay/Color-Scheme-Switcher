document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = "blue";
});
function SwitchColor(color) {
    document.body.style.backgroundColor = `${color}`;
}

const buttons = document.querySelectorAll(".buttons > button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const clickedButton = event.currentTarget;

        if (clickedButton.id === "red") {
            document.body.style.backgroundColor = "red";
        } else if (clickedButton.id === "grey") {
            document.body.style.backgroundColor = "grey";
        } else if (clickedButton.id === "yellow") {
            document.body.style.backgroundColor = "yellow";
        } else if (clickedButton.id === "orange") {
            document.body.style.backgroundColor = "orange";
        }
    });
});
