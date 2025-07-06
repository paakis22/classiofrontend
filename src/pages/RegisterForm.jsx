





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer.jsx'; // ✅ Fixed path

// function RegisterForm() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: '',
//     emailAddress: '',
//     password: '',
//     gender: '',
//     role: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Registration successful!');
//     navigate('/student/dashboard');
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-blue-100">
//       <div className="flex-grow flex items-center justify-center p-4">
//         <div className="bg-gray-400 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
//           <h2 className="text-3xl font-semibold mb-8 text-gray-800">Register Form</h2>
//           <form onSubmit={handleSubmit}>
//             {[
//               { label: 'Full Name', name: 'fullName', type: 'text' },
//               { label: 'Email Address', name: 'emailAddress', type: 'email' },
//               { label: 'Password', name: 'password', type: 'password' },
//               { label: 'Gender', name: 'gender', type: 'text' },
//               { label: 'Role', name: 'role', type: 'text' },
//             ].map(({ label, name, type }) => (
//               <div className="flex items-center mb-6" key={name}>
//                 <label htmlFor={name} className="text-lg text-gray-700 w-1/3 text-left mr-4">
//                   {label} :
//                 </label>
//                 <input
//                   type={type}
//                   id={name}
//                   name={name}
//                   value={formData[name]}
//                   onChange={handleChange}
//                   className="flex-1 p-3 border border-gray-300 rounded-md text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//             ))}

//             <button
//               type="submit"
//               className="mt-6 px-8 py-3 bg-blue-900 text-white rounded-md text-lg font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 transition duration-300"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* ✅ Footer is outside form layout */}
//       <Footer />
//     </div>
//   );
// }

// export default RegisterForm;






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import Footer from "../components/Footer.jsx"; 


// function RegisterForm() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: '',
//     emailAddress: '',
//     password: '',
//     gender: '',
//     role: '', // Role will be 'student' or 'teacher'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Registration successful!');

//   //   // ✅ Role-based navigation 

  //   if (formData.role === 'student') {
  //     navigate('/student/dashboard');
  //   } else if (formData.role === 'teacher') {
  //     navigate('/teacher/dashboard');
  //   } else {
  //     alert('Invalid role selected!');
  //   }
  // };

  // return (
  //   <div className="min-h-screen flex flex-col justify-between bg-blue-100">
  //     <div className="flex-grow flex items-center justify-center p-4">
  //       <div className="bg-gray-400 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
  //         <h2 className="text-3xl font-semibold mb-8 text-gray-800">Register Form</h2>
  //         <form onSubmit={handleSubmit}>
  //           {/* INPUT FIELDS */}
  //           {[
  //             { label: 'Full Name', name: 'fullName', type: 'text' },
  //             { label: 'Email Address', name: 'emailAddress', type: 'email' },
  //             { label: 'Password', name: 'password', type: 'password' },
  //             { label: 'Gender', name: 'gender', type: 'text' },
  //           ].map(({ label, name, type }) => (
  //             <div className="flex items-center mb-6" key={name}>
  //               <label htmlFor={name} className="text-lg text-gray-700 w-1/3 text-left mr-4">
  //                 {label}:
  //               </label>
  //               <input
  //                 type={type}
  //                 id={name}
  //                 name={name}
  //                 value={formData[name]}
  //                 onChange={handleChange}
  //                 className="flex-1 p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
  //                 required
  //               />
  //             </div>
  //           ))}

            {/* ✅ Role Dropdown */}
            {/* <div className="flex items-center mb-6">
              <label htmlFor="role" className="text-lg text-gray-700 w-1/3 text-left mr-4">
                Role:
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="flex-1 p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                required
              >
                <option value="">Select</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div> */}
{/* 
            <button
              type="submit"
              className="mt-6 px-8 py-3 bg-blue-900 text-white rounded-md text-lg font-medium hover:bg-blue-800 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
//     </div>
//   );
// }

// export default RegisterForm; */}





import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'; // Add this at the top if missing


function RegisterForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [roleFromQuery, setRoleFromQuery] = useState("");

  // Extract role from URL query (?role=student)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const role = params.get("role");
    if (role) setRoleFromQuery(role);
  }, [location]);

  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    password: '',
    gender: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   // handle role change 
const handleSubmit = async (e) => {
  e.preventDefault();

  const role = roleFromQuery.toLowerCase();

  try {
    const payload = {
      name: formData.fullName,
      email: formData.emailAddress,
      password: formData.password,
      gender: formData.gender,
      role: role,
    };

    const res = await axios.post('http://localhost:5000/api/auth/register', payload); // ✅ send to backend

    alert(res.data.message || `Registration successful as ${role}`);
    navigate('/login');
  } catch (err) {
    console.error('Registration error:', err);
    alert(err.response?.data?.error || 'Registration failed');
  }
};

  return (
    <div className="min-h-screen flex flex-col justify-between bg-blue-100 ">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-gray-400 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">
            Register as {roleFromQuery || 'User'}
          </h2>

          <form onSubmit={handleSubmit}>
            {[
              { label: 'Full Name', name: 'fullName', type: 'text' },
              { label: 'Email Address', name: 'emailAddress', type: 'email' },
              { label: 'Password', name: 'password', type: 'password' },
              { label: 'Gender', name: 'gender', type: 'text' },
            ].map(({ label, name, type }) => (
              <div className="flex items-center mb-6" key={name}>
                <label htmlFor={name} className="text-lg text-gray-700 w-1/3 text-left mr-4">
                  {label} :
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="flex-1 p-3 border border-gray-300 rounded-md text-gray-900  bg-gradient-to-r from-indigo-100 to-purple-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="mt-6 px-8 py-3  bg-[#BD74CF]  text-white rounded-md text-lg font-medium hover:bg-pink-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer is fixed at bottom */}
      {/* <Footer /> */}
    </div>
  );
}

export default RegisterForm;







  //   if (role === 'student') {
  //     navigate('/student/dashboard');
  //   } else if (role === 'teacher') {
  //     navigate('/payment');
  //   } else {
  //     alert('Invalid role in URL.');
  //   }
  // };