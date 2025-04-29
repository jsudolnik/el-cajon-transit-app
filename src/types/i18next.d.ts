import { Resource } from 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: {
        navigation: {
          nearbyStops: string;
          planTrip: string;
          compareRides: string;
        };
        welcome: {
          title: string;
          subtitle: string;
        };
      };
    };
  }
}
