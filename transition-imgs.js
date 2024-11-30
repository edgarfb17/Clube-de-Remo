let time = 5000
let currentImageIndex = 0
let imagens = document.querySelectorAll(".galeria-sobre img")
let max = imagens.length

function nextImage() {
    imagens[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    imagens[currentImageIndex].classList.add("selected")

}

function start() {
    setInterval(() => {nextImage()}, time)
}

window.addEventListener("load", start)