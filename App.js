import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './client/screens/LoginScreen';
import HomeScreen from './client/screens/HomeScreen';

const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Atlas: { screen: HomeScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
