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
            await browser.url(config.baseUrl);//Navigate to applicaiton URL 

            const page = { holland: halHomePage, seabourn: seaBournHomepage }[appName];// Dynamically choose the correct page object based on the app name

            await page.clickSearchLink();//Click on search link at top of home page 

            let isSearchButtonDisplayed = await page.isSearchButtonDispalyed();//User will be naviagted to seach page

            expect(isSearchButtonDisplayed).toBe(true);//Asserting if search button is displayed or not, which ensures user naviagted from Home page => Search page

        })

        it("Test to validate search cruise button", async () => {
            await browser.url(config.baseUrl);//Navigate to applicaiton URL 


            if (appName === 'holland') {
                const page = halHomePage;
                page.clickFindCruise();

                let isDropDownDispalyed = await page.isDropDownDispalyed();//User will be naviagted to seach page

                expect(isDropDownDispalyed).toBe(true);//Asserting if search button is displayed or not, which ensures user naviagted from Home page => Search page


            }
            else
                if (appName === 'seabourn') {
                    const page = seaBournHomepage;
                    page.clickFindCruseSearch();

                    let isDropDownDispalyed = await page.isDropDownDispalyed();//User will be naviagted to seach page

                    expect(isDropDownDispalyed).toBe(true);//Asserting if search button is displayed or not, which ensures user naviagted from Home page => Search page

                }

        })
    });
})


//  Ensuring the browser session is closed after each test
afterEach(async () => {
    await browser.deleteSession();  // Ensure the browser session is closed after the test
});