import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {fonts, ILCatObat, ILCatPsikiater, ILCatUmum} from '../../assets';
import {CardDoctor, HeaderHome, Gap} from '../../components';

const Home = () => {
  new Date().getFullYear;
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <SafeAreaView style={styles.page}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.container}>
            <HeaderHome name="Adhri" job="Front End Developer" />
            <Gap height={30} />
            <Text
              style={
                styles.title
              }>{`Mau konsultasi dengan\nsiapa hari ini?`}</Text>
            <Gap height={16} />
            <View style={styles.row}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Gap width={16} />
                <CardDoctor category="dokter umum">
                  <ILCatUmum />
                </CardDoctor>
                <CardDoctor category="dokter psikiater">
                  <ILCatPsikiater />
                </CardDoctor>
                <CardDoctor category="farmasi">
                  <ILCatObat />
                </CardDoctor>
                <CardDoctor category="dokter umum">
                  <ILCatUmum />
                </CardDoctor>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#112340',
  },
  scroll: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 60,
    // paddingHorizontal: 16,
    paddingBottom: 30,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts[600],
    color: '#112340',
    marginHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
  },
});
