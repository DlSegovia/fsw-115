function loadXML() {
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.vschool.io/pokemon", true);
    xhr.send();
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
            document.body.append(h1)
        }
    }
}
loadXML()
