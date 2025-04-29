import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  TextField, 
  Button, 
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const TripPlannerPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t('navigation.planTrip')}
      </Typography>

      <Paper sx={{ p: 3, mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Starting Location"
              variant="outlined"
              placeholder="Enter your starting point"
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Destination"
              variant="outlined"
              placeholder="Enter your destination"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Departure Time</InputLabel>
              <Select
                label="Departure Time"
                defaultValue="now"
              >
                <MenuItem value="now">Leave Now</MenuItem>
                <MenuItem value="later">Leave Later</MenuItem>
                <MenuItem value="arrive">Arrive By</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="datetime-local"
              defaultValue={new Date().toISOString().slice(0, 16)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              fullWidth
            >
              Plan My Trip
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default TripPlannerPage;

