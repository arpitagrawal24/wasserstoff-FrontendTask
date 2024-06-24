"use client";
import { useState } from 'react';

const Sidebar = ({ files, setFiles }) => {
  const addFolder = () => {
    const folderName = prompt('Enter folder name');
    if (folderName) {
      setFiles([...files, { name: folderName, type: 'folder', children: [] }]);
    }
  };

  const addFile = (folder) => {
    const fileName = prompt('Enter file name (with extension .ed, .note, .lt, .readme)');
    if (fileName) {
      const updatedFiles = files.map((item) => {
        if (item.name === folder.name) {
          item.children.push({ name: fileName, type: 'file' });
        }
        return item;
      });
      setFiles(updatedFiles);
    }
  };

  const renderFiles = (items) => (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="pl-4">
          {item.type === 'folder' ? (
            <>
              <span>{item.name}</span>
              <button onClick={() => addFile(item)}>+ File</button>
              {renderFiles(item.children)}
            </>
          ) : (
            <span>{item.name}</span>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-gray-800 text-white w-1/4 h-full">
      <button onClick={addFolder} className="p-2 bg-blue-500">+ Folder</button>
      {renderFiles(files)}
    </div>
  );
};

export default Sidebar;
