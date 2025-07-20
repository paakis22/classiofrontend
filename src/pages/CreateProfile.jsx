import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // for navigation
import { toast } from 'react-toastify';



const CreateProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    gender: '',
    bio: '',
    subject: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setProfileImage(imgURL);
      setImageFile(file);
    }
  };

  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadData = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      uploadData.append(key, value);
    });

    if (resumeFile) uploadData.append('resume', resumeFile);
    if (imageFile) uploadData.append('image', imageFile);

    try {
      const token = localStorage.getItem('token'); // ✅ Get token from localStorage

      const res = await axios.post(
        'http://localhost:5000/api/teachers',
        uploadData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Required for file upload
            Authorization: `Bearer ${token}`,      // ✅ Attach token here
          },
        }
      );
      // After successful POST to create teacher
      navigate("/approval-wait"); // your custom waiting screen
      toast.info("✅ Profile submitted. Wait for admin approval.");


      setFormData({ name: '', email: '', address: '', gender: '', bio: '', subject: '' });
      setProfileImage(null);
      setResumeFile(null);
      setImageFile(null);
    } catch (err) {
      alert(err.response?.data?.error || 'Submission Failed');
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/30 z-50">
      <form onSubmit={handleSubmit} className="bg-gray-400/70 p-6 rounded shadow-lg w-[90%] max-w-md space-y-4 text-sm text-black relative" encType="multipart/form-data">
        <h2 className="text-center text-xl font-semibold mb-4">create profile</h2>

        {/* Profile Picture Upload */}
        <div className="flex justify-center">
          <label htmlFor="profileImage" className="cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-gray-200 border border-gray-400 overflow-hidden flex justify-center items-center">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-xs text-gray-500">Upload Photo</span>
              )}
            </div>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-2">
          <label>
            Full Name:
            <input name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full px-2 py-1 bg-gray-300" required />
          </label>
          <label>
            Email Address:
            <input name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full px-2 py-1 bg-gray-300" required />
          </label>
          <label>
            Address:
            <input name="address" value={formData.address} onChange={handleInputChange} type="text" className="w-full px-2 py-1 bg-gray-300" />
          </label>
          <label>
            Gender:
            <input name="gender" value={formData.gender} onChange={handleInputChange} type="text" className="w-full px-2 py-1 bg-gray-300" />
          </label>
          <label>
            Bio:
            <input name="bio" value={formData.bio} onChange={handleInputChange} type="text" className="w-full px-2 py-1 bg-gray-300" />
          </label>
          <label>
            Subject:
            <input name="subject" value={formData.subject} onChange={handleInputChange} type="text" className="w-full px-2 py-1 bg-gray-300" />
          </label>
          <label>
            Upload Resume:
            <input type="file" onChange={handleResumeChange} className="w-full px-2 py-1 bg-gray-300" />
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-2">
          <button
            type="submit"
            className="bg-[#1f1a3f] text-white px-4 py-2 rounded hover:bg-[#0e0b2a]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProfile;
