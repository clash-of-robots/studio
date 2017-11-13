import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: ${({ maxWidth }) => maxWidth};
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.backgroundDarker};
`;

const Header = styled.div`
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.text.body.family};
  font-size: ${({ theme }) => theme.text.body.size};
  background: ${({ theme }) => theme.colors.backgroundDarker};
  padding: ${({ theme }) => theme.spacings.small};
`;

const Content = styled.div`
  background: red;
  flex: 1;
  font-family: ${({ theme }) => theme.text.body.family};
  font-size: ${({ theme }) => theme.text.body.size};
  color: ${({ theme }) => theme.colors.foreground};
  background: ${({ theme }) => theme.colors.backgroundDark};
`;

export default ({
  title,
  children,
  maxWidth,
}) => (
  <Wrapper maxWidth={maxWidth}>
    <Header>{title}</Header>
    <Content>{children}</Content>
  </Wrapper>
)
