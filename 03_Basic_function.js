// function
function costOfProducts(...num){
    if (!num){
        console.log("Please provide one of more number as parameter")
        return
    }
return `The product costs is/are ${num}`
}

console.log(costOfProducts(200,20,20))
console.log("Hello Js")
///-------------------
const user={
    name: "subhankar",
    prices: 999
}

function readObject(readFromObject){
    return `The values requested are ${readFromObject["name"]} for name  and ${readFromObject["price"]} for price`
}

console.log(readObject(user))
//----------------------
console.log(readObject({
    name: "subhankar",
    price: 999
}))
//------
const myArrayNum=[10,20,30,40,50,60]
function getTheArrayNumber(getArray){
    return `the array number requested is ${getArray[2]}`

}

console.log (getTheArrayNumber(myArrayNum))

