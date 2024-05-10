import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="bg-slate-800 text-white px-4 lg:px-6 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <Link>Dashboard</Link>
            <Link>Master Price</Link>
            <Link>Custom Price</Link>
            <Link>Calender</Link>
            <Link>Reports</Link>
          </div>
          <div className="flex space-x-4">
            <div>Notification</div>
            <div>user</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
