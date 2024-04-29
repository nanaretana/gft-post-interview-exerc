# Playwright Post Interview Exercise

## Introduction

This test automation suite is developed with Playwright to automate the testing of a web application for the post-interview exercise.
It includes test cases covering various scenarios and functionalities of the application to be runned in web and mobile simulation

## Features

- Automated end-to-end testing of the web application using Playwright.
- Easy setup and execution of tests using npm scripts.
- Automated generation of report of test with video execution test evidence
- Png screenshoot as test evidence

## Getting Started

To get started with the test automation suite, follow the instructions below.

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)
- Visual Studio Code
- Playwright extession intalled in Visual Studio Code
  
 ### Installation

1. Clone the repository: git clone https://github.com/nanaretana/gft-post-interview-exerc.git
2. Navigate to the project directory:
3. Install dependecies: npm install

## Usage
To run the automated tests, use the following npm script:
npm test 

## Test Report
You can generate and view the test report by running the following command:
 npx playwright test --ui
 npx playwright show-report
