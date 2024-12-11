
import React from 'react'
import { TextInput, View, StyleSheet, Platform, TextInputProps } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '@/constants/styles'

export default function AppTextInput({ icon, ...otherProps }: { icon?: any } & TextInputProps) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.Colors.dark} />}
            <TextInput
                placeholderTextColor={defaultStyles.Colors.medium}
                style={defaultStyles.text} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: defaultStyles.Colors.white,
        borderRadius: 25,
        paddingVertical: 3,
        paddingHorizontal: 15,
        marginVertical: 5,
        gap: 5
    }
})
