/* eslint-disable react/prop-types */
const FlightTable = ({ datas }) => {
  const tableHeads = [
    "flight",
    "aircraft",
    "class",
    "fare",
    "route",
    "departure",
    "arrival",
    "",
    "duration",

    "price",
  ];

  return (
    <div className="my-3">
      {datas.length === 0 ? (
        <tr>
          <td></td>
        </tr>
      ) : (
        <div className="p-6 px-0 ">
          <table className="w-full text-left  table-auto min-w-max">
            <thead>
              <tr className="bg-[#E5E7EB] text-[#464749] ">
                {tableHeads?.map((tableHead, i) => {
                  return (
                    <th key={i} className="p-4 ">
                      <p className="block text-center uppercase font-bold font-sans text-sm antialiased  leading-none text-blue-gray-900 opacity-70">
                        {tableHead}
                      </p>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {datas?.flightOffer.map((data, i) => {
                return (
                  <tr key={i} className="odd:bg-[#f8f7f7] even:bg-[#e2e5e7]">
                    <td className="  pb-3 border-b border-red-500">
                      <div className="flex text-center flex-col text-textColor items-center border-b border-red-200">
                        {data?.itineraries[0].segments.map((segment, i) => {
                          return (
                            <p key={i} className="uppercase">
                              {segment.carrierCode} {segment.aircraft}
                            </p>
                          );
                        })}
                      </div>
                    </td>
                    <td className="  pb-3 border-b border-red-500">
                      <div className="flex text-center flex-col text-textColor items-center border-b border-red-200">
                        {data?.itineraries[0].segments.map((segment, i) => {
                          return (
                            <p key={i} className="uppercase">
                              {segment.flightNumber}
                            </p>
                          );
                        })}
                      </div>
                    </td>
                    <td className="  pb-3 border-b border-red-500">
                      <div className="flex text-center flex-col text-textColor items-center border-b border-red-200">
                        {data?.class[0].map((cls, i) => {
                          return (
                            <p key={i} className="uppercase">
                              {cls}
                            </p>
                          );
                        })}
                      </div>
                    </td>
                    <td className="  pb-3 border-b border-red-500">
                      <div className="flex text-center flex-col text-textColor items-center border-b border-red-200">
                        {data?.fareBasis[0].map((fare, i) => {
                          return (
                            <p key={i} className="uppercase">
                              {fare}
                            </p>
                          );
                        })}
                      </div>
                    </td>
                    <td className="  pb-3 border-b border-red-500">
                      <div className="flex text-center flex-col text-textColor items-center border-b border-red-200">
                        {data?.itineraries[0].segments.map((segment, i) => {
                          return (
                            <p key={i} className="uppercase">
                              {segment.departure.iataCode}
                              {" - "}
                              {segment.arrival.iataCode}
                            </p>
                          );
                        })}
                      </div>
                    </td>
                    <td className="  pb-3 border-b border-red-500">
                      <div className="flex text-center flex-col text-textColor items-center border-b border-red-200">
                        {data?.itineraries[0].segments.map((segment, i) => {
                          return (
                            <p key={i} className="uppercase">
                              {segment.departure.at}
                            </p>
                          );
                        })}
                      </div>
                    </td>
                    <td className="  pb-3 border-b border-red-500">
                      <div className="flex text-center flex-col text-textColor items-center border-b border-red-200">
                        {data?.itineraries[0].segments.map((segment, i) => {
                          return (
                            <p key={i} className="uppercase">
                              {segment.arrival.at}
                            </p>
                          );
                        })}
                      </div>
                    </td>
                    <td className="  pb-3 border-b border-red-500">
                      <div className="flex text-center flex-col text-textColor items-center border-b border-red-200">
                        {data?.itineraries[0].segments.map((segment, i) => {
                          return (
                            <p key={i} className="uppercase">
                              ---{" "}
                            </p>
                          );
                        })}
                      </div>
                    </td>
                    <td className="  pb-3 border-b border-red-500">
                      <div className="flex text-center flex-col text-textColor items-center border-b border-red-200">
                        <p className="uppercase">
                          {data.itineraries[0].duration}
                        </p>

                        {data?.itineraries[0].segments
                          ?.slice(0, -1)
                          .map((segment, i) => {
                            return (
                              <p key={i} className="uppercase invisible">
                                ---
                              </p>
                            );
                          })}
                      </div>
                    </td>
                    <td className="border-b border-red-500">
                      <div className="flex gap-1 text-center flex-col text-textColor items-center">
                        <p className="uppercase">{data?.price}</p>
                        <button className="text-xs font-bold rounded-[4px] uppercase bg-secondaryColor text-white py-2 px-6">
                          select
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FlightTable;
