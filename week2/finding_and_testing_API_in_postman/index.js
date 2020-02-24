//const h1 = document.getElementsByTagName('h1')[0];
//h1.innerHTML = 'Hello, World!';

//const p = document.getElementsByTagName('p')[0];
// p.innerHTML = "resultes"
var newp = {
    "response_code": 0,
    "ressults": [{
        'name': 'Chewbacca',
        'height': '228',
        'mass': '112',
        'hair_color': 'brown',
        'skin_color': 'unknown',
        'eye_c olor': 'blue',
        'birth_year': '200BBY',
        'gender': 'male',

    }]
}
var obj = JSON.stringify(newp)
document.body.innerHTML = obj