
interface RadioButtonProps {
  label: string;
  id: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ label, id }) => (
  <>
    <label htmlFor={id} className="text-lg py-6 font-medium">
      {label}
    </label>
    <input
      type="radio"
      id={id}
      name="radioGroup"
      className="mr-2 ml-2 h-4 w-4 border-gray-300 rounded text-blue-500 focus:ring-blue-500"
    />
  </>
)