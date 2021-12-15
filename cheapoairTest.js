const {Builder, By, Key} = require("selenium-webdriver");
const delay = require("delay");

async function searchFlights()
{
    let driver = await new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize(); 

    await driver.get("https://www.cheapoair.com/");

    var deleteText = await driver.findElement(By.xpath("//*[@id='panel-1']/div/div[4]/div[1]/div/div[1]/div/div[1]/div[1]/a")).click();
    await delay(500);
    var origin = await driver.findElement(By.id("from0")).sendKeys("JFK", Key.RETURN);
    await delay(500);
    var destination = await driver.findElement(By.id("to0")).sendKeys("SFO", Key.RETURN);
    var selectDeparture = await driver.findElement(By.id("cal0")).click().then(() => delay(1000)).then(() => driver.findElement(By.xpath("//a[@aria-label='27 December 2021']")).click());
    var selectReturn = await driver.findElement(By.id("cal1")).click().then(() => delay(1000)).then(() => driver.findElement(By.xpath("//a[@aria-label='30 December 2021']")).click());
    await delay(500);
    var searchBtn = await driver.findElement(By.id("searchNow")).click();
    await delay(500);
    var flightsOnly = await driver.findElement(By.xpath("//button[@class='btn btn-lg btn-block btn-outline-primary mt-3 btnFull btn-searchFlights']"));
    await delay(20000);

    setTimeout (function()
    {
        driver.quit();
    },  2000);
}
searchFlights()