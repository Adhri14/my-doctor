import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, ILLogo} from '../../assets';
import {Button, Gap, Link, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Gap height={40} />
      <Text style={styles.title}>{`Masuk dan mulai\nberkonsultasi`}</Text>
      <Gap height={40} />
      <TextInput title="Email Address" />
      <Gap height={20} />
      <TextInput title="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" />
      <Gap height={40} />
      <Button
        title="Sign In"
        backgroundColor="#0BCAD4"
        color="#fff"
        onPress={() => navigation.replace('MainApp')}
      />
      <Gap height={30} />
      <Link
        title="Create New Account"
        center
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts[600],
    color: '#112340',
  },
});
