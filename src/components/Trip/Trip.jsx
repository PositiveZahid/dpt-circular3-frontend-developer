const Trip = () => {
  return (
    <div className="py-5 flex justify-center border-b border-primaryColor">
      <div className="border-2 flex border-black">
        <div className=" py-1 px-5">
          <p className="capitalize font-bold">round trip</p>
        </div>
        <div className=" py-1 px-5 active">
          <p className="capitalize font-bold">one way</p>
        </div>
        <div className=" py-1 px-5">
          <p className="capitalize font-bold">multi city</p>
        </div>
      </div>
    </div>
  );
};

export default Trip;
