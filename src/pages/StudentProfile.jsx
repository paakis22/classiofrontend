// import React, { useState } from 'react';
// import axios from 'axios';

// const StudentProfile = () => {
//   const [form, setForm] = useState({ name: '', email: '', gender: '', address: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/students', form);
//       alert('Student created successfully!');
//       setForm({ name: '', email: '', gender: '', address: '' });
//     } catch (err) {
//       alert(err.response?.data?.error || 'Error creating student');
//     }
//   };


//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4">
//       {['name', 'email', 'gender', 'address'].map((field) => (
//         <div key={field}>
//           <label>{field}:</label>
//           <input
//             name={field}
//             value={form[field]}
//             onChange={handleChange}
//             className="border px-2 py-1 w-full"
//           />
//         </div>
//       ))}
//       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
//     </form>
//   );
// };

// export default StudentProfile;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StudentProfile = () => {
//   const [form, setForm] = useState({ name: '', email: '', gender: '', address: '' });
//   const [studentData, setStudentData] = useState(null);

//   const email = "sripaakis@gmail.com"; // replace with dynamic value from auth/session

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/students/${email}`);
//         setStudentData(res.data); // show view only if found
//       } catch {
//         setStudentData(null); // no profile yet
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/students', form);
//       alert('Student profile created!');
//       setStudentData(form); // immediately switch to profile view
//     } catch (err) {
//       alert(err.response?.data?.error || 'Submission failed');
//     }
//   };

//   if (studentData) {
//     // ✅ Render View-only Profile if already submitted
//     return (
//       <div className="p-4 space-y-2">
//         <h2 className="text-xl font-bold text-[#1f1a3f] mb-4">Student Profile</h2>
//         <p><strong>Name:</strong> {studentData.name}</p>
//         <p><strong>Email:</strong> {studentData.email}</p>
//         <p><strong>Gender:</strong> {studentData.gender}</p>
//         <p><strong>Address:</strong> {studentData.address}</p>
//       </div>
//     );
//   }

//   // 📝 Profile Form (shown only if not created)
//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
//       {['name', 'email', 'gender', 'address'].map((field) => (
//         <div key={field}>
//           <label className="block font-medium capitalize">{field}:</label>
//           <input
//             name={field}
//             value={form[field]}
//             onChange={handleChange}
//             className="border px-3 py-2 w-full rounded"
//             required
//           />
//         </div>
//       ))}
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
//     </form>
//   );
// };

// export default StudentProfile;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StudentProfile = () => {
//   const [form, setForm] = useState({ name: '', email: '', gender: '', address: '' });
//   const [studentData, setStudentData] = useState(null);

//   const email = "sripaakis@gmail.com"; // In production, get this from auth/session

//   // 🟢 Fetch profile on load
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/students/${email}`);
//         setStudentData(res.data); // ✅ Profile exists
//       } catch (err) {
//         setStudentData(null); // ❌ No profile found
//       }
//     };
//     fetchProfile();
//   }, []);

//   // 🔁 Form Input Handling
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/students', form);
//       alert('Student profile created!');
//       setStudentData(form); // ⏩ Show profile view after save
//     } catch (err) {
//       alert(err.response?.data?.error || 'Submission failed');
//     }
//   };



//   // ✅ View-only Profile (if already created)
//   if (studentData) {
//     return (
//       <div className="p-6 bg-white max-w-lg mx-auto rounded shadow space-y-2 mt-6">
//         <h2 className="text-xl font-bold text-[#1f1a3f] mb-4">Your Profile</h2>
//         <p><strong>Name:</strong> {studentData.name}</p>
//         <p><strong>Email:</strong> {studentData.email}</p>
//         <p><strong>Gender:</strong> {studentData.gender}</p>
//         <p><strong>Address:</strong> {studentData.address}</p>
//       </div>
//     );
//   }

//   // 📝 Profile Form (only shown if profile not yet created)
//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white max-w-lg mx-auto rounded shadow mt-6">
//       <h2 className="text-lg font-bold mb-2 text-[#1f1a3f]">Create Student Profile</h2>
//       {['name', 'email', 'gender', 'address'].map((field) => (
//         <div key={field}>
//           <label className="block capitalize font-medium">{field}:</label>
//           <input
//             name={field}
//             value={form[field]}
//             onChange={handleChange}
//             className="border px-3 py-2 w-full rounded"
//             required
//           />
//         </div>
//       ))}
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default StudentProfile;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ for navigation

const StudentProfile = () => {
  const [form, setForm] = useState({ name: '', email: '', gender: '', address: '' });
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate(); // ✅ initialize

  const email = "sripaakis@gmail.com"; // Later: Get from localStorage/session

  // 🟢 Fetch profile on load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/students/${email}`);
        setStudentData(res.data);
      } catch (err) {
        setStudentData(null);
      }
    };
    fetchProfile();
  }, []);

  // 🔁 Form Input Handling
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📨 Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/students', form);
      alert('Student profile created!');
      setStudentData(form);
    } catch (err) {
      alert(err.response?.data?.error || 'Submission failed');
    }
  };

  // ✅ View-only Profile with Join button
  if (studentData) {
    return (
      <div className="p-6 bg-white max-w-lg mx-auto rounded shadow space-y-4 mt-6 text-center">
        <h2 className="text-xl font-bold text-[#1f1a3f]">Your Profile</h2>
        <p><strong>Name:</strong> {studentData.name}</p>
        <p><strong>Email:</strong> {studentData.email}</p>
        <p><strong>Gender:</strong> {studentData.gender}</p>
        <p><strong>Address:</strong> {studentData.address}</p>

        {/* ✅ Join Button */}
        <button
          className="mt-4 bg-[#1f1a3f] text-white px-6 py-2 rounded hover:bg-[#0e0b2a] transition"
          onClick={() => navigate('/payment?role=student')}
        >
          Join
        </button>
      </div>
    );
  }

  // 📝 Profile Form
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white max-w-lg mx-auto rounded shadow mt-6">
      <h2 className="text-lg font-bold mb-2 text-[#1f1a3f]">Create Student Profile</h2>
      {['name', 'email', 'gender', 'address'].map((field) => (
        <div key={field}>
          <label className="block capitalize font-medium">{field}:</label>
          <input
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="border px-3 py-2 w-full rounded"
            required
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default StudentProfile;


