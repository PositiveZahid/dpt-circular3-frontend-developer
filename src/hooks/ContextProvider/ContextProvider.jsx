import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("data.json");
        const jsonData = await res.json(); // Parse JSON response
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
