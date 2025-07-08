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

const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Debug: print formData
    console.log('Submitting:', formData);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = res.data;

      setSuccess('Login successful!');
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.user.role);

      const role = data.user.role;
      if (role === 'admin') navigate('/admin-dashboard');
      else if (role === 'teacher') navigate('/create-profile');
      else if (role === 'student') navigate('/courses/:subject');
      else navigate('/');
    } catch (err) {
      setError(
        err.response?.data?.error ||
        'Something went wrong. Please try again.'
      );
    }
  };


//           const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError('');
//   setSuccess('');

//   try {
//     const res = await axios.post('http://localhost:5000/api/auth/login', formData, {
//       headers: { 'Content-Type': 'application/json' }
//     });

//     const data = res.data;
//     const token = data.token;
//     const role = data.user.role;

//     // Store in localStorage
//     localStorage.setItem('token', token);
//     localStorage.setItem('role', role);

//     setSuccess('Login successful!');

//     // 🔁 REDIRECT BASED ON ROLE
//     if (role === 'admin') {
//       navigate('/admin-dashboard');
//     }

//     else if (role === 'teacher') {
//       try {
//         const profileRes = await axios.get(`http://localhost:5000/api/teachers/me`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         if (profileRes.data && profileRes.data.name) {
//           navigate('/teacher-dashboard');
//         } else {
//           navigate('/create-profile');
//         }
//       } catch (err) {
//         navigate('/create-profile'); // fallback
//       }
//     }

//     else if (role === 'student') {
//       try {
//         const profileRes = await axios.get(`http://localhost:5000/api/students/me`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         if (profileRes.data && profileRes.data.name) {
//           navigate('/student-dashboard');
//         } else {
//           navigate('/student-profile');
//         }
//       } catch (err) {
//         navigate('/student-profile'); // fallback
//       }
//     }

//     else {
//       navigate('/');
//     }

//   } catch (err) {
//     console.error('Login error:', err);
//     setError(err.response?.data?.error || 'Something went wrong. Please try again.');
//   }
// };



  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* <Navbar /> */}

      <div className="w-full  max-w-sm p-6 border border-[#1f1a3f] bg-gray-400/50 rounded shadow ">
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
            type="login"
            className="w-full bg-[#053F5C] text-white py-2 px-6 rounded hover:bg-[#E99858]"
          >
            login
          </button>
        </form>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Login;



