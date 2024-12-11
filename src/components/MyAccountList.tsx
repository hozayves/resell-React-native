
import { Colors } from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type params = {
    icon: keyof typeof MaterialCommunityIcons.glyphMap,
    name: string,
    color?: 'primary' | 'secondary' | 'yellow',
    style?: any
}

export default function MyAccountList({ icon, name, color = "primary", style }: params) {

    return (
        <View style={[styles.listing, style]}>
            <View style={[styles.icon, { backgroundColor: Colors[color] }]}>
                <MaterialCommunityIcons name={icon} size={18} color="white" />
            </View>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listing: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        width: 35,
        height: 35,
        borderRadius: 50
    },
    text: {
        fontSize: 16
    }
})
