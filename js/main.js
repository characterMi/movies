$('#slider1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    },
    autoplay: true,
});

$('#slider2').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        280: {
            items: 3
        },
        700: {
            items: 4
        },
        1000: {
            items: 5
        }
    },
    autoplay: false,
    dots: false,
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
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
        if (Entry.isIntersecting) {
            Entry.target.classList.add('show2');
        }
    })
});
const hidden2 = document.querySelectorAll('.hidden2');
hidden2.forEach(el => Observer.observe(el));


const searched_movies_container = document.querySelector(".searched-movies")
const search_all_movies = document.getElementById("search-all-movies")


const all_movies = [
    {
        name: "65",
        story: "After a catastrophic crash, pilot Mills quickly discovers he's actually stranded on an unknown planet. Now, with only one chance at rescue, Mills must make his way across an unknown terrain riddled with dangerous prehistoric creatures in an epic fight to survive. From the writers of A Quiet Place comes 65, a sci-fi thriller produced by Sam Raimi, Deborah Liebling, Zainab Azizi, Scott Beck and Bryan Woods.",
        year: "2023",
        image: "./Images/sixty_five-poster.jpg",
        link: "./html/65/index.html"
    },
    {
        name: "Amsterdam",
        story: "'Amsterdam,' the latest film from acclaimed writer/director David O. Russell, is a fascinating and richly intricate tale that brilliantly weaves historical fact with fiction for a timely,  cinematic experience. 20th Century Studios' and New Regency's original crime epic is about three close friends who find themselves at the center of one of the most shocking secret plots in American history.",
        year: "2022",
        image: "./Images/Amsterdam-poster.jpg",
        link: "./html/Amesterdom/index.html"
    },
    {
        name: "Avatar",
        story: "Several years after the Na'vi repelled the RDA invasion Jake Sully and his family are living on Pandora. Things seem peaceful but the RDA has other plans, invading and capturing Pandora. Sully forms a guerrilla group to try to expel the invaders.",
        year: "2022",
        image: "./Images/avatarposter.jpg",
        link: "./html/avatar/index.html"
    },
    {
        name: "Black Adam",
        story: "Reawakening after 5000 years, Black Adam becomes the world's ruthless protector: an anti-villain to take on the likes of Superman and Wonder Woman. Now in the 21st-Century, Black Adam must face off against the Justice Society of America and its heroes: Doctor Fate, Hawkman, Atom Smasher and Cyclone. The fate of the world hangs in the balance.",
        year: "2022",
        image: "./Images/a.images/blackadam-poster.jpg",
        link: "./html/blackadam/index.html"
    },
    {
        name: "The kings of the world",
        story: "Rá, Culebro, Sere, Winny and Nano live on the streets of Medellín. The five children no longer have any contact with their families. They form a kind of fraternal clan in which they have to make their way in a parallel world without laws. In doing so, they uphold ideals such as friendship and dignity, but also display disobedience and resistance. In a dangerous journey between delirium and nothingness...",
        year: "2022",
        image: "./Images/Thekings-poster.jpg",
        link: "./html/kings/index.html"
    },
    {
        name: "The Northman",
        story: "The Viking Age. With a mind aflame with hate and revenge, Prince Amleth, the wronged son of King Aurvandill War-Raven, heads to cold, windswept Iceland to retrieve what was stolen from him: a father, a mother, and a kingdom. And like a war dog picking up the enemy's scent, brutal Amleth embarks on a murderous quest to find the hateful adversary, whose life is forever woven together with his by the threads of fate. Now, in the name of Valhalla, no one can stop the Northman.",
        year: "2022",
        image: "./Images/a.images/northman-poster.jpg",
        link: "./html/northman/index.html"
    },
    {
        name: "Top Gun: Maverick",
        story: "Set 30 years after its predecessor, it follows Maverick's return to the United States Navy Strike Fighter Tactics Instructor program (also known as U.S. Navy-Fighter Weapons School - 'TOPGUN'), where he must confront his past as he trains a group of younger pilots, among them the son of Maverick's deceased best friend Lieutenant Nick 'Goose' Bradshaw, USN.",
        year: "2022",
        image: "./Images/a.images/topgun-poster.jpg",
        link: "./html/topgun/index.html"
    },
    {
        name: "Better call Saul",
        story: "Before Saul Goodman, he was Jimmy McGill. And if you're calling Jimmy, you're in real trouble. The prequel to 'Breaking Bad' follows small-time attorney, Jimmy McGill, as he transforms into Walter White's morally challenged lawyer, Saul Goodman.",
        year: "2015_2022",
        image: "./Images/a.images/bettercallsaul-poster.jpg",
        link: "./html/bettercallsaul/index.html"
    },
    {
        name: "Breaking Bad",
        story: "Walter H. White is a chemistry genius, but works as a chemistry teacher in an Albuquerque, New Mexico high school. His life drastically changes when he's diagnosed with stage III terminal lung cancer, and given a short amount of time left to live: a mere matter of months. To ensure his handicapped son and his pregnant wife have a financial future...",
        year: "2008_2013",
        image: "./Images/a.images/breakingbad-poster.jpg",
        link: "./html/breakingbad/index.html"
    },
    {
        name: "The Walking Dead: Dead City",
        story: "Maggie and Negan travel into a post-apocalyptic Manhattan long ago cut off from the mainland. The city is filled with the dead and denizens who have made New York City their own world.",
        year: "2023",
        image: "./Images/The-Walking-Dead-Dead-City.jpg",
        link: "./html/deadcity/index.html"
    },
    {
        name: "Hijack",
        story: "A tense thriller (told in real time) that follows the journey of a hijacked plane as it makes its way to London over a seven-hour flight, while authorities on the ground scramble for ator in the business world, who needs to step up and use all his guile to try and save the lives of the passengers -- but, his high-risk strategy could be his undoing.",
        year: "2023_",
        image: "./Images/hijack.jpg",
        link: "./html/hjack/index.html"
    },
    {
        name: "House of the Dragon",
        story: "The Targaryen dynasty is at the absolute apex of its power, with more than 10 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
        year: "2022",
        image: "./Images/a.images/houseofdragon-poster.jpg",
        link: "./html/Houseofthedragon/index.html"
    },
    {
        name: "The Sandman",
        story: "A wizard attempting to capture Death to bargain for eternal life traps her younger brother, Dream, instead. Fearful for his safety, the wizard kept him imprisoned in a glass bottle for decades. After his escape, Dream (also known as Morpheus) goes on a quest for his lost objects of power.",
        year: "2022",
        image: "./Images/a.images/sandman-poster.jpg",
        link: "./html/sandman/index.html"
    },
    {
        name: "Ted lasso",
        story: "American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League football team.",
        year: "2020_2023",
        image: "./Images/ted-lasso-poster.jpg",
        link: "./html/tedlasso/index.html"
    },
    {
        name: "Teen Wolf",
        story: "Scott McCall was just another kid in high school. Until, one night his best friend Stiles brings him to the woods, to look for a dead body, and Scott is bitten by a werewolf. Being a werewolf came with its perks- stronger, faster, new star in the lacrosse team, popularity- but also made it hard to control his anger. Scott has also fallen for the new girl in town, Allison, whose dad is trying to hunt and kill Scott. Scott now has to try and balance his out of control life, figure out how to control his new powers, try not to be killed by the alpha that bit him, and protect Allison- and keep her from finding out his big secret.",
        year: "2011_2017",
        image: "./Images/teenwolf-poster.jpg",
        link: "./html/teenwolf/index.html"
    },
    {
        name: "The Boys",
        story: "'The Boys' is set in a universe in which superpowered people are recognized as heroes by the general public and owned by a powerful corporation, Vought International, which ensures that they are aggressively marketed and monetized. Outside of their heroic personas, most are arrogant and corrupt. The series primarily focuses on two groups: the titular Boys, vigilantes looking to keep the corrupted heroes under control, and the Seven, Vought International's premier superhero team. The Boys are led by Billy Butcher, who despises all superpowered people, and the Seven are led by the egotistical and unstable Homelander. As a conflict ensues between the two groups...",
        year: "2019_",
        image: "./Images/The_Boys.jpg",
        link: "./html/theboys/index.html"
    },
    {
        name: "Vikings",
        story: "The adventures of a Ragnar Lothbrok: the greatest hero of his age. The series tells the saga of Ragnar's band of Viking brothers and his family as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods: legend has it that he was a direct descendant of Odin, the god of war and warriors.",
        year: "2013_2020",
        image: "./Images/a.images/vikings-poster.jpg",
        link: "./html/vikings/index.html"
    },
    {
        name: "The Walking Dead",
        story: "Sheriff Deputy Rick Grimes gets shot and falls into a coma. When awoken he finds himself in a Zombie Apocalypse. Not knowing what to do he sets out to find his family, after he's done that, he gets connected to a group to become the leader. He takes charge and tries to help this group of people survive, find a place to live and get them food. This show is all about survival, the risks and the things you'll have to do to survive.",
        year: "2010_2022",
        image: "./Images/a.images/walkingdead.jpg",
        link: "./html/walkingdead/index.html"
    },
    {
        name: "The Witcher",
        story: "The Witcher is a fantasy drama web television series created by Lauren Schmidt Hissrich e by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.",
        year: "2019_",
        image: "./Images/a.images/witcher.jpg",
        link: "./html/witcher/index.html"
    },
]


const searchForMovie = (searchField, movies) => {
    searched_movies_container.innerHTML = "";
    searched_movies_container.style = "display: flex";

    if (searchField) {
        const filtered_movies = movies.filter((movie) => movie.name.toLowerCase().includes(searchField.toLowerCase()))
        if (filtered_movies.length > 0) {
            filtered_movies.slice(0, 3).map((filtered_movie, index) => {
                const li = document.createElement("li");
                li.classList.add("filtered-movie")
                const markup = `
                    <img src=${filtered_movie.image} alt=${filtered_movie.name} />
                    <div class="about-container">
                        <div class="name-container"><a href=${filtered_movie.link}>${filtered_movie.name}</a> _ <h4>${filtered_movie.year}</h4></div>
                        <p>${filtered_movie.story}</p>
                    </div>
                    `
                li.innerHTML = markup
                searched_movies_container.appendChild(li)
                searched_movies_container.appendChild(document.createElement("hr"))
            })
        } else {
            const markup = '<h1 class="nothing-found">Nothing found !</h1>'
            searched_movies_container.innerHTML = markup
        }
    }
    else { searched_movies_container.style = "display: none" }

}

search_all_movies.onkeyup = (e) => searchForMovie(e.target.value, all_movies)