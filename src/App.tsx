import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import Layout from './components/Layout/Layout';
import WelcomePage from './pages/WelcomePage';
import NearbyStopsPage from './pages/NearbyStopsPage';
import TripPlannerPage from './pages/TripPlannerPage';
import RideComparePage from './pages/RideComparePage';
import './i18n/config';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/nearby-stops" element={<NearbyStopsPage />} />
            <Route path="/plan-trip" element={<TripPlannerPage />} />
            <Route path="/compare-rides" element={<RideComparePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
