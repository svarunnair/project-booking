import { Routes, Route } from "react-router-dom";
import SignUpContainer from "./Container/SignUpContainer";
import SignInContainer from "./Container/SignInContainer";
import HomeContainer from "./Container/HomeContainer";
import ProtectedRoute from "./router/ProtectedRoute";
import SeatBookingContainer from "./Container/SeatBookingContainer";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<SeatBookingContainer />} />
      <Route path="/signin" element={<SignInContainer />} />

      {/* Private Route */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomeContainer />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
