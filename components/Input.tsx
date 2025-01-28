import { twMerge } from "tailwind-merge";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isTextarea?: false;
};

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  isTextarea: true; 
};

type CombinedProps = InputProps | TextareaProps;

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, CombinedProps>(
  (props, ref) => {
    const { isTextarea, className, ...rest } = props;

    if (isTextarea) {
      return (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={twMerge("rounded-sm p-2 resize-none", className)}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      );
    }

    return (
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        className={twMerge("rounded-sm p-2", className)}
        {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
