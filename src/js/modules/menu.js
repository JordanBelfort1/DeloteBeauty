const menu = (openBtnSelector, closeBtnSelector, blockSelector) => {
    const openMenuBtn = document.querySelector(openBtnSelector),
        closeMenuBtn = document.querySelector(closeBtnSelector),
        menuContent = document.querySelector(blockSelector)

    openMenuBtn.addEventListener('click', function() {
        menuContent.classList.add('right__menu_active')
    });

    closeMenuBtn.addEventListener('click', function() {
        menuContent.classList.remove('right__menu_active')
    });

}

export default menu