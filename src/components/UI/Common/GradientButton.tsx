import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  size = 'md',
  variant = 'primary'
}) => {
  const sizeClasses = {
    sm: 'h-[36px] text-sm px-3 py-2',
    md: 'h-[44px] text-base px-4 py-3',
    lg: 'h-[52px] text-lg px-5 py-4'
  };

  const baseClasses = `
    relative
    font-openSans 
    font-semibold 
    leading-normal 
    rounded-full 
    flex
    justify-center 
    items-center
    transition-all
    duration-200
    overflow-hidden
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  const gradientClasses = variant === 'primary'
    ? 'bg-gradient-to-b from-[#B55DD9] to-[#5054C9]'
    : 'bg-white';

  const borderGradient = variant === 'primary'
    ? 'linear-gradient(180deg, #FDE7FC 0%, #B87DDE 16.15%, #6E50D1 85.42%, #3E37B4 100%)'
    : 'linear-gradient(180deg, #FDE7FC 0%, #B87DDE 16.15%, #6E50D1 85.42%, #3E37B4 100%)';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${gradientClasses}`}
      style={variant === 'primary' ? {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.17)',
      } : {}}
    >
      {/* Subtle border effect */}
      <div
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          background: borderGradient,
          filter: 'blur(0.5px)',
        }}
      />

      {/* Main button background */}
      <div className={`absolute inset-[1px] rounded-full ${gradientClasses}`} />

      {/* Overlay effect for glass-like appearance */}
      <div
        className="absolute rounded-full"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.15) 100%)',
          mixBlendMode: 'overlay',
          height: '36%',
          top: '8%',
          left: '10px',
          right: '10px',
          borderRadius: '50px',
        }}
      />

      {/* Button content */}
      <span className={`relative flex z-10 space-x-2 justify-center items-center ${variant === 'primary' ? 'text-white' : 'text-[#282529]'}`}>
        {children}
      </span>
    </button>
  );
};

export default GradientButton;