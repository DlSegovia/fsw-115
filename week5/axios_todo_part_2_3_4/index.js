// This is the get function returns todo list from database

axios.get("https://api.vschool.io/daniel_segovia/todo")
    .then(response => {

        for (let i = 0; i < response.data.length; i++) {
            const div = document.createElement('div');
            myList.appendChild(div)
            div.id = response.data[i]._id
            div.style.display = "flex"

            const checkbox = document.createElement('ckbox');
            checkbox.className = "checkbox"
            div.appendChild(checkbox);

            const li = document.createElement('li');
            li.textContent = response.data[i].title;
            div.appendChild(li);

            newLi = document.createElement('li');
            newLi.textContent = response.data[i].description;
            div.appendChild(newLi);

            priceLi = document.createElement('li')
            priceLi.textContent = "$" + response.data[i].price;
            div.appendChild(priceLi);

            var spanEdit = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            spanEdit.className = "edit";
            spanEdit.appendChild(txt);
            li.appendChild(spanEdit);
            console.log(spanEdit)
            spanEdit.id = response.data[i]._id

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);
            span.id = response.data[i]._id


            div.addEventListener("click", editFunction)
            span.addEventListener("click", deleteFunction)

            if (response.data[i].completed) {
                div.classList.toggle('checked');
            }
        }
    })

// Add a "checked" symbol when clicking on a list item changes the complete to TRUE
function editFunction(e) {
    const id = e.currentTarget.id
    console.log(e.currentTarget)

    if (e.currentTarget.tagName === 'DIV') {
        e.currentTarget.classList.toggle('checked');
    }

    if (e.currentTarget.tagName != "SPAN") {
        axios.put("https://api.vschool.io/daniel_segovia/todo/" + e.currentTarget.id, {
                completed: (e.currentTarget.classList == "checked" ? true : false)
            })
            .then(response => {

                console.log(response.data)

            })
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var inputTitle = document.getElementsByClassName("myInput")[0].value;
    var inputDescription = document.getElementsByClassName("myInput")[1].value;
    var inputPrice = document.getElementsByClassName("myInput")[2].value;
    const newElement = {
            title: inputTitle,
            description: inputDescription,
            price: inputPrice
        }
        // This 'if' statment is to make sure the new todo is fillout correctly
    if (inputTitle === '') {
        alert("You must write Title!");
    } else if (inputDescription === '') {
        alert("You must write Description!");
    } else if (inputPrice === '') {
        alert("You must write Price!");
    } else {

        // This is so the new todo gets post to the database
        axios.post("https://api.vschool.io/daniel_segovia/todo", newElement)
            .then(response => {
                const div = document.createElement('div');
                div.style.display = "flex"
                document.getElementById("myList").appendChild(div);

                const checkbox = document.createElement('ckbox');
                checkbox.className = "checkbox"
                div.appendChild(checkbox);

                const li = document.createElement('li');
                li.textContent = inputTitle;
                div.appendChild(li);

                newLi = document.createElement('li');
                newLi.textContent = inputDescription;
                div.appendChild(newLi);

                div.id = response.data._id
                priceLi = document.createElement('li')
                priceLi.textContent = "$" + inputPrice;
                div.appendChild(priceLi);



                // This code clears the values after posting the new todo
                document.getElementsByTagName("input")[0].value = "";
                document.getElementsByTagName("input")[1].value = "";
                document.getElementsByTagName("input")[2].value = "";



                var span = document.createElement("SPAN");
                var txt = document.createTextNode("\u00D7");
                span.className = "close";
                span.appendChild(txt);
                li.appendChild(span);

                span.id = response.data._id




                div.addEventListener("click", editFunction)
                span.addEventListener("click", deleteFunction)
            })

    }
    console.log("hello world")
}
// This is the delete function
function deleteFunction(e) {
    const deleteLi = document.getElementById(e.target.id)
    axios.delete("https://api.vschool.io/daniel_segovia/todo/" + e.target.id)
        .then(response => {
            deleteLi.remove()
            console.log(response.data)
            alert(response.data.msg)
        })
}


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a 'X' button to Deletes the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
// <i class="fas fa-trash-alt"></i>