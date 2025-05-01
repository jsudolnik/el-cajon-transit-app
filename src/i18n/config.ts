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
          },
          tripPlanner: {
            popularRoutes: {
              title: 'Popular Routes',
              from: 'From',
              to: 'To'
            },
            locations: {
              startingPoint: 'Starting Point',
              destination: 'Destination',
              popularStartingPoints: 'Popular starting points:',
              popularDestinations: 'Popular destinations:',
              selectLocation: 'Select or type a location'
            },
            buttons: {
              planTrip: 'Plan Trip',
              planningTrip: 'Planning Trip...'
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
            title: 'Guía de Tránsito de El Cajon',
            subtitle: 'Su guía de transporte público en El Cajon'
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
          },
          tripPlanner: {
            popularRoutes: {
              title: 'Rutas Populares',
              from: 'Desde',
              to: 'Hasta'
            },
            locations: {
              startingPoint: 'Punto de Partida',
              destination: 'Destino',
              popularStartingPoints: 'Puntos de partida populares:',
              popularDestinations: 'Destinos populares:',
              selectLocation: 'Seleccione o escriba una ubicación'
            },
            buttons: {
              planTrip: 'Planear Viaje',
              planningTrip: 'Planeando Viaje...'
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
            title: 'Hướng Dẫn Giao Thông El Cajon',
            subtitle: 'Hướng dẫn về giao thông công cộng tại El Cajon'
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
          },
          tripPlanner: {
            popularRoutes: {
              title: 'Các Tuyến Phổ Biến',
              from: 'Từ',
              to: 'Đến'
            },
            locations: {
              startingPoint: 'Điểm Khởi Hành',
              destination: 'Điểm Đến',
              popularStartingPoints: 'Các điểm khởi hành phổ biến:',
              popularDestinations: 'Các điểm đến phổ biến:',
              selectLocation: 'Chọn hoặc nhập một địa điểm'
            },
            buttons: {
              planTrip: 'Lập Kế Hoạch',
              planningTrip: 'Đang lập kế hoạch...'
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
            title: 'Gabay sa Transit ng El Cajon',
            subtitle: 'Ang iyong gabay sa pampublikong transportasyon sa El Cajon'
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
          },
          tripPlanner: {
            popularRoutes: {
              title: 'Mga Sikat na Ruta',
              from: 'Mula',
              to: 'Papunta'
            },
            locations: {
              startingPoint: 'Pagsisimulan',
              destination: 'Destinasyon',
              popularStartingPoints: 'Mga sikat na pagsisimulan:',
              popularDestinations: 'Mga sikat na destinasyon:',
              selectLocation: 'Pumili o mag-type ng lokasyon'
            },
            buttons: {
              planTrip: 'Planuhin ang Biyahe',
              planningTrip: 'Pinaplano ang Biyahe...'
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
            title: '埃尔卡洪交通指南',
            subtitle: '您在埃尔卡洪的公共交通指南'
          },
          pages: {
            nearbyStops: {
              title: '附近交通站点',
              description: '查找附近的公交车和火车站'
            },
            planTrip: {
              title: '规划您的行程',
              description: '使用公共交通规划您的行程'
            },
            compareRides: {
              title: '比较乘车选项',
              description: '比较不同的交通选项'
            }
          },
          tripPlanner: {
            popularRoutes: {
              title: '热门路线',
              from: '从',
              to: '到'
            },
            locations: {
              startingPoint: '起点',
              destination: '目的地',
              popularStartingPoints: '热门起点：',
              popularDestinations: '热门目的地：',
              selectLocation: '选择或输入一个地点'
            },
            buttons: {
              planTrip: '规划行程',
              planningTrip: '正在规划行程...'
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