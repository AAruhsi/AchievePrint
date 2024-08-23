const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const authentication = require("./routes/auth");
// Connect Database
connectDB();

app.use(express.json());
app.use(cors());

var Adminroutes = require("./routes/Adminroutes");
app.use("/api", Adminroutes);

const generateCertificateRoutes = require("./routes/generateCertificateRoutes");
app.use("/generate", generateCertificateRoutes);

app.use("/api/auth", authentication);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
