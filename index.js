const express = require('express')
const app = express()
const port = 4000
const mongodb = require("./db")
const bookRoute = require("./Routes/booksRoutes")
const cors = require("cors")
app.use(cors());
app.use(express.json())
mongodb()

app.use('/api/v1', bookRoute
  
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})