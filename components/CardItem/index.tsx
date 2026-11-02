
import { CardContainer, Title, Description } from './styles';

interface CardItemProps {
  title: string;
  description: string;
}

export function CardItem({ title, description }: CardItemProps) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
}
