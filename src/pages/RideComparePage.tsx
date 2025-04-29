import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const RideComparePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t('navigation.compareRides') as string}
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>Coming soon...</Typography>
      </Paper>
    </Box>
  );
};

export default RideComparePage;
