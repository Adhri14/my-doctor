import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../assets';
import {Gap} from '../../atoms';

const CardDoctor = ({children, category}) => {
  return (
    <View style={styles.container}>
      {children}
      <Gap height={28} />
      <Text style={styles.title}>Saya Butuh</Text>
      <Text style={styles.desc}>{category}</Text>
    </View>
  );
};

export default CardDoctor;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#EDFCFD',
    width: 100,
    height: 130,
    marginRight: 20,
  },
  title: {
    fontSize: 12,
    fontFamily: fonts[300],
    color: '#112340',
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts[600],
    color: '#112340',
  },
});
