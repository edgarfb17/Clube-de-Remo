const controls = document.querySelectorAll(".control");
const slide = document.querySelector(".first")

controls.forEach(control => {
    control.addEventListener("click", () => {
        const isRight = control.classList.contains("arrow-right");
        if(isRight){
            slide.classList.add("slider")
        }
        else{
            slide.classList.remove("slider")
        }
    })
})
