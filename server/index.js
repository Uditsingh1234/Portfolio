const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config(); 
const dbconfig = require('./config/dbConfig'); 
const portfolioRoute = require('./routes/portfolioRoute'); 

app.use(express.json());

// Middleware to allow cross-origin requests (CORS) from any origin.
app.use(cors({
    origin : '',
    methods : ["POST", "GET"],
    credentials : true  // enable setting cookies
}))

app.use("/api/portfolio", portfolioRoute)

app.get("/", (req, res) => {
    res.json("This is the portfolio API")
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

