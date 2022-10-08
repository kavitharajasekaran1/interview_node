const express = require("express");
const http = require("http");
var fetchUrl = require("fetch").fetchUrl;
const app = express();
const port = 5000;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
app.use("/api/test", async function (req, res) {

    try{

    }
    catch(error){
        console.log(error)
    }
})

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});


// "https://jsonplaceholder.typicode.com/posts"
// "https://jsonplaceholder.typicode.com/comments"
