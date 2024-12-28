import { ButtonVariant } from './Button.types';

export function getButtonStyles(variant: ButtonVariant): string {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
  };
  
  return `${baseStyles} ${variantStyles[variant]}`;
}