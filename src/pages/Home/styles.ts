import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5.6rem;

        label,
        span,
        input {
            font-size: 1.6rem;
        }
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    color: ${(props) => props.theme.color["gray-100"]};
    font-size: 1.8rem;
    font-weight: bold;
    flex-wrap: wrap;
`;

export const CountdownContainer = styled.div`
    width: 100%;

    font-family: "Roboto Mono", sans-serif;
    font-size: 16rem;
    line-height: 13rem;
    color: ${(props) => props.theme.color["gray-100"]};

    display: flex;
    gap: 1.6rem;

    span {
        background-color: ${(props) => props.theme.color["gray-700"]};
        padding: 3.2rem 1.6rem;
        border-radius: 8px;
        display: block;
        text-align: center;
        flex: 1;
    }

    .text-lg {
        font-size: 8rem;
    }
`;

export const Separator = styled.div`
    padding: 3.2 rem 0;
    color: ${(props) => props.theme.color["green-500"]};

    width: 6.4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;

    font-size: 15rem;
`;
