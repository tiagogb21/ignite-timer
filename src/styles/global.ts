import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    ol,
    ul {
        list-style: none;
    }

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        display: flex;
        vertical-align: middle;
    }

    img,
    video {
        max-width: 100%;
        height: auto;
    }

    *,
    ::before,
    ::after {
        border-width: 0;
        border-style: solid;
        border-color: theme('borderColor.DEFAULT', currentColor);
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.color["green-500"]};
    }

    body {
        background-color: ${(props) => props.theme.color["gray-900"]};
        color: ${(props) => props.theme.color["white"]};
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
