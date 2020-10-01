import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

// import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "mobx-react";
import store from "./src/store/store";

import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
// import Login from "./src/screens/loginScreen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Signup from "./src/screens/register/SignUp";
import Splash from "./src/screens/splash/Splash";
import Login from "./src/screens/loginScreen/Login";
import blow from "./src/screens/splash/blow";
import * as SplashScreen from "expo-splash-screen";
import Student from "./src/screens/dashboard/student/Student";
import Teacher from "./src/screens/dashboard/Teacher/Teacher";
const Stack = createStackNavigator();

class App extends Component {
  state = { isReady: false };
  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);

    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    } else {
      return (
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen
                name="Teacher_dashboard"
                component={Teacher}
                options={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                }}
              />
              <Stack.Screen
                name="student_dashboard"
                component={Student}
                options={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                }}
              />
              <Stack.Screen
                name="blow"
                component={blow}
                options={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forScaleFromCenterAndroid,
                }}
              />
              <Stack.Screen
                name="splash"
                options={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forScaleFromCenterAndroid,
                }}
                component={Splash}
              />
              <Stack.Screen name="signup" component={Signup} />
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      );
    }
  }
}

export default App;
