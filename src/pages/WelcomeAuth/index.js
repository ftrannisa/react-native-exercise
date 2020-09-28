import React from 'react';
import {Image, Text, View} from 'react-native';
import {logoWelcome} from '../../assets';
import {colors} from '../../utils';
import ActionButton from './ActionButton';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.wrapper.page}>
      <Image source={logoWelcome} style={styles.wrapper.img} />
      <Text style={styles.text.welcome}>
        Welcome to Fitri's Navigation Assignment
      </Text>
      <ActionButton
        desc="Silakan masuk jika Anda sudah memiliki akun."
        title="Masuk"
        onPress={() => handleGoTo('Login')}
      />
      <ActionButton
        desc="Silakan daftar jika Anda belum memiliki akun."
        title="Daftar"
        onPress={() => handleGoTo('Register')}
      />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white',
    },
    img: {
      width: 219,
      height: 117,
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 50,
    },
  },
};

export default WelcomeAuth;
