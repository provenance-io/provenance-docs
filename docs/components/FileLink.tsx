import React, { useEffect, useState } from 'react';
import { PaperClipIcon } from '@heroicons/react/24/solid';

interface PropTypes {
  text: string;
  url: string;
}

const LoadingData = () => (
  <div className="bg-gray-200 w-8 h-5 rounded-sm animate-pulse" />
);

export const FileLink = ({ text, url }: PropTypes) => {
  const [size, setSize] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        let size = `${blob.size} bytes`;

        if (blob.size > 1e3) {
          size = `${Math.round(blob.size / 1e3)}KB`;
        }

        if (blob.size > 1e6) {
          size = `${Math.round(blob.size / 1e6)}MB`;
        }

        if (blob.size > 1e9) {
          size = `${Math.round(blob.size / 1e9)}GB`;
        }

        if (blob.size > 1e9) {
          size = `${Math.round(blob.size / 1e12)}TB`;
        }

        setSize(size);
        setType(
          blob.type.replace(
            /(application|audio|font|example|image|message|model|multipart|text|video)\//,
            ''
          )
        );
      });
  }, [url]);

  return (
    <a
      className="pagination-nav__link text-gray-500 hover:text-gray-500"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center gap-2">
        <PaperClipIcon className="w-10 h-10 bg-gray-100 p-2 rounded-sm" />
        <div className="flex flex-col">
          <div className="flex gap-4">
            <span className="text-gray-900">{text}</span>
            <span>{size || <LoadingData />}</span>
          </div>
          <span className="uppercase">{type || <LoadingData />}</span>
        </div>
      </div>
    </a>
  );
};
