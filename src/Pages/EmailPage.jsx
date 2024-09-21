import React, { useState } from "react";


const EmailPage = () => {

  // Declare state variables
  const [activeField, setActiveField] = useState("welcome");
  const [formData, setFormData] = useState({
    title: "Enter your email",
    description: "This will be used to contact you for the next steps.",
    buttonText: "Submit",
    email: "",
  });

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="flex h-screen bg-gray-100">
    {/* Left side: form settings */}
    <div className="w-1/4 p-6 bg-white shadow-lg flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Settings</h2>

      {/* Title input */}
      <label className="text-sm mb-2">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Enter your email"
        className="border border-gray-300 p-2 mb-4 rounded-lg"
      />

      {/* Description input */}
      <label className="text-sm mb-2">Description</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="This will be used to contact you for the next steps."
        className="border border-gray-300 p-2 mb-4 rounded-lg"
      />

      <div className="mt-4">
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Save
        </button>
      </div>
    </div>

    {/* Right side: form and display */}
    <div className="w-3/4 flex flex-col justify-center items-center bg-gray-50">
      {activeField === "email" && (
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {formData.title}
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            {formData.description}
          </p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Type here..."
            className="border-2 border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:border-blue-500 mb-4"
          />
          {!/\S+@\S+\.\S+/.test(formData.email) && formData.email && (
            <p className="text-red-500">Please enter a valid email address.</p>
          )}
          <button className="bg-black text-white py-3 px-8 rounded-lg text-lg">
            {formData.buttonText}
          </button>
        </div>
      )}
    </div>

   
  </div>
);
}

export default EmailPage;