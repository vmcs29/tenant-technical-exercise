
# 📌 Project Name

## 📖 Overview
This repository covers test app for technical test review.

## 🚀 Features
- ✅ Automated tests using Playwright
- ✅ Reporting using a interactive html report file
- ✅ CI/CD config example 

## 🔧 Prerequisites
Have node.js installed

## 🔧 Installation
Follow these steps to set up the project locally:

Clone the project: 
`git clone https://github.com/vmcs29/tenant-technical-exercise.git`

Install dependencies: 
`npm install`

Install Playwright: 
`npm init playwright@latest`

Checking execution report: 
`npx playwright show-report`

## 🧪 Running Tests
- To run all test (this instruction will run all tests within test folder)


`npx playwright test`

- To run  tests inside a spec.file 

`npx playwright test <<name of file>>`

- To run specific tests, use the title of the test, e.g.

`npx playwright test -g "Logout After Successful Login"`


## 📂 Project Structure
```sh
tenant-technical-test/
│── .github/                # Contains .yml file which contains a example configuration to integrate this into a CI/CD pipeline
│── tests/                  # Contains Playwright test scripts
│   ├── helper/             # Helper folder which contains files to introduce into our tests.
│   │   ├── fixtures.ts     # Custom test fixtures
│   │   ├── appMessages.ts  # Stardard App Messages to maintain within the same file.
│   │   ├── testData.ts     # Stardard test data and credentials to maintain within the same file.
│   ├── pages/              # Contains file page objects to make our code more reusable and scalable as Page Object Model (POM) files
│   │   ├── LoginPage.ts    # Encapsulates login interactions
│   ├── test/               # Example test file
│   │   ├── login.spec.ts   # Test file which contains all the test scenarios
│── configs/                # (Optional) Environment configuration files
│── playwright.config.ts    # Playwright configuration file
│── package.json            # Project dependencies & scripts
│── node_modules/           # Installed packages (auto-generated)
│── README.md               # Project documentation
```

## 📬 Contact
For questions or contributions, please reach out!