import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from "@/screens/LoginScreen"
import RegisterScreen from "@/screens/RegisterScreen"
import WelcomeScreen from "@/screens/WelcomeScreen"


const AuthStack = createNativeStackNavigator()

function AuthNavigator() {
    return (
        <AuthStack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name='Splash' component={WelcomeScreen} />
            <AuthStack.Screen name='Login' component={LoginScreen} />
            <AuthStack.Screen name='Register' component={RegisterScreen} />
        </AuthStack.Navigator>
    )
}
export default AuthNavigator