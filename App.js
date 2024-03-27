import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/container/loginContainer';
import ForgotPassword from './app/container/Forgotpassword';
import Onboarding from './app/container/onBoarding';
import HomeScreen from './app/container/HomeScreen';
import SplashScreen from './app/container/Splashscreen';
import SignupConatiner from './app/container/SignupContainer';
import VerifyOtp from './app/components/VerifyOtpcomponent';
import BeginComponent from './app/components/BeginComponents';
import Categories from './app/components/categories';
import MostVisited from './app/components/mostVisited';
import Services from './app/components/services';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Onboarding" component={Onboarding}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}  options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScren" component={HomeScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="SignupConatiner" component={SignupConatiner}  options={{ headerShown: false }}/>
        <Stack.Screen name="VerifyOtp" component={VerifyOtp}  options={{ headerShown: false }}/>
        <Stack.Screen name="BeginComponent" component={BeginComponent}  options={{ headerShown: false }}/>
        <Stack.Screen name="Categories" component={Categories}  options={{ headerShown: false }}/>
        <Stack.Screen name="MostVisited" component={MostVisited}  options={{ headerShown: false }}/>
        <Stack.Screen name="Services" component={Services}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

