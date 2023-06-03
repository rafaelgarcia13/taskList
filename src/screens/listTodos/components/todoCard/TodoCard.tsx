import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CheckCircle } from '../../../../assets/images/svg/CheckCircle';
import { Trash } from '../../../../assets/images/svg/Trash';

import { Container, Title, IconsView, TitleView } from './styles';

interface ITodoCardProps {
  title: string;
  isCompleted: boolean;
}

const TodoCard: React.FC<ITodoCardProps> = ({ title, isCompleted }) => {
  console.log(isCompleted);
  return (
    <Container>
      <TitleView>
        <Title numberOfLines={4}>{title}</Title>
      </TitleView>
      <IconsView>
        <TouchableOpacity>
          <CheckCircle width={35} height={35} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Trash width={35} height={35} />
        </TouchableOpacity>
      </IconsView>
    </Container>
  );
};

export { TodoCard };
