import React from 'react';

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onClear }) => {
  return (
    <div className="relative w-full max-w-md mx-auto mt-6">
      <input
        type="text"
        placeholder="ابحث هنا..."
        value={value}
        onChange={onChange}
        className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      
      <svg
        className="w-5 h-5 text-white absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>

      
      {value && (
        <button
          onClick={onClear}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500"
          aria-label="مسح"
        >
          &#10005;
        </button>
      )}
    </div>
  );
};

export default SearchBar;
