import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

declare module 'i18next' {
  interface TFunction {
    (key: string): string;
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          navigation: {
            nearbyStops: 'Nearby Stops',
            planTrip: 'Plan Trip',
            compareRides: 'Compare Rides'
          },
          welcome: {
            title: 'El Cajon Transit Guide',
            subtitle: 'Your guide to public transportation in El Cajon'
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
