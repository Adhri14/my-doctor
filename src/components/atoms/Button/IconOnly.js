import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark, IconBackLight} from '../../../assets';

const IconOnly = ({type}) => {
  if (type === 'dark') {
    return <IconBackDark />;
  }
  return <IconBackLight />;
};

export default IconOnly;

const styles = StyleSheet.create({});
