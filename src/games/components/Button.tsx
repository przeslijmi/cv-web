import classNames from 'classnames';
import type React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  compact?: boolean;
}

export default function Button({
  children,
  onClick,
  disabled,
  compact,
}: Props) {

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'px-4 py-2 text-gray-700 bg-gradient-to-r rounded-md shadow-md from-sky-200 to-sky-300',
        {
          'max-w-24': compact,
          'opacity-30 cursor-not-allowed': disabled,
        }
      )}
    >
      {children}
    </button>
  )
}
