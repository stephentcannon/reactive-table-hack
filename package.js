Package.describe({
  summary: "reactive-table-hack"
});

Package.on_use(function (api, where) {
  api.add_files([
    'reactivetablehack.js',
    ],
  'client');
  
  api.export('ReactiveTableHack', 'client');
});