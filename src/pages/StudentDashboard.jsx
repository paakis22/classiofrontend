// import React, { useState, useEffect } from 'react';
// import st from '../assets/st.jpg';
// import TeacherListFiltered from '../components/TeacherListFiltered';
// import { Link, useNavigate } from 'react-router-dom';
// import Footer from "../components/ Footer.jsx";
// import axios from 'axios';

// const StudentDashboard = () => {
//   const [showCourses, setShowCourses] = useState(false);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [joinedClasses, setJoinedClasses] = useState([]);
//   const [classes, setClasses] = useState([]);
//   const [student, setStudent] = useState(null);
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();

//   // ✅ Fetch student profile
//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/student/profile', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setStudent(res.data);
//       } catch (err) {
//         console.error('Error fetching student profile', err);
//       }
//     };
//     if (token) fetchStudent();
//   }, [token]);

//   // ✅ Handle profile image upload
//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('image', file);

//     try {
//       const res = await axios.put('http://localhost:5000/api/student/profile-picture', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setStudent(res.data);
//       alert('✅ Profile picture updated!');
//     } catch (err) {
//       console.error('Upload failed', err);
//       alert('❌ Upload failed');
//     }
//   };

//   // ✅ Fetch only paid classes
//   useEffect(() => {
//     const fetchPaidClasses = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/class/paid', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setClasses(res.data);
//       } catch (err) {
//         console.error('Error fetching paid classes:', err);
//       }
//     };
//     if (token) fetchPaidClasses();
//   }, [token]);

//   // ✅ Fetch joined classes
//   useEffect(() => {
//     const fetchJoinedClasses = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/class/joined', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setJoinedClasses(res.data || []);
//       } catch (err) {
//         console.error('Error fetching joined classes:', err);
//       }
//     };
//     if (token) fetchJoinedClasses();
//   }, [token]);

//   const handleSubjectClick = (subject) => {
//     setSelectedSubject(subject);
//     setShowCourses(false);
//     navigate(`/courses/${subject}`);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-white">
      
//       {/* ✅ NAVBAR */}
//       <nav className="bg-[#224D62] text-white flex justify-center gap-6 py-4 text-sm md:text-base font-medium flex-wrap relative">
//         <Link to="/student-profile">
//           <button className="hover:underline">Profile</button>
//         </Link>

//         <button className="hover:underline">Schedule</button>

//         <Link to="/s">
//           <button className="hover:underline">About Me</button>
//         </Link>

//         {/* Dropdown for Courses */}
//         <div className="relative">
//           <button onClick={() => setShowCourses(!showCourses)} className="hover:underline">
//             Courses ▾
//           </button>
//           {showCourses && (
//             <div className="absolute top-full mt-1 left-0 bg-white text-black shadow-md rounded z-10 w-32">
//               <ul className="text-sm">
//                 {['Maths', 'English', 'ICT'].map((subj) => (
//                   <li
//                     key={subj}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => handleSubjectClick(subj)}
//                   >
//                     {subj}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         <Link to="/payment">
//           <button className="hover:underline">Payment</button>
//         </Link>

//         <button className="hover:underline">Module</button>
//       </nav>

//       {/* ✅ Teacher List by Subject */}
//       {selectedSubject ? (
//         <TeacherListFiltered subject={selectedSubject} />
//       ) : (
//         <>
//           <section className="text-center py-8">
//             <h2 className="text-xl md:text-2xl font-medium">
//               Learn on-the-go or right<br />
//               at home with <span className="font-bold text-[#1f1a3f]">clasio</span>
//             </h2>
//           </section>

//           <div className="px-4 flex justify-center">
//             <img
//               src={st}
//               alt="dashboard"
//               className="w-full max-w-4xl rounded shadow"
//             />
//           </div>

//           <button
//             className="mt-6 mx-auto block bg-[#053F5C] text-white px-6 py-2 text-xs rounded-md hover:brightness-110 transition duration-200 shadow"
//             onClick={() => window.open("https://marketplace.zoom.us/", "_blank")}
//           >
//             Join Zoom
//           </button>
//         </>
//       )}

//       {/* ✅ Joined Classes */}
//       <div className="p-6 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">🎓 My Joined Classes</h1>
//         {joinedClasses.length === 0 ? (
//           <p className="text-center text-gray-500">You haven't joined any classes yet.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {joinedClasses.map((cls) => (
//               <div key={cls._id} className="bg-white shadow p-4 rounded">
//                 <h2 className="text-xl font-semibold">{cls.title}</h2>
//                 <p><strong>Module:</strong> {cls.module}</p>
//                 <p><strong>Duration:</strong> {cls.duration}</p>
//                 <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
//                 {cls.zoomLink && (
//                   <a
//                     href={cls.zoomLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline mt-2 inline-block"
//                   >
//                     🔗 Join Zoom Class
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* ✅ Student Profile */}
//       <div className="p-6 max-w-4xl mx-auto">
//         <h1 className="text-2xl font-bold mb-4">🎓 Profile</h1>
//         {student && (
//           <div className="bg-white shadow p-4 rounded">
//             {student.profileImage?.url ? (
//               <img
//                 src={student.profileImage.url}
//                 alt="Profile"
//                 className="w-32 h-32 rounded-full object-cover mb-4"
//               />
//             ) : (
//               <p className="text-sm text-gray-500 mb-4">No profile picture uploaded.</p>
//             )}
//             <p><strong>Name:</strong> {student.name}</p>
//             <p><strong>Email:</strong> {student.email}</p>
//             <p><strong>Gender:</strong> {student.gender}</p>

//             <div className="mt-4">
//               <label className="block mb-2 text-sm font-medium text-gray-700">Upload Profile Picture</label>
//               <input type="file" accept="image/*" onChange={handleImageUpload} />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ✅ Footer */}
//       <div className="mt-8">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;












import React, { useState, useEffect } from 'react';
import st from '../assets/st.jpg';
import TeacherListFiltered from '../components/TeacherListFiltered';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../components/ Footer.jsx";
import axios from 'axios';

const StudentDashboard = () => {
  const [showCourses, setShowCourses] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [joinedClasses, setJoinedClasses] = useState([]);
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

   const [classes, setClasses] = useState([]);
  const token = localStorage.getItem('token');




  // 🔁 Fetch all classes the student has joined
  useEffect(() => {
    const fetchJoinedClasses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/class/joined', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJoinedClasses(res.data || []);
      } catch (err) {
        console.error('Error fetching joined classes:', err);
      }
    };

    if (token) fetchJoinedClasses();
  }, [token]);

     
  // useEffect(() => {
  //   const fetchAllClasses = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:5000/api/class', {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       setClasses(res.data);
  //     } catch (err) {
  //       console.error('Error fetching classes:', err);
  //     }
  //   };

  //   if (token) fetchAllClasses();
  // }, [token]);






    
  // 🔹 Fetch student profile on load
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/student/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudent(res.data);
      } catch (err) {
        console.error('Error fetching student profile', err);
      }
    };
    fetchStudent();
  }, [token]);



  // 🔹 Handle profile image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

   
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.put('http://localhost:5000/api/student/profile-picture', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setStudent(res.data);
      alert('✅ Profile picture updated!');
    } catch (err) {
      console.error('Upload failed', err);
      alert('❌ Upload failed');
    }
  };



    useEffect(() => {
  const fetchPaidClasses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/class/paid', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClasses(res.data); // 🔥 Now only paid class subjects will be shown
    } catch (err) {
      console.error('Error fetching paid classes:', err);
    }
  };

  if (token) fetchPaidClasses();
}, [token]);



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




  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setShowCourses(false);
    navigate(`/courses/${subject}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ✅ NAVBAR */}
      <nav className="bg-[#224D62] text-white flex justify-center gap-6 py-4 text-sm md:text-base font-medium flex-wrap relative">
        <Link to="/student-profile">
          <button className="hover:underline">Profile</button>
        </Link>

        <button className="hover:underline">Schedule</button>

        <Link to="/s">
          <button className="hover:underline">About Me</button>
        </Link>

        {/* Dropdown for Courses */}
        <div className="relative">
          <button onClick={() => setShowCourses(!showCourses)} className="hover:underline">
            Courses ▾
          </button>
          {showCourses && (
            <div className="absolute top-full mt-1 left-0 bg-white text-black shadow-md rounded z-10 w-32">
              <ul className="text-sm">
                {['Maths', 'English', 'ICT'].map((subj) => (
                  <li
                    key={subj}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSubjectClick(subj)}
                  >
                    {subj}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Link to="/payment">
          <button className="hover:underline">Payment</button>
        </Link>

        <button className="hover:underline">Module</button>
      </nav>

      {/* ✅ Teacher List by Subject (if selected) */}
      {selectedSubject ? (
        <TeacherListFiltered subject={selectedSubject} />
      ) : (
        <>
          {/* Dashboard landing view */}
          <section className="text-center py-8">
            <h2 className="text-xl md:text-2xl font-medium">
              Learn on-the-go or right<br />
              at home with <span className="font-bold text-[#1f1a3f]">clasio</span>
            </h2>
          </section>

          <div className="px-4 flex justify-center">
            <img
              src={st}
              alt="dashboard"
              className="w-full max-w-4xl rounded shadow"
            />
          </div>

          <button
            className="mt-6 mx-auto block bg-[#053F5C] text-white px-6 py-2 text-xs rounded-md hover:brightness-110 transition duration-200 shadow"
            onClick={() => window.open("https://marketplace.zoom.us/", "_blank")}
          >
            Join Zoom
          </button>
        </>
      )}

      {/* ✅ Joined Classes List */}
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">🎓 My Joined Classes</h1>
        {joinedClasses.length === 0 ? (
          <p className="text-center text-gray-500">You haven't joined any classes yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {joinedClasses.map((cls) => (
              <div key={cls._id} className="bg-white shadow p-4 rounded">
                <h2 className="text-xl font-semibold">{cls.title}</h2>
                <p><strong>Module:</strong> {cls.module}</p>
                <p><strong>Duration:</strong> {cls.duration}</p>
                <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
                {cls.zoomLink && (
                  <a
                    href={cls.zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-2 inline-block"
                  >
                    🔗 Join Zoom Class
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

        
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Available Classes</h1>
      {classes.length === 0 ? (
        <p className="text-center text-gray-500">No classes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div key={cls._id} className="bg-white shadow p-4 rounded">
              {cls.image?.url && (
                <img
                  src={cls.image.url}
                  alt="class"
                  className="w-full h-40 object-cover rounded mb-3"
                />
              )}
              <h2 className="text-xl font-bold">{cls.title}</h2>
              <p><strong>Module:</strong> {cls.module}</p>
              <p><strong>Duration:</strong> {cls.duration}</p>
              <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
              <p><strong>Email:</strong> {cls.teacher?.email}</p>
              {cls.zoomLink && (
                <a
                  href={cls.zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-2 inline-block"
                >
                  🔗 Join Zoom Class
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div> 



    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎓 profile</h1>

      {student && (
        <div className="bg-white shadow p-4 rounded">
          {student.profileImage?.url ? (
            <img
              src={student.profileImage.url}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
          ) : (
            <p className="text-sm text-gray-500 mb-4">No profile picture uploaded.</p>
          )}

          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Gender:</strong> {student.gender}</p>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Upload Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        </div>
      )}
    </div>



      {/* ✅ Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default StudentDashboard;














//   const handleSubjectClick = (subject) => {
//     setSelectedSubject(subject);
//     setShowCourses(false);
//     navigate(`/courses/${subject}`);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-white">

//       {/* ✅ NAVBAR */}
//       <nav className="bg-[#224D62] text-white flex justify-center gap-6 py-4 text-sm md:text-base font-medium flex-wrap relative">
//         <Link to="/student-profile">
//           <button className="hover:underline">Profile</button>
//         </Link>

//         <button className="hover:underline">Schedule</button>

//         <Link to="/s">
//           <button className="hover:underline">About Me</button>
//         </Link>

//         {/* Dropdown for Courses */}
//         <div className="relative">
//           <button onClick={() => setShowCourses(!showCourses)} className="hover:underline">
//             Courses ▾
//           </button>
//           {showCourses && (
//             <div className="absolute top-full mt-1 left-0 bg-white text-black shadow-md rounded z-10 w-32">
//               <ul className="text-sm">
//                 {['Maths', 'English', 'ICT'].map((subj) => (
//                   <li
//                     key={subj}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => handleSubjectClick(subj)}
//                   >
//                     {subj}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         <Link to="/payment">
//           <button className="hover:underline">Payment</button>
//         </Link>

//         <button className="hover:underline">Module</button>
//       </nav>

//       {/* ✅ Teacher List by Subject (if selected) */}
//       {selectedSubject ? (
//         <TeacherListFiltered subject={selectedSubject} />
//       ) : (
//         <>
//           {/* Dashboard landing view */}
//           <section className="text-center py-8">
//             <h2 className="text-xl md:text-2xl font-medium">
//               Learn on-the-go or right<br />
//               at home with <span className="font-bold text-[#1f1a3f]">clasio</span>
//             </h2>
//           </section>

//           <div className="px-4 flex justify-center">
//             <img
//               src={st}
//               alt="dashboard"
//               className="w-full max-w-4xl rounded shadow"
//             />
//           </div>

//           <button
//             className="mt-6 mx-auto block bg-[#053F5C] text-white px-6 py-2 text-xs rounded-md hover:brightness-110 transition duration-200 shadow"
//             onClick={() => window.open("https://marketplace.zoom.us/", "_blank")}
//           >
//             Join Zoom
//           </button>
//         </>
//       )}

//       {/* ✅ Joined Classes List */}
//       <div className="p-6 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">🎓 My Joined Classes</h1>
//         {joinedClasses.length === 0 ? (
//           <p className="text-center text-gray-500">You haven't joined any classes yet.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {joinedClasses.map((cls) => (
//               <div key={cls._id} className="bg-white shadow p-4 rounded">
//                 <h2 className="text-xl font-semibold">{cls.title}</h2>
//                 <p><strong>Module:</strong> {cls.module}</p>
//                 <p><strong>Duration:</strong> {cls.duration}</p>
//                 <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
//                 {cls.zoomLink && (
//                   <a
//                     href={cls.zoomLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline mt-2 inline-block"
//                   >
//                     🔗 Join Zoom Class
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

        
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">📚 Available Classes</h1>
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



//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">🎓 profile</h1>

//       {student && (
//         <div className="bg-white shadow p-4 rounded">
//           {student.profileImage?.url ? (
//             <img
//               src={student.profileImage.url}
//               alt="Profile"
//               className="w-32 h-32 rounded-full object-cover mb-4"
//             />
//           ) : (
//             <p className="text-sm text-gray-500 mb-4">No profile picture uploaded.</p>
//           )}

//           <p><strong>Name:</strong> {student.name}</p>
//           <p><strong>Email:</strong> {student.email}</p>
//           <p><strong>Gender:</strong> {student.gender}</p>

//           <div className="mt-4">
//             <label className="block mb-2 text-sm font-medium text-gray-700">Upload Profile Picture</label>
//             <input type="file" accept="image/*" onChange={handleImageUpload} />
//           </div>
//         </div>
//       )}
//     </div>



//       {/* ✅ Footer */}
//       <div className="mt-8">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;








// import React, { useState, useEffect } from 'react';
// import st from '../assets/st.jpg';
// import TeacherListFiltered from '../components/TeacherListFiltered';
// import { Link, useNavigate } from 'react-router-dom';
// import Footer from "../components/ Footer.jsx";
// import axios from 'axios';
// import maths from '../assets/maths.jpeg';


// const StudentDashboard = () => {
//   const [showCourses, setShowCourses] = useState(false);
//   const [showHint, setShowHint]       = useState(false);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [joinedClasses, setJoinedClasses]     = useState([]);
//   const [classes, setClasses]                 = useState([]);
//   const [student, setStudent]                 = useState(null);
//   const navigate = useNavigate();
//   const token    = localStorage.getItem('token');

//   // ─── One-time hint logic ───────────────────────────────────
//   useEffect(() => {
//     if (!localStorage.getItem('seenCoursesHint')) {
//       setShowHint(true);
//       localStorage.setItem('seenCoursesHint', 'true');
//     }
//   }, []);

//   // ─── Fetch joined classes ─────────────────────────────────
//   useEffect(() => {
//     const fetchJoined = async () => {
//       const res = await axios.get('/api/class/joined', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setJoinedClasses(res.data || []);
//     };
//     if (token) fetchJoined();
//   }, [token]);

//   // ─── Fetch all available classes ──────────────────────────
//   useEffect(() => {
//     const fetchAll = async () => {
//       const res = await axios.get('/api/class', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setClasses(res.data || []);
//     };
//     if (token) fetchAll();
//   }, [token]);

//   // ─── Fetch student profile ────────────────────────────────
//   useEffect(() => {
//     const fetchStudent = async () => {
//       const res = await axios.get('/api/student/profile', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setStudent(res.data);
//     };
//     if (token) fetchStudent();
//   }, [token]);

//   // ─── Handle Courses dropdown toggle ───────────────────────
//   const handleCoursesClick = () => {
//     setShowCourses(!showCourses);
//     setShowHint(false);  // hide the hint as soon as they click it
//   };

//   const handleSubjectClick = (subject) => {
//     setSelectedSubject(subject);
//     setShowCourses(false);
//     navigate(`/courses/${subject}`);
//   };

//   // ─── Handle profile pic upload ────────────────────────────
//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const fd = new FormData();
//     fd.append('image', file);
//     const res = await axios.put('/api/student/profile-picture', fd, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'multipart/form-data'
//       }
//     });
//     setStudent(res.data);
//     alert('✅ Profile picture updated!');
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       {/* NAVBAR */}
//       <nav className="bg-[#224D62] text-white flex justify-center gap-6 py-4 font-medium">
//         <Link to="/student-profile"><button>Profile</button></Link>
//         <button>Schedule</button>
//         <Link to="/s"><button>About Me</button></Link>

//         {/* Courses with one-time hint */}
//         <div className="relative">
//           <button
//             onClick={handleCoursesClick}
//             className="flex items-center hover:underline"
//           >
//             Courses
//             {showHint && (
//               <span className="ml-1 text-xs animate-pulse" aria-label="new">
//                 ▶
//               </span>
//             )}
//           </button>
//           {showCourses && (
//             <div className="absolute top-full mt-1 bg-white text-black shadow rounded z-10 w-32">
//               {['Maths','English','ICT'].map(subj => (
//                 <div
//                   key={subj}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => handleSubjectClick(subj)}
//                 >
//                   {subj}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <Link to="/payment"><button>Payment</button></Link>
//         <button>Module</button>
//       </nav>

//       {/* Filtered teacher list */}
//       {selectedSubject ? (
//         <TeacherListFiltered subject={selectedSubject} />
//       ) : (
//         <>
//           <section className="text-center py-8">
//             <h2 className="text-xl md:text-2xl">
//               Learn on-the-go or right<br/>
//               at home with <span className="font-bold">clasio</span>
//             </h2>
//           </section>
//           <div className="px-4 flex justify-center">
//             <img src={st} alt="dashboard" className="w-full max-w-4xl rounded shadow" />
//           </div>
//           <button
//             className="mt-6 mx-auto bg-[#053F5C] text-white px-6 py-2 rounded hover:brightness-110"
//             onClick={() => window.open("https://marketplace.zoom.us/","_blank")}
//           >
//             Join Zoom
//           </button>
//         </>
//       )}


//       {/* Joined Classes */}
//       <div className="p-6 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">🎓 My Joined Classes</h1>
//         {joinedClasses.length === 0 ? (
//           <p className="text-center text-gray-500">You haven't joined any classes yet.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {joinedClasses.map(cls => (
//               <div key={cls._id} className="bg-white shadow p-4 rounded">
//                 <h2 className="text-xl font-semibold">{cls.title}</h2>
//                 <p><strong>Module:</strong> {cls.module}</p>
//                 <p><strong>Duration:</strong> {cls.duration}</p>
//                 <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
//                 {cls.zoomLink && (
//                   <a
//                     href={cls.zoomLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline mt-2 block"
//                   >
//                     🔗 Join Zoom Class
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Available Classes */}
//       <div className="p-6 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">📚 Available Classes</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {classes.map(cls => (
//             <div key={cls._id} className="bg-white shadow p-4 rounded">
//               {cls.image?.url && (
//                 <img
//                   src={maths}
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
//                   className="text-blue-600 underline mt-2 block"
//                 >
//                   🔗 Join Zoom Class
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Profile Section */}
//       <div className="p-6 max-w-4xl mx-auto">
//         <h1 className="text-2xl font-bold mb-4">🎓 Profile</h1>
//         {student && (
//           <div className="bg-white shadow p-4 rounded">
//             {student.profileImage?.url
//               ? <img
//                   src={student.profileImage.url}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full object-cover mb-4"
//                 />
//               : <p className="text-gray-500 mb-4">No profile picture uploaded.</p>
//             }
//             <p><strong>Name:</strong> {student.name}</p>
//             <p><strong>Email:</strong> {student.email}</p>
//             <p><strong>Gender:</strong> {student.gender}</p>
//             <div className="mt-4">
//               <label className="block mb-2">Upload Profile Picture</label>
//               <input type="file" accept="image/*" onChange={handleImageUpload} />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <div className="mt-8">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;





// import React, { useState, useEffect } from 'react';
// import st from '../assets/st.jpg';
// import TeacherListFiltered from '../components/TeacherListFiltered';
// import { Link, useNavigate } from 'react-router-dom';
// import Footer from "../components/ Footer.jsx";
// import axios from 'axios';

// const StudentDashboard = () => {
//   const [showCourses, setShowCourses]           = useState(false);
//   const [showHint, setShowHint]                 = useState(false);
//   const [selectedSubject, setSelectedSubject]   = useState(null);
//   const [joinedClasses, setJoinedClasses]       = useState([]);
//   const [allClasses, setAllClasses]             = useState([]);
//   const [student, setStudent]                   = useState(null);
//   const navigate = useNavigate();
//   const token    = localStorage.getItem('token');

//   // One-time hint for “new”
//   useEffect(() => {
//     if (!localStorage.getItem('seenCoursesHint')) {
//       setShowHint(true);
//       localStorage.setItem('seenCoursesHint', 'true');
//     }
//   }, []);

//   // Fetch joined classes
//   useEffect(() => {
//     async function fetchJoined() {
//       const res = await axios.get('/api/class/joined', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setJoinedClasses(res.data || []);
//     }
//     if (token) fetchJoined();
//   }, [token]);

//   // Fetch ALL classes (for filtering)
//   useEffect(() => {
//     async function fetchAll() {
//       const res = await axios.get('/api/class', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllClasses(res.data || []);
//     }
//     if (token) fetchAll();
//   }, [token]);

//   // Fetch student profile
//   useEffect(() => {
//     async function fetchStudent() {
//       const res = await axios.get('/api/student/profile', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setStudent(res.data);
//     }
//     if (token) fetchStudent();
//   }, [token]);

//   // Upload profile pic
//   const handleImageUpload = async e => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const fd = new FormData();
//     fd.append('image', file);
//     const res = await axios.put('/api/student/profile-picture', fd, {
//       headers: { 
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'multipart/form-data'
//       },
//     });
//     setStudent(res.data);
//   };

//   // Dropdown toggles
//   const handleCoursesClick = () => {
//     setShowCourses(c => !c);
//     setShowHint(false);
//   };
//   const handleSubjectClick = subj => {
//     setSelectedSubject(subj);
//     setShowCourses(false);
//     navigate(`/courses/${subj}`);
//   };

//   // Filtered classes by subject
//   const displayClasses = selectedSubject
//     ? allClasses.filter(c => c.module === selectedSubject)
//     : [];

//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       {/* NAVBAR */}
//       <nav className="bg-[#224D62] text-white flex justify-center gap-6 py-4 font-medium">
//         <Link to="/student-profile"><button>Profile</button></Link>
//         <button>Schedule</button>
//         <Link to="/s"><button>About Me</button></Link>
//         <div className="relative">
//           <button onClick={handleCoursesClick} className="flex items-center hover:underline">
//             Courses
//             {showHint && <span className="ml-1 text-xs animate-pulse">▶</span>}
//           </button>
//           {showCourses && (
//             <div className="absolute top-full mt-1 bg-white text-black shadow rounded z-10 w-32">
//               {['Maths','English','ICT'].map(subj => (
//                 <div
//                   key={subj}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => handleSubjectClick(subj)}
//                 >
//                   {subj}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <Link to="/payment"><button>Payment</button></Link>
//         <button>Module</button>
//       </nav>

//       {/* TEACHER LIST BY SUBJECT */}
//       {selectedSubject ? (
//         <TeacherListFiltered subject={selectedSubject} />
//       ) : (
//         <>
//           <section className="text-center py-8">
//             <h2 className="text-xl md:text-2xl">Learn on-the-go or right<br/>
//               at home with <span className="font-bold">clasio</span>
//             </h2>
//           </section>
//           <div className="px-4 flex justify-center">
//             <img src={st} alt="dashboard" className="w-full max-w-4xl rounded shadow" />
//           </div>
//           <button
//             className="mt-6 mx-auto bg-[#053F5C] text-white px-6 py-2 rounded hover:brightness-110"
//             onClick={() => window.open("https://marketplace.zoom.us/","_blank")}
//           >
//             Join Zoom
//           </button>
//         </>
//       )}

//       {/* JOINED CLASSES */}
//       <div className="p-6 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">🎓 My Joined Classes</h1>
//         {joinedClasses.length === 0
//           ? <p className="text-center text-gray-500">You haven't joined any classes yet.</p>
//           : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {joinedClasses.map(cls => (
//                 <div key={cls._id} className="bg-white shadow p-4 rounded">
//                   <h2 className="text-xl font-semibold">{cls.title}</h2>
//                   <p><strong>Module:</strong> {cls.module}</p>
//                   <p><strong>Duration:</strong> {cls.duration}</p>
//                   <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
//                   {cls.zoomLink && (
//                     <a
//                       href={cls.zoomLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 underline block mt-2"
//                     >
//                       🔗 Join Zoom Class
//                     </a>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )
//         }
//       </div>

//       {/* FILTERED AVAILABLE CLASSES */}
//       {selectedSubject && (
//         <div className="p-6 max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold mb-6 text-center">
//             📚 {selectedSubject} Classes
//           </h1>
//           {displayClasses.length === 0
//             ? <p className="text-center text-gray-500">No {selectedSubject} classes available.</p>
//             : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {displayClasses.map(cls => (
//                   <div key={cls._id} className="bg-white shadow p-4 rounded">
//                     {cls.image?.url && (
//                       <img
//                         src={cls.image.url}
//                         alt="class"
//                         className="w-full h-40 object-cover rounded mb-3"
//                       />
//                     )}
//                     <h2 className="text-xl font-bold">{cls.title}</h2>
//                     <p><strong>Module:</strong> {cls.module}</p>
//                     <p><strong>Duration:</strong> {cls.duration}</p>
//                     <p><strong>Teacher:</strong> {cls.teacher?.name}</p>
//                     <a
//                       href={cls.zoomLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 underline block mt-2"
//                     >
//                       🔗 Join Zoom Class
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             )
//           }
//         </div>
//       )}

//       {/* PROFILE */}
//       <div className="p-6 max-w-4xl mx-auto">
//         <h1 className="text-2xl font-bold mb-4">🎓 Profile</h1>
//         {student && (
//           <div className="bg-white shadow p-4 rounded">
//             {student.profileImage?.url
//               ? <img
//                   src={student.profileImage.url}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full object-cover mb-4"
//                 />
//               : <p className="text-gray-500 mb-4">No profile picture uploaded.</p>
//             }
//             <p><strong>Name:</strong> {student.name}</p>
//             <p><strong>Email:</strong> {student.email}</p>
//             <p><strong>Gender:</strong> {student.gender}</p>
//             <div className="mt-4">
//               <label className="block mb-2">Upload Profile Picture</label>
//               <input type="file" accept="image/*" onChange={handleImageUpload} />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* FOOTER */}
//       <div className="mt-8"><Footer /></div>
//     </div>
//   );
// };

// export default StudentDashboard;



// import React, { useState, useEffect } from 'react';
// import st from '../assets/st.jpg';
// import TeacherListFiltered from '../components/TeacherListFiltered';
// import { Link, useNavigate } from 'react-router-dom';
// import Footer from '../components/ Footer.jsx';
// import axios from 'axios';

// const StudentDashboard = () => {
//   const [showCourses, setShowCourses] = useState(false);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [joinedClasses, setJoinedClasses] = useState([]);
//   const [classes, setClasses] = useState([]);
//   const [student, setStudent] = useState(null);
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   // Fetch joined classes
//   useEffect(() => {
//     const fetchJoined = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/class/joined', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         // Guarantee an array
//         setJoinedClasses(Array.isArray(res.data) ? res.data : []);
//       } catch (err) {
//         console.error('Error fetching joined classes:', err);
//         setJoinedClasses([]);
//       }
//     };
//     if (token) fetchJoined();
//   }, [token]);

//   // Fetch all available classes
//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/class', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setClasses(Array.isArray(res.data) ? res.data : []);
//       } catch (err) {
//         console.error('Error fetching classes:', err);
//         setClasses([]);
//       }
//     };
//     if (token) fetchAll();
//   }, [token]);

//   // Fetch student profile
//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/student/profile', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setStudent(res.data);
//       } catch (err) {
//         console.error('Error fetching student profile', err);
//         setStudent(null);
//       }
//     };
//     if (token) fetchStudent();
//   }, [token]);

//   // Upload profile picture
//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const fd = new FormData();
//     fd.append('image', file);
//     try {
//       const res = await axios.put(
//         'http://localhost:5000/api/student/profile-picture',
//         fd,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       setStudent(res.data);
//       alert('✅ Profile picture updated!');
//     } catch (err) {
//       console.error('Upload failed', err);
//       alert('❌ Upload failed');
//     }
//   };

//   // Courses dropdown toggle
//   const handleCoursesClick = () => {
//     setShowCourses((s) => !s);
//   };

//   // When a subject is selected
//   const handleSubjectClick = (subject) => {
//     setSelectedSubject(subject);
//     setShowCourses(false);
//     navigate(`/courses/${subject}`);
//   };

//   // Compute filtered available classes
//   const filteredClasses = selectedSubject
//     ? classes.filter((c) => c.module === selectedSubject)
//     : classes;

//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       {/* NAVBAR */}
//       <nav className="bg-[#224D62] text-white flex justify-center gap-6 py-4 font-medium">
//         <Link to="/student-profile">
//           <button>Profile</button>
//         </Link>
//         <button>Schedule</button>
//         <Link to="/s">
//           <button>About Me</button>
//         </Link>
//         <div className="relative">
//           <button onClick={handleCoursesClick} className="flex items-center hover:underline">
//             Courses {showCourses ? '▾' : '▸'}
//           </button>
//           {showCourses && (
//             <div className="absolute top-full mt-1 bg-white text-black shadow rounded z-10 w-32">
//               {['Maths', 'English', 'ICT'].map((subj) => (
//                 <div
//                   key={subj}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => handleSubjectClick(subj)}
//                 >
//                   {subj}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <Link to="/payment">
//           <button>Payment</button>
//         </Link>
//         <button>Module</button>
//       </nav>

//       {/* Teacher List by Subject */}
//       {selectedSubject ? (
//         <TeacherListFiltered subject={selectedSubject} />
//       ) : (
//         <>
//           <section className="text-center py-8">
//             <h2 className="text-xl md:text-2xl">
//               Learn on-the-go or right
//               <br />
//               at home with <span className="font-bold">clasio</span>
//             </h2>
//           </section>
//           <div className="px-4 flex justify-center">
//             <img src={st} alt="dashboard" className="w-full max-w-4xl rounded shadow" />
//           </div>
//           <button
//             className="mt-6 mx-auto bg-[#053F5C] text-white px-6 py-2 rounded hover:brightness-110"
//             onClick={() => window.open('https://marketplace.zoom.us/', '_blank')}
//           >
//             Join Zoom
//           </button>
//         </>
//       )}

//       {/* Joined Classes */}
//       <div className="p-6 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">🎓 My Joined Classes</h1>
//         {joinedClasses.length === 0 ? (
//           <p className="text-center text-gray-500">You haven't joined any classes yet.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {joinedClasses.map((cls) => (
//               <div key={cls._id} className="bg-white shadow p-4 rounded">
//                 <h2 className="text-xl font-semibold">{cls.title}</h2>
//                 <p>
//                   <strong>Module:</strong> {cls.module}
//                 </p>
//                 <p>
//                   <strong>Duration:</strong> {cls.duration}
//                 </p>
//                 <p>
//                   <strong>Teacher:</strong> {cls.teacher?.name}
//                 </p>
//                 {cls.zoomLink && (
//                   <a
//                     href={cls.zoomLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline mt-2 block"
//                   >
//                     🔗 Join Zoom Class
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Available Classes (filtered by selectedSubject) */}
//       <div className="p-6 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">📚 Available Classes</h1>
//         {filteredClasses.length === 0 ? (
//           <p className="text-center text-gray-500">No classes found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredClasses.map((cls) => (
//               <div key={cls._id} className="bg-white shadow p-4 rounded">
//                 {cls.image?.url && (
//                   <img
//                     src={cls.image.url}
//                     alt="class"
//                     className="w-full h-40 object-cover rounded mb-3"
//                   />
//                 )}
//                 <h2 className="text-xl font-bold">{cls.title}</h2>
//                 <p>
//                   <strong>Module:</strong> {cls.module}
//                 </p>
//                 <p>
//                   <strong>Duration:</strong> {cls.duration}
//                 </p>
//                 <p>
//                   <strong>Teacher:</strong> {cls.teacher?.name}
//                 </p>
//                 <p>
//                   <strong>Email:</strong> {cls.teacher?.email}
//                 </p>
//                 {cls.zoomLink && (
//                   <a
//                     href={cls.zoomLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline mt-2 block"
//                   >
//                     🔗 Join Zoom Class
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Profile Section */}
//       <div className="p-6 max-w-4xl mx-auto">
//         <h1 className="text-2xl font-bold mb-4">🎓 Profile</h1>
//         {student && (
//           <div className="bg-white shadow p-4 rounded">
//             {student.profileImage?.url ? (
//               <img
//                 src={student.profileImage.url}
//                 alt="Profile"
//                 className="w-32 h-32 rounded-full object-cover mb-4"
//               />
//             ) : (
//               <p className="text-gray-500 mb-4">No profile picture uploaded.</p>
//             )}
//             <p>
//               <strong>Name:</strong> {student.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {student.email}
//             </p>
//             <p>
//               <strong>Gender:</strong> {student.gender}
//             </p>
//             <div className="mt-4">
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Upload Profile Picture
//               </label>
//               <input type="file" accept="image/*" onChange={handleImageUpload} />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <div className="mt-8">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;







// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Bell, GraduationCap, CreditCard, FileText, BookOpen, Calendar, Award, Power } from 'lucide-react';
// import Footer from '../components/ Footer.jsx';

// // finance card component
// const StatCard = ({ icon: Icon, label, value, highlighted }) => (
//   <div
//     className={`flex flex-col items-center p-4 rounded-2xl shadow ${
//       highlighted ? 'border-2 border-purple-600 bg-white' : 'bg-white'
//     }`}
//   >
//     <Icon className="w-6 h-6 mb-2 text-purple-600" />
//     <span className="text-sm text-gray-500">{label}</span>
//     <span className="mt-1 font-semibold text-lg">{value}</span>
//   </div>
// );

// // enrolled course card
// const EnrolledCourse = ({ title }) => (
//   <div className="flex items-center justify-between p-4 border-2 rounded-2xl border-purple-300 bg-purple-50">
//     <span className="font-medium text-sm">{title}</span>
//     <button className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
//       View
//     </button>
//   </div>
// );

// const StudentDashboard = () => {
//   const [joinedClasses, setJoinedClasses] = useState([]);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [stats, setStats] = useState({ payable: '$10,000', paid: '$5,000', others: '$300' });
//   const [instructors, setInstructors] = useState([]);
//   const [notices, setNotices] = useState([]);
//   const navigate = useNavigate();

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     // fetch joined classes
//     axios
//       .get('/api/class/joined', { headers: { Authorization: `Bearer ${token}` } })
//       .then(r => setJoinedClasses(r.data))
//       .catch(console.error);

//     // fetch stats
//     // replace with real calls
//     // axios.get('/api/student/finance', ...).then(r=>setStats(r.data));

//     // fetch enrolled courses
//     // axios.get('/api/student/courses', ...).then(r=>setEnrolledCourses(r.data));
//     setEnrolledCourses([
//       'Object oriented programming',
//       'Fundamentals of database systems',
//     ]);

//     // fetch instructors
//     // axios.get('/api/student/instructors', ...).then(r=>setInstructors(r.data));
//     setInstructors([
//       { name: 'Alice', avatar: '/avatars/alice.jpg' },
//       { name: 'Bob', avatar: '/avatars/bob.jpg' },
//       { name: 'Carol', avatar: '/avatars/carol.jpg' },
//     ]);

//     // fetch notices
//     // axios.get('/api/student/notices', ...).then(r=>setNotices(r.data));
//     setNotices([
//       { title: 'Prelim payment due', link: '#' },
//       { title: 'Exam schedule', link: '#' },
//     ]);
//   }, [token]);

//   return (
//     <div className="flex min-h-screen bg-gray-100 text-gray-800">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg flex flex-col p-6 space-y-8">
//         <div className="flex items-center mb-8">
//           <GraduationCap className="w-8 h-8 text-purple-600" />
//           <span className="ml-2 text-xl font-bold">clasio</span>
//         </div>
//         <nav className="flex-1 space-y-4 text-sm">
//           {[
//             { label: 'Dashboard', icon: BookOpen, to: '/student/dashboard' },
//             { label: 'Payment Info', icon: CreditCard, to: '/student/payment' },
//             { label: 'Registration', icon: FileText, to: '/student/registration' },
//             { label: 'Courses', icon: BookOpen, to: '/student/courses' },
//             { label: 'Drop Semester', icon: Calendar, to: '/student/drop' },
//             { label: 'Result', icon: Award, to: '/student/result' },
//             { label: 'Notice', icon: FileText, to: '/student/notice' },
//             { label: 'Schedule', icon: Calendar, to: '/student/schedule' },
//           ].map((item) => (
//             <Link
//               key={item.label}
//               to={item.to}
//               className="flex items-center space-x-3 hover:text-purple-600"
//             >
//               <item.icon className="w-5 h-5" />
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </nav>
//         <button
//           onClick={() => {/* clear token, navigate to login */}}
//           className="flex items-center space-x-3 text-red-600 hover:underline"
//         >
//           <Power className="w-5 h-5" />
//           <span>Logout</span>
//         </button>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 p-8 space-y-8 overflow-auto">
//         {/* Header */}
//         <header className="flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-semibold">Welcome back, John!</h1>
//             <p className="text-sm text-gray-500">September 4, 2023</p>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="px-4 py-2 rounded-full shadow focus:outline-none"
//               />
//               <Bell className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//             </div>
//             <div className="flex items-center space-x-2">
//               <img
//                 src="/avatars/john.jpg"
//                 alt="John Doe"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-medium">John Doe</p>
//                 <p className="text-xs text-gray-500">3rd year</p>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Finance Cards */}
//         <div className="grid grid-cols-3 gap-6">
//           <StatCard icon={CreditCard} label="Total Payable" value={stats.payable} />
//           <StatCard icon={CreditCard} label="Total Paid" value={stats.paid} highlighted />
//           <StatCard icon={CreditCard} label="Others" value={stats.others} />
//         </div>

//         {/* Enrolled Courses */}
//         <section>
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Enrolled Courses</h2>
//             <Link to="/student/courses" className="text-purple-600 text-sm hover:underline">
//               See all
//             </Link>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {enrolledCourses.map((c) => (
//               <EnrolledCourse key={c} title={c} />
//             ))}
//           </div>
//         </section>

//         {/* Course Instructors + Notices */}
//         <div className="grid grid-cols-3 gap-6">
//           <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
//             <h3 className="font-semibold mb-3">Course instructors</h3>
//             <div className="flex space-x-4">
//               {instructors.map((inst) => (
//                 <img
//                   key={inst.email}
//                   src={inst.avatar}
//                   alt={inst.name}
//                   className="w-12 h-12 rounded-full border-2 border-purple-600"
//                 />
//               ))}
//             </div>
//             <Link to="/student/instructors" className="mt-2 inline-block text-purple-600 text-sm hover:underline">
//               See all
//             </Link>
//           </div>
//           <div className="bg-white p-6 rounded-2xl shadow">
//             <h3 className="font-semibold mb-3">Daily notice</h3>
//             <ul className="space-y-4 text-sm">
//               {notices.map((n) => (
//                 <li key={n.title}>
//                   <p className="font-medium">{n.title}</p>
//                   <Link to={n.link} className="text-purple-600 hover:underline text-xs">
//                     See more
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;
