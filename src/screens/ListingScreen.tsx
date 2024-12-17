import * as React from 'react'
import { FlatList, Text } from 'react-native'

import Screen from '@/components/Screen'
import Card from '@/components/card'
import routes from '@/navigation/routes'
import listingApi from '@/api/listings'
import Button from '@/components/button'
import ActivityIndicator from '@/components/ActivityIndicator'
import useApi from '@/hooks/useApi'


export default function ListingScreen({ navigation }: { navigation: any }) {
    const [refreshing, setRefreshing] = React.useState(false)
    const { request: loadListing, data: listings, error, loading } = useApi(listingApi.getListings)

    React.useEffect(() => {
        loadListing()
    }, [])
    return (
        <Screen>
            {error && <>
                <Text style={{ textAlign: 'center' }}>Couldn't retrieve the listing!</Text>
                <Button text='Retry' onPress={() => loadListing()} />
            </>}
            <ActivityIndicator visible={false} />
            <FlatList
                data={listings}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        imageUrl={item.images[0].url}
                        title={item.title}
                        subTitle={"$" + item.price}
                        onPress={() => navigation.navigate(routes.LISTINGDEDAILS, item)}
                    />
                }
                refreshing={refreshing}
                onRefresh={() => loadListing()}
            />
        </Screen>
    )
}