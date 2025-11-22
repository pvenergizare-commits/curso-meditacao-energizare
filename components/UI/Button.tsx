import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-600 to-brand-500 text-white hover:shadow-brand-300/50 hover:from-brand-700 hover:to-brand-600 focus:ring-brand-500",
    secondary: "bg-gold-300 text-brand-900 hover:bg-gold-400 hover:shadow-gold-200/50 focus:ring-gold-300",
    outline: "border-2 border-brand-600 text-brand-700 hover:bg-brand-50 focus:ring-brand-500"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
