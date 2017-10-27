// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  'list': [
    'index.html',
    'config.js',
    'favicon.ico',
    'LICENSE',
    "jspm_packages/npm/bluebird@3.4.1/js/browser/bluebird.min.js", 
    'jspm_packages/system.js',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    // -- CUSTOMIZED --
    'jspm_packages/github/systemjs/plugin-text@*',
    'jspm_packages/github/systemjs/plugin-css@*',
    'jspm_packages/npm/aurelia-testing@*',
    'jspm_packages/npm/aurelia-tabbed@*', // although included in the aurelia bundle, still needed, don't know why
    'dist/theme.css',
    'dist/app.css',
    'dist/theme.js',
    'dist/app-menu.js',
    'dist/icomoon/*.*',
    'locales/**/translation.json',
    'assets/**/*.*'
  ],
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  'normalize': [
    [
      'bluebird', [
        '/js/browser/bluebird.min.js'
      ]
    ],
    [
      'text', [
        '/text.js'
      ]
    ],
    [
      'aurelia-testing', [
        '/*.js'
      ]
    ],
    [
      'aurelia-tabbed', [
        '/**/*.*'
      ]
    ],
    [
      'nprogress', [
        '/nprogress.css'
      ]
    ]
  ]
};

// Note: When adding packages that aren't mentioned in any bundle, it seems necessary to add the 
// ----- js file in the root repo folder (like npm) in the 'list' array. You also need to add the 
// ----- contents of the actual package folder (similarly named folder) under 'normalize'. 
// ----- The entry in 'list' just serves as a define call.