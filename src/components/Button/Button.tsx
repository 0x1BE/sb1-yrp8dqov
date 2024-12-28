import React from 'react';
import { ButtonProps } from './Button.types';
import { getButtonStyles } from './Button.utils';

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  const buttonStyles = getButtonStyles(variant);
  
  return (
    <button 
      className={buttonStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
}