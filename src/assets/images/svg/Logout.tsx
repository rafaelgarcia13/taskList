import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { SvgProps } from 'react-native-svg/src/elements/Svg';

const Logout: React.FC<SvgProps> = ({ width, height, fill }) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
    <G stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
      <Path d="M21 12h-8M18 15l2.913-2.913v0a.123.123 0 0 0 0-.174v0L18 9M16 5v-.5 0A1.5 1.5 0 0 0 14.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9.5a1.5 1.5 0 0 0 1.5-1.5v0-.5" />
    </G>
  </Svg>
);

Logout.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000000',
};

export { Logout };
