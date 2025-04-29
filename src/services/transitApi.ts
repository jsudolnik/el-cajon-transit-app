export interface Stop {
  id: string;
  name: string;
  lat: number;
  lon: number;
}

export interface Route {
  id: string;
  name: string;
  type: 'BUS' | 'TROLLEY';
  fareClass: string;
}

export interface TripPlan {
  duration: number;
  fare: number;
  segments: Array<{
    type: string;
    route: Route;
    from: Stop;
    to: Stop;
    departureTime: string;
    arrivalTime: string;
  }>;
}export const transitApi = {
  async searchStops(query: string): Promise<Stop[]> {
    // Mock implementation
    return [
      { id: '1', name: 'El Cajon Transit Center', lat: 32.7947, lon: -116.9625 },
      { id: '2', name: 'Parkway Plaza Transit Station', lat: 32.8053, lon: -116.9622 },
    ];
  },

  async planTrip(from: Stop, to: Stop, time: Date): Promise<TripPlan[]> {
    // Mock implementation
    return [
      {
        duration: 25,
        fare: 2.50,
        segments: [{
          type: 'BUS',
          route: {
            id: '115',
            name: 'Route 115',
            type: 'BUS',
            fareClass: 'regular'
          },
          from: from,
          to: to,
          departureTime: new Date(time.getTime() + 5 * 60000).toISOString(),
          arrivalTime: new Date(time.getTime() + 30 * 60000).toISOString()
        }]}
    ];
  }
};

