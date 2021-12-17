import styled from 'styled-components';

export const Container = styled.div`

    .MuiPaper-root, .MuiPaper-root button {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.primary};
    }
    .MuiPaper-root button {
        margin: 0 auto;
    }
`;