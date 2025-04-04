
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

initScroll()