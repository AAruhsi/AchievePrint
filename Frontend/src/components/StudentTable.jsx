import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(7);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get("http://localhost:5000/api/students");
      console.log("Students: ", res);
      setStudents(res.data);
    };
    fetchStudents();
  }, []);

  // Calculate the current records to display
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(students.length / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white h-fit">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 py-2">Certificate ID</th>
            <th className="w-1/3 py-2">Name</th>
            <th className="w-1/3 py-2">Internship Domain</th>
            <th className="w-1/3 py-2">Start Date</th>
            <th className="w-1/3 py-2">End Date</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student._id} className="text-center border-b">
              <td className="py-2 px-4">{student._id}</td>
              <td className="py-2 px-4">{student.student_name}</td>
              <td className="py-2 px-4">{student.domain}</td>
              <td className="py-2 px-4">
                {new Date(student.start_date).toLocaleDateString()}
              </td>
              <td className="py-2 px-4">
                {new Date(student.end_date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <ul className="flex space-x-2">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === number
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentTable;
