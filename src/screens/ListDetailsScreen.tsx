
import ListItem from '@/components/ListItem'
import ListItemDeleteAction from '@/components/ListItemDeleteAction'
import { Colors } from '@/constants/Colors'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function ListDetailsScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../assets/images/jacket.jpg")}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Red jacket for sale</Text>
                <Text style={styles.price}>$135</Text>
            </View>
            <ListItem
                title="Yves Muhoza"
                subTitle="5 Listing"
                image={require("../assets/images/mosh.jpg")}
                style={{ marginTop: 5 }}
                onPress={() => console.log("Hi")}
                renderRightActions={() => <ListItemDeleteAction onPress={() => console.log("Delete")} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.white,
    },
    image: {
        width: '100%',
        height: 180
    },
    detailsContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 3
    },
    title: {
        fontWeight: 'semibold',
        fontSize: 18,
    },
    price: {
        color: Colors.secondary,
        fontWeight: 'bold',
        fontSize: 18
    }
})