function loadXML() {
    //create new xhr object by initializing XMLHTTPREQUEST
    const xhr = new XMLHttpRequest();
    //define our CRUD operation
    xhr.open("GET", "https://api.vschool.io/pokemon", true);
    //similar to a function needs to be "called" or actually sent
    xhr.send();
    //interact with our recieved data
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
            const jsonData = xhr.responseText;
            const data = JSON.parse(jsonData);
            showData(data.objects[0].pokemon)
        }
    };

    function showData(arr) {
        for (let i = 0; i < arr.length; i++) {
            const h1 = document.createElement('h1')
            h1.innerHTML = "name: " + arr[i].name + "</br> resource_uri: " + arr[i].resource_uri
                // h1.textContent = "name: " + arr[i].name ", resource_uri: " + arr[i].resource_uri
            document.body.append(h1)
        }
    }
}
loadXML()