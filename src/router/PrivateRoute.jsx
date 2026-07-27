import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpContainer from '../Container/SignUpContainer'
import SignInContainer from '../Container/SignInContainer';

function PrivateRoute() {
  return (
    <Routes>
      <Route path="/home" element={<HomeContainer />} />
    </Routes>
  );
}

export default PrivateRoute