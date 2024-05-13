export interface FlightOffer {
  flightOffer: Array<{
    itineraries: Array<{
      segments: Array<{
        departure: { iataCode: string; at: string };
        arrival: { iataCode: string; at: string };
        marketingCarrier: string;
        carrierCode: string;
        flightNumber: string;
        aircraft: string;
      }>;
      duration: string;
    }>;
    price: string;
    fareBasis: string[][];
    class: string[][];
    seat: string[][];
  }>;
  message: string;
  code: string;
}

export interface FlightSegment {
  departure: {
    iataCode: string;
    at: string;
  };
  arrival: {
    iataCode: string;
    at: string;
  };
  marketingCarrier: string;
  carrierCode: string;
  flightNumber: string;
  aircraft: string;
  class: string;
}

export interface Itinerary {
  segments: FlightSegment[];
  duration: string;
}

export interface FlightOffer {
  class: string[][];
  itineraries: Itinerary[];
  price: string;
  fareBasis: string[][];
  route: string;
}

export interface FlightData {
  flightOffer: FlightOffer[];
}