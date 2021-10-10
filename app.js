const scrollButton = document.querySelector('#scroll-button')

scrollButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})