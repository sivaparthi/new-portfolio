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
 *  - `tone`: modifier class that supplies a theme-aware tint
 *  - `initials`: fallback when no branded mark is available
 */
function resolveLogo(company) {
  const name = company.toLowerCase();

  if (name.includes('microsoft')) {
    return { Component: <MicrosoftMark />, tone: 'brand' };
  }
  if (name === 'ibm' || name.startsWith('ibm ')) {
    return { Component: <IbmMark />, tone: 'brand' };
  }
  if (name.includes('thoughtclan')) {
    return { initials: 'TC', tone: 'sage' };
  }
  if (name.includes('navriti')) {
    return { initials: 'N', tone: 'sand' };
  }
  if (name.includes('national institute of technology')) {
    return { initials: 'NIT', tone: 'slate' };
  }
  if (name.includes('coimbatore institute')) {
    return { initials: 'CIT', tone: 'ember' };
  }
  // Generic fallback — first two letters of the company.
  return { initials: company.slice(0, 2).toUpperCase(), tone: 'ember' };
}

export default function CompanyLogo({ company }) {
  const logo = resolveLogo(company);
  return (
    <span className={`company-logo company-logo--${logo.tone}`} aria-hidden="true">
      {logo.Component ? logo.Component : <span className="company-logo__initials">{logo.initials}</span>}
    </span>
  );
}
