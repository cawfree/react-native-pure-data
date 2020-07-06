# react-native-pure-data

<p align="center">
  <img
    src="./public/logo.png"
  />
</p>

A native wrapper for [`libpd-ios`](https://github.com/libpd/pd-for-ios) and [`libpd-android`](https://github.com/libpd/pd-for-android), which enables you to rapidly prototype [**DSP**]() algorithms described using [**Pure Data**](), an industry standard open source visual programming language capable of synthesising audiovisual effects.

[`react-native-pure-data`](https://github.com/cawfree/react-native-pure-data) enables the synthesis of generative audio, which helps developers achieve dynamic sound at runtime. This is useful for games, music production and [communications](https://github.com/cawfree/OpenChirp).

### Key Features

  - [**Patches**](https://puredata.info/community/member-downloads/patches) in Pure Data can be interacted with via [**React**]() component props.
  - Simultaneous patche execution.
  - Supports [**hot reloading**](https://reactnative.dev/blog/2016/03/24/introducing-hot-reloading.html), so DSP algorithms can be prototyped directly using Pure Data's interface and then executed concurrently on an Android/iOS device or emulator.
  - Loaded patches respect the [**Component Lifecycle**](https://reactjs.org/docs/state-and-lifecycle.html), so they can be mounted or unmounted as expected.

## ⚠️ Warning

**Please be extremely cautious when prototyping using this library.**

Pd is capable of generating high amplitude sound waves, which can [**damage your hearing if you choose to listen using headphones**](https://www.reddit.com/r/puredata/comments/gc06aa/is_it_true_that_using_pure_data_with_earphones_is/).

Please take care to minimize the risk of hearing damage or loss as much as possible by playing back on external speakers at a reduced volume whenever prototyping with new patches or props. In addition, you must **always** consider the volume of the end user's device.

And remember,

> With great power, comes great responsibility.
> [- Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds)


## 🚀 Getting Started

### 1. Installing

Using [`npm`](https://www.npmjs.com/):

```bash
npm install --save react-native-pure-data
```

Using [`yarn`](https://classic.yarnpkg.com/en/):

```bash
yarn add react-native-pure-data
```

For versions of [**React Native**](https://reactnative.dev/) less than [**0.60**](https://reactnative.dev/blog/2019/07/03/version-60), after installation has complete you must execute `react-native link` to make the native library dependencies visible to your compiled application.

### 2. Update `metro.config.js`

Once installed, you'll [need to](https://github.com/facebook/metro/issues/367) update your [`metro.config.js`](./example/metro.config.js) to help the [**Metro Bundler**](https://github.com/facebook/metro) load your patches:

```diff
+const metroDefault = require('metro-config/src/defaults/defaults.js');

 module.exports = {
   resolver: {
+    assetExts: metroDefault.assetExts.concat(['pd']),
   },
 };
```

This will enable **hot loading**, so you can modify your patches even whilst they're being rendered by the app.

### 3. Runtime Specific

#### 3.1 iOS

After installing, you should quit the Metro Bundler if it's already running and enter your app's `/ios` directory. Then use:

```bash
pod install # update cocoapods
cd ..
react-native run-ios
```
#### 3.2 Android

Once the library is installed, quit the Metro Bundler (if already running) and finally call:

```bash
react-native run-android
```
## ✨ Resources 

  - [**Awesome Pure Data**](https://github.com/virtualtam/awesome-puredata)
  - [**PatchStorage**](https://patchstorage.com)
  - [**PdPatchRepo**](http://pdpatchrepo.info/patches/patch/14)

## ✌️ Licence
[**MIT**](./LICENSE.md)
