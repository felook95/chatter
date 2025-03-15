import React from 'react';
import { Box } from '@mui/material';
import { Navigate } from 'react-router-dom';
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
