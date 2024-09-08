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
    { productName: "Backpack", price: 49.99, category: "Accessories", stock: 150, rating: 4.2, onSale: true }]

    // Summation of the shopping cart price with reduce function
    
    const totalItemPrice=products.reduce((acc,products)=>(acc+products.price),0)
    console.log(`The total item cost on the cart is ₹ ${totalItemPrice.toFixed(2)}`);