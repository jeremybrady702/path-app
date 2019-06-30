import React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
export function Baumans(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'baumans'}]} />
  )
}
