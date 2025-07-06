import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherApproval = () => {
  const [pendingTeachers, setPendingTeachers] = useState([]);

  const fetchPending = async () => {
    const res = await axios.get('http://localhost:5000/api/teachers');
    const pendingOnly = res.data.filter(teacher => teacher.status === 'pending');
    setPendingTeachers(pendingOnly);
  };

  const approveTeacher = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/approve/${id}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Teacher approved!');
      fetchPending();
    } catch (err) {
      alert('Approval failed.');
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Pending Teacher Approvals</h2>
      {pendingTeachers.length === 0 ? (
        <p>No pending teachers found.</p>
      ) : (
        <ul className="space-y-3">
          {pendingTeachers.map((t) => (
            <li key={t._id} className="p-4 bg-gray-100 rounded shadow flex justify-between items-center">
              <div>
                <p><strong>{t.name}</strong> ({t.email})</p>
                <p className="text-sm text-gray-600">{t.bio}</p>
              </div>
              <button
                onClick={() => approveTeacher(t._id)}
                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeacherApproval;
