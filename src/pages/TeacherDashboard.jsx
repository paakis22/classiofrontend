
import React, { useState,useEffect } from 'react';
import teacher from '../assets/teacher.jpeg';
import { useNavigate } from "react-router-dom";
 import Footer from "../components/ Footer"; 
import { Link } from 'react-router-dom'
import axios from 'axios';



  const TeacherDashboard = () => {
  const [showCourses, setShowCourses] = useState(false); 
  const navigate = useNavigate(); // ⬅️ for navigation

  //  const [students, setStudents] = useState([]);
  // const token = JSON.parse(localStorage.getItem('user'))?.token;


  //  useEffect(() => {
  //   axios.get('http://localhost:5000/api/teachers/students/my', {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then(res => setStudents(res.data))
  //     .catch(err => console.error("Failed to load students", err));
  // }, []);





  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Navbar */}
      <nav className="bg-[#224D62]  text-white flex justify-center gap-6 py-4 text-sm md:text-base font-medium flex-wrap relative">
        <button onClick={() => navigate('/create-profile')} className="hover:underline">
          profile
        </button>

    
        {/* <button className="hover:underline">Schedule</button> */}
        
          <Link to="/class">
  <button className="hover:underline">Schedule</button>
</Link>

        {/* <button className="hover:underline">Class</button> */}
        <button className="hover:underline">Dashboard</button> 
        <button className="hover:underline">Module</button>
        <button className="hover:underline">student</button>
      </nav>

      {/* Heading Section */}
      <section className="text-center py-8">
        <h2 className="text-xl md:text-2xl font-medium">
          Learn on-the-go or right<br />
          at home with <span className="font-bold text-[#1f1a3f]">clasio</span>
        </h2>
      </section>

      {/* Image */}
      <div className="px-4 flex justify-center">
        <img
          src={teacher}
          alt="dashboard"
          className="w-full max-w-4xl rounded shadow"
        />
      </div>

      {/* Join Button */}
      <div className="py-4 text-center">
        <button className="bg-[#053F5C]   text-white px-6 py-2 rounded hover:bg-[#0e0b2a]">
          Join
        </button>
      </div>

 <div className="mt-10 ">
        <Footer />
      </div>


{/*             
 <div className="p-6">
      <h2 className="text-xl font-bold mb-4">👨‍🎓 Students Joined Your Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {students.map((student) => (
          <div key={student._id} className="p-4 border rounded shadow bg-white">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Gender:</strong> {student.gender}</p>
          </div>
        ))}
      </div>
    </div>
   */}



    </div>
  );
}; 




export default TeacherDashboard;
