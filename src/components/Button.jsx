import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  disabled = false,
  className = '',
  ...rest
}) {
  const baseStyles =
    'font-medium transition-all duration-300 font-[Inter] inline-flex items-center justify-center gap-2 whitespace-nowrap';

  const variantStyles = {
    primary:
      'bg-[#9d8b7e] text-[#faf8f3] hover:bg-[#6b5d52] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary:
      'border-2 border-[#9d8b7e] text-[#9d8b7e] hover:bg-[#f5f1eb] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    ghost:
      'text-[#9d8b7e] hover:text-[#6b5d52] hover:underline disabled:opacity-50 disabled:cursor-not-allowed',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      {...rest}
    >
      {children}
    </button>
  );
}