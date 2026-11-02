
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.large};
`;

export const EmptyMessage = styled.Text`
  color: ${theme.colors.secondaryText};
  font-size: 16px;
  margin-top: ${theme.spacing.medium};
  text-align: center;
`;
