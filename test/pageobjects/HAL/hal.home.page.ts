/**
 * sub page containing specific selectors and methods for a specific page
 */
class halHomePage {
   /**
     * define selectors using getter methods
     */
   public get SearchLink() {
    return $(`//*[@class="cmp-global-header__top-row"]//*[@data-automation-id='en-Search']`);
}

public get SearchPageSearchButton() {
    return $(`//*[@class='global-search-component__wrapper']//*[@data-automation-id='global-search-search']`);
}

/**
 * a method to encapsule automation code to interact with the page
 * 
 */
public async clickSearchLink() {
    await browser.pause(3000);
    await this.SearchLink.waitForClickable({ timeout: 10000 });
    (await this.SearchLink).click();
    
}

public async isSearchButtonDispalyed(){

    await this.SearchPageSearchButton.waitForClickable({ timeout: 10000 });
    return (await this.SearchPageSearchButton).isDisplayed();
}
}

export default new halHomePage();
