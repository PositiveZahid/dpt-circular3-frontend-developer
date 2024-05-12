interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => (
  <div
    className={`px-4 py-2 cursor-pointer font-semibold ${
      active ? "bg-primary text-white" : ""
    }`}
    onClick={onClick}
  >
    {label}
  </div>
);
