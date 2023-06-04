import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { SvgProps } from 'react-native-svg/src/elements/Svg';

const PlusCircle: React.FC<SvgProps> = ({ width, height, fill }) => (
  <Svg fill="none" viewBox="0 0 24 24" width={width} height={height}>
    <G stroke={fill} strokeWidth={2}>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M12 9v6" />
      <Path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </G>
  </Svg>
);

PlusCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000000',
};

export { PlusCircle };
