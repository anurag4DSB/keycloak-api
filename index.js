// Nous importons Express dans notre application
import express from 'express';

// Notre Application utilisera express grace à cette ligne
const app = express();

// Voici notre 1ere route
app.get('/', function(req, res) {
  res.send('Welcome to home page');
});

// Si tout se passe bien notre application écoutera sur le port 3000
app.listen(3000, err => {
  if (err) {
    console.error(err);
  }
  {
    console.log(`APP Listen to port : 3000`);
  }
});
