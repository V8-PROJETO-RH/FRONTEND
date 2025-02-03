import React, {
  useState,
  KeyboardEvent,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useEffect,
  forwardRef,
} from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: "text" | "password" | "date" | "textarea";
  isSearch?: boolean;
  toggleDropdownIcon?: boolean;
  suggestions?: string[];
  className?: string;
  icon?: ReactNode;
  bgColor?: string;
  fontLabel?: "medium" | "semibold" | "bold";
  enableSelect?: boolean;
  fontSizeLabel?: string;
  hasError?: boolean;
  heightSize?: number;
}

const fontWeightLabels = {
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({
  label,
  type = "text",
  isSearch = false,
  toggleDropdownIcon = false,
  fontLabel = "semibold",
  suggestions = [],
  className,
  icon,
  bgColor = "bg-white",
  enableSelect = false,
  fontSizeLabel,
  heightSize,
  hasError = false,
  ...props
}, ref) => {
  const [word, setWord] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWord(value);
    if (isSearch) {
      updateDropdown(value);
    }
  };

  const updateDropdown = (value: string) => {
    const filter = value.toLowerCase();
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(filter)
    );
    setFilteredSuggestions(filtered);
    setDropdownOpen(filtered.length > 0);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
    setFilteredSuggestions(dropdownOpen ? [] : suggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (enableSelect) {
      addSelectedItem(suggestion);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (enableSelect && e.key === "Enter" && word.trim() !== "") {
      addSelectedItem(word.trim());
    }
  };

  const addSelectedItem = (item: string) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
      setWord("");
      setDropdownOpen(false);
    }
  };

  const removeSelectedItem = (item: string) => {
    if (enableSelect) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clearWord = () => {
    setWord("");
    setFilteredSuggestions([]);
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const borderClass = hasError ? "border-red-500" : "border-gray";

  return (
    <div
      ref={containerRef}
      className={`flex flex-col relative ${className}`}
    >
      <label className={`mb-2 ${fontWeightLabels[fontLabel]} text-${[fontSizeLabel]} text-black`}>
        {label}
      </label>
      {enableSelect && selectedItems.length > 0 && (
        <div className="flex flex-wrap mb-2">
          {selectedItems.map((item, index) => (
            <span
              key={index}
              className="flex items-center mr-2 mb-2 bg-primary-gray text-black px-2 rounded"
            >
              <IoClose
                className="mr-1 cursor-pointer hover:text-secundary-gray"
                onClick={() => removeSelectedItem(item)}
              />
              {item}
            </span>
          ))}
        </div>
      )}
      <div
        className={`flex items-center ${bgColor} border ${borderClass} rounded-lg px-3 py-2 relative`}
      >
        {type === "textarea" ? (
          <textarea
            {...(props as any)}
            className="flex-1 outline-none text-black resize-none"
            value={word}
            onChange={handleInputChange}
            style={{ height: '5.5rem', lineHeight: '1.5', overflowY: 'auto' }}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>} 
            {...props}
            type={type === "password" && showPassword ? "text" : type}
            value={word}
            onChange={handleInputChange}
            onFocus={() => isSearch && updateDropdown(word)}
            onKeyUp={handleKeyPress}
            className={`flex-1 ${bgColor} h-${[heightSize]} outline-none text-black px-0 py-0 w-full`}
          />
        )}
        {icon && (
          <div className="absolute right-3">
            {icon}
          </div>
        )}
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="ml-2 focus:outline-none"
          >
            {showPassword ? (
              <AiOutlineEye className="w-5 h-5 text-secundary-gray" />
            ) : (
              <AiOutlineEyeInvisible className="w-5 h-5 text-secundary-gray" />
            )}
          </button>
        )}
        {enableSelect && word.length > 0 ? (
          <IoClose
            className="w-5 h-5 text-secundary-gray ml-2 cursor-pointer"
            onClick={clearWord}
          />
        ) : (
          isSearch && (
            <button
              type="button"
              onClick={toggleDropdownIcon ? toggleDropdown : () => updateDropdown(word)}
              className="ml-2 focus:outline-none"
            >
              {icon}
            </button>
          )
        )}
      </div>

      {dropdownOpen && filteredSuggestions.length > 0 && (
        <ul className="scroll-custom border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto bg-white w-full">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-primary-gray cursor-pointer text-dark-blue"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default CustomInput;