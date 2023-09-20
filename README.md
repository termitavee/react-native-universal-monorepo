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

### npm dependencies

- Normaly most of devDependencies will be in the roo package json
- standalone and unified dependencies will work as in a normal project, each one will have it's own dependenceis values
- commmon is using wild card to ensure compatibility, in the future could use values to ensure the updates of all workspaces

## Planned to do

- Create and test hello world for dummy apps
  Apps that has the native code but shares the whole App

  - [x] Move App to own workspace and current created projects to app/

  - [x] [Electron](https://electronjs.org/) (desktop) (like electron but with rust and webview)

  - [x] [Expo](https://expo.dev/) (ios, android, web) (web can be ignored)

  - [ ] [Neutrlino](https://neutralino.js.org/) (desktop) (like tarui but with js and webview)

  - [ ] [tarui](https://tauri.app/) (desktop) (like electron but with rust and webview)

  - [ ] [tv Expo](https://github.com/react-native-tvos/react-native-tvos) (Apple TV, Android TV)

  - [ ] [React native](https://reactnative.dev/) (ios and android)

  - [ ] [tv React native](https://github.com/react-native-tvos/react-native-tvos) (Apple TV, Android TV)

  - [ ] [React Native web](https://necolas.github.io/react-native-web/) (web)

  - [ ] [Expo web](https://expo.dev/) (web) (Only web oriented, in case mobile has differencies)

- Create and test hello world for standalone apps
  Apps that shares only part of the code, created on standalone/<project>

  - [x] Create workpsace with common parts (screens, components, utils...)

  - [x] [ink](https://github.com/vadimdemedes/ink) (terminal) (Uses React sintaxt)

  - [ ] Browser extension (web extension) (Also uses React native web)

  - [ ] Backend express?

  - [ ] [nextjs](https://nextjs.org/) (web) (Also uses React native web)

- configure projects

  - [x] Eslint config

  - [x] Prettier config

  - [ ] Project global config (added config, require fixes)

  - [ ] Typescript and test linter

  - [ ] Configure npm scripts

  - [ ] review dependencies and use actual version in step of wildcard

  - [ ] Fix npm audit vulnerabilities

- Create scripts

  - [ ] Init

  - [ ] Rename

  - [ ] Change version

  - [ ] Remove/add workspace

## Documentation

- expo guide for monorepos: [docs.expo.dev/guides/monorepos](https://docs.expo.dev/guides/monorepos/)

- [original idea](https://github.com/mmazzarolo/react-native-universal-monorepo)
