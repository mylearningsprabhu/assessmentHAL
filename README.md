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
8. [Contributing](#contributing)
9. [License](#license)

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

---
