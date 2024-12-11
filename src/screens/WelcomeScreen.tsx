import Button from "@/components/button";
import { Colors } from "@/constants/Colors";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";


export default function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/images/background.jpg")}
            blurRadius={3}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/images/logo-red.png")} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button text="login" color={Colors.primary} />
                <Button text="register" color={Colors.secondary} />
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        height: "auto",
        paddingHorizontal: 20,
        marginBottom: 20,
        gap: 15
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center',
        gap: 6,
    },
    logo: {
        width: 100,
        height: 100
    },
    tagline: {
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'capitalize'
    }
})