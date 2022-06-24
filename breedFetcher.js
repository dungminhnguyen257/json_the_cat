const request = require("request");

// const breed = process.argv[2];

const fetchBreedDescription = function (breedname, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedname}`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null); //server error as the first argument
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback("Invalid breed", null); //no server error, and no breed was found
    }
  });
};
module.exports = { fetchBreedDescription };
// fetchBreedDescription("Siberian", (error, description) => {
//   request(url, (error, response, body) => {
//     if (error) {
//       console.log("error:", error); // Print the error if one occurred
//       console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//     }
//     const data = JSON.parse(body);
//     console.log(data[0].description);
//   });

// });
