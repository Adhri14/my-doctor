import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fonts, ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILGetStarted} style={styles.background}>
        <View style={styles.container}>
          <ILLogo />
          <Text style={styles.title}>
            {`Konsultasi dengan\ndokter jadi lebih\nmudah & fleksibel`}
          </Text>
          <View>
            <Button
              backgroundColor="#0BCAD4"
              color="#fff"
              title="Get Started"
              onPress={() => navigation.navigate('SignUp')}
            />
            <Gap height={20} />
            <Button
              backgroundColor="#fff"
              color="#112340"
              title="Sign In"
              onPress={() => navigation.replace('SignIn')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 40,
    paddingBottom: 44,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontFamily: fonts[600],
  },
});
