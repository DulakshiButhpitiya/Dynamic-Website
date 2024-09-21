// import React, { useState } from "react";

// const WelcomePage = () => {
//   const [activeFielda, setActiveFielda] = useState("email");
//   const [formDataa, setFormDataa] = useState({
//     title: "Enter your email",
//     description: "This will be used to contact you for the next steps.",
//     buttonText: "Submit",
//     email: "",
//   });
//  // Declare state variables
//  const [activeField, setActiveField] = useState("welcome");
//  const [formData, setFormData] = useState({
//    title: "Welcome to our form",
//    description: "This is a description of the form",
//    buttonText: "Start",
//    name: "",
//    email: "",
//  });

//  // Handle input changes for the form
//  const handleInputChange = (e) => {
//    const { name, value } = e.target;
//    setFormData({
//      ...formData,
//      [name]: value,
//    });
//  };
//   // Handle input changes for the form
//   const handleInputChangee = (e) => {
//     const { name, value } = e.target;
//     setFormDataa({
//       ...formDataa,
//       [name]: value,
//     });
//   };
//   return (
//     <div className="flex h-screen bg-gray-100">
//     {/* Left side: form settings, visible only when 'welcome' screen is active */}
//     {activeField === "welcome" && (
//       <div className="w-1/4 p-6 bg-white shadow-lg flex flex-col">
//         <h2 className="text-lg font-semibold mb-4">Settings</h2>

//         {/* Title input */}
//         <label className="text-sm mb-2">Title</label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleInputChange}
//           placeholder="Welcome to our form"
//           className="border border-gray-300 p-2 mb-4 rounded-lg"
//         />

//         {/* Description input */}
//         <label className="text-sm mb-2">Description</label>
//         <input
//           type="text"
//           name="description"
//           value={formData.description}
//           onChange={handleInputChange}
//           placeholder="Add a description of the form"
//           className="border border-gray-300 p-2 mb-4 rounded-lg"
//         />

//         {/* Button text input */}
//         <label className="text-sm mb-2">Button Text</label>
//         <input
//           type="text"
//           name="buttonText"
//           value={formData.buttonText}
//           onChange={handleInputChange}
//           placeholder="Start"
//           className="border border-gray-300 p-2 mb-4 rounded-lg"
//         />

//         <div className="mt-4">
//           <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//             Upload Image
//           </button>
//         </div>
//       </div>
//     )}

//     {/* Right side: form and display */}
//     <div
//       className={`${
//         activeField === "welcome" ? "w-3/4" : "w-full"
//       } flex flex-col justify-center items-center bg-gray-50`}
//     >
//       {activeField === "welcome" && (
//         <div className="text-center">
//           <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
//             {formData.title}
//           </h1>
//           <p className="text-xl text-gray-600 mb-6">{formData.description}</p>
//           <button className="bg-black text-white py-3 px-8 rounded-lg text-lg">
//             {formData.buttonText}
//           </button>
//         </div>
//       )}

//       {activeField === "name" && (
//         <div className="w-1/2">
//           <h2 className="text-3xl font-semibold text-gray-700 mb-4">
//             Enter Your Name
//           </h2>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter your name"
//             className="border-2 border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:border-blue-500 mb-4"
//           />
//         </div>
//       )}

//       {/* Email field borrowed from WelcomePage2 */}
      
//     {/* Left side: form settings */}
//     <div className="w-1/4 p-6 bg-white shadow-lg flex flex-col">
//       <h2 className="text-lg font-semibold mb-4">Settings</h2>

//       {/* Title input */}
//       <label className="text-sm mb-2">Title</label>
//       <input
//         type="text"
//         name="title"
//         value={formDataa.title}
//         onChange={handleInputChangee}
//         placeholder="Enter your email"
//         className="border border-gray-300 p-2 mb-4 rounded-lg"
//       />

//       {/* Description input */}
//       <label className="text-sm mb-2">Description</label>
//       <input
//         type="text"
//         name="description"
//         value={formDataa.description}
//         onChange={handleInputChangee}
//         placeholder="This will be used to contact you for the next steps."
//         className="border border-gray-300 p-2 mb-4 rounded-lg"
//       />

//       <div className="mt-4">
//         <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//           Save
//         </button>
//       </div>
//     </div>
//       {activeFielda === "email" && (
//         <div className="w-1/2">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-2">
//             Enter your email
//           </h2>
//           <p className="text-lg text-gray-600 mb-4">
//             This will be used to contact you for the next steps.
//           </p>
//           <input
//             type="email"
//             name="email"
//             value={formDataa.email}
//             onChange={handleInputChangee}
//             placeholder="Type here..."
//             className="border-2 border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:border-blue-500 mb-4"
//           />
//           {!/\S+@\S+\.\S+/.test(setFormDataa.email) && formDataa.email && (
//             <p className="text-red-500">Please enter a valid email address.</p>
//           )}
//           <button className="bg-black text-white py-3 px-8 rounded-lg text-lg">
//             Submit
//           </button>
//         </div>
//       )}
//     </div>

//     {/* Right side: control buttons */}
//     <div className="absolute right-12 top-12 flex flex-col space-y-4">
//       <button
//         className={`w-40 py-3 text-xl font-medium text-white rounded-full transition-all duration-300 ${
//           activeField === "welcome"
//             ? "bg-white text-blue-500 border-2 border-blue-500"
//             : "bg-blue-600 hover:bg-blue-800"
//         }`}
//         onClick={() => setActiveField("welcome")}
//       >
//         Welcome Screen
//       </button>
//       <button
//         className={`w-40 py-3 text-xl font-medium text-white rounded-full transition-all duration-300 ${
//           activeField === "name"
//             ? "bg-white text-blue-500 border-2 border-blue-500"
//             : "bg-blue-600 hover:bg-blue-800"
//         }`}
//         onClick={() => setActiveField("name")}
//       >
//         Enter Name
//       </button>
//       <button
//         className={`w-40 py-3 text-xl font-medium text-white rounded-full transition-all duration-300 ${
//           activeField === "email"
//             ? "bg-white text-blue-500 border-2 border-blue-500"
//             : "bg-blue-600 hover:bg-blue-800"
//         }`}
//         onClick={() => setActiveField("email")}
//       >
//         Enter Email
//       </button>
//     </div>
//   </div>
// );
// };

// export default WelcomePage;

import React, { useState } from "react";
import InputFileUpload from "./InputFileUpload"; // Assuming the file upload component is in the same directory

const WelcomePage = () => {
  // Declare state variables
  const [activeField, setActiveField] = useState("welcome");
  const [formData, setFormData] = useState({
    title: "Welcome to our form",
    description: "This is a description of the form",
    buttonText: "Start",
    name: "",
    email: "",
  });
  const [emailForm, setEmailForm] = useState({
    title: "Enter your email",
    description: "This will be used to contact you for the next steps.",
    buttonText: "Submit",
    email: "",
  });
  const [nameForm, setNameForm] = useState({
    title: "Enter Your Name",
    description: "Please provide your name for our records.",
    buttonText: "Save Name",
    name: "",
  });

  const [image, setImage] = useState(null);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [activeForm, setActiveForm] = useState("welcome");

  // Handle input changes for dynamic settings
  const handleDynamicInputChange = (e) => {
    const { name, value } = e.target;
    if (activeForm === "welcome") {
      setFormData({ ...formData, [name]: value });
    } else if (activeForm === "email") {
      setEmailForm({ ...emailForm, [name]: value });
    } else if (activeForm === "name") {
      setNameForm({ ...nameForm, [name]: value });
    }
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  // Function to remove the uploaded image
  const handleRemoveImage = () => {
    setImage(null); // Clear the image state
  };

  // Function to save settings
  const handleSaveSettings = () => {
    console.log("Settings saved");
    setSettingsVisible(false); // Hide the settings after saving
  };

  // Shared settings form for Welcome, Email, and Name
  const renderSettingsForm = () => (
    <div className="w-1/4 p-6 bg-white shadow-lg flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Settings</h2>
      <label className="text-sm mb-2">Title</label>
      <input
        type="text"
        name="title"
        value={(activeForm === "welcome" ? formData.title : activeForm === "email" ? emailForm.title : nameForm.title)}
        onChange={handleDynamicInputChange}
        placeholder="Enter the title"
        className="border border-gray-300 p-2 mb-4 rounded-lg"
      />

      <label className="text-sm mb-2">Description</label>
      <input
        type="text"
        name="description"
        value={(activeForm === "welcome" ? formData.description : activeForm === "email" ? emailForm.description : nameForm.description)}
        onChange={handleDynamicInputChange}
        placeholder="Enter the description"
        className="border border-gray-300 p-2 mb-4 rounded-lg"
      />

      <label className="text-sm mb-2">Button Text</label>
      <input
        type="text"
        name="buttonText"
        value={(activeForm === "welcome" ? formData.buttonText : activeForm === "email" ? emailForm.buttonText : nameForm.buttonText)}
        onChange={handleDynamicInputChange}
        placeholder="Enter button text"
        className="border border-gray-300 p-2 mb-4 rounded-lg"
      />

           {/* Image upload */}
           {activeForm === "welcome" && (
        <div className="mt-4">
          <InputFileUpload onChange={handleImageUpload} />
        </div>
      )}

      {/* Image removal */}
      {activeForm === "welcome" && image && (
        <button
          onClick={handleRemoveImage}
          className="bg-gray-400 text-white py-2 px-4 mt-4 rounded-lg w-36 h-12"
        >
          Remove Image
        </button>
      )}{/* Save button */}
      <button
        onClick={handleSaveSettings}
        className="bg-sky-600 text-white py-2 px-4 mt-4 rounded-lg w-36 h-12"
      >
        Save
      </button>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {settingsVisible && renderSettingsForm()}
      <div className={`w-${settingsVisible ? "3/4" : "full"} flex flex-col justify-center items-center bg-gray-50`}>
        {activeField === "welcome" && (
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4 pt-12">
              {formData.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{formData.description}</p>
            <button className="bg-black text-white py-3 px-8 rounded-lg text-lg">
              {formData.buttonText}
            </button>
            {image && (
              <img
                src={image}
                alt="Uploaded Preview"
                className="w-48 h-48 object-cover rounded-lg"
              />
            )}
          </div>
        )}

        {activeField === "email" && (
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              {emailForm.title}
            </h2>
            <p className="text-lg text-gray-600 mb-4">{emailForm.description}</p>
            <input
              type="email"
              name="email"
              value={emailForm.email}
              onChange={handleDynamicInputChange}
              placeholder="Type here..."
              className="border-2 border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:border-blue-500 mb-4"
            />
            {!/\S+@\S+\.\S+/.test(emailForm.email) && emailForm.email && (
              <p className="text-red-500">Please enter a valid email address.</p>
            )}
            <button className="bg-black text-white py-3 px-8 rounded-lg text-lg">
              {emailForm.buttonText}
            </button>
          </div>
        )}

        {activeField === "name" && (
          <div className="w-1/2">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              {nameForm.title}
            </h2>
            <p className="text-lg text-gray-600 mb-4">{nameForm.description}</p>
            <input
              type="text"
              name="name"
              value={nameForm.name}
              onChange={handleDynamicInputChange}
              placeholder="Enter your name"
              className="border-2 border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:border-blue-500 mb-4"
            />
            <button className="bg-black text-white py-3 px-8 rounded-lg text-lg">
              {nameForm.buttonText}
            </button>
          </div>
        )}
      </div>
      
      <div className="absolute right-12 top-12 flex flex-col space-y-4 px-0">
        <button
          className={`w-60 py-3 text-xl font-medium text-white rounded-full transition-all duration-300 ${
            activeField === "welcome"
              ? "bg-slate-500 text-blue-700 border-2 "
              : "bg-blue-600 hover:bg-blue-800"
          }`}
          onClick={() => {
            setActiveField("welcome");
            setActiveForm("welcome");
            setSettingsVisible(true);
          }}
        >
          Welcome Screen
        </button>
        <button
          className={`w-50 py-3 text-xl font-medium text-white rounded-full transition-all duration-300 ${
            activeField === "name"
              ? "bg-slate-500 text-blue-700 border-2 "
              : "bg-blue-600 hover:bg-blue-800"
          }`}
          onClick={() => {
            setActiveField("name");
            setActiveForm("name");
            setSettingsVisible(true);
          }}
        >
          Enter Name
        </button>
        <button
          className={`w-50 py-3 text-xl font-medium text-white rounded-full transition-all duration-300 ${
            activeField === "email"
              ? "bg-slate-500 text-blue-700 border-2 "
              : "bg-blue-600 hover:bg-blue-800"
          }`}
          onClick={() => {
            setActiveField("email");
            setActiveForm("email");
            setSettingsVisible(true);
          }}
        >
          Enter Email
        </button>
        
      </div>
    </div>
  );
};

export default WelcomePage;