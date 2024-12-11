
import { Pressable, StyleSheet, Text } from "react-native";
import defaultsStyles from '@/constants/styles'


export default function Button({ color = defaultsStyles.Colors.primary, text, onPress }: { color?: string, text: string, onPress: () => void }) {
    return (
        <Pressable style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 15,
        textTransform: 'uppercase',
        width: '100%',
        textAlign: 'center',
        paddingVertical: 3
    }
})