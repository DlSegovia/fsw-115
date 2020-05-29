// This is the get function returns todo list from database
const form = document.getElementById("myDIV").children
form[4].addEventListener("click", newElement)
axios.get("https://api.vschool.io/daniel_segovia/todo/")
    .then(response => {

        for (let i = 0; i < response.data.length; i++) {
            const div = document.createElement('div');
            myList.prepend(div);
            div.id = response.data[i]._id;
            div.style.display = "flex";


            // This is the check box for the todo's that are done
            const checkbox = document.createElement('ckbox');
            checkbox.className = "checkbox";
            div.appendChild(checkbox);


            // This is the li's being appended to the ul
            const li = document.createElement('li');
            li.textContent = response.data[i].title;
            div.appendChild(li);

            newLi = document.createElement('li');
            newLi.textContent = response.data[i].description;
            div.appendChild(newLi);

            priceLi = document.createElement('li');
            priceLi.textContent = "$" + response.data[i].price;
            div.appendChild(priceLi);


            // Here are the edit and delete symbol
            var spanEdit = document.createElement("SPAN");
            var txt = document.createElement("i");
            txt.classList = "far fa-edit";
            spanEdit.className = "edit";
            spanEdit.appendChild(txt);
            div.appendChild(spanEdit);
            spanEdit.id = response.data[i]._id;

            var span = document.createElement("SPAN");
            var txt = document.createElement("i");
            txt.classList = "fas fa-trash-alt";
            span.className = "close";
            span.appendChild(txt);
            div.appendChild(span);
            span.id = response.data[i]._id;

            // these are the event listeners for complet, edit, and delete functions
            div.addEventListener("click", completFunction);
            span.addEventListener("click", deleteFunction);
            spanEdit.addEventListener("click", editFunction);

            if (response.data[i].completed) {
                div.classList.toggle('checked');
            }
        }
    })

// Add a "checked" symbol when clicking on a box changes the complete to TRUE
function completFunction(e) {
    const id = e.target.id;
    console.log("completFunction Target", e.target);

    if (e.target.tagName === 'DIV' || e.target.tagName === 'CKBOX') {
        e.currentTarget.classList.toggle('checked');
        axios.put("https://api.vschool.io/daniel_segovia/todo/" + e.currentTarget.id, {
                completed: (e.currentTarget.classList == "checked" ? true : false)
            })
            .then(response => {
                console.log(response.data);
            })
    }

    // if (e.currentTarget.tagName != "SPAN" && e.currentTarget.className != "close") {
    //     console.log("line74")
    // }
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
        axios.post("https://api.vschool.io/daniel_segovia/todo/", newElement)
            .then(response => {
                const div = document.createElement('div');
                div.style.display = "flex"
                document.getElementById("myList").prepend(div);

                const checkbox = document.createElement('ckbox');
                checkbox.className = "checkbox"
                div.appendChild(checkbox);

                const li = document.createElement('li');
                li.textContent = inputTitle;
                div.appendChild(li);

                newLi = document.createElement('li');
                newLi.textContent = inputDescription;
                div.appendChild(newLi);

                div.id = response.data._id;
                priceLi = document.createElement('li');
                priceLi.textContent = "$" + inputPrice;
                div.appendChild(priceLi);


                // This code clears the values after posting the new todo
                document.getElementsByTagName("input")[0].value = "";
                document.getElementsByTagName("input")[1].value = "";
                document.getElementsByTagName("input")[2].value = "";


                //  Here are the edit and delete symbol
                var spanEdit = document.createElement("SPAN");
                var txt = document.createElement("i");
                txt.classList = "far fa-edit";
                spanEdit.className = "edit";
                spanEdit.appendChild(txt);
                div.appendChild(spanEdit);
                spanEdit.id = response.data._id;


                var span = document.createElement("SPAN");
                var txt = document.createElement("i");
                txt.classList = "fas fa-trash-alt";
                span.className = "close";
                span.appendChild(txt);
                div.appendChild(span);
                span.id = response.data._id;


                // these are the event listeners for complet, edit, and delete functions
                spanEdit.addEventListener("click", editFunction);
                div.addEventListener("click", completFunction);
                span.addEventListener("click", deleteFunction);
            })

    }

}


// This function is to create variables for the edit
function editFunction(e) {

    const currentValues = document.getElementById(e.currentTarget.id).children;
    const id = e.currentTarget.id;
    const inputs = document.getElementById("myDIV").children;


    // this puts the LI to edit into the inputs and removes the $ from the current LI
    // and changes the event listener from new element to update function
    inputs[1].value = currentValues[1].textContent;
    inputs[2].value = currentValues[2].textContent;
    console.log("textcontent value", currentValues[3].textContent);
    console.log("type of data of the text content value, which should be a number", typeof currentValues[3].textContent);
    console.log("split to break down the textcontent at the dollar sign, this is an array", currentValues[3].textContent.split("$"));
    console.log("choosing only the number AFTER the dollar sign", currentValues[3].textContent.split("$")[1]);
    console.log("turning string number left to a number type", Number(currentValues[3].textContent.split("$")[1]));
    inputs[3].value = Number(currentValues[3].textContent.split("$")[1]);
    console.log(inputs[4]);
    inputs[4].removeEventListener("click", newElement);
    inputs[4].addEventListener("click", updateFunction);

    // Here this update function takes the new values and then axios.put updates the API, and
    // changes the event listener to remove update function and add new element
    function updateFunction() {
        console.log(inputs);
        const values = { title: inputs[1].value, description: inputs[2].value, price: inputs[3].value };
        console.log(values);

        currentValues[1].innerHTML = inputs[1].value;
        currentValues[2].textContent = inputs[2].value;
        currentValues[3].textContent = "$" + inputs[3].value;

        axios.put(`https://api.vschool.io/daniel_segovia/todo/${id}`, values)
            .then(response => {
                inputs[1].value = ""
                inputs[2].value = ""
                inputs[3].value = ""
                console.log(response.data);
                inputs[4].removeEventListener("click", updateFunction);
                inputs[4].addEventListener("click", newElement);
                console.log(inputs[4]);
            }).catch(error => { console.log(error) });
    }
}
// This is the delete function
function deleteFunction(e) {
    const deleteLi = document.getElementById(e.currentTarget.id);
    console.log(deleteLi)
    axios.delete("https://api.vschool.io/daniel_segovia/todo/" + deleteLi.id)
        .then(response => {

            console.log(response.data);
            alert(response.data.msg);
            deleteLi.remove();
        })
}