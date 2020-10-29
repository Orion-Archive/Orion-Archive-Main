import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './client/screens/LoginScreen';
import HomeScreen from './client/screens/HomeScreen';
import DisplayModalComponent from './client/components/DisplayModalComponent';
import InputModalComponent from './client/components/InputModalComponent';

const MainNavigator = createSwitchNavigator({
  Atlas: { screen: InputModalComponent },
  LoginScreen: { screen: LoginScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
