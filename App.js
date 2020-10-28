import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './client/screens/LoginScreen';
import HomeScreen from './client/screens/HomeScreen';
import ModalComponent from './client/components/ModalComponent';

const MainNavigator = createSwitchNavigator({
  ModalComponent: { screen: ModalComponent },
  Atlas: { screen: HomeScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
