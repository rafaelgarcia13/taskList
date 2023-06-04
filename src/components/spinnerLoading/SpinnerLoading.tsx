import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { LoadingContainer } from './styles';

interface ISpinnerLoadingProps {
  marginTop?: number;
}

const SpinnerLoading: React.FC<ISpinnerLoadingProps> = ({ marginTop }) => {
  const theme = useTheme();
  return (
    <LoadingContainer marginTop={marginTop}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </LoadingContainer>
  );
};

SpinnerLoading.defaultProps = {
  marginTop: 0,
};

export { SpinnerLoading };
