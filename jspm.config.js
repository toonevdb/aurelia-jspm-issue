SystemJS.config({
  paths: {
    "*": "dist/*",
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/",
    "map": {
      "vendor.js": "dist/vendor.js",
      "app-build.js": "dist/app-build.js"
    }
  },
  devConfig: {
    "map": {
      "typescript": "npm:typescript@2.5.3",
      "net": "npm:jspm-nodelibs-net@0.2.1",
      "module": "npm:jspm-nodelibs-module@0.2.1"
    },
    "packages": {
      "npm:typescript@2.5.3": {
        "map": {
          "source-map-support": "npm:source-map-support@0.5.0"
        }
      },
      "npm:source-map-support@0.5.0": {
        "map": {
          "source-map": "npm:source-map@0.6.1"
        }
      }
    }
  },
  transpiler: false,
  meta: {
    "*.css": {
      "loader": "css"
    },
    "*.scss": {
      "loader": "sass"
    }
  },
  packages: {
    "dist": {
      "defaultExtension": "js"
    },
    "github:dougludlow/plugin-sass@0.6.0": {
      "map": {
        "postcss": "npm:postcss@5.2.18",
        "css-url-rewriter-ex": "npm:css-url-rewriter-ex@1.0.6",
        "css-asset-copier": "npm:css-asset-copier@1.0.2",
        "autoprefixer": "npm:autoprefixer@6.7.7",
        "sass.js": "npm:sass.js@0.9.13",
        "reqwest": "github:ded/reqwest@2.0.5"
      }
    },
    "npm:postcss@5.2.18": {
      "map": {
        "js-base64": "npm:js-base64@2.3.2",
        "supports-color": "npm:supports-color@3.2.3",
        "chalk": "npm:chalk@1.1.3",
        "source-map": "npm:source-map@0.5.7"
      }
    },
    "npm:autoprefixer@6.7.7": {
      "map": {
        "postcss": "npm:postcss@5.2.18",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "browserslist": "npm:browserslist@1.7.7",
        "caniuse-db": "npm:caniuse-db@1.0.30000751",
        "num2fraction": "npm:num2fraction@1.2.2",
        "normalize-range": "npm:normalize-range@0.1.2"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "supports-color": "npm:supports-color@2.0.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1"
      }
    },
    "npm:css-url-rewriter-ex@1.0.6": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:css-asset-copier@1.0.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "fs-extra": "npm:fs-extra@0.30.0"
      }
    },
    "npm:supports-color@3.2.3": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:browserslist@1.7.7": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000751",
        "electron-to-chromium": "npm:electron-to-chromium@1.3.27"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "core-js": "npm:core-js@2.5.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.11.0"
      }
    },
    "npm:fs-extra@0.30.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "jsonfile": "npm:jsonfile@2.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "klaw": "npm:klaw@1.3.1",
        "rimraf": "npm:rimraf@2.6.2"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:rimraf@2.6.2": {
      "map": {
        "glob": "npm:glob@7.1.2"
      }
    },
    "npm:glob@7.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "minimatch": "npm:minimatch@3.0.4",
        "once": "npm:once@1.4.0",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "inflight": "npm:inflight@1.0.6"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.8"
      }
    },
    "npm:brace-expansion@1.1.8": {
      "map": {
        "balanced-match": "npm:balanced-match@1.0.0",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:chart.js@2.7.0": {
      "map": {
        "moment": "npm:moment@2.18.1",
        "chartjs-color": "npm:chartjs-color@2.2.0"
      }
    },
    "npm:aurelia-notification@1.0.0": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
        "aurelia-i18n": "npm:aurelia-i18n@1.6.2",
        "aurelia-pal": "npm:aurelia-pal@1.4.0",
        "humane-js": "npm:humane-js@3.2.2",
        "extend": "npm:extend@3.0.1"
      }
    },
    "npm:qtip2@3.0.3": {
      "map": {
        "jquery": "npm:jquery@3.2.1",
        "imagesloaded": "npm:imagesloaded@4.1.3"
      }
    },
    "npm:air-datepicker@2.2.3": {
      "map": {
        "jquery": "npm:jquery@3.2.1"
      }
    },
    "github:rstacruz/nprogress@0.2.0": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.36"
      }
    },
    "npm:snapsvg@0.5.1": {
      "map": {
        "eve": "npm:eve@0.5.4"
      }
    },
    "npm:cytoscape@3.2.4": {
      "map": {
        "heap": "npm:heap@0.2.6",
        "lodash.debounce": "npm:lodash.debounce@4.0.8"
      }
    },
    "npm:imagesloaded@4.1.3": {
      "map": {
        "ev-emitter": "npm:ev-emitter@1.1.1"
      }
    },
    "npm:chartjs-color@2.2.0": {
      "map": {
        "color-convert": "npm:color-convert@0.5.3",
        "chartjs-color-string": "npm:chartjs-color-string@0.5.0"
      }
    },
    "npm:bootstrap@4.0.0-beta": {
      "map": {
        "tether": "github:HubSpot/tether@1.4.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.8"
      }
    },
    "npm:chartjs-color-string@0.5.0": {
      "map": {
        "color-name": "npm:color-name@1.1.3"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.1"
      }
    },
    "npm:buffer@5.0.8": {
      "map": {
        "base64-js": "npm:base64-js@1.2.1",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:crypto-browserify@3.11.1": {
      "map": {
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "create-hash": "npm:create-hash@1.1.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hmac": "npm:create-hmac@1.1.6",
        "randombytes": "npm:randombytes@2.0.5",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.8",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.1"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.9",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.8",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.9"
      }
    },
    "npm:pbkdf2@3.0.14": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.9",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "browserify-des": "npm:browserify-des@1.0.0"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.1.3"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:sha.js@2.4.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:browserify-aes@1.1.1": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "hash-base": "npm:hash-base@3.0.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "string_decoder": "npm:string_decoder@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    }
  },
  map: {
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
    "plugin-typescript": "github:frankwallis/plugin-typescript@7.1.0",
    "sass": "github:dougludlow/plugin-sass@0.6.0",
    "air-datepicker": "npm:air-datepicker@2.2.3",
    "animate.css": "npm:animate.css@3.5.2",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.4",
    "aurelia-binding": "npm:aurelia-binding@1.5.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
    "aurelia-dialog": "npm:aurelia-dialog@1.0.0-rc.1.0.3",
    "aurelia-environment": "github:toonevdb/aurelia-environment@0.1.7",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.3",
    "aurelia-framework": "npm:aurelia-framework@1.1.5",
    "aurelia-history": "npm:aurelia-history@1.1.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.1.0",
    "aurelia-i18n": "npm:aurelia-i18n@1.6.2",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.3",
    "aurelia-logging": "npm:aurelia-logging@1.3.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
    "aurelia-notification": "npm:aurelia-notification@1.0.0",
    "aurelia-pal": "npm:aurelia-pal@1.4.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.3.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.2.2",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.4.0",
    "aurelia-tabbed": "npm:aurelia-tabbed@0.1.3",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
    "aurelia-templating": "npm:aurelia-templating@1.6.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.4.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.5.3",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.2.0",
    "aurelia-testing": "npm:aurelia-testing@1.0.0-beta.3.0.1",
    "aurelia-validation": "npm:aurelia-validation@1.1.2",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "npm:bootstrap@4.0.0-beta",
    "bootstrap-switch": "npm:bootstrap-switch@3.3.4",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "chart.js": "npm:chart.js@2.7.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "css": "github:systemjs/plugin-css@0.1.36",
    "cytoscape": "npm:cytoscape@3.2.4",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fetch": "github:github/fetch@1.1.1",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "graceful-fs": "npm:graceful-fs@4.1.11",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "i18next": "npm:i18next@3.5.2",
    "i18next-xhr-backend": "npm:i18next-xhr-backend@1.4.3",
    "intl": "npm:intl@1.2.5",
    "jquery": "npm:jquery@3.2.1",
    "moment": "npm:moment@2.19.1",
    "nprogress": "github:rstacruz/nprogress@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "popper.js": "npm:popper.js@1.12.6",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "qtip2": "npm:qtip2@3.0.3",
    "snapsvg": "npm:snapsvg@0.5.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "text": "github:systemjs/plugin-text@0.0.8",
    "urijs": "npm:urijs@1.19.0",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1"
  },
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  depCache: {
    "app.js": [
      "aurelia-framework",
      "jquery",
      "popper.js",
      "bootstrap",
      "animate.css/animate.css"
    ],
    "main.js": [
      "aurelia-environment",
      "aurelia-event-aggregator",
      "aurelia-i18n",
      "aurelia-router",
      "aurelia-validation",
      "i18next-xhr-backend"
    ]
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8/text.js",
      "app.js",
      "github:systemjs/plugin-text@0.0.8.json",
      "main.js",
      "resources/index.html!github:systemjs/plugin-text@0.0.8/text.js",
      "resources/index.js"
    ],
    "vendor.js": [
      "github:github/fetch@1.1.1.json",
      "github:github/fetch@1.1.1/fetch.js",
      "github:rstacruz/nprogress@0.2.0.json",
      "github:rstacruz/nprogress@0.2.0/nprogress.css!github:systemjs/plugin-css@0.1.36/css.js",
      "github:rstacruz/nprogress@0.2.0/nprogress.js",
      "github:systemjs/plugin-css@0.1.36.json",
      "github:systemjs/plugin-text@0.0.8.json",
      "github:toonevdb/aurelia-environment@0.1.7.json",
      "github:toonevdb/aurelia-environment@0.1.7/aurelia-environment.js",
      "github:toonevdb/aurelia-environment@0.1.7/index.js",
      "github:toonevdb/aurelia-environment@0.1.7/parser.js",
      "npm:animate.css@3.5.2.json",
      "npm:animate.css@3.5.2/animate.css!github:systemjs/plugin-text@0.0.8/text.js",
      "npm:aurelia-animator-css@1.0.4.json",
      "npm:aurelia-animator-css@1.0.4/aurelia-animator-css.js",
      "npm:aurelia-binding@1.5.0.json",
      "npm:aurelia-binding@1.5.0/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.1.json",
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.2.json",
      "npm:aurelia-dependency-injection@1.3.2/aurelia-dependency-injection.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3.json",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/attach-focus.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/aurelia-dialog.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-cancel-error.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-configuration.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-controller.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-renderer.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-service.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/dialog-settings.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/lifecycle.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/renderer.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/ux-dialog-body.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/ux-dialog-footer.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/ux-dialog-header.js",
      "npm:aurelia-dialog@1.0.0-rc.1.0.3/ux-dialog.js",
      "npm:aurelia-event-aggregator@1.0.1.json",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.1.3.json",
      "npm:aurelia-fetch-client@1.1.3/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.1.5.json",
      "npm:aurelia-framework@1.1.5/aurelia-framework.js",
      "npm:aurelia-history-browser@1.1.0.json",
      "npm:aurelia-history-browser@1.1.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.1.0.json",
      "npm:aurelia-history@1.1.0/aurelia-history.js",
      "npm:aurelia-i18n@1.6.2.json",
      "npm:aurelia-i18n@1.6.2/aurelia-i18n-loader.js",
      "npm:aurelia-i18n@1.6.2/aurelia-i18n.js",
      "npm:aurelia-i18n@1.6.2/base-i18n.js",
      "npm:aurelia-i18n@1.6.2/defaultTranslations/relative.time.js",
      "npm:aurelia-i18n@1.6.2/df.js",
      "npm:aurelia-i18n@1.6.2/i18n.js",
      "npm:aurelia-i18n@1.6.2/nf.js",
      "npm:aurelia-i18n@1.6.2/relativeTime.js",
      "npm:aurelia-i18n@1.6.2/rt.js",
      "npm:aurelia-i18n@1.6.2/t.js",
      "npm:aurelia-i18n@1.6.2/utils.js",
      "npm:aurelia-loader-default@1.0.3.json",
      "npm:aurelia-loader-default@1.0.3/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.json",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.json",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.3.1.json",
      "npm:aurelia-logging@1.3.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.json",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.3.0.json",
      "npm:aurelia-pal-browser@1.3.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.4.0.json",
      "npm:aurelia-pal@1.4.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.json",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.2.2.json",
      "npm:aurelia-polyfills@1.2.2/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.1.json",
      "npm:aurelia-route-recognizer@1.1.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.4.0.json",
      "npm:aurelia-router@1.4.0/aurelia-router.js",
      "npm:aurelia-tabbed@0.1.3/index.js",
      "npm:aurelia-tabbed@0.1.3/tab-content.js",
      "npm:aurelia-tabbed@0.1.3/tab-headers.js",
      "npm:aurelia-tabbed@0.1.3/tabs-wrapper.js",
      "npm:aurelia-task-queue@1.2.1.json",
      "npm:aurelia-task-queue@1.2.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.4.0.json",
      "npm:aurelia-templating-binding@1.4.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.5.3.json",
      "npm:aurelia-templating-resources@1.5.3/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.5.3/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.5.3/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.3/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.3/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.5.3/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.5.3/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.5.3/binding-signaler.js",
      "npm:aurelia-templating-resources@1.5.3/compose.js",
      "npm:aurelia-templating-resources@1.5.3/css-resource.js",
      "npm:aurelia-templating-resources@1.5.3/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.3/dynamic-element.js",
      "npm:aurelia-templating-resources@1.5.3/else.js",
      "npm:aurelia-templating-resources@1.5.3/focus.js",
      "npm:aurelia-templating-resources@1.5.3/hide.js",
      "npm:aurelia-templating-resources@1.5.3/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.5.3/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.5.3/if-core.js",
      "npm:aurelia-templating-resources@1.5.3/if.js",
      "npm:aurelia-templating-resources@1.5.3/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.3/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.3/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.3/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.5.3/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.5.3/repeat.js",
      "npm:aurelia-templating-resources@1.5.3/replaceable.js",
      "npm:aurelia-templating-resources@1.5.3/sanitize-html.js",
      "npm:aurelia-templating-resources@1.5.3/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.3/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.3/show.js",
      "npm:aurelia-templating-resources@1.5.3/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.3/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.3/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.3/with.js",
      "npm:aurelia-templating-router@1.2.0.json",
      "npm:aurelia-templating-router@1.2.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.2.0/route-href.js",
      "npm:aurelia-templating-router@1.2.0/route-loader.js",
      "npm:aurelia-templating-router@1.2.0/router-view.js",
      "npm:aurelia-templating@1.6.0.json",
      "npm:aurelia-templating@1.6.0/aurelia-templating.js",
      "npm:aurelia-validation@1.1.2.json",
      "npm:aurelia-validation@1.1.2/aurelia-validation.js",
      "npm:aurelia-validation@1.1.2/get-target-dom-element.js",
      "npm:aurelia-validation@1.1.2/implementation/expression-visitor.js",
      "npm:aurelia-validation@1.1.2/implementation/rules.js",
      "npm:aurelia-validation@1.1.2/implementation/standard-validator.js",
      "npm:aurelia-validation@1.1.2/implementation/validation-message-parser.js",
      "npm:aurelia-validation@1.1.2/implementation/validation-messages.js",
      "npm:aurelia-validation@1.1.2/implementation/validation-rules.js",
      "npm:aurelia-validation@1.1.2/property-accessor-parser.js",
      "npm:aurelia-validation@1.1.2/property-info.js",
      "npm:aurelia-validation@1.1.2/util.js",
      "npm:aurelia-validation@1.1.2/validate-binding-behavior-base.js",
      "npm:aurelia-validation@1.1.2/validate-binding-behavior.js",
      "npm:aurelia-validation@1.1.2/validate-event.js",
      "npm:aurelia-validation@1.1.2/validate-result.js",
      "npm:aurelia-validation@1.1.2/validate-trigger.js",
      "npm:aurelia-validation@1.1.2/validation-controller-factory.js",
      "npm:aurelia-validation@1.1.2/validation-controller.js",
      "npm:aurelia-validation@1.1.2/validation-errors-custom-attribute.js",
      "npm:aurelia-validation@1.1.2/validation-renderer-custom-attribute.js",
      "npm:aurelia-validation@1.1.2/validator.js",
      "npm:i18next-xhr-backend@1.4.3.json",
      "npm:i18next-xhr-backend@1.4.3/dist/commonjs/ajax.js",
      "npm:i18next-xhr-backend@1.4.3/dist/commonjs/index.js",
      "npm:i18next-xhr-backend@1.4.3/dist/commonjs/utils.js",
      "npm:i18next-xhr-backend@1.4.3/index.js",
      "npm:i18next@3.5.2.json",
      "npm:i18next@3.5.2/dist/commonjs/BackendConnector.js",
      "npm:i18next@3.5.2/dist/commonjs/CacheConnector.js",
      "npm:i18next@3.5.2/dist/commonjs/EventEmitter.js",
      "npm:i18next@3.5.2/dist/commonjs/Interpolator.js",
      "npm:i18next@3.5.2/dist/commonjs/LanguageUtils.js",
      "npm:i18next@3.5.2/dist/commonjs/PluralResolver.js",
      "npm:i18next@3.5.2/dist/commonjs/ResourceStore.js",
      "npm:i18next@3.5.2/dist/commonjs/Translator.js",
      "npm:i18next@3.5.2/dist/commonjs/compatibility/v1.js",
      "npm:i18next@3.5.2/dist/commonjs/defaults.js",
      "npm:i18next@3.5.2/dist/commonjs/i18next.js",
      "npm:i18next@3.5.2/dist/commonjs/index.js",
      "npm:i18next@3.5.2/dist/commonjs/logger.js",
      "npm:i18next@3.5.2/dist/commonjs/postProcessor.js",
      "npm:i18next@3.5.2/dist/commonjs/utils.js",
      "npm:i18next@3.5.2/index.js",
      "npm:jquery@3.2.1.json",
      "npm:jquery@3.2.1/dist/jquery.js",
      "npm:moment@2.19.1.json",
      "npm:moment@2.19.1/moment.js",
      "npm:qtip2@3.0.3.json",
      "npm:qtip2@3.0.3/dist/jquery.qtip.js",
      "npm:urijs@1.19.0.json",
      "npm:urijs@1.19.0/src/IPv6.js",
      "npm:urijs@1.19.0/src/SecondLevelDomains.js",
      "npm:urijs@1.19.0/src/URI.js",
      "npm:urijs@1.19.0/src/punycode.js"
    ]
  }
});