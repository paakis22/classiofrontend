// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TeacherApproval = () => {
//   const [pendingTeachers, setPendingTeachers] = useState([]);

//   const fetchPending = async () => {
//     const res = await axios.get('http://localhost:5000/api/teachers');
//     const pendingOnly = res.data.filter(teacher => teacher.status === 'pending');
//     setPendingTeachers(pendingOnly);
//   };

//   const approveTeacher = async (id) => {
//     try {
//       await axios.put(`http://localhost:5000/api/admin/approve/${id}`, {}, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       alert('Teacher approved!');
//       fetchPending();
//     } catch (err) {
//       alert('Approval failed.');
//     }
//   };

//   useEffect(() => {
//     fetchPending();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Pending Teacher Approvals</h2>
//       {pendingTeachers.length === 0 ? (
//         <p>No pending teachers found.</p>
//       ) : (
//         <ul className="space-y-3">
//           {pendingTeachers.map((t) => (
//             <li key={t._id} className="p-4 bg-gray-100 rounded shadow flex justify-between items-center">
//               <div>
//                 <p><strong>{t.name}</strong> ({t.email})</p>
//                 <p className="text-sm text-gray-600">{t.bio}</p>
//               </div>
//               <button
//                 onClick={() => approveTeacher(t._id)}
//                 className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600"
//               >
//                 Approve
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TeacherApproval;








import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherApproval = () => {
  const [pendingTeachers, setPendingTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  const fetchPending = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/teachers', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const pendingOnly = res.data.filter((teacher) => teacher.status === 'pending');
      setPendingTeachers(pendingOnly);
    } catch (err) {
      console.error('Error fetching teachers:', err);
      setMessage('❌ Failed to load teachers');
    }
  };

  const approveTeacher = async (id) => {
    setLoading(true);
    setMessage('');
    try {
      const res = await axios.put(
        `http://localhost:5000/api/admin/approve/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage(res.data.message || '✅ Teacher approved!');
      fetchPending(); // refresh list
    } catch (err) {
      console.error('Approval error:', err);
      setMessage(err.response?.data?.error || '❌ Approval failed.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">👩‍🏫 Pending Teacher Approvals</h2>

      {message && (
        <div className="mb-4 text-center text-sm font-semibold text-blue-800 bg-blue-100 p-2 rounded">
          {message}
        </div>
      )}

      {pendingTeachers.length === 0 ? (
        <p className="text-center text-gray-600">✅ No pending teachers found.</p>
      ) : (
        <ul className="space-y-4">
          {pendingTeachers.map((t) => (
            <li
              key={t._id}
              className="p-4 bg-gray-100 rounded shadow flex flex-col sm:flex-row sm:justify-between sm:items-center"
            >
              <div>
                <p className="text-lg font-semibold">{t.name} ({t.email})</p>
                <p className="text-sm text-gray-600">{t.bio}</p>
                {t.resume?.url && (
                  <a
                    href={t.resume.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm mt-1 inline-block"
                  >
                    📄 View Resume
                  </a>
                )}
              </div>
              <div className="mt-3 sm:mt-0">
                <button
                  onClick={() => approveTeacher(t._id)}
                  className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Approve'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeacherApproval;
