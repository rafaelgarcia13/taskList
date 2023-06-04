import styled from 'styled-components/native';

interface ILoadingContainerProps {
  marginTop?: number;
}

const LoadingContainer = styled.View<ILoadingContainerProps>`
  margin-top: ${(props) => props.marginTop}px;
`;

export { LoadingContainer };
