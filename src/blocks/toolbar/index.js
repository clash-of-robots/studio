import styled from 'styled-components';
import orgSeperator from './seperator';
import orgButton from './button';

export const Seperator = orgSeperator;
export const Button = orgButton;

export default styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.foreground};
  background: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.spacings.small};
`;
