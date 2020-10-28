
import React from "react";
import LoginScreen from "./client/screens/LoginScreen";
import HomeScreen from "./client/screens/HomeScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

// export default function App() {
// 	return <LoginScreen />;
// }

const MainNavigator = createSwitchNavigator({
	Login: { screen: LoginScreen },
	Atlas: { screen: HomeScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
