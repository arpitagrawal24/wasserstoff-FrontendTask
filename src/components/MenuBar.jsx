"use client";
export default function MenuBar() {

  const menus = [
    { name: "File", action: () => alert("File menu clicked") },
    { name: "Edit", action: () => alert("Edit menu clicked") },
    { name: "Selection", action: () => alert("Selection menu clicked") },
    { name: "View", action: () => alert("View menu clicked") },
    { name: "Go", action: () => alert("Go menu clicked") },
    { name: "Run", action: () => alert("Run menu clicked") },
    { name: "Terminal", action: () => alert("Terminal menu clicked") },
    { name: "Help", action: () => alert("Help menu clicked") }
  ];

  return (
    <div className='w-full h-10 bg-[#06141B] flex items-center text-sm'>
      {menus.map((menu, index) => (
        <button
          key={index}
          className='text-white px-4 py-2 hover:bg-[#1A2C39] focus:outline-none'
          onClick={menu.action}
        >
          {menu.name}
        </button>
      ))}
    </div>
  );
}
