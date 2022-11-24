import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';

const USE_BRANDED_NAVBAR = false;

function loadNavbarScript() {
  // Skip this code if we're in Server-Side Rendering mode
  if (typeof window == 'undefined') {
    return;
  }
  let s = document.createElement('script');
  s.src = 'https://developer.static.autodesk.com/forgeunified/releases/current/adskf.common.entry.js';
  s.dataset.resolveMenuUrl = 'https://forge.autodesk.com';
  s.dataset.resolveFooterUrl = 'https://forge.autodesk.com';
  document.head.appendChild(s);
}

loadNavbarScript();

export default function Navbar() {
  return (
    <NavbarLayout>
      {USE_BRANDED_NAVBAR ? <div id="app-navbar" style={{width: '100%'}}></div> : <NavbarContent />}
    </NavbarLayout>
  );
}
