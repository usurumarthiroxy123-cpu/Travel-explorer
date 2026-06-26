import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import AddDestination from "../pages/AddDestination";
import EditDestination from "../pages/EditDestination";
import Register from "../pages/Register";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Favorites from "../Pages/Favorites";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/destinations" element={<Destinations />} />

      {/* ✅ IMPORTANT ROUTE (DETAIL PAGE) */}
      <Route
        path="/destinations/:id"
        element={
          <ProtectedRoute>
            <DestinationDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-destination"
        element={<ProtectedRoute><AddDestination /></ProtectedRoute>}
      />

      <Route
        path="/edit-destination/:id"
        element={<ProtectedRoute><EditDestination /></ProtectedRoute>}
      />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />

      <Route
        path="/favorites"
        element={<ProtectedRoute><Favorites /></ProtectedRoute>}
      />
    </Routes>
  );
}

export default AppRoutes;