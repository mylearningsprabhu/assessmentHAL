import appConfig from '../config/appConfig.js'
import halHomePage from '../pageobjects/HAL/hal.home.page.js';
import seaBournHomepage from '../pageobjects/SeaBourn/seabourn.home.page.js';

// Use beforeEach hook to start the browser session for each iteration
beforeEach(async () => {
    await browser.reloadSession();  // Ensure a fresh session for each test
});



describe("Validate search button", async () => {
    Object.entries(appConfig).forEach(([appName, config]) => {
        it("Test to validate search link click scenario", async () => {

            console.log(`Testing app: ${appName}, URL: ${config.baseUrl}, PageTitle:${config.pageTitle}`);
            await browser.url(config.baseUrl);
            const page = { holland: halHomePage, seabourn: seaBournHomepage }[appName];// Dynamically choose the correct page object based on the app name

            await page.clickSearchLink();

            let isSearchButtonDisplayed = await page.isSearchButtonDispalyed(); 
            expect(isSearchButtonDisplayed).toBe(true);
    
        })
    });
})


//  Ensuring the browser session is closed after each test
afterEach(async () => {
    await browser.deleteSession();  // Ensure the browser session is closed after the test
});