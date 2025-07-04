'use client';

import React, { useState } from 'react';
import SearchIcon from './SearchIcon';

export default function Footer({ onSearchClick }) {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <footer className="footer">
      <SearchIcon onClick={onSearchClick} />

      <div id="mapPanel" className={mapOpen ? 'open' : ''}>
        <SearchIcon mapOpen={mapOpen} setMapOpen={setMapOpen} />
      </div>
    </footer>
  );
}
