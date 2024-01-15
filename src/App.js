import React, { useState } from 'react';
import './style.css';
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const staticSuggestions = [
      'example1@gmail.com',
      'example2@gmail.com',
      'example3@gmail.com',
    ];
    const filteredSuggestions = staticSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue('');
    setSelectedEmails([...selectedEmails, suggestion]);
    setSuggestions([]);
  };

  const handleRemoveEmail = (index) => {
    const updatedEmails = [...selectedEmails];
    updatedEmails.splice(index, 1);
    setSelectedEmails(updatedEmails);
  };

  return (
    <div>
      <div>
        {selectedEmails.map((email, index) => (
          <span key={index}>
            {email}{' '}
            <button type="button" onClick={() => handleRemoveEmail(index)}>
              x
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type email address..."
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
