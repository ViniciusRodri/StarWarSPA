import { ChangeEvent } from "react";

interface IINputProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({ value, onChange, placeholder }: IINputProps) => {
  return (
    <div className="flex flex-col mb-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-dark text-gray-dark"
      />
    </div>
  );
};

export default Input;
