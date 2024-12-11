# My New Project

## Overview

This project is a test automation framework built using WebdriverIO with TypeScript. It is designed to enable efficient test execution with support for reporting and integration with various tools.

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Scripts](#scripts)
7. [Configuration](#configuration)
8. [Code explaination](#Code-explaination)
---

## Features

- Written in **TypeScript** for type safety.
- Supports **WebdriverIO** for web automation.
- Integrated with **Allure Reporting**.
- Modular design for easy extension.
- Compatible with **ChromeDriver** for local execution.

---

## Prerequisites

- **Node.js** v16 or higher
- **npm** or **yarn** for package management

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd my-new-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Running Tests Locally

To execute tests locally, use the following command:
```bash
npm run inLocal
```

---

## Project Structure

```plaintext
my-new-project/
├── node_modules/      # Installed dependencies
├── tsconfig.json      # TypeScript configuration
├── wdio.conf.ts       # WebdriverIO configuration
├── package.json       # Project metadata and scripts
├── .gitignore         # Git ignore rules
├── allure-results/    # Allure reports directory (ignored)
└── src/               # Source files
```

---

## Scripts

- **`npm run inLocal`**: Runs tests locally using WebdriverIO.

---

## Configuration

### TypeScript
The `tsconfig.json` file contains the TypeScript configuration. Key options:
- `moduleResolution`: Node
- `target`: ES2022
- `types`: Includes WebdriverIO, Mocha, and related types.

### WebdriverIO
The `wdio.conf.ts` file configures WebdriverIO for local execution using ChromeDriver.

### Code explaination
Test Execution Flow
Before Each Test:

The beforeEach hook ensures that a fresh browser session is started for each test. This is done using the browser.reloadSession() method, ensuring that each test runs in a clean environment without any interference from previous tests.
Test Case:

The test iterates over the entries in the appConfig object, which contains configuration details for both applications (Holland and Seabourn).
For each iteration, the application name (appName) and its corresponding configuration (config) are retrieved.
The browser.url() method is used to navigate to the application's base URL (config.baseUrl).
Based on the appName, the appropriate page object (halHomePage or seaBournHomepage) is selected dynamically. This is achieved using a simple mapping technique with an object that associates the appName with the corresponding page object.
The clickSearchLink() method is called on the selected page object to simulate a user clicking the search link on the homepage.
After clicking the search link, the test waits for the search button to be displayed on the search page using the isSearchButtonDisplayed() method.
The test then asserts that the search button is displayed on the search page using expect(isSearchButtonDisplayed).toBe(true) to verify that the user has successfully navigated from the homepage to the search page.
After Each Test:

The afterEach hook ensures that the browser session is closed after each test using browser.deleteSession(). This helps in freeing up resources and preparing the environment for the next test.
Key Methods:
clickSearchLink(): Clicks the search link located at the top of the homepage.
isSearchButtonDisplayed(): Verifies whether the search button is displayed on the search page after navigation.
Assertions:
The test checks whether the search button is displayed on the search page, which confirms the successful navigation from the homepage to the search page.
![image](https://github.com/user-attachments/assets/95c54923-01cb-4deb-bc15-6f1f4f934f0b)

Components:
1. halHomePage Class (for Holland America website)
Selectors: The class defines two selectors:
SearchLink: This selector is used to locate the search link on the homepage.
SearchPageSearchButton: This selector is used to locate the search button on the search page after the user clicks the search link.
Methods:
clickSearchLink: This method waits for the search link to be clickable and then clicks on it. It pauses for 3 seconds before attempting the click to ensure the page has loaded properly.
isSearchButtonDisplayed: This method waits for the search button to be clickable on the search page and then returns whether it is displayed or not.
2. seaBournHomepage Class (for Seabourn website)
Similar to the halHomePage class, this class defines the same selectors and methods for the Seabourn homepage.
SearchLink: Locates the search link on the Seabourn homepage.
SearchPageSearchButton: Locates the search button on the search page after clicking the search link.
clickSearchLink: Clicks on the search link on the homepage.
isSearchButtonDisplayed: Verifies if the search button is displayed on the search page after the search link is clicked.
3. appConfig Object
The appConfig object contains configuration details for both the applications (Holland and Seabourn).
Each app's configuration includes the base URL (baseUrl) and the page title (pageTitle) that will be used for assertions during the tests.
Example of How These Components Work Together
The page objects for halHomePage and seaBournHomepage are used in a test scenario to validate the behavior of the search functionality on both websites.

Test Flow:
Navigating to the Website: The baseUrl from appConfig is used to navigate to the corresponding website.
Clicking the Search Link: The clickSearchLink method is called to click the search link on the homepage.
Validating the Search Button: The isSearchButtonDisplayed method is used to verify if the search button is displayed on the search page after the navigation.


Page Object Model (POM) Overview:
This repository follows the Page Object Model (POM) design pattern to structure the automation tests for Holland America and Seabourn websites. POM allows creating a repository of reusable objects for each page in the application, improving code maintainability and readability.

Page Objects
Two page objects are defined for the websites:

Holland America Homepage (halHomePage)

Contains selectors for the search link and search button.
Provides methods to click the search link and verify the search button on the search page.
Seabourn Homepage (seaBournHomepage)

Similar to the halHomePage, contains selectors for the search link and search button.
Provides methods to click the search link and verify the search button.
Configuration File (appConfig)
The appConfig object contains the configuration details for the two applications:

Holland America:
URL: https://www.hollandamerica.com
Page Title: Find Cruise Packages for Holland America's Award-Winning Cruises
Seabourn:
URL: https://www.seabourn.com
Page Title: Seabourn Cruise Line
Test Execution Flow
The beforeEach hook ensures a fresh browser session is started before each test.
The it block defines a test for validating the search button functionality.
The afterEach hook ensures the browser session is closed after each test.


Technical Note: 
Separate Page Objects for Different Applications
In this automation framework, we have created separate page objects for the Holland America and Seabourn websites, even though they currently share the same locators and DOM structure. This approach provides several key advantages, particularly when scaling the framework or dealing with potential changes in the future.

Reasons for Separate Page Objects:
Future-Proofing for Application Differences:

Although both applications currently have identical locators and a similar DOM structure, it's highly likely that in the future, these applications will evolve independently. Each application might undergo UI changes, which could lead to different element locators or variations in the DOM structure.
By maintaining separate page objects for each application from the start, we ensure that any future changes in the UI of one application can be accommodated without impacting the other. This will make the migration process smoother and less error-prone.
Scalability:

In the event of UI changes, the separate page objects provide flexibility to modify locators and interactions for one application without affecting the other. This modularity ensures that the tests remain maintainable as each application's UI evolves independently.
It also allows for faster updates, as changes to one application’s page object will not require alterations to the other application’s page object or test logic.
Separation of Concerns:

By following the Page Object Model (POM) and maintaining separate page objects, we adhere to the principle of Separation of Concerns. This ensures that the logic for interacting with the user interface of each application is encapsulated within its respective page object, making the codebase more modular and easier to manage.
Ease of Migration:

In the future, if there is a need to migrate to different technologies, frameworks, or if the DOM structures diverge significantly, having distinct page objects will make the migration process easier. Each page object can be adapted independently to suit the new requirements without risking the stability of the other application’s tests.
Example Scenario:
Currently, both applications may use the same SearchLink and SearchPageSearchButton locators. However, if Holland America changes the class name for the search button in the future, we can update only the Holland America page object without having to alter the Seabourn page object, ensuring that both applications are correctly tested with minimal changes.
By adopting this approach, we future-proof the test automation suite, enabling it to scale easily with minimal effort even as both applications evolve and diverge.

---
