import styled from "styled-components";

export const Container = styled.div`
    width: ${({ theme }) => theme.container.normal};
    margin: 0 auto; /* Center the container */

    @media (min-width: 640px) {
        max-width: ${({ theme }) => theme.container.sm};
    }

    @media (min-width: 768px) {
        max-width: ${({ theme }) => theme.container.md};
    }

    @media (min-width: 1024px) {
        max-width: ${({ theme }) => theme.container.lg};
    }

    @media (min-width: 1280px) {
        max-width: ${({ theme }) => theme.container.xl};
    }

    @media (min-width: 1536px) {
        max-width: ${({ theme }) => theme.container["2xl"]};
    }
`;
