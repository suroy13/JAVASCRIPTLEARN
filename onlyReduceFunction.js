

const arryNum= [34,8,9,0,8]

let getSumOfArray= arryNum.reduce((acc,number) => (acc + number),0)
console.log(`The Sum of the array is ${getSumOfArray}`);

//---------------------------------------------------
// Reduce example with a scenario
const products = [
    { productName: "Laptop", price: 999.99, category: "Electronics", stock: 50, rating: 4.5, onSale: true },
    { productName: "Smartphone", price: 699.99, category: "Electronics", stock: 150, rating: 4.7, onSale: false }
  ];
  
  const productNameWithStock50 = products.reduce((acc, product) => {
    if (product.stock === 50) {
      acc = product.productName; // Assign the product name to acc if stock is 50
    }
    return acc;
  }, '');
  
  console.log(productNameWithStock50); // Output: Laptop
  