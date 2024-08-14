import styled from 'styled-components';

export const LayoutContaienr = styled.div`
    max-width: 118.4rem;
    height: calc(100vh - 10rem);
    margin: 8rem auto;
    padding: 4rem;

    background-color: ${(props) => props.theme.color['gray-800']};
    border-radius: 0.8px;

    display: flex;
    flex-direction: column;
`;
