import { useEffect, useState } from 'react';

export const Redirect = ({ to }) => {
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (time < 1) window.location = to;
    else
      setTimeout(() => {
        setTime((t) => t - 1);
      }, 1000);
  }, [time]);

  return (
    <div>
      <p className="text-lg">
        This page has moved to <a href={to}>{to}</a>
      </p>
      <p className="my-4">The page will auto redirect in {time}</p>
    </div>
  );
};
