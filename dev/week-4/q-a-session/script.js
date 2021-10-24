// Q&A

const shopper = `{
    "name": "Aaron",
    "shoppingList": [
        "apple","bananas","pears","grapes"
    ],
    "favStore": {
        "name": "Walmart",
        "location": "Cleveland"
        }
}`

const jsonShopper = JSON.parse(shopper);

console.log(shopper, jsonShopper);

