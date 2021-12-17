import styled from "styled-components";

export const Container = styled.div`
    a  {
        color: ${props => props.theme.colors.primary};
    }

    .MuiCard-root {
        background: ${props => props.theme.colors.darkerbackground};
        width: 800px;
        h6, p {
            color: ${props => props.theme.colors.text}
        }
        .MuiCardMedia-media{
            width: 345px;
            height: 345px;
        }
    }

    .PrivateTabIndicator-root-15, hr {
        background: ${props => props.theme.colors.primary}
    }

    button, p {
        color: ${props => props.theme.colors.text}
    }

`;