import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import InitialScreen from './src/screens/InitialScreen'


const navigator = createStackNavigator({  
  Initial: InitialScreen

}, {
  initialRouteName: 'Initial',
  defaultNavigationOptions: {
    headerShown: false,
    cardStyle: { backgroundColor: '#FDC856' }
  }  
}
);

export default createAppContainer(navigator);