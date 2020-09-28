import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {logoWelcome} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 3000);
  });
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={logoWelcome}
        style={{
          width: '100%',
          height: 117,
          marginBottom: 30,
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default Splash;
