import React from 'react';

export interface ButtonProps {
  text: string;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = 'primary',
  onClick,
}) => {
  return (
    <button className={`px-4 py-2 rounded bg-yellow-400`}
  onClick={onClick}
>
  {text}
</button>
 );
}