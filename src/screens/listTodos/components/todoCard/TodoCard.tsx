import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { CheckCircle } from '../../../../assets/images/svg/CheckCircle';
import { Trash } from '../../../../assets/images/svg/Trash';

import { Container, Title, IconsView, TitleView } from './styles';

interface ITodoCardProps {
  title: string;
  isCompleted: boolean;
}

const TodoCard: React.FC<ITodoCardProps> = ({ title, isCompleted }) => {
  const theme = useTheme();

  return (
    <Container>
      <TitleView>
        <Title numberOfLines={4}>{title}</Title>
      </TitleView>
      <IconsView>
        <TouchableOpacity>
          <CheckCircle
            width={35}
            height={35}
            fill={isCompleted ? theme.colors.completed : theme.colors.disabled}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Trash width={35} height={35} />
        </TouchableOpacity>
      </IconsView>
    </Container>
  );
};

export { TodoCard };
