axios.get("https://api.vschool.io/[daniel_segovia]/todo")
    .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
            const div = document.createElement('div')
            document.body.append(div)
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            div.appendChild(h1)
            const h3 = document.createElement('h3')
            h3.textContent = response.data[i].description
            div.appendChild(h3)
            if (response.data[i].completed) {
                h1.style.textDecoration = "line-through"
                h3.style.textDecoration = "line-through"
            }
            // const img = document.createElement('img')
            // img.src = response.data[i].imgUrl
            // div.appendChild(img)
        }
    })
    .catch(error => console.log(error))