import { useContext, useEffect, useState } from "react";
import "./App.css";
import { DataContext } from "./hooks/ContextProvider/ContextProvider";
import Trip from "./components/Trip/Trip";
import TripFilter from "./components/TripFilter/TripFilter";

import FlightTable from "./components/FlightTable/FlightTable";

function App() {
  const [filterData, setFilterData] = useState([]);

  return (
    <div className="container mx-auto ">
      <div className="px-3 py-1">
        <h2 className="capitalize font-extrabold text-2xl">master price</h2>
      </div>
      <hr />
      <div className="px-5">
        <Trip />
        <TripFilter setFilterData={setFilterData} />
        <p className="font-semibold">{filterData?.message}</p>
        <FlightTable datas={filterData} />
      </div>
    </div>
  );
}

export default App;
