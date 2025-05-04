import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, useNavigate, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { useTranslation } from 'react-i18next';
import './i18n/config';
import {
  Box,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import MapIcon from '@mui/icons-material/Map';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LanguageIcon from '@mui/icons-material/Language';

// Import pages
import NearbyStopsPage from './pages/NearbyStopsPage';
import TripPlannerPage from './pages/TripPlannerPage';
import RideComparePage from './pages/RideComparePage';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#121212'
    },
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#2196f3'
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc'
    }
  }
});

const drawerWidth = 240;

interface NavigationMenuItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

interface NavigationDrawerProps {
  menuItems: NavigationMenuItem[];
  onClose: () => void;
  isMobile: boolean;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ menuItems, onClose, isMobile }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      <Toolbar />
      <List>
        {menuItems.map((item: NavigationMenuItem) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                if (isMobile) onClose();
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={t(item.text as any)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState<string>('en');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t, i18n } = useTranslation();

  const menuItems: NavigationMenuItem[] = [
    { text: 'navigation.nearbyStops', icon: <DirectionsBusIcon />, path: '/nearby' },
    { text: 'navigation.planTrip', icon: <MapIcon />, path: '/plan' },
    { text: 'navigation.compareRides', icon: <CompareArrowsIcon />, path: '/rides' },
  ];

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const newLang = event.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#000' }}>
            <Toolbar>
              <IconButton
                color="inherit"
                edge="start"
                onClick={() => setMobileOpen(!mobileOpen)}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <img
                  src="/ride-ready-logo.png"
                  alt="Ride Ready"
                  style={{ height: 48, objectFit: 'contain' }}
                />
              </Box>
              <FormControl size="small" sx={{ minWidth: 120, mr: 2 }}>
                <Select
                  value={language}
                  onChange={handleLanguageChange}
                  sx={{
                    color: 'white',
                    '& .MuiSelect-icon': { color: 'white' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                  }}
                  IconComponent={LanguageIcon}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Español</MenuItem>
                  <MenuItem value="vi">Tiếng Việt</MenuItem>
                  <MenuItem value="tl">Tagalog</MenuItem>
                  <MenuItem value="zh">中文</MenuItem>
                </Select>
              </FormControl>
            </Toolbar>
          </AppBar>

          <Drawer
            variant={isMobile ? 'temporary' : 'permanent'}
            open={isMobile ? mobileOpen : true}
            onClose={() => setMobileOpen(false)}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                bgcolor: '#121212',
                color: '#fff'
              },
            }}
          >
            <NavigationDrawer
              menuItems={menuItems}
              onClose={() => setMobileOpen(false)}
              isMobile={isMobile}
            />
          </Drawer>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              mt: 8,
              bgcolor: '#000',
              minHeight: '100vh'
            }}
          >
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/nearby" element={<NearbyStopsPage />} />
              <Route path="/plan" element={<TripPlannerPage />} />
              <Route path="/rides" element={<RideComparePage />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;