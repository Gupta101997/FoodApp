import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../SplashScreen/SplashScreen';
import OnbordingScreen from '../../OnbordingScreen/OnbordingScreen';
import Login from '../../LoginScreen.js/Login';
import SignUp from '../../SignupScreen/Signup';
import ForgotPassword from '../../ForgotPassword/ForgotPassword';
import Home from '../../HomeScreen/Home';

const Stack = createNativeStackNavigator()

export default StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="SplashScreen"  component={SplashScreen} />
                <Stack.Screen name="OnbordingScreen" component={OnbordingScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}