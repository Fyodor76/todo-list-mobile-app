import * as React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

/*
export default function App() {
  return (
    <NavigationContainer>
      <View className='flex-1 items-center justify-center bg-white'>
        <Text>Open up App.tsx to start working on your!</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
*/

export type RootStackParamList = {
    Home: undefined;
    Details: { itemId: number; otherParam?: string }; // Specify the types of parameters expected
};

// Define navigation prop type for HomeScreen
type HomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Home'
>;

// Define navigation prop type for DetailsScreen
type DetailsScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Details'
>;

// Define route prop type for DetailsScreen
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

// Props for HomeScreen
type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
};

// Props for DetailsScreen
type DetailsScreenProps = {
    route?: DetailsScreenRouteProp;
    navigation?: DetailsScreenNavigationProp;
};
function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({
  route,
  navigation,
}: DetailsScreenProps) {
  const { itemId, otherParam } = route?.params || {};
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation?.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation?.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation?.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();


function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default App;
