import React from "react";

const Navbar = () => {
  return (
    <header className="container h-12 border-b border-blue-900 mx-auto">
      <div className="flex justify-between items-center h-full">
        <a href="#" className="inline-block text-slate-200">
          Seyir
        </a>
        <button className="inline-block text-slate-200">open</button>
      </div>
    </header>
  );
};

export default Navbar;
