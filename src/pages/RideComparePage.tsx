import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
// Example ride options (NO Express Bus present)
const rideOptions = [
{
id: 1,
name: 'Route 115',
description: 'Standard bus service'
},
{
id: 2,
name: 'Route 815',
description: 'Standard bus service'
}
];
const RideComparePage: React.FC = () => {
const { t } = useTranslation();
return (
<Box sx={{ p: 3 }}>
<Typography variant="h4" gutterBottom>
{t('pages.compareRides.title')}
</Typography>
<Typography variant="subtitle1" gutterBottom>
{t('pages.compareRides.description')}
</Typography>
<Paper sx={{ p: 2, mt: 2 }}>
<List></List>{rideOptions.map((option) => (
<ListItem key={option.id}>
<ListItemText
primary={t(option.name)}
secondary={t(option.description)}
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
{t('offlineAccess')}
</Button>
</Box>
);
};
export default RideComparePage;
