Package.describe({
  summary: "reactive-table-hack",
  // Version number.
  version: "0.4.7",
  // Optional.  Default is package directory name.
  name: "steeve:reactive-table-hack",
  // Optional github URL to your source repository.
  git: "https://github.com/stephentcannon/reactive-table-hack.git"
});

Package.onUse(function (api) {
  api.addFiles([
    'reactivetablehack.js',
    ],
  'client');
  
  api.export('ReactiveTableHack', 'client');
});