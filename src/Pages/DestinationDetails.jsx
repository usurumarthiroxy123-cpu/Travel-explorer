import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function DestinationDetails() {
  const { id } = useParams();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDestination();
  }, [id]);

  async function getDestination() {
  try {
    setLoading(true);

    const response = await api.get(`/destinations/${id}`);

    console.log("API response:", response.data);

    if (response.data) {
      setDestination(response.data);
    } else {
      setDestination(null);
    }

  } catch (error) {
    console.error("API error:", error);
    setDestination(null);
  } finally {
    setLoading(false);
  }
}

  if (loading) return <p>Loading...</p>;
  if (!destination) return <p>Destination not found</p>;

  return (
    <div className="details">
      <img src={destination.image} alt={destination.name} />

      <h1>{destination.name}</h1>
      <p>{destination.description}</p>

      <h3>Country</h3>
      <p>{destination.country}</p>

      <h3>Category</h3>
      <p>{destination.category}</p>

      <h3>Best Time To Visit</h3>
      <p>{destination.bestTimeToVisit}</p>

      <h3>Duration</h3>
      <p>{destination.duration}</p>

      <h3>Weather</h3>
      <p>{destination.weather}</p>

      <h3>Language</h3>
      <p>{destination.language}</p>

      <h3>Currency</h3>
      <p>{destination.currency}</p>

      <h3>Budget</h3>
      <p>₹ {destination.price}</p>

      <h3>Rating</h3>
      <p>{destination.rating}</p>

      <h3>Famous For</h3>
      <p>{destination.famousFor}</p>

      <h3>Top Attractions</h3>

      <ul>
        {destination?.attractions?.length > 0 ? (
          destination.attractions.map((place, index) => (
            <li key={index}>{place}</li>
          ))
        ) : (
          <p>No attractions available</p>
        )}
      </ul>
    </div>
  );
}

export default DestinationDetails;