import { useState, KeyboardEvent, InputHTMLAttributes, ReactNode, useRef, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: 'text' | 'password';
  isSearch?: boolean;
  toggleDropdownIcon?: boolean;
  inputSize?: 'small' | 'medium' | 'large';
  suggestions?: string[];
  className?: string;
  icon?: ReactNode;
  bgColor?: string;
}

const sizeClasses = {
  small: 'px-3 py-2 text-sm max-w-sm',
  medium: 'px-3 py-2 text-md max-w-md',
  large: 'px-3 py-2 text-lg max-w-full',
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = 'text',
  isSearch = false,
  toggleDropdownIcon = false,
  inputSize = 'medium',
  suggestions = [],
  className,
  icon,
  bgColor = 'bg-white',
  ...props
}) => {
  const [query, setQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
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
    addSelectedItem(suggestion);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      addSelectedItem(query.trim());
    }
  };

  const addSelectedItem = (item: string) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
      setQuery('');
      setDropdownOpen(false);
    }
  };

  const removeSelectedItem = (item: string) => {
    setSelectedItems(selectedItems.filter(selected => selected !== item));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clearQuery = () => {
    setQuery('');
    setFilteredSuggestions([]);
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-col mb-4 relative w-full ${sizeClasses[inputSize]} ${className}`}>
      <label className="mb-2 font-semibold text-black">{label}</label>
      {selectedItems.length > 0 && (
        <div className="flex flex-wrap mb-2">
          {selectedItems.map((item, index) => (
            <span key={index} className="flex items-center mr-2 mb-2 bg-primary-gray text-black px-2 rounded">
              <IoClose
                className="mr-1 cursor-pointer hover:text-secundary-gray"
                onClick={() => removeSelectedItem(item)}
              />
              {item}
            </span>
          ))}
        </div>
      )}
      <div className={`flex items-center ${bgColor} border border-black-transparent rounded-lg px-3 py-2`}>
        <input
          {...props}
          type={type === 'password' && showPassword ? 'text' : 'text'}
          value={query}
          onChange={handleInputChange}
          onFocus={() => isSearch && updateDropdown(query)}
          onKeyPress={handleKeyPress}
          className={`flex-1 ${bgColor} outline-none text-gray-700`}
        />
        {type === 'password' && (
          <button type="button" onClick={togglePasswordVisibility} className="ml-2 focus:outline-none">
            {showPassword ? (
              <AiOutlineEye className="w-5 h-5 text-secundary-gray" />
            ) : (
              <AiOutlineEyeInvisible className="w-5 h-5 text-secundary-gray" />
            )}
          </button>
        )}
        {query.length > 0 ? (
          <IoClose className="w-5 h-5 text-secundary-gray ml-2 cursor-pointer" onClick={clearQuery} />
        ) : (
          isSearch && (
            <button
              type="button"
              onClick={toggleDropdownIcon ? toggleDropdown : () => updateDropdown(query)}
              className="ml-2 focus:outline-none"
            >
              {icon}
            </button>
          )
        )}
      </div>
      {dropdownOpen && filteredSuggestions.length > 0 && (
        <ul className="scroll-custom border border-black-transparent rounded-lg mt-1 max-h-40 overflow-y-auto bg-white w-full">
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
};

export default CustomInput;