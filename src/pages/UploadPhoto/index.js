import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser, fonts, IconRemovePhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Foto" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.borderImg}>
          <Image source={DummyUser} style={styles.image} />
          <IconRemovePhoto style={styles.icon} />
        </View>
        <Gap height={26} />
        <Text style={styles.title}>Adhri</Text>
        <Text style={styles.job}>Front End Developer</Text>
      </View>
      <Button
        title="Upload and Continue"
        backgroundColor="#0BCAD4"
        color="#fff"
        onPress={() => navigation.replace('MainApp')}
      />
      <Gap height={30} />
      <Link
        title="Skip for this"
        center
        onPress={() => navigation.replace('MainApp')}
      />
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts[600],
    color: '#112340',
  },
  job: {
    fontSize: 18,
    fontFamily: fonts[400],
    color: '#7D8797',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  borderImg: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    bottom: -4,
    right: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
  },
});
