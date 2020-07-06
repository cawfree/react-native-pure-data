# react-native-pure-data

<p align="center">
  <img
    src="./public/logo.png"
    width="200"
    height="100"
  />
</p>

A native wrapper for [`libpd-ios`]() and [`libpd-android`](), which enables you to rapidly prototype [**DSP**]() algorithms described using [**Pure Data**](), an industry standard open source visual programming language capable of synthesising audiovisual effects.

[`react-native-pure-data`]() enables the synthesis of generative audio, which helps developers achieve dynamic sound at runtime. This is useful for games, music production and [communications]().

### Key Features

  - [**Patches**]() in Pure Data can be interacted with via [**React**]() component props.
  - Simultaneous patche execution.
  - Supports [**hot reloading**](), so DSP algorithms can be prototyped directly using Pure Data's interface and then executed concurrently on an Android/iOS device or emulator.
  - Loaded patches respect the [**Component Lifecycle**](), so they can be mounted or unmounted as expected.

## ⚠️ Warning

**Please be extremely cautious when prototyping using this library.**

Pd is capable of generating high amplitude sound waves, which can [**damage your hearing if you choose to listen using headphones**]().

Please take care to minimize the risk of hearing damage or loss as much as possible by playing back on external speakers at a reduced volume whenever prototyping with new patches or props. In addition, you must **always** consider the volume of the end user's device.

And remember,

> With great power, comes great responsibility.

[- Linus Torvalds]()

## 🚀 Getting Started

### Installing

Using [`npm`]():

```bash
npm install --save react-native-pure-data
```

Using [`yarn`]():

```bash
yarn add react-native-pure-data
```

For versions of [**React Native**]() less than [**0.60**](), after installation has complete you must execute `react-native link` to make the native library dependencies visible to your compiled application.

### Updating metro.config.js

Once installed, you'll [need to](https://github.com/facebook/metro/issues/367) update your [`metro.config.js`]() to help the [**Metro Bundler **]() load your patches:

```diff
+const metroDefault = require('metro-config/src/defaults/defaults.js');

 module.exports = {
   resolver: {
+    assetExts: metroDefault.assetExts.concat(['pd']),
   },
 };
```

This will enable [**hot loading**](), so you can modify your patches even whilst they're being rendered by the app.

### iOS

After installing, you should quit the Metro Bundler if it's already running and enter your app's `/ios` directory. Then use:

```bash
pod install # update cocoapods
cd ..
react-native run-ios
```
### Android

Once the library is installed, quit the Metro Bundler (if already running) and finally call:

```bash
react-native run-android
```
## ✨ Helpful Resources 

  - [Awesome Pure Data](https://github.com/virtualtam/awesome-puredata)
  - [PatchStorage](https://patchstorage.com)
  - [PdPatchRepo](http://pdpatchrepo.info/patches/patch/14)

## ✌️ Licence
[MIT]()
