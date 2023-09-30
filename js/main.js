$('#slider1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    autoplay:true,
});

$('#slider2').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        250:{
            items:2
        },
        350:{
            items:3
        },
        700:{
            items:4
        },
        1000:{
            items:5
        }
    },
    autoplay:false,
    dots:false,
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});
const hidden = document.querySelectorAll('.hidden');
hidden.forEach(el => observer.observe(el));


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



const Observer = new IntersectionObserver((Entries) => {
    Entries.forEach((Entry) => {
        console.log(Entry);
        if (Entry.isIntersecting) {
            Entry.target.classList.add('show2');
        }
    })
});
const hidden2 = document.querySelectorAll('.hidden2');
hidden2.forEach(el => Observer.observe(el));