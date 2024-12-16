import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

export default function CategoryPickerItem({ item, onPress }) {

    return (
        <View style={styles.container}>
            <Pressable onPress={onPress} style={[styles.buttonContainer, { backgroundColor: item.backgroundColor }]}>
                <MaterialCommunityIcons
                    name={item.iconName}
                    style={styles.iconContainer}
                    size={40} />
            </Pressable>
            <Text style={styles.label}>{item.label}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: 'center',
        width: '33%'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50

    },
    iconContainer: {
        width: 40,
        color: 'white'
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})
