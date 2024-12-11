import React from 'react'
import Constants from 'expo-constants'
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import defaultStyles from '@/constants/styles'

export default function Screen({ children }: { children: React.ReactNode }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, backgroundColor: defaultStyles.Colors.white }}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
        paddingHorizontal: 5,

    }
})
