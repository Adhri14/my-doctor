import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import {fonts} from '../../../assets';
import Gap from '../Gap';

const TextInput = ({title, secureTextEntry}) => {
  const [border, setBorder] = useState('#E9E9E9');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Gap height={6} />
      <TextInputRN
        style={styles.input(border)}
        onFocus={() => {
          setBorder('#0066CB');
        }}
        onBlur={() => {
          setBorder('#E9E9E9');
        }}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: fonts[400],
    color: '#7D8797',
  },
  input: border => ({
    padding: 12,
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: fonts[400],
    color: '#112340',
  }),
});
