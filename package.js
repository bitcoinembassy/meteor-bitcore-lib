Package.describe({
  summary: 'A pure and powerful JavaScript Bitcoin library',
  version: '0.13.10',
  name: 'frabrunelle:bitcore-lib',
  git: 'https://github.com/frabrunelle/meteor-bitcore-lib.git'
});

Npm.depends({
  'bitcore-lib':'0.13.10'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use('cosmos:browserify@0.9.2');

  api.addFiles('bitcore.browserify.js');

  api.export('bitcore');
});

Package.onTest(function (api) {
  api.use([
    'tinytest',
    'frabrunelle:bitcore-lib'
  ]);

  api.addFiles('bitcore-lib-tests.js');
});
