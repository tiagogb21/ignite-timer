import styled from 'styled-components';
// componentes estilizados

export type ButtonVariant = "primary" | "secondary" | "success" | "danger";

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    "primary": 'purple',
    "secondary": 'orange',
    "success": 'green',
    "danger": 'red',
}

// Por ser um componente, precisa começar com letra maiúscula
export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    padding: 1rem 2rem;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    cursor: pointer;
    font-weight: bold;

    transition: opacity 0.3s ease-in-out;

    color: ${(props) => props.theme.color.white};
    // controlando componente global
    background-color: ${(props) => props.theme.color['green-500']};

    // passando props
    /* ${(props) => `background-color: ${buttonVariants[props.variant]}`} */

    &:not(:disabled):hover {
        opacity: 0.9;
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;
