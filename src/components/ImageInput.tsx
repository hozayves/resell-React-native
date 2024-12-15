import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import defaultStyles from '@/constants/styles'

export default function ImageInput({ imageUri, onChangeImage }: { imageUri?: any, onChangeImage: any }) {

    useEffect(() => {
        requestPermission()
    }, [])
    const requestPermission = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!result.granted) alert("You need to enable permission to access Media library")
    }

    const imageHandler = () => {
        if (!imageUri) selectImage()
        else Alert.alert("Delete", "Are you sure you want to delete this image?", [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No' }
        ])
    }
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                quality: 0.5
            })
            if (!result.canceled) onChangeImage(result.assets[0].uri)
        } catch (error) {
            console.log("Error reading an image", error)
        }
    }
    return (
        <TouchableWithoutFeedback onPress={imageHandler}>
            <View style={styles.container}>
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
                {!imageUri && <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name='camera' size={40} color={defaultStyles.Colors.medium} />
                </View>}
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        overflow: 'hidden',
        gap: 5
    },
    iconContainer: {
        borderRadius: 10,
        padding: 15,
        backgroundColor: defaultStyles.Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10
    }
})
