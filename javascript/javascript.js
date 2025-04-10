
function initScroll(){   
    const linkInternos = document.querySelectorAll(".container-menu a[href^='#']")

    function scrollLink(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const linkClicado = document.querySelector(href)
    
        linkClicado.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    
    
    
    linkInternos.forEach((item) => {
        item.addEventListener('click' , scrollLink)
    })

}



function initAnimaScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if(sections) {
        const windowMetade = window.innerHeight * 0.7;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - windowMetade;
            if(sectionTop < 0) {
                section.classList.add('ativo')
            }
        })
    }

    animaScroll()

    window.addEventListener('scroll' , animaScroll)
    }
}
initScroll()
initAnimaScroll()