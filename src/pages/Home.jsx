

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import laptopImage from "../assets/laptopimage.jpg";
// import Maths from "../assets/maths.jpeg";
// import english from "../assets/english.jpeg";
// import ict from "../assets/ict.jpeg";
// import science from "../assets/science.jpeg";
// import lab from "../assets/lab.jpeg";
// import st from "../assets/st.jpg";
//  import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import Footer from "../components/ Footer"; 




// const Home = () => {
//   const [showRegisterOptions, setShowRegisterOptions] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white text-black font-sans bg-gradient-to-purple-200 from-gray-40 to-white">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-indigo-200 via-purple-400 to-white py-40 px-10">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <div className="space-y-6">
//             <h1 className="text-5xl font-bold leading-snug">
//               Welcome to <span className="text-white">Clasio</span>
//             </h1>
//             <p className="text-gray-700 text-lg">
//               Learn all subjects in one unified platform. Join thousands of students and teachers in our revolutionary educational ecosystem.
//             </p>
//             <p className="text-purple-800 font-medium">Get started today!</p>
//             <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-sm">
//               <h3 className="font-semibold text-gray-900">Ready to join?</h3>
//               <p className="text-sm text-gray-1000 mb-3">Choose your role to get started</p>
//               <div className="relative">
//                 <button
//                   onClick={() => setShowRegisterOptions(!showRegisterOptions)}
//                   className="mt-2 bg-[#A775B3] text-white py-1 px-1 rounded font-medium"
//                 >
//                   Register Now ▾
//                 </button>
//                 {showRegisterOptions && (
//                   <div className="absolute mt-2 bg-white text-black shadow-md rounded w-full z-10">
//                     <button
//                       onClick={() => navigate("/register?role=student")}
//                       className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
//                     >
//                       Student
//                     </button>
//                     <button
//                       onClick={() => navigate("/register?role=teacher")}
//                       className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
//                     >
//                       Teacher
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center">
//             <img
//               src={laptopImage}
//               alt="Classroom"
//               className="w-[600px] md:w-[1200px] rounded-xl shadow-lg border ml-40"
//             />
//           </div>
//         </div>
//       </section>

      


//    <section className="py-20 bg-[#f8f9ff] text-center">
//      <h2 className="text-3xl font-bold mb-3 text-[#1f1a3f]">Popular Subjects</h2>
//       <p className="text-gray-600 mb-12 text-base">Explore our comprehensive course offerings</p>

//      <div className="flex justify-center gap-6 flex-wrap px-4 ">
//       {[
//          {
//         src: Maths,
//         label: "O/L Maths",
//         desc: "Master fundamental mathematics concepts",
//         badge: "Popular",
//         badgeColor: "bg-blue-100 text-blue-700",
//         iconBg: "bg-blue-50",
//         cardBg: "bg-red-800",
//       },
//       {
//         src: english,
//         label: "English",
//         desc: "Improve your language and communication skills",
//         badge: "Essential",
//         badgeColor: "bg-green-100 text-green-700",
//         iconBg: "bg-green-50",
//       },
//       {
//         src: ict,
//         label: "ICT",
//         desc: "Learn modern technology and computer skills",
//         badge: "Trending",
//         badgeColor: "bg-purple-100 text-purple-700",
//         iconBg: "bg-purple-50",
//       },
//       {
//         src: science,
//         label: "A/L Maths",
//         desc: "Advanced mathematics for higher studies",
//         badge: "Advanced",
//         badgeColor: "bg-orange-100 text-orange-700",
//         iconBg: "bg-orange-50",
//       },
//     ].map((item, i) => (
//       <div
//         key={i}
//         className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl w-64 transform hover:scale-105 transition-all duration-300 ease-in-out"
//       >
//         <div className={`w-20 h-20 rounded-xl mx-auto mb-4 flex items-center justify-center ${item.iconBg}`}>
//           <img src={item.src} alt={item.label} className="h-16 w-16 object-cover rounded" />
//         </div>
//         <p className="text-lg font-semibold text-[#1f1a3f]">{item.label}</p>
//         <p className="text-gray-600 text-sm mt-1 mb-3">{item.desc}</p>
//         <span
//           className={`text-xs inline-block px-3 py-1 rounded-full font-medium ${item.badgeColor}`}
//         >
//           {item.badge}
//         </span>
//       </div>
//     ))}
//   </div>
// </section>



                 
                 
// <section className="py-16 bg-gradient-to-r from-indigo-100 to-purple-400 grid md:grid-cols-2 gap-10 px-6 items-center">
//   {/* Left Side Content */}
//   <div>
//     <h3 className="text-3xl font-semibold mb-4 text-gray-900">Why Choose Our Platform?</h3>
//     <p className="text-gray-700 mb-8 text-lg leading-relaxed">
//       Built specifically for educators, our platform combines powerful technology with intuitive design to create the ultimate learning environment.
//     </p>

//     <div className="grid grid-cols-2 gap-6">
//       {/* Feature 1 */}
//       <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
//         <div className="p-2 bg-indigo-100 rounded-full text-indigo-600 text-2xl">
//           {/* <FaClock /> */}
//         </div>
//         <div>
//           <h4 className="font-semibold">Unlimited Duration</h4>
//           <p className="text-sm text-gray-600">No time limits on your learning journey</p>
//         </div>
//       </div>

//       {/* Feature 2 */}
//       <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
//         <div className="p-2 bg-indigo-100 rounded-full text-indigo-600 text-2xl">
          
//         </div>
//         <div>
//           <h4 className="font-semibold">24/7 Support</h4>
//           <p className="text-sm text-gray-600">Round-the-clock customer assistance</p>
//         </div>
//       </div>

//       {/* Feature 3 */}
//       <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
//         <div className="p-2 bg-indigo-100 rounded-full text-indigo-600 text-2xl">
          
//         </div>
//         <div>
//           <h4 className="font-semibold">All Subjects</h4>
//           <p className="text-sm text-gray-600">Complete curriculum in one platform</p>
//         </div>
//       </div>

//       {/* Feature 4 */}
//       <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
//         <div className="p-2 bg-indigo-100 rounded-full text-indigo-600 text-2xl">
        
//         </div>
//         <div>
//           <h4 className="font-semibold">Expert Teachers</h4>
//           <p className="text-sm text-gray-600">Learn from qualified professionals</p>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* Right Side Image */}
//   <div className="flex justify-center">
//     <img
//       src={lab}
//       alt="Why Clasio"
//       className="rounded-2xl shadow-2xl w-full max-w-md transition-transform duration-700 hover:scale-105"
//     />
//   </div>
// </section>



             

// <section className="py-16 bg-[#f9faff] text-center">
//   <h2 className="text-3xl font-bold text-[#1f1a3f] mb-10">Get In Touch</h2>

//   <div
//     className="bg-cover bg-center rounded-3xl max-w-5xl mx-auto p-6 md:p-10 relative overflow-hidden"
//     style={{
//       backgroundImage: `url(${st})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}
//   >



//     <div className="bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg max-w-md mx-auto animate-fade-in-up">
//       <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Clasio</h3>

//       <ul className="space-y-5 text-left text-gray-800 text-base">
//         <li className="flex items-start gap-3">
//           <FaMapMarkerAlt className="text-purple-600 mt-1" />
//           <div>
//             <span className="font-semibold">Location</span><br />
//             Thirunalvely, Jaffna
//           </div>
//         </li>
//         <li className="flex items-start gap-3">
//           <FaPhoneAlt className="text-purple-600 mt-1" />
//           <div>
//             <span className="font-semibold">Phone</span><br />
//             0773397819
//           </div>
//         </li>
//         <li className="flex items-start gap-3">
//           <FaEnvelope className="text-purple-600 mt-1" />
//           <div>
//             <span className="font-semibold">Email</span><br />
//             sripaakis@gmail.com
//           </div>
//         </li>
//       </ul>
//     </div>
//   </div>
// </section>



//       {/* CTA */}
//       <section className="bg-gradient-to-r from-indigo-400 to-purple-400 text-black text-center py-16">
//         <p className="text-3xl font-bold mb-4">Start Learning with Clasio Today!</p>
//         <Link to="/login">
//           <button className="mt-4 px-8 py-3 bg-[#A775B3]  text-indigo-800 font-semibold rounded-full hover:bg-gray-100 transition">
//             Login
//           </button>
//         </Link>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
      
//   );
// };

// export default Home;






// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BookOpen, Users, Clock, Award, MapPin, Phone, Mail, Star, ArrowRight } from "lucide-react";
// import Footer from "../components/ Footer";

// const Home = () => {
//   const [showRegisterOptions, setShowRegisterOptions] = useState(false);
//   const navigate = useNavigate();
    
//   const subjects = [
//     {
//       icon: "📊",
//       label: "O/L Maths",
//       desc: "Master fundamental mathematics concepts",
//       badge: "Popular",
//       badgeColor: "bg-blue-100 text-blue-700",
//       bgGradient: "from-blue-50 to-blue-100",
//       students: "2.5k+"
//     },
//     {
//       icon: "🇬🇧",
//       label: "English",
//       desc: "Improve your language and communication skills",
//       badge: "Essential",
//       badgeColor: "bg-green-100 text-green-700",
//       bgGradient: "from-green-50 to-green-100",
//       students: "3.2k+"
//     },
//     {
//       icon: "💻",
//       label: "ICT",
//       desc: "Learn modern technology and computer skills",
//       badge: "Trending",
//       badgeColor: "bg-purple-100 text-purple-700",
//       bgGradient: "from-purple-50 to-purple-100",
//       students: "1.8k+"
//     },
//     {
//       icon: "🔬",
//       label: "A/L Maths",
//       desc: "Advanced mathematics for higher studies",
//       badge: "Advanced",
//       badgeColor: "bg-orange-100 text-orange-700",
//       bgGradient: "from-orange-50 to-orange-100",
//       students: "1.2k+"
//     },
//   ];

//   const features = [
//     {
//       icon: Clock,
//       title: "Unlimited Duration",
//       desc: "No time limits on your learning journey"
//     },
//     {
//       icon: Users,
//       title: "24/7 Support",
//       desc: "Round-the-clock customer assistance"
//     },
//     {
//       icon: BookOpen,
//       title: "All Subjects",
//       desc: "Complete curriculum in one platform"
//     },
//     {
//       icon: Award,
//       title: "Expert Teachers",
//       desc: "Learn from qualified professionals"
//     }
//   ];

//   return (
//     <div className="bg-white text-gray-900 font-sans">
//       {/* Navigation */}
//       <nav className="bg-white/95 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Clasio
//           </div>
//           <div className="flex items-center gap-4">
//             <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition-colors">
//               Login
//             </Link>
//             <div className="relative">
//               <button
//                 onClick={() => setShowRegisterOptions(!showRegisterOptions)}
//                 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
//               >
//                 Get Started <ArrowRight size={16} />
//               </button>
//               {showRegisterOptions && (
//                 <div className="absolute right-0 top-12 bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden min-w-[200px] z-10">
//                   <button
//                     onClick={() => navigate("/register?role=student")}
//                     className="block w-full px-6 py-3 hover:bg-gray-50 text-left transition-colors"
//                   >
//                     Join as Student
//                   </button>
//                   <button
//                     onClick={() => navigate("/register?role=teacher")}
//                     className="block w-full px-6 py-3 hover:bg-gray-50 text-left transition-colors"
//                   >
//                     Teach with Us
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
//         <div className="max-w-7xl mx-auto px-6 py-20">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
//                 <Star size={16} fill="currentColor" />
//                 Trusted by 10,000+ students
//               </div>
//               <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
//                 Welcome to{" "}
//                 <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                   Clasio
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 Learn all subjects in one unified platform. Join thousands of students and teachers in our revolutionary educational ecosystem.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => setShowRegisterOptions(!showRegisterOptions)}
//                   className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
//                 >
//                   Start Learning Today <ArrowRight size={20} />
//                 </button>
//                 <Link
//                   to="/login"
//                   className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 text-center"
//                 >
//                   Explore Courses
//                 </Link>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl p-8 shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
//                   alt="Students learning together"
//                   className="w-full h-80 object-cover rounded-2xl"
//                 />
//                 <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                       <Users size={24} className="text-green-600" />
//                     </div>
//                     <div>
//                       <div className="font-semibold">10,000+</div>
//                       <div className="text-sm text-gray-600">Active Students</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Popular Subjects */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-gray-900">Popular Subjects</h2>
//             <p className="text-xl text-gray-600">Explore our comprehensive course offerings</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {subjects.map((subject, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
//               >
//                 <div className={`w-16 h-16 bg-gradient-to-br ${subject.bgGradient} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                   {subject.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-gray-900">{subject.label}</h3>
//                 <p className="text-gray-600 mb-4 leading-relaxed">{subject.desc}</p>
//                 <div className="flex items-center justify-between">
//                   <span className={`text-xs px-3 py-1 rounded-full font-medium ${subject.badgeColor}`}>
//                     {subject.badge}
//                   </span>
//                   <span className="text-sm text-gray-500">{subject.students} students</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-4xl font-bold mb-6 text-gray-900">
//                 Why Choose Our Platform?
//               </h2>
//               <p className="text-xl text-gray-600 mb-10 leading-relaxed">
//                 Built specifically for educators, our platform combines powerful technology with intuitive design to create the ultimate learning environment.
//               </p>

//               <div className="grid sm:grid-cols-2 gap-6">
//                 {features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
//                   >
//                     <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600 flex-shrink-0">
//                       <feature.icon size={24} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
//                       <p className="text-gray-600 text-sm">{feature.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl p-8 shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80"
//                   alt="Online learning"
//                   className="w-full h-80 object-cover rounded-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
//             <p className="text-xl text-gray-600">Ready to start your learning journey?</p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="bg-white rounded-3xl p-10 shadow-xl">
//               <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
//                     <MapPin size={24} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
//                     <p className="text-gray-600">Thirunalvely, Jaffna</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
//                     <Phone size={24} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
//                     <p className="text-gray-600">0773397819</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
//                     <Mail size={24} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
//                     <p className="text-gray-600">sripaakis@gmail.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80"
//                 alt="Contact us"
//                 className="w-full h-96 object-cover rounded-3xl shadow-2xl"
//               />
//             </div> */}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-bold mb-6">Start Learning with Clasio Today!</h2>
//           <p className="text-xl mb-10 opacity-90">
//             Join thousands of students who are already transforming their futures with quality education.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/register">
//               <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300">
//                 Get Started Free
//               </button>
//             </Link>
//             <Link to="/login">
//               <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
//                 Login
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//      <Footer/>
      
//     </div>
//   );
// };

// export default Home;








// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BookOpen, Users, Clock, Award, MapPin, Phone, Mail, Star, ArrowRight, Menu, X, Play, CheckCircle, TrendingUp } from "lucide-react";
// import Footer from "../components/Footer";

// const Index = () => {
//   const [showRegisterOptions, setShowRegisterOptions] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();
    
//   const subjects = [
//     {
//       icon: "📊",
//       label: "O/L Mathematics",
//       desc: "Master fundamental mathematics concepts with interactive lessons",
//       badge: "Most Popular",
//       badgeColor: "bg-blue-100 text-blue-700",
//       bgGradient: "from-blue-50 to-blue-100",
//       students: "2,500+",
//       rating: 4.8,
//       lessons: 45
//     },
//     {
//       icon: "🇬🇧",
//       label: "English Language",
//       desc: "Improve language and communication skills effectively",
//       badge: "Essential",
//       badgeColor: "bg-green-100 text-green-700",
//       bgGradient: "from-green-50 to-green-100",
//       students: "3,200+",
//       rating: 4.9,
//       lessons: 38
//     },
//     {
//       icon: "💻",
//       label: "ICT & Technology",
//       desc: "Learn modern technology and computer programming",
//       badge: "Trending",
//       badgeColor: "bg-purple-100 text-purple-700",
//       bgGradient: "from-purple-50 to-purple-100",
//       students: "1,800+",
//       rating: 4.7,
//       lessons: 52
//     },
//     {
//       icon: "🔬",
//       label: "A/L Mathematics",
//       desc: "Advanced mathematics for university preparation",
//       badge: "Advanced",
//       badgeColor: "bg-orange-100 text-orange-700",
//       bgGradient: "from-orange-50 to-orange-100",
//       students: "1,200+",
//       rating: 4.9,
//       lessons: 67
//     },
//   ];

//   const features = [
//     {
//       icon: Clock,
//       title: "Flexible Learning",
//       desc: "Learn at your own pace with lifetime access to all courses",
//       color: "text-blue-600"
//     },
//     {
//       icon: Users,
//       title: "Expert Instructors",
//       desc: "Learn from qualified teachers with years of experience",
//       color: "text-green-600"
//     },
//     {
//       icon: BookOpen,
//       title: "Complete Curriculum",
//       desc: "Comprehensive syllabus covering all essential topics",
//       color: "text-purple-600"
//     },
//     {
//       icon: Award,
//       title: "Certified Learning",
//       desc: "Get certificates upon successful course completion",
//       color: "text-orange-600"
//     }
//   ];

//   const stats = [
//     { number: "10,000+", label: "Active Students", icon: Users },
//     { number: "500+", label: "Expert Teachers", icon: Award },
//     { number: "50+", label: "Courses Available", icon: BookOpen },
//     { number: "98%", label: "Success Rate", icon: TrendingUp }
//   ];

//   return (
//     <div className="bg-white text-gray-900 font-sans overflow-x-hidden">
//       {/* Navigation */}
//       <nav className="bg-[#E99858] shadow-lg fixed w-full top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div className="text-3xl font-bold text-white flex items-center gap-2">
//               <BookOpen className="text-white" size={32} />
//               Clasio
//             </div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center gap-8">
//               <Link to="/" className="text-white hover:text-gray-200 transition-colors font-medium">
//                 Home
//               </Link>
//               <Link to="/courses" className="text-white hover:text-gray-200 transition-colors font-medium">
//                 Courses
//               </Link>
//               <Link to="/about" className="text-white hover:text-gray-200 transition-colors font-medium">
//                 About
//               </Link>
//               <Link to="/contact" className="text-white hover:text-gray-200 transition-colors font-medium">
//                 Contact
//               </Link>
//               <Link to="/login" className="text-white hover:text-gray-200 transition-colors font-medium">
//                 Login
//               </Link>
//               <div className="relative">
//                 <button
//                   onClick={() => setShowRegisterOptions(!showRegisterOptions)}
//                   className="bg-[#053F5C] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 font-semibold"
//                 >
//                   Get Started <ArrowRight size={16} />
//                 </button>
//                 {showRegisterOptions && (
//                   <div className="absolute right-0 top-12 bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden min-w-[200px] z-10">
//                     <button
//                       onClick={() => navigate("/register?role=student")}
//                       className="block w-full px-6 py-3 hover:bg-gray-50 text-left transition-colors text-gray-700"
//                     >
//                       Join as Student
//                     </button>
//                     <button
//                       onClick={() => navigate("/register?role=teacher")}
//                       className="block w-full px-6 py-3 hover:bg-gray-50 text-left transition-colors text-gray-700"
//                     >
//                       Teach with Us
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden text-white"
//             >
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="md:hidden mt-4 pb-4 border-t border-orange-300">
//               <div className="flex flex-col gap-4 mt-4">
//                 <Link to="/" className="text-white hover:text-gray-200 transition-colors font-medium">
//                   Home
//                 </Link>
//                 <Link to="/courses" className="text-white hover:text-gray-200 transition-colors font-medium">
//                   Courses
//                 </Link>
//                 <Link to="/about" className="text-white hover:text-gray-200 transition-colors font-medium">
//                   About
//                 </Link>
//                 <Link to="/contact" className="text-white hover:text-gray-200 transition-colors font-medium">
//                   Contact
//                 </Link>
//                 <Link to="/login" className="text-white hover:text-gray-200 transition-colors font-medium">
//                   Login
//                 </Link>
//                 <button
//                   onClick={() => setShowRegisterOptions(!showRegisterOptions)}
//                   className="bg-[#053F5C] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 text-left font-semibold"
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen flex items-center">
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-[#E99858] bg-opacity-10 text-[#E99858] px-4 py-2 rounded-full text-sm font-semibold border border-[#E99858] border-opacity-20">
//                 <Star size={16} fill="currentColor" />
//                 Sri Lanka's #1 Online Learning Platform
//               </div>
              
//               <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//                 Transform Your
//                 <span className="block bg-gradient-to-r from-[#E99858] to-[#053F5C] bg-clip-text text-transparent">
//                   Learning Journey
//                 </span>
//               </h1>
              
//               <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
//                 Join over 10,000 students mastering O/L and A/L subjects with Sri Lanka's most trusted online education platform.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => setShowRegisterOptions(!showRegisterOptions)}
//                   className="bg-[#053F5C] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
//                 >
//                   Start Learning Free <ArrowRight size={20} />
//                 </button>
//                 <button className="border-2 border-[#E99858] text-[#E99858] px-8 py-4 rounded-full font-semibold hover:bg-[#E99858] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-lg">
//                   <Play size={20} />
//                   Watch Demo
//                 </button>
//               </div>

//               {/* Quick Stats */}
//               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="text-center">
//                     <div className="text-2xl font-bold text-[#053F5C]">{stat.number}</div>
//                     <div className="text-sm text-gray-600">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-[#E99858] to-[#053F5C] rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
//                 <img
//                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
//                   alt="Students learning together"
//                   className="w-full h-96 object-cover rounded-2xl"
//                 />
//               </div>
              
//               {/* Floating Achievement Cards */}
//               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                     <CheckCircle size={24} className="text-green-600" />
//                   </div>
//                   <div>
//                     <div className="font-bold text-[#053F5C]">98% Pass Rate</div>
//                     <div className="text-sm text-gray-600">A/L & O/L Success</div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <Award size={24} className="text-blue-600" />
//                   </div>
//                   <div>
//                     <div className="font-bold text-[#053F5C]">500+ Teachers</div>
//                     <div className="text-sm text-gray-600">Expert Instructors</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Popular Subjects */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#053F5C]">
//               Popular Subjects
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Explore our comprehensive course offerings designed for O/L and A/L success
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {subjects.map((subject, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group cursor-pointer border border-gray-100"
//               >
//                 <div className={`w-20 h-20 bg-gradient-to-br ${subject.bgGradient} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                   {subject.icon}
//                 </div>
                
//                 <h3 className="text-xl font-bold mb-3 text-[#053F5C] group-hover:text-[#E99858] transition-colors">
//                   {subject.label}
//                 </h3>
                
//                 <p className="text-gray-600 mb-4 leading-relaxed text-sm">
//                   {subject.desc}
//                 </p>
                
//                 <div className="flex items-center gap-2 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={14}
//                       className={i < Math.floor(subject.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
//                     />
//                   ))}
//                   <span className="text-sm text-gray-600 ml-1">{subject.rating}</span>
//                 </div>
                
//                 <div className="flex items-center justify-between mb-6">
//                   <span className={`text-xs px-3 py-1 rounded-full font-semibold ${subject.badgeColor}`}>
//                     {subject.badge}
//                   </span>
//                   <span className="text-sm text-gray-500">{subject.lessons} lessons</span>
//                 </div>
                
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-semibold text-[#053F5C]">{subject.students} students</span>
//                   <button className="bg-[#053F5C] text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition-colors">
//                     Enroll Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#053F5C]">
//                 Why Choose Clasio?
//               </h2>
//               <p className="text-xl text-gray-600 mb-10 leading-relaxed">
//                 We're revolutionizing education in Sri Lanka with cutting-edge technology, experienced teachers, and proven methodologies.
//               </p>

//               <div className="space-y-6">
//                 {features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100"
//                   >
//                     <div className={`p-4 bg-white rounded-2xl shadow-md ${feature.color} flex-shrink-0`}>
//                       <feature.icon size={28} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#053F5C] mb-2 text-lg">{feature.title}</h4>
//                       <p className="text-gray-600">{feature.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-[#053F5C] to-[#E99858] rounded-3xl p-8 shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80"
//                   alt="Online learning platform"
//                   className="w-full h-96 object-cover rounded-2xl"
//                 />
//               </div>
              
//               {/* Success Stories Floating Card */}
//               <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-[#053F5C] mb-1">98%</div>
//                   <div className="text-sm text-gray-600 mb-3">Student Success Rate</div>
//                   <div className="flex -space-x-2">
//                     {[1,2,3,4].map((i) => (
//                       <div key={i} className="w-8 h-8 bg-gradient-to-r from-[#E99858] to-[#053F5C] rounded-full border-2 border-white"></div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-gradient-to-br from-[#053F5C] to-[#E99858] text-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
//             <p className="text-xl opacity-90 max-w-2xl mx-auto">
//               Ready to start your educational journey? Contact us today!
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-10 border border-white border-opacity-20">
//               <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
//               <div className="space-y-8">
//                 <div className="flex items-start gap-6">
//                   <div className="p-4 bg-white bg-opacity-20 rounded-2xl">
//                     <MapPin size={28} />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-lg mb-2">Our Location</h4>
//                     <p className="opacity-90">Thirunalvely, Jaffna, Sri Lanka</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-6">
//                   <div className="p-4 bg-white bg-opacity-20 rounded-2xl">
//                     <Phone size={28} />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-lg mb-2">Phone Number</h4>
//                     <p className="opacity-90">+94 77 339 7819</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-6">
//                   <div className="p-4 bg-white bg-opacity-20 rounded-2xl">
//                     <Mail size={28} />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-lg mb-2">Email Address</h4>
//                     <p className="opacity-90">sripaakis@gmail.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-8">
//               <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
//                 <h4 className="text-xl font-bold mb-4">Quick Enrollment</h4>
//                 <p className="mb-6 opacity-90">Join thousands of successful students today!</p>
//                 <button className="bg-white text-[#053F5C] px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 w-full">
//                   Start Your Free Trial
//                 </button>
//               </div>
              
//               <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
//                 <h4 className="text-xl font-bold mb-4">Follow Us</h4>
//                 <p className="mb-6 opacity-90">Stay updated with latest courses and success stories</p>
//                 <div className="flex gap-4">
//                   <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-colors">
//                     <span className="text-xl">📘</span>
//                   </div>
//                   <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-colors">
//                     <span className="text-xl">📱</span>
//                   </div>
//                   <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-colors">
//                     <span className="text-xl">📺</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-[#053F5C] text-white py-20">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//             Ready to Excel in Your Studies?
//           </h2>
//           <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
//             Join over 10,000 students who have transformed their academic performance with Clasio's proven learning system.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <Link to="/register">
//               <button className="bg-[#E99858] text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 text-lg">
//                 Start Learning Today
//               </button>
//             </Link>
//             <Link to="/login">
//               <button className="border-2 border-[#E99858] text-[#E99858] px-10 py-4 rounded-full font-bold hover:bg-[#E99858] hover:text-white transition-all duration-300 text-lg">
//                 Login to Continue
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Index;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Users, Clock, Award, MapPin, Phone, Mail, Star, ArrowRight, Menu, X, Play, CheckCircle, TrendingUp } from "lucide-react";
import Footer from "../components/ Footer";

const Home = () => {
  const [showRegisterOptions, setShowRegisterOptions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
    
  const subjects = [
    {
      icon: "📊",
      label: "O/L Mathematics",
      desc: "Master fundamental mathematics concepts with interactive lessons",
      badge: "Most Popular",
      badgeColor: "bg-blue-100 text-blue-700",
      bgGradient: "from-blue-50 to-blue-100",
      students: "2,500+",
      rating: 4.8,
      lessons: 45
    },
    {
      icon: "🇬🇧",
      label: "English Language",
      desc: "Improve language and communication skills effectively",
      badge: "Essential",
      badgeColor: "bg-green-100 text-green-700",
      bgGradient: "from-green-50 to-green-100",
      students: "3,200+",
      rating: 4.9,
      lessons: 38
    },
    {
      icon: "💻",
      label: "ICT & Technology",
      desc: "Learn modern technology and computer programming",
      badge: "Trending",
      badgeColor: "bg-purple-100 text-purple-700",
      bgGradient: "from-purple-50 to-purple-100",
      students: "1,800+",
      rating: 4.7,
      lessons: 52
    },
    {
      icon: "🔬",
      label: "A/L Mathematics",
      desc: "Advanced mathematics for university preparation",
      badge: "Advanced",
      badgeColor: "bg-orange-100 text-orange-700",
      bgGradient: "from-orange-50 to-orange-100",
      students: "1,200+",
      rating: 4.9,
      lessons: 67
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Flexible Learning",
      desc: "Learn at your own pace with lifetime access to all courses",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      desc: "Learn from qualified teachers with years of experience",
      color: "text-green-600"
    },
    {
      icon: BookOpen,
      title: "Complete Curriculum",
      desc: "Comprehensive syllabus covering all essential topics",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "Certified Learning",
      desc: "Get certificates upon successful course completion",
      color: "text-orange-600"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Students", icon: Users },
    { number: "500+", label: "Expert Teachers", icon: Award },
    { number: "50+", label: "Courses Available", icon: BookOpen },
    { number: "98%", label: "Success Rate", icon: TrendingUp }
  ];

  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#E99858] bg-opacity-10 text-[#E99858] px-4 py-2 rounded-full text-sm font-semibold border border-[#E99858] border-opacity-20">
                <Star size={16} fill="currentColor" />
                Sri Lanka's #1 Online Learning Platform
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-[#E99858] to-[#053F5C] bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Join over 10,000 students mastering O/L and A/L subjects with Sri Lanka's most trusted online education platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <button
                  onClick={() => setShowRegisterOptions(!showRegisterOptions)}
                  className="bg-[#053F5C] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  Start Learning Free <ArrowRight size={20} />
                </button>
                <button className="border-2 border-[#E99858] text-[#E99858] px-8 py-4 rounded-full font-semibold hover:bg-[#E99858] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                  <Play size={20} />
                  Watch Demo
                </button> */} 


                    {/* <button
                                onClick={() => setShowRegisterOptions(!showRegisterOptions)}
                                className="bg-[#053F5C] hover:bg-[#032f45] transition-all px-6 py-2 rounded-full flex items-center gap-2 font-semibold"
                              >
                                Get Started <ArrowRight size={16} />
                              </button> */}
                    
                              {/* Dropdown */}
                              {/* {showRegisterOptions && (
                                <div className="absolute top-16 right-6 bg-white rounded-xl shadow-xl border text-gray-700 overflow-hidden z-50">
                                  <button
                                    onClick={() => navigate("/register?role=student")}
                                    className="px-6 py-3 w-full text-left hover:bg-gray-100"
                                  >
                                    Join as Student
                                  </button>
                                  <button
                                    onClick={() => navigate("/register?role=teacher")}
                                    className="px-6 py-3 w-full text-left hover:bg-gray-100"
                                  >
                                    Teach with Us
                                  </button>
                                </div>
                              )}
                
              </div>   
 */}

                 <button
            onClick={() => setShowRegisterOptions(!showRegisterOptions)}
            className="bg-[#053F5C] hover:bg-[#E99858] transition-all px-6 py-2 rounded-full  flex items-center gap-2 font-semibold"
          > 
             Get Started <ArrowRight size={19} /> 
         </button>  

            {showRegisterOptions && (
            <div className="absolute top-180 left-80 bg-white rounded-xl shadow-xl border text-gray-800 overflow-hidden z-50">
              <button
                onClick={() => navigate("/register?role=student")}
                className="px-6 py-3 w-full text-left hover:bg-gray-100"
              >
                Join as Student
              </button>
              <button
                onClick={() => navigate("/register?role=teacher")}
                className="px-6 py-3 w-full text-left hover:bg-gray-100"
              >
                Teach with Us
              </button>
            </div> 
           )} 
        </div>









              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#053F5C]">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#E99858] to-[#053F5C] rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Students learning together"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={24} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-[#053F5C]">98% Pass Rate</div>
                    <div className="text-sm text-gray-600">A/L & O/L Success</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-[#053F5C]">500+ Teachers</div>
                    <div className="text-sm text-gray-600">Expert Instructors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Subjects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#053F5C]">
              Popular Subjects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive course offerings designed for O/L and A/L success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group cursor-pointer border border-gray-100"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${subject.bgGradient} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {subject.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[#053F5C] group-hover:text-[#E99858] transition-colors">
                  {subject.label}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {subject.desc}
                </p>
                
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(subject.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">{subject.rating}</span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${subject.badgeColor}`}>
                    {subject.badge}
                  </span>
                  <span className="text-sm text-gray-500">{subject.lessons} lessons</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#053F5C]">{subject.students} students</span>
                  <button className="bg-[#053F5C] text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#053F5C]">
                Why Choose Clasio?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We're revolutionizing education in Sri Lanka with cutting-edge technology, experienced teachers, and proven methodologies.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className={`p-4 bg-white rounded-2xl shadow-md ${feature.color} flex-shrink-0`}>
                      <feature.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#053F5C] mb-2 text-lg">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#053F5C] to-[#E99858] rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80"
                  alt="Online learning platform"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              
              {/* Success Stories Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#053F5C] mb-1">98%</div>
                  <div className="text-sm text-gray-600 mb-3">Student Success Rate</div>
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-[#E99858] to-[#053F5C] rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#053F5C] to-[#E99858] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ready to start your educational journey? Contact us today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray bg-opacity-10 backdrop-blur-lg rounded-3xl p-10 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gray-500 bg-opacity-20 rounded-2xl">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Our Location</h4>
                    <p className="opacity-90">Thirunalvely, Jaffna, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gray-500 bg-opacity-20 rounded-2xl">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Phone Number</h4>
                    <p className="opacity-90">+94 77 339 7819</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gray-500 bg-opacity-20 rounded-2xl">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Email Address</h4>
                    <p className="opacity-90">sripaakis@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
                <h4 className="text-xl font-bold mb-4">Quick Enrollment</h4>
                <p className="mb-6 opacity-90">Join thousands of successful students today!</p>
                <button className="bg-white text-[#053F5C] px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 w-full">
                  Start Your Free Trial
                </button>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
                <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                <p className="mb-6 opacity-90">Stay updated with latest courses and success stories</p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-colors">
                    <span className="text-xl">📘</span>
                  </div>
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-colors">
                    <span className="text-xl">📱</span>
                  </div>
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-colors">
                    <span className="text-xl">📺</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[CCD0D2] text-blue py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Excel in Your Studies?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join over 10,000 students who have transformed their academic performance with Clasio's proven learning system.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/register">
              <button className="bg-[#E99858] text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 text-lg">
                Start Learning Today
              </button>
            </Link>
            <Link to="/login">
              <button className="border-2 border-[#E99858] text-[#E99858] px-10 py-4 rounded-full font-bold hover:bg-[#E99858] hover:text-white transition-all duration-300 text-lg">
                Login to Continue
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
