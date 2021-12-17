import styled from "styled-components";

export const Container = styled.div`
    a  {
        color: ${props => props.theme.colors.primary};
    }

    .MuiCard-root {
        background: ${props => props.theme.colors.darkerbackground};
        
        h6, p {
            color: ${props => props.theme.colors.text};
        }
    }

    #sentinela {
        width: 100px;
        height: 150px
    }
`;