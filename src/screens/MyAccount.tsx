import ListItem from '@/components/ListItem'
import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import MyAccountList from '@/components/MyAccountList'
import { MyAccountNavs } from '@/constants/MyAccountNavs'
import { Colors } from '@/constants/Colors'

export default function MyAccount() {
    return (
        <View style={styles.profileContainer}>
            <ListItem
                image={require("../assets/images/mosh.jpg")}
                title='Yves Muhoza'
                subTitle='muhozayves2014@gmail.com'
                style={{ marginTop: 10, marginBottom: 40, }}
            />
            <MyAccountList
                icon={MyAccountNavs[0].icon as "symbol" | "function" | "head" | "link" | "email" | "image" | "text" | "alert" | "menu" | "radio" | "switch" | "tab" | "timer" | "forward" | "minus" | "plus" | "exclamation" | "check" | "blank"}
                name={MyAccountNavs[0].name}
                color={MyAccountNavs[0].color as "primary" | "secondary" | "yellow"}
            />
            <MyAccountList
                icon={MyAccountNavs[1].icon as "symbol" | "function" | "head" | "link" | "email" | "image" | "text" | "alert" | "menu" | "radio" | "switch" | "tab" | "timer" | "forward" | "minus" | "plus" | "exclamation" | "check" | "blank"}
                name={MyAccountNavs[1].name}
                color={MyAccountNavs[1].color as "primary" | "secondary" | "yellow"}
            />
            <MyAccountList
                icon={MyAccountNavs[2].icon as "symbol" | "function" | "head" | "link" | "email" | "image" | "text" | "alert" | "menu" | "radio" | "switch" | "tab" | "timer" | "forward" | "minus" | "plus" | "exclamation" | "check" | "blank"}
                name={MyAccountNavs[2].name}
                color={MyAccountNavs[2].color as "primary" | "secondary" | "yellow"}
                style={{ marginTop: 25 }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    profileContainer: {
        width: '100%',
        flex: 1,
        paddingVertical: 5,
        backgroundColor: Colors.lightGray
    }
})
