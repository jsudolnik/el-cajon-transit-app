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
          },
          pages: {
            nearbyStops: {
              title: 'Nearby Transit Stops',
              description: 'Find bus and train stops near you'
            },
            planTrip: {
              title: 'Plan Your Trip',
              description: 'Plan your journey using public transit'
            },
            compareRides: {
              title: 'Compare Ride Options',
              description: 'Compare different transportation options'
            }
          }
        }
      },
      es: {
        translation: {
          navigation: {
            nearbyStops: 'Paradas Cercanas',
            planTrip: 'Planear Viaje',
            compareRides: 'Comparar Viajes'
          },
          welcome: {
            title: 'Bienvenido a San Diego Transit',
            subtitle: 'Su guía de transporte público en San Diego'
          },
          pages: {
            nearbyStops: {
              title: 'Paradas de Tránsito Cercanas',
              description: 'Encuentra paradas de autobús y tren cerca de ti'
            },
            planTrip: {
              title: 'Planifica tu Viaje',
              description: 'Planifica tu viaje usando transporte público'
            },
            compareRides: {
              title: 'Compara Opciones de Viaje',
              description: 'Compara diferentes opciones de transporte'
            }
          }
        }
      },
      vi: {
        translation: {
          navigation: {
            nearbyStops: 'Điểm Dừng Gần Đây',
            planTrip: 'Lập Kế Hoạch Chuyến Đi',
            compareRides: 'So Sánh Chuyến Đi'
          },
          welcome: {
            title: 'Chào Mừng Đến Với San Diego Transit',
            subtitle: 'Hướng dẫn về giao thông công cộng tại San Diego'
          },
          pages: {
            nearbyStops: {
              title: 'Các Điểm Dừng Gần Đây',
              description: 'Tìm điểm dừng xe buýt và tàu gần bạn'
            },
            planTrip: {
              title: 'Lập Kế Hoạch Chuyến Đi',
              description: 'Lên kế hoạch hành trình bằng phương tiện công cộng'
            },
            compareRides: {
              title: 'So Sánh Các Lựa Chọn',
              description: 'So sánh các phương tiện di chuyển khác nhau'
            }
          }
        }
      },
      tl: {
        translation: {
          navigation: {
            nearbyStops: 'Mga Kalapit na Hintuan',
            planTrip: 'Planuhin ang Biyahe',
            compareRides: 'Ihambing ang mga Sakay'
          },
          welcome: {
            title: 'Maligayang Pagdating sa San Diego Transit',
            subtitle: 'Ang iyong gabay sa pampublikong transportasyon sa San Diego'
          },
          pages: {
            nearbyStops: {
              title: 'Mga Kalapit na Hintuan ng Transit',
              description: 'Maghanap ng mga hintuan ng bus at tren malapit sa iyo'
            },
            planTrip: {
              title: 'Planuhin ang Iyong Biyahe',
              description: 'Planuhin ang iyong paglalakbay gamit ang pampublikong transportasyon'
            },
            compareRides: {
              title: 'Ihambing ang mga Opsyon sa Pagsakay',
              description: 'Ihambing ang iba\'t ibang opsyon sa transportasyon'
            }
          }
        }
      },
      zh: {
        translation: {
          navigation: {
            nearbyStops: '附近站点',
            planTrip: '规划行程',
            compareRides: '比较路线'
          },
          welcome: {
            title: '欢迎使用圣地亚哥交通',
            subtitle: '您的圣地亚哥公共交通指南'
          },
          pages: {
            nearbyStops: {
              title: '附近交通站点',
              description: '查找附近的公交车和火车站'
            },
            planTrip: {
              title: '规划行程',
              description: '使用公共交通规划您的行程'
            },
            compareRides: {
              title: '比较乘车选项',
              description: '比较不同的交通选项'
            }
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