import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchInputProps {
  label: string;
  suggestions: string[];
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ label, suggestions, className }) => {
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setDropdownOpen(!!value);
    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setDropdownOpen(false);
  };

  return (
    <div className={`flex flex-col mb-4 relative w-full max-w-sm ${className}`}>
      <label className="mb-2 font-semibold text-gray-700">{label}</label>
      <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg px-3 py-2">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setDropdownOpen(true)}
          className="w-full bg-gray-100 outline-none text-gray-700"
          placeholder="Pesquisar cargos ou palavras-chave"
        />
        <AiOutlineSearch className="w-5 h-5 text-gray-500" />
      </div>
      {dropdownOpen && filteredSuggestions.length > 0 && (
        <ul className="border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto bg-white w-full">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-800"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;