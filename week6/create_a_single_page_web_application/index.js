async function getData() {

    try {
        const response = await axios.get("https://swapi.dev/api/people/1/")
        const homeworld = await axios.get(response.data.homeworld);
        listHomeWorldToDOM(homeworld, response);

        for (var i = 0; i < 4; i++) {
            const film = await axios.get(response.data.films[i]);
            listFilmToDOM(film);
        }

    } catch (error) {
        console.log(error)
    }
}

getData()

function listHomeWorldToDOM(homeworld, luke) {
    const li = document.createElement('li');
    li.setAttribute('id', 'name');
    li.textContent = "Name: " + luke.data.name
    document.getElementById("myList").appendChild(li);

    const homeworldli = document.createElement('li');
    homeworldli.setAttribute('id', 'homeworld');
    homeworldli.textContent = "Homeworld: " + homeworld.data.name
    document.getElementById("myList").appendChild(homeworldli);

    const filmli = document.createElement('li');
    filmli.setAttribute('id', 'film');
    filmli.textContent = "Luke Skywalker's films:"
    document.getElementById("myList").appendChild(filmli);
}

function listFilmToDOM(film) {
    const episodeli = document.createElement('li');
    episodeli.setAttribute('id', 'episode');
    episodeli.textContent = "Episode: " + film.data.episode_id
    document.getElementById("myList").appendChild(episodeli);

    const titleli = document.createElement('li');
    titleli.setAttribute('id', 'title');
    titleli.textContent = "Title " + film.data.title
    document.getElementById("myList").appendChild(titleli);
}