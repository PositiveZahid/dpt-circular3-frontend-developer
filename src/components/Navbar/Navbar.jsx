import { CgProfile } from "react-icons/cg";
import { GoBell } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="bg-[#0f0838]">
      <div className="container mx-auto flex justify-between px-10 py-5">
        {/* nav manu */}
        <div>
          <ul className="flex capitalize gap-10 text-white ">
            <li>dashboard</li>
            <li>master price</li>
            <li>custom price</li>
            <li>calender</li>
            <li>reports</li>
          </ul>
        </div>
        {/* profile and notification */}
        <div>
          <div className="flex gap-2 items-center text-white">
            <GoBell className="text-lg" />
            <CgProfile className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
