import React from 'react';
import { Typography, Box, Paper, List, ListItem, ListItemText, Grid, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NearbyStopsPage: React.FC = () => {
  const { t } = useTranslation();

  // Simulated nearby stops data
  const nearbyStops = [
    { id: 1, name: 'Downtown Transit Center', distance: '0.2 miles', nextBus: '5 min' },
    { id: 2, name: 'Broadway & 5th Ave', distance: '0.4 miles', nextBus: '8 min' },
    { id: 3, name: 'Market Street Station', distance: '0.6 miles', nextBus: '12 min' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t('navigation.nearbyStops')}
      </Typography>
      
      <Grid container spacing={3}>
        {/* Map Placeholder */}
        <Grid item xs={12} md={8}>
          <Paper 
            sx={{ 
              height: 400, 
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography variant="h6" color="textSecondary">
              Map View Coming Soon
            </Typography>
          </Paper>
        </Grid>

        {/* Nearby Stops List */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Nearby Stops
              </Typography>
              <List>
                {nearbyStops.map((stop) => (
                  <ListItem key={stop.id} divider>
                    <ListItemText
                      primary={stop.name}
                      secondary={`${stop.distance} • Next bus: ${stop.nextBus}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NearbyStopsPage;