# My React Native App

## Overview
This project is a React Native application that features a splash screen as the initial entry point. The splash screen is designed to provide a smooth user experience while the app is loading.

## Project Structure
```
my-react-native-app
├── src
│   ├── screens
│   │   └── SplashScreen.tsx
│   ├── components
│   │   ├── Logo.tsx
│   │   └── StatusBarBackground.tsx
│   ├── navigation
│   │   └── index.tsx
│   ├── hooks
│   │   └── useAppStartup.ts
│   └── styles
│       └── global.ts
├── assets
│   └── fonts
├── package.json
├── tsconfig.json
├── app.json
└── README.md
```

## Installation
To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-react-native-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the App
To run the application, use the following command:
```
npm start
```
This will start the Metro bundler. You can then run the app on an emulator or a physical device.

## Components
- **SplashScreen**: The main splash screen of the application, which imports and uses the `Logo` and `StatusBarBackground` components.
- **Logo**: Displays the logo image as defined in the design.
- **StatusBarBackground**: Sets the background color of the status bar to match the design specifications.

## Navigation
The app uses a navigation setup defined in `src/navigation/index.tsx`, which includes the initial route to the `SplashScreen`.

## Custom Hooks
The `useAppStartup` hook in `src/hooks/useAppStartup.ts` manages the app's startup logic, ensuring resources are loaded before navigating away from the splash screen.

## Styles
Global styles are defined in `src/styles/global.ts`, including colors, fonts, and other styling constants that align with the design.

## Fonts
Custom fonts used in the application are located in the `assets/fonts` directory.

## License
This project is licensed under the MIT License. See the LICENSE file for details.