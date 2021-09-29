import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, ILLogo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts[600],
    color: '#112340',
    marginTop: 20,
    // fontFamily: 'Nunito-SemiBold',
  },
});
