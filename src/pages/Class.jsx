// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const ClassForm = () => {
//   const { id } = useParams(); // For update
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: '',
//     module: '',
//     duration: '',
//     zoomLink: '',
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//  const storedUser = localStorage.getItem('user');
// let token = '';

// try {
//   const parsedUser = JSON.parse(storedUser);
//   token = parsedUser?.token;
// } catch (err) {
//   console.warn('Invalid user JSON in localStorage');
// }


//   //  Fetch existing class if in edit mode
//   useEffect(() => {
//     const fetchClass = async () => {
//       if (!id || !token) return;

//       try {
//         const res = await axios.get(`http://localhost:5000/api/class/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         const { title, module, duration, zoomLink } = res.data;
//         setFormData({ title, module, duration, zoomLink });
//       } catch (err) {
//         setError(' Failed to load class data');
//       }
//     };

//     fetchClass();
//   }, [id, token]);

//   // Handle input
//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) {
//       setError(' Login required');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const data = new FormData();
//       Object.entries(formData).forEach(([k, v]) => data.append(k, v));
//       if (imageFile) data.append('image', imageFile);

//       const url = id
//         ? `http://localhost:5000/api/class/${id}`
//         : `http://localhost:5000/api/class/create`;
//       const method = id ? 'put' : 'post';

//       await axios[method](url, data, {
//         headers: {
//           Authorization: `Bearer ${token}` // ✔️ Must include Bearer
//           // DO NOT manually set 'Content-Type' for FormData
//         }
//       });

//       alert(`✅ Class ${id ? 'updated' : 'created'} successfully`);
//       navigate('/classes');
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.error || '❌ Submission failed');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-200">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white border-2 border-blue-500 w-[90%] max-w-md p-8 rounded-lg shadow-md"
//       >
//         <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
//           {id ? 'Update Class' : 'Create New Class'}
//         </h2>

//         {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

//         {['title', 'module', 'duration', 'zoomLink'].map((field) => (
//           <div key={field} className="mb-4">
//             <label className="block text-gray-700 mb-1 capitalize">
//               {field}
//             </label>
//             <input
//               type="text"
//               name={field}
//               value={formData[field]}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded focus:outline-none"
//               required
//             />
//           </div>
//         ))}

//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImageFile(e.target.files[0])}
//           className="mb-4 w-full"
//         />

//         <div className="text-center">
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
//           >
//             {loading
//               ? id
//                 ? 'Updating...'
//                 : 'Creating...'
//               : id
//               ? 'Update Class'
//               : 'Create Class'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ClassForm;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Class = () => {
//   const [classes, setClasses] = useState([]);
//   const [newClass, setNewClass] = useState({
//     title: '',
//     module: '',
//     duration: '',
//     zoomLink: '',
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem('user'));
//   const role = user?.role;
//   const token = user?.token;

//   // Fetch classes
//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/class', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setClasses(res.data);
//       } catch (err) {
//         console.error('Error fetching classes:', err);
//       }
//     };
//     fetchClasses();
//   }, [token]);  




// // 🔄 Reset form
//   const resetForm = () => {
//     setFormData({
//       title: '',
//       module: '',
//       duration: '',
//       zoomLink: '',
//     });
//     setImageFile(null);
//     setFormMode('create');
//     setEditId(null);
//   };




//   // Handle create class
//   const handleCreateClass = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(newClass).forEach(([key, val]) => formData.append(key, val));
//     if (imageFile) formData.append('image', imageFile);

//     try {
//       await axios.post('http://localhost:5000/api/class', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('✅ Class created!');
//       window.location.reload();
//     } catch (err) {
//       alert('❌ Failed to create class');
//     }
//   };

//   // Join class
//   const handleJoin = async (id) => {
//     try {
//       await axios.post(`http://localhost:5000/api/class/${id}/join`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert('✅ You joined the class!');
//     } catch (err) {
//       alert('❌ Join failed');
//     }
//   };

//   // Delete class
//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this class?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/class/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setClasses((prev) => prev.filter((cls) => cls._id !== id));
//       alert('🗑️ Class deleted');
//     } catch (err) {
//       alert('❌ Delete failed');
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">📚 All Classes</h1>

//       {/* Teacher create form */}
//       {role === 'teacher' && (
//         <form
//           onSubmit={handleCreateClass}
//           className="bg-white p-6 rounded shadow mb-8"
//         >
//           <h2 className="text-xl font-semibold mb-4">➕ Create New Class</h2>
//           {['title', 'module', 'duration', 'zoomLink'].map((field) => (
//             <input
//               key={field}
//               name={field}
//               placeholder={field}
//               value={newClass[field]}
//               onChange={(e) =>
//                 setNewClass({ ...newClass, [field]: e.target.value })
//               }
//               className="block w-full mb-3 p-2 border rounded"
//               required
//             />
//           ))}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImageFile(e.target.files[0])}
//             className="mb-3"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Create
//           </button>
//         </form>
//       )}

//       {/* Class listings */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {classes.map((cls) => (
//           <div
//             key={cls._id}
//             className="bg-white p-4 rounded shadow flex flex-col justify-between"
//           >
//             {cls.image?.url && (
//               <img
//                 src={cls.image.url}
//                 alt="class"
//                 className="w-full h-40 object-cover mb-3 rounded"
//               />
//             )}
//             <h3 className="text-lg font-bold">{cls.title}</h3>
//             <p><strong>Module:</strong> {cls.module}</p>
//             <p><strong>Duration:</strong> {cls.duration}</p>
//             <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
//             <a
//               href={cls.zoomLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               🔗 Zoom
//             </a>

//             <div className="mt-3 space-x-2">
//               {role === 'student' && (
//                 <button
//                   onClick={() => handleJoin(cls._id)}
//                   className="bg-green-600 text-white px-3 py-1 rounded"
//                 >
//                   ✅ Join
//                 </button>
//               )}
//               {(role === 'teacher' || role === 'admin') && (
//                 <>
//                   <button
//                     onClick={() => navigate(`/classes/${cls._id}`)}
//                     className="bg-yellow-500 text-white px-3 py-1 rounded"
//                   >
//                     ✏️ Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(cls._id)}
//                     className="bg-red-600 text-white px-3 py-1 rounded"
//                   >
//                     🗑️ Delete
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Class;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ClassList = () => {
//   const [classes, setClasses] = useState([]);
//   const [newClass, setNewClass] = useState({
//     title: '',
//     module: '',
//     duration: '',
//     zoomLink: '',
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem('user'));
//   const role = user?.role;
//   const token = user?.token;

//   // 🔄 Fetch all classes
//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/classroom', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setClasses(res.data);
//       } catch (err) {
//         console.error('Error fetching classes:', err);
//       }
//     };
//     fetchClasses();
//   }, [token]);

//   // 🧑‍🏫 Handle class creation
//   const handleCreateClass = async (e) => {
//     e.preventDefault();
//     setError('');
//     const formData = new FormData();
//     Object.entries(newClass).forEach(([key, val]) => formData.append(key, val));
//     if (imageFile) formData.append('image', imageFile);

//     try {
//       await axios.post('http://localhost:5000/api/classroom', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('✅ Class created!');
//       window.location.reload();
//     } catch (err) {
//       setError(err.response?.data?.error || '❌ Failed to create class');
//     }
//   };

//   // 👨‍🎓 Join class
//   const handleJoin = async (id) => {
//     try {
//       await axios.post(`http://localhost:5000/api/classroom/${id}/join`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert('✅ You joined the class!');
//     } catch (err) {
//       alert('❌ Join failed');
//     }
//   };

//   // ❌ Delete class
//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this class?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/classroom/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setClasses((prev) => prev.filter((cls) => cls._id !== id));
//       alert('🗑️ Class deleted');
//     } catch (err) {
//       alert('❌ Delete failed');
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto bg-[#d6e6e6] min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8">📚 All Classes</h1>

//       {/* 🧑‍🏫 Create Class Form */}
//       {role === 'teacher' && (
//         <form
//           onSubmit={handleCreateClass}
//           className="bg-white p-6 rounded-xl shadow-md border mb-10 max-w-xl mx-auto"
//         >
//           <h2 className="text-xl font-semibold mb-4">➕ Create New Class</h2>
//           {error && <p className="text-red-600 mb-2">{error}</p>}
//           {['title', 'module', 'duration', 'zoomLink'].map((field) => (
//             <input
//               key={field}
//               name={field}
//               placeholder={field}
//               value={newClass[field]}
//               onChange={(e) =>
//                 setNewClass({ ...newClass, [field]: e.target.value })
//               }
//               className="block w-full mb-3 p-2 border rounded"
//               required
//             />
//           ))}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImageFile(e.target.files[0])}
//             className="mb-3"
//           />
//           <button
//             type="submit"
//             className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
//           >
//             Create
//           </button>
//         </form>
//       )}

//       {/* 📋 Class Listings */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {classes.map((cls) => (
//           <div
//             key={cls._id}
//             className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between"
//           >
//             {cls.image?.url && (
//               <img
//                 src={cls.image.url}
//                 alt="class"
//                 className="w-full h-40 object-cover rounded mb-3"
//               />
//             )}
//             <h3 className="text-lg font-bold">{cls.title}</h3>
//             <p><strong>Module:</strong> {cls.module}</p>
//             <p><strong>Duration:</strong> {cls.duration}</p>
//             <p><strong>Teacher:</strong> {cls.teacher?.name || 'N/A'}</p>
//             <a
//               href={cls.zoomLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline mt-1"
//             >
//               🔗 Zoom
//             </a>

//             <div className="mt-4 flex gap-2 flex-wrap">
//               {role === 'student' && (
//                 <button
//                   onClick={() => handleJoin(cls._id



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Class = () => {
  const [classes, setClasses] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    module: '',
    duration: '',
    zoomLink: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [formMode, setFormMode] = useState('create');
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const role = user?.role;
  const token = user?.token;

  // Fetch all classes
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/class', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setClasses(res.data);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchClasses();
  }, [token]);

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Reset form
  const resetForm = () => {
    setFormData({ title: '', module: '', duration: '', zoomLink: '' });
    setImageFile(null);
    setEditId(null);
    setFormMode('create');
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([k, v]) => form.append(k, v));
    if (imageFile) form.append('image', imageFile);

    const url = editId
      ? `http://localhost:5000/api/class/${editId}`
      : 'http://localhost:5000/api/class';
    const method = editId ? 'put' : 'post';

    try {
      await axios[method](url, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(editId ? '✅ Class updated!' : '✅ Class created!');
      window.location.reload();
    } catch (err) {
      alert('❌ Operation failed');
    }
  };

  // Join class
  const handleJoin = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/class/${id}/join`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('✅ Joined successfully!');
    } catch {
      alert('❌ Failed to join');
    }
  };

  // Delete class
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this class?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/class/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClasses((prev) => prev.filter((cls) => cls._id !== id));
      alert('🗑️ Deleted');
    } catch {
      alert('❌ Delete failed');
    }
  };

  // Edit class
  const handleEdit = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/class/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { title, module, duration, zoomLink } = res.data;
      setFormData({ title, module, duration, zoomLink });
      setEditId(id);
      setFormMode('edit');
      window.scrollTo(0, 0);
    } catch {
      alert('❌ Cannot load class');
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">📚 All Classes</h1>

      {role === 'teacher' && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {formMode === 'edit' ? '✏️ Update Class' : '➕ Create New Class'}
          </h2>
          {['title', 'module', 'duration', 'zoomLink'].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field}
              value={formData[field]}
              onChange={handleChange}
              className="block w-full mb-3 p-2 border rounded"
              required
            />
          ))}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="mb-3"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            {formMode === 'edit' ? 'Update' : 'Create'}
          </button>
          {formMode === 'edit' && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </form>
      )}

      {/* Class list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <div key={cls._id} className="bg-white p-4 rounded shadow flex flex-col">
            {cls.image?.url && (
              <img src={cls.image.url} alt="class" className="w-full h-40 object-cover rounded mb-3" />
            )}
            <h3 className="text-lg font-bold">{cls.title}</h3>
            <p><strong>Module:</strong> {cls.module}</p>
            <p><strong>Duration:</strong> {cls.duration}</p>
            <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
            <a href={cls.zoomLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              🔗 Zoom
            </a>

            <div className="mt-3 space-x-2">
              {role === 'student' && (
                <button
                  onClick={() => handleJoin(cls._id)}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  ✅ Join
                </button>
              )}
              {(role === 'teacher' || role === 'admin') && (
                <>
                  <button
                    onClick={() => handleEdit(cls._id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cls._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    🗑️ Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
