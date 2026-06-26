import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddDestination() {

 const navigate = useNavigate();

 const [formData, setFormData] = useState({
   name: "",
   country: "",
   image: "",
   description: ""
 });

 function handleChange(e) {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value
   });
 }

 async function handleSubmit(e) {
   e.preventDefault();

   await api.post(
     "/destinations",
     formData
   );

   navigate("/destinations");
 }

 return (
  <div className="auth-container">
    <div className="auth-card">
      <h2>Add Destination</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Destination Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <button className="auth-btn">
          Add Destination
        </button>
      </form>
    </div>
  </div>
);
}

export default AddDestination;
