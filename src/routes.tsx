import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthProvider } from "contexts/AuthProvider";

import HomeScreen from "screens/HomeScreen";
import CreateAccountScreen from "screens/CreateAccountScreen";
import LoginScreen from "screens/LoginScreen";
import SettingsScreen from "screens/SettingsScreen";
import ContactsScreen from "screens/ContactsScreen";

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

export type ContactsScreenNavigationProps = StackNavigationProp<
  appStackParamList,
  "Contacts"
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
      <AppStack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{ title: "Contatos" }}
      />
    </AppStack.Navigator>
  );
};

const Routes = () => {
  const { authenticatedUser, updateAuthenticatedUser } = useAuthProvider();

  React.useEffect(() => {
    (async () => {
      try {
        const data = await AsyncStorage.getItem(
          "@contatos_de_emergencia/logged"
        );
        const loggedAccount = data ? JSON.parse(data) : null;

        if (loggedAccount === null) return;
        updateAuthenticatedUser(loggedAccount);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      {authenticatedUser ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Routes;
