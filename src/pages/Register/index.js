import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ActionButton, Button, Input} from '../../components';
import {logoWelcome} from '../../assets';
import {colors} from '../../utils';

const Register = ({navigation}) => {
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
      <Input placeholder="Nama Lengkap" />
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
      {/* button-nya belum */}
      <Button title="Daftar" onPress={() => handleGoTo('Home')}></Button>
      <Text
        style={{textAlign: 'center', fontSize: 11, marginTop: 10}}
        onPress={() => handleGoTo('Login')}>
        Sudah punya akun? Masuk
        <Text style={{fontWeight: 'bold'}}> di sini</Text>
      </Text>
    </View>
  );
};

export default Register;
