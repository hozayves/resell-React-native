import ListingEditScreen from "@/screens/ListingEditScreen"
import ListingScreen from "@/screens/ListingScreen"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View } from "react-native"
import defaultStyles from '@/constants/styles'
import AccountNavigator from "./AccountNavigator"
import FeedNavigator from "./FeedNavigator"
import NewListingButton from "./NewListingButton"
import routes from '@/navigation/routes'

const Stack = createBottomTabNavigator()

function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName='Feed' screenOptions={{ headerShown: false, tabBarActiveTintColor: defaultStyles.Colors.primary, }}>
            <Stack.Screen
                name='Feed'
                component={FeedNavigator}
                options={{
                    title: 'Feed', tabBarIcon: ({ focused, size, color }) => {
                        return <MaterialCommunityIcons name='home' size={size} color={color} />
                    },
                }}
            />
            <Stack.Screen
                name='ListingEdit'
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTINGEDIT)} />,
                })}
            />
            <Stack.Screen
                name='Account'
                component={AccountNavigator}
                options={{
                    title: 'Account', tabBarIcon: ({ focused, size, color }) => {
                        return <MaterialCommunityIcons name='account' size={size} color={color} />
                    }
                }}
            />
        </Stack.Navigator>
    )
}
export default MainNavigator