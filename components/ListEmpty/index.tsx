
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../theme/theme';

import {
  EmptyContainer,
  EmptyMessage,
} from './styles';

export function ListEmpty() {
  return (
    <EmptyContainer>
      <Ionicons name="file-tray-outline" size={56} color={theme.colors.empty} />
      <EmptyMessage>
        Nenhum item encontrado.
      </EmptyMessage>
    </EmptyContainer>
  );
}
