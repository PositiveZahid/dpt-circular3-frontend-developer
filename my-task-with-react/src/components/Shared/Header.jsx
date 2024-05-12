import { NavLink } from "react-router-dom";
import { navLinks } from "../../assets/constant";

const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="bg-slate-800 text-white px-4 lg:px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* All Nav Links section  */}
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  className={({
                    isActive,
                  }) => `py-1 duration-200 hover:text-blue-400
                  ${isActive ? "text-blue-600" : "text-white"}
                  `}
                  to={link.to}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Notification and user section  */}
          <div className="flex items-center space-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
            <div>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/bubbles/50/user.png"
                alt="user"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
