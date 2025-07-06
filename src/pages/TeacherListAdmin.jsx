import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TeacherListAdmin = () => {
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    const res = await axios.get('http://localhost:5000/api/teachers');
    setTeachers(res.data);
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Teachers</h2>
      <table className="w-full table-auto border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th>Name</th><th>Email</th><th>Subject</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t) => (
            <tr key={t._id} className="text-center border-b">
              <td>{t.name}</td>
              <td>{t.email}</td>
              <td>{t.subject || '—'}</td>
              <td>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  t.status === 'approved' ? 'bg-green-200 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {t.status}
                </span>
              </td>
              <td>
                <Link
                  to={`/admin/teacher/${t._id}`}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  View Profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherListAdmin;
