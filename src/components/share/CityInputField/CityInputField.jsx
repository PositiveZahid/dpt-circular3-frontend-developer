import { useEffect, useRef, useState } from "react";
const CityInputField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const dropdownContent = [
    "Uppercase",
    "Lowercase",
    "Camel Case",
    "Kebab Case",
  ];

  //   when click anywhere in window dropdown menu close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("click", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    // Set default selected content when dropdown is opened
    if (!isOpen) {
      setSelectedContent(selectedContent);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleContentClick = (content) => {
    setSelectedContent(content);
    setIsOpen(false);
  };

  return (
    <div className="w-[150px]">
      <div className="relative group" ref={dropdownRef}>
        <button
          id="dropdown-button"
          className="inline-flex uppercase w-full px-3 py-2 text-sm font-medium text-textColor bg-white border border-textColor  shadow-sm focus:outline-none "
          onClick={toggleDropdown}
        >
          <span className="mr-2">{selectedContent || dropdownContent[0]}</span>
        </button>
        <div
          id="dropdown-menu"
          className={`absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${
            isOpen ? "" : "hidden"
          }`}
        >
          {/* Search input */}
          <input
            id="search-input"
            className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
            type="text"
            placeholder="Search items"
            autoComplete="off"
            onChange={handleInputChange}
          />
          {/* Dropdown content goes here */}
          {dropdownContent.map((content, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
              style={{
                display:
                  searchTerm === "" ||
                  content.toLowerCase().includes(searchTerm)
                    ? "block"
                    : "none",
              }}
              onClick={() => handleContentClick(content)}
            >
              {content}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityInputField;
