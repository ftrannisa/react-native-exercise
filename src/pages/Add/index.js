import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Add = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Add Screen</Text>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Text>Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;
