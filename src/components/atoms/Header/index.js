import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../assets';
import Button from '../Button';
import Gap from '../Gap';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button icon type="dark" onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <Gap width={45} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts[600],
    color: '#112340',
  },
});
