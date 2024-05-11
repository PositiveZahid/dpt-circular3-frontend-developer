import CityInputField from "../share/CityInputField/CityInputField";
import CommonInputField from "../share/CommonInputField/CommonInputField";

import "./tripfilter.css";

const TripFilter = () => {
  const number = ["1", "2", "3", "4", "5", "6", "7"];
  const gender = ["adult", "children", "infant"];

  return (
    <div className="py-3 border-b border-primaryColor flex xl:justify-between flex-wrap gap-2">
      <CityInputField />
      <CityInputField />
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
  );
};

export default TripFilter;
