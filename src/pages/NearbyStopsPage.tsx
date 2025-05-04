import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Example simulated data for nearby stops
const nearbyStops = [
  { id: 1, name: 'El Cajon Transit Center', distance: '0.2 mi' },
  { id: 2, name: 'Parkway Plaza Transit Station', distance: '0.5 mi' },
  { id: 3, name: 'Fletcher Parkway & Johnson Avenue', distance: '0.7 mi' },
];

const NearbyStopsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t('pages.nearbyStops.title', { defaultValue: 'Nearby Transit Stops' })}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {t('pages.nearbyStops.description', { defaultValue: 'Find bus and train stops near you' })}
      </Typography>

      <Paper sx={{ p: 2, mt: 2 }}>
        <List>
          {nearbyStops.map((stop) => (
            <ListItem key={stop.id}>
              <ListItemText
                primary={t(stop.name, { defaultValue: stop.name })}
                secondary={`${stop.distance} ${t('pages.nearbyStops.away', { defaultValue: 'away' })}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 3 }}
      >
        {t('offlineAccess', { defaultValue: 'Offline Access Mode' })}
      </Button>
    </Box>
  );
};

export default NearbyStopsPage;