# MY APP

This is a mobile application built with Ionic Angular. It features a user-friendly registration form and a simple home page with a link to the subscription page.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Build the App](#getting-started)
  - [Build for Web](#build-for-web)
  - [Build for Android](#build-for-android)
  - [Build for Ios](#build-for-ios)
- [Home Page](#home-page)
- [Subscription Page](#subscription-page)
- [License](#license)


## Overview

This application provides a simple home page and a registration form for parents to subscribe their children to various activities. It includes standard text inputs, a date of birth selector using dropdowns, a grade selector, a custom gender selection, and a multi-select option for choosing topics of interest. The app also has a basic home page that directs users to the subscription form.

## Features

- **User Subscription Page:**
  - Collects parent's name and email.
  - Gathers child's full name and date of birth (Day, Month, Year dropdowns).
  - Allows selection of the child's grade via a dropdown.
  - Provides a custom "Girl" and "Boy" gender selection using styled radio buttons.
  - Enables parents to select up to 3 topics of interest using custom-styled checkboxes.
  - Input fields with "fill outline" style and rounded borders for a modern look.
  - Basic form validation to ensure required fields are filled and email format is correct.
- **Simple Home Page:**
  - Provides a welcoming message.
  - Contains a clear link or button to navigate to the registration/subscription form.
  - Information about our services and how to subscribe

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (LTS version recommended): [https://nodejs.org/](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn:** [https://yarnpkg.com/](https://yarnpkg.com/)
- **Ionic CLI:** Install globally using npm or yarn:
  ```bash
  npm install -g @ionic/cli
  # or
  yarn global add @ionic/cli
  ```

### Installation
1. Clone the repository using the following command: `git clone https://github.com/Hajar-Omar/ncle`
2. Navigate to the project directory: `cd ncle`
3. Install the required dependencies: `npm install` or `yarn install`
4. Run the application: `npx ionic serve` or `npx ng serve`
5. Open your browser and navigate to `http://localhost:8100` to view the app


## Build the Application

#### We have 1 app ( NCLE ) using ionic framework. We will use the following commands to build the app on different platforms.

### Build for Web:

1- Install `node:20.12.2` as BUILD

2- Run `npm i` to install all the dependencies from `package.json`

3- Run `npm run build` to build all the apps in `aot` mode

4- Copy from `www` to get build for the `ncle` web app

### Build for Android:

1- Using `Capacitor`

2- Run `npx cap add android` to add the Android platform

3- Run `npx cap open android` To open the project in Android Studio

### Build for Ios:

1- Using `Capacitor`

2- Run `npx cap add ios` to add the Ios platform

3- Run `npx cap open ios` to open the project in Xcode

For More Info : [Build your App on different platforms](https://ionicframework.com/docs/)


## Home Page
![Home Page](src/assets/images/home.png)
![Home Page](src/assets/images/home2.png)

## Subscription Page
![Subscription Page](src/assets/images/sub.png)

## License
MIT License
