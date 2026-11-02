
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const CardContainer = styled.View`
  background-color: ${theme.colors.surface};
  padding: ${theme.spacing.medium};
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid ${theme.colors.border};
  margin-bottom: ${theme.spacing.medium};
`;

export const Title = styled.Text`
  color: ${theme.colors.text};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${theme.spacing.small};
`;

export const Description = styled.Text`
  color: ${theme.colors.secondaryText};
  font-size: 14px;
`;
