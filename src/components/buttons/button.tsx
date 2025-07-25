import type { ComponentPropsWithoutRef } from "react";

export interface ButtonType extends ComponentPropsWithoutRef<"button"> {
    classes?: string;
}

const Button = ({ children, classes, ...rest }: ButtonType) => {
    return (
        <button className={`btn ${classes}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
