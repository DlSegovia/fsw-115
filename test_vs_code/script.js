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
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'myList');

    var li = document.createElement('li');
    li.setAttribute('class', 'name');
    li.textContent = "Name: " + luke.data.name
    ul.appendChild(li);

    const homeworldli = document.createElement('li');
    homeworldli.textContent = "Homeworld: " + homeworld.data.name
    document.body.appendChild(homeworldli);

    const filmli = document.createElement('li');
    filmli.textContent = "Luke Skywalker's films:"
    document.body.appendChild(filmli);
}

function listFilmToDOM(film) {
    const episodeli = document.createElement('li');
    episodeli.textContent = "Episode: " + film.data.episode_id
    document.body.appendChild(episodeli);

    const titleli = document.createElement('li');
    titleli.textContent = "Title " + film.data.title
    document.body.appendChild(titleli);
}