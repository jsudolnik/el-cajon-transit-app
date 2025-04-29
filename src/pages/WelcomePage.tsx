import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const WelcomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {t('welcome.title')}
        </Typography>
        <Typography variant="subtitle1">
          {t('welcome.subtitle')}
        </Typography>
      </Paper>
    </Box>
  );
};

export default WelcomePage;
