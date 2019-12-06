const request = require('request');
let catBreed = process.argv.slice(2);
request('https://api.thecatapi.com/v1/breeds/search/?q=' + catBreed, (error, response, body) => {
  if (error) {
    return console.log('error:', error); // Print the error if one occurred
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    return console.log('Breed name not found.');
  }
  console.log(data[0].description);
});