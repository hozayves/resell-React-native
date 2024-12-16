import Screen from '@/components/Screen'
import { StatusBar } from 'react-native'
import AuthNavigator from '@/navigation/AuthNavigator'
import MainNavigator from '@/navigation/MainNavigator'


export default function App() {
    return (
        <Screen>
            <StatusBar barStyle="dark-content" />
            <MainNavigator />
        </Screen>
    )
}
