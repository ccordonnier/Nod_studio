const express = require("express");
const app = express();
const port = 3001;
//routes
//routes
const peopleRoute = require('./routes/people');

app.use('/api/people', peopleRoute);

// Listen to the server
app.listen(port, () =>{
  console.log(`Example app listening on port ${port}`);
});