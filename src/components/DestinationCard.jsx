import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";

function DestinationCard({ destination, onDelete }) {
  const dispatch = useDispatch();

  // SAFE ID HANDLING (VERY IMPORTANT FIX)
  const destId = destination.id || destination._id;

  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} />

      <h3>{destination.name}</h3>
      <p>{destination.country}</p>
      <p>{destination.category}</p>
      <p>⭐ {destination.rating}</p>

      <div className="action-buttons">
        {/* VIEW DETAILS */}
        <Link
          to={`/destinations/${destId}`}
          className="btn view"
        >
          View
        </Link>

        {/* EDIT */}
        <Link
          to={`/edit-destination/${destId}`}
          className="btn edit"
        >
          Edit
        </Link>

        {/* DELETE */}
        <button
          className="btn delete"
          onClick={() => onDelete(destId)}
        >
          Delete
        </button>

        {/* FAVORITE */}
        <button
          className="btn favorite"
          onClick={() => dispatch(addFavorite(destination))}
        >
          addFavorite
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;