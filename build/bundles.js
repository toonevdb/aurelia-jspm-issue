module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text",
      ],
      "options": {
        "inject": true,
        "minify": false,
        "depCache": true,
        "rev": false
      }
    },
    "dist/vendor": {
      "includes": [
        "aurelia-environment",
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-animator-css",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "fetch",
        "aurelia-validation",
        "aurelia-i18n",
        "i18next-xhr-backend",
        "aurelia-dialog",
        "aurelia-tabbed/*.js",
        "moment",
        "nprogress",
        "animate.css/animate.css!text",
        "urijs",
        "qtip2"
      ],
      "options": {
        "inject": true,
        "minify": false,
        "depCache": false,
        "rev": false
      }
    }
  }
};
