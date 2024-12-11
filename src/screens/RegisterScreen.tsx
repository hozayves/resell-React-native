import Button from '@/components/button'
import { AppForm, AppFormField, SubmitButton } from '@/components/forms'
import Screen from '@/components/Screen'
import React from 'react'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name").trim(),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password").trim().min(5).max(10)
})
export default function RegisterScreen() {
    return (
        <Screen>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    icon="account"
                    name='name'
                    placeholder='Name'
                    autoCapitalize='characters'
                    autoComplete='family-name'
                    keyboardType='default'
                    autoCorrect={false}
                />
                <AppFormField
                    icon="email"
                    name='email'
                    placeholder='Email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoComplete='off'
                    keyboardType='email-address'
                />
                <AppFormField
                    icon="lock"
                    name='password'
                    placeholder='Password'
                    autoCapitalize='none'
                    autoComplete='email'
                    autoCorrect={false}
                />
                <SubmitButton text='Register' />
            </AppForm>
        </Screen>
    )
}
