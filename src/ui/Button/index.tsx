import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "success" | "danger";
    children: ReactNode;
}

export const Button = ({ variant = "primary", type = "button", disabled=false, children }: ButtonProp) => {
    return (
        // ao utilizar styled components, passamos o nome da propriedade
        <ButtonContainer variant={variant} type={type} disabled={disabled}>
            {children}
        </ButtonContainer>
    );
};
