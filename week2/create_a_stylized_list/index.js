// var newH1 = document.createElement("h1")
// newH1.textContent = "Pokemon List"
// document.body.append(newH1)

var newp = {
    "pokemon": [

        {
            "name": "rattata",
            "resource_uri": "api/v1/pokemon/19/"
        },
        {
            "name": "charmander",
            "resource_uri": "api/v1/pokemon/4/"
        },
        {
            "name": "charmeleon",
            "resource_uri": "api/v1/pokemon/5/"
        },
        {
            "name": "wartortle",
            "resource_uri": "api/v1/pokemon/8/"
        }
    ]
}

// var newUl = document.createElement("ul")
// newUl.id = "pokemons"
// document.body.append(newUl)

var obj = JSON.stringify(newp)
document.body.innerHTML = obj


// var pokemonList = document.getElementById("pokemons")

// for (let i = 0; i < newp.length; i++) {
//     var newName = document.createElement("li")
//     newName.textContent = newp[i]
//     newp.append(newName)
// }
// var newH1 = document.createElement("h1")
// newH1.textContent = "Pokemon"
// document.body.append(newH1)