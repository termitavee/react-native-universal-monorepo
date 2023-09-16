# React Native Universal monorepo

Using the minimal dependencies to have a fully funciontal monorepo avoiding redundancy

## Usage

Scripts folder has all necesary functions to init, run, compile and general use script

### Explanation

Boilerplate to use React native sintaxt in all possible platforms. Sorted by framework so for a project some folders can be deleted

Each platform will manage it's own navigation,screens and other stuff will be imported from app.

utils will be used for scripts and other stuff related to the project but no related to production app

### Depenencies

- For anything [node](https://nodejs.org/es) is required (better install with [nvm](https://github.com/nvm-sh/nvm))
- For mobile [React Native](https://reactnative.dev/docs/environment-setup?guide=quickstart) should be configured, by default uses expo go
- For web and extension no configuration is required, it uses [React Native for web](https://necolas.github.io/react-native-web/) as a compatibility layer to share code with React Native

## Planned to do

1. Create and test hello world

   [x] [electron](https://electronjs.org/) (desktop) (like electron but with rust and webview)

   [ ] [Neutrlino](https://neutralino.js.org/) (desktop) (like tarui but with js and webview)

   [ ] [tarui](https://tauri.app/) (desktop) (like electron but with rust and webview)

   [ ] [React native](https://reactnative.dev/) (ios and android)

   [x] [Expo](https://expo.dev/) (ios, android, web) (web can be ignored)

   [ ] [tv React native](https://github.com/react-native-tvos/react-native-tvos) (Apple TV, Android TV)

   [ ] [tv Expo](https://github.com/react-native-tvos/react-native-tvos) (Apple TV, Android TV)

   [ ] [React Native web](https://necolas.github.io/react-native-web/) (web)

   [ ] [nextjs](https://nextjs.org/) (web) (Also uses React native web)

   [ ] [Expo web](https://expo.dev/) (web) (Only web oriented, in case mobile has differencies)

   [ ] Browser extension (web extension) (Also uses React native web)

   [ ] [ink](https://github.com/vadimdemedes/ink) (terminal) (Uses React sintaxt)

2. configure projects

   [ ] eslint

   [ ] typescript

   [ ] prettier

3. Create scripts

   [ ] Init

   [ ] Rename

   [ ] Change version

   [ ] Remove/add workspace
