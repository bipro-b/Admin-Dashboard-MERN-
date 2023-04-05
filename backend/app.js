const express = require("express")
const cors= require("cors");
const bodyParser = require("body-parser") ;
const dotenv = require("dotenv") ;
const helmet = require("helmet") ;
const morgan = require("morgan") ;
// const clientRoutes = require("./routes/client.js") ;
const generalRoutes = require("./routes/general") ;
// const managementRoutes = require("./routes/management.js") ;
// const salesRoutes = require("./routes/sales.js") ;

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
// app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
// app.use("/management", managementRoutes);
// app.use("/sales", salesRoutes);

module.exports = app;