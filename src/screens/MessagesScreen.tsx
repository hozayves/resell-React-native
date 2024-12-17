import ListItem from '@/components/ListItem'
import ListItemDeleteAction from '@/components/ListItemDeleteAction'
import ListItemSeparator from '@/components/ListItemSeparator'
import { useState } from 'react'

import { FlatList, View } from 'react-native'

const initialMessage = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
        image: require('../assets/images/yves.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/images/yves.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/images/yves.jpg')
    }
]

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessage)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = (message: any) => {
        const newMessage = messages.filter(m => m.id !== message.id)

        setMessages(newMessage)
    }
    return (
        <FlatList
            data={messages}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message selected!", item)}
                    renderRightActions={() => (<ListItemDeleteAction onPress={() => handleDelete(item)} />)}
                />
            }
            ItemSeparatorComponent={() => <ListItemSeparator />}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([...messages, {
                    id: 4,
                    title: 'T4',
                    description: 'D4',
                    image: require('../assets/images/mosh.jpg')
                }])
            }}
        />
    )
}
