import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CustomGrid as Grid } from '../components/common/CustomGrid';

const NearbyStopsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t('navigation.nearbyStops', '')}
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">Coming soon: Interactive map with nearby stops</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              This page will show:
            </Typography>
            <ul>
              <li>Map of nearby transit stops</li>
              <li>Real-time arrival information</li>
              <li>Walking directions to stops</li>
              <li>Service alerts and updates</li>
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default NearbyStopsPage;
