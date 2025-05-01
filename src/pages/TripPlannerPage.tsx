import React, { useState } from 'react';
import {
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Autocomplete,
  Grid
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import SchoolIcon from '@mui/icons-material/School';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const popularLocations = {
  transitCenters: [
    { id: 'etc', name: 'El Cajon Transit Center', category: 'transit', icon: DirectionsBusIcon },
    { id: 'ppts', name: 'Parkway Plaza Transit Station', category: 'transit', icon: DirectionsBusIcon },
    { id: 'gtc', name: 'Grossmont Transit Center', category: 'transit', icon: DirectionsBusIcon },
  ],
  education: [
    { id: 'gc', name: 'Grossmont College', category: 'education', icon: SchoolIcon },
    { id: 'ecvhs', name: 'El Cajon Valley High School', category: 'education', icon: SchoolIcon },
  ],
  shopping: [
    { id: 'pp', name: 'Parkway Plaza Mall', category: 'shopping', icon: ShoppingBagIcon },
  ],
  government: [
    { id: 'ecc', name: 'El Cajon Courthouse', category: 'government', icon: AccountBalanceIcon },
    { id: 'ecrc', name: 'East County Regional Center', category: 'government', icon: AccountBalanceIcon },
  ],
  intersections: [
    { id: 'aam', name: 'Arnele Avenue & Marshall Avenue', category: 'intersection', icon: LocationOnIcon },
    { id: 'fpj', name: 'Fletcher Parkway & Johnson Avenue', category: 'intersection', icon: LocationOnIcon },
  ],
};

const commonTrips = [
  {
    from: 'El Cajon Transit Center',
    to: 'Grossmont College',
    route: 'Routes 115 or 88'
  },
  {
    from: 'Parkway Plaza Transit Station',
    to: 'El Cajon Courthouse',
    route: 'Route 815'
  },
  {
    from: 'Fletcher Parkway & Johnson Avenue',
    to: 'Grossmont Transit Center',
    route: 'Route 115'
  },
];

const TripPlannerPage: React.FC = () => {
  const { t } = useTranslation();
  const [fromStop, setFromStop] = useState<string>('');
  const [toStop, setToStop] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleLocationSelect = (type: 'from' | 'to', location: string) => {
    if (type === 'from') {
      setFromStop(location);
    } else {
      setToStop(location);
    }
  };

  const handleCommonTripSelect = (trip: typeof commonTrips[0]) => {
    setFromStop(trip.from);
    setToStop(trip.to);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t('navigation.planTrip')}
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          {t('tripPlanner.popularRoutes.title')}
        </Typography>
        <Grid container spacing={2}>
          {commonTrips.map((trip, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  cursor: 'pointer',
                  '&:hover': { bgcolor: 'action.hover' }
                }}
                onClick={() => handleCommonTripSelect(trip)}
              >
                <CardContent>
                  <Typography variant="subtitle1" color="primary">
                    {trip.route}
                  </Typography>
                  <Typography variant="body2">
                    {t('tripPlanner.popularRoutes.from')}: {trip.from}
                  </Typography>
                  <Typography variant="body2">
                    {t('tripPlanner.popularRoutes.to')}: {trip.to}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              {t('tripPlanner.locations.startingPoint')}
            </Typography>
            <Autocomplete
              value={fromStop}
              onChange={(_, newValue) => setFromStop(newValue || '')}
              options={Object.values(popularLocations).flat().map(loc => loc.name)}
              renderInput={(params) => (
                <TextField {...params} placeholder={t('tripPlanner.locations.selectLocation')} fullWidth />
              )}
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                {t('tripPlanner.locations.popularStartingPoints')}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {popularLocations.transitCenters.map((location) => (
                  <Chip
                    key={location.id}
                    icon={<location.icon />}
                    label={location.name}
                    onClick={() => handleLocationSelect('from', location.name)}
                    clickable
                  />
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              {t('tripPlanner.locations.destination')}
            </Typography>
            <Autocomplete
              value={toStop}
              onChange={(_, newValue) => setToStop(newValue || '')}
              options={Object.values(popularLocations).flat().map(loc => loc.name)}
              renderInput={(params) => (
                <TextField {...params} placeholder={t('tripPlanner.locations.selectLocation')} fullWidth />
              )}
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                {t('tripPlanner.locations.popularDestinations')}
              </Typography>
              <Stack spacing={2}>
                {Object.entries(popularLocations).map(([category, locations]) => (
                  category !== 'transitCenters' && (
                    <Stack key={category} direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                      {locations.map((location) => (
                        <Chip
                          key={location.id}
                          icon={<location.icon />}
                          label={location.name}
                          onClick={() => handleLocationSelect('to', location.name)}
                          clickable
                        />
                      ))}
                    </Stack>
                  )
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={() => {
                setLoading(true);
                // Simulate trip planning
                setTimeout(() => {
                  setLoading(false);
                }, 1500);
              }}
              disabled={!fromStop || !toStop || loading}
            >
              {loading ? t('tripPlanner.buttons.planningTrip') : t('tripPlanner.buttons.planTrip')}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default TripPlannerPage;