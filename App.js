import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import InitialScreen from './src/screens/InitialScreen'
import SecondScreen from './src/screens/SecondScreen'
import MainScreen from './src/screens/MainScreen'


const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(253, 200, 86)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
  },
  headerShown: false
};

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator 
        initialRouteName="First"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="First" component={InitialScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;


// const navigator = createStackNavigator({  
//   Initial: InitialScreen,
//   Second: SecondScreen,
//   GeneralInfo: GeneralInfoPath

// }, {
//   initialRouteName: 'Initial',
//   defaultNavigationOptions: {
//     headerShown: false,
//     cardStyle: { backgroundColor: '#FDC856' }
//   }  
// }
// );

// export default createAppContainer(navigator);