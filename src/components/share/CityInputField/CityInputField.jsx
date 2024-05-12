import { useEffect, useRef, useState } from "react";

const CityInputField = ({ dropdownContent, inputData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(dropdownContent[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

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
  }, [inputData, selectedContent, dropdownContent]);

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
        <input
          type="text"
          id="dropdown-input"
          className="inline-flex uppercase w-full px-3 py-2 text-sm font-medium text-textColor bg-white border border-textColor shadow-sm focus:outline-none"
          onClick={toggleDropdown}
          value={selectedContent || dropdownContent[0]}
          readOnly
          ref={inputData}
        />
        <div
          id="dropdown-menu"
          className={`absolute h-[250px] z-50 overflow-auto right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${
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
          {dropdownContent?.map((content, index) => (
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
