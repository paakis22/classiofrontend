// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ClassList = () => {
//   const [classes, setClasses] = useState([]);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//   const fetchMyClasses = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/class/my-classes', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setClasses(res.data);
//     } catch (err) {
//       console.error('Error fetching your classes:', err);
//     }
//   };

//   if (role === 'teacher') fetchMyClasses();
// }, [token, role]);


//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">📚 All Classes</h1>
//       {classes.length === 0 ? (
//         <p className="text-center text-gray-500">No classes found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {classes.map((cls) => (
//             <div key={cls._id} className="bg-white shadow p-4 rounded">
//               {cls.image?.url && (
//                 <img
//                   src={cls.image.url}
//                   alt="class"
//                   className="w-full h-40 object-cover rounded mb-3"
//                 />
//               )}
//               <h2 className="text-xl font-bold">{cls.title}</h2>
//               <p><strong>Module:</strong> {cls.module}</p>
//               <p><strong>Duration:</strong> {cls.duration}</p>
//               <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
//               <p><strong>Email:</strong> {cls.teacher?.email}</p>
//               {cls.zoomLink && (
//                 <a
//                   href={cls.zoomLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 underline mt-2 inline-block"
//                 >
//                   🔗 Join Zoom Class
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ClassList;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Class = () => {
//   const [classes, setClasses] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     module: '',
//     duration: '',
//     zoomLink: '',
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [formMode, setFormMode] = useState('create');
//   const [editId, setEditId] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   const token = localStorage.getItem('token');
//   const role = localStorage.getItem('role');
//   const userId = localStorage.getItem('userId');

//   // 🔁 Fetch classes (filtered for teachers)
//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/class', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const allClasses = res.data;

//         const filtered =
//           role === 'teacher'
//             ? allClasses.filter((cls) => cls.teacher?._id === userId)
//             : allClasses;

//         setClasses(filtered);
//       } catch (err) {
//         console.error('Error fetching classes:', err);
//       }
//     };

//     fetchClasses();
//   }, [token, role, userId]);

//   // 🖊️ Input handling
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 🔄 Reset form
//   const resetForm = () => {
//     setFormData({ title: '', module: '', duration: '', zoomLink: '' });
//     setImageFile(null);
//     setEditId(null);
//     setFormMode('create');
//     setShowForm(false);
//   };

//   // 📤 Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = new FormData();
//     Object.entries(formData).forEach(([k, v]) => form.append(k, v));
//     if (imageFile) form.append('image', imageFile);

//     const url = editId
//       ? `http://localhost:5000/api/class/${editId}`
//       : 'http://localhost:5000/api/class';
//     const method = editId ? 'put' : 'post';

//     try {
//       const response = await axios[method](url, form, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (editId) {
//         setClasses(prev =>
//           prev.map(cls => (cls._id === editId ? response.data.classroom : cls))
//         );
//       } else {
//         setClasses(prev => [...prev, response.data]);
//       }

//       alert(editId ? '✅ Class updated!' : '✅ Class created!');
//       resetForm();
//     } catch (err) {
//       alert(err.response?.data?.error || '❌ Operation failed');
//     }
//   };

//   // ✏️ Edit
//   const handleEdit = async (id) => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/class/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const { title, module, duration, zoomLink } = res.data;
//       setFormData({ title, module, duration, zoomLink });
//       setEditId(id);
//       setFormMode('edit');
//       setShowForm(true);
//       window.scrollTo(0, 0);
//     } catch {
//       alert('❌ Cannot load class');
//     }
//   };

//   // 🗑️ Delete
//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure to delete this class?')) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/class/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setClasses(prev => prev.filter(cls => cls._id !== id));
//       alert('🗑️ Class deleted');
//     } catch {
//       alert('❌ Failed to delete class');
//     }
//   };

//   // ✅ Join class (student)
//   const handleJoin = async (id) => {
//     try {
//       await axios.post(`http://localhost:5000/api/class/${id}/join`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert('✅ Successfully joined the class!');
//     } catch {
//       alert('❌ Failed to join class');
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">📚 My Classes</h1>

//       {/* ➕ Schedule Button */}
//       {role === 'teacher' && (
//         <div className="text-center mb-6">
//           <button
//             onClick={() => setShowForm(prev => !prev)}
//             className="bg-[#053F5C] text-white px-6 py-2 rounded-full hover:bg-[#E99858] transition"
//           >
//             {showForm ? 'Cancel' : '➕ Schedule New Class'}
//           </button>
//         </div>
//       )}

//       {/* 🧾 Form */}
//       {role === 'teacher' && showForm && (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8">
//           <h2 className="text-xl font-semibold mb-4">
//             {formMode === 'edit' ? '✏️ Update Class' : '➕ Create New Class'}
//           </h2>
//           {['title', 'module', 'duration', 'zoomLink'].map((field) => (
//             <input
//               key={field}
//               name={field}
//               placeholder={field}
//               value={formData[field]}
//               onChange={handleChange}
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
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
//           >
//             {formMode === 'edit' ? 'Update' : 'Create'}
//           </button>
//           {formMode === 'edit' && (
//             <button
//               type="button"
//               onClick={resetForm}
//               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//             >
//               Cancel
//             </button>
//           )}
//         </form>
//       )}

//       {/* 📋 Class List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {classes.map((cls) => (
//           <div key={cls._id} className="bg-white p-4 rounded shadow flex flex-col">
//             {cls.image?.url && (
//               <img src={cls.image.url} alt="class" className="w-full h-40 object-cover rounded mb-3" />
//             )}
//             <h3 className="text-lg font-bold">{cls.title}</h3>
//             <p><strong>Module:</strong> {cls.module}</p>
//             <p><strong>Duration:</strong> {cls.duration}</p>
//             <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
//             {cls.zoomLink && (
//               <a
//                 href={cls.zoomLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 underline mt-2"
//               >
//                 🔗 Zoom Link
//               </a>
//             )}

//             <div className="mt-3 space-x-2">
//               {role === 'student' && (
//                 <button
//                   onClick={() => handleJoin(cls._id)}
//                   className="bg-green-600 text-white px-3 py-1 rounded"
//                 >
//                   ✅ Join
//                 </button>
//               )}
//               {(role === 'teacher' && cls.teacher?._id === userId) || role === 'admin' ? (
//                 <>
//                   <button
//                     onClick={() => handleEdit(cls._id)}
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
//               ) : null}
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

// const Class = () => {
//   const [classes, setClasses] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     module: '',
//     duration: '',
//     zoomLink: '',
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [formMode, setFormMode] = useState('create');
//   const [editId, setEditId] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   const token = localStorage.getItem('token');
//   const role = localStorage.getItem('role');
//   const userId = localStorage.getItem('userId');

//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/class', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const allClasses = res.data;

//         const filtered =
//           role === 'teacher'
//             ? allClasses.filter((cls) => cls.teacher?._id?.toString() === userId)
//             : allClasses;

//         setClasses(filtered);
//       } catch (err) {
//         console.error('Error fetching classes:', err);
//       }
//     };

//     if (token) fetchClasses();
//   }, [token, role, userId]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const resetForm = () => {
//     setFormData({ title: '', module: '', duration: '', zoomLink: '' });
//     setImageFile(null);
//     setEditId(null);
//     setFormMode('create');
//     setShowForm(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = new FormData();
//     Object.entries(formData).forEach(([k, v]) => form.append(k, v));
//     if (imageFile) form.append('image', imageFile);

//     const url = editId
//       ? `http://localhost:5000/api/class/${editId}`
//       : 'http://localhost:5000/api/class';
//     const method = editId ? 'put' : 'post';

//     try {
//       const response = await axios[method](url, form, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (editId) {
//         setClasses((prev) =>
//           prev.map((cls) =>
//             cls._id === editId ? response.data.classroom || response.data : cls
//           )
//         );
//       } else {
//         setClasses((prev) => [...prev, response.data]);
//       }

//       alert(editId ? '✅ Class updated!' : '✅ Class created!');
//       resetForm();
//     } catch (err) {
//       alert(err.response?.data?.error || '❌ Operation failed');
//     }
//   };

//   const handleEdit = async (id) => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/class/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const { title, module, duration, zoomLink } = res.data;
//       setFormData({ title, module, duration, zoomLink });
//       setEditId(id);
//       setFormMode('edit');
//       setShowForm(true);
//       window.scrollTo(0, 0);
//     } catch {
//       alert('❌ Cannot load class');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure to delete this class?')) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/class/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setClasses((prev) => prev.filter((cls) => cls._id !== id));
//       alert('🗑️ Class deleted');
//     } catch {
//       alert('❌ Failed to delete class');
//     }
//   };

//   const handleJoin = async (id) => {
//     try {
//       await axios.post(
//         `http://localhost:5000/api/class/${id}/join`,
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       alert('✅ Successfully joined the class!');
//     } catch {
//       alert('❌ Failed to join class');
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">📚 My Classes</h1>

//       {role === 'teacher' && (
//         <div className="text-center mb-6">
//           <button
//             onClick={() => setShowForm((prev) => !prev)}
//             className="bg-[#053F5C] text-white px-6 py-2 rounded-full hover:bg-[#E99858] transition"
//           >
//             {showForm ? 'Cancel' : '➕ Schedule New Class'}
//           </button>
//         </div>
//       )}

//       {role === 'teacher' && showForm && (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8">
//           <h2 className="text-xl font-semibold mb-4">
//             {formMode === 'edit' ? '✏️ Update Class' : '➕ Create New Class'}
//           </h2>
//           {['title', 'module', 'duration', 'zoomLink'].map((field) => (
//             <input
//               key={field}
//               name={field}
//               placeholder={field}
//               value={formData[field]}
//               onChange={handleChange}
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
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
//           >
//             {formMode === 'edit' ? 'Update' : 'Create'}
//           </button>
//           {formMode === 'edit' && (
//             <button
//               type="button"
//               onClick={resetForm}
//               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//             >
//               Cancel
//             </button>
//           )}
//         </form>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {classes.map((cls) => (
//           <div key={cls._id} className="bg-white p-4 rounded shadow flex flex-col">
//             {cls.image?.url && (
//               <img src={cls.image.url} alt="class" className="w-full h-40 object-cover rounded mb-3" />
//             )}
//             <h3 className="text-lg font-bold">{cls.title}</h3>
//             <p><strong>Module:</strong> {cls.module}</p>
//             <p><strong>Duration:</strong> {cls.duration}</p>
//             <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
//             {cls.zoomLink && (
//               <a
//                 href={cls.zoomLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 underline mt-2"
//               >
//                 🔗 Zoom Link
//               </a>
//             )}

//             <div className="mt-3 space-x-2">
//               {role === 'student' && (
//                 <button
//                   onClick={() => handleJoin(cls._id)}
//                   className="bg-green-600 text-white px-3 py-1 rounded"
//                 >
//                   ✅ Join
//                 </button>
//               )}
//               {(role === 'teacher' && cls.teacher?._id?.toString() === userId) || role === 'admin' ? (
//                 <>
//                   <button
//                     onClick={() => handleEdit(cls._id)}
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
//               ) : null}
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

// const Class = () => {
//   const [classes, setClasses] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     module: '',
//     duration: '',
//     zoomLink: '',
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [formMode, setFormMode] = useState('create');
//   const [editId, setEditId] = useState(null);
//   const [showForm, setShowForm] = useState(false); // ✅ NEW

//   const navigate = useNavigate();

//   const token = localStorage.getItem('token');
//   const role = localStorage.getItem('role');

//   // Fetch all classes
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

//   // Handle form input
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Reset form
//   const resetForm = () => {
//     setFormData({ title: '', module: '', duration: '', zoomLink: '' });
//     setImageFile(null);
//     setEditId(null);
//     setFormMode('create');
//     setShowForm(false); // ✅ close form after reset
//   };

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = new FormData();
//     Object.entries(formData).forEach(([k, v]) => form.append(k, v));
//     if (imageFile) form.append('image', imageFile);

//     const url = editId
//       ? `http://localhost:5000/api/class/${editId}`
//       : 'http://localhost:5000/api/class';
//     const method = editId ? 'put' : 'post';

//     try {
//       const response = await axios[method](url, form, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (editId) {
//         setClasses(prev =>
//           prev.map(cls => (cls._id === editId ? response.data : cls))
//         );
//       } else {
//         setClasses(prev => [...prev, response.data]);
//       }

//       alert(editId ? '✅ Class updated!' : '✅ Class created!');
//       resetForm();
//     } catch (err) {
//       alert('❌ Operation failed');
//     }
//   };

//   // Other functions remain unchanged (handleEdit, handleDelete, etc.)

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">📚 All Classes</h1>

//       {/* ✅ Schedule Button */}
//       {role === 'teacher' && (
//         <div className="text-center mb-6">
//           <button
//             onClick={() => setShowForm(prev => !prev)}
//             className="bg-[#053F5C] text-white px-6 py-2 rounded-full hover:bg-[#E99858] transition"
//           >
//             {showForm ? 'Cancel' : '➕ Schedule New Class'}
//           </button>
//         </div>
//       )}

//       {/* ✅ Show form when clicked */}
//       {role === 'teacher' && showForm && (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8">
//           <h2 className="text-xl font-semibold mb-4">
//             {formMode === 'edit' ? '✏️ Update Class' : '➕ Create New Class'}
//           </h2>
//           {['title', 'module', 'duration', 'zoomLink'].map((field) => (
//             <input
//               key={field}
//               name={field}
//               placeholder={field}
//               value={formData[field]}
//               onChange={handleChange}
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
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
//           >
//             {formMode === 'edit' ? 'Update' : 'Create'}
//           </button>
//           {formMode === 'edit' && (
//             <button
//               type="button"
//               onClick={resetForm}
//               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//             >
//               Cancel
//             </button>
//           )}
//         </form>
//       )}

//       {/* Class list UI remains the same */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {classes.map((cls) => (
//           <div key={cls._id} className="bg-white p-4 rounded shadow flex flex-col">
//             {cls.image?.url && (
//               <img src={cls.image.url} alt="class" className="w-full h-40 object-cover rounded mb-3" />
//             )}
//             <h3 className="text-lg font-bold">{cls.title}</h3>
//             <p><strong>Module:</strong> {cls.module}</p>
//             <p><strong>Duration:</strong> {cls.duration}</p>
//             <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
//             <a href={cls.zoomLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
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
//                     onClick={() => handleEdit(cls._id)}
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





import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [showForm, setShowForm] = useState(false);

  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  // 🔁 Fetch classes
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

  // 📥 Handle input
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // 🔄 Reset form
  const resetForm = () => {
    setFormData({ title: '', module: '', duration: '', zoomLink: '' });
    setImageFile(null);
    setEditId(null);
    setFormMode('create');
    setShowForm(false);
  };

  // 💾 Submit form (create or update)
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
      const res = await axios[method](url, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (editId) {
        setClasses(prev =>
          prev.map(cls => (cls._id === editId ? res.data.classroom : cls))
        );
      } else {
        setClasses(prev => [...prev, res.data]);
      }

      alert(editId ? '✅ Class updated!' : '✅ Class created!');
      resetForm();
    } catch (err) {
      alert('❌ Failed to submit class');
    }
  };

  // ✅ Join class (student)
  const handleJoin = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/class/${id}/join`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('✅ Successfully joined the class!');
    } catch {
      alert('❌ Failed to join class');
    }
  };

  // ✏️ Edit class (teacher/admin)
  const handleEdit = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/class/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { title, module, duration, zoomLink } = res.data;
      setFormData({ title, module, duration, zoomLink });
      setEditId(id);
      setFormMode('edit');
      setShowForm(true);
      window.scrollTo(0, 0);
    } catch {
      alert('❌ Cannot load class');
    }
  };

  // 🗑️ Delete class
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure to delete this class?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/class/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClasses(prev => prev.filter(cls => cls._id !== id));
      alert('🗑️ Class deleted');
    } catch {
      alert('❌ Failed to delete class');
    }
  };


 


//    const fetchClasses = async () => {
//   try {
//     const endpoint = role === 'student'
//       ? 'http://localhost:5000/api/class/student/classes'
//       : 'http://localhost:5000/api/class';

//     const res = await axios.get(endpoint, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setClasses(res.data);
//   } catch (err) {
//     console.error('Error fetching classes:', err);
//   }
// };



const fetchClasses = async () => {
  try {
    const endpoint = role === 'student'
      ? 'http://localhost:5000/api/class/student/classes'
      : 'http://localhost:5000/api/class';

    const res = await axios.get(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setClasses(res.data);
  } catch (err) {
    console.error('Error fetching classes:', err);
  }
};



  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">📚 All Classes</h1>

      {/* ➕ Schedule Button */}
      {role === 'teacher' && (
        <div className="text-center mb-6">
          <button
            onClick={() => setShowForm(prev => !prev)}
            className="bg-[#053F5C] text-white px-6 py-2 rounded-full hover:bg-[#E99858] transition"
          >
            {showForm ? 'Cancel' : '➕ Schedule New Class'}
          </button>
        </div>
      )}

      {/* 🧾 Create/Edit Form */}
      {role === 'teacher' && showForm && (
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

      {/* 📋 Class List */}
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
