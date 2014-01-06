Package.describe({
  summary: "UI Widget - simple svg progress circle, credit: Leandro Linares"
});

Package.on_use(function (api) {
  api.use('templating');
  api.add_files(['progress.circle.html', 'progress.circle.css', 'progress.circle.js'], 'client');
});
