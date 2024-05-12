import { useContext, useRef } from "react";
import CityInputField from "../share/CityInputField/CityInputField";
import CommonInputField from "../share/CommonInputField/CommonInputField";
import "./tripfilter.css";
import { DataContext } from "../../hooks/ContextProvider/ContextProvider";
import SearchSection from "../SearchSection/SearchSection";

const TripFilter = ({ setFilterData }) => {
  const { data: flightDatas, loading } = useContext(DataContext);
  const number = ["1", "2", "3", "4", "5", "6", "7"];
  const gender = ["adult", "children", "infant"];
  const departureInput = useRef();
  const arrivalInput = useRef();

  const countryFind = () => {
    const departureName = [];
    const arrivalName = [];

    // Check if flightDatas and flightOffer exist
    if (flightDatas && flightDatas.flightOffer) {
      flightDatas.flightOffer.forEach((data) => {
        data?.itineraries[0]?.segments.forEach((segment) => {
          const departure = segment.departure?.iataCode;
          const arrival = segment.arrival?.iataCode;
          // Check if arrival and departure are not already in countryName
          if (!departureName.includes(departure) && departure) {
            departureName.push(departure);
          }
          if (!arrivalName.includes(arrival) && arrival) {
            arrivalName.push(arrival);
          }
        });
      });
    }
    return { departureName, arrivalName };
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilterData(flightDatas);

    const departureValue = departureInput.current.value;
    const arrivalValue = arrivalInput.current.value;

    console.log({ departureValue, arrivalValue });
  };

  return (
    <section>
      <form onSubmit={handleSearch}>
        <div className="py-3 border-b border-primaryColor flex xl:justify-between flex-wrap gap-2">
          <CityInputField
            inputData={departureInput}
            dropdownContent={countryFind().departureName}
          />
          <CityInputField
            inputData={arrivalInput}
            dropdownContent={countryFind().arrivalName}
          />
          <div className="border border-textColor px-3 ">
            <input
              value="2022-02-20"
              id="date"
              type="date"
              min="01-01-2000"
              max="01-01-2120"
              step="2"
              className="focus:outline-none pt-1 text-textColor"
            />
          </div>
          <CommonInputField day="Day-" data={number} />
          <CommonInputField day="Day+" data={number} />
          <CommonInputField day="Any time" width="w-[200px]" data={number} />
          <strong className="text-xl">+</strong>
          <CommonInputField day="ADT" width="w-[120px]" data={gender} />
          <CommonInputField day="1" width="w-[120px]" data={number} />
          <strong className="text-xl">+</strong>
        </div>
        <SearchSection />
      </form>
    </section>
  );
};

export default TripFilter;
