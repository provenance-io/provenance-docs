import React, { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  linkTo?: string;
  btnType?: 'primary' | 'light' | 'outline' | 'icon';
  size?: 'small' | 'medium' | 'large' | 'full';
  [key: string]: any;
};

/** Creates a button on the page */
export default function Button({
  children,
  className = '',
  showArrow = false,
  linkTo = '',
  btnType = 'primary',
  size = 'medium',
  ...rest
}: ButtonProps) {
  return (
    <Link to={linkTo}>
      <button
        {...rest}
        className={clsx(
          'inline-flex items-center justify-center whitespace-nowrap',
          'border border-solid text-center font-MaisonNeueExtended font-semibold',
          'transition-colors duration-300',
          {
            'rounded-[100px] px-4 py-2 text-sm':
              size === 'small' && btnType !== 'icon',
            'rounded-[100px] px-8 py-4 text-base':
              size === 'medium' && btnType !== 'icon',
            'rounded-[100px] px-12 py-5 text-xl':
              size === 'large' && btnType !== 'icon',
            'w-full rounded-[200px] px-12 py-5 text-xl':
              size === 'full' && btnType !== 'icon',

            'border-transparent bg-blue-700 text-gray-100 hover:bg-blue-900':
              btnType === 'primary',
            'border-transparent bg-yellow-400 text-gray-900 hover:bg-yellow-600':
              btnType === 'light',
            'border-gray-700 bg-transparent text-gray-700':
              btnType === 'outline',

            'rounded-[200px] border-gray-700': btnType === 'icon',
            'p-2': btnType === 'icon' && size === 'small',
            'p-3': btnType === 'icon' && size === 'medium',
            'p-4': btnType === 'icon' && size === 'large',
          },

          className
        )}
      >
        {children}
        {showArrow && (
          <>
            <span
              className={clsx('ml-1 font-semibold', {
                'text-blue-400': btnType === 'primary' || btnType === 'outline',
                'text-blue-800': btnType === 'light',
              })}
            >
              &gt;
            </span>
          </>
        )}
      </button>
    </Link>
  );
}
