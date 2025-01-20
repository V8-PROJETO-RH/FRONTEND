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
      <div className="flex items-center bg-gray border border-black-transparent rounded-lg px-3 py-2">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setDropdownOpen(true)}
          className="w-full bg-gray outline-none text-gray-700"
          placeholder="Pesquisar cargos ou palavras-chave"
        />
        <AiOutlineSearch className="w-5 h-5 text-secundary-gray" />
      </div>
      {dropdownOpen && filteredSuggestions.length > 0 && (
        <ul className="scroll-custom border border-black-transparent rounded-lg mt-1 max-h-40 overflow-y-auto bg-white w-full">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-gray cursor-pointer text-dark-blue"
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