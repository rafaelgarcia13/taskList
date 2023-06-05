import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { LoadingContainer } from './styles';

interface ISpinnerLoadingProps {
  marginTop?: number;
  size?: number | 'large' | 'small' | undefined;
}

const SpinnerLoading: React.FC<ISpinnerLoadingProps> = ({ marginTop, size }) => {
  const theme = useTheme();
  return (
    <LoadingContainer marginTop={marginTop}>
      <ActivityIndicator size={size} color={theme.colors.primary} />
    </LoadingContainer>
  );
};

SpinnerLoading.defaultProps = {
  marginTop: 0,
  size: 'large',
};

export { SpinnerLoading };
