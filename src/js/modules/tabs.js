const tabs = (btnSelector, contentSelector) => {
    const tabsBtn = document.querySelectorAll(btnSelector)
    const tabsContent = document.querySelectorAll(contentSelector)


    tabsBtn.forEach(function (item) {
        item.addEventListener('click', function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab');
            let currentContent = document.querySelector(tabId);
    
            if ( ! currentBtn.classList.contains('works__tab_active') ) {
                tabsBtn.forEach(function(item) {
                    item.classList.remove('works__tab_active');
                });
        
                tabsContent.forEach(function(item) {
                    item.classList.remove('works__content_active');
                });
        
                currentBtn.classList.add('works__tab_active');
                currentContent.classList.add('works__content_active')
            }
        });
    });
}

export default tabs