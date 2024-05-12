import { FlightData } from "@/types/flight";
import React, { Fragment, useEffect, useState } from "react";
import SearchForm from "../searchForm";
import { TableCell } from "../tableCell";

const FlightDetails: React.FC = () => {
  const [flightData, setFlightData] = useState<FlightData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const tableHeaders = [
    "Flight",
    "Aircraft",
    "Class",
    "Fare",
    "Route",
    "Departure",
    "Arrival",
    "Duration",
    "Price",
  ];

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/flightData");
      const data: FlightData = await response.json();
      setFlightData(data);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-8 xl:px-16">
      <SearchForm />
      {isLoading ? (
        <div className="text-center mt-4">Loading...</div>
      ) : flightData && flightData.flightOffer.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-[#e5e7eb]">
              <tr>
                {tableHeaders.map((header, index) => (
                  <th className="py-5 font-medium uppercase" key={index}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {flightData.flightOffer.map((offer, offerIndex) => (
                <tr
                  key={offerIndex}
                  className={`text-center ${
                    offerIndex % 2 === 1
                      ? "bg-[#e5e7eb] border-t-10 border-b-2 border-red-500"
                      : "bg-[#f3f4f6]"
                  }`}
                   style={{
                    textAlign: "center",
                    background: offerIndex % 2 === 1 ? "#e5e7eb" : "#f3f4f6",
                    borderTop:
                      offerIndex % 2 === 1 ? "1px solid #ff0000" : "none",
                    borderBottom:
                      offerIndex % 2 === 1 ? "1px solid #ff0000" : "none",
                  }}
                >
                  {offer.itineraries.map((itinerary, itineraryIndex) => (
                    <Fragment key={itineraryIndex}>
                      <TableCell>
                        {itinerary.segments.map((segment, segmentIndex) => (
                          <div key={segmentIndex}>
                            {`${segment.marketingCarrier} ${segment.flightNumber}`}
                          </div>
                        ))}
                      </TableCell>
                      <TableCell>
                        {itinerary.segments.map((segment, segmentIndex) => (
                          <div key={segmentIndex}>{segment.aircraft}</div>
                        ))}
                      </TableCell>
                      <TableCell>
                        {offer.class.map((row, rowIndex) => (
                          <div key={rowIndex}>
                            {row.map((item, itemIndex) => (
                              <div key={itemIndex}>{item}</div>
                            ))}
                          </div>
                        ))}
                      </TableCell>
                      <TableCell>
                        {offer.fareBasis.map((row, rowIndex) => (
                          <div key={rowIndex}>
                            {row.map((item, itemIndex) => (
                              <div key={itemIndex}>{item}</div>
                            ))}
                          </div>
                        ))}
                      </TableCell>
                      <TableCell>
                        {itinerary.segments.map((segment, segmentIndex) => (
                          <div key={segmentIndex}>
                            {`${segment.departure.iataCode}-${segment.arrival.iataCode}`}
                          </div>
                        ))}
                      </TableCell>
                      <TableCell>
                        {itinerary.segments.map((segment, segmentIndex) => (
                          <div key={segmentIndex}>{segment.departure.at}</div>
                        ))}
                      </TableCell>
                      <TableCell>
                        {itinerary.segments.map((segment, segmentIndex) => (
                          <div key={segmentIndex}>
                            {`${segment.arrival.iataCode} at ${segment.arrival.at}`}
                          </div>
                        ))}
                      </TableCell>
                      <TableCell>{itinerary.duration}</TableCell>
                      <TableCell>
                        {offer.price}
                        <br />
                        <button className="px-6 py-1 border rounded-md bg-primary text-white">
                          Select
                        </button>
                      </TableCell>
                    </Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No flight data available.</div>
      )}
    </div>
  );
};

export default FlightDetails;
