import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentClassview = () => {
  const [classes, setClasses] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/class', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setClasses(res.data);
      } catch (err) {
        console.error('Error fetching classes:', err);
      }
    };
    fetchClasses();
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📘 Available Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {classes.map((cls) => (
          <div key={cls._id} className="bg-white shadow rounded p-4">
            <h3 className="font-bold text-lg">{cls.title}</h3>
            <p><strong>Module:</strong> {cls.module}</p>
            <p><strong>Duration:</strong> {cls.duration}</p>
            <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
            <a href={cls.zoomLink} target="_blank" className="text-blue-600 underline">
              🔗 Zoom Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentClassview;
