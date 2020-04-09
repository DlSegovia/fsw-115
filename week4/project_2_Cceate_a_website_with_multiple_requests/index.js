var btn1 = document.getElementById("btn1")
btn1.addEventListener("click", function() {

    axios.get("https://api.vschool.io/[daniel_segovia]/todo")
        .then(response => {
            console.log(response)
            for (let i = 0; i < response.data.length; i++) {
                const div = document.createElement('div')
                document.body.append(div)

                const h1 = document.createElement('h1')
                h1.textContent = response.data[i].title
                div.appendChild(h1);

                const h3 = document.createElement('h3')
                h3.textContent = response.data[i].description
                div.appendChild(h3);

                const h4 = document.createElement('h4')
                h4.textContent = response.data[i].price
                div.appendChild(h4);

                const p = document.createElement('p')
                p.textContent = response.data[i].completed
                document.body.append(p);
                if (response.data[i].completed) {
                    h1.style.textDecoration = "line-through"
                    h3.style.textDecoration = "line-through"
                    h4.style.textDecoration = "line-through"
                    p.style.textDecoration = "line-through"
                }
            }
        })
})