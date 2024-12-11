
import React from 'react'
import * as Yup from 'yup'
import { Image, StyleSheet } from 'react-native'


import Screen from '@/components/Screen'
import { AppForm, AppFormField, SubmitButton } from '@/components/forms'


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {

    return (
        <Screen>
            <Image
                style={styles.logo}
                source={require("../assets/images/logo-red.png")}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    icon="email"
                    placeholder='Email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    name="email"
                />
                <AppFormField
                    icon="lock"
                    placeholder='Password'
                    autoCapitalize='none'
                    autoComplete="off"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType='password'
                    name="password"
                />
                <SubmitButton text="login" />
            </AppForm>
        </Screen>
    )
}
const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 70,
        marginBottom: 50
    }
})
