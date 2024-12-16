import ListDetailsScreen from "@/screens/ListDetailsScreen"
import ListingScreen from "@/screens/ListingScreen"
import { createStackNavigator } from "@react-navigation/stack"


const Stack = createStackNavigator()

export default function FeedNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Listing" component={ListingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ListingDetails" component={ListDetailsScreen} options={{ presentation: 'modal' }} />
        </Stack.Navigator>
    )
}