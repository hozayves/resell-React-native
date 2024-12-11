import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import defaultStyles from '@/constants/styles'
export default function PickerItem({ item, numberOfColumns, onPress }) {
    console.log(numberOfColumns)
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[defaultStyles.text, styles.text]}>{item.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: 20,
        paddingVertical: 5
    }
})
