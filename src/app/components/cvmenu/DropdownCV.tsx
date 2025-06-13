// app/components/cvmenu/DropdownCV.tsx

"use client";

import { useState } from "react";

export default function DropdownCV() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    // BAIXAR CV
    <div
      className="relative group ml-6 flex border-theme-primary"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button className="button-acessar-neon bg-theme-button rounded text-sm text-white button-theme">
        📄 Baixar CV
      </button>
      {dropdownOpen && (
        <div className="absolute top-full mt-2 flex flex-col z-30">
          <a
            href="/downloads/andre-pereira-cv-pt.pdf"
            download
            className="button-acessar-neon bg-theme-button mt-2 rounded text-sm text-white button-theme"
          >
            🇧🇷 Português
          </a>
          <a
            href="/downloads/andre-pereira-cv-en.pdf"
            download
            className="button-acessar-neon bg-theme-button mt-2 rounded text-sm text-white button-theme"
          >
            🇺🇸 Inglês
          </a>
        </div>
      )}
    </div>
  );
}

