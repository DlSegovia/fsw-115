var newH1 = document.createElement("h1")
newH1.textContent = "Name: Chewbacca"
document.body.append(newH1)

var newUl = document.createElement("ul")
newUl.id = "myList"
document.body.append(newUl)

const names = [
    "height: 228",
    "mass: 112",
    "hair_color: brown",
    "skin_color: unknown",
    "eye_color: blue",
    "birth_year: 200BBY",
    "gender: male"
]

for (let i = 0; i < names.length; i++) {
    var newLi = document.createElement("li")
    newLi.textContent = names[i]
    myList.append(newLi)
}