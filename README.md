# Puzzle-R-Native-Carousel
### This is a carousel mobile application made in React Native using Expo.

#### To clone the repo and run it locally:

1. Clone this repo on your command shell **`<git clone>`** https://github.com/Dabuaf86/Puzzle-R-Native-Carousel
1. Open the directory in which you cloned the repo **`<cd "your directory">`** (with no brackets)
1. Open your code editor in that directory. Type **`<code .>`** to quickly open it
1. Run the **`<npm install>`**  command in order to install all needed dependencies
1. Run the **`<npm start>`** or **`<expo start>`** command in order to start compiling the program
1. If you want to use an Android Emulator such as Android Studio, open it, go to the AVD manager, select a phone/tablet and press play to load the device
1. Once opened and correctly loaded you can hit the "**Run on Android device/emulator**" button on your Metro Bundler where the app is running
1. In case you want to run this on an iOS mobile device, you must be running the app on an iOS based device. Means you can't run it on windows.
1. Should you be running the app on iOS, then you will need to install Xcode and follow the steps in: https://reactnative.dev/docs/_getting-started-macos-ios#installing-an-ios-simulator-in-xcode


### Description
* This app is connected to a server endpoint on: **https://testapi.io/api/dabuaf86/images**.
* The server holds an application/json of 6 blocks of images and its titles.
* Each slide choses an image randomly from the multiple images fetched from the server.
* Navigation is made with next and previous buttons represented with arrows.
* Next button is disabled, if the user is at the very end of the carousel
* Previous button is disabled, if the user is at the very beginning of the carousel.
* The app persists the last position of the carousel with **Storage from Expo**. When the app closes and opens again, the carousel starts from the stored position.
* On future commits it will also be able to scroll by touch and show part of the previous and following images as you go.

Enjoy!

[Ver video del componente en funcionamiento](https://youtu.be/G6KIxEIKQmw)
**https://youtu.be/G6KIxEIKQmw**
