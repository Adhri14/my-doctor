import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../assets';

const Link = ({title, center, onPress}) => {
  return (
    <Text style={styles.title(center)} onPress={onPress}>
      {title}
    </Text>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: center => ({
    fontFamily: fonts[400],
    fontSize: center ? 20 : 16,
    color: '#7D8797',
    textAlign: center ? 'center' : 'left',
    textDecorationLine: 'underline',
  }),
});
