import styled from "styled-components";

export const Container = styled.div`
    a, svg, button {
      color: ${props => props.theme.colors.primary};
    }
  `;