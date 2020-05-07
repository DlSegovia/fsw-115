async function getData() {

    try {
        const response = await axios.get("https://swapi.dev/api/people/1/")
        const homeworld = await axios.get(response.data.homeworld)
        listHomeWorldToDOM(homeworld, response)

        for (var i = 0; i < 4; i++) {
            const film = await axios.get(response.data.films[i])
            listFilmToDOM(film)
        }

    } catch (error) {
        console.log(error)
    }
}

getData()

function listHomeWorldToDOM(homeworld, luke) {
    const nameh1 = document.createElement('h1')
    nameh1.textContent = "Name: " + luke.data.name
    document.body.appendChild(nameh1)

    const newh1 = document.createElement('h1')
    newh1.textContent = "Homeworld: " + homeworld.data.name
    document.body.appendChild(newh1)

    const h1 = document.createElement('h1')
    h1.textContent = "Luke Skywalker's films:"
    document.body.appendChild(h1)
}

function listFilmToDOM(film) {
    const h2 = document.createElement('h2')
    h2.textContent = "Episode: " + film.data.episode_id
    document.body.appendChild(h2)

    const h3 = document.createElement('h3')
    h3.textContent = film.data.title
    document.body.appendChild(h3)
}