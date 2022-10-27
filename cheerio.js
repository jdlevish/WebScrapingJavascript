const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")
// target url
const url = "https://www.scrapethissite.com/pages/simple/";

// Async function which scrapes the data
async function scrapeData() {
    try {
      
      const { data } = await axios.get(url);
     
      const $ = cheerio.load(data);
      // Select all the list items in plainlist class
      const listItems = $(".country ");
      // Stores data for all countries
      
      const countries = [];
      // Use .each method to loop through the countries we selected
      listItems.each((idx, el) => {
        // Object holding data for each country
        const country = { name: "",info: "", capital: ""};
    
        // Store the text content in the above object
        country.name = $(el).children(".country-name").text();
        country.info = $(el).children("div").text();
        country.capital = $(el).children("div").children(".country-capital").text();
      
        
        
        // Populate countries array with country data
        countries.push(country);
      });
    
      // Write countries array in countries.json file
      fs.writeFile("countries.json", JSON.stringify(countries, null, 2), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Successfully written data to file");
      });
    } catch (err) {
      console.error(err);
    }
  }
  // Invoke the above function
  scrapeData();
