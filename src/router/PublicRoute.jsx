import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpContainer from '../Container/SignUpContainer'
import SignInContainer from '../Container/SignInContainer';
import HomeContainer from '../Container/HomeContainer';

function PublicRoute() {
  return (
    <Routes>
      <Route path="/" element={<SignUpContainer />} />
      <Route path="/signin" element={<SignInContainer />} />
     
    </Routes>
  );
}

export default PublicRoute