import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children,disabled, style }) => {
  const { buttonStyle, textStyle } = styles;

  return (
  <TouchableOpacity disabled={disabled} style={style} onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#8366b2',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };