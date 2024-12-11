

import { Colors } from '@/constants/Colors'
import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ListItemDeleteAction({ onPress }: { onPress: () => void }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name='trash-can'
                    size={30}
                    color={Colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 70,
        backgroundColor: Colors.danger,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
