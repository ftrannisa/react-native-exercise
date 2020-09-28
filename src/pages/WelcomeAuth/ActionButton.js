import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../utils';
import {Button} from '../../components';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {
    marginBottom: 20,
    maxWidth: 225,
  },
  text: {
    desc: {
      fontSize: 10,
      color: colors.text.default,
      textAlign: 'center',
      marginBottom: 5,
    },
  },
};

export default ActionButton;
