import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/favoriteSlice";

function Favorites() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.favorites);

  return (
    <div className="favorites-container">
      <h2>Favorites</h2>

      {data.length === 0 ? (
        <p>No favorite destinations.</p>
      ) : (
        <ul className="favorite-list">
          {data.map((val) => (
            <li className="favorite-item" key={val.id}>
              <span>{val.name}</span>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFavorite(val.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;