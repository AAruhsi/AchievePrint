const mongoose = require("mongoose");

const AdminUploads = new mongoose.Schema({
  student_name: {
    type: String,
  },
  domain: {
    type: String,
  },
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
});

module.exports = mongoose.model("AdminUpload", AdminUploads);
