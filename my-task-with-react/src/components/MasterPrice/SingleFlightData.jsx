/* eslint-disable react/prop-types */
const SingleFlightData = ({ totalItem, index }) => {
  console.log("this is items:", totalItem);
  return (
    <tr className={`w-full ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}`}>
      <td>
        {totalItem?.itineraries[0]?.segments.map((item, index) => (
          <span className="flex flex-col" key={index}>
            {item?.carrierCode} {item?.aircraft}
          </span>
        ))}
      </td>

      <td>
        {totalItem?.itineraries[0]?.segments.map((item, index) => (
          <span className="flex flex-col" key={index}>
            {item?.flightNumber}
          </span>
        ))}
      </td>
      <td>
        {totalItem?.class[0]?.map((item, index) => (
          <span className="flex flex-col" key={index}>
            {item}
          </span>
        ))}
      </td>
      <td>
        {totalItem?.fareBasis[0]?.map((item, index) => (
          <span className="flex flex-col" key={index}>
            {item}
          </span>
        ))}
      </td>
      <td>
        {totalItem?.itineraries[0]?.segments.map((item, index) => (
          <span className="flex flex-col" key={index}>
            {item?.departure?.iataCode} - {item?.arrival?.iataCode}
          </span>
        ))}
      </td>
      <td>
        {totalItem?.itineraries[0]?.segments.map((item, index) => (
          <span className="flex flex-col" key={index}>
            {item?.departure?.at}
          </span>
        ))}
      </td>
      <td className="">
        <div>
          {totalItem?.itineraries[0]?.segments.map((item, index) => (
            <span className="flex justify-evenly" key={index}>
              <span>{item?.arrival?.at}</span> <span>{"---"}</span>
            </span>
          ))}
        </div>
      </td>
      <td className="flex justify-start">
        <span>{totalItem?.itineraries[0]?.duration}</span>
      </td>
      <td className="text-sm">
        <div className="">{totalItem?.price}</div>
        <button className="w-full bg-violet-900 text-white uppercase px-1 py-2 rounded-md">
          Select
        </button>
      </td>
    </tr>
  );
};

export default SingleFlightData;
