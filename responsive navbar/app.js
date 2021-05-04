const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')


    burger.addEventListener('click', () => {
        navContainer.classList.toggle('nav-active')
        navLinks.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = ''
            } else {
                item.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })
        burger.classList.toggle('toggle')
    });
}

navSlide();