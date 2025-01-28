import { twMerge } from "tailwind-merge";

export default function InputContainer({ children, className }: React.ComponentPropsWithRef<"p">) {
    return <p className={twMerge( "flex flex-col", className)}>{children}</p>;
}
