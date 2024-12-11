import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '@/constants/styles'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import PickerItem from './PickerItem'

export default function AppPickerInput({
    icon,
    items,
    numberOfColumns = 1,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    onSelectedItem }: { icon: any, items: any, numberOfColumns: number, PickerItemComponent?: any, placeholder?: string, selectedItem: any, onSelectedItem: any }) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <GestureHandlerRootView style={{ borderWidth: 1 }}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.Colors.dark} />}
                    {selectedItem
                        ? <Text style={defaultStyles.text}>{selectedItem.label}</Text>
                        : <Text style={[styles.placeholder]}>{placeholder}</Text>
                    }
                    <MaterialCommunityIcons style={icon} name="chevron-down" size={20} color={defaultStyles.Colors.dark} />
                </View>
            </TouchableWithoutFeedback>
            <Modal
                visible={modalVisible}
                animationType='slide'
            >
                <Button title='Close' onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.label}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) =>
                        <PickerItemComponent
                            item={item}
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false)
                                onSelectedItem(item)
                            }}
                        />}
                />
            </Modal>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: defaultStyles.Colors.white,
        borderRadius: 25,
        paddingVertical: 13,
        paddingHorizontal: 15,
        marginVertical: 10,
        gap: 5
    },
    icon: {
        marginRight: 5
    },
    placeholder: {
        color: defaultStyles.Colors.medium,
        flex: 1,
        fontSize: 18
    }
})
