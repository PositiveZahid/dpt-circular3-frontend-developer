interface SelectOptionProps {
  label: string;
  value: number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  label,
  value,
  onChange,
}) => (
  <select
    className="border-2 border-gray-400 pl-0 pr-6 py-2 w-28"
    value={value}
    onChange={onChange}
  >
    <option value={value}>{label}</option>
    {[1, 2, 3].map((num) => (
      <option key={num} value={num}>
        {num}
      </option>
    ))}
  </select>
);
