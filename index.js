const puppeteer = require("puppeteer");
// const url = 'https://chooseyourcocktail.com';
//   async function configureTheBrowser()  {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: "load", timeout: 0 });
//     return page;
//   }
//  configureTheBrowser()
(async ()=>{
    const browser = await puppeteer.launch({headless: false})
    const page= await browser.newPage();
    await page.goto('https://chooseyourcocktail.com/');

    const choose = '.navHeader';
    await page.waitForSelector(choose);
    await page.click(choose);
    const input = "input"
    await page.waitForSelector(input);
    await page.type(input, 'vodka');

    const searchButton = '.btn-danger';
    await page.waitForSelector(searchButton);
    await page.click(searchButton);
    await page.click(searchButton);

    // const moreBiz = '.MXl0lf tKtwEb wHYlTd';
    // await page.waitForSelector(moreBiz);
    // await page.click(moreBiz)

//     const data =  await page.evaluate(()=>{
//         items = document.getElementsByClassName("landingImage");

//         return items
//     })
// return screen
  })();


