import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useAuth } from 'react-oidc-context';
import { Link } from 'react-router-dom';

const Menu = () => {
  const auth = useAuth();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link to="/">
          <IconButton>
            <Home />
          </IconButton>
        </Link>
        <Box>
          {!auth.isAuthenticated ? (
            <Button
              onClick={() => void auth.signinRedirect()}
              color="secondary"
            >
              Log In
            </Button>
          ) : (
            <Button
              onClick={() => void auth.signoutRedirect()}
              color="secondary"
            >
              Log Out
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
