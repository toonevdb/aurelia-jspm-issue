# Aurelia JSPM 0.17 beta issue

## Overview

This repo shows an issue where 'app-bundle.js' is not requested as defined in 'build/bundles.js'.
The dependencies are based on those I require in an app I'm developing but that doesn't matter.
That app started off the skeleton provided by https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-typescript.

Now I have updated jspm to use version 0.17 but I'm having an issue with the configuration causing systemjs to never request 'app-bundle.js'.

I expect that it caused by systemsjs 0.20 not allowing wildcard paths anymore (https://github.com/systemjs/systemjs/issues/1039).
It seems `"*": "dist/*"` under 'paths' in jspm.config.js is ignored (to some degree). It no longer requests 'app-bundle.js' as it did before the update to jspm 0.17.

## Possible solution

After experimenting and testing a lot, I noticed that if I change the paths in the bundles entry of jspm.config.js while `gulp serve-bundle` is running, 'app-bundle.js' is requested.
Changing 'app-build.js' to 'dist/app-build.js' and doing the same for the entries, fixes it.
But I'm not sure if that is the best solution. There might be a way to define that 'dist/' prefix.

If adding 'dist/' to the bundle's name and entries is the best solution, I expect that the aurelia-bundler needs updating.
Around [line 169 in aurelia bundler](https://github.com/aurelia/bundler/blob/master/lib/bundler.ts#L169), in the function 'injectBundle'.
Getting the canonical name causes 'dist/' to disappear. This should be changed then, I suspect, as well as adding the prefix path part to all entries.

## How to reproduce

1. clone repo
2. npm install
3. jspm install
4. gulp serve-bundle
