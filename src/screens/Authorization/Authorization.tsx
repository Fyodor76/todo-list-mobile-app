import React from 'react';
import {Button, Text, View} from 'react-native';
import {EntryScreenProps} from '../../../App';
export const Authorization = ({navigation}: EntryScreenProps) => {
  return (
    <View>
      <Text>Авторизация</Text>
      <Text>Добро пожаловать в MWProductivity</Text>
      <Button title="Go to Entry" onPress={() => navigation?.navigate('Registration')} />
    </View>
  );
};
