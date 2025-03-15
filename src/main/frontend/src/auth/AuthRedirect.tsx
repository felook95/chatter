import { Box } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../core/Home';
import { useAuth } from 'react-oidc-context';

const AuthRedirect = () => {
  const auth = useAuth();
  return (
    <>
      {auth.isAuthenticated ? (
        <Navigate to="/"></Navigate>
      ) : (
        <Box>Logging in</Box>
      )}
    </>
  );
};

export default AuthRedirect;
