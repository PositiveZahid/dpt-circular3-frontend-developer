import { useContext } from "react";
import "./App.css";
import { DataContext } from "./hooks/ContextProvider/ContextProvider";
import Trip from "./components/Trip/Trip";
import TripFilter from "./components/TripFilter/TripFilter";
import SearchSection from "./components/SearchSection/SearchSection";
import FlightTable from "./components/FlightTable/FlightTable";

function App() {
  const { data: datas, loading } = useContext(DataContext);

  return (
    <div className="container mx-auto ">
      <div className="px-3 py-1">
        <h2 className="capitalize font-extrabold text-2xl">master price</h2>
      </div>
      <hr />
      <div className="px-5">
        <Trip />
        <TripFilter />
        <SearchSection />
        <p className="font-semibold">{datas?.message}</p>
        <FlightTable datas={datas} loading={loading} />
      </div>
    </div>
  );
}

export default App;
