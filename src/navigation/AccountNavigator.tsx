import { createStackNavigator } from '@react-navigation/stack'

import MessagesScreen from "@/screens/MessagesScreen"
import MyAccount from "@/screens/MyAccount"


const Stack = createStackNavigator()

function AccountNavigator() {
    return (
        <Stack.Navigator initialRouteName='account'>
            <Stack.Screen name='account' component={MyAccount} options={{ headerShown: false }} />
            <Stack.Screen name='message' component={MessagesScreen} options={{
                title: 'Messages',
                animation: 'fade_from_right'
            }} />
        </Stack.Navigator>
    )
}

export default AccountNavigator