import { useContext } from "react";
import "./App.css";
import { DataContext } from "./hooks/ContextProvider/ContextProvider";
import Trip from "./components/Trip/Trip";
import TripFilter from "./components/TripFilter/TripFilter";

function App() {
  const data = useContext(DataContext);

  console.log(data);

  return (
    <div className="container mx-auto ">
      <div className="px-3 py-1">
        <h2 className="capitalize font-extrabold text-2xl">master price</h2>
      </div>
      <hr />
      <div className="px-5">
        <Trip />
        <TripFilter />
      </div>
    </div>
  );
}

export default App;
