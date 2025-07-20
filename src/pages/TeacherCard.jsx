// // components/TeacherCard.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const TeacherCard = ({ teacher }) => {
//   return (
//     <div className="bg-white shadow rounded p-4 text-center text-sm">
//       <div className="w-24 h-24 mx-auto mb-2">
//         <img
//           src={teacher.image?.url}
//           alt={teacher.name}
//           className="w-full h-full object-cover rounded-full border"
//         />
//       </div>
//       <h3 className="font-bold">{teacher.name}</h3>
//       <p>{teacher.email}</p>
//       <p>{teacher.gender}</p>
//       <p className="text-xs text-gray-600">{teacher.bio}</p>

//       <Link to="/payment">
//         <button className="mt-3 bg-[#1f1a3f] text-white px-4 py-1 rounded hover:bg-[#0e0b2a] text-xs">
//           Join
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default TeacherCard;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherCard = ({ teacher }) => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Store teacher info in query or localStorage temporarily
      localStorage.setItem('pendingTeacherId', teacher._id);
      localStorage.setItem('pendingRole', 'student');

      navigate('/register?role=student'); // Redirect to login if not authenticated
    } else {
      // Navigate to payment with teacher ID and role in query
      navigate(`/payment?tid=${teacher._id}&role=student`);
    }
  };

  return (
    <div className="bg-white shadow rounded p-4 text-center text-sm">
      <div className="w-24 h-24 mx-auto mb-2">
        <img
          src={teacher.image?.url}
          alt={teacher.name}
          className="w-full h-full object-cover rounded-full border"
        />
      </div>
      <h3 className="font-bold">{teacher.name}</h3>
      <p>{teacher.email}</p>
      <p>{teacher.gender}</p>
      <p className="text-xs text-gray-600">{teacher.bio}</p>

      <button
        onClick={handleJoinClick}
        className="mt-3 bg-[#1f1a3f] text-white px-4 py-1 rounded hover:bg-[#0e0b2a] text-xs"
      >
        Join
      </button>
    </div>
  );
};

export default TeacherCard;
