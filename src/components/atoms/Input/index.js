import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

export default function Input({placeholder}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.default}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.default,
    borderRadius: 25,
    marginBottom: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 14,
    color: colors.default,
  },
});
