import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconDoctorActive,
  IconDoctor,
  IconMessages,
  IconMessagesActive,
  IconHospitals,
  IconHospitalsActive,
} from '../../../assets';

const TabItem = ({onPress, onLongPress, isFocused, label}) => {
  const Icon = () => {
    switch (label) {
      case 'Doctor':
        return isFocused ? <IconDoctorActive /> : <IconDoctor />;
      case 'Message':
        return isFocused ? <IconMessagesActive /> : <IconMessages />;
      case 'Hospital':
        return isFocused ? <IconHospitalsActive /> : <IconHospitals />;
      default:
        return isFocused ? <IconDoctorActive /> : <IconDoctor />;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={{color: isFocused ? '#0BCAD4' : '#495A75', marginTop: 4}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
