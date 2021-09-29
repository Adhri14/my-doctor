import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts} from '../../../assets';
import IconOnly from './IconOnly';

const Button = ({backgroundColor, color, title, onPress, icon, type}) => {
  if (icon) {
    return (
      <TouchableOpacity style={styles.buttonIcon} onPress={onPress}>
        <IconOnly type={type} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.button(backgroundColor)} onPress={onPress}>
      <Text style={styles.text(color)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: backgroundColor => ({
    padding: 10,
    borderRadius: 10,
    backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: color => ({
    fontSize: 18,
    fontFamily: fonts[600],
    color,
  }),
  buttonIcon: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
