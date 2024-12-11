

import AppPickerInput from '@/components/AppPickerInput'
import AppTextInput from '@/components/AppTextInput'
import Card from '@/components/card'
import Screen from '@/components/Screen'
import ListDetailsScreen from '@/screens/ListDetailsScreen'
import ListingEditScreen from '@/screens/ListingEditScreen'
import ListingScreen from '@/screens/ListingScreen'
import LoginScreen from '@/screens/LoginScreen'
import MessagesScreen from '@/screens/MessagesScreen'
import MyAccount from '@/screens/MyAccount'
import RegisterScreen from '@/screens/RegisterScreen'
import ViewImageScreen from '@/screens/ViewImageScreen'
import WelcomeScreen from '@/screens/WelcomeScreen'
import { useState } from 'react'
import { StatusBar } from 'react-native'


const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Cameras', value: 3 }
]

export default function App() {
    const [category, setCategory] = useState(categories[0])

    return (
        <Screen>
            <StatusBar barStyle="dark-content" />
            <ListingEditScreen />
        </Screen>
    )
}
