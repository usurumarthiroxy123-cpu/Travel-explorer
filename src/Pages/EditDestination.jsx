import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditDestination() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    image: "",
    description: ""
  });

  useEffect(() => {
    getDestination();
  }, []);

  async function getDestination() {
    const response = await api.get(`/destinations/${id}`);
    setFormData(response.data);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put(`/destinations/${id}`, formData);

    alert("Destination updated successfully!");

    navigate("/destinations");
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Edit Destination</h2>

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

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />

          <button className="submit-btn">
            Update Destination
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditDestination;