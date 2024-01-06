import {NavigationContainer} from '@react-navigation/native';
import {navigationArray} from './navigation-values';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {navigationArray?.map((route) => (
          <Stack.Screen
            key={route.route}
            name={route.route}
            component={route.component}
            options={route?.options || {}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
