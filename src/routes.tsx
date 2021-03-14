import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import LoginScreen from "./screens/LoginScreen";

type stackParamList = {
  Login: { username: string } | undefined;
  CreateAccount: undefined;
};

export type LoginScreenRouteProps = RouteProp<stackParamList, "Login">;

export type LoginScreenNavigationProps = StackNavigationProp<
  stackParamList,
  "Login"
>;

const Stack = createStackNavigator<stackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ title: "Criar Usuário" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
