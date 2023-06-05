import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { SvgProps } from 'react-native-svg/src/elements/Svg';

const SadFace: React.FC<SvgProps> = ({ width, height, fill }) => (
  <Svg fill="none" viewBox="0 0 20 20" width={width} height={height}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16 8a2 2 0 1 1-3.999.001A2 2 0 0 1 16 8M6 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 6 10m8.893 5.164c.117.599-.38 1.251-.991 1.251H6.098c-.611 0-1.108-.755-.991-1.354 1.007-5.138 8.779-5.034 9.786.103M10 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-18C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0"
    />
  </Svg>
);

SadFace.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000000',
};

export { SadFace };
