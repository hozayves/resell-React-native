import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import ImageInput from './ImageInput'

export default function ImageInputList(
    {
        imageUris = [],
        onRemoveImage,
        onAddImage

    }: { imageUris: string[], onRemoveImage: (args: any) => void, onAddImage: (args: any) => void }) {

    const scrollRef = useRef()

    return (
        <View>
            <ScrollView ref={scrollRef} horizontal onContentSizeChange={() => scrollRef.current && scrollRef.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris.map(uri =>

                        <ImageInput
                            key={uri}
                            imageUri={uri}
                            onChangeImage={() => onRemoveImage(uri)}
                        />
                    )}
                    <ImageInput onChangeImage={uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
})