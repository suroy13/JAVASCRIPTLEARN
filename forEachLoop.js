const country=["india","canada","USA","China","Japan"]

// country.forEach(function (countryValues){  // Callback function means its dont have any name

//     console.log(countryValues);
// })
// Using the arrw function

// country.forEach( (countryValues )=> {  // Callback function means its dont have any name

//     console.log(countryValues);
// })

//loop through arry of objects for specific value

const car=[
    { nameofCar: "BMW",
    countryOfManufacture: "Germany"},

    { nameofCar: "SUZUKI",
        countryOfManufacture: "Japan"},

        { nameofCar: "TATA",
            countryOfManufacture: "India"}
]

car.forEach((itemsOfCar) => {
console.log(itemsOfCar.countryOfManufacture);
})


