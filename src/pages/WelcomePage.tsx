import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to San Diego Transit
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
        Your guide to public transportation in San Diego
      </Typography>
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => navigate('/nearby')}
        size="large"
      >
        Find Nearby Stops
      </Button>
    </Box>
  );
};

export default WelcomePage;