

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
import { useEffect, useState } from 'react'
import { Image, StatusBar } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permission from 'expo-permissions'
import Button from '@/components/button'
import ImageInput from '@/components/ImageInput'
import { createIconSetFromFontello } from '@expo/vector-icons'
import ImageInputList from '@/components/ImageInputList'

export default function App() {
    const [imageUris, setImageUris] = useState([])

    const handleAdd = (uri) => {
        setImageUris([...imageUris, uri])
    }
    const handleRemove = (uri) => {
        setImageUris(imageUris.filter(image => image !== uri));
    }

    return (
        <Screen>
            <StatusBar barStyle="dark-content" />
            <ListingEditScreen />
        </Screen>
    )
}
