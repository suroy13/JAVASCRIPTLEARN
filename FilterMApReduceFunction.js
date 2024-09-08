const country = [
    { nameOfCountry: "India", CurrencyUsed: "INR", capital: "New Delhi", population: 1500000000, nuclearPower: true },
    { nameOfCountry: "Canada", CurrencyUsed: "CAD", capital: "Ottawa", population: 30000000, nuclearPower: false },
    { nameOfCountry: "Australia", CurrencyUsed: "AUD", capital: "Canberra", population: 25000000, nuclearPower: true },
    { nameOfCountry: "Brazil", CurrencyUsed: "BRL", capital: "Brasília", population: 211000000, nuclearPower: false },
    { nameOfCountry: "China", CurrencyUsed: "CNY", capital: "Beijing", population: 1400000000, nuclearPower: true },
    { nameOfCountry: "France", CurrencyUsed: "EUR", capital: "Paris", population: 67000000, nuclearPower: true },
    { nameOfCountry: "Germany", CurrencyUsed: "EUR", capital: "Berlin", population: 83000000, nuclearPower: true },
    { nameOfCountry: "Japan", CurrencyUsed: "JPY", capital: "Tokyo", population: 126000000, nuclearPower: true },
    { nameOfCountry: "Mexico", CurrencyUsed: "MXN", capital: "Mexico City", population: 126000000, nuclearPower: false },
    { nameOfCountry: "Nigeria", CurrencyUsed: "NGN", capital: "Abuja", population: 200000000, nuclearPower: false },
    { nameOfCountry: "Russia", CurrencyUsed: "RUB", capital: "Moscow", population: 144000000, nuclearPower: true },
    { nameOfCountry: "South Africa", CurrencyUsed: "ZAR", capital: "Pretoria", population: 58000000, nuclearPower: true },
    { nameOfCountry: "South Korea", CurrencyUsed: "KRW", capital: "Seoul", population: 52000000, nuclearPower: true },
    { nameOfCountry: "United Kingdom", CurrencyUsed: "GBP", capital: "London", population: 66000000, nuclearPower: true },
    { nameOfCountry: "United States", CurrencyUsed: "USD", capital: "Washington, D.C.", population: 331000000, nuclearPower: true },
    { nameOfCountry: "Argentina", CurrencyUsed: "ARS", capital: "Buenos Aires", population: 45000000, nuclearPower: false },
    { nameOfCountry: "Italy", CurrencyUsed: "EUR", capital: "Rome", population: 60000000, nuclearPower: true },
    { nameOfCountry: "Spain", CurrencyUsed: "EUR", capital: "Madrid", population: 47000000, nuclearPower: true }
  ];

  const products = [
    { productName: "Laptop", price: 999.99, category: "Electronics", stock: 50, rating: 4.5, onSale: true },
    { productName: "Smartphone", price: 699.99, category: "Electronics", stock: 150, rating: 4.7, onSale: false },
    { productName: "Headphones", price: 199.99, category: "Electronics", stock: 200, rating: 4.3, onSale: true },
    { productName: "Coffee Maker", price: 89.99, category: "Home Appliances", stock: 80, rating: 4.2, onSale: false },
    { productName: "Blender", price: 49.99, category: "Home Appliances", stock: 120, rating: 4.0, onSale: true },
    { productName: "Sneakers", price: 59.99, category: "Footwear", stock: 300, rating: 4.6, onSale: false },
    { productName: "T-shirt", price: 19.99, category: "Clothing", stock: 500, rating: 4.1, onSale: true },
    { productName: "Jeans", price: 39.99, category: "Clothing", stock: 400, rating: 4.4, onSale: false },
    { productName: "Watch", price: 149.99, category: "Accessories", stock: 100, rating: 4.5, onSale: true },
    { productName: "Sunglasses", price: 79.99, category: "Accessories", stock: 250, rating: 4.3, onSale: false },
    { productName: "Backpack", price: 49.99, category: "Accessories", stock: 150, rating: 4.2, onSale: true },
    { productName: "Tablet", price: 299.99, category: "Electronics", stock: 100, rating: 4.6, onSale: false },
    { productName: "Gaming Console", price: 399.99, category: "Electronics", stock: 60, rating: 4.8, onSale: true },
    { productName: "Microwave", price: 129.99, category: "Home Appliances", stock: 70, rating: 4.4, onSale: false },
    { productName: "Vacuum Cleaner", price: 159.99, category: "Home Appliances", stock: 90, rating: 4.5, onSale: true },
    { productName: "Jacket", price: 79.99, category: "Clothing", stock: 200, rating: 4.3, onSale: false },
    { productName: "Boots", price: 99.99, category: "Footwear", stock: 150, rating: 4.6, onSale: true }
  ];

  // Nuclear power finder with filter function 
  let  nuclearPowerFinder;

  nuclearPowerFinder=country
  .filter((country) => (country.nuclearPower === true ))
  .map ((country) => (country.nameOfCountry ))

console.log(nuclearPowerFinder);

// loopthrough and get the value of the country 

for (let i=0; i <nuclearPowerFinder.length;i++ ) {

    if (nuclearPowerFinder[i]==='India'){
        console.log(`The country you are searching for is ${nuclearPowerFinder[i]} `);
        break
    }
    else 
    {
        console.log(`Not yet found the country you are searching but you can check these ${nuclearPowerFinder[i]} `);
    }

}

