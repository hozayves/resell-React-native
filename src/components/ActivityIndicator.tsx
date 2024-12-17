import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

export default function ActivityIndicator({ visible = false }) {
    if (!visible) return null
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                loop
                source={require("../assets/animation/animation.json")}
                style={styles.loadingLottie}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingLottie: {
        width: 150,
        height: 150
    }
})