const search_series = document.getElementById("search-series")
const searched_series_container = document.querySelector(".searched-movies")

const series = [
    {
        name: "Better call Saul",
        story: "Before Saul Goodman, he was Jimmy McGill. And if you're calling Jimmy, you're in real trouble. The prequel to 'Breaking Bad' follows small-time attorney, Jimmy McGill, as he transforms into Walter White's morally challenged lawyer, Saul Goodman.",
        year: "2015_2022",
        image: "../../Images/a.images/bettercallsaul-poster.jpg",
        link: "../../html/bettercallsaul/index.html"
    },
    {
        name: "Breaking Bad",
        story: "Walter H. White is a chemistry genius, but works as a chemistry teacher in an Albuquerque, New Mexico high school. His life drastically changes when he's diagnosed with stage III terminal lung cancer, and given a short amount of time left to live: a mere matter of months. To ensure his handicapped son and his pregnant wife have a financial future...",
        year: "2008_2013",
        image: "../../Images/a.images/breakingbad-poster.jpg",
        link: "../../html/breakingbad/index.html"
    },
    {
        name: "The Walking Dead: Dead City",
        story: "Maggie and Negan travel into a post-apocalyptic Manhattan long ago cut off from the mainland. The city is filled with the dead and denizens who have made New York City their own world.",
        year: "2023",
        image: "../../Images/The-Walking-Dead-Dead-City.jpg",
        link: "../../html/deadcity/index.html"
    },
    {
        name: "Hijack",
        story: "A tense thriller (told in real time) that follows the journey of a hijacked plane as it makes its way to London over a seven-hour flight, while authorities on the ground scramble for ator in the business world, who needs to step up and use all his guile to try and save the lives of the passengers -- but, his high-risk strategy could be his undoing.",
        year: "2023_",
        image: "../../Images/hijack.jpg",
        link: "../../html/hjack/index.html"
    },
    {
        name: "House of the Dragon",
        story: "The Targaryen dynasty is at the absolute apex of its power, with more than 10 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
        year: "2022",
        image: "../../Images/a.images/houseofdragon-poster.jpg",
        link: "../../html/Houseofthedragon/index.html"
    },
    {
        name: "The Sandman",
        story: "A wizard attempting to capture Death to bargain for eternal life traps her younger brother, Dream, instead. Fearful for his safety, the wizard kept him imprisoned in a glass bottle for decades. After his escape, Dream (also known as Morpheus) goes on a quest for his lost objects of power.",
        year: "2022",
        image: "../../Images/a.images/sandman-poster.jpg",
        link: "../../html/sandman/index.html"
    },
    {
        name: "Ted lasso",
        story: "American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League football team.",
        year: "2020_2023",
        image: "../../Images/ted-lasso-poster.jpg",
        link: "../../html/tedlasso/index.html"
    },
    {
        name: "Teen Wolf",
        story: "Scott McCall was just another kid in high school. Until, one night his best friend Stiles brings him to the woods, to look for a dead body, and Scott is bitten by a werewolf. Being a werewolf came with its perks- stronger, faster, new star in the lacrosse team, popularity- but also made it hard to control his anger. Scott has also fallen for the new girl in town, Allison, whose dad is trying to hunt and kill Scott. Scott now has to try and balance his out of control life, figure out how to control his new powers, try not to be killed by the alpha that bit him, and protect Allison- and keep her from finding out his big secret.",
        year: "2011_2017",
        image: "../../Images/teenwolf-poster.jpg",
        link: "../../html/teenwolf/index.html"
    },
    {
        name: "The Boys",
        story: "'The Boys' is set in a universe in which superpowered people are recognized as heroes by the general public and owned by a powerful corporation, Vought International, which ensures that they are aggressively marketed and monetized. Outside of their heroic personas, most are arrogant and corrupt. The series primarily focuses on two groups: the titular Boys, vigilantes looking to keep the corrupted heroes under control, and the Seven, Vought International's premier superhero team. The Boys are led by Billy Butcher, who despises all superpowered people, and the Seven are led by the egotistical and unstable Homelander. As a conflict ensues between the two groups...",
        year: "2019_",
        image: "../../Images/The_Boys.jpg",
        link: "../../html/theboys/index.html"
    },
    {
        name: "Vikings",
        story: "The adventures of a Ragnar Lothbrok: the greatest hero of his age. The series tells the saga of Ragnar's band of Viking brothers and his family as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods: legend has it that he was a direct descendant of Odin, the god of war and warriors.",
        year: "2013_2020",
        image: "../../Images/a.images/vikings-poster.jpg",
        link: "../../html/vikings/index.html"
    },
    {
        name: "The Walking Dead",
        story: "Sheriff Deputy Rick Grimes gets shot and falls into a coma. When awoken he finds himself in a Zombie Apocalypse. Not knowing what to do he sets out to find his family, after he's done that, he gets connected to a group to become the leader. He takes charge and tries to help this group of people survive, find a place to live and get them food. This show is all about survival, the risks and the things you'll have to do to survive.",
        year: "2010_2022",
        image: "../../Images/a.images/walkingdead.jpg",
        link: "../../html/walkingdead/index.html"
    },
    {
        name: "The Witcher",
        story: "The Witcher is a fantasy drama web television series created by Lauren Schmidt Hissrich e by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.",
        year: "2019_",
        image: "../../Images/a.images/witcher.jpg",
        link: "../../html/witcher/index.html"
    },
]

const searchForSeries = (searchField, movies) => {
    searched_series_container.innerHTML = "";
    searched_series_container.style = "display: flex";

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
                searched_series_container.appendChild(li)
                searched_series_container.appendChild(document.createElement("hr"))
            })
        } else {
            const markup = '<h1 class="nothing-found">Nothing found !</h1>'
            searched_series_container.innerHTML = markup
        }
    }
    else { searched_series_container.style = "display: none" }

}

search_series.onkeyup = (e) => searchForSeries(e.target.value, series)