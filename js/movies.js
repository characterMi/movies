const search_movies = document.getElementById("search-movies")
const searched_container = document.querySelector(".searched-movies")


const movies = [
    {
        name: "65",
        story: "After a catastrophic crash, pilot Mills quickly discovers he's actually stranded on an unknown planet. Now, with only one chance at rescue, Mills must make his way across an unknown terrain riddled with dangerous prehistoric creatures in an epic fight to survive. From the writers of A Quiet Place comes 65, a sci-fi thriller produced by Sam Raimi, Deborah Liebling, Zainab Azizi, Scott Beck and Bryan Woods.",
        year: "2023",
        image: "../../Images/sixty_five-poster.jpg",
        link: "../../html/65/index.html"
    },
    {
        name: "Amsterdam",
        story: "'Amsterdam,' the latest film from acclaimed writer/director David O. Russell, is a fascinating and richly intricate tale that brilliantly weaves historical fact with fiction for a timely,  cinematic experience. 20th Century Studios' and New Regency's original crime epic is about three close friends who find themselves at the center of one of the most shocking secret plots in American history.",
        year: "2022",
        image: "../../Images/Amsterdam-poster.jpg",
        link: "../../html/Amesterdom/index.html"
    },
    {
        name: "Avatar",
        story: "Several years after the Na'vi repelled the RDA invasion Jake Sully and his family are living on Pandora. Things seem peaceful but the RDA has other plans, invading and capturing Pandora. Sully forms a guerrilla group to try to expel the invaders.",
        year: "2022",
        image: "../../Images/avatarposter.jpg",
        link: "../../html/avatar/index.html"
    },
    {
        name: "Black Adam",
        story: "Reawakening after 5000 years, Black Adam becomes the world's ruthless protector: an anti-villain to take on the likes of Superman and Wonder Woman. Now in the 21st-Century, Black Adam must face off against the Justice Society of America and its heroes: Doctor Fate, Hawkman, Atom Smasher and Cyclone. The fate of the world hangs in the balance.",
        year: "2022",
        image: "../../Images/a.images/blackadam-poster.jpg",
        link: "../../html/blackadam/index.html"
    },
    {
        name: "The kings of the world",
        story: "Rá, Culebro, Sere, Winny and Nano live on the streets of Medellín. The five children no longer have any contact with their families. They form a kind of fraternal clan in which they have to make their way in a parallel world without laws. In doing so, they uphold ideals such as friendship and dignity, but also display disobedience and resistance. In a dangerous journey between delirium and nothingness...",
        year: "2022",
        image: "../../Images/Thekings-poster.jpg",
        link: "../../html/kings/index.html"
    },
    {
        name: "The Northman",
        story: "The Viking Age. With a mind aflame with hate and revenge, Prince Amleth, the wronged son of King Aurvandill War-Raven, heads to cold, windswept Iceland to retrieve what was stolen from him: a father, a mother, and a kingdom. And like a war dog picking up the enemy's scent, brutal Amleth embarks on a murderous quest to find the hateful adversary, whose life is forever woven together with his by the threads of fate. Now, in the name of Valhalla, no one can stop the Northman.",
        year: "2022",
        image: "../../Images/a.images/northman-poster.jpg",
        link: "../../html/northman/index.html"
    },
    {
        name: "Top Gun: Maverick",
        story: "Set 30 years after its predecessor, it follows Maverick's return to the United States Navy Strike Fighter Tactics Instructor program (also known as U.S. Navy-Fighter Weapons School - 'TOPGUN'), where he must confront his past as he trains a group of younger pilots, among them the son of Maverick's deceased best friend Lieutenant Nick 'Goose' Bradshaw, USN.",
        year: "2022",
        image: "../../Images/a.images/topgun-poster.jpg",
        link: "../../html/topgun/index.html"
    }
]


const searchMovie = (searchField, movies) => {
    searched_container.innerHTML = "";
    searched_container.style = "display: flex";

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
                searched_container.appendChild(li)
                searched_container.appendChild(document.createElement("hr"))
            })
        } else {
            const markup = '<h1 class="nothing-found">Nothing found !</h1>'
            searched_container.innerHTML = markup
        }
    }
    else { searched_container.style = "display: none" }

}

search_movies.onchange = (e) => searchMovie(e.target.value, movies)
