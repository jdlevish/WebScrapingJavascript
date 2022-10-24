const puppeteer = require("puppeteer");

(async ()=>{
    const browser = await puppeteer.launch({headless: false})
    const page= await browser.newPage();
    await page.goto('https://www.scrapethissite.com/pages');

    const choose = 'a[href="/pages/simple/"]';
    await page.waitForSelector(choose);
    await page.click(choose);
    



  await page.waitForSelector('h3')
  const countryNames = await page.$$eval('h3', countries => {
    return countries.map(country => country.innerText)
  });
console.log(countryNames)






})();

  // #countries > div > div:nth-child(4) > div:nth-child(1) > h3