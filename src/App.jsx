
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';


// import Footer from '/src/components/ Footer.jsx';
import Home from './pages/Home.jsx'; 
import Login from './pages/login.jsx';
import RegisterForm from './pages/RegisterForm.jsx';  
import StudentDashboard from './pages/StudentDashboard.jsx';
import TeacherDashboard from './pages/TeacherDashboard.jsx';
import CreateProfile from './pages/CreateProfile';
// import TeacherList from './pages/TeacherList.jsx';
import TeacherListFiltered from './components/TeacherListFiltered.jsx';
import AdminDashboard from "./pages/ AdminDashboard.jsx";
import UserManagement from './pages/UserManagement.jsx';
import TeacherApproval from './pages/TeacherApproval.jsx'; 
import PaymentList from './pages/PaymentList.jsx';
import TeacherProfileView from './pages/TeacherProfileView.jsx';
import TeacherListAdmin from './pages/TeacherListAdmin.jsx';
import PaymentForm from './pages/PaymentForm.jsx';
// import StripePaymentForm from './pages/RegisterForm.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StudentProfile from './pages/StudentProfile.jsx';
import StudentProfileManagement from './pages/StudentProfileManagement.jsx';
import StudentShedule from './pages/studentShedule.jsx';
import Courses from './pages/Courses';
import StudentProfileView from "./pages/StudentProfileView";
import Class from './pages/Class.jsx';
import JoinedClasses from './pages/JoinedClasses.jsx';
import Classmanagment from './pages/ Classmanagment.jsx';
import StudentClassview from './pages/StudentClassview.jsx';
import Module from './pages/Modules.jsx';
import ApprovalWait from './pages/ApprovalWait.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import AdminClassView from './pages/AdminClassView.jsx';
// import StudentRegister from './pages/StudentRegister';
// import TeacherRegister from './pages/TeacherRegister';


 const stripePromise = loadStripe("pk_test_51RaVGI2fFy5KJphwF8r3TLuBvXZYLexOxCLO6VzCIUmdqvW1ZgZry8u6OaYACvShmY7Zom5GVcy3SExCLtZzBlAJ00ju0S93GT"); //  Replace with real key



function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
     <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} /> 
            <Route path="/student/dashboard" element={<StudentDashboard />} /> 
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} /> 
            <Route path="/create-profile" element={<CreateProfile />} />
            {/* <Route path="/teachers" element={<TeacherList />} />  */}
            <Route path="/teachers/:subject" element={<TeacherListFiltered />} />

            {/* <Route path="/student/register" element={<StudentRegister />} />
            <Route path="/teacher/register" element={<TeacherRegister />} /> */}
            {/* <Footer />  */}
  
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
             <Route path="/teacher-approval" element={<TeacherApproval />} />
            <Route path="/payment-list" element={<PaymentList />} /> 
            <Route path="/teacher-profile/:id" element={<TeacherProfileView />} />
            <Route path="/teacher-list-admin" element={<TeacherListAdmin />} />
            <Route path="/payment-form" element={<PaymentForm />} />
           
{/* 
            <Route path="/payment" element={<StripePaymentForm />} />
            */}
                    <Route
               path="/payment"
              element={
            <Elements stripe={stripePromise}>
          <PaymentForm />
         </Elements>
              }
         />  

            <Route path="/student-profile" element={<StudentProfile />} />
            <Route path="/student-profile-management" element={<StudentProfileManagement />} />
  
            <Route
             path="/subject/:subject"
             element={<TeacherListFiltered viewMode="student" />} 
             />
             <Route path="/courses" element={<Courses />} />
             <Route path="/student/profile/view" element={<StudentProfileView />} />
             <Route path='Class' element ={<Class/>}/>
             <Route path="/student/Classes" element={<JoinedClasses />} />
            <Route path="/class-management" element={<Classmanagment />} />
            <Route path="/Modules" element={<Module />} />
            <Route path="/student-class-view" element={<StudentClassview />} />
            <Route path="/approval-wait" element={<ApprovalWait />} />
        <Route path="/shedule" element={<StudentShedule />} />
              {/* <Route path="/teacher-profile/:id" element={<TeacherProfileView />} /> */}
              {/* <Route path="/student/profile/view" element={<StudentProfileView />} /> */}
        

             
    </Routes>

    </Router>
  );
}

export default App;
