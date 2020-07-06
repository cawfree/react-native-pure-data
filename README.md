# react-native-pure-data

A native wrapper for [`libpd-ios`]() and [`libpd-android`](), which enables you to rapidly prototype [**DSP**]() algorithms described using [**Pure Data (Pd)**](). [Pure Data]() is an industry standard open source visual programming language capable of synthesising audiovisual effects.

[`**react-native-pure-data**`]() enables the synthesis of generative audio, which helps developers achieve dynamic sound at runtime. This is useful for games, music production and [communications]().

  - Capabilities
    - [**Patches**]() in Pure Data can be interacted with via [**React**]() component props.
    - Multiple simultaneous patches can be loaded.
    - Supports hot reloading, so DSP algorithms can be prototyped directly using Pure Data and then executed natively on an Android/iOS device or emulator.
    - Patches respect the [**Component Lifecycle**](), so they can be mounted or unmounted as expected.

## ⚠️ Warning

**Please be cautious when prototyping using this library.**

Pure Data is capable of generating high amplitude sound waves, and can [**damage your hearing if you choose to listen using headphones**](). Please take care to minimize the risk of hearing damage or loss as much as possible by **playing back on external speakers at a reduced volume whenever prototyping with new patches or props**. In addition, you must **always** consider the volume of the end user's device.

> With great power, comes great responsibility.

[_Linus Torvalds_]()

## 🚀 Getting Started

Using [`npm`]():

```bash
npm install --save react-native-pure-data
```

Using [`yarn`]():

```bash
yarn add react-native-pure-data
```

For versions less than [**React Native 0.60**](), be sure to execute `react-native link` to make the native library dependencies visible to your compiled application.

Finally, you'll [need to](https://github.com/facebook/metro/issues/367) update your [`metro.config.js`]() to help the [**Metro Bundler **]() load your patches:

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
## 😎 Resources 

  - [PatchStorage](https://patchstorage.com)
  - [PdPatchRepo](http://pdpatchrepo.info/patches/patch/14)

## ✌️ Licence
[MIT]()
