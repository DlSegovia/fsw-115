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

var obj = JSON.stringify(newp)
document.body.innerHTML = obj