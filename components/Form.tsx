import { twMerge } from "tailwind-merge";

export default function Form({ action, children, className, ...props }: React.ComponentPropsWithRef<"form">) {
    return (
        <form
            action={action}
            className={twMerge("bg-stone-700 p-4 rounded-lg flex-col gap-3 pt-4", className)}
            {...props}
        >
            {children}
        </form>
    );
}
