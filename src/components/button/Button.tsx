import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = ({ variant, ...props }: ButtonProps) => {
  return <button {...props} />;
};

export default Button;
