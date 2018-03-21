const app = require('./app');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 4444 : process.env.PORT;

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
