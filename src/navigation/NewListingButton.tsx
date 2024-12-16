import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Pressable } from "react-native";


export default function NewListingButton({ onPress }) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" size={30} color={Colors.white} />
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        borderRadius: 40,
        width: 70,
        height: 70,
        bottom: 20,
        marginHorizontal: 'auto',
        borderWidth: 10,
        borderColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    }
})