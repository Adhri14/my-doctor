import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser, fonts} from '../../../assets';

const HeaderHome = ({name, job}) => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.img} />
      <View style={styles.text}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.job}>{job}</Text>
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  img: {
    width: 48,
    height: 48,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts[600],
    color: '#112340',
  },
  job: {
    fontSize: 12,
    fontFamily: fonts[400],
    color: '#7D8797',
  },
});
