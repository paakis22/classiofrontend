// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };


//    const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError('');
//   setSuccess('');

//   try {
//     const res = await axios.post('http://localhost:5000/api/auth/login', formData, {
//       headers: { 'Content-Type': 'application/json' }
//     });

//     const { token, user } = res.data;

//     setSuccess('Login successful!');
//     localStorage.setItem('token', token);
//     localStorage.setItem('role', user.role);
//     localStorage.setItem('userId', user._id);

//     if (user.role === 'admin') {
//       navigate('/admin-dashboard');

//     } else if (user.role === 'teacher') {
//       if (user.hasPaid) {
//         navigate('/teacher/dashboard');
//       } else {
//         navigate('/create-profile');
//       }

//     } else if (user.role === 'student') {
//       if (user.hasPaid) {
//         navigate('/student/dashboard');
//       } else {
//         navigate('/courses/:subject');
//       }

//     } else {
//       navigate('/');
//     }

//   } catch (err) {
//     setError(
//       err.response?.data?.error || 'Something went wrong. Please try again.'
//     );
//   }
// };


//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
//       <div className="w-full max-w-sm p-6 border border-[#1f1a3f] bg-gray-400/50 rounded shadow">
//         <h2 className="text-center text-2xl mb-6">Log In</h2>

//         {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
//         {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm mb-1">Email :</label>
//             <input
//               type="text"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 bg-gray-300 focus:outline-none"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm mb-1">Password :</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-3 py-2 bg-gray-300 focus:outline-none"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#053F5C] text-white py-2 px-6 rounded hover:bg-[#E99858]"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError('');
//   setSuccess('');

//   try {
//     const res = await axios.post('http://localhost:5000/api/auth/login', formData, {
//       headers: { 'Content-Type': 'application/json' }
//     });

//     const { token, user } = res.data;

//     setSuccess('Login successful!');
//     localStorage.setItem('token', token);
//     localStorage.setItem('role', user.role);
//     localStorage.setItem('userId', user.id);

//     if (user.role === 'admin') {
//       navigate('/admin-dashboard');

//     } else if (user.role === 'teacher') {
//       if (user.hasPaid) {
//         navigate('/teacher/dashboard');
//       } else {
//         const profile = user.profile || 'create-profile'; // if profile is inside user, else fallback

//         navigate('/create-profile');
//       }

//     } else if (user.role === 'student') {
//   if (user.hasPaid) {
//     navigate('/student/dashboard');
//   } else {
//     const subject = user.subject || 'default-subject';  // if subject is inside user, else fallback
//     navigate(`/courses/${subject}`);
//   }
// }

//   } catch (err) {
//     setError(
//       err.response?.data?.error || 'Something went wrong. Please try again.'
//     );
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');

  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', formData, {
      headers: { 'Content-Type': 'application/json' }
    });

    const { token, user } = res.data;

    setSuccess('Login successful!');
    localStorage.setItem('token', token);
    localStorage.setItem('role', user.role);
    localStorage.setItem('userId', user._id || user.id); // ensure both work

    // ✅ Check if payment was intended before login
    const pendingTeacherId = localStorage.getItem('pendingTeacherId');
    const pendingRole = localStorage.getItem('pendingRole');

    if (user.role === 'admin') {
      navigate('/admin-dashboard');

    } else if (user.role === 'teacher') {
      if (user.hasPaid) {
        navigate('/teacher/dashboard');
      } else {
        navigate('/create-profile');
      }

    } else if (user.role === 'student') {
      // 👉 If redirected for payment
      if (pendingTeacherId && pendingRole === 'student') {
        // Clear the temporary data
        localStorage.removeItem('pendingTeacherId');
        localStorage.removeItem('pendingRole');

        // Redirect to payment page
        return navigate(`/payment?tid=${pendingTeacherId}&role=student`);
      }

      if (user.hasPaid) {
        navigate('/student/dashboard');
      } else {
        const subject = user.subject || 'default-subject';
        navigate(`/courses/${subject}`);
      }
    }

  } catch (err) {
    setError(
      err.response?.data?.error || 'Something went wrong. Please try again.'
    );
  }
};


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm p-6 border border-[#1f1a3f] bg-gray-400/50 rounded shadow">
        <h2 className="text-center text-2xl mb-6">Log In</h2>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-1">Email :</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-300 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-1">Password :</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-300 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#053F5C] text-white py-2 px-6 rounded hover:bg-[#E99858]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};




export default Login;
