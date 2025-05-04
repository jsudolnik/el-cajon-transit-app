import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
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
    description: 'Find bus and train stops near you',
    away: 'away'
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
offlineAccess: "Offline Access Mode"
}
},
ar: {
translation: {
navigation: {
nearbyStops: 'محطات قريبة',
planTrip: 'تخطيط الرحلة',
compareRides: 'مقارنة الرحلات'
},
welcome: {
title: 'دليل النقل في إل كاهون',
subtitle: 'دليلك لوسائل النقل العام في إل كاهون'
},
pages: {
  nearbyStops: {
    title: 'محطات النقل القريبة',
    description: 'ابحث عن محطات الحافلات والقطارات القريبة منك',
    away: 'بعيد'
  },
  planTrip: {
    title: 'خطط لرحلتك',
    description: 'خطط لرحلتك باستخدام وسائل النقل العام'
  },
  compareRides: {
    title: 'قارن خيارات الرحلات',
    description: 'قارن بين خيارات النقل المختلفة'
  }
},
arc: {
translation: {
navigation: {
nearbyStops: 'ܬܩܦܬܐ ܩܪܝܒܬܐ',
planTrip: 'ܬܚܫܒܬܐ ܕܐܘܪܚܐ',
compareRides: 'ܫܘܝܢܐ ܕܪܟܒܬܐ'
},
welcome: {
title: 'ܡܕܪܟܐ ܕܬܚܒܘܬܐ ܕܐܠ ܟܗܘܢ',
subtitle: 'ܡܕܪܟܟ ܠܬܚܒܘܬܐ ܕܟܠܗ ܥܡܐ ܒܐܠ ܟܗܘܢ'
},
pages: {
  nearbyStops: {
    title: 'ܬܩܦܬܐ ܩܪܝܒܬܐ ܕܬܚܒܘܬܐ',
    description: 'ܦܠܝ ܬܩܦܬܐ ܕܒܐܣܬܐ ܘܩܛܪܐ ܩܪܝܒܬܐ ܠܟ',
    away: 'ܒܪܝܟ'
  },
  planTrip: {
    title: 'ܬܚܫܒܬܐ ܕܐܘܪܚܐ',
    description: 'ܬܚܫܒ ܐܘܪܚܟ ܒܬܚܒܘܬܐ ܕܟܠܗ ܥܡܐ'
  },
  compareRides: {
    title: 'ܫܘܝܢܐ ܕܓܒܝܬܐ',
    description: 'ܫܘܝܢܐ ܒܝܢ ܓܒܝܬܐ ܕܬܚܒܘܬܐ ܕܐܢܫܐ'
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
    description: 'Encuentra paradas de autobús y tren cerca de ti',
    away: 'lejos'
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
    description: 'Tìm điểm dừng xe buýt và tàu gần bạn',
    away: 'cách'
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
    description: 'Maghanap ng mga hintuan ng bus at tren malapit sa iyo',
    away: 'malapit'
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
    description: '查找附近的公交车和火车站',
    away: '距离'
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
}
}, 
lng: 'en',
fallbackLng: 'en',
interpolation: {
  escapeValue: false
}
});
export default i18n;