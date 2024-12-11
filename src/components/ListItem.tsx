import { Colors } from '@/constants/Colors'
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Image, View, Text, StyleSheet, ImageProps, TouchableHighlight, Animated } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListItem({ image, title, subTitle, style, onPress, renderRightActions }: { image: ImageProps, title: string, subTitle: string, style?: any, onPress: () => void, renderRightActions: any }) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    onPress={onPress}
                    underlayColor={Colors.medium}
                >
                    <View style={[styles.container, style]}>
                        <Image
                            source={image}
                            style={styles.image}
                        />
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>{title}</Text>
                            {subTitle && <Text style={styles.subTitle} numberOfLines={1}>{subTitle}</Text>}
                        </View>
                        <MaterialCommunityIcons name='chevron-right' size={20} color={Colors.medium} />
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
        paddingVertical: 10,
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    titleContainer: {
        gap: 2,
        flex: 1
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 15,
        color: '#c0c0c0'
    }
})
