import { Colors } from "@/constants/Colors";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";


export default function Card({ title, subTitle, imageUrl, onPress }: { title: string, subTitle: string, imageUrl: string, onPress: () => void }) {

    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: imageUrl }}
                />
                <View style={styles.itemsContainer}>
                    <Text style={styles.itemTitle}>{title}</Text>
                    <Text style={styles.itemPrice}>{subTitle}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: "90%",
        marginHorizontal: 'auto',
        marginTop: 20,
        gap: 5
    },
    image: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    itemsContainer: {
        padding: 15,
        gap: 5
    },
    itemTitle: {
        fontSize: 17
    },
    itemPrice: {
        color: Colors.secondary,
        fontWeight: 'bold',
        fontSize: 17
    }
})