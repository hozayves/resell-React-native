import { Platform } from "react-native"
import { Colors } from "./Colors"

export default {
    Colors,
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        flex: 1,
        color: Colors.dark
    }
}
