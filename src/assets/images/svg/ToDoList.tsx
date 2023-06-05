import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { SvgProps } from 'react-native-svg/src/elements/Svg';

const ToDoList: React.FC<SvgProps> = ({ width, height, fill }) => (
  <Svg width={width} height={height} viewBox="0 0 32 32" fill={fill}>
    <Path d="M11 30H5c-1.7 0-3-1.3-3-3v-6c0-1.7 1.3-3 3-3h6c1.7 0 3 1.3 3 3v6c0 1.7-1.3 3-3 3zM29 6H17c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.4 1-1 1zM24 10h-7c-.6 0-1-.4-1-1s.4-1 1-1h7c.6 0 1 .4 1 1s-.4 1-1 1zM29 22H17c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.4 1-1 1zM24 26h-7c-.6 0-1-.4-1-1s.4-1 1-1h7c.6 0 1 .4 1 1s-.4 1-1 1zM11 2H5C3.3 2 2 3.3 2 5v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm.7 4.7-3 3c-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-2-2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L8 7.6l2.3-2.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4z" />
  </Svg>
);

ToDoList.defaultProps = {
  width: 140,
  height: 140,
  fill: '#FFFFFF',
};

export { ToDoList };
