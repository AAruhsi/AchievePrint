const express = require("express");
const mongoose = require("mongoose");
const AdminUploads = require("../models/AdminUploads");
const router = express.Router();

router.get("/view/:certificateId", async (req, res) => {
  const { certificateId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(certificateId)) {
    return res.status(400).json({ message: "Invalid certificate ID format." });
  }

  try {
    const dataOfCerti = await AdminUploads.findById(certificateId);
    if (!dataOfCerti) {
      return res.status(404).json({ message: "Certificate not found." });
    }

    res.json(dataOfCerti);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
