const xhr = new XMLHttpRequest()

xhr.open("GET", "https://swapi.co/api/planets", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.results)
    }
}

function showData(arr) {
    for (let i = 0; i < arr.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}

xhr.open("GET", "https://swapi.co/api/people/13", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data)
    }
}

function showData(Chewbacca) {
    const h1 = document.createElement('h1')
    h1.textContent = Chewbacca.name
    document.body.appendChild(h1)
}

xhr.open("GET", "https://api.vschool.io/[daniel_segovia]/todo", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data)
    }
}

function showData(arr) {
    for (let i = 0; i < arr.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].title
        document.body.appendChild(h1)
    }
}