import { Colors } from "@/constants/Colors";
import { Image, View, Text, StyleSheet, ImageProps } from "react-native";


export default function Card({ title, subTitle, image }: { title: string, subTitle: string, image: ImageProps }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={image}
            />
            <View style={styles.itemsContainer}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemPrice}>{subTitle}</Text>
            </View>
        </View>
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