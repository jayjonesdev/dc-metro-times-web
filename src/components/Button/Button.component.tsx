import React from 'react';
import './button.styles.css';

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary';
  dataDropDownToggle?: string;
  triggerRef?: React.MutableRefObject<any>;
}

const Button: React.FC<IButton> = ({
  variant = 'primary',
  children,
  type = 'button',
  className = '',
  dataDropDownToggle,
  triggerRef,
  id,
  onClick,
}) => (
  <button
    id={id}
    type={type}
    data-dropdown-toggle={dataDropDownToggle}
    ref={triggerRef}
    className={`button ${variant} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
