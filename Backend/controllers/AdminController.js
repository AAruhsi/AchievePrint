var AdminUploads = require("../models/AdminUploads");

const XLSX = require("xlsx");

const importFile = async (req, res) => {
  try {
    const workbook = XLSX.readFile(req.file.path);
    const sheet_name_list = workbook.SheetNames;
    const jsonData = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheet_name_list[0]]
    );

    function excelSerialDateToJSDate(serial) {
      if (!serial) return null;

      const excelEpoch = new Date(1899, 11, 30);
      const jsDate = new Date(
        excelEpoch.getTime() + (serial - 1) * 24 * 60 * 60 * 1000
      );
      return jsDate;
    }

    const students = jsonData.map((row) => {
      let startDate = excelSerialDateToJSDate(row["start_date"]);
      let endDate = excelSerialDateToJSDate(row["end_date"]);

      if (isNaN(startDate) || isNaN(endDate)) {
        throw new Error(
          `Invalid date format for entry: ${JSON.stringify(row)}`
        );
      }

      return {
        student_name: row["student_name"],
        domain: row["domain"],
        start_date: startDate,
        end_date: endDate,
      };
    });

    await AdminUploads.insertMany(students);
    console.log("Students", students);
    res
      .status(200)
      .json({ message: "File uploaded and data stored successfully" });
  } catch (err) {
    console.error("Import error:", err); // Log detailed error
    res.status(500).json({ error: err.message });
  }
};

const getData = async (req, res) => {
  try {
    const students = await AdminUploads.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  importFile,
  getData,
};
