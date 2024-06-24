import { useState } from 'react';

export default function TextEditor() {
  const [text, setText] = useState('Welcome to text Editor');

  const options = [
    { name: 'Clear', action: 'handleClear' },
    { name: 'UpperCase', action: 'handleUpperCase' },
    { name: 'LowerCase', action: 'handleLowerCase' },
    { name: 'Bold', action: 'handleBold' },
    { name: 'Italic', action: 'handleItalic' },
    { name: 'Clear Formatting', action: 'handleClearFormatting' },
  ];

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleBold = () => {
    setText(`<b>${text}</b>`);
  }

  const handleItalic = () => {
    setText(`<i>${text}</i>`);
  }

  const handleClearFormatting = () => {
    setText(text.replace(/<[^>]*>/g, ''));
  }

  const handleButtonClick = (action) => {
    switch (action) {
      case 'handleClear':
        handleClear();
        break;
      case 'handleUpperCase':
        handleUpperCase();
        break;
      case 'handleLowerCase':
        handleLowerCase();
        break;
      case 'handleBold':
        handleBold();
        break;
      case 'handleItalic':
        handleItalic();
        break;
      case 'handleClearFormatting':
        handleClearFormatting();
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full h-[94vh] p-6 bg-[#253745] relative">
      <textarea
        value={text}
        onChange={handleChange}
        rows="10"
        className="w-full h-[80vh] p-2 text-white bg-[#1c2b36] border border-gray-700 rounded-lg mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex flex-wrap justify-end gap-2 mt-2">
        {options.map((item, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(item.action)}
            className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
