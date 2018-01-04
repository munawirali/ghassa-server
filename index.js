const app = require('./app');

app.listen(process.env.PORT || 3500, () => {
  if (process.env.PORT) {
    console.log('listening port', process.env.PORT);
  } else {
    console.log('listening port 3500');
  }
})
