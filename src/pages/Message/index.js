import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Message = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text>Page Message</Text>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#112340',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
