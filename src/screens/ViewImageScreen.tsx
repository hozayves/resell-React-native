import { Image, Pressable, StyleSheet, View } from "react-native"
import { Colors } from "@/constants/Colors"
import { Ionicons, MaterialIcons } from '@expo/vector-icons'


export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <Pressable>
                    <MaterialIcons name="close" size={30} color="white" />
                </Pressable>
            </View>
            <View style={styles.deleteIcon}>
                <Pressable>
                    <MaterialIcons name="delete" size={30} color="white" />
                </Pressable>
            </View>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require("../assets/images/chair.jpg")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    closeIcon: {
        position: 'absolute',
        top: 15,
        left: 30,
        justifyContent: 'center'
    },
    deleteIcon: {
        position: 'absolute',
        right: 30,
        top: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})