import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { useAuthProvider } from "contexts/AuthProvider";

import HomeScreen from "screens/HomeScreen";
import CreateAccountScreen from "screens/CreateAccountScreen";
import LoginScreen from "screens/LoginScreen";
import SettingsScreen from "screens/SettingsScreen";

type authStackParamList = {
  Login: undefined;
  CreateAccount: undefined;
};

type appStackParamList = {
  Home: undefined;
  Settings: undefined;
  Contacts: undefined;
};

export type LoginScreenNavigationProps = StackNavigationProp<
  authStackParamList,
  "Login"
>;

export type CreateAccountScreenNavigationProps = StackNavigationProp<
  authStackParamList,
  "CreateAccount"
>;

export type HomeScreenNavigationProps = StackNavigationProp<
  appStackParamList,
  "Home"
>;

const AuthStack = createStackNavigator<authStackParamList>();
const AppStack = createStackNavigator<appStackParamList>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{ title: "Criar Usuário" }}
      />
    </AuthStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Contatos de Emergência" }}
      />
      <AppStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Configurações" }}
      />
    </AppStack.Navigator>
  );
};

const Routes = () => {
  const { authenticatedUser, updateAuthenticatedUser } = useAuthProvider();

  return (
    <NavigationContainer>
      {authenticatedUser ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Routes;
