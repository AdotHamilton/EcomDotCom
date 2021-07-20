require('dotenv').config();
const productRoutes = require("./server/routes/product.routes")
const express = require("express"),
    app = express(),
    port = 8000,
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    server = app.listen(port,() => console.log(`Beam Me Up Scotty im on port ${port}`)),
    stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.use(cookieParser());
app.use(cors({credentials:true, origin:"http://localhost:3000"}));
app.use(express.json(), express.urlencoded({extened:true}));

const connectDB = require("./server/config/database.config");
connectDB();
require("./server/routes/product.routes")(app);
require('./server/routes/user.routes')(app);