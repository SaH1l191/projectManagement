import React, { useState } from "react";
import axios from "axios";
import "./UploadFile.css";

const UploadFile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Store the file object
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(response.data.message);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed!");
    }
  };

  return (
    <div className="file-upload">
      {/* Hidden File Input */}
      <input
        className="hidden-input"
        type="file"
        onChange={handleFileChange}
        id="fileInput"
      />

      {/* Custom Styled Label */}
      <label htmlFor="fileInput" className="custom-file-label">
        Choose File
      </label>

      {/* Display File Name */}
      <span className="file-name">{file ? file.name : "No file chosen"}</span>

      {/* Upload Button */}
      <button className="upload-button" onClick={handleUpload}>
        Upload File
      </button>
    </div>
  );
};

export default UploadFile;
