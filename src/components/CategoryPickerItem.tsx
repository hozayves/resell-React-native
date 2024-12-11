import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function CategoryPickerItem({ item, onPress }) {

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                style={styles.iconContainer}
                name={item.iconName}
                backgroundColor={item.backgroundColor}
                size={40} />
            <Text style={styles.label}>{item.label}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '34%'
    },
    iconContainer: {
        borderWidth: 1,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})
