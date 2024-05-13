import React, { ChangeEvent, FC, useState } from "react";
import { RadioButton } from "../radioButton";
import { SelectOption } from "../selectedOption";
import { TabButton } from "../tabButton";

interface Props {}

const SearchForm: FC<Props> = () => {
  const [activeTab, setActiveTab] = useState<string>("oneWay");
  const [dayMinus, setDayMinus] = useState<number>(0);
  const [dayPlus, setDayPlus] = useState<number>(0);
  const [adults, setAdults] = useState<number>(1);

  const handleTabClick = (tab: string) => setActiveTab(tab);

  const handleDayMinusChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setDayMinus(parseInt(e.target.value));

  const handleDayPlusChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setDayPlus(parseInt(e.target.value));

  const handleAdultsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setAdults(value);
  };

  return (
    <div className="flex flex-col">
      <div className="my-8 flex justify-center">
        <div className="border-2 border-gray-400 max-w-96">
          <div className="flex">
            <TabButton
              label="Rounded Trip"
              active={activeTab === "rounded"}
              onClick={() => handleTabClick("rounded")}
            />
            <TabButton
              label="One Way"
              active={activeTab === "oneWay"}
              onClick={() => handleTabClick("oneWay")}
            />
            <TabButton
              label="Multi City"
              active={activeTab === "multiCity"}
              onClick={() => handleTabClick("multiCity")}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center border-t border-b border-primary">
        {activeTab === "oneWay" && (
          <div className="py-4 w-full space-x-4">
            <input
              type="text"
              className="border-2 border-gray-400 px-4 py-2 w-44 placeholder-gray-500"
              placeholder="LHR"
            />
            <input
              type="text"
              className="border-2 border-gray-400 px-4 py-2 w-44 placeholder-gray-500"
              placeholder="CDG"
            />
            <input
              type="date"
              className="border-2 border-gray-400 px-4 py-2 w-40"
              defaultValue={new Date().toISOString().substr(0, 10)}
            />
            <SelectOption
              label="Day-"
              value={dayMinus}
              onChange={handleDayMinusChange}
            />
            <SelectOption
              label="Day+"
              value={dayPlus}
              onChange={handleDayPlusChange}
            />
            <SelectOption label="Anytime" value={0} />
            <span className="text-xl font-semibold mr-2">+</span>
            <SelectOption
              label="Adults"
              value={adults}
              onChange={handleAdultsChange}
            />
            <SelectOption
              label="Adults"
              value={1}
              onChange={handleAdultsChange}
            />
            <span className="text-xl font-semibold mr-2">+</span>
          </div>
        )}
      </div>
      <div className="flex border-b border-primary">
        <div className="py-6">
          <input
            type="checkbox"
            id="boldCheckbox"
            className="mr-2 h-4 w-4 border-gray-300 rounded text-blue-500 focus:ring-blue-500"
          />
          <label htmlFor="boldCheckbox" className="tlgbase font-medium">
            Extra Options
          </label>
        </div>
        <div className="flex items-center m-auto justify-center">
          <RadioButton label="Environmental" id="radio1" />
          <RadioButton label="Dummy" id="radio2" />
          <RadioButton label="PDT" id="radio3" />
        </div>
        <div className="flex items-center">
          <button className="bg-primary text-white px-6 py-2">Search</button>
        </div>
      </div>
      <p className="pb-5 text-lg font-semibold">Data parsed successfully</p>
    </div>
  );
};

export default SearchForm;
