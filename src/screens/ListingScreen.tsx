import * as React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

import Screen from '@/components/Screen'
import Card from '@/components/card'

const initialListings = [
    {
        id: 1,
        title: 'Red jacket for sale!',
        price: 151,
        image: require("../assets/images/jacket.jpg")
    },
    {
        id: 2,
        title: 'Cough in great condition',
        price: 1499,
        image: require("../assets/images/couch.jpg")
    }
]

export default function ListingScreen() {
    const [listings, setListings] = React.useState(initialListings)
    const [refreshing, setRefreshing] = React.useState(false)
    return (
        <Screen>
            <FlatList
                data={listings}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        image={item.image}
                        title={item.title}
                        subTitle={"$" + item.price}
                    />
                }
                refreshing={refreshing}
                onRefresh={() =>
                    setListings([...listings, {
                        id: 3,
                        title: 'Comfort chair for sale!',
                        price: 151,
                        image: require("../assets/images/jacket.jpg")
                    }])}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

})