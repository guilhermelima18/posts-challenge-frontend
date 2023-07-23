/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentPropsWithoutRef } from "react";
import { Control, Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  error?: boolean;
  errorMessage?: string;
  name: string;
  control: Control | any;
}

export const Input = ({
  className,
  error,
  errorMessage,
  name,
  control,
  ...props
}: InputProps) => {
  const inputClassName = twMerge(
    "rounded-lg border border-pink-400 bg-white p-2 text-sm font-normal text-primaryDarker placeholder-black placeholder-opacity-50 outline-none transition-all",
    error ? "border-red-500" : "focus:ring-2 focus:ring-pink-400",
    className
  );

  return (
    <div className="flex flex-col">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <input
            className={inputClassName}
            value={value}
            onChange={onChange}
            {...props}
          />
        )}
      />
      {error && errorMessage && (
        <span className="mt-1 text-xs text-red-400">{errorMessage}</span>
      )}
    </div>
  );
};
