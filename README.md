# react-native-pure-data
🔈 ⚡ Synthesize algorithmic sound at runtime in React Native. 

## Safety
Make sure you're not wearing headphones! Try to debug at a safe volume.

## Bundler

[here](https://github.com/facebook/metro/issues/367)

```diff
+ const metroDefault = require('metro-config/src/defaults/defaults.js');

module.exports = {
    resolver: {
        + assetExts: metroDefault.assetExts.concat(['md']),
    },
};
```
