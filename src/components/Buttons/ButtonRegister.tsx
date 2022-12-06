import { PropsWithChildren } from "react";
import { Button } from "./Button";

export const ButtonRegister = ({
    children,
    className = "",
    ...props
}: PropsWithChildren<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>) => {
    const registerButtonClass = [className, "buttonRegister"].join(" ");
    return (
        <Button {...props} className={registerButtonClass}>
            {children}
        </Button>
    );
};
