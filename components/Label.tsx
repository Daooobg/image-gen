import { twMerge } from "tailwind-merge";

export default function Label({ htmlFor, className, children }: React.ComponentPropsWithRef<"label">) {
    return (
        <label
            className={twMerge("font-bold mb-1 text-left text-xs uppercase text-stone-200", className)}
            htmlFor={htmlFor}
        >
            {children}
        </label>
    );
}
