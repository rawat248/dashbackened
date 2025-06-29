// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import helmet from "helmet";
// import morgan from "morgan";
// import mongoose from "mongoose";
// import generalRoutes from "./routes/general.js";
// import managementRoutes from "./routes/management.js";
// import salesRoutes from "./routes/sales.js";
// // data import
// import User from "./models/User.js";
// import Overall from "./models/Overallinfo.js";
// import Break from "./models/Breakdown.js";
// import { dataUser } from "./data/index.js";

// // Configuration
// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common"));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

// // Routes

// app.use("/general", generalRoutes);
// app.use("/management", managementRoutes);
// app.use("/sales", salesRoutes);

// // MONGOOSE SETUP
// const PORT = process.env.PORT || 9000;
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, console.log(`Server Port: ${PORT}`));
//     User.insertMany(dataUser);
//     Overall.insertMany(dataUser);
//     Break.insertMany(dataUser);
    
//   })
//   .catch((error) => console.log(`${error} did not connect`));

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import User from "./models/User.js";
import Overall from "./models/Overallinfo.js";
import Break from "./models/Breakdown.js";
import { dataUser } from "./data/index.js";

// Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// MongoDB Setup
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    const userCount = await User.countDocuments();
    if (userCount === 0) {
      await User.insertMany(dataUser);
      await Overall.insertMany(dataUser);
      await Break.insertMany(dataUser);
      console.log("Initial data inserted.");
    } else {
      console.log("Data already exists. Skipping insert.");
    }
  })
  .catch((error) => console.log(`${error} did not connect`));

