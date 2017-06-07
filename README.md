![Alt text](docs/images/react-state-listener-logo1x.png)

# AppStateListener

[![npm version](https://badge.fury.io/js/react-native-appstate-listener.svg)](https://www.npmjs.com/package/react-native-appstate-listener)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Adapt React Native AppState changes to the React component lifecycle.

Instead of setting up your own event listeners for `AppState` changes, include an `AppStateListener` component in your application, passing callbacks as props for the `AppState` changes you are interested in.  `AppStateListener` sets up the listeners for you and then calls your callbacks whenever `AppState` changes.

If you're using [Redux](http://redux.js.org/) in your application and you'd rather have `AppState` changes mapped into Redux actions, see [redux-enhancer-react-native-appstate](https://www.npmjs.com/package/redux-enhancer-react-native-appstate).

## Installation

```
yarn add react-native-appstate-listener
```

(or `npm install react-native-appstate-listener` if you prefer).

## Usage

When some part of your application needs to respond to `AppState` changes, add an `AppStateListener` to the relevant component.

`AppStateListener` takes three callbacks as props:

- `onActive` is called when the application starts running in the foreground.  This happens when it first starts up, or when returning from the background or inactive state. `onActive` is also called when the `AppStateListener` component is first mounted.

- `onBackground` is called when the application moves into the background, either because the user switches to the home screen or another application.  `onBackground` is also called when the `AppStateListener` component is unmounted.

- `onInactive` is called when the application moves into an inactive state.  This occurs when transitioning between foreground and background, and during periods of inactivity such as entering the Multitasking view or in the event of an incoming call.

`AppStateListener` provides default callbacks that do nothing, so you only need to provide the callbacks you're interested in.

## Example

```js
import React from "react";
import { Text, View } from "react-native";
import AppStateListener from "react-native-appstate-listener";

function handleActive() {
  console.log("The application is now active!");
}

function handleBackground() {
  console.log("The application is now in the background!");
}

function handleInactive() {
  console.log("The application is now inactive!");
}

export default function MyComponent() {
  return (
    <View>
      <AppStateListener
        onActive={handleActive}
        onBackground={handleBackground}
        onInactive={handleInactive}
      />
      <Text>Hello, World!</Text>
    </View>
  );
}
```

## Contributing

Pull requests are welcome!

To get started:

- Clone the project.

- Run `yarn install` to install dependencies.

- Make your desired changes.  We don't currently have any tests, but if you are adding significant functionality, please get in touch and we'll talk about how to introduce testing.

- Ensure that you format the code with [prettier](https://www.npmjs.com/package/prettier) by running `yarn run format`.

- Ensure that the code follows the current style guidelines by running `yarn run lint`.

- Submit your pull request.

## License

Authored by the Engineering Team of [Zeal](https://codingzeal.com?utm_source=github).

Copyright (c) 2017 Zeal, LLC.  Licensed under the [MIT license](https://opensource.org/licenses/MIT).
