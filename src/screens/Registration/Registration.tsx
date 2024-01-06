import React from 'react';
import {Button, Text, View} from 'react-native';
import {EntryScreenProps} from '../../../App';
export const Registration = ({navigation}: EntryScreenProps) => {
  return (
    <View>
      <Text>Регистрация</Text>
      <Text>Добро пожаловать в MWProductivity</Text>
      <Text>Если у вас нет аккаунта, то зарегестрируйтесь</Text>
    </View>
  );
};
