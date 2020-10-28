import React from "react";
import env from "../config/env";
import { Text, View, StyleSheet, Button, Image } from "react-native";
// import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-community/google-signin";
import * as Google from "expo-google-app-auth";

const iosClientId = env.IOS_CLIENT_ID;

function LoginScreen(props) {
	const signInWithGoogle = async () => {
		try {
			const result = await Google.logInAsync({
				iosClientId: iosClientId,
				scopes: ["profile", "email"],
			});

			if (result.type === "success") {
				console.log("LoginScreen.js.js 21 | ", result.user.givenName);
				this.props.navigation.navigate("Profile", {
					username: result.user.givenName,
				}); //after Google login redirect to Profile
				return result.accessToken;
			} else {
				return { cancelled: true };
			}
		} catch (e) {
			console.log("LoginScreen Error | Error with login", e);
			return { error: true };
		}
	};

	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={{
					width: 150,
					height: 150,
					uri: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Orion_logo.png",
				}}
			/>
			<Text style={styles.title}>Orion Archive</Text>
			<Text style={styles.signin}>Sign In</Text>
			<Button title="Login with Google" onPress={signInWithGoogle} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// FLEX: WILL GROW VERTICALLY AND HORIZONTALLY TO TAKE UP FULL SCREEN
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 35,
	},
	signin: {
		fontSize: 35,
	},
});

export default LoginScreen;
