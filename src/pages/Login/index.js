import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ActionButton, Button, Input} from '../../components';
import {logoWelcome} from '../../assets';
import {colors} from '../../utils';

const Login = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View
      style={{
        padding: 30,
        backgroundColor: 'white',
        flex: 1,
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
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
      <Button title="Masuk" onPress={() => handleGoTo('Home')}></Button>
      <Text
        style={{textAlign: 'center', fontSize: 11, marginTop: 10}}
        onPress={() => handleGoTo('Register')}>
        Belum punya akun? Daftar
        <Text style={{fontWeight: 'bold'}}> di sini</Text>
      </Text>
    </View>
  );
};

export default Login;
