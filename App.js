import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './client/screens/LoginScreen';
import HomeScreen from './client/screens/HomeScreen';

// APP WILL RENDER THE LOGINSCREEN FIRST, THEN WILL RENDER HOMESCREEN AFTER SUCCESSFUL OAUTH
const MainNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  Atlas: { screen: HomeScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
