// app/components/skillmenu/DropdownMenu.tsx

"use client";

import { useState } from "react";

export default function DropdownMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="relative ml-2 flex border-theme-primary"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button className="button-acessar-neon bg-theme-button rounded text-sm text-white button-theme">
        🛠️ Skill Profissional
      </button>

      {dropdownOpen && (
        <div className="absolute top-full left-0 mt-2 flex flex-col z-30  border-theme-primary">
          <button
            className="button-acessar-neon bg-theme-button my-1 rounded text-sm text-white button-theme"
            onClick={() => window.location.href = "/resume-skill"}
          >
            Resumido
          </button>
          <button
            className="button-acessar-neon bg-theme-button my-1 rounded text-sm text-white button-theme"
            onClick={() => window.location.href = "/skill-completo"}
          >
            Completo
          </button>
        </div>
      )}
    </div>
  );
}
