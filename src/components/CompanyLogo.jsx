import React from 'react';

/**
 * Microsoft "four-square" logo as inline SVG.
 */
function MicrosoftMark({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="10" height="10" x="1" y="1" fill="#F25022" />
      <rect width="10" height="10" x="12" y="1" fill="#7FBA00" />
      <rect width="10" height="10" x="1" y="12" fill="#00A4EF" />
      <rect width="10" height="10" x="12" y="12" fill="#FFB900" />
    </svg>
  );
}

/**
 * IBM "8-bar" wordmark as inline SVG (simplified, brand blue).
 */
function IbmMark({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size * (16 / 32)}
      viewBox="0 0 32 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g fill="#1F70C1">
        {/* 8 horizontal stripes — evokes the IBM logo silhouette */}
        {[0, 4, 8, 12].map((y) => (
          <rect key={y} x="0" y={y} width="32" height="2" />
        ))}
        {[2, 6, 10, 14].map((y) => (
          <rect key={`b-${y}`} x="0" y={y} width="32" height="1" opacity="0.55" />
        ))}
      </g>
    </svg>
  );
}

/**
 * Resolves a company name to a logo configuration.
 *  - `Component`: React node to render
 *  - `bg`: subtle background tint for the badge wrapper
 *  - `initials`: fallback when no branded mark is available
 */
function resolveLogo(company) {
  const name = company.toLowerCase();

  if (name.includes('microsoft')) {
    return { Component: <MicrosoftMark />, bg: 'rgba(0, 164, 239, 0.10)' };
  }
  if (name === 'ibm' || name.startsWith('ibm ')) {
    return {
      Component: <IbmMark />,
      bg: 'rgba(31, 112, 193, 0.10)',
    };
  }
  if (name.includes('thoughtclan')) {
    return { initials: 'TC', bg: 'rgba(34, 211, 238, 0.12)', color: '#22d3ee' };
  }
  if (name.includes('navriti')) {
    return { initials: 'N', bg: 'rgba(255, 159, 64, 0.12)', color: '#ff9f40' };
  }
  if (name.includes('national institute of technology')) {
    return { initials: 'NIT', bg: 'rgba(167, 139, 250, 0.14)', color: '#a78bfa' };
  }
  if (name.includes('coimbatore institute')) {
    return { initials: 'CIT', bg: 'rgba(124, 92, 255, 0.14)', color: '#bda7ff' };
  }
  // Generic fallback — first two letters of the company.
  return {
    initials: company.slice(0, 2).toUpperCase(),
    bg: 'rgba(124, 92, 255, 0.14)',
    color: '#bda7ff',
  };
}

export default function CompanyLogo({ company }) {
  const logo = resolveLogo(company);
  return (
    <span
      className="company-logo"
      style={{ background: logo.bg, color: logo.color || 'inherit' }}
      aria-hidden="true"
    >
      {logo.Component ? logo.Component : <span className="company-logo__initials">{logo.initials}</span>}
    </span>
  );
}
