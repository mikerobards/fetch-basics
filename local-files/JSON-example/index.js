const user = {
    name: "Mike",
    age: 49
}

const json = JSON.stringify(user)

console.log(json)


// fetch('example.txt')
//     .then( response => response.text())
//     .then( text => {
//         const div = document.createElement('div');
//         div.innerHTML = text;
//         document.body.appendChild(div);
//     });

// EXERCISE 1
// Fetch the data from the .json file and display each persons name on the web page.

// fetch('people.json')
//     .then( res => res.json() )
//     .then( json => {
//         json.forEach( person => {
//             const div = document.createElement('div');
//             div.innerHTML = person.name;
//             document.body.appendChild(div);
//         })
//     })

// EXERCISE 2
// Fetch the data from the .json file and display each persons name and age like this: "John is 20".

// fetch('people.json')
//     .then( res => res.json() )
//     .then( json => {
//         json.forEach( person => {
//             const div = document.createElement('div');
//             div.innerHTML = `${person.name} is ${person.age}`;
//             document.body.appendChild(div);
//         })
//     })