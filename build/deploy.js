const paths = require('./paths.js');
const pkg = require('../package.json');

module.exports = {
  production: {
    branch: 'dev',
    servers: {host: '83.96.204.85', user: 'root'}
  },

  default: {
    workspace: '/tmp/shipit',
    deployTo: '/var/www/frontend',
    repositoryUrl: pkg.repository.url,
    ignores: ['.git', 'node_modules'],
    rsync: ['--del'],
    keepReleases: 5,
    shallowClone: true,
    shared: {
      files: [
        {
          path: 'aurelia.env',
          overwrite: true
        }
      ],
    }
  }
}
