import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { SvgProps } from 'react-native-svg/src/elements/Svg';

const CheckCircle: React.FC<SvgProps> = ({ width, height }) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm4.64 6.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.44.1l-3-2.727a1 1 0 0 1 1.345-1.48l2.227 2.025 4.332-5.198a1 1 0 0 1 1.408-.128Z"
      clipRule="evenodd"
    />
  </Svg>
);

CheckCircle.defaultProps = {
  width: 24,
  height: 24,
};

export { CheckCircle };
