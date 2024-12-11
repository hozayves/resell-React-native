import React from 'react'
import { Text, StyleSheet } from 'react-native'
import defaultStyles from '@/constants/styles'
import { FormikErrors } from 'formik'

export default function ErrorMessage({ error, visible }: { error: string | number, visible: any }) {
    if (!error || !visible) return null
    return (
        <Text style={[defaultStyles.text, styles.error]}>{error}</Text>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        flex: 0,
        fontSize: 14
    }
})
