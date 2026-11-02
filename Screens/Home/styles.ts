
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.large};
`;

export const Header = styled.View`
  margin-bottom: ${theme.spacing.large};
`;

export const Title = styled.Text`
  color: ${theme.colors.text};
  font-size: 26px;
  font-weight: bold;
`;

export const ActionButton = styled.Pressable`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.medium};
  border-radius: ${theme.borderRadius.medium};
  align-items: center;
  margin-bottom: ${theme.spacing.large};
`;

export const ActionButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
`;
