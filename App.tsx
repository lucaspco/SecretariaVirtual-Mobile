import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/LoginScreen';
import RegisterScreen from './src/pages/RegisterScreen';
import DashboardScreen from './src/pages/DashboardScreen';
import UserProfileScreen from './src/pages/UserProfileScreen';
import UserPaymentsScreen from './src/pages/UserPaymentsScreen';
import UserAppointmentsScreen from './src/pages/UserAppointmentsScreen';
import UserRecordsScreen from './src/pages/UserRecordsScreen';
import UpdateProfileScreen from './src/pages/UpdateProfileScreen';
import UpdateAppointmentsScreen from './src/pages/UpdateAppointmentsScreen';
import HomeScreen from './src/pages/HomeScreen';
import { enableScreens } from 'react-native-screens';

// Habilita o uso de telas nativas para melhor desempenho
enableScreens();

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="UserPayments" component={UserPaymentsScreen} />
          <Stack.Screen name="UserAppointments" component={UserAppointmentsScreen} />
          <Stack.Screen name="UserRecords" component={UserRecordsScreen} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
          <Stack.Screen name="UpdateAppointments" component={UpdateAppointmentsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
