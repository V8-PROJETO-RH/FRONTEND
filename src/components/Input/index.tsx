import { InputHTMLAttributes, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputSize?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeClasses = {
  small: "px-3 py-2 text-sm max-w-sm",
  medium: "px-3 py-2 text-md max-w-md",
  large: "px-3 py-2 text-lg max-w-full",
};

const Input: React.FC<InputProps> = ({ 
  label, 
  inputSize = 'medium', 
  type = 'text', 
  className, 
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-semibold text-gray-700">{label}</label>
      <div className="relative flex items-center">
        <input
          {...props}
          type={type === "password" && showPassword ? "text" : type}
          className={`border rounded-lg w-full pr-10 ${sizeClasses[inputSize]} ${className}`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="relative right-8 focus:outline-none"
          >
            {showPassword ? (
              <AiOutlineEye className="w-5 h-5" />
            ) : (
              <AiOutlineEyeInvisible className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;