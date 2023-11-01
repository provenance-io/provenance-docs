import React from 'react';

export const DataCard = ({ title, content, link }) => (
  <a
    href={link}
    rel="noreferrer"
    className="block shadow-md w-full bg-[var(--ifm-color-primary)] rounded-lg p-4 text-white hover:text-white"
  >
    <h4 className="font-bold">{title}</h4>
    <p className="m-0">{content}</p>
  </a>
);
