import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary";
}

export const Button = ({
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: "bg-pink-600 text-white hover:bg-pink-700",
  };

  const _className = twMerge(
    variantClasses[variant],
    "appearance-none rounded-lg p-2 text-sm font-medium shadow transition-all",
    className
  );

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  );
};
