import React from 'react';
import {StyleSheet, View} from 'react-native';
import {fonts} from '../../assets';
import {Button, Gap, Header, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <Gap height={40} />
      <TextInput title="Full Name" />
      <Gap height={20} />
      <TextInput title="Email Address" />
      <Gap height={20} />
      <TextInput title="Password" secureTextEntry />
      <Gap height={40} />
      <Button
        title="Continue"
        backgroundColor="#0BCAD4"
        color="#fff"
        onPress={() => navigation.replace('UploadPhoto')}
      />
    </View>
  );
};

export default SignUp;

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
