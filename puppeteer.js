const puppeteer = require("puppeteer");

(async ()=>{
  // launches headless browser
    const browser = await puppeteer.launch({headless: false})
    // opens new page
    const page= await browser.newPage();
    // navigates browser to this url
    await page.goto('https://www.scrapethissite.com/pages');
// waits for dom element to load according to selector
    const choose = 'a[href="/pages/simple/"]';
    
    await page.waitForSelector(choose);
    // clicks element with corresponding selector
    await page.click(choose);
    


// awaits selector
  await page.waitForSelector('h3')
  // creates a variable that awaits page load then selects h3 elements then saves the innerText
  const countryNames = await page.$$eval('h3', countries => {
    return countries.map(country => country.innerText)
  });
  // logs out innerText from h3's above
console.log(countryNames)






})();

