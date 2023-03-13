const scroll = (btnSelector) => {
    const scrollBtnActive = document.querySelector(btnSelector)


    window.addEventListener('scroll', function() {
        let scroll = document.querySelector('.scroll_top')
        if (window.scrollY > 1000) {
            scroll.classList.add('scroll_top_active')
        } else {
            scroll.classList.remove('scroll_top_active')
        }
    });
    
    scrollBtnActive.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}

export default scroll