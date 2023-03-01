console.log("here");

// select button element
const buttonElement = document.getElementById("openModal")

// add event listener on click to button
buttonElement.addEventListener("click", () => {
    // remove class invisible from div modal
    const modalElement = document.getElementById("modal")
    modalElement.classList.remove("invisible")
  });


// add event listener on key press Escape
document.body.addEventListener("keydown", (event) => {
    // add class invisible to div modal
    if(event.key == "Escape") {
        const modalElement = document.getElementById("modal")
        modalElement.classList.add("invisible")
    }
  });



