import React from 'react';
import { 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const RideComparePage: React.FC = () => {
  const { t } = useTranslation();

  const rideOptions = [
    {
      type: 'Bus',
      duration: '45 min',
      cost: '$2.50',
      nextDeparture: '5 min',
      features: ['Air conditioned', 'Wheelchair accessible', 'Bike rack']
    },
    {
      type: 'Trolley',
      duration: '30 min',
      cost: '$2.50',
      nextDeparture: '8 min',
      features: ['Fast service', 'Wheelchair accessible', 'Frequent departures']
    },
    {
      type: 'Express Bus',
      duration: '35 min',
      cost: '$3.50',
      nextDeparture: '15 min',
      features: ['Limited stops', 'WiFi onboard', 'Premium service']
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t('navigation.compareRides')}
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {rideOptions.map((option, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardHeader
                title={option.type}
                subheader={`Next departure: ${option.nextDeparture}`}
              />
              <Divider />
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Duration" 
                      secondary={option.duration}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Cost" 
                      secondary={option.cost}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Features" 
                      secondary={option.features.join(', ')}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RideComparePage;