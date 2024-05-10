import { useContext } from "react";
import "./App.css";
import { DataContext } from "./hooks/ContextProvider/ContextProvider";

function App() {
  const data = useContext(DataContext);

  console.log(data);

  return (
    <div>
      <h2 className="text-red-500">hellp world</h2>
    </div>
  );
}

export default App;
