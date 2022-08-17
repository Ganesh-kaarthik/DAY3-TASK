// creating the object
let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]

// using for loop to iterate the  object
for (let i = 0; i < object.length; i++){
    console.log(`
    person : ${object[i].person};
    age : ${object[i].age};
    company : ${object[i].company};

    `)
}

// using for each loop to iterate the object
Object.keys(object).forEach(key => {
    const value = object[key]
    console.log(key, value);

});

// using for in loop to iterate the object
for (let key in object) {
    console.log(object[key]);
}

// using for of loop to iterate the object
for (let bio of object) {
    console.log(bio);
}