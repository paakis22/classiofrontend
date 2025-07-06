import React, { useState } from 'react';
import st from '../assets/st.jpg'; 
import TeacherListFiltered from '../components/TeacherListFiltered'; 
import { Link } from 'react-router-dom';
import Footer from "../components/ Footer"; 
import { useNavigate } from 'react-router-dom';


// import Courses from "../pages/courses";
const StudentDashboard = () => {
  const [showCourses, setShowCourses] = useState(false); 
  const [selectedSubject, setSelectedSubject] = useState(null);
  const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setShowCourses(false); // hide dropdown 
    navigate(`/courses/${subject}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      

      <nav className="bg-[#787A81]   text-white flex justify-center gap-6 py-4 text-sm md:text-base font-medium flex-wrap relative">

        <Link to="/student-profile">    
        <button className="hover:underline" onClick={() => setSelectedSubject(null)}>profile</button>
        </Link> 
        
        <button className="hover:underline">Schedule</button> 


         <Link to="/s">
          <button className="hover:underline">about me</button>
        </Link>  


        {/* Dropdown Toggle */}
        <div className="relative">
           
          <button onClick={() => setShowCourses(!showCourses)} className="hover:underline">
            Courses ▾
          </button>
              


          {showCourses && (
            <div className="absolute top-full mt-1 left-0 bg-white text-black shadow-md rounded z-10 w-32">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSubjectClick('Maths')}>Maths</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSubjectClick('English')}>English</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSubjectClick('ICT')}>ICT</li>
              </ul>
            </div>
          )}
        </div>

           

          <Link to="/payment">
        <button className="hover:underline">Payment</button>
        </Link>

        <button className="hover:underline">Module</button>
      </nav>

      {/* Conditional Teacher View */}
      {selectedSubject ? (
        <TeacherListFiltered subject={selectedSubject} />
      ) : (
        <>
          {/* Default dashboard content */}
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
  className="mt-6 mx-auto block bg-[#A775B3]  text-white px-6 py-2 text-xs rounded-md hover:brightness-110 transition duration-200 shadow"
  onClick={() => window.open("https://marketplace.zoom.us/", "_blank")}
>
  Join
</button>

  </> 
 )}

      {/* Footer with padding */}
      <div className="mt-8 ">
        <Footer />
      </div>
    </div>
  );
};


export default StudentDashboard;  
