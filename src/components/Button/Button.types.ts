export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
}