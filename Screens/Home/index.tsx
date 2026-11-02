
import { useState } from 'react';
import { FlatList } from 'react-native';

import { CardItem } from '../../components/CardItem';
import { ListEmpty } from '../../components/ListEmpty';

import {
  ScreenContainer,
  Header,
  Title,
  Subtitle,
  ActionButton,
  ActionButtonText,
} from './styles';

interface Item {
  id: string;
  title: string;
  description: string;
}

// GPT
const initialItems: Item[] = [
  {
    id: '1',
    title: 'React Native',
    description: 'Desenvolvimento de aplicativos mobile utilizando React Native.',
  },
  {
    id: '2',
    title: 'TypeScript',
    description: 'Tipagem estática para deixar o código mais seguro e organizado.',
  },
  {
    id: '3',
    title: 'Styled-Components',
    description: 'Estilização dos componentes utilizando CSS-in-JS.',
  },
  {
    id: '4',
    title: 'FlatList',
    description: 'Renderização eficiente de listas no React Native.',
  },
];

export default function Home() {
  const [items, setItems] = useState<Item[]>(initialItems);

  function toggleList() {
    setItems(currentItems =>
      currentItems.length > 0 ? [] : initialItems
    );
  }

  return (
    <ScreenContainer>
      <Header>
        <Title>Minha Lista</Title>
      </Header>

      <ActionButton onPress={toggleList}>
        <ActionButtonText>
          {items.length > 0 ? 'Esvaziar lista' : 'Carregar lista'}
        </ActionButtonText>
      </ActionButton>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CardItem
            title={item.title}
            description={item.description}
          />
        )}
        ListEmptyComponent={ListEmpty}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  );
}
