/**
 * sub page containing specific selectors and methods for a specific page
 */
class seaBournHomepage {
    /**
     * define selectors using getter methods
     */
    public get SearchLink() {
        return $(`//*[@class="cmp-global-header__top-row"]//*[@data-automation-id='en-Search']`);
    }

    public get SearchPageSearchButton() {
        return $(`//*[@class='global-search-component__wrapper']//*[@data-automation-id='global-search-search']`);
    }

    public get findCruseSearch() {
        return $(`//*[@class='cmp-list']//*[@data-automation-id='en-Search']`);
    }

    public get sortByDropDown() {
        return $(`//*[@data-automation-id='Sort-by-Featured-Cruise-button']`);
    }

    /**
     * a method to click on search link at top of home page 
     * 
     */
    public async clickSearchLink() {

        await this.SearchLink.waitForClickable({ timeout: 10000 });
        (await this.SearchLink).click();

    }

    /**
    * a method to validate if search button is dispalyed 
    * 
    */
    public async isSearchButtonDispalyed() {
        await this.SearchPageSearchButton.waitForClickable({ timeout: 10000 });
        return (await this.SearchPageSearchButton).isDisplayed();
    }

    /**
    * a method to click on search button for cruise searching
    * 
    */
    public async clickFindCruseSearch() {
        await this.findCruseSearch.waitForClickable({ timeout: 10000 });
        (await this.findCruseSearch).click();
    }

    /**
     * a method to validate if drop down is dispalyed which ensures user naviagted to netx page 
     * 
     */
    public async isDropDownDispalyed() {

        await this.sortByDropDown.waitForClickable({ timeout: 10000 });
        return (await this.sortByDropDown).isDisplayed();
    }
}

export default new seaBournHomepage();
