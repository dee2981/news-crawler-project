const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/db");
const PORT = process.env.PORT;
const app = express();
const apiRoutes = require('./routes/crawler.routes');


app.use(cors());
app.use(express.json());
connectDb();


app.use('/api', apiRoutes);

app.get("/", (req, res) => {
  res.json(
    "Hi there,  This is a BACKEND SERVER OF NEWS-CRAWLER"
  );
});

app.listen(PORT, () => {
  console.log(`Listenig on ${PORT}✨✅`);
});
