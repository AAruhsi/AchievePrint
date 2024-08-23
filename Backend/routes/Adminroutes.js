const express = require("express");
const user = express.Router();
const path = require("path");
const multer = require("multer");
const bodyParser = require("body-parser");

user.use(bodyParser.urlencoded({ extended: true }));
user.use(express.static(path.resolve(__dirname, "public")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads")); // Correctly resolve the path
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Unique filename with timestamp
  },
});

const upload = multer({ storage: storage });

const AdminController = require("../controllers/AdminController");
// const AdminUploads = require("../models/AdminUploads");

user.post("/importFile", upload.single("file"), AdminController.importFile);

user.get("/students", AdminController.getData);
module.exports = user;
