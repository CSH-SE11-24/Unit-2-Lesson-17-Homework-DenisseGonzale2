const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)

let favRes={
	name:"La Estrella",
	cuisine: "tacos",
	rating: 7
}

// Console log the restaurant's name using the object

console.log(favRes["name"])

// Add a new key called location and add the restaurant's location

favRes["location"]="bronx"

// Change the rating of the restaurant to increase it by one

favRes["rating"]++

// Add a new key called test and set the value to null

favRes["test"]= null

// Delete the test key

delete favRes.test


// Console log the object to see if the test key is gone

console.log(favRes)


// Loop through the object and print every key and element.
console.log(favRes["name"])
console.log(favRes["cuisine"])
console.log(favRes["rating"])
console.log(favRes["location"])

// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn





