const menu = document.querySelectorAll(".menu");
menu.forEach((menus) => {    
    menus.addEventListener('click', () => {
        const classL = menus.classList;
        menu.forEach((link) => {
            if (link.classList == classL) {
                link.classList.add("active")
            } else {
                link.classList.remove("active")
            }
        })
    });
    
});

let download = document.querySelector(".back-download"),
    quality = document.querySelector(".qualitys");
download.addEventListener('click', () => {
    quality.classList.add('shows');
})
